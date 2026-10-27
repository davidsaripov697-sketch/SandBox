const CACHE_NAME = 'sandbox-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './joe.png',
  './dexter.png',
  './npc1.png',
  './npc2.png',
  './music.ogg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});