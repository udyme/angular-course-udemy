//thanks to this tuturial= https://medium.com/google-developer-experts/a-5-minute-intro-to-workbox-3-0-156803952b3e
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

console.log('this is my custom service worker');

workbox.routing.registerRoute(
    new RegExp('https://api.spotify.com/v1/*'),
    workbox.strategies.networkFirst()
  );

workbox.precaching.precacheAndRoute([]);