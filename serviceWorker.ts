/// <reference lib="webworker" />
export default {};

const sw = self as unknown as ServiceWorkerGlobalScope;
const staticCacheName = 'cache-v1';
const assets = ['/', '/index.html'];

// INSTALL
sw.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => cache.addAll(assets))
  );
  sw.skipWaiting();
});

// FETCH
sw.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;

      const fetchRequest = event.request.clone();
      return fetch(fetchRequest).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(staticCacheName).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// ACTIVATE
sw.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== staticCacheName).map((key) => caches.delete(key))
      )
    )
  );
  sw.clients.claim();
});
