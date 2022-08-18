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
    "revision": "54849f6654fc9ae821fa6fc9772f3b12"
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
    "url": "assets/js/14.a15aa2a1.js",
    "revision": "48bd691e5efbf6e15c299041c245e75e"
  },
  {
    "url": "assets/js/15.307190a0.js",
    "revision": "17232613fc5b560de726d1f5f2213c42"
  },
  {
    "url": "assets/js/16.5b45f94b.js",
    "revision": "28e666c1853a4fca6a6b9f459cfcb6a5"
  },
  {
    "url": "assets/js/17.da436ab7.js",
    "revision": "ac838a01a6f8c7ee6266b4a50568b17c"
  },
  {
    "url": "assets/js/18.4eb56e43.js",
    "revision": "90025434d92295e4fdd002eeaf1ad949"
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
    "url": "assets/js/26.ae3f32c9.js",
    "revision": "8048f8cc9173fee6c09d3e7e949114ad"
  },
  {
    "url": "assets/js/27.71fb733c.js",
    "revision": "41b06b40ecb923791d5c3b987970914f"
  },
  {
    "url": "assets/js/28.83c55882.js",
    "revision": "2ff8580cabe6b183d9cd89592d882e4c"
  },
  {
    "url": "assets/js/29.8f0766cc.js",
    "revision": "5750aca93bb558b4ffafbd11cf8f21b7"
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
    "url": "assets/js/app.e4c3424f.js",
    "revision": "a66ffa7098bb635261e2307575d5af04"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "b3574114acbc973c38dc9556a428765f"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "d4b5061a7d0516b73052a58e3d3fc3b4"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "516c780248b73b9feca02dde0bcf8715"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "0e7b420308a420d7ce7efa22c530ed38"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "32ece7c4982cb9729d8162eab5870161"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "2b3349da88a6d0fb6ad7395280a1c2c4"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "43815a839369d0849b6bfa28fd8e2469"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "f336e5c51ebd75b30ced170edd290b51"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "483b91f48699cabe58a4926d6f4a0dcc"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "8d223bc4475c6c9c2a8a399ef34f3e2b"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "7db293e711a93428ba47c81be8ff698b"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "15ebcb6277bec89abfc22b71cbb0640b"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "8adaea1bb34f67b41f45fd9920cb894b"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "f583e43c22024f389f8c64dab212d8f5"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "773665ee6985a8691245a19caa7da184"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "7ff125168342079d375a960ebce6734e"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "18558ec1d75a4e9c1b2d87a665433922"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "8261eb2ebe16fbeaf583e3625ac147b7"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "66b4f5d645fa66a11ac4ff1336aed137"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "a6f19e94e196be6b5dd597939e82df83"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "be007133ee8b57736b65e865fd28bfb8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "f87756d7eae7c2fca7e14c71812c07d7"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "7cdbad45eab4f297b902e99cfca587a9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "4b3f83af90e6cb606689797e9fb952c3"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "abc9168d770d21e3e5965f57314aae12"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "298a122d68941509d4aab86a0652bafa"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "c989e50d501cfc2f1e857a0a3120c847"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "1f00c174ee95ad727ea5a9b0cf91a4c9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/18日.html",
    "revision": "a626f49dafb351e218964729784ad5ca"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "5b2f6fcc8ed165845ab0f405d1367feb"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "3cfde9b803a09a806b436b38baf5ae2e"
  },
  {
    "url": "categories/index.html",
    "revision": "9d8b33caaf01f9a395a45a8cd77f205a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0ac0fc43c0e4f4772855c440a3e7e3ac"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "689ca3d325430345e0997b4df5ac6169"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "1eb477f65140f41dd96cf122d8d1043a"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "f9ef1b040afbc4aaa010c39459414d7d"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "59aa45b70bcd6050acd059c965dd48d9"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "4372a1d08f1e937f5eea05d5e6d333b8"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "3e56e349fb622b31523504e23792dfbc"
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
    "revision": "1f97a564c414e81bf5745401a8d21ee3"
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
    "revision": "0a89e97e5ef770fc22cc6ec40543aca5"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "6d0175b1c961b2a204f07cf0792cae63"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "7cc47e04f9e3e7b66318d957edc3b247"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "3af41e15281af7fa9e9cffb8d4a22135"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "f9c17299173069213527e54bcbd6833b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "772ad5e4f4c20b32f6a96068465ca224"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "f228d71c7d9959711c27bbe576258989"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "ec81256bc2f4d0ee942b738b027e0236"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "5f245aab78b0cdf29bb8b1496bbbbbd3"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "de35efb61ba793e5310350f7ec0dcab4"
  },
  {
    "url": "tag/index.html",
    "revision": "fbf13a5f27de852d37b2c1ca4e2a2673"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "4e6fe6c3f5defea9f9b949a094b27c3c"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "5d13b02afc04126d098faad4a81d6b08"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "e26b369078441a5281e7e4d510b449da"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "ac8c8727184dc092a9ef44ab0c58e618"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "febe601fc98646d09be2e1dff8c94d7c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "89d582d97e6543a4b78d9b90434ddc75"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "da0a7b57c6b1665253c40d4feaa5210e"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "8a3ecbbc39820f8486164890418c80ed"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "82a85f0824d7083c7d5467a01f2022f6"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "d98d1d71619bfd329289ebb49166c7c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc0b774a3c2fff9b28fe9be258076a44"
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
