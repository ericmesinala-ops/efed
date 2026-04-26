// api/og.js — Dynamic Open Graph card for EFED Streaming Hub profile pages

const SUPABASE_URL = 'https://osbarvhklizidsffytye.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zYmFydmhrbGl6aWRzZmZ5dHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjQ4MzksImV4cCI6MjA4ODg0MDgzOX0.c9EDHCFY50VzSTmz0EUTq1XrX0AvJdynFPxIWT5K7JM';
const SITE_URL  = 'https://efed-stream.vercel.app';
const SITE_NAME = 'EFED Streaming Hub';

const CRAWLER_RE = /twitterbot|facebookexternalhit|discordbot|linkedinbot|slackbot|whatsapp|telegrambot|applebot|googlebot|bingbot|embedly|outbrain|quora/i;

function isCrawler(ua = '') {
  return CRAWLER_RE.test(ua);
}

function buildCardSvg({ displayName, username, avatarUrl, efedName } = {}) {
  const name     = (displayName || username || 'Wrestler').toUpperCase();
  const handle   = username ? '@' + username : '';
  const efed     = efedName ? efedName.toUpperCase() : '';
  const initial  = (displayName || username || '?')[0].toUpperCase();
  const fontSize = name.length > 18 ? 62 : name.length > 12 ? 80 : 96;

  const avatarSection = avatarUrl
    ? `<clipPath id="av"><circle cx="960" cy="315" r="185"/></clipPath>
       <image href="${avatarUrl}" x="775" y="130" width="370" height="370" clip-path="url(#av)" preserveAspectRatio="xMidYMid slice"/>
       <circle cx="960" cy="315" r="185" fill="none" stroke="#c8a84b" stroke-width="3" stroke-opacity="0.6"/>`
    : `<circle cx="960" cy="315" r="185" fill="rgba(255,255,255,0.04)" stroke="#c8a84b" stroke-width="2" stroke-opacity="0.4"/>
       <text x="960" y="370" font-family="Arial Black,Arial" font-size="160" fill="rgba(255,255,255,0.55)" text-anchor="middle">${initial}</text>`;

  const nameY   = efed ? 230 : 270;
  const efedY   = 278;
  const handleY = efed ? 348 : 330;
  const lineY   = handleY + 28;
  const siteY   = lineY + 50;

  const efedBadge = efed
    ? `<rect x="80" y="${efedY - 28}" width="${Math.min(efed.length * 15 + 36, 500)}" height="40" rx="6" fill="rgba(200,168,75,0.12)" stroke="#c8a84b" stroke-width="1" stroke-opacity="0.5"/>
       <text x="98" y="${efedY}" font-family="Arial,sans-serif" font-weight="700" font-size="21" fill="#c8a84b" letter-spacing="3">${efed}</text>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c0000e" stop-opacity="0.10"/>
      <stop offset="60%" stop-color="#07070a" stop-opacity="0"/>
      <stop offset="100%" stop-color="#c8a84b" stop-opacity="0.07"/>
    </linearGradient>
    ${avatarUrl ? '<clipPath id="av"><circle cx="960" cy="315" r="185"/></clipPath>' : ''}
  </defs>
  <rect width="1200" height="630" fill="#07070a"/>
  <rect width="1200" height="630" fill="url(#grad)"/>
  <rect x="0" y="0" width="5" height="630" fill="#c0000e"/>
  ${avatarSection}
  <text x="80" y="${nameY}" font-family="Arial Black,Arial" font-weight="900" font-size="${fontSize}" fill="#ffffff" letter-spacing="4">${name}</text>
  ${efedBadge}
  <text x="80" y="${handleY}" font-family="Arial,sans-serif" font-size="27" fill="rgba(255,255,255,0.3)">${handle}</text>
  <rect x="80" y="${lineY}" width="72" height="3" fill="#c0000e"/>
  <text x="80" y="${siteY}" font-family="Arial,sans-serif" font-size="20" fill="rgba(255,255,255,0.18)" letter-spacing="4">${SITE_NAME.toUpperCase()}</text>
</svg>`;
}

function buildFallbackSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#07070a"/><stop offset="100%" stop-color="#111114"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="0" width="5" height="630" fill="#c0000e"/>
  <ellipse cx="160" cy="315" rx="380" ry="280" fill="#c0000e" fill-opacity="0.07"/>
  <text x="80" y="290" font-family="Arial Black,Arial" font-weight="900" font-size="110" fill="#ffffff" letter-spacing="10">EFED</text>
  <text x="80" y="368" font-family="Arial,sans-serif" font-size="44" fill="#c8a84b" letter-spacing="7">STREAMING HUB</text>
  <rect x="80" y="398" width="100" height="3" fill="#c0000e"/>
  <text x="80" y="452" font-family="Arial,sans-serif" font-size="26" fill="rgba(255,255,255,0.35)">The home of eFed wrestling</text>
</svg>`;
}

function esc(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
}

function buildHtml({ title, description, imageUrl, pageUrl }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:type" content="profile">
<meta property="og:site_name" content="${esc(SITE_NAME)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${esc(imageUrl)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${esc(pageUrl)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(imageUrl)}">
<meta http-equiv="refresh" content="0; url=${esc(pageUrl)}">
<script>window.location.replace(${JSON.stringify(pageUrl)});</script>
</head><body></body></html>`;
}

export default async function handler(req, res) {
  try {
    const ua       = req.headers['user-agent'] || '';
    const fullUrl  = new URL(req.url, SITE_URL);
    const username = (fullUrl.searchParams.get('u') || '').trim().toLowerCase();
    const isImg    = fullUrl.searchParams.get('_img') === '1';

    // ── Image endpoint: /api/og?_img=1&u=username ──
    // Serves the SVG card directly so og:image points to a real https:// URL
    if (isImg) {
      let svg;
      if (username) {
        const sbRes = await fetch(
          `${SUPABASE_URL}/rest/v1/users?username=eq.${encodeURIComponent(username)}&select=display_name,avatar_url,promo_name&limit=1`,
          { headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY } }
        );
        let user = null;
        if (sbRes.ok) { const rows = await sbRes.json(); user = rows[0] || null; }
        svg = buildCardSvg({
          displayName: user?.display_name || username,
          username,
          avatarUrl:   user?.avatar_url   || null,
          efedName:    user?.promo_name   || null,
        });
      } else {
        svg = buildFallbackSvg();
      }
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=60');
      return res.status(200).send(svg);
    }

    // ── Real browsers: redirect to the actual profile page ──
    if (!isCrawler(ua)) {
      const dest = username
        ? `${SITE_URL}/profile.html?u=${encodeURIComponent(username)}`
        : SITE_URL;
      res.setHeader('Location', dest);
      return res.status(302).end();
    }

    // ── Crawlers: fetch user and serve OG HTML ──
    let user = null;
    if (username) {
      const sbRes = await fetch(
        `${SUPABASE_URL}/rest/v1/users?username=eq.${encodeURIComponent(username)}&select=display_name,avatar_url,promo_name,bio&limit=1`,
        { headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY } }
      );
      if (sbRes.ok) { const rows = await sbRes.json(); user = rows[0] || null; }
    }

    const displayName = user?.display_name || username || SITE_NAME;
    const efedName    = user?.promo_name   || null;
    const bio         = user?.bio          || null;

    const title = username
      ? `${displayName} — ${SITE_NAME}`
      : SITE_NAME;

    const description = bio
      ? bio.slice(0, 140) + (bio.length > 140 ? '…' : '')
      : efedName
        ? `${displayName} competes in ${efedName}. View their profile on ${SITE_NAME}.`
        : username
          ? `View ${displayName}'s profile on ${SITE_NAME}.`
          : 'The home of eFed wrestling. Watch matches, track careers, and connect with the community.';

    const pageUrl  = username
      ? `${SITE_URL}/profile.html?u=${encodeURIComponent(username)}`
      : SITE_URL;

    // Image URL points back to THIS function with ?_img=1 — a real https:// URL X/Discord accept
    const imageUrl = username
      ? `${SITE_URL}/api/og?_img=1&u=${encodeURIComponent(username)}`
      : `${SITE_URL}/api/og?_img=1`;

    const html = buildHtml({ title, description, imageUrl, pageUrl });

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=60');
    return res.status(200).send(html);

  } catch (err) {
    console.error('og.js error:', err);
    res.setHeader('Location', SITE_URL);
    return res.status(302).end();
  }
}
