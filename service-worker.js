if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,r,a)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return s;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c2c51f51751b41e86158fa15c7064d5a"},{url:"archives/2021/11/index.html",revision:"180140e342bf3612bb5826636d63bcf9"},{url:"archives/2021/index.html",revision:"5387c7f38189756e28d39bc34a8a2da2"},{url:"archives/index.html",revision:"4c57d77057d1d079e74579cafd22f1d0"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"blogs/3c3832a8.html",revision:"3d7503ff1a3418a8748b2e838aad0b4d"},{url:"blogs/4a17b156.html",revision:"a609698e4aeadf18cb4f6180cfa97477"},{url:"blogs/6c92115f.html",revision:"1657f2cd3aa22f2654f88a98384adba9"},{url:"blogs/ae0f95e0.html",revision:"78e76e2a4275b8abed03302863e87280"},{url:"categories/index.html",revision:"dbe99b7d5c5b61f930387e1f61d463fb"},{url:"categories/无用/index.html",revision:"a36036e9c08b78a56721583aeea1fc2c"},{url:"categories/笔记/index.html",revision:"1674a483d97887992b568f42b0029f48"},{url:"css/index.css",revision:"eb3938b57bbeee3285f9b71adcf0cb4c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.png",revision:"b5b5f5c1b66ebb0c452ed4ce0dc35f1c"},{url:"img/avatar.png",revision:"999a2c77d4c34671360ead0a309d70e5"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.png",revision:"71bf901ba3bf3a4851e6c95b184bd16c"},{url:"index.html",revision:"9742d6044906ab7fee9136644f6bf6bc"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"9d0c485360a48bc12a53ff204240b350"},{url:"tags/index.html",revision:"397e137225e0eb2f93af74c76d117914"},{url:"tags/Java/index.html",revision:"efa1d3097efaeb0edb5b2885f06763a3"},{url:"tags/Maven/index.html",revision:"28cbfec46c4dcf86f34fc0e8e83775a2"},{url:"tags/Spring/index.html",revision:"3010b24de9319c2aaced366e1b492c83"},{url:"tags/test/index.html",revision:"27bef6b6a249085326b4c37e57ff8588"}],{}),e.registerRoute(/^https:\/\/sectsnow\.github\.io\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
