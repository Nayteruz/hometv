if(!self.define){let e,s={};const o=(o,t)=>(o=new URL(o+".js",t).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const c=e=>o(e,r),l={module:{uri:r},exports:n,require:c};s[r]=Promise.all(t.map((e=>l[e]||c(e)))).then((e=>(i(...e),n)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-with-pwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/hometv2/css/app.d2002d23.css",revision:null},{url:"/hometv2/index.html",revision:"e7094d8fb468597b07815146e2c6e647"},{url:"/hometv2/js/app.6d906d18.js",revision:null},{url:"/hometv2/js/chunk-vendors.c6022c6a.js",revision:null},{url:"/hometv2/manifest.json",revision:"f3a9f695c2087fc765f524adbfe0168c"},{url:"/hometv2/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
