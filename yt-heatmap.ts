// Supabase Edge Function: yt-heatmap
//
// Fetches YouTube's "Most Replayed" heatmap for a batch of video IDs. This
// data isn't in any public API — it's embedded in the watch page's HTML —
// so it has to be scraped server-side (CORS blocks fetching youtube.com
// directly from browser JS, which is why this can't live in admin.html).
//
// POST body: { "videoIds": ["abc12345678", ...] }
// Response:  { "results": { "abc12345678": { "hasHeatmap": true, "peakSeconds": 187 }, ... } }
//
// Deploy: paste this into Supabase Dashboard → Edge Functions → New Function
// (name it "yt-heatmap"), or via CLI:
//   supabase functions new yt-heatmap
//   # replace the generated index.ts with this file
//   supabase functions deploy yt-heatmap --no-verify-jwt

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function getHeatmapForVideo(id: string): Promise<{ hasHeatmap: boolean; peakSeconds?: number }> {
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    if (!res.ok) return { hasHeatmap: false };
    const html = await res.text();

    // The heatmap markers live deep inside ytInitialData under the player
    // response, but that structure shifts between YouTube versions. The
    // "heatMarkers" key itself is stable, so pull it directly out of the
    // raw HTML instead of parsing the whole ytInitialData tree.
    const heatMatch = html.match(/"heatMarkers":(\[.*?\])(?=,"heatMarkersDecorations")/s);
    if (!heatMatch) return { hasHeatmap: false };

    let markers: any[];
    try {
      markers = JSON.parse(heatMatch[1]);
    } catch {
      return { hasHeatmap: false };
    }
    if (!Array.isArray(markers) || !markers.length) return { hasHeatmap: false };

    // Each marker: { heatMarkerRenderer: { timeRangeStartMillis, intensityScoreNormalized } }
    let best: { intensity: number; startMillis: number } | null = null;
    for (const m of markers) {
      const r = m?.heatMarkerRenderer;
      if (!r) continue;
      const intensity = r.intensityScoreNormalized ?? 0;
      if (!best || intensity > best.intensity) {
        best = { intensity, startMillis: r.timeRangeStartMillis ?? 0 };
      }
    }
    if (!best) return { hasHeatmap: false };
    return { hasHeatmap: true, peakSeconds: Math.floor(best.startMillis / 1000) };
  } catch {
    return { hasHeatmap: false };
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { videoIds } = await req.json();
    if (!Array.isArray(videoIds) || !videoIds.length) {
      return new Response(JSON.stringify({ error: "videoIds array required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const results: Record<string, { hasHeatmap: boolean; peakSeconds?: number }> = {};

    // Limited concurrency so we don't hammer YouTube or blow the function's timeout
    const CONCURRENCY = 5;
    let i = 0;
    async function worker() {
      while (i < videoIds.length) {
        const idx = i++;
        const id = videoIds[idx];
        results[id] = await getHeatmapForVideo(id);
      }
    }
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, videoIds.length) }, worker));

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
