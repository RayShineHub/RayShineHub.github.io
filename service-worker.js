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
    "revision": "e60f5ce052abcd004647422ef60fe8dd"
  },
  {
    "url": "about/index.html",
    "revision": "6916cfedba08146b2268b827463bece5"
  },
  {
    "url": "assets/css/0.styles.7ae24fb6.css",
    "revision": "d6801b9391619711b88dfaa6faebb381"
  },
  {
    "url": "assets/js/1.733513b9.js",
    "revision": "1fe904930e775879db09409075bf2528"
  },
  {
    "url": "assets/js/10.bd18b9d0.js",
    "revision": "2172a0b2d853991ecb9f6ae72618fdf9"
  },
  {
    "url": "assets/js/11.326280ce.js",
    "revision": "7211ab88e5598c08ed4b7f96c6d1d091"
  },
  {
    "url": "assets/js/12.1dea6f88.js",
    "revision": "4b55ad1ad6a75854a512d4c1644c328f"
  },
  {
    "url": "assets/js/13.edc3b517.js",
    "revision": "e70e778da469e9e55106c3ba344c8777"
  },
  {
    "url": "assets/js/14.8a5fbd15.js",
    "revision": "4a7d4e8afb7ed834e9a7de82ff2938c4"
  },
  {
    "url": "assets/js/15.40a83e52.js",
    "revision": "67b250df5f24f81f91dee0881375587d"
  },
  {
    "url": "assets/js/16.c5394710.js",
    "revision": "da14992362254634d07b582906ac20c3"
  },
  {
    "url": "assets/js/17.351a92c0.js",
    "revision": "c1c8d733009be711d893ea8892392a1a"
  },
  {
    "url": "assets/js/18.8d1eb572.js",
    "revision": "889ce0d7a40dcab5d7bf86904b0a8504"
  },
  {
    "url": "assets/js/19.a9a4b653.js",
    "revision": "841106a07f891d9bb93728df379ad254"
  },
  {
    "url": "assets/js/2.abb60b6d.js",
    "revision": "53bdf93a8d9f9825114fa44cabcede90"
  },
  {
    "url": "assets/js/20.6f6715bc.js",
    "revision": "831619626341c39925fca423d99054da"
  },
  {
    "url": "assets/js/21.671d2d3c.js",
    "revision": "f5d8b938e6bc9cbea15b92e97dc940b2"
  },
  {
    "url": "assets/js/22.004a8916.js",
    "revision": "c6ca6ecb18078f8d4a5499b5b4444479"
  },
  {
    "url": "assets/js/23.db32a11c.js",
    "revision": "3085cb4bb6087e2cf76706cbcbdaa1e1"
  },
  {
    "url": "assets/js/24.566c67b0.js",
    "revision": "ff5633d7d1575a2fdb8d9eb3926ef395"
  },
  {
    "url": "assets/js/25.c3dc337e.js",
    "revision": "3400bfd6d253c88c96c7de94d77161ed"
  },
  {
    "url": "assets/js/26.f7165b53.js",
    "revision": "471d6daee39c770cfaacb2c68d256ffb"
  },
  {
    "url": "assets/js/27.3f9cb74b.js",
    "revision": "e25dad4aac131be177a2611e6e4b63a0"
  },
  {
    "url": "assets/js/28.2ddc4f27.js",
    "revision": "c244d47c2cb0549256cc421bd5b7abbc"
  },
  {
    "url": "assets/js/29.a182f1a3.js",
    "revision": "23dd5b9a86d772a92f011f7517e3eaa4"
  },
  {
    "url": "assets/js/3.42a2a67e.js",
    "revision": "fee233cf824e0ce98b124ac564c4155c"
  },
  {
    "url": "assets/js/30.62a63157.js",
    "revision": "9a68553707a89defa470e8f5deb950dc"
  },
  {
    "url": "assets/js/31.b1df6603.js",
    "revision": "76684ad185fa4c90c7c86a340550ba5e"
  },
  {
    "url": "assets/js/32.c63c3179.js",
    "revision": "54b5c0efceb98a1492f43ca5b1cab9d6"
  },
  {
    "url": "assets/js/33.9ce6fff3.js",
    "revision": "33917b42c2eaef7ada78468510679a94"
  },
  {
    "url": "assets/js/34.7ad50246.js",
    "revision": "3730ac0fc8cbb5b3095070c3bf7fdf93"
  },
  {
    "url": "assets/js/35.cacd8b1b.js",
    "revision": "4dfd496428f4963a13e078bed25e2571"
  },
  {
    "url": "assets/js/36.e0e0856d.js",
    "revision": "a231cff1cf02876dcce84b054db23ee3"
  },
  {
    "url": "assets/js/6.b2b39a3e.js",
    "revision": "c40f629d2b814f409f7e7e49264e0144"
  },
  {
    "url": "assets/js/7.0b55998f.js",
    "revision": "635f21de862513a11402f5ce351fffe5"
  },
  {
    "url": "assets/js/8.ecf88cdc.js",
    "revision": "ca4b7f55ec9550af27a5bec3aca74303"
  },
  {
    "url": "assets/js/9.1ee3b2f1.js",
    "revision": "2ec0b428fbb998859f983d1532247e17"
  },
  {
    "url": "assets/js/app.b08d3687.js",
    "revision": "e3c85f8a16285a85bfba81c47cdb2042"
  },
  {
    "url": "assets/js/vendors~docsearch.280b5f35.js",
    "revision": "0e6177741a087501a0745e6c3bf76031"
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
    "revision": "b7dd965f65ae012bcbb57fc53cfc1bd3"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "e1606b69447a709c2cfc4b6a44319241"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "89113c8ff8abcd0dfc76a95c21e3809a"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "0906c2c0abfb70e54485314bc0983969"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "a63b03c52b2943bc5ae84f45fdd9172c"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "0da0156834c01d2a92ba2af4e6071c8d"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "09c49e87a4ef51b442555e51c61a16dc"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "1560b2e0d8e7b11bcd0b6077574e4d4c"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "8299b169e63124b01e0460f6591c8834"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "3001a432d201ec4768f8ca5cdca64fdf"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "8caf2d3e196181eeafa5eef098a04723"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "4737dcd9de4126db002a4231c0596cfd"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "d734d02e52ae3cc783f74dedb84f8ab3"
  },
  {
    "url": "categories/index.html",
    "revision": "7e4061a00e9245cf3e8bac28a19e1993"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "67b5a47e808b9a0d342d13094c28cd2e"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "14097a49ceb909f9be73824dee194901"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "efa8b9f77dc213e9aa1a23e4a99d6c1a"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "9020f8a3f1f1114da036599135865a76"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "48b85d65518d8bae7b92b9c583eed348"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "2f56cfc704e2808a6c3db742407754db"
  },
  {
    "url": "cus-icon-font/iconfont.css",
    "revision": "f4489d173798b9ad31723d2ce5761086"
  },
  {
    "url": "cus-icon-font/iconfont.ttf",
    "revision": "0a9cbd443eec3c0c463cfcdadf2d1ef1"
  },
  {
    "url": "cus-icon-font/iconfont.woff",
    "revision": "52dd9791239339a9d4afdff1fb5d7892"
  },
  {
    "url": "cus-icon-font/iconfont.woff2",
    "revision": "7d02738c9ded0aba101b632f13179ecf"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "a4b0c567e0ef743a50ed838aa4624c07"
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
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "logo.png",
    "revision": "9677afaf7b215f54e090d7aabd93c71a"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "314a94796939b951b9c8242f6fc315df"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "94e9c6e9b7426978b24f239e7d2c785a"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "d048955b1b47dc3f1335e6bfefd1dfcc"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "2d5a67e0d6a58a80f5e70d8a6c6e4755"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "d943ab832c32adaa22a89491ce182587"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "e9a3b2ab0d60537675c298c49a256478"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "643d81455ea8f3448b191d8727311b0d"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "e3b8cc7c6e742cec634b1f4b1d744c89"
  },
  {
    "url": "tag/index.html",
    "revision": "a86ad4a56ae81c9dbb50f0058db54512"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "0cf6c1a20d6af87357337c08263fd13c"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "affede40e99d7d13f6553e90fe4c03f6"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "d37838ec8a4e7a2b8ed137bb785a3d9c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "296c27283098faf9a20bda215d5d294e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "75bb7123254db312eb6ee1ac67990d65"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "0b1011c5b441bd4be8e8072b8e51e1f6"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "20dd31a02b18845f3bb8d98249dba758"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "19e6b905f339315b9ef9fb49c1c2825f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b4d0abf69fbe6d322b3296bdb0d07670"
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
