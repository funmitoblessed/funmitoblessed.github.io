const cacheThese = [
    '/udacity-fe-nanodegree/restaurant-reviews',
    // '/index.html',
    // '/restaurant.html',
    // '/css/styles.css',
    // '/data/restaurants.json',
    // '/img/1.jpg',
    // '/img/2.jpg',
    // '/img/3.jpg',
    // '/img/4.jpg',
    // '/img/5.jpg',
    // '/img/6.jpg',
    // '/img/7.jpg',
    // '/img/8.jpg',
    // '/img/9.jpg',
    // '/img/10.jpg',
    // '/js/dbhelper.js',
    // '/js/main.js',
    // '/js/restaurant_info.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
]

self.addEventListener('install', function(event) {

    event.waitUntil(
        caches.open('app-v1').then(function(cache) {
            return cache.addAll(cacheThese);
        })
    );

});


self.addEventListener('fetch', function(event) {

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
            console.log(response);
            // if (response) {
            //     console.log('Found!!! , event.request);
            //     return response;
            // } else {
            //     console.log('Some event not Found in cache, Now Fetching!...');
            //     return fetch(event.request);
            // }
        })
    );

});