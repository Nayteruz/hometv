const CACHE_NAME = 'hometv-cache-v1';
const BASE_URL = self.location.pathname.replace(/\/[^\/]*$/, '/'); // Автоматически определяем base

const urlsToCache = [
  BASE_URL,
  BASE_URL + 'index.html',
  BASE_URL + 'manifest.json',
  BASE_URL + 'img/icons/android-chrome-192x192.png',
  BASE_URL + 'img/icons/android-chrome-512x512.png',
  // Основные ресурсы Vue
  BASE_URL + 'assets/index.*.css',
  BASE_URL + 'assets/index.*.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache for:', BASE_URL);
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()),
  );
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
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      }),
  );
});

self.addEventListener('fetch', (event) => {
  // Только для запросов в пределах нашего origin
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => {
          // Если найдено в кэше
          if (response) {
            return response;
          }

          // Для навигационных запросов в SPA
          if (
            event.request.mode === 'navigate' ||
            (event.request.method === 'GET' &&
              event.request.headers.get('accept').includes('text/html'))
          ) {
            return caches.match(BASE_URL + 'index.html');
          }

          // Запрашиваем с сети
          return fetch(event.request).then((response) => {
            // Не кэшируем неподходящие ответы
            if (
              !response ||
              response.status !== 200 ||
              response.type !== 'basic'
            ) {
              return response;
            }

            // Клонируем для кэширования
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });

            return response;
          });
        })
        .catch(() => {
          // Если всё падает, возвращаем index.html
          if (event.request.mode === 'navigate') {
            return caches.match(BASE_URL + 'index.html');
          }
        }),
    );
  }
});
