if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),f={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/52-qW1eFmX784hFJ8W5kQ/_buildManifest.js",revision:"3ee1315c20669b8a520089b538dc2fe7"},{url:"/_next/static/52-qW1eFmX784hFJ8W5kQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/234.c278558049951e58.js",revision:"c278558049951e58"},{url:"/_next/static/chunks/299.ac87da447432164e.js",revision:"ac87da447432164e"},{url:"/_next/static/chunks/303.feb8259c247e86e2.js",revision:"feb8259c247e86e2"},{url:"/_next/static/chunks/338.46c1ffd2e2224e21.js",revision:"46c1ffd2e2224e21"},{url:"/_next/static/chunks/359.98988f3040ea2f54.js",revision:"98988f3040ea2f54"},{url:"/_next/static/chunks/463.c5220a97fe00bb30.js",revision:"c5220a97fe00bb30"},{url:"/_next/static/chunks/478.0b98943496e8fb59.js",revision:"0b98943496e8fb59"},{url:"/_next/static/chunks/508.2a1ecf2679085326.js",revision:"2a1ecf2679085326"},{url:"/_next/static/chunks/55.0d886d358c47856d.js",revision:"0d886d358c47856d"},{url:"/_next/static/chunks/621-a3496a798b4a8cea.js",revision:"a3496a798b4a8cea"},{url:"/_next/static/chunks/722.728887f700542d56.js",revision:"728887f700542d56"},{url:"/_next/static/chunks/803.17128f22f5ab0902.js",revision:"17128f22f5ab0902"},{url:"/_next/static/chunks/856-73e5527202998f53.js",revision:"73e5527202998f53"},{url:"/_next/static/chunks/919-c0b261a2a6b17779.js",revision:"c0b261a2a6b17779"},{url:"/_next/static/chunks/942.d010c36c54fede88.js",revision:"d010c36c54fede88"},{url:"/_next/static/chunks/fb7d5399.10686ed74c995a64.js",revision:"10686ed74c995a64"},{url:"/_next/static/chunks/framework-21a7ded87e45f3d9.js",revision:"21a7ded87e45f3d9"},{url:"/_next/static/chunks/main-e7ea89fbfaeb9565.js",revision:"e7ea89fbfaeb9565"},{url:"/_next/static/chunks/pages/_app-1fa440f2dd1fc40d.js",revision:"1fa440f2dd1fc40d"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/home-ba6fe5c5e3de7755.js",revision:"ba6fe5c5e3de7755"},{url:"/_next/static/chunks/pages/index-15402ed8a6787123.js",revision:"15402ed8a6787123"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9a4558c8fc2f3ae8.js",revision:"9a4558c8fc2f3ae8"},{url:"/_next/static/css/05eafb63415ee5e5.css",revision:"05eafb63415ee5e5"},{url:"/_next/static/css/089983860bde59bb.css",revision:"089983860bde59bb"},{url:"/_next/static/css/2b65b68cbdde9c20.css",revision:"2b65b68cbdde9c20"},{url:"/_next/static/css/8f4297209891ca4c.css",revision:"8f4297209891ca4c"},{url:"/_next/static/css/ae562c5b9a89fe0b.css",revision:"ae562c5b9a89fe0b"},{url:"/_next/static/css/bc3970900e1a7546.css",revision:"bc3970900e1a7546"},{url:"/_next/static/css/e259dd81afcc0770.css",revision:"e259dd81afcc0770"},{url:"/android-chrome-192x192.png",revision:"ca34fcb85fc2c8bf14d069d4592129a6"},{url:"/android-chrome-512x512.png",revision:"ff9deee1dc7415454653d22cb38b238c"},{url:"/apple-touch-icon.png",revision:"ddf65458795a056806aebaacad93b9e2"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"d45967fcbf1b89a7fec4a4724097f832"},{url:"/favicon-32x32.png",revision:"3df65aac881174e5f5ef6acb9ce53ce3"},{url:"/favicon.ico",revision:"4e81915452ae5750d55603ab1a3f0d9f"},{url:"/fonts/Slussen-Bold.woff2",revision:"e7763140521609dc25ea44f512606bd3"},{url:"/fonts/Slussen-Compressed-Black.woff2",revision:"03544e36539058c093dcd5dd9bb8196c"},{url:"/fonts/Slussen-Expanded-Black.woff2",revision:"ec68f3582a4274fb58287f7a85173047"},{url:"/fonts/Slussen-Medium.woff2",revision:"58b3bab2301a6332846956924fb2717b"},{url:"/fonts/Slussen-Regular.woff2",revision:"607dbd3e6823789222434856623059de"},{url:"/fonts/Slussen-Semibold.woff2",revision:"7b17a1bc6619610d74bc39355860c796"},{url:"/manifest.json",revision:"9b0acf6c4cc6ca3c4447b387df438154"},{url:"/models/arm.glb",revision:"e2088db2700752eb8a6d38861b57ff39"},{url:"/models/arm2.glb",revision:"d38b4c53972c5a261b6c74eaeed2e0ee"},{url:"/mstile-144x144.png",revision:"33e7495d37ae7978f4efebcbaa3808ff"},{url:"/mstile-150x150.png",revision:"51fe2ce643489c88c481972ac9f12389"},{url:"/mstile-310x150.png",revision:"f8064114d6d6b8b47492cdf74d83c47f"},{url:"/mstile-310x310.png",revision:"cd4ade9fda6af6f0193d044127ff159d"},{url:"/mstile-70x70.png",revision:"330d4b654cb6a8599badb81dccbda358"},{url:"/og.png",revision:"d3b8e28c1f60dfd2284ae4b1252f4819"},{url:"/robots.txt",revision:"09dd0a66a71f20a6f6b5cf457e65117d"},{url:"/safari-pinned-tab.svg",revision:"d595b1fd595cc201f243780e8a4d2412"},{url:"/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/sitemap-0.xml",revision:"b09b909002d696c73f7470f94ed629ff"},{url:"/sitemap.xml",revision:"6ff5716e0d2737c50e2ac4367969ae66"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
