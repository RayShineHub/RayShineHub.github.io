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
    "revision": "13c68207fdb8a503901839b71b728b3c"
  },
  {
    "url": "assets/css/0.styles.906a0e69.css",
    "revision": "e40fa17a6e9437f88e13e17925f54793"
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
    "url": "assets/js/10.38bedeee.js",
    "revision": "7bf5adce806193a9f7bd39e98b78a810"
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
    "url": "assets/js/18.78b4b520.js",
    "revision": "7a3b495c6522fd3993fd478b06237d48"
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
    "url": "assets/js/21.690f2abb.js",
    "revision": "63986baf7461653af2d567ecede2be9b"
  },
  {
    "url": "assets/js/22.81022911.js",
    "revision": "068e99de128088213abdfde1139181e2"
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
    "url": "assets/js/42.d23a6523.js",
    "revision": "ebe24e9584e093da46af49eed7fda2a3"
  },
  {
    "url": "assets/js/43.f45cbf1c.js",
    "revision": "9a402f95e871e6d2099c4705ea4a8ad0"
  },
  {
    "url": "assets/js/44.6fc5e8f4.js",
    "revision": "192bf742fcdacde13051bdfab11ee1b3"
  },
  {
    "url": "assets/js/45.099e4b3b.js",
    "revision": "ea037e50d2d589a0a3f37a4edb9d20f6"
  },
  {
    "url": "assets/js/46.b332c95b.js",
    "revision": "97778bfc1aaf39bf0022d42845e2bd3d"
  },
  {
    "url": "assets/js/47.5425c05e.js",
    "revision": "f41c8801f2f5bb25347ed121e9598548"
  },
  {
    "url": "assets/js/48.4dbdf447.js",
    "revision": "d1aec585903fd2a4e82df12de5253b41"
  },
  {
    "url": "assets/js/49.b6f61eb2.js",
    "revision": "5826cc0f9d2de13c4fed1b776d51f2bd"
  },
  {
    "url": "assets/js/5.253c447d.js",
    "revision": "3dcead80046cfe507beacf73d21ecfee"
  },
  {
    "url": "assets/js/50.c3f912be.js",
    "revision": "68b6ed03c979e5883d73eaaa64314aba"
  },
  {
    "url": "assets/js/51.62479d30.js",
    "revision": "1ab778d92b7a25513e589f6573811720"
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
    "url": "assets/js/9.1c2e677a.js",
    "revision": "56561f7483f57b65bbfde2478e71b6e2"
  },
  {
    "url": "assets/js/app.426e0e1b.js",
    "revision": "aedad977e762b1f5d7f6d4b3ea9ddd23"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "ee868f3d552a24094f81054ae190ff06"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "2473e5aba8cb1db8e5e0969955181a6f"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "67165cb6654c2d2b92e55859dc8d8171"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "7c695d05c95a31c32c90057b9798243c"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "40b88259fcd99556f27165883871caf4"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "0eba61067a7ddfb1348c2278ab8193a0"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "b77c0ed3a10a45d550f8e8ab6ce2c3b4"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "26490bf29635501d8e9824422799239b"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "09a437283eacd76f706ba40eb82bada1"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "6a1ccd18dac6f3a4e018003409b490d3"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "bd9789ab950b7d40af5527a408f8ca9f"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "4250b51fc899a6290993897c2edc16e4"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "c83006cbd4cad643f8c879308ed96150"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "31c4c9e0a84f592c9347fcc52dadd41a"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "8a3d7a61eb0cf7adf226444596282421"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "2540f6eead3cd00cf05ab1a44152d508"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "c1bf406bc6cc7f34e39fb4cfeee439e4"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "a9f3581eba955737eb184f0da79860ea"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "9df180b7142120217a97c9172edbfb44"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "ed2116d45ec5bcf97a62bc32c843164c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "8df34f2dd9e4ec9a2ca626d1c011f9a2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "b471eeeb82898330d0fa29405ce78261"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "eb259164b08d04789d0a0d497d79a20e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "04394c0453b575d9fc785d771542d0a6"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "89072419f41f924fc9eae747eb2d7777"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "eb5759529b76db31473526042125f2e7"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "b52958661ecaf00544e465dc72558960"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "851388a3d20cec2c5ffa04b063da719b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "8eec26ed6968e64c9e65d6de83454db9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "a9386b60c159e75bf5ee980b84a4633e"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "c9ca2d8a98dffbbfa635a7f6be69f069"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "a042efc65a9555be79b6c1c31c2402ab"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "86d3941e13dcb3e728c1bff223aff9e7"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "bde56d80f6499c83180922a8057f44ef"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "5437c8fb092f63a110b56bac77468a63"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "3784dc205cd988af401194e0cbd84331"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "23f2490b5b9a086408b2be55f7a64090"
  },
  {
    "url": "categories/index.html",
    "revision": "fe30c803670c6be4850470d390a2b5be"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c2014bd11c9c009d29bb5253c064f0ae"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "75832dfb68a26e4772c718ad5567bcb8"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "47d5f097874641e647d0447d076d3414"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "29679671bc2db2e61dfe070c7ae7294a"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "77a90af5d56ce86ccbb2846440a96047"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "d969b5f6c605cf5f0974c9524ca1622d"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "e59b2ad18cc62f27e56f32ab54598c3a"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "74d5ddfb888532be3ebbd0fbfa475f51"
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
    "revision": "3d9ea480f81ef22c633cf2b2ab91947f"
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
    "revision": "52b7c3fe9e60b4912015769247cb432c"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "08a61483775e3decc6c90bf49b19ed72"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "15619cc8d64ca786e1b8d8c20d102158"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "fb1d95039ed715827a68c64a1230782f"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "0dbadde37d74d43c6330240daa536258"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a1dcae3ee159b85a12575ea5555b21f1"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "5528dd0fe985976579cdc5ccd6685695"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "6e7ebc4b56b144511273d5535b417a88"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "43e6821a31f874f11838fad84501c80d"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "625b3f592045161d6973f5765f1c1b1a"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "eac5234908c9c0229068d2bda8b25ac9"
  },
  {
    "url": "tag/index.html",
    "revision": "1b8553ec13df76bab5d1206fe8b84782"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ad5c09507db4a1bfa844e80ccb7fb20b"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "736761a1d954e5e570a16394ea283e94"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "3f1f4b58a57d0a367c4a932b0601bb31"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "40c85e7b3f85b9a80ecfc755b21b8b91"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "a25f3a760e9a47d990d239da4124d328"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "4ae4863981c417f92f6ec5cc075b3d70"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "4dca15efc4a8f73a91f859bf53bf812b"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "17467c2cd15d65ac40cb5f9e5b69e178"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "fc021211dc9d3d3945b2a927bd8d58fe"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "9205472671c69c4863f9d343edaff310"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c9c04d2827d5d7a0509ebf3ae13f3eb"
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
