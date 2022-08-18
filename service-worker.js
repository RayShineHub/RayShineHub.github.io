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
    "revision": "c05788dc91c414ebbca52bff24c052b2"
  },
  {
    "url": "assets/css/0.styles.52d4efeb.css",
    "revision": "acd5ed4348d67c0a548cc24ff0dbbb85"
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
    "url": "assets/js/10.87ab23de.js",
    "revision": "012705722ef19a254f1bd74eade2e1d9"
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
    "url": "assets/js/14.e805ad49.js",
    "revision": "09a545429bf7d3915283c6699778ae1a"
  },
  {
    "url": "assets/js/15.31ddb37a.js",
    "revision": "673acf46e2b35e05ed28be9ef7ba9d0e"
  },
  {
    "url": "assets/js/16.719bf52d.js",
    "revision": "9ffdb6adc392425767025191ac3a598a"
  },
  {
    "url": "assets/js/17.da436ab7.js",
    "revision": "ac838a01a6f8c7ee6266b4a50568b17c"
  },
  {
    "url": "assets/js/18.05679dee.js",
    "revision": "8a0a3f9da5ee5021025b25a6ec5b5d34"
  },
  {
    "url": "assets/js/19.7fe8ec9f.js",
    "revision": "c61ff94d545a129dd1c7f813cb27ae61"
  },
  {
    "url": "assets/js/20.24dc3bb6.js",
    "revision": "fa19c5048dae19a67fd06dcce6add074"
  },
  {
    "url": "assets/js/21.ba54cdd4.js",
    "revision": "805e296f853c6c550b688c19626a92d7"
  },
  {
    "url": "assets/js/22.736f6302.js",
    "revision": "5db73d2397be0405713b9bd60060e933"
  },
  {
    "url": "assets/js/23.7d5e0646.js",
    "revision": "7fe05829329e88429c3c24dd6e4836e7"
  },
  {
    "url": "assets/js/24.18f80c13.js",
    "revision": "0ba1c55b60508301ac0f979a7baab7dd"
  },
  {
    "url": "assets/js/25.a212bb0a.js",
    "revision": "5e54025c31aae76d8dd15b8f9bbc16bf"
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
    "url": "assets/js/30.ed065f25.js",
    "revision": "287ebf8d7bc257565eecf5068a0a74cc"
  },
  {
    "url": "assets/js/31.2da5999a.js",
    "revision": "db5ad70e04c5690d7b59a9cedcdfcd5e"
  },
  {
    "url": "assets/js/32.00465fee.js",
    "revision": "82ae572a789dc1bff85c462653c7be4a"
  },
  {
    "url": "assets/js/33.59b2afa8.js",
    "revision": "0904ed049d331a698b26732a29a2c11c"
  },
  {
    "url": "assets/js/34.3b4588c7.js",
    "revision": "277e3879533cd9a63e31ed04ab7a6406"
  },
  {
    "url": "assets/js/35.9e06c7ce.js",
    "revision": "675b3a7debdc3bd0dd1362430d444313"
  },
  {
    "url": "assets/js/36.8438d803.js",
    "revision": "caa48c100856a063b280e953a21fc86f"
  },
  {
    "url": "assets/js/37.51314a1b.js",
    "revision": "aa5a6d08705da94ab360a8c2441d437c"
  },
  {
    "url": "assets/js/38.380262fb.js",
    "revision": "36c6eb3d0d4dcc088421a86f9f9d5e6a"
  },
  {
    "url": "assets/js/39.03b65cbb.js",
    "revision": "68ebbfa4a5292d2b755fe04bd09f574d"
  },
  {
    "url": "assets/js/4.d78373e5.js",
    "revision": "728ab64fe4081b516d808ec97ab21ebf"
  },
  {
    "url": "assets/js/40.50486fd1.js",
    "revision": "3be3cc1b40348ad56798f6f6158617b6"
  },
  {
    "url": "assets/js/41.e0af9468.js",
    "revision": "8a0aa5970e71f707256b2126642f2a37"
  },
  {
    "url": "assets/js/42.d2927e44.js",
    "revision": "5517872f1a8ba6f740f2d07afb85e628"
  },
  {
    "url": "assets/js/43.41f05e72.js",
    "revision": "42940b4425acb10d0e86aec357331aaf"
  },
  {
    "url": "assets/js/44.d7384fdc.js",
    "revision": "29f454f483827c51f91423291c96749c"
  },
  {
    "url": "assets/js/45.468b8549.js",
    "revision": "61cf5b1f230c06b34f5414c4e0b08ddf"
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
    "url": "assets/js/9.e8b463f7.js",
    "revision": "71ff6fba1b8f5d5abde81e48ad750e65"
  },
  {
    "url": "assets/js/app.d49cb7a7.js",
    "revision": "4e4094cf7f0abd5e823ae250903e2222"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "b1591b877d865be5d0d286110e86674e"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "d88dfe3c9f20ec599b21f120e4f3fb8f"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "158318cb1c2c3905c9075a30c9e155be"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "2150e8f038a9afa39766130e641e4811"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "b0a6571525cc6d38b9e4f77aaced2772"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "1df1cbba9f0f948f5c46abef9204ab10"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "9c6eb5cf0451d85a5935d9caa5847f05"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "e2da31145313b1ec90eac0f696940fdf"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "f7fd0834d00c76d665d9f82c34bce80d"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "c22a894c0b85e582875be1ea0f125ca7"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "b2a718cbab0b8903dd9d3a129e4870e0"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "10d4578c1292774bf16a02959f6c0cdd"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "40e0e9b2c14ea85ccbaa5550d790c0aa"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "9fb84d02b3fd82fbb1ad577093c7c6fc"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "3dc8639f632a455bfeca2c8ffa29ba9c"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "83db4edaee7bc91b98b98f765090e589"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "59e4df1335e233bb41b26d3f4f90eaca"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "4c63bc4d2a8da10b197591baa69cf874"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "4301cc22d2246fe22fa53b6d60f97ff7"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "7f183924dc31768aa0b5687fda652e65"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "081b0f0228d8da61bbb7e7a49ae4dcb1"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "244ba5eab14e8959c431369031b1635b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "663bdb2fe541c6e1f6dbadc7c4524a2c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "96bcd73c3d93655f9db3ed8f122a1301"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "a19bd29d61d093cd572171ca35285fee"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "452aa5207c21035e17093e2da6f432e3"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "6e3a37182e0d229c8ee330f6e3a0b5b5"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "a5f42a5442be0fe63532c4d340c02e55"
  },
  {
    "url": "blogs/每日一题/2022年/6月/18日.html",
    "revision": "5e8c6e82bd8829f7ccbda268bb6c7980"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "19e1ab920363e1aef91af20d80142285"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "aa710cb0ddbbb4e83069c790b329143f"
  },
  {
    "url": "categories/index.html",
    "revision": "84dcd304ddcccb2bec000163ae8dbbde"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5066af90e3f8e2b01fdca3e40604074b"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "9cd91bea11643db7df2dda2ddf71dc92"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "bbdeddd6c842d3a820d50dcd42c5da9f"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "a10dd47587eb6064a201672ad04d3a11"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "dc55a5d24d700c248e9709cb10f316bd"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "b9d33a812cbf5b2a10ef5d242c899eee"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "e87c51fab020100d2fe3742f00a153f7"
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
    "url": "icons/android-chrome-512x512.png",
    "revision": "992fa5d332ef40a1ace7c8b88714beb9"
  },
  {
    "url": "index.html",
    "revision": "4a028bb4e69eb6258879b235931860f7"
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
    "revision": "f3e925b3e926b8620510b01ef8f0cf73"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "232b5aef1dae90d4671c4a615842fd91"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "11bd4baf76ac2ac9213d00214b67d65d"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "36cb87c203ecd84cbf237bd4af6520c0"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "a242035e1badb990cc8e5a8a696203ad"
  },
  {
    "url": "tag/git/index.html",
    "revision": "623ea4da74fe2c43205e7f794f28ac1f"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "f28b30b7f49b091f6ce6258fa961794c"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "257d806038dc1660031c36983606d352"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "7d2488e55cbc97d559c0d69fc8a4bced"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "ede6d042d219082139f4cfdda0550475"
  },
  {
    "url": "tag/index.html",
    "revision": "f7230f947f75a2643799b2d0c90c3383"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1e918dd1b771ecdadc5cd6c8e5c1ffbf"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "be971d4af6c3effb5c0e514f330d00e3"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "3b7f88dab0daa9f10664401e2313c2ab"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "4d43740f8bdaab545f8d9351d4d815d7"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "a734ca992541525fe6d512fde8b4921f"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "40eb5fd4a590dbca3cfea8770540bbb1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c814b7f86340afdc3709b60bb652335a"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "268858bd16a4e07ab8abeb2928e34b07"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "8dc5b3d0f2abaccb900685cb84703f39"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "d8f846534396731852d7af023f7d99b9"
  },
  {
    "url": "timeline/index.html",
    "revision": "9292572756183095377a6861ff78c22d"
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
