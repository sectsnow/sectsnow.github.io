if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"289011c9057b1b06f72ce1721fdde1f9"},{url:"archives/2021/11/index.html",revision:"f7782f9dcce2718645899208c08f7b53"},{url:"archives/2021/index.html",revision:"da9309af152b1e23b93e90047853329e"},{url:"archives/index.html",revision:"3b5e1283b10358d514be3c29c778dd1c"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"blogs/1a2f7100/index.html",revision:"ab7c65354380961cfb7e6061b68680b0"},{url:"blogs/62995734/index.html",revision:"a5e5642b09045a03357bf9cb9994cc0e"},{url:"blogs/7ea25825/index.html",revision:"a6436eb57d323df4f5e6b871e31b2a0d"},{url:"blogs/901ffb1c/index.html",revision:"e4f95a7e05154efbbc2ac1f7fe0d4ed5"},{url:"blogs/e1f72ee4/index.html",revision:"2025b623f42fa66194d6e9fb6b41850f"},{url:"blogs/ea723112/index.html",revision:"bb9c8494210f2509c3d7a6b51cbea6bd"},{url:"categories/Hexo/Butterfly/index.html",revision:"ee81e2363c5fc87c6d717a28cbd5737a"},{url:"categories/Hexo/index.html",revision:"9670a34da0d7a476789c7f6238e0a32a"},{url:"categories/index.html",revision:"2ae85063f9f57f19a6f75b3639bea85b"},{url:"categories/Windows/index.html",revision:"40483873cd42a365297a0c7d482baca8"},{url:"comments/index.html",revision:"b5d2aeb578d9831529ee1c4cf7420dbe"},{url:"css/index.css",revision:"8f440539c8f5b57eb267a8fe9e2f9ebc"},{url:"css/magic.css",revision:"1c48dd18244ca43a866599a03065ebdf"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.png",revision:"b5b5f5c1b66ebb0c452ed4ce0dc35f1c"},{url:"img/archive.png",revision:"bca90c077379ed52cc734195d31b76a7"},{url:"img/avatar.png",revision:"999a2c77d4c34671360ead0a309d70e5"},{url:"img/background.png",revision:"186d02b0adab8b3af9f8d32d185c4367"},{url:"img/category.png",revision:"af6819b19df346cad5c286830432dca6"},{url:"img/favicon_1.png",revision:"1878b2555b026f80232a1dfa4ac2a5c3"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.png",revision:"25df7ece7f641970d0781ddb111aedd4"},{url:"img/link.png",revision:"13b51937606f73bfb70b68a2de9eb0ae"},{url:"img/tag.png",revision:"2f1adbc945145a8b766159393ce6dd6f"},{url:"img/wechat.png",revision:"71bf901ba3bf3a4851e6c95b184bd16c"},{url:"index.html",revision:"5696302d0a7af16dd3384233751321c0"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"c7144b87915aa4e3470613abdf6ee2ca"},{url:"random/index.html",revision:"723f66c621a0e3dd57921f748880e925"},{url:"tags/Butterfly/index.html",revision:"c0c7bd903cce58268426291d018ffbb6"},{url:"tags/Hexo/index.html",revision:"b2c7e07e7f0c2f111193f5d41f366180"},{url:"tags/index.html",revision:"537e0ec14f7a2dd29412de56ba1bce99"},{url:"tags/Windows/index.html",revision:"d26b492ac1cc59dfd6a777c44d304192"},{url:"tags/教程/index.html",revision:"1e1fce2f7f6b0510b40f909981fc1161"},{url:"tags/终端/index.html",revision:"988d4f4afc0f52d687e0fbfa5badb366"},{url:"tags/美化/index.html",revision:"bbe029b28c44d25cb3555cd64f1bd05a"}],{}),e.registerRoute(/^https:\/\/sectsnow\.github\.io\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
