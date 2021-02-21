const cacheName = '1.0.0',
	staticFiles = [
		'../',
		'../components/field.html',
		'../components/form-set.html',
		'../components/item.html',
		'../components/navbar.html',
		'../components/radio.html',
		'../components/about.html',
		'../components/add.html',
		'../components/home.html',
		'../components/settings.htm	l',
		'../css/style.css',
		'../js/app.js',
		'../img/sprite.svg'
	];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheName)
		.then(cache => cache.addAll(staticFiles))
	)
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
})
