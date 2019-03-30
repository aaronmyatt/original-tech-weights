importScripts('/tech-weights/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/tech-weights/_nuxt/1acabc88c5a631998e2b.js",
    "revision": "83944e05f5c9736efd4fd44a92577275"
  },
  {
    "url": "/tech-weights/_nuxt/663bb6affae5425a7f11.js",
    "revision": "63d5e069e90a039070082cd779e773fe"
  },
  {
    "url": "/tech-weights/_nuxt/8a13f7a933ea10448230.js",
    "revision": "3b82ea08c28f7b1a5b7376ab69e49272"
  },
  {
    "url": "/tech-weights/_nuxt/a80c3cf07d4b90291c27.js",
    "revision": "88d60d2c42053fe23cd06f7713bf2abb"
  }
], {
  "cacheId": "tech-weights",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/tech-weights/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/tech-weights/.*'), workbox.strategies.networkFirst({}), 'GET')
