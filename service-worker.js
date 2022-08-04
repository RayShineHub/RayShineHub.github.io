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
    "revision": "1080cb99a41b0b03cf5225eeea5399eb"
  },
  {
    "url": "assets/css/0.styles.c06e5814.css",
    "revision": "7be330f22424d9a14486dffdafc756b9"
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
    "url": "assets/js/10.b21ec4d1.js",
    "revision": "2fa15d6f98c531b18e1638b7dc803ab3"
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
    "url": "assets/js/19.245b718b.js",
    "revision": "0275752aedadcef9ffc5c754e37196ef"
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
    "url": "assets/js/36.7da0c020.js",
    "revision": "6c54863907a08d98e66748093754a1b2"
  },
  {
    "url": "assets/js/37.d3057705.js",
    "revision": "c35c198457f7789d9a95f25c26b658d4"
  },
  {
    "url": "assets/js/38.434f212d.js",
    "revision": "6437d21e98a87b1d61a768359bac6f4d"
  },
  {
    "url": "assets/js/39.816c493d.js",
    "revision": "1cbf5c60d64bf2a12c4fff85fcad9526"
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
    "url": "assets/js/9.ea92e0aa.js",
    "revision": "a522278c50ac61637d24bb685f2a434d"
  },
  {
    "url": "assets/js/app.3741c51c.js",
    "revision": "f4be2172afb429b661780dfd8a9665db"
  },
  {
    "url": "assets/js/vendors~docsearch.e52849a4.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "e77cc01dd36ed8eea7184a9ecc87cfa0"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "0f05311be9a47e682cfb517b10fad5d7"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "549b2e1e72919ed7c046cc2432e5bce3"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "cad9f1bc31d52a62378b94a0e78e6e4b"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "496b6d302c31d1fbfd301d37003c5152"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "591436fd8189f820319e3193c2f97d4a"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "3e5b6195a795b522cc172283d717764f"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "72b82077c9e9831a46cffb6185c3cc9b"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "43ea85cb5f44fe87a52ce1fe48cf0d38"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "9d93b1248edbbb097136ecc45126fd8d"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "e87ba5e620882e51366e9c1a7f6f878a"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "c95f360a67f16e6942b875b083054f13"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "3b69d445b22bdd9f030892d1414fc2eb"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "c66dffd2beedb4eba624717687970634"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "2c0f2bf07a8403efa19b596c5403e83b"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "02514c603cddbad8153519c65a07d7e2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "6904fb50d5b485ceb94b4fa077d10573"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "9758c5efa1819c1b6d73ea3ef3e5d978"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "676386c9e64d566477793fbd968d1e18"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "4e0b4d5d3e14876f8745ce48fb2aa733"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "c4afcaf7cc77940ef3e9a4a881b03fd2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "6d42a24a6f54ba32d29b05ad7be36360"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "6208738323959558022d270d79acc862"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "0b17f5d0e6790b9be3db5669204ab829"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "8f6103e5eadb2c6a832e10a4e82e0fe0"
  },
  {
    "url": "categories/index.html",
    "revision": "00c9791be8716a7ae764210691f416df"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7c4a8309f0958441fbdacf50369bb6b9"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c9503de9cdfad5efa7b1106ffaee5162"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8b28030677f890d3bc067d5e3ce21630"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "666ee19c7c91614906e59032f66c41c5"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "3447aad860789ad6fff8feadb908bd10"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "1b6aae6ac99e83f96c7f169e810ead33"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "0c8cd8bad403733681d0aa6e60ff917f"
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
    "revision": "21cefad7bc2a42ddccd53c1eade22c31"
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
    "revision": "a02a0c7a2132b5549e60f5fa33af49b1"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "96cb958877ecb9ce6b7434c27526f895"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "1b79567b1b54f9f790014ab80ff80d1e"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "757df5c63124f49fea16f2c6462fc456"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "2650067600ea0bc456e399c31138a243"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a1513e11384dfac4bf55e67c0f5d77b1"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "41162b4468672f56b8b8094e1813b68b"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "7e7c535531d301b796c7cbb7911b14d7"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "cf8d5db2844e6c93edf9aa13c926e6cf"
  },
  {
    "url": "tag/index.html",
    "revision": "0adc5bb65e5dd7366da7b4bbbec0cb39"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "9d0bc191b1801d1a89e362148a2acb28"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "58a84c78de752372218e78b6e594c867"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "04a4a3934b371cb0d580af6d4a179769"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "51d4412b36e5758894ad039b94d8e6aa"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "51742dab11084ad5e85d82e062e36684"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "020ee9202c38dee4cb422d56cc805e03"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "114318b14da5da1482ca1ff12097d801"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "e9c74b7ddbae062894e874170ed95fb5"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "0086f3dfd448c569d314092cce3730ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "56eafaa8fdc08d5ad22cb4f6d9e19967"
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
