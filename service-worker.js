if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return d;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"964b09646801c4e610fa623a7d9b1d86"},{url:"archives/2021/11/index.html",revision:"f1da5ac790cf7ebe0d3889d81bf70c28"},{url:"archives/2021/index.html",revision:"f8a7a20129ad68a8a362ce269d5336ea"},{url:"archives/index.html",revision:"c156c65d885bd34cecbdd29be5b26821"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"blogs/1a2f7100/index.html",revision:"4a8608b237e1fff6da53821922b7fd3c"},{url:"blogs/62995734/index.html",revision:"adf3ea80a089042bc8cdff8f0da7202e"},{url:"blogs/7ea25825/index.html",revision:"ed4614403f7bd4603716b6fec62270c5"},{url:"blogs/901ffb1c/index.html",revision:"b62a526ed4f6c39b5ba7a9eb402fd8ff"},{url:"blogs/e1f72ee4/index.html",revision:"3269aca7e3722a0d6641f3d9ab477b54"},{url:"blogs/ea723112/index.html",revision:"875bad5013ab5dbca6c75f47dcd5273a"},{url:"categories/Hexo/Butterfly/index.html",revision:"1fa7fee54b0f9ef8ac578ba1d14babe6"},{url:"categories/Hexo/index.html",revision:"b3d42d9ab71bb0dc987269a5fe387add"},{url:"categories/index.html",revision:"2ae85063f9f57f19a6f75b3639bea85b"},{url:"categories/Windows/index.html",revision:"2390fb6a3e89aa738dcf3ce3a26a0ce4"},{url:"comments/index.html",revision:"6df4cac3feacbe6498031d206c873482"},{url:"css/index.css",revision:"8f440539c8f5b57eb267a8fe9e2f9ebc"},{url:"css/magic.css",revision:"1c48dd18244ca43a866599a03065ebdf"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.png",revision:"b5b5f5c1b66ebb0c452ed4ce0dc35f1c"},{url:"img/archive.png",revision:"bca90c077379ed52cc734195d31b76a7"},{url:"img/avatar.png",revision:"999a2c77d4c34671360ead0a309d70e5"},{url:"img/background.png",revision:"186d02b0adab8b3af9f8d32d185c4367"},{url:"img/category.png",revision:"af6819b19df346cad5c286830432dca6"},{url:"img/favicon_1.png",revision:"1878b2555b026f80232a1dfa4ac2a5c3"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.png",revision:"25df7ece7f641970d0781ddb111aedd4"},{url:"img/link.png",revision:"13b51937606f73bfb70b68a2de9eb0ae"},{url:"img/tag.png",revision:"2f1adbc945145a8b766159393ce6dd6f"},{url:"img/wechat.png",revision:"71bf901ba3bf3a4851e6c95b184bd16c"},{url:"index.html",revision:"cd32f4defe48cd2cc45f7b0d70613249"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"c7144b87915aa4e3470613abdf6ee2ca"},{url:"random/index.html",revision:"723f66c621a0e3dd57921f748880e925"},{url:"tags/Butterfly/index.html",revision:"bf2d34e329c2b84b32dd394838a0b2c1"},{url:"tags/Hexo/index.html",revision:"667608799b54ae19a44f98331fbab013"},{url:"tags/index.html",revision:"00e2dafa7b936ed3fa4306a835df07cd"},{url:"tags/Windows/index.html",revision:"672aa91b1a05b747829aa8f35430ea3c"},{url:"tags/教程/index.html",revision:"41ed452aeaba2b7f0aef00e710727200"},{url:"tags/终端/index.html",revision:"43524832985eec4518e9c4289cb832ae"},{url:"tags/美化/index.html",revision:"3faff4c416cc348a2626a6efe7989e6b"}],{}),e.registerRoute(/^https:\/\/sectsnow\.github\.io\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
