// api/twitch-poll.js
// Vercel Serverless Function — auto-posts/removes Twitch live streams
// Called by Vercel Cron every 5 minutes (see vercel.json)

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;
const CRON_SECRET = process.env.CRON_SECRET;

const SB_HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': 'Bearer ' + SUPABASE_KEY,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

async function sbGet(table, query) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}`, { headers: SB_HEADERS });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function sbInsert(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST', headers: SB_HEADERS, body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  const txt = await res.text();
  return txt ? JSON.parse(txt) : [];
}

async function sbDelete(table, query) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}`, {
    method: 'DELETE', headers: { ...SB_HEADERS, 'Prefer': '' }
  });
  if (!res.ok) throw new Error(await res.text());
}

async function getTwitchToken() {
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    { method: 'POST' }
  );
  if (!res.ok) throw new Error('Twitch token failed: ' + await res.text());
  const data = await res.json();
  return data.access_token;
}

async function getLiveStreams(channels, token) {
  if (!channels.length) return [];
  const batches = [];
  for (let i = 0; i < channels.length; i += 100) batches.push(channels.slice(i, i + 100));
  const liveChannels = [];
  for (const batch of batches) {
    const params = batch.map(c => `user_login=${encodeURIComponent(c)}`).join('&');
    const res = await fetch(`https://api.twitch.tv/helix/streams?${params}`, {
      headers: { 'Client-Id': TWITCH_CLIENT_ID, 'Authorization': 'Bearer ' + token }
    });
    if (!res.ok) continue;
    const data = await res.json();
    for (const stream of (data.data || [])) {
      liveChannels.push({
        channel: stream.user_login.toLowerCase(),
        displayName: stream.user_name,
        title: stream.title,
        thumb: stream.thumbnail_url
          ? stream.thumbnail_url.replace('{width}', '320').replace('{height}', '180')
          : `https://static-cdn.jtvnw.net/previews-ttv/live_user_${stream.user_login}-320x180.jpg`
      });
    }
  }
  return liveChannels;
}

export default async function handler(req, res) {
  const authHeader = req.headers['authorization'];
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const users = await sbGet('users', 'twitch_channel=not.is.null&select=username,display_name,twitch_channel');
    if (!users.length) return res.status(200).json({ message: 'No Twitch users registered' });

    const channelMap = {};
    for (const u of users) {
      const ch = (u.twitch_channel || '').replace('twitch.tv/','').replace('@','').toLowerCase().trim();
      if (ch) channelMap[ch] = u;
    }
    const channels = Object.keys(channelMap);
    if (!channels.length) return res.status(200).json({ message: 'No valid Twitch channels' });

    const token = await getTwitchToken();
    const liveStreams = await getLiveStreams(channels, token);
    const liveChannelNames = new Set(liveStreams.map(s => s.channel));
    const results = { posted: [], removed: [], skipped: [] };

    for (const [channel, user] of Object.entries(channelMap)) {
      const liveUrl = `https://www.twitch.tv/${channel}`;
      const isLive = liveChannelNames.has(channel);
      const stream = liveStreams.find(s => s.channel === channel);
      const existing = await sbGet('submissions',
        `url=eq.${encodeURIComponent(liveUrl)}&submitted_by=eq.${encodeURIComponent(user.username)}&status=eq.approved`
      );
      const alreadyPosted = existing.length > 0;

      if (isLive && !alreadyPosted) {
        const displayName = user.display_name || user.username;
        const title = stream?.title
          ? `🔴 ${displayName} — ${stream.title}`
          : `🔴 ${displayName} is LIVE on Twitch`;
        await sbInsert('submissions', {
          url: liveUrl,
          show_name: title,
          efed: displayName,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          date_ms: Date.now(),
          submitted_by: user.username,
          submitted_at: Date.now(),
          community: true,
          status: 'approved',
          thumb_url: stream?.thumb || `https://static-cdn.jtvnw.net/previews-ttv/live_user_${channel}-320x180.jpg`
        });
        results.posted.push(channel);
      } else if (!isLive && alreadyPosted) {
        await sbDelete('submissions',
          `url=eq.${encodeURIComponent(liveUrl)}&submitted_by=eq.${encodeURIComponent(user.username)}`
        );
        results.removed.push(channel);
      } else {
        results.skipped.push(channel);
      }
    }

    return res.status(200).json({ success: true, ...results });
  } catch (err) {
    console.error('Twitch poll error:', err);
    return res.status(500).json({ error: err.message });
  }
}
