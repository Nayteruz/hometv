const CACHE_NAME = 'hometv-cache-v2';
const BASE_PATH = '/hometv/';

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'favicon.ico',
  BASE_PATH + 'img/icons/android-chrome-192x192.png',
  BASE_PATH + 'img/icons/android-chrome-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching resources at:', BASE_PATH);
      return cache.addAll(urlsToCache);
    }),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME) {
              console.log('Deleting old cache:', cache);
              return caches.delete(cache);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;

      // Для SPA: навигационные запросы → index.html с правильным путём
      if (
        event.request.mode === 'navigate' ||
        (event.request.method === 'GET' &&
          event.request.headers.get('accept')?.includes('text/html'))
      ) {
        return caches.match(BASE_PATH + 'index.html');
      }

      return fetch(event.request);
    }),
  );
});
