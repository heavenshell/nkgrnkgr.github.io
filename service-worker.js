"use strict";var precacheConfig=[["/index.html","746502a731d75aa9d55a64a6d8d12b7e"],["/static/css/main.f93e3695.css","dbf32026792b4865e999746d70bc94da"],["/static/js/main.efdc17bb.js","138c4b4981221ed745b84dc489cf45d2"],["/static/media/AccessibilityCheckList.a620a7a5.png","a620a7a58f316a4861bfbb0e0b6c9f05"],["/static/media/Webpack4ConfigGenerator.f27426b9.png","f27426b96b361ac9628e9bf8c6eb2576"],["/static/media/aws.b2d32082.png","b2d320824ee31431c9921af268641ab6"],["/static/media/blog.a13b9ffe.svg","a13b9ffee0e056c260a39a1b8d6b38fc"],["/static/media/es6.d155a03e.png","d155a03ebfec99ace9fa090df0180fc1"],["/static/media/github-logo.ec31edff.svg","ec31edffb35f33a13775b0f4011e0d26"],["/static/media/kt.7e3862e8.png","7e3862e80f4bc89428794627b9a90e79"],["/static/media/logo.5878e9a4.svg","5878e9a4d3a74aeb4b6bfdc636df2fe6"],["/static/media/nkgrnkgr.59aa3935.png","59aa393501128ad525c3eb16265ee1f8"],["/static/media/qiita.f6247e61.svg","f6247e6157b97ae57bdaba4888cb166e"],["/static/media/react.a64479eb.png","a64479eb39a5891ba6e362198ee7c2f8"],["/static/media/react1.7588ceb4.png","7588ceb472941fb9a8cf0f1873c73067"],["/static/media/scrum.e714e5f1.png","e714e5f10e875e6686c04cd232de47da"],["/static/media/speaker.7aa10459.svg","7aa1045950d682dffd3fe3c7ae4c46bc"],["/static/media/sql2csv.f82f3a05.png","f82f3a05d031dac303aac5e173213db6"],["/static/media/twitter.c80deda4.svg","c80deda4595a4475f9bbf525df8317ae"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});