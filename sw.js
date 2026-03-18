var CACHE_NAME = 'suno-hub-v1';
var PRECACHE_URLS = [
  './',
  './index.html',
  './app.webmanifest',
  './icon.svg',
  './manifest.json'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);

  if (url.pathname.endsWith('manifest.json')) {
    event.respondWith(
      fetch(event.request).catch(function () {
        return caches.match(event.request);
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request).then(function (response) {
      return caches.open(CACHE_NAME).then(function (cache) {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch(function () {
      return caches.match(event.request);
    })
  );
});
