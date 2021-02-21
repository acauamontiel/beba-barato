(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var cacheName = '1.0.0',
    staticFiles = ['../', '../components/field.html', '../components/form-set.html', '../components/item.html', '../components/navbar.html', '../components/radio.html', '../components/about.html', '../components/add.html', '../components/home.html', '../components/settings.htm	l', '../css/style.css', '../js/app.js', '../img/sprite.svg'];
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(staticFiles);
  }));
});
self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return keys.filter(function (key) {
      return key !== cacheName;
    });
  }).then(function (keys) {
    return Promise.all(keys.map(function (key) {
      return caches.delete(key);
    }));
  }));
});
self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (cached) {
    return cached || fetch(event.request);
  }));
});

},{}]},{},[1]);
