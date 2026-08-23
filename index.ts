// supabase/functions/auto-rate-tags/index.ts
//
// Auto-generates ratings for TAGGED shows only — untagged videos are left
// alone (no rating from this bot) since there's nothing to score them on.
// Pure arithmetic from your own tags + the existing yt-heatmap function.
// No AI/vision calls, no video download — this is a $0 pipeline.
//
// Writes into the same `ratings` table real users write into, as a single
// dedicated bot account, using the exact same packing format submitRating()
// in index.html uses (production = overall*10+visual, promo_storyline =
// promo*100+sound*10+promo2, match_quality/roster_talent raw 1-5).
//
// Schedule with pg_cron + pg_net — see cron.sql in this folder.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const HEATMAP_FN_URL = `${SUPABASE_URL}/functions/v1/yt-heatmap`;

const BOT_USERNAME = "efed_quality_bot";
const BATCH_LIMIT = 50; // videos processed per run, oldest-untagged-first not needed since we just re-scan

// Legacy tag names → current display name (mirrors remapTag() in index.html)
const TAG_REMAP: Record<string, string> = {
  "In-Game Only": "Full-Capture",
  Commentary: "Custom Commentary",
  "Original Commentary": "Custom Commentary",
};
const norm = (t: string) => TAG_REMAP[t] || t;

const VIBE_TAGS = ["Hype", "Funny", "Relaxed", "Fresh", "Loud"];
const STIP_TAGS = [
  "Cage", "Ladder", "Elimination Chamber", "Money in the Bank", "Hardcore",
  "Inferno", "Ambulance", "Falls Count Anywhere", "First-Blood", "I Quit",
  "Submission", "Parking Lot Brawl",
];

const clamp = (v: number) => Math.min(5, Math.max(1, Math.round(v)));

function scoreVideo(tags: string[], hasHeatmapPeak: boolean) {
  const has = (t: string) => tags.includes(t);
  const hasAny = (arr: string[]) => arr.some((t) => tags.includes(t));

  const comboLowEffort = has("In-Game Commentary") && has("Full-Capture") && has("AI vs AI");

  // production — video/editing effort
  let production = 3;
  if (has("Full-Capture")) production -= 1;
  if (has("Cinematic")) production += 1;
  if (has("Story Heavy")) production += 0.5;
  if (has("Signature Video")) production += 0.5;
  if (has("Entrance Video")) production += 0.5;
  if (has("Custom Announcement")) production += 0.5;
  if (has("HLR")) production += 1.5;
  if (has("Gritty")) production += 0.5;
  if (comboLowEffort) production -= 1; // stacking penalty for doing nothing on any front

  // sound — commentary effort
  let sound = 3;
  if (has("Custom Commentary")) sound += 1;
  if (has("AI Commentary")) sound += 1; // effort, not a shortcut — same tier as custom
  if (has("Silent Commentary")) sound += 0.5;
  if (has("In-Game Commentary")) sound -= 1;
  if (hasAny(VIBE_TAGS)) sound += 0.5;

  // roster — CAW vs default game roster
  let roster = 3;
  if (has("WWE Characters")) roster -= 1.5;

  // promo / promo2 — presence-based
  let promo = 3;
  if (has("Promo")) promo += 1;
  let promo2 = 3;
  if (has("Backstage")) promo2 += 1;

  // match — booking stakes/craft + a soft nudge from real replay activity
  let match = 3;
  if (has("HLR")) match += 1.5;
  if (has("Championship")) match += 0.5;
  if (has("Main Event")) match += 0.5;
  if (hasAny(STIP_TAGS)) match += 1;
  if (has("Pure Wrestling")) match += 0.5;
  if (has("Refresher")) match -= 0.5;
  if (has("Opener")) match -= 0.5;
  if (has("DQ") || has("Count-Out")) match -= 0.5;
  if (hasHeatmapPeak) match += 0.5;

  production = clamp(production);
  sound = clamp(sound);
  roster = clamp(roster);
  promo = clamp(promo);
  promo2 = clamp(promo2);
  match = clamp(match);

  // "overall" star category — aggregate impression of the other 6
  const overallStar = clamp((production + sound + roster + promo + promo2 + match) / 6);

  // Same weighted formula submitRating() uses, so the bot's row blends into
  // the real average the same way a human rating would.
  const weighted = parseFloat(
    ((overallStar * 20 + match * 20 + promo2 * 15 + roster * 15 + production * 10 + sound * 10 + promo * 10) / 100).toFixed(2)
  );

  const packedProd = overallStar * 10 + production; // production col: overall*10 + visual
  const packedPromo = promo * 100 + sound * 10 + promo2; // promo_storyline col

  return {
    overall: weighted,
    production: packedProd,
    promo_storyline: packedPromo,
    match_quality: match,
    roster_talent: roster,
  };
}

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

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

