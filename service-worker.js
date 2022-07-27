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
    "revision": "db5f314fab8d85c39a8cf7e8ce3d2c0d"
  },
  {
    "url": "assets/css/0.styles.bceb4e08.css",
    "revision": "73cdbed062075488da6dd640bff0aa80"
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
    "url": "assets/js/19.91c672cf.js",
    "revision": "68b04bd01c36069d1126336deb477895"
  },
  {
    "url": "assets/js/20.79e7facd.js",
    "revision": "6fc284dcd5520965098a377a5f6f06cc"
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
    "url": "assets/js/30.dda2a61b.js",
    "revision": "4fc05e8a32b34d6f2ae0c5662f95ef4c"
  },
  {
    "url": "assets/js/31.85cc0ce2.js",
    "revision": "d1c643295ed50e3d1e37e6bd31a19712"
  },
  {
    "url": "assets/js/32.97afc96b.js",
    "revision": "07b64d1394716497d7e5c9666a08ad34"
  },
  {
    "url": "assets/js/33.37b25f08.js",
    "revision": "c528f6cef42394bc00afa6a5bbdda8a7"
  },
  {
    "url": "assets/js/34.b639450a.js",
    "revision": "6cb9fa79d674dc049b27ecac60780b5e"
  },
  {
    "url": "assets/js/35.b3e271de.js",
    "revision": "2e443e0fb6d38d2c56130326a25136b2"
  },
  {
    "url": "assets/js/36.f59cfb3b.js",
    "revision": "d97b0190b3e6d2dff498f74528c5a176"
  },
  {
    "url": "assets/js/37.f56e53fb.js",
    "revision": "3f7d7391dad68f132513d9abe589c386"
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
    "url": "assets/js/app.2e5a12bd.js",
    "revision": "5584ec19a8787743fa071795825f4a34"
  },
  {
    "url": "assets/js/vendors~docsearch.e52849a4.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "5a538854e1437257223f4c8f1c96bf0b"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "f416d8c77d7dca46ca37ea75daa5e2e8"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "f84e697f6d80e1e6dba9556d2deb1243"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "20d89113a5a0dbde17cd3b03caf791bb"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "f3d2cb6c10ca8014f349176bc50222bc"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "5f11daf3623c901b4cc77f0d32e9f61e"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "009f227a7aa425781e465fc44b69719a"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "6cb597d8198ee985bdf4780390e4fecf"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "5d251d8f23ffb23cdeeb2dcbb08147a8"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "e3133a8e4bcd7a003f74a78aa9bd79a8"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "abede4b428e446b43a0b88276ab3cfe8"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "e279cc8faf502a27127fd00fb5c7a543"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "550ff458f13d106f2facce08bf1bd84d"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "29db341d8c9f38057f0375971636f810"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "e7ae1f4f43edad5e4f8d71fa76c28e36"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "66320118f7d4cbabf33c0f3506df3b70"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "f183cc41282035c13633291094339bdf"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "e182cac793901b399d71044a1a4911dd"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "a3b02c065f77d3997493204f0b0e8b10"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "af426c872533f2a04249a3d06af8e210"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "9195b48f31a07f5a07d64e67ceb0fed9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "61ce88ef775b7b3f9e5b4c161419345b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "489d93b9f558efb608dfa6b1d03787b1"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "9ca4ce315a1a087964fa2a1ebe768f3e"
  },
  {
    "url": "categories/index.html",
    "revision": "f63af27509f34b3ef8d5fd20ab52dd54"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6a94c85fb107a70ae8dde06f63cfbc7e"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "dbb6c67b692b6cc80f6d324a52f966c8"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "3f1f98ccda41f137abc61613185ef6b2"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "1f466df0bf311eff27c530c19ca9e523"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "dcc267ec352931f731f44ad470bc1b30"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "cff8ef981c8cbba25e1ee3e70ebec0c2"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "2d4e21b1e3557b453a37f2097e8a7b35"
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
    "revision": "886873580c124e9b8a1b548bacdecabe"
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
    "revision": "7e059b74d39c3009a25e7cc4edf23935"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "b6a5d5ebd5109d5f5199de37c9079d6f"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "6d689a14fa746657e4311d7ae60e198a"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "500ad8b02c65558d3b84b41798ca2fed"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "20f1d935dd3b2006c50e6be8b99dc9fa"
  },
  {
    "url": "tag/git/index.html",
    "revision": "20df1fc497cc3f4cbd1de2e8f9a81c37"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "b5e4142f87bf6c64242e85adbdc7338d"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "28657d7a3f7b68e85f032880e89df02f"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "5ea1d9e789efc0b86fc788428c5933cb"
  },
  {
    "url": "tag/index.html",
    "revision": "838f2f55184b88d8366522d4b6c97453"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1b83b48c94804d187ea088e6a5f04cf3"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "c96c88ea52347be2529fdfc01aab1fcd"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "2d2a1965691e4d0926cacd383abb5e47"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "177b6a189fb5ba3f3f6facd51d6b6f06"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "8a7fc84850fe12ff2c325a087510fce6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f5b35d347901ce3edfbb2af2ef594ded"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "924e4bc496001aee2df659ad07cf8465"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "42b0933c49d9a59a5dac43b48c6ba6c1"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "a51595218f4d440311547a0a9a5deadb"
  },
  {
    "url": "timeline/index.html",
    "revision": "1dded4c7cb832c08e21d2e028b52e070"
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
