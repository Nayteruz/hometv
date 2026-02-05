const CACHE_NAME = 'hometv-cache-v1';
const BASE_PATH = '/hometv/';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/img/icons/android-chrome-192x192.png',
  '/img/icons/android-chrome-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching resources at:', BASE_PATH);
      return cache.addAll(urlsToCache);
    }),
  );
  self.skipWaiting(); // Немедленная активация
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
      .then(() => self.clients.claim()), // Немедленный контроль над страницами
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Только кэшируем запросы к нашему домену
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Если есть в кэше - возвращаем
      if (response) return response;

      // Для SPA: все навигационные запросы ведут к index.html
      if (
        event.request.mode === 'navigate' ||
        (event.request.method === 'GET' &&
          event.request.headers.get('accept').includes('text/html'))
      ) {
        return caches.match(BASE_PATH + 'index.html');
      }

      // Для остальных - запрашиваем из сети
      return fetch(event.request);
    }),
  );
});
