if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"e31efb32e4e291461f312fbc33be7593"},{url:"archives/2021/11/index.html",revision:"1213bcc3c48ace4e01e7ff6bd52f6cf5"},{url:"archives/2021/index.html",revision:"e7ae25b5873d84a9d329c360d5835482"},{url:"archives/index.html",revision:"58579ff9058c8c7aa114bb6d3c9e09c9"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"blogs/1a2f7100/index.html",revision:"8102825a36f70f385981e5c31e2c8df6"},{url:"blogs/62995734/index.html",revision:"9f2557b83c5b6e21f15eb1c77167712f"},{url:"blogs/901ffb1c/index.html",revision:"2e722d1ff450aabbb49c6ac5ac9f156e"},{url:"blogs/e1f72ee4/index.html",revision:"a8dc9745b8b1236915a74d6dca2332a6"},{url:"blogs/ea723112/index.html",revision:"fa2e481753660e20e51b78ae82b149d0"},{url:"categories/Hexo/Butterfly/index.html",revision:"11f431c2311acc187d235ef2e6f20b3a"},{url:"categories/Hexo/index.html",revision:"4b3c09891bcacd8b197df06b4ffacb89"},{url:"categories/index.html",revision:"46b735dd3235436ee267d0e6665736a2"},{url:"css/index.css",revision:"8f440539c8f5b57eb267a8fe9e2f9ebc"},{url:"css/magic.css",revision:"c73c6c8ba05755348f3f9344c7049b52"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.png",revision:"b5b5f5c1b66ebb0c452ed4ce0dc35f1c"},{url:"img/archive.png",revision:"bca90c077379ed52cc734195d31b76a7"},{url:"img/avatar.png",revision:"999a2c77d4c34671360ead0a309d70e5"},{url:"img/background.png",revision:"a65a0e28e5c629fe3d56447ec3b96e99"},{url:"img/category.png",revision:"af6819b19df346cad5c286830432dca6"},{url:"img/favicon_1.png",revision:"1878b2555b026f80232a1dfa4ac2a5c3"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.png",revision:"c663be6ef673fcd1046bf3ea9b71e6fb"},{url:"img/link.png",revision:"13b51937606f73bfb70b68a2de9eb0ae"},{url:"img/loading.gif",revision:"ceecf90ceaa58b1c2563c7169530ec1c"},{url:"img/tag.png",revision:"2f1adbc945145a8b766159393ce6dd6f"},{url:"img/wechat.png",revision:"71bf901ba3bf3a4851e6c95b184bd16c"},{url:"index.html",revision:"efb2310d298585780aa9e17ca2f9c4f2"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"2954a20314bfe27a6c4a33f506aa8eb4"},{url:"messageboard/index.html",revision:"3f0202e5c6117b35e5930f9e2c88d1ca"},{url:"random/index.html",revision:"8b6c6082207df4924934d34aceff44e5"},{url:"tags/Butterfly/index.html",revision:"c6e1eab4355079f80a65366ab9c73651"},{url:"tags/Hexo/index.html",revision:"8277964d0f46cb530b58886a20b4c416"},{url:"tags/index.html",revision:"9726d3604474e1f1193a6da102a775d1"},{url:"tags/主题/index.html",revision:"8e5cab4dbf57bd193096e38f6c8578e8"},{url:"tags/教程/index.html",revision:"41cc18bcbd54fe45db01eda6b74f1fcf"}],{}),e.registerRoute(/^https:\/\/sectsnow\.github\.io\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
