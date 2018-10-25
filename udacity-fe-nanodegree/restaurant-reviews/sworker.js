const cacheThese = [
    '/',
    'index.html',
    'restaurant.html'

]

self.addEventListener('install', function(event) {

    event.waitUntil(
        caches.open('app-v1').then(function(cache) {
            return cache.addAll(cacheThese);
        })
    );

});