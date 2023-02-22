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
    "revision": "4f50610d8f6be6711687013cd6a88b01"
  },
  {
    "url": "assets/css/0.styles.c6f2fa03.css",
    "revision": "8bb2faf4d7e07cb9180f98e8f453c162"
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
    "url": "assets/js/10.7412d58f.js",
    "revision": "e8aeed0638cc11b468daf708ec8899a8"
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
    "url": "assets/js/18.f7d3d0c4.js",
    "revision": "50025c61b84bc7ee74d10544727381da"
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
    "url": "assets/js/27.6965b33d.js",
    "revision": "31aa344df458f2fbc38379031a427323"
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
    "url": "assets/js/33.cfdee13a.js",
    "revision": "40e0f367c547fe0ff6e9a38422ba1624"
  },
  {
    "url": "assets/js/34.d49bc5ff.js",
    "revision": "372957e064b84eed7c1ca3f6e129f9c7"
  },
  {
    "url": "assets/js/35.49bde688.js",
    "revision": "099f312d0237abba53cc3af30364511e"
  },
  {
    "url": "assets/js/36.4595ec66.js",
    "revision": "737fe9899008afad58a5a53367fcf146"
  },
  {
    "url": "assets/js/37.b4724b75.js",
    "revision": "d1840eb78f2f0322fa181b9af868b85e"
  },
  {
    "url": "assets/js/38.f4caccf6.js",
    "revision": "73426c2750276f81f3ec9122d430e0f2"
  },
  {
    "url": "assets/js/39.c349e5c2.js",
    "revision": "3622fb743c939d8ded3404f9a15b16eb"
  },
  {
    "url": "assets/js/4.d78373e5.js",
    "revision": "728ab64fe4081b516d808ec97ab21ebf"
  },
  {
    "url": "assets/js/40.3127c6a9.js",
    "revision": "46023d8293e8ba106ec652c3c2de3b20"
  },
  {
    "url": "assets/js/41.213f976a.js",
    "revision": "bcb690f4a647d5f0ad655be26056b4e9"
  },
  {
    "url": "assets/js/42.3ff7fc67.js",
    "revision": "808fe2340f2af2610979123c85ed30a4"
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
    "url": "assets/js/45.3b676ebd.js",
    "revision": "91119af59d9ccbcc692eaad47559c8d4"
  },
  {
    "url": "assets/js/46.02654649.js",
    "revision": "51c7a22335b84b3d0dcf4ebb43b5ce19"
  },
  {
    "url": "assets/js/47.c5555f0a.js",
    "revision": "5b1a117c45234cf435a6326b6e465981"
  },
  {
    "url": "assets/js/48.00335454.js",
    "revision": "ee2da6b2340ed5a69d2e83f780e3e087"
  },
  {
    "url": "assets/js/49.05b2b049.js",
    "revision": "59e6a7e44f69b72d1cc2bcb11c2c8945"
  },
  {
    "url": "assets/js/5.253c447d.js",
    "revision": "3dcead80046cfe507beacf73d21ecfee"
  },
  {
    "url": "assets/js/50.d33d4f3c.js",
    "revision": "f962cb82776f6880414ef1ba8daf838e"
  },
  {
    "url": "assets/js/51.60ac3e4f.js",
    "revision": "4660119a7ef2f523f20b3f7b6add04e1"
  },
  {
    "url": "assets/js/52.8b56129c.js",
    "revision": "e7c8e34a836b5176f41f8b8855515868"
  },
  {
    "url": "assets/js/53.be4cbc05.js",
    "revision": "d78b400ee22d37f5b3fe54c01d435419"
  },
  {
    "url": "assets/js/54.2ee00dea.js",
    "revision": "ce390d1e9f7d7d679aeabfea668d7bfb"
  },
  {
    "url": "assets/js/55.0c87445c.js",
    "revision": "3c2062bd2c9bd61b3c08b3fadb2106aa"
  },
  {
    "url": "assets/js/6.05747ed2.js",
    "revision": "24c96509c63252b8f099866c82523688"
  },
  {
    "url": "assets/js/7.30bda3ea.js",
    "revision": "35c3ef7f8037b6458762a4a8d4a26834"
  },
  {
    "url": "assets/js/8.25d65677.js",
    "revision": "56b4a67d9838ffc22079b28b12ecd12d"
  },
  {
    "url": "assets/js/9.900d2b95.js",
    "revision": "6388ef26d24ec521540504862eee5f11"
  },
  {
    "url": "assets/js/app.7a81d67c.js",
    "revision": "af0cae4dc42568039254f6c81f73f993"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "e0d24ad9356427780900a4f04195b99f"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "77b10af4a4852b0182daa24006ffc43a"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "3b2f2eb913d9fae82c81eaed738d671b"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "f7b5ca224d1f6d4843290631c099cd58"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "d1fee53cb2a3adaedca0cb174b034200"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "ace3df35fb7e67a968ff601cc8b3eafb"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "f3b1ebec0a8fa30862857d9d1add7130"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "c9a011f4685573b3ae8581cbf2ce97ae"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "7c144c2aa00cea2a9743bced56e9ce00"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "3394f239fd9acc82053ee4966a91bf26"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "15b6d5d7f8c1fde77fefcf97304218cf"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "93e0c653d2f9fd0013680dde478d3446"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "4354223dab422c832252cb9b487a2566"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "030b12c1a8a096b4105aaa77f51d56be"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "af63004bb7ab55ee7bef87f1331a835c"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "012f861c8daae13fad64c2955a3b9528"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "90949d7369ebaf7892ca37016037af25"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "cb22e211d5a498ee2d6b40a8a2ecf2d4"
  },
  {
    "url": "blogs/文章/🌟西安🌟攻略.html",
    "revision": "54d4a71e68d6940736c2a6aa3ccb56cf"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "dae1cca1d8e13d02b73958470747a76b"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "1f06ffa94893ca8309f1d3d7be443e72"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "fa63a032c3b3fb00682bf1ad2cb9c9ef"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "51a4fe201cad860b464772ad0a4962e9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "1d3970ceface18340d6eefbb0b382022"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "9aa35c7c41fa053f14d3e64a8267c1f7"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "98276452bcdc9fb40f0dd337b048d945"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "ab8678af96173504dc18a71e3f1b5250"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "f01f760549b8e703bc559959efb2f2ec"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "c901916037313ec2e0d42f6632e590de"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "9eb7ea38bab6fb4fe6a79be35a6cb7ff"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "2476facff7722dd86fca86ca34565c1f"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "393ecf4c9a6bf883fc56ccd3ba16fb97"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "afd665b10438a4f702b435bfaf0d9d37"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "efc18d6bccc73432156d3c15608a09c3"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "1f2988661d98834745ad55867b168ec9"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "37fdaef685fbc66ac0cc03a752309c63"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "752f58a546e7caa0f9925752da1e956e"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "a37890d26c786c32f56818908ba69d89"
  },
  {
    "url": "blogs/每日一题/2023年/1月/14日.html",
    "revision": "3a0ef6ccd574922804e8a4b7f23b554e"
  },
  {
    "url": "blogs/每日一题/2023年/1月/15日.html",
    "revision": "8fc81c23585b49d3a77b776a8750e839"
  },
  {
    "url": "blogs/每日一题/2023年/1月/16日.html",
    "revision": "494dff8af58a7d5e6c4bf3dfa15764cb"
  },
  {
    "url": "categories/index.html",
    "revision": "90f6af41670c46e47587dbda16a1e044"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e353eca3bcc05e304032017c65e96be6"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "527c660bca0c885afc2cf9cfadf9a301"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "7e3ec65218e6f105705c09acb7cced46"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "10ffdf7be0579d87bfa7600768692fcb"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "3a493e96c1c28b6c8d71c70b1ceb06fa"
  },
  {
    "url": "categories/旅游攻略/index.html",
    "revision": "8b218bd526245276ac050a1bbef40ca1"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "6f77ce0f9337200c44ec7aed65d594b1"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "a4cadeb10876f5ddbd975335263cb463"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "bf5f81d41ba589e54682191d55ff8228"
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
    "revision": "86a18f0bc827f48cae11dc2cc07f05d6"
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
    "revision": "beb8f722eb1f275610b1a4f2a450f99f"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "f36cee7f8472900f2425ef3d24752609"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "e54583aabf893693539cea08beaf3b7f"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "76d2291f55e319224a568bb5a1a3f5bd"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "1cdbeecf8e1c7130b33115d813b9428d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9f98710f196c71afae9bfb4ed4029442"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "d1c90f6abbf40dc6ff353111932cd803"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "5425700016d655ff6116b26bd0edc99a"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "bc693df920eefc79bd0552d24868c5ce"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "b230adc7b1ffaac26ca69b7fad330b62"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "98b4cc6fb99f58f59c9ead0ba6b41ec4"
  },
  {
    "url": "tag/index.html",
    "revision": "4e58ed4b2d0973581d37cf44b9338807"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c411ec51b4994e512778d490860fe30b"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "3b03e70f6f587f543cd6b5788b48c2ac"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "8e22104ff5a435474a53872f5bb2b543"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "23edf9f2e01544102b646a95e1b31af0"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "84f6842d33c3bcb8591193e2d30cc2e3"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "559ae13398e96ea1d31d2e16e370d9af"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "fb8b14c88b70a880c91f80553d50bd41"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9199d21bbc62223a423c182a319fd536"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "4e1e99591fdc6bb78d94069c10354e5d"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "33184ea0b08fc1a09bb18f376ae2bf0a"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "2ad9365e1187eba7a1eb24a71bfb82a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "3fa0573c0000e328b541ca27bb56dcde"
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
