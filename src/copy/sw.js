const cacheName = 'v1.1',
	staticFiles = [
		'.',
		'components/field.html',
		'components/form-set.html',
		'components/item.html',
		'components/navbar.html',
		'components/radio.html',
		'views/about.html',
		'views/add.html',
		'views/home.html',
		'views/settings.html',
		'css/style.css',
		'js/app.js',
		'js/vendors.js',
		'img/sprite.svg'
	];

self.addEventListener('install', event => {
	self.skipWaiting();
	event.waitUntil(
		caches.open(cacheName)
		.then(cache => cache.addAll(staticFiles))
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys()
		.then(keys => keys.filter(key => key !== cacheName))
		.then(keys => Promise.all(keys.map(key => {
			return caches.delete(key);
		})))
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
		.then(cached => cached || fetch(event.request))
	);
});