Deno.serve(async (_req) => {
  const log: string[] = [];
  try {
    // 1. Ensure the bot account exists
    const { data: existingBot } = await sb.from("users").select("username").eq("username", BOT_USERNAME).maybeSingle();
    if (!existingBot) {
      const { error: userErr } = await sb.from("users").insert({
        username: BOT_USERNAME,
        display_name: "eFed Quality Bot",
        joined_at: Date.now(),
        is_efed_owner: false,
        promo_name: null,
        role: "member",
        is_bot: true,
      });
      if (userErr) throw userErr;
      log.push(`Created bot account ${BOT_USERNAME}.`);
    }

    // 2. Approved submissions that have tags — this bot only rates tagged shows
    const { data: submissions, error: subErr } = await sb
      .from("submissions")
      .select("url,video_id,tags")
      .eq("status", "approved")
      .not("tags", "is", null)
      .limit(BATCH_LIMIT);
    if (subErr) throw subErr;

    const candidates = (submissions || [])
      .map((r) => ({ ...r, _id: r.video_id || extractVideoId(r.url), _tags: Array.isArray(r.tags) ? r.tags.map(norm) : [] }))
      .filter((r) => r._id && r._tags.length > 0);

    log.push(`${candidates.length} tagged approved video(s) found.`);
    if (!candidates.length) return json({ ok: true, log, rated: 0 });

    // 3. Heatmap check (reused from the shorts pipeline) — soft signal for `match`
    const heatRes = await fetch(HEATMAP_FN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
      },
      body: JSON.stringify({ videoIds: candidates.map((c) => c._id) }),
    });
    const heatmap = heatRes.ok ? (await heatRes.json()).results || {} : {};
    if (!heatRes.ok) log.push(`Heatmap check failed (${heatRes.status}) — continuing without it.`);

    // 4. Score + upsert one bot rating row per tagged video
    let rated = 0;
    for (const c of candidates) {
      const hasHeatmapPeak = !!heatmap[c._id]?.hasHeatmap;
      const scores = scoreVideo(c._tags, hasHeatmapPeak);

      const { data: existingRating } = await sb
        .from("ratings")
        .select("username")
        .eq("username", BOT_USERNAME)
        .eq("video_id", c._id)
        .maybeSingle();

      if (existingRating) {
        const { error } = await sb.from("ratings").update(scores).eq("username", BOT_USERNAME).eq("video_id", c._id);
        if (error) throw error;
      } else {
        const { error } = await sb.from("ratings").insert({
          username: BOT_USERNAME,
          video_url: c.url,
          video_id: c._id,
          created_at: Date.now(),
          ...scores,
        });
        if (error) throw error;
      }
      rated++;
    }

    log.push(`Rated ${rated} video(s).`);
    return json({ ok: true, log, rated });
  } catch (e) {
    log.push(`Error: ${e.message}`);
    return json({ ok: false, log, error: e.message }, 500);
  }
});
