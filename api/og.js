// api/og.js — Dynamic Open Graph card for EFED Streaming Hub
// No external fetch — reads display name from ?n= param passed by the share button

const SITE_URL  = 'https://efed-stream.vercel.app';
const SITE_NAME = 'EFED Streaming Hub';

const CRAWLER_RE = /twitterbot|facebookexternalhit|discordbot|linkedinbot|slackbot|whatsapp|telegrambot|applebot|googlebot|bingbot|embedly|outbrain|quora/i;

function buildCardSvg(displayName, username) {
  const name    = (displayName || username || 'Wrestler').toUpperCase();
  const handle  = username ? '@' + username : '';
  const initial = (displayName || username || '?')[0].toUpperCase();
  const fontSize = name.length > 18 ? 60 : name.length > 12 ? 78 : 94;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c0000e" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#c8a84b" stop-opacity="0.08"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#07070a"/>
  <rect width="1200" height="630" fill="url(#grad)"/>
  <rect x="0" y="0" width="6" height="630" fill="#c0000e"/>
  <circle cx="960" cy="315" r="185" fill="rgba(255,255,255,0.04)" stroke="#c8a84b" stroke-width="2" stroke-opacity="0.35"/>
  <text x="960" y="375" font-family="Arial Black,Arial" font-size="160" fill="rgba(255,255,255,0.55)" text-anchor="middle">${initial}</text>
  <text x="80" y="270" font-family="Arial Black,Arial" font-weight="900" font-size="${fontSize}" fill="#ffffff" letter-spacing="4">${name}</text>
  <text x="80" y="328" font-family="Arial,sans-serif" font-size="26" fill="rgba(255,255,255,0.28)">${handle}</text>
  <rect x="80" y="358" width="72" height="3" fill="#c0000e"/>
  <text x="80" y="410" font-family="Arial,sans-serif" font-size="22" fill="rgba(255,255,255,0.18)" letter-spacing="4">EFED STREAMING HUB</text>
  <text x="80" y="446" font-family="Arial,sans-serif" font-size="19" fill="rgba(255,255,255,0.10)" letter-spacing="2">efed-stream.vercel.app</text>
</svg>`;
}

function buildFallbackSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#07070a"/><stop offset="100%" stop-color="#111114"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="0" width="6" height="630" fill="#c0000e"/>
  <ellipse cx="180" cy="315" rx="380" ry="260" fill="#c0000e" fill-opacity="0.07"/>
  <text x="80" y="290" font-family="Arial Black,Arial" font-weight="900" font-size="110" fill="#ffffff" letter-spacing="10">EFED</text>
  <text x="80" y="368" font-family="Arial,sans-serif" font-size="44" fill="#c8a84b" letter-spacing="7">STREAMING HUB</text>
  <rect x="80" y="400" width="100" height="3" fill="#c0000e"/>
  <text x="80" y="455" font-family="Arial,sans-serif" font-size="26" fill="rgba(255,255,255,0.35)">The home of eFed wrestling</text>
  <text x="80" y="490" font-family="Arial,sans-serif" font-size="20" fill="rgba(255,255,255,0.15)">efed-stream.vercel.app</text>
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
    const fullUrl     = new URL(req.url, SITE_URL);
    const username    = (fullUrl.searchParams.get('u') || '').trim().toLowerCase();
    const displayName = (fullUrl.searchParams.get('n') || '').trim();
    const isImg       = fullUrl.searchParams.get('_img') === '1';
    const ua          = req.headers['user-agent'] || '';

    // Image endpoint — serves SVG card directly
    if (isImg) {
      const svg = username ? buildCardSvg(displayName || username, username) : buildFallbackSvg();
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=300');
      return res.status(200).send(svg);
    }

    // Real browsers — redirect straight to profile (strip ?n= so URL stays clean)
    if (!CRAWLER_RE.test(ua)) {
      const dest = username
        ? `${SITE_URL}/profile.html?u=${encodeURIComponent(username)}`
        : SITE_URL;
      res.setHeader('Location', dest);
      return res.status(302).end();
    }

    // Crawlers — return OG meta HTML
    const name  = displayName || username;
    const title = name ? `${name} — ${SITE_NAME}` : SITE_NAME;
    const description = name
      ? `View ${name}'s wrestling profile on ${SITE_NAME}.`
      : 'The home of eFed wrestling. Watch matches, track careers, and connect with the community.';

    const pageUrl  = username
      ? `${SITE_URL}/profile.html?u=${encodeURIComponent(username)}`
      : SITE_URL;

    const imageUrl = username
      ? `${SITE_URL}/api/og?_img=1&u=${encodeURIComponent(username)}&n=${encodeURIComponent(displayName || username)}`
      : `${SITE_URL}/api/og?_img=1`;

    const html = buildHtml({ title, description, imageUrl, pageUrl });
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=60');
    return res.status(200).send(html);

  } catch (err) {
    res.setHeader('Location', SITE_URL);
    return res.status(302).end();
  }
}
