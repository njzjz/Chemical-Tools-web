(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/",n(n.s="4314")})({4314:function(e,t){importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js");var n=workbox.strategies,r=(n.NetworkFirst,n.StaleWhileRevalidate),o=n.CacheFirst,i=workbox.routing.registerRoute,c=workbox.expiration.ExpirationPlugin,a=workbox.precaching.precacheAndRoute;a([{'revision':'4c4d95eed12966a3e4ccf481b03e220b','url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/404.html'},{'revision':'3446bf3ca10c7f9fb7d1e69bcf7e7d67','url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/CNAME'},{'revision':'301573ec3e18fc9ce2a937e7e11f4015','url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/chemicaltools.svg'},{'revision':'426ef5072e263c5f5d4e3a0b152229ae','url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/chemicaltools_white.svg'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/css/acid~deviation~element~gas~mass~setting.b1df5bdf.css'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/css/acid~deviation~element~mass~setting.60d1f450.css'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/css/chunk-vendors.d39536b1.css'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/css/deviation.ca6df252.css'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/css/deviation~element~mass.18bc4a4a.css'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/css/gas.de7872b2.css'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/css/setting.f7d6cb7a.css'},{'revision':'f1c1241dae98dc275bb20658c41a4729','url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/index.html'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/acid.4510ad23.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/acid~deviation~element~gas~mass~setting.f3317aac.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/acid~deviation~element~mass~setting.16ce65d8.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/app.42910d10.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/chunk-vendors.c6f0bc47.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/deviation.68190fe8.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/deviation~element~mass.6db63329.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/element.082039db.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/exam.fd7c6f45.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/gas.beea1383.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/mass.034f5f14.js'},{'revision':null,'url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/js/setting.dbb1c1a2.js'},{'revision':'51523fafdea3b478643894d4f6c95333','url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/manifest.json'},{'revision':'b6216d61c03e6ce0c9aea6ca7808f7ca','url':'//cdn.jsdelivr.net/gh/chemicaltools/chemicaltools-web@gh-pages/robots.txt'}],{}),i("/",new r({cacheName:"index",plugins:[]}),"GET"),i(/\.(?:js|css)$/,new r({cacheName:"js-css",plugins:[]}),"GET"),i(/\.(?:png|gif|jpg|jpeg|svg)$/,new o({cacheName:"images",plugins:[new c({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),i(/^https:\/\/cdn\.jsdelivr\.net/,new r({cacheName:"jsdelivr",plugins:[]}),"GET")}});
//# sourceMappingURL=service-worker.js.map