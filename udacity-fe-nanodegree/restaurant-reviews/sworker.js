const cacheThese = [
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
    '/udacity-fe-nanodegree/restaurant-reviews/index.html'
    // './udacity-fe-nanodegree/restaurant-reviews/restaurant.html',
    // './udacity-fe-nanodegree/restaurant-reviews/css/styles.css',
    // './udacity-fe-nanodegree/restaurant-reviews/data/restaurants.json',
    // './udacity-fe-nanodegree/restaurant-reviews/img/1.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/2.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/3.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/4.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/5.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/6.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/7.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/8.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/9.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/img/10.jpg',
    // './udacity-fe-nanodegree/restaurant-reviews/js/dbhelper.js',
    // './udacity-fe-nanodegree/restaurant-reviews/js/main.js',
    // './udacity-fe-nanodegree/restaurant-reviews/js/restaurant_info.js',

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
            if (response) {
                console.log('found ', event.target);
                return response;
            } else {
                console.log('could not find that...');
                return fetch(event.request)
                    .then(function(response) {
                        const cloneOne = response.clone()
                        caches.open('app-v1').then(function(cache) {
                            cache.put(event.request, cloneOne);
                        })
                        return response;
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            }
            // return response || fetch(event.request);
        }));

});