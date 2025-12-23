const staticCacheName = 'cache-v1'
const assets = ['/','/index.html']

self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets);
        })
    )
})