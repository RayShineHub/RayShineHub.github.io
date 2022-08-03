/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "112e1503b6c7229e0fca0383cd05f011"
  },
  {
    "url": "assets/css/0.styles.f52d3383.css",
    "revision": "5e409554b5a61de35506178a3fb921d9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/10.22a0274a.js",
    "revision": "10f00e7bdc6be9988313055476919df4"
  },
  {
    "url": "assets/js/11.1696a42a.js",
    "revision": "fb5b35598e0e57823f7a4f31cb0adc8a"
  },
  {
    "url": "assets/js/12.a40a823c.js",
    "revision": "44704eecdba6089711d5fa0db9523e13"
  },
  {
    "url": "assets/js/13.3712c769.js",
    "revision": "8972b7c72d314ad6b6d13f0ede93dd3c"
  },
  {
    "url": "assets/js/14.c12c34b8.js",
    "revision": "214b5b380ba251142c94f28fc04047b5"
  },
  {
    "url": "assets/js/15.d1c6fbd0.js",
    "revision": "273520430822a255af148439fc749f08"
  },
  {
    "url": "assets/js/16.29ad7a86.js",
    "revision": "279fb05277e0b28e93d89ef4a8e0e22c"
  },
  {
    "url": "assets/js/17.0bd37305.js",
    "revision": "90c7175e8e92f370024acb9d4783503a"
  },
  {
    "url": "assets/js/18.2047ed9a.js",
    "revision": "8824f48e14cc0c0670561dbad3897c9a"
  },
  {
    "url": "assets/js/19.d90c9c04.js",
    "revision": "027b6c2c532eb7b4b1b14552c307c8e7"
  },
  {
    "url": "assets/js/20.5d08c983.js",
    "revision": "e92487605d67fc45b0324eb3c6c17f98"
  },
  {
    "url": "assets/js/21.c808d228.js",
    "revision": "4de10c175152499a66e2e22a059df299"
  },
  {
    "url": "assets/js/22.0f39d0a5.js",
    "revision": "06a96063fde570b8c3ed26fe291a39fe"
  },
  {
    "url": "assets/js/23.2a389cf7.js",
    "revision": "cdb3dcf0c2d2d5ca5cc6ed945e7f865b"
  },
  {
    "url": "assets/js/24.eef0a4cb.js",
    "revision": "32e6576e3a0c3bafddbd292db62a4672"
  },
  {
    "url": "assets/js/25.95dcfb78.js",
    "revision": "f2470c1e03015858a3f3d9c497ce4072"
  },
  {
    "url": "assets/js/26.c2eec1fa.js",
    "revision": "3adea32fea941a545a464dee6b2ca8f9"
  },
  {
    "url": "assets/js/27.67cc2f2f.js",
    "revision": "142aec787eee45509c9d223ab4725dee"
  },
  {
    "url": "assets/js/28.9d964506.js",
    "revision": "55392fe06e04183daf5229ba2036ae5f"
  },
  {
    "url": "assets/js/29.257e6058.js",
    "revision": "7f5d0e95d6cfad17ba7290d967f4de5b"
  },
  {
    "url": "assets/js/3.2f5db965.js",
    "revision": "d2725c43b076efa2932d79af56ca5460"
  },
  {
    "url": "assets/js/30.bd427060.js",
    "revision": "bc8f31b196a91de0df23c01d741c6cc1"
  },
  {
    "url": "assets/js/31.3f3e7627.js",
    "revision": "6647c85dce589999dc60d22636742f03"
  },
  {
    "url": "assets/js/32.0b8fdc80.js",
    "revision": "a8bbfaa482b043f3c30ed8d47d6df0f9"
  },
  {
    "url": "assets/js/33.db577c0c.js",
    "revision": "d12571afb06cbef161ed048a13e4ac68"
  },
  {
    "url": "assets/js/34.5c27f242.js",
    "revision": "bf714b5e3da32028f55bd361d97a63e3"
  },
  {
    "url": "assets/js/35.f1bd50c6.js",
    "revision": "b6f57ccaa87f5abb71defb26ee2c5998"
  },
  {
    "url": "assets/js/36.ae22266b.js",
    "revision": "1ae4ab2828e69f9ce7ca0bc77a724c1e"
  },
  {
    "url": "assets/js/37.0c0a0a60.js",
    "revision": "131ae0afaec1eb0fedf98bf7ecc950f6"
  },
  {
    "url": "assets/js/38.8614f18d.js",
    "revision": "2de78e2c9f8dcd437e3504810aaeb9b7"
  },
  {
    "url": "assets/js/4.e9e5ef00.js",
    "revision": "9ede595dadbb269d64e040849d228a56"
  },
  {
    "url": "assets/js/5.a993b909.js",
    "revision": "b904a6196347fcd25fff44fe10836876"
  },
  {
    "url": "assets/js/6.44bd65f4.js",
    "revision": "b1a28dafe889e2c0f5abca5746c6b954"
  },
  {
    "url": "assets/js/7.a4dc501e.js",
    "revision": "114445967f262d417383844a0681b963"
  },
  {
    "url": "assets/js/8.8620e4bf.js",
    "revision": "a4b734a1268e5ab3fdf561faa94fd81e"
  },
  {
    "url": "assets/js/9.2116ff10.js",
    "revision": "f96e639a11819cd00a791e44bafdbed0"
  },
  {
    "url": "assets/js/app.0538e72f.js",
    "revision": "e43168c449d249250a5d32ee4d46a89e"
  },
  {
    "url": "assets/js/vendors~docsearch.e52849a4.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "8568179e68b77e1541c90828e7e037c1"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "892a0c6f0f23dfb22512ac789bda5067"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "6eb5577c8af943327eccf4f8559a7ec0"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "8a079c2a133ecc3618d8b0e9fc1f4c9c"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "510c5d6a67ae90ff5cc15c34ae0bc2d2"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "e91acce9d41e5ac837eb6df318c82719"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "7bf32c5c0cea5badef906367f8c6f867"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "ad7451b9c2063cd8a4ce8bdc277eb82d"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "cafc8cc1b1742aca602a0e23739b559f"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "87864e440526b903205ec9a9d1471052"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "873ccf0d693c78225b62d985a83f6414"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "4df5d5c38015834f141465f15fcef9c5"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "9acaff17a751d7f057a938af68a4e38d"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "2c0440ee20fed82005a4703f7df9bb0f"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "1096ecc258cd55dcacd240fb39f10560"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "74bdf43dc5d15ef09bdad9cda576e8f8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "739f07cdeeba5cd69aa93fb62ce53452"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "77c9016defe5c580c66eff9184e6ab7f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "cdb14937a49d0d78cc7d59d762782255"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "da8e70665118521e640910261e9c90b2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "a99c4c28a85c2c4c6e0151545a8aeb4e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "ee98f40da29f9531168f2313f05779d9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "ac9d6cda467e5a48cdb57b0b800db1a0"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "a018eae8d2f6631b9d677e65629358d0"
  },
  {
    "url": "categories/index.html",
    "revision": "d4b231e6f6e2fab0c42df18c59115591"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e344b8dd77d82fa180da9079dbd56b5a"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "1754c2174d263cd3de93a1f8942ea1c9"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "681c7a180346e79c79315704b9c9a227"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "45617ef4d5534f7f11d3b96d9c491f9e"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "f8df8a4ff034965c3b6b7d6603c82ce3"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "c457131ce04d5545eeb17da6dee73dc8"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "76b3054642f20330525043e3b55b8907"
  },
  {
    "url": "font/iconfont.css",
    "revision": "fbe154d40d451c5699b6a322a52cb2c1"
  },
  {
    "url": "font/iconfont.ttf",
    "revision": "fac25803286301006782c42dfe4bd1b1"
  },
  {
    "url": "font/iconfont.woff",
    "revision": "288a1d9acce42e06855a07113edfc0dc"
  },
  {
    "url": "font/iconfont.woff2",
    "revision": "f972024eafcf8a93825add79f099d76c"
  },
  {
    "url": "index.html",
    "revision": "b8f19d82919bd3c8e2c849984cdeb60f"
  },
  {
    "url": "js/bg.js",
    "revision": "c6c7cf6c411fae7e304b715b705ec584"
  },
  {
    "url": "js/circleMagic.js",
    "revision": "0e34fe62d1e3bca6ecd563428bec97f5"
  },
  {
    "url": "js/common.js",
    "revision": "8cd550a4208c963e4cb814b605c807e0"
  },
  {
    "url": "js/daoVoice.js",
    "revision": "7c191021f39298c1f82e021f5d2fc957"
  },
  {
    "url": "js/dayNightSwitch.js",
    "revision": "eb0f0ef3bab766877028c8601a3378a7"
  },
  {
    "url": "js/fairyDustCursor.js",
    "revision": "fd15ee58443f3abcf34f4a7a8f12ddd1"
  },
  {
    "url": "js/mouseClick.js",
    "revision": "74c6bf2ce0173cd2f9bdb8660cda8b3c"
  },
  {
    "url": "js/noConsole.js",
    "revision": "ccf7128488aebfe25c26f3e2568feae9"
  },
  {
    "url": "js/sakura.js",
    "revision": "22531f72f4fd14e023d24650809cb14c"
  },
  {
    "url": "logo.png",
    "revision": "9677afaf7b215f54e090d7aabd93c71a"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "be23f92159f8bfb50fadd08b820c2454"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "afdd3e496b17fdbfde0eb1d3839cab2c"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "41a2270805b880f23cf5440d0dc82fac"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "bb9541fae343fed37662003c1859d390"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "2c08a07f2df8a91913e8c3517f9713b4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "58e88f34d4abf391ec5123200bc59c50"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "bf800b3263fa5c6ce1b77c05a3ab99d4"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "539af912389f5a2235a956953d0da874"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "faa522b35671788e3e5f0fffeb147d84"
  },
  {
    "url": "tag/index.html",
    "revision": "9950e9f616052f941e5af3b8a7034b45"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "347b434d26be3f8e0f656d634c51bd22"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "e988904c0d4f81eda9e2c5602ef2db72"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "9bb95df0f469b1992f2f47e370acc5e0"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "0ff9145c1e832d2824dc24f3bf4d0efa"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "d7e7e786da419fbf965852cbbad364ab"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "10f282dfd8b75e6e309389333e378416"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "6a789d689bf8f9632022d5d22dcaa545"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "30647f0b855af5a83529be491f8f8c47"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "5fd9fadde95e59826dffa5218b3a789d"
  },
  {
    "url": "timeline/index.html",
    "revision": "7033616386135c9aa86781bf7472a581"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
