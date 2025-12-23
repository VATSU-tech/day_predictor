const staticCacheName = "cache-v1";
const assets = ["/", "/index.html"];

//ajouter les fichier au cache
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function (response) {
        if (!response || response.status !== 200 || response.type !== "basic")
          return response;

        var responseToCache = response.clone();

        caches.open(staticCacheName).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});