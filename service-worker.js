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
    "revision": "97457a3ea6b164fe58095545c9f407ec"
  },
  {
    "url": "about/index.html",
    "revision": "81c69a77a5450831d7e86c50ad56c112"
  },
  {
    "url": "assets/css/0.styles.d1e6dc35.css",
    "revision": "f4b3ad0142b3d7a707622b613308fa49"
  },
  {
    "url": "assets/js/1.d75fd979.js",
    "revision": "58026aabd80438fde7632f405c71bb6a"
  },
  {
    "url": "assets/js/10.90b9615e.js",
    "revision": "938a63857fb662ef093a6fe1ac528ad6"
  },
  {
    "url": "assets/js/11.9e86b09c.js",
    "revision": "863b70f68dbd004bc5065059b4b353f5"
  },
  {
    "url": "assets/js/12.d0fc9e1a.js",
    "revision": "5bef0e04f0fef7cf6bbf018a5f638077"
  },
  {
    "url": "assets/js/13.e03e7c24.js",
    "revision": "7296a3cc2145de33502882329b8b80f2"
  },
  {
    "url": "assets/js/14.9ac67b75.js",
    "revision": "8c4dfa51b81a69502eb63f852d930c3b"
  },
  {
    "url": "assets/js/15.0e7e778d.js",
    "revision": "a7d268460f7619667c481f6fd399215d"
  },
  {
    "url": "assets/js/16.e8caad9e.js",
    "revision": "8f9ba847012d323f6cad7e15af4a73e7"
  },
  {
    "url": "assets/js/17.630ef43e.js",
    "revision": "f3ed131cbcc6abeb00e5a39f7fc42ed3"
  },
  {
    "url": "assets/js/18.826930c4.js",
    "revision": "d76b81e60d0d16adb2ff9b00bdd9664d"
  },
  {
    "url": "assets/js/19.64a899a5.js",
    "revision": "65f694a799551f640ea707cd307bbbac"
  },
  {
    "url": "assets/js/2.b9bdea86.js",
    "revision": "17835921c48534d167b304782cb6b6f0"
  },
  {
    "url": "assets/js/20.b4f3dfae.js",
    "revision": "76a9dc8d9f0d0c1b1e306dabed17960c"
  },
  {
    "url": "assets/js/21.f747fac8.js",
    "revision": "24385c64c313d66dd1f5450362c3843a"
  },
  {
    "url": "assets/js/22.eb609f5a.js",
    "revision": "cee484f20d705052a12ffab298f588e7"
  },
  {
    "url": "assets/js/23.c56313e0.js",
    "revision": "b8b26274844f0df6255fd247738faa1b"
  },
  {
    "url": "assets/js/24.5348daa8.js",
    "revision": "c52f0333bd7e9e3ad46d945de351d843"
  },
  {
    "url": "assets/js/25.ea2932fc.js",
    "revision": "5030232c50612d143c3d14abac40c81d"
  },
  {
    "url": "assets/js/26.b4a6c396.js",
    "revision": "594f386f0c2cf9c63e6348e0969f41f0"
  },
  {
    "url": "assets/js/27.b634d346.js",
    "revision": "81486c092fbb915ca8b679e5b3106793"
  },
  {
    "url": "assets/js/28.55fb7759.js",
    "revision": "3cde6533848da8ddff58b79c865604a6"
  },
  {
    "url": "assets/js/29.7c6ece85.js",
    "revision": "ac659fe390b73e7ff4c6cc190e17dfae"
  },
  {
    "url": "assets/js/30.7734bad6.js",
    "revision": "287dd0c4d2174c596d474ba2fd5c9c31"
  },
  {
    "url": "assets/js/31.abd88d9f.js",
    "revision": "e73d4b118f3636f54195f9c14a58e791"
  },
  {
    "url": "assets/js/32.8e8ec797.js",
    "revision": "8d843f657c7e1bcfeeaf0b474edd3a80"
  },
  {
    "url": "assets/js/33.b8a8da0d.js",
    "revision": "e66fe7c9d1da53e84d0febd971b4204e"
  },
  {
    "url": "assets/js/34.036c6e4b.js",
    "revision": "2d515ade7dd8edd2ac16ea629ce85c8a"
  },
  {
    "url": "assets/js/35.eb2e2a56.js",
    "revision": "fbf66e20db44be5b6a4fbd739ac9c37e"
  },
  {
    "url": "assets/js/36.2a6f1e4b.js",
    "revision": "58b5a222f24cd8233c3f1cd732893740"
  },
  {
    "url": "assets/js/37.e44df214.js",
    "revision": "39d7b38adbe98d2fbc9585762be5aeb3"
  },
  {
    "url": "assets/js/38.b0ec3c62.js",
    "revision": "c524a0b4579de18e51b5ec374baa7f4b"
  },
  {
    "url": "assets/js/39.c789c576.js",
    "revision": "db57db9ac7b5bfc286b44b2168be57cf"
  },
  {
    "url": "assets/js/40.6b0daecf.js",
    "revision": "1314391efb83f77f62c04dfb2603a515"
  },
  {
    "url": "assets/js/41.483db759.js",
    "revision": "4b587d7d8df65ddf860bb6ade1d4bdf5"
  },
  {
    "url": "assets/js/42.6713780d.js",
    "revision": "9feda04c1ee9e67be5ef153ddec2f69e"
  },
  {
    "url": "assets/js/5.e9aa131d.js",
    "revision": "ecde99c026e19182b39277a59f18cac6"
  },
  {
    "url": "assets/js/6.54e2e2b8.js",
    "revision": "b84c05e683579995231c817e205a35ee"
  },
  {
    "url": "assets/js/7.d9519410.js",
    "revision": "1aa91cf9fb171999af0f0a57cae7787d"
  },
  {
    "url": "assets/js/8.110bbf89.js",
    "revision": "657487e43d9ef7140308b73a7cd22a0f"
  },
  {
    "url": "assets/js/9.52bf5d42.js",
    "revision": "bf5856939f527535fbf80ec3654dccd2"
  },
  {
    "url": "assets/js/app.0d327201.js",
    "revision": "d9c233127607ed68c719fc3c677aa3c3"
  },
  {
    "url": "assets/js/vendors~docsearch.770d2a08.js",
    "revision": "3a1fe772f2272311a2e67267c2bf2a73"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "69376c5e04192aa72cde5f44f1594d65"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "5fc7b1d35e800d212194165ca69d361c"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "9a4cf6516c250634f021f49a5288b20a"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "24f75ae8772329d7cb9eb4c4015e597b"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "379cf8c3f1001ce479bf51d76aec9070"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "69b2122be8e1345c7288577adadd91e7"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "e381f54440376acbf5c1adb38c275800"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "2ff3272b6eda22b8cfe8ba068f3f6355"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "fe0251a8ca1d622ccbe2e2d23fc24931"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "169a71b4659a4c8e20522892d8bd69ec"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "64a81b3e2e91609c3503d8a448becc41"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "b1ab9ba09380a30a09ecd69fbad98083"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "76ef49c11f6eb330f085573172e91e87"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "9b203410ace6a7e214ef9d60ddf52935"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "0444dfecb998c03a3fb26811c9596e64"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "4732da5289fc6a7037cdd526e3b7ee67"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "33db0e6ede3c66194a8d906a482cae14"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "cd376ddcb826c3db0b1a7fd7b2760495"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "0ff86fa081423f21642c34e3c51c1f9c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "b461f6167b6ed9c7fa83a6bcdf736c8a"
  },
  {
    "url": "categories/index.html",
    "revision": "d2ec7f8e5d4736e30484420d164888ec"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ffd39f8cef4cfc8a3a7ea7236fbd9bbf"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "a1a362eeb7520e9bc9f4e37ec9e2c491"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "c918135037feb45c801ef7dc37bd1910"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "be6f1a79945a7867ea4cda8aa4b32766"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "11035601838ffd8a37766517d6565da3"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "a2bce9fd3fe589432f941f62302a3a9c"
  },
  {
    "url": "cus-icon-font/iconfont.css",
    "revision": "124d747586fba2e391df543ca9271d3c"
  },
  {
    "url": "cus-icon-font/iconfont.ttf",
    "revision": "c48b3cead48609dc7757df060e8d2076"
  },
  {
    "url": "cus-icon-font/iconfont.woff",
    "revision": "2cf196314c36a13b99486b17f5b25ea5"
  },
  {
    "url": "cus-icon-font/iconfont.woff2",
    "revision": "cc6d447b8a80041317345a1616d2eabd"
  },
  {
    "url": "index.html",
    "revision": "7f5f09a532425a7e5d22a628988317d8"
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
    "revision": "e00a6f8d066803a9e4255a3f5131d1bb"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "fd3ea53c0ba818c9872e88912307ac78"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "7b00f8f0d12736303fd6cebf8982b5c2"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "db59dcdefe834b0db2dccf153a49c5c1"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "e409c41a5f59a74fed3a1e1af24855d2"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "18ea0af4411be42a223cd3e1b8cb7449"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "672d79b65c50548175457e078af7ead0"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "a3efb702b7960e98a097140dee8fc89a"
  },
  {
    "url": "tag/index.html",
    "revision": "04032550a95abf832dc8af779f9ec616"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "158aa6bcc05829499c44be39505373e3"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "1fffb6f178585463cc1118ca32d6f1b0"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "66a54d1d699a42c1c004bf7e7775d257"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "7e49abe6d69835a9e622d41aebc7eb6b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "804ddc84a37a90b858c7ee4866ec2db2"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "f0ff4fd188c42b6d33726cadefc4356e"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "2aa6776d03263b207ae3e756d9dcabaf"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "33932be1b11c40ef8bf19c2b4afe6ae7"
  },
  {
    "url": "timeline/index.html",
    "revision": "e235749d6c8d414124f7990f3fb74033"
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
