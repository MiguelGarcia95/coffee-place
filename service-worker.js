"use strict";var precacheConfig=[["/coffee-place/index.html","7500a75c6ce87076fbf7401700087bd1"],["/coffee-place/static/css/main.759a58e8.css","c8bed5f4795bd5e9e4845fb5a4644803"],["/coffee-place/static/js/main.3131d04d.js","3ddf166f3cf4b6f9a8d95e9a10321ea7"],["/coffee-place/static/media/coffee-beans.b89ffc56.png","b89ffc560f978704fd0e8670e6a16e7e"],["/coffee-place/static/media/coffee-bg.02c976ed.png","02c976edcd10d7ad5b28b1ac1b10911f"],["/coffee-place/static/media/coffee_001.3aa09277.jpg","3aa092773a1d62ad6ba224316642ebe4"],["/coffee-place/static/media/coffee_002.2696c7ba.jpg","2696c7ba2bc520a56ded7108cf40d981"],["/coffee-place/static/media/coffee_003.b72b2248.jpg","b72b2248c58d7ccdcaf6cc6d4968be3d"],["/coffee-place/static/media/coffee_list_01.e58f6523.jpg","e58f652362897ad901459776f4d378f0"],["/coffee-place/static/media/coffee_list_02.22a3be50.jpg","22a3be50edb3f378c1f3b9ddfd81138c"],["/coffee-place/static/media/coffee_list_03.33442e58.jpg","33442e58a74503c7cef4fc437a4ebc8e"],["/coffee-place/static/media/coffee_list_04.148d62d3.jpg","148d62d37656223304d03e29d540631d"],["/coffee-place/static/media/dark-beans.fb6407c3.png","fb6407c39e916e5dbf5630555c0b3b54"],["/coffee-place/static/media/drinking.0fc45260.jpg","0fc4526019d7729bea3cb34e678fd42a"],["/coffee-place/static/media/logo.6e1c3e12.png","6e1c3e128bb05ee9738115eec3dacef1"],["/coffee-place/static/media/red-cups.ed9ef117.jpg","ed9ef11768edd8d98bfcaadd62325180"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/coffee-place/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});