if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,s,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return a;case"module":return d;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8974035ab12218b6b8a454a54301f1e0"},{url:"about/index.html",revision:"560d9dea2c4d95289093ffdee3c68ea0"},{url:"archives/2021/11/index.html",revision:"b36b5f3e6556ebb86750b877dad89e5a"},{url:"archives/2021/index.html",revision:"a852c834fbe55bbccb3e78f4a04c36f2"},{url:"archives/index.html",revision:"2fa6be19f627537a003dc077cb3029a8"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"blogs/1a2f7100/index.html",revision:"2530cdcc8a60a529e138a9533904fd76"},{url:"blogs/62995734/index.html",revision:"aebc2c5bbda8e6e44ebf04af66d9c294"},{url:"blogs/7ea25825/index.html",revision:"aa0cef399f0747920438066a3f28e1a4"},{url:"blogs/901ffb1c/index.html",revision:"49ca3de7220e198a514fac7902654977"},{url:"blogs/e1f72ee4/index.html",revision:"4361f3a6f81f0be3093edeb002dc9a0f"},{url:"blogs/ea723112/index.html",revision:"fe1d4ffec3bf8767be8e910883430adf"},{url:"categories/Hexo/Butterfly/index.html",revision:"dd5f25ce53d0a4b80ce76e64ce28495c"},{url:"categories/Hexo/index.html",revision:"4d487c80fa8e942854f3c5bcae6fa97a"},{url:"categories/index.html",revision:"b8474f718b5da6efdaf89f695587459a"},{url:"categories/Windows/index.html",revision:"588370ca792a163aa1acd019d15415a5"},{url:"comments/index.html",revision:"4dab5f5b565c199d5b41eb84b9b17ae0"},{url:"css/index.css",revision:"d02aa31a4176afac036961e069b769df"},{url:"css/magic.css",revision:"e4998b08f646a5af3236010f4db5cd7a"},{url:"css/swiper.min.css",revision:"502d07ad8ba97692b05e29b0af8a5ae4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/JetBrains.ttf",revision:"f556ba3718de43c9d1d1caecd70cbea2"},{url:"fonts/KuaiLe.ttf",revision:"1b80e6af9a598372beca579f0ac68dc7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.png",revision:"b5b5f5c1b66ebb0c452ed4ce0dc35f1c"},{url:"img/archive.png",revision:"bca90c077379ed52cc734195d31b76a7"},{url:"img/avatar.png",revision:"999a2c77d4c34671360ead0a309d70e5"},{url:"img/background.png",revision:"186d02b0adab8b3af9f8d32d185c4367"},{url:"img/category.png",revision:"af6819b19df346cad5c286830432dca6"},{url:"img/favicon_1.png",revision:"999a2c77d4c34671360ead0a309d70e5"},{url:"img/favicon_2.png",revision:"1878b2555b026f80232a1dfa4ac2a5c3"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.png",revision:"25df7ece7f641970d0781ddb111aedd4"},{url:"img/link.png",revision:"13b51937606f73bfb70b68a2de9eb0ae"},{url:"img/tag.png",revision:"2f1adbc945145a8b766159393ce6dd6f"},{url:"img/wechat.png",revision:"71bf901ba3bf3a4851e6c95b184bd16c"},{url:"index.html",revision:"04463e7524ba578b3aba610500fabc70"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/runtime.js",revision:"c31766a6cbbd282d5404cedd3d3a645b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/swiper.min.js",revision:"78179d9f21abb0f439f6404e40004def"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"72eb3e0eb6cf53e7164d765675a1d588"},{url:"page/2/index.html",revision:"4cade39fc3a80b980b8e3f6834f05c76"},{url:"random/index.html",revision:"8657a6a6a008926501e43dd257744486"},{url:"tags/Butterfly/index.html",revision:"fa512ea2cd148193629617d73e3bb758"},{url:"tags/Hexo/index.html",revision:"be0baf4f747d39e66249e9804ebd496c"},{url:"tags/index.html",revision:"d04ea3e21cd61b1bdc7385fe05d71438"},{url:"tags/Windows/index.html",revision:"83634a31f9c4ef240616f9fd39e9e183"},{url:"tags/教程/index.html",revision:"0f19d6dc924d260919e7168d4e55aa37"},{url:"tags/终端/index.html",revision:"0d29533f474665e0603f70abecbbfa60"},{url:"tags/美化/index.html",revision:"bb2e112165f332dc0eb457b72b0e3d0e"}],{}),e.registerRoute(/^https:\/\/sectsnow\.github\.io\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
