// EFED Hub Service Worker
const CACHE_NAME = 'efed-hub-v1';

// Core pages to pre-cache on install
const PRECACHE = [
  '/index.html',
  '/auth.html',
  '/profile.html',
  '/efed.html',
  '/planner.html',
  '/admin.html',
  '/manifest.json',
  '/efed-hub-icon.svg'
];

// Install — pre-cache core pages
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — network first, fall back to cache
// Supabase API calls always go to network only (never cache)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Never intercept Supabase, external APIs, or non-GET requests
  if (
    event.request.method !== 'GET' ||
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('youtube.com') ||
    url.hostname.includes('ytimg.com')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful HTML page responses
        if (response.ok && (url.pathname.endsWith('.html') || url.pathname === '/')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Network failed — serve from cache if available
        return caches.match(event.request);
      })
  );
});
