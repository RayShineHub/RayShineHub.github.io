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
    "revision": "2a4bac91ba5f957107525a1b018221ef"
  },
  {
    "url": "about/index.html",
    "revision": "c4edda63f73cc26794a9d6379a4ac611"
  },
  {
    "url": "assets/css/0.styles.0a045ba6.css",
    "revision": "4f94da41c0fd374e96a0eaadca298f8e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.acf672a0.js",
    "revision": "8fa45bd37ec3c3b7420fd7eec2d4f31c"
  },
  {
    "url": "assets/js/10.f96bcb66.js",
    "revision": "2bb8af36dacbd3b765f5978f2a7ddc24"
  },
  {
    "url": "assets/js/11.27e34163.js",
    "revision": "7e3ec721983ba35fac63f6c00b45e7b6"
  },
  {
    "url": "assets/js/12.67db7004.js",
    "revision": "82293e721ca2477be126946ca4f69ee0"
  },
  {
    "url": "assets/js/13.e3e4a0cb.js",
    "revision": "335647bc79d15372b82ddad8b61b5e2f"
  },
  {
    "url": "assets/js/14.8bd56c78.js",
    "revision": "a5d3cedf7257624cb146af40f2e19dbc"
  },
  {
    "url": "assets/js/15.6d9c2827.js",
    "revision": "8a628283e4ed6490369ec3191471096b"
  },
  {
    "url": "assets/js/16.6867ab71.js",
    "revision": "dd0c1bc5adf24f7ef8cc62bdde45368e"
  },
  {
    "url": "assets/js/17.163be4e2.js",
    "revision": "a02dc63879893914fae94e7980529f2b"
  },
  {
    "url": "assets/js/18.4dcbcc92.js",
    "revision": "767cb9e8dd258934d245501b46ffedd8"
  },
  {
    "url": "assets/js/19.e9cd7c11.js",
    "revision": "0badcefdb971cc50a1fab3534088d4c4"
  },
  {
    "url": "assets/js/2.e5fb2f24.js",
    "revision": "5919d6f954398af0eb2ed72d14658aaf"
  },
  {
    "url": "assets/js/20.0f7b1484.js",
    "revision": "db6bcfd977519cc60b563bf3ee7d28b5"
  },
  {
    "url": "assets/js/21.11c76c16.js",
    "revision": "c15f86428e546be21e64feeae0d5700f"
  },
  {
    "url": "assets/js/22.a2dab8ee.js",
    "revision": "0f6821db7770571bfa3a18d534146b86"
  },
  {
    "url": "assets/js/23.308fa557.js",
    "revision": "d7a8de3fc6c1b7274db58132b2851cec"
  },
  {
    "url": "assets/js/24.74838bb6.js",
    "revision": "058280812b71dae04a1bbfd9ba7a9587"
  },
  {
    "url": "assets/js/25.8d3ab20a.js",
    "revision": "48dfa1dddb4784468507fad4931c4415"
  },
  {
    "url": "assets/js/26.2b136490.js",
    "revision": "af09e92ecc8e7de4454da095c671746b"
  },
  {
    "url": "assets/js/27.3e6e76d8.js",
    "revision": "8b4aef94e4b837f2931b92ddd8a2527c"
  },
  {
    "url": "assets/js/28.b939b560.js",
    "revision": "b362849b330d8cbe24bcf86f03705af9"
  },
  {
    "url": "assets/js/29.371e7518.js",
    "revision": "fabccec2b9c72a96e8f2b1d11a36f722"
  },
  {
    "url": "assets/js/3.2473ced7.js",
    "revision": "f58164997185c6d25a0915310a2b9196"
  },
  {
    "url": "assets/js/5.502337ab.js",
    "revision": "e03c9c4d02d1f01032bc7b00ebe81cb5"
  },
  {
    "url": "assets/js/6.38da5607.js",
    "revision": "56ac1ad23ea2a97d814303be13e6a692"
  },
  {
    "url": "assets/js/7.0b14bcfa.js",
    "revision": "f9dd719d1447c060f019ee709db1c409"
  },
  {
    "url": "assets/js/8.70d02c11.js",
    "revision": "5d388cbbdb9dddeb58977542b864f682"
  },
  {
    "url": "assets/js/9.6dec2185.js",
    "revision": "c3d343bb16ab41ff6f4aea83de34113c"
  },
  {
    "url": "assets/js/app.4b5ea586.js",
    "revision": "426c81392375a6899dcc003e81159f2e"
  },
  {
    "url": "authorAvatar.png",
    "revision": "a0f444359496b1978934d0cfba647d92"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "70f225133c6db25739158d25cbf62571"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "e7d845fe2af222251eb35e17bb357835"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "058b2f55004839c6269cbc7de80f01d6"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "80bfa71b548e9d42dd86a662e9479ff2"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "2ba5a27051c6022e20d85e8ff0a101b4"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "aa5ad759f6ee9c002dd7d11dc13a6f7c"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "e677e3c0d9a717a16be8ecfc2ad4aa8b"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "24b8ac8df07559ee8840b1fe22ed4a7f"
  },
  {
    "url": "categories/index.html",
    "revision": "2609486764213f110062cc8e023634bb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2e538ccd69b2b1672b782e4b7b4408c1"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d6c47bff7bc38fe122e780f514e5c12d"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "c1de05e0a660af712062090fd89b0d89"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "4249685fe8d7cd0a61a456fd71adfe14"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "c52e6fcf28251f3c5ea5319d5ec81117"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "c778b6c569fde0949d6f88e0bdd0fe49"
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
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "logo.png",
    "revision": "9677afaf7b215f54e090d7aabd93c71a"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "afdf40c121345b2ebb3ec6069d511d9a"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "72e7850cd12c4c5be49a4bbf50f5f75a"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "f5d340f0c142bdab6e819863a7ddfcc3"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "b17f21aeea7bf9f2ca936d1e1644c43f"
  },
  {
    "url": "tag/index.html",
    "revision": "8d50011ba4b144053238cc6d7d7ecdb3"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "7e3c3df126c4dc3b99f621ab4a4a58be"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "b7e2ac01af209f2ca91c5a6eb19bd212"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "c070948bddb8984caac8225b76e22658"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a642b3f9316d1679dc7f50ab3e6d0290"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0617920a04828055ade969db0d087ab9"
  },
  {
    "url": "timeline/index.html",
    "revision": "c7179cafb5b9a08ea208bf9423a57f41"
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
