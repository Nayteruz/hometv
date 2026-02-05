// sw.js - разместите в папке public/
const CACHE_NAME = 'hometv-cache-v1';
const BASE_PATH = '/hometv/'; // Ваш base из конфига

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'img/icons/android-chrome-192x192.png',
  BASE_PATH + 'img/icons/android-chrome-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache for:', BASE_PATH);
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
  const url = new URL(event.request.url);

  // Пропускаем запросы не к нашему origin (например, к API)
  if (url.origin !== self.location.origin) {
    return;
  }

  // Для запросов внутри нашего приложения
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Если найдено в кэше
        if (response) {
          return response;
        }

        // Для навигационных запросов в SPA (все страницы ведут к index.html)
        if (event.request.mode === 'navigate') {
          return caches.match(BASE_PATH + 'index.html');
        }

        // Для остальных GET-запросов пытаемся загрузить из сети
        return fetch(event.request).then((response) => {
          // Проверяем, можно ли кэшировать ответ
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
        // Fallback для навигационных запросов
        if (event.request.mode === 'navigate') {
          return caches.match(BASE_PATH + 'index.html');
        }
        // Для остальных запросов возвращаем ошибку сети
        return new Response('Network error', {
          status: 408,
          headers: { 'Content-Type': 'text/plain' },
        });
      }),
  );
});
