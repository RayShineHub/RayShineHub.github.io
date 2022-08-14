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
    "revision": "92e9d2321ffa46dddcd9b242ec4e8568"
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
    "url": "assets/js/18.8a085712.js",
    "revision": "fe4a68d4921700ea1caeeecae8a5b864"
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
    "url": "assets/js/app.7fb454ea.js",
    "revision": "3a2af823c8b86a92a19165ce0c806bd8"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "615ada0ee0696da503525a47949d73b2"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "fbc4537af407d85ee3a4eb4b10725628"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "a5028368920b137b08ae6591dad09cdb"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "699c0a383e1c1f768911dc6f0f69ff76"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "1959b6a0b25192114798485245eab86d"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "e0993182cfdf13576f290188bbb2227e"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "f32f72ed3423e652f848836cdc4a09af"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "2a3509c66a189fdda74a54b8bfee3f2b"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "f50f4b6e095740bd71a1ac6d868573fb"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "cbfcf9a376c435f136f78889faae55e0"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "5a89ff1be55489bd1528efdd5f093266"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "e3658cd94f039c160606080e13d638c7"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "ad43de1decbbeae83b0f3d5312439b89"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "c78e3e9aff7588e415e4972f9a85d459"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "68561a619cfb352e54ae4adb08e4730e"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "a24cbf597e87fddf0a09aee0ee1aff9b"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "0dfbea81a5582ec90ff72d0df87034c0"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "11da02d1cc91b6c920383f154febafd3"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "3c262c30c061ebb20021c0f7f1eb7dab"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "42306214556e45128616837df7898540"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "3236e7aa366c4d47b3f922956b95f889"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "5b4d56653ff2c909f0204a11d8592aa7"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "ff8c3e480150e838182d41ebb0f1b895"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "8c8a6aba8c278cbf143f4aec04523645"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "770d8fde9f894a75d3ae86135c3ac73b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "9aba9e9ba4b7aca67d90548f9237499c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "952f3e7dafb70906995c0914001b7434"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "0e0ec3d5c51989bea0681c3da1821894"
  },
  {
    "url": "blogs/每日一题/2022年/6月/18日.html",
    "revision": "9e94998f37cdaa8fb4752b501deeb123"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "6955fc1a3b250567e18754b108abefb5"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "f2ce7803bcf8e27957591c7ff360b330"
  },
  {
    "url": "categories/index.html",
    "revision": "397fc3a554bcfaa9e69c4294c41b0792"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "92edb5058f663fd13ac5030a7800ede8"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "7bea58a98f10f8f5f93e808101ab49aa"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "1e19b943de202a5ea1f0009b4063d0b5"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "c93c4ad89a7c72519572c6db431c52d4"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "f24622149d7b6ac960823378971c491a"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "ec6f93950f896408d514f950ceff7118"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "28bbe8211412bd5d059b1f7068331d5e"
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
    "revision": "f6e338fb5bc96fc49c3f6f4aa50c4b59"
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
    "revision": "77c9c38fe0ea96a2c97f046e53af847c"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "54f18f40c0ef6fc2d0ae6ddc6c23acc1"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "cc1039eba3c60d83d31e23348b188d62"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "14a25bb28d9b6858cc038898cafd8231"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "a9eee6f41703948ccd2757c1468f1b41"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3334448cf7ddef049f607152b77bb636"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "7064750a09ba314df37bebe1024af197"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "79df1b51d9c77712dcd2f2f27a671473"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "d81b7d4da8952680742e6c8951961b8c"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "6cbf1eac1ec59cfac3317a9112fa3ecc"
  },
  {
    "url": "tag/index.html",
    "revision": "229061bfa5e0e5fee04d73a20cc86c22"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "9f3bac7ca443aa40ca6d8ae16aa55da8"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "fd50d0829ae15065f533eb144b53827c"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "5ba7fe8d21fd9753a82191ae06454402"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "76907ed3a22dcdce21015add6984775c"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "f49d237c52a65d519672d345cfb2fe67"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "06332bc5db80dc3e2ed23840f09e8b5d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "16d82fef6b10eadf641681d0cb2760be"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "0f582cf49b0a616f5545d4a027f853a7"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "fba5da471fb6765eb66c1322cc46de28"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "6151143726dfb7f5e96a9d8d469c699c"
  },
  {
    "url": "timeline/index.html",
    "revision": "faaf2d46f7aea3b2e8a72182c649fe6e"
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
