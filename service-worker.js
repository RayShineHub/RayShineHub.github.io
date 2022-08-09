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
    "revision": "26c7eb113e930c34e54917b2e9216ff6"
  },
  {
    "url": "assets/css/0.styles.64eeec63.css",
    "revision": "abe9f8b07181a4dd5711b22373596501"
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
    "url": "assets/js/10.b083722f.js",
    "revision": "ee3692d8da529c7c59f6d9d40659891b"
  },
  {
    "url": "assets/js/11.51bf70bb.js",
    "revision": "18875c1e03b1c5aa88e67847dde96e74"
  },
  {
    "url": "assets/js/12.4e3a946d.js",
    "revision": "4aaa76e8547582a27b3a442dd8664d69"
  },
  {
    "url": "assets/js/13.68e62f0d.js",
    "revision": "05767076b7129f0725f2390032efd0bb"
  },
  {
    "url": "assets/js/14.ac584ad9.js",
    "revision": "dbef09feb00fab2a9220a2a072d09c4b"
  },
  {
    "url": "assets/js/15.743efe31.js",
    "revision": "3146ef3d430bb94ec6f02403afc193f6"
  },
  {
    "url": "assets/js/16.40b14265.js",
    "revision": "98e370b43c0e44b80182ba415d8e8fef"
  },
  {
    "url": "assets/js/17.df593c33.js",
    "revision": "13c3cd6fbcee660b4e4975d1bc32544f"
  },
  {
    "url": "assets/js/18.638bcfed.js",
    "revision": "3f840524bf12573b4c2d7d3c5afe5ded"
  },
  {
    "url": "assets/js/19.63da355e.js",
    "revision": "cfe744819b7733e70ec6de6f75858d8f"
  },
  {
    "url": "assets/js/20.41471cc4.js",
    "revision": "b3c51144aa6f06cd75c8ce7482d954b9"
  },
  {
    "url": "assets/js/21.44860877.js",
    "revision": "528488bca3dcfb3d6b58a575c25c3c4d"
  },
  {
    "url": "assets/js/22.0379515b.js",
    "revision": "15e48c8529755c31083a4457d382bb0f"
  },
  {
    "url": "assets/js/23.00a51a76.js",
    "revision": "0ae08cd140ef80dd750e161417a80d07"
  },
  {
    "url": "assets/js/24.d5239217.js",
    "revision": "46a6fde5749e14e49f40ea484b303599"
  },
  {
    "url": "assets/js/25.449f66f3.js",
    "revision": "978500eebec466c08528a86e9615a2a2"
  },
  {
    "url": "assets/js/26.0c4d776c.js",
    "revision": "99c7befac9ca94d2071639dae1136470"
  },
  {
    "url": "assets/js/27.ec0b2aa6.js",
    "revision": "70c9e3e63ad1531473c00070bf928eda"
  },
  {
    "url": "assets/js/28.07177723.js",
    "revision": "dfee2bdbd99b5b7cf779218c8c154405"
  },
  {
    "url": "assets/js/29.de9ba11e.js",
    "revision": "9e18d14344bd8c782fef510fb96aaa19"
  },
  {
    "url": "assets/js/3.dbdaf141.js",
    "revision": "f8023efccde5f352c0f196d109eaff20"
  },
  {
    "url": "assets/js/30.4a5b08b9.js",
    "revision": "6072d99f7daae09fcebc9666dcc56e1e"
  },
  {
    "url": "assets/js/31.0eff7f14.js",
    "revision": "db44379c5f8f735e37d7809e80255465"
  },
  {
    "url": "assets/js/32.39d3d89c.js",
    "revision": "0945a117d14620aabc892ec850c45df4"
  },
  {
    "url": "assets/js/33.33909828.js",
    "revision": "123e7688305960a000060ac405c09dde"
  },
  {
    "url": "assets/js/34.156d1fc2.js",
    "revision": "3b332f2c2f6b6ae144c340acc14d5d37"
  },
  {
    "url": "assets/js/35.c12b4761.js",
    "revision": "642e77c55445cab5dfb11d2e4555a5c9"
  },
  {
    "url": "assets/js/36.ebde1f88.js",
    "revision": "0f5fc1e81042ac85955bd32aea9a61fc"
  },
  {
    "url": "assets/js/37.47fab454.js",
    "revision": "acc37fdc8d6260e961c04c1cbb87d3cc"
  },
  {
    "url": "assets/js/38.3e15b450.js",
    "revision": "ced676081d71426ed921b69c77d954cb"
  },
  {
    "url": "assets/js/39.d0675890.js",
    "revision": "94b44246e6c77b842ae810c8d599e2f4"
  },
  {
    "url": "assets/js/4.d78373e5.js",
    "revision": "728ab64fe4081b516d808ec97ab21ebf"
  },
  {
    "url": "assets/js/40.6f7a9e40.js",
    "revision": "fc9d26e366c55c8813f7a4425e7104f3"
  },
  {
    "url": "assets/js/41.545136cc.js",
    "revision": "be89c00595533c4b366523ba3c4e6dfb"
  },
  {
    "url": "assets/js/5.253c447d.js",
    "revision": "3dcead80046cfe507beacf73d21ecfee"
  },
  {
    "url": "assets/js/6.5a4e2c8a.js",
    "revision": "630aa03ad8a01e3f1c2c04df9f1d86ef"
  },
  {
    "url": "assets/js/7.a4edb3e2.js",
    "revision": "4fb10c4e2ac6443b11a0d24244868849"
  },
  {
    "url": "assets/js/8.25d65677.js",
    "revision": "56b4a67d9838ffc22079b28b12ecd12d"
  },
  {
    "url": "assets/js/9.ecbd1cdf.js",
    "revision": "d582378af1f614e50278849f24222c28"
  },
  {
    "url": "assets/js/app.947d4736.js",
    "revision": "40727241cf889725ae1f993cb02332a9"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "75c845e90a4ae03f474c7f34368886cd"
  },
  {
    "url": "blogs/others/收藏/emoji/emoji.html",
    "revision": "ddf11627be885bc636bf217247038f25"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "b4b61cff1073cb4bc4336ae0086f9d94"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "c13045f65b7d04684b5a433df15ab1ac"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "90d1ffc30e31af222b68867c8ae0fc8a"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "f8162e0b9d3f371c37b8c294a41b34f0"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "fa0a2d7f0a81d0ec64da5f933c57e0a8"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "f02398596696b2c1113a9bb3daea9851"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "5e884a6620cae42e09b154c71faf9868"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "a07f9f1228e5c7cf94f4fd116383dae9"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "8b1c4bbfa7ec46ce32ae64b8a3922eba"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "86e4b2cc1d3849e35052939072733978"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "e03de7ada49c897b57a42f14d30f392b"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "1b7161f60eb5d434ba0f4d7ee0710415"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "f943b09ac8fa199ecff90b03bc106f16"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "d93f9483646e445c63dc8cc2e33286cd"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "3cbb398a6385e8ea1b1c996fe641baf5"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "600b0dc7ab6f6980454f217246e09893"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "b6921058789110a5853af3ed8e8bcd95"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "2386e223ca8b4102970f4a1e72452baa"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "2a67e4bcdec27e4a49ea89c2ed41cfa8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "fa129d523b63e03bb3297dcdea9cf07c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "42801ea5f337d9f80789d310eef9555b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "5d6e02bf3ee79eebbd5cac2401174e73"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "74d37ce5f5d05ffc8e6f0176c924935f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "5ccc50272557558074365366e976663e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "dfda06a7237ee1c2da740c62c0e86353"
  },
  {
    "url": "categories/index.html",
    "revision": "76fae451e3fc14aa8056f176c372d51c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bcf0e455c1d408a7e1f48d8a60374811"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c00926612f767475cf11df0c3ea7e6b1"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "78ae38f61c32c84951e19506eac968b5"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "efbc18542b4788cc95debc5f4e27391f"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "f1ed54a44effa189148c7d00c942e407"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "c9264fe70f0b8a668ebc01b83f629d3f"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "0865af72a0c0706d5a00ad550f60904e"
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
    "revision": "f2d1b1016c08423cc3bcfabd877a0812"
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
    "revision": "d7bb94cf526acc0570922d7f6e06a605"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "e35a490a5cd0f5ca833ed5d05e721825"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "8ab27c9a48f672672d3114515308487e"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "cebf139f7e5f0573e68e2486e824b83a"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "90f1fb05952545a2dd0092a705d08c4d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b9b529deb550e7f775d38aa716063f68"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "ef6c99fb2d27d469841c30ea0eefa7cf"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "ac9ef9a367b1c790a741c1002b0d8b0f"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "fa035a007a67bbb76aec3620e1537282"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "7e8565b042e57f96cef007f1798f23bd"
  },
  {
    "url": "tag/index.html",
    "revision": "1420262687edd39ec1f53c1f0994767d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8332adc3d1975e19524c0a7181c0cb07"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "2977051534cf0983ad7ba051fdf72fb4"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "d668a3eae539e0964acf7d2d50ede03e"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "322421e9cbd13a5a3cee0f10ae669230"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "71ef7f54e17990cfd614ffc4936a65ee"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "fc29102efc3048269a7c27bf5ecaee9c"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "fa91a8c8fba11d24c61321e2066a82eb"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "c2038a03159e934c38223009a065849f"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "e55dda055f6927d651833194d028998a"
  },
  {
    "url": "timeline/index.html",
    "revision": "67cdf818ce2e4c0e9f7f87d69dae6ca6"
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
