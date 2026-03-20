const CACHE = 'otoskor-v1';
const ASSETS = ['/otoskor-ai/', '/otoskor-ai/index.html', '/otoskor-ai/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
