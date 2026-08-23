// supabase/functions/auto-shorts/index.ts
//
// Scheduled bot that auto-populates shorts_pool from approved videos,
// ranked by a blended popularity score (total engagement + recent
// trending velocity), then checked against YouTube's Most Replayed
// heatmap (via the existing yt-heatmap function) for a peak clip
// timestamp. Qualifying videos are inserted directly — no admin review,
// no daily cap. Dedupe happens naturally: a video already in shorts_pool
// is never re-considered.
//
// There's no stored YouTube view count anywhere in this app, so
// "popular" is built from in-platform signals instead: likes, comments,
// bookmarks, and watch_time rows, each keyed by video_id.
//
// Schedule this with pg_cron + pg_net — see cron.sql in this folder.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const HEATMAP_FN_URL = `${SUPABASE_URL}/functions/v1/yt-heatmap`;

// --- Tunables ---------------------------------------------------------
// Floor: total weighted engagement a video needs before it's even
// considered. Without this, a video with zero engagement but a lucky
// heatmap hit would get a Short — not what "popular" should mean.
const MIN_ENGAGEMENT = 3;

// "Recent" window used for the trending-velocity half of the score.
const TRENDING_WINDOW_HOURS = 48;

// Only spend YouTube heatmap-scrape calls on the top-N ranked
// candidates per run, not the entire candidate list.
const HEATMAP_CHECK_LIMIT = 25;

const CLIP_LEN_SECONDS = 20;

// Comments/bookmarks signal stronger intent than a like; watch_time
// rows count too but lightly, since bots/users log a watch_time row
// for nearly anything they open.
const WEIGHTS = { like: 1, comment: 3, bookmark: 2, watch: 0.5 };

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

function extractVideoId(url: string): string | null {
  const m = (url || "").match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/
  );
  return m ? m[1] : null;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

Deno.serve(async (_req) => {
  const log: string[] = [];
  try {
    // 1. Approved videos with no shorts_pool entry yet
    const { data: submissions, error: subErr } = await sb
      .from("submissions")
      .select("url,video_id,show_name,efed,date")
      .eq("status", "approved");
    if (subErr) throw subErr;

    const { data: pool, error: poolErr } = await sb.from("shorts_pool").select("video_id");
    if (poolErr) throw poolErr;
    const inPool = new Set((pool || []).map((r) => r.video_id));

    const candidates = (submissions || [])
      .map((r) => ({ ...r, _id: r.video_id || extractVideoId(r.url) }))
      .filter((r) => r._id && !inPool.has(r._id));

    log.push(`${candidates.length} approved video(s) with no Short yet.`);
    if (!candidates.length) return json({ ok: true, log, inserted: 0 });

    // 2. Pull engagement rows for all candidates, one query per table
    const ids = candidates.map((c) => c._id);
    const since = new Date(Date.now() - TRENDING_WINDOW_HOURS * 3600 * 1000).toISOString();

    const [likes, comments, bookmarks, watch] = await Promise.all([
      sb.from("likes").select("video_id,liked_at").in("video_id", ids),
      sb.from("comments").select("video_id,created_at").in("video_id", ids).eq("removed", false),
      sb.from("bookmarks").select("video_id,saved_at").in("video_id", ids),
      sb.from("watch_time").select("video_id").in("video_id", ids),
    ]);
    if (likes.error) throw likes.error;
    if (comments.error) throw comments.error;
    if (bookmarks.error) throw bookmarks.error;
    if (watch.error) throw watch.error;

    // 3. Score each candidate — half raw volume, half recent-trending share
    const scores = new Map<string, { total: number; recent: number }>();
    const bump = (id: string, weight: number, ts: string | null | undefined) => {
      const s = scores.get(id) || { total: 0, recent: 0 };
      s.total += weight;
      if (ts && ts >= since) s.recent += weight;
      scores.set(id, s);
    };
    for (const r of likes.data || []) bump(r.video_id, WEIGHTS.like, r.liked_at);
    for (const r of comments.data || []) bump(r.video_id, WEIGHTS.comment, r.created_at);
    for (const r of bookmarks.data || []) bump(r.video_id, WEIGHTS.bookmark, r.saved_at);
    for (const r of watch.data || []) bump(r.video_id, WEIGHTS.watch, null);

    const ranked = candidates
      .map((c) => {
        const s = scores.get(c._id) || { total: 0, recent: 0 };
        const score = s.total * 0.5 + s.recent * 0.5;
        return { ...c, _score: score, _total: s.total };
      })
      .filter((c) => c._total >= MIN_ENGAGEMENT)
      .sort((a, b) => b._score - a._score);

    log.push(`${ranked.length} candidate(s) clear the ${MIN_ENGAGEMENT}-engagement floor.`);
    if (!ranked.length) return json({ ok: true, log, inserted: 0 });

    // 4. Only spend heatmap scrape calls on the top-ranked slice
    const toCheck = ranked.slice(0, HEATMAP_CHECK_LIMIT);
    const heatRes = await fetch(HEATMAP_FN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
      },
      body: JSON.stringify({ videoIds: toCheck.map((c) => c._id) }),
    });
    if (!heatRes.ok) throw new Error(`yt-heatmap returned ${heatRes.status}`);
    const heatData = await heatRes.json();
    const heatmap = heatData.results || {};

    // 5. Insert every qualifying video — no daily cap. Dedupe is handled
    //    by the shorts_pool lookup above, so re-runs never double-insert.
    const rowsToInsert = [];
    for (const c of toCheck) {
      const h = heatmap[c._id];
      if (!h || !h.hasHeatmap) continue;
      rowsToInsert.push({
        video_id: c._id,
        video_url: c.url,
        clip_start: h.peakSeconds,
        clip_len: CLIP_LEN_SECONDS,
        caption: "",
        added_by: "bot",
        added_at: Date.now(),
      });
    }

    if (rowsToInsert.length) {
      const { error: insErr } = await sb.from("shorts_pool").insert(rowsToInsert);
      if (insErr) throw insErr;
    }
    log.push(`Inserted ${rowsToInsert.length} new Short(s).`);

    return json({
      ok: true,
      log,
      inserted: rowsToInsert.length,
      video_ids: rowsToInsert.map((r) => r.video_id),
    });
  } catch (e) {
    log.push(`Error: ${e.message}`);
    return json({ ok: false, log, error: e.message }, 500);
  }
});
