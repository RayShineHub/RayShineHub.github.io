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
    "revision": "fb0e6947ff7a2aa1722e73602f2cd87b"
  },
  {
    "url": "assets/css/0.styles.67aefc4d.css",
    "revision": "9f73b781e37581f9827dc3ae66819fd6"
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
    "url": "assets/js/10.885c3d4e.js",
    "revision": "86cf6677d7aad26b9b52781abc4c6cf9"
  },
  {
    "url": "assets/js/11.97a6cc42.js",
    "revision": "4f2d966d82ad9eea22bb67c62e9d76b6"
  },
  {
    "url": "assets/js/12.e8d85ea8.js",
    "revision": "dba3501c8da0930264da22ba5d1b07db"
  },
  {
    "url": "assets/js/13.719f50d2.js",
    "revision": "8ab3ead24b92ee5651a9d48266fb8bed"
  },
  {
    "url": "assets/js/14.3f04aa82.js",
    "revision": "103634c41ba8134bdb6c25b54b0de01b"
  },
  {
    "url": "assets/js/15.75354188.js",
    "revision": "fb3d857a641936d358c53902ab44f634"
  },
  {
    "url": "assets/js/16.ca2ade36.js",
    "revision": "f9ee460949b6a875e412d33f9df79aa3"
  },
  {
    "url": "assets/js/17.d1c2de41.js",
    "revision": "2b532ff5b14d858cefbcc5ed4c79124c"
  },
  {
    "url": "assets/js/18.c2756ba0.js",
    "revision": "f3afc9d47f6443c4d143bbfbd915a1f2"
  },
  {
    "url": "assets/js/19.7137dc46.js",
    "revision": "1a589cffbd445f8b8303a1762291aae3"
  },
  {
    "url": "assets/js/20.c7d50ad1.js",
    "revision": "66060a9823d40bc8bc094d53bb825a63"
  },
  {
    "url": "assets/js/21.447b31ba.js",
    "revision": "c047381f0d673d1a7eb1fd906f87a3b3"
  },
  {
    "url": "assets/js/22.ef905e7a.js",
    "revision": "439733b735db8e01c5d391874c46693c"
  },
  {
    "url": "assets/js/23.5f8fa5cb.js",
    "revision": "34894601a55e88dd2644467a714a8928"
  },
  {
    "url": "assets/js/24.7aac9cbf.js",
    "revision": "5a9ed605938cea22b1c449011223b57f"
  },
  {
    "url": "assets/js/25.3229edb3.js",
    "revision": "1a73fe63dbe77378a90a859adf04d282"
  },
  {
    "url": "assets/js/26.bafda795.js",
    "revision": "ce3f8d42cfd664d6e862fdeb807e30af"
  },
  {
    "url": "assets/js/27.b932bb09.js",
    "revision": "2d800054f705edbf9e371a13e4558701"
  },
  {
    "url": "assets/js/28.f6c13cc5.js",
    "revision": "36c7cf3a9d807bfead18caa048f5110e"
  },
  {
    "url": "assets/js/29.1789e2b3.js",
    "revision": "1d8149f7f63aec739e64c2c39cf2b45f"
  },
  {
    "url": "assets/js/3.4bf30332.js",
    "revision": "853759e25459fc47cb36e4e61272fd70"
  },
  {
    "url": "assets/js/30.51dff140.js",
    "revision": "59973f8330aad9ff87750c44a09b77a8"
  },
  {
    "url": "assets/js/31.3a88e539.js",
    "revision": "56e966de6e6c836d4f0fc998f0857fa0"
  },
  {
    "url": "assets/js/32.e6d57079.js",
    "revision": "b38ca6b4236ed79511855f1479dcce94"
  },
  {
    "url": "assets/js/33.91999995.js",
    "revision": "1cd0216613767bca2963ae3621670e30"
  },
  {
    "url": "assets/js/34.2ada649c.js",
    "revision": "f7916dd0c2e5799961c6e0c1ac1a0cca"
  },
  {
    "url": "assets/js/35.91fc64ba.js",
    "revision": "2bdfefb0795b682954ea734baf0148d4"
  },
  {
    "url": "assets/js/36.0b7279c7.js",
    "revision": "4cd575c4e965040e1cf332b9e9dc9e36"
  },
  {
    "url": "assets/js/37.8dabc34a.js",
    "revision": "4a77c8860e5b76812a0e7b9ac74c1956"
  },
  {
    "url": "assets/js/38.885bcd3b.js",
    "revision": "1e704f88fe6143caa4925b2d33d34561"
  },
  {
    "url": "assets/js/39.f60e46c7.js",
    "revision": "014f81e3e26b4a4e18c669a236934c52"
  },
  {
    "url": "assets/js/4.ac5e9992.js",
    "revision": "4d77071eef5a611dbd077c7418b5a369"
  },
  {
    "url": "assets/js/40.420e723b.js",
    "revision": "7cb7248ae96e7f94324af0ed3c3b183d"
  },
  {
    "url": "assets/js/41.df73841d.js",
    "revision": "1b59e801e51ea03575c0af99aefe94e7"
  },
  {
    "url": "assets/js/5.cf023e05.js",
    "revision": "46a91cf4e65fc084c345d7e114af0e7c"
  },
  {
    "url": "assets/js/6.49a5e5a0.js",
    "revision": "55ed59c57c39e8066f7bbc20340cc023"
  },
  {
    "url": "assets/js/7.47a67900.js",
    "revision": "7e0af325f6e128af8d4ab7355eff5de8"
  },
  {
    "url": "assets/js/8.9c7bf666.js",
    "revision": "ce20e913063c9ea1c245b39c626e4649"
  },
  {
    "url": "assets/js/9.337842b3.js",
    "revision": "3e3109975265feada1f23fcfc9e522fc"
  },
  {
    "url": "assets/js/app.c77ce24f.js",
    "revision": "fd0d4f4e48690f817f618c846816e07e"
  },
  {
    "url": "assets/js/vendors~docsearch.fa2b45ca.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "22795bf8436ab8337dd4c2a2dbe17454"
  },
  {
    "url": "blogs/others/收藏/emoji/emoji.html",
    "revision": "851f7e1564c2fd98f97c973e357be86d"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "a770e52fba287f26a02909824f46bfae"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "105399f1fd92cdf3504fa4ad20361910"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "710dc222e2e2b0a6ed4085e3e4bd3c5b"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "84870b78031f97397c774cc9111d31ed"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "85d2cefefd36190fe618fe6f507c7887"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "55cf408059731e712dc321b4ce6929af"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "c90d885136a74a5ce27c9fc8b87e238b"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "223b1667366c8192eb4e1ae9b79fbd4a"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "464e886d5a5cfd6c95d4ab192932dc37"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "4804af7cfb4e853a763f272a3d9757ed"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "d01d5151000a63e5624aa4c57375cca4"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "a961836fa123b18d1678cc3bf2bde56e"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "3dd9aaa6becafbccc6ce219e80563acc"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "f93ea8771fcf8bc783740701a49a9513"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "008d2df62412959c5d5a3f2ff160e07c"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "d18fc2a9a850e757f286b71e0ddf75fc"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "b1fc20744c630cbde6c86f19191249f4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "2946ba3c490bd5f8a64fdc0d52a655b9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "e7db4cf947c6f43ab36ca36d8c1a3bc8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "ce679e57c235dc126b9dd4a6787d51f5"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "d5c2d172d26bda1070da74103458dada"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "999a9b6250a3e23d37ff2f27fa3238d1"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "fdd326629c2f5cb432d9830c5240dbf6"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "b7e065a5e6b7720fdbe955af62df0096"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "92a90935c821627ea28f811067c2302b"
  },
  {
    "url": "categories/index.html",
    "revision": "3d62287f68b1d31e7c8a69346a44bc08"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2df9d35bbfc8e59cc4392e123344b724"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "41f2353276ce966105e81e4212edc2aa"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "94979ce751f32a103bf5030e5bb805b8"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "7614306f4c5229438b26946c0b2680e4"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "fce18813046495b84ff740a4dd56a783"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "2281477186d316153efb02b4c353579a"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "8327c032a43143e0a8a1837e244be1db"
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
    "revision": "386f0e79a054cc2158e94cf4bed617ec"
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
    "revision": "62f0b4067e7a5b6a2a947aa9c002019a"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "56b687aa2a27671ec09a865a35dbcd1f"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "2d5e0390732f88606993a7efd4ca9339"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c3c4e246df047c4faaf5180300f551fd"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "3c4f4b0fa3894069af9a9c6bdb3ad0fd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5497a7983dc02ae1ccd66780a2e4d2ed"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "a255f255f3817937933c2c9aa063a5ef"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "de3410e5f0673977f543c7efd480cb1d"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "e8ea2acd8e21abcf8a2d78983a875763"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "8c6576268b911f14e1f0110098162074"
  },
  {
    "url": "tag/index.html",
    "revision": "c44c9a88859d9d00b58dd31233344cb9"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b776a3f5bd299bd34007b9e51345dbc3"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "23b4d299b660f5171734fb0f076872f7"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "b5f82b006e913f9b7c8f064695525776"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "4da47af750b570c2394324e7d8a94e32"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "67e0484f3be85fb08016ee28412009d4"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1c8f7b8465e1333fed9f3504c51ec327"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "1d05e1c02deebbf02a849d2f38cf3057"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "6fc6462c96097bba4ed1679045a80b38"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "785ae2595b9937a4b5db4e1484205d5e"
  },
  {
    "url": "timeline/index.html",
    "revision": "edd51f5387473c7e345ee5434837ef83"
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
