if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,s,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"97b817dfa7285ef9d913e9a59f2c7074"},{url:"about/index.html",revision:"c1ab896112a0fbb511ab11723bb82409"},{url:"archives/2021/11/index.html",revision:"2354f8ffb17e5445918c2242c8f8b83e"},{url:"archives/2021/index.html",revision:"552467ada6d6f1a7ff3952919132fcb1"},{url:"archives/index.html",revision:"2b388173e11beb6407474b015aeca94f"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"blogs/1a2f7100/index.html",revision:"63f84ee7a2f1a4a2466456d058937791"},{url:"blogs/62995734/index.html",revision:"39b47cbe7819ec5adc5abbc560f96984"},{url:"blogs/7ea25825/index.html",revision:"45dc6d9c965343f6edbb0a2ad5172b2b"},{url:"blogs/901ffb1c/index.html",revision:"679b67070f94ea710e3c73793b016455"},{url:"blogs/e1f72ee4/index.html",revision:"c2bb8354a79920bf813d02e15a69d347"},{url:"blogs/ea723112/index.html",revision:"3df82c3b9bb756f0534beb37885f9fbf"},{url:"categories/Hexo/Butterfly/index.html",revision:"9ad09c3125731877559f3600e7bca720"},{url:"categories/Hexo/index.html",revision:"612c7ac4bc9b896ec4a355dcc3289e88"},{url:"categories/index.html",revision:"c573d803bfd61c9022e4bb741bed1a55"},{url:"categories/Windows/index.html",revision:"0fb744214e6961a79da7847d2e744acc"},{url:"comments/index.html",revision:"bc80033e6846739d45e2d51a5092fdb6"},{url:"css/index.css",revision:"f981c01a84a7bca7cd9df3da670e4e24"},{url:"css/magic.css",revision:"be6370bf6eec71df9c37e886083532e6"},{url:"css/swiper.min.css",revision:"502d07ad8ba97692b05e29b0af8a5ae4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/JetBrains.ttf",revision:"f556ba3718de43c9d1d1caecd70cbea2"},{url:"fonts/KuaiLe.ttf",revision:"1b80e6af9a598372beca579f0ac68dc7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.png",revision:"b5b5f5c1b66ebb0c452ed4ce0dc35f1c"},{url:"img/archive.png",revision:"bca90c077379ed52cc734195d31b76a7"},{url:"img/avatar.png",revision:"999a2c77d4c34671360ead0a309d70e5"},{url:"img/background.png",revision:"186d02b0adab8b3af9f8d32d185c4367"},{url:"img/category.png",revision:"af6819b19df346cad5c286830432dca6"},{url:"img/favicon_1.png",revision:"999a2c77d4c34671360ead0a309d70e5"},{url:"img/favicon_2.png",revision:"1878b2555b026f80232a1dfa4ac2a5c3"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.png",revision:"25df7ece7f641970d0781ddb111aedd4"},{url:"img/link.png",revision:"13b51937606f73bfb70b68a2de9eb0ae"},{url:"img/tag.png",revision:"2f1adbc945145a8b766159393ce6dd6f"},{url:"img/wechat.png",revision:"71bf901ba3bf3a4851e6c95b184bd16c"},{url:"index.html",revision:"36053867c62621eb6525e4ac6173475e"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/swiper.min.js",revision:"78179d9f21abb0f439f6404e40004def"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"f9514da02de6384e5e1d8c700ca3d83e"},{url:"page/2/index.html",revision:"78cabe897f8c45f6134dd60f6d86d71f"},{url:"random/index.html",revision:"8657a6a6a008926501e43dd257744486"},{url:"tags/Butterfly/index.html",revision:"33a6e88f9d9aeb0929cace8df79c7734"},{url:"tags/Hexo/index.html",revision:"c366da46fb01299f9011809c4da5d067"},{url:"tags/index.html",revision:"70450c3513b057f47f247e0602fb7d73"},{url:"tags/Windows/index.html",revision:"27fe2e633d32f28e774303640207ccc0"},{url:"tags/教程/index.html",revision:"ea06e98a1de006bfea02786f3aa391e0"},{url:"tags/终端/index.html",revision:"a00e7f26dbfe791422c4e5162d03f7b6"},{url:"tags/美化/index.html",revision:"4b187fa7e443d9e57ba27c228578bc33"}],{}),e.registerRoute(/^https:\/\/sectsnow\.github\.io\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
