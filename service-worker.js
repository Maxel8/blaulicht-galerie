self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("pwa-cache-v1").then(cache => {
      return cache.addAll([
        "/",
        "/galerie.html",
        "/RW-Köln.JPEG",
        "/DLK-Köln.PNG",
        "/StLf_1b.JPEG",
        "/BePolv2-mitBL.png",
        "/manifest.json",
        "/service-worker.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
