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
    "revision": "456c7eccd931e1058be27ff68099e8b7"
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
    "url": "assets/js/18.3dc4524f.js",
    "revision": "c756fc778059634d6931a4dd406bf257"
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
    "url": "assets/js/app.3261bd61.js",
    "revision": "78b59e4487cc917e240f94ff49a12721"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "98e8487e5a025067fe8f0e657dc05635"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "53d870cc5b1fcf71f3bdbc70ac9f20db"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "152800ca87049d42579ba9394f496c98"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "ff6795cbb6b190ddfb6c422f79cc766a"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "fa04f455a91d44787a57c6a9ee4d2f49"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "5ef040d17036b9b71d709c44964f6475"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "3bd01ffe2c356a3116f6edff6c1d4108"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "b0442102a5389d60d22ffa54c8d2bb88"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "0cb2f1822dad522605239d676a65d6bd"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "3b2c76c2516023dd60d712b4be293d88"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "952af1354a5a2c213df56e85f5cac255"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "ff021c6894ad4232d022dada37e908f7"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "718dbd3dbbd04563515c0cea40bf5959"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "df158a97802ce253e44f972c203ae340"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "6b45e72439d4cd8a831fd4a4cc2fcd2b"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "1c5ea62a3562cec411a0d75964def55a"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "165b23355b020f99b4e2eedc82bb5345"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "a6ed6f0dfa1882927818b861c0811e0f"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "2efa418abbec87500f1123a5bf88851f"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "895f9a8a990ef76903f96bb3a2e2e7c7"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "2e6ba6ec16176f7d258ac1eced0e08a2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "792ebf63b6f4735e26296999d6ccab01"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "d06a843e4b9fe6512c22807cd5bef3e4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "57664e34dcd0ab1991a91a8f2b3ec459"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "0bdb65d6e68401af4162fb908dfcf2bb"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "0929f5ef99061185dcdd5587d4406b73"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "93061e7c6906c83ae60dc9f4a505e511"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "95e3cf09e9f5fc2ae28940c75f0fe25f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/18日.html",
    "revision": "170f9ebeada7ae82f7f31fc8780fb98e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "c9c81080c7a28e448423b2e83cccd3b6"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "256bb1ee79167cb955c1e8fea27dcd9d"
  },
  {
    "url": "categories/index.html",
    "revision": "c805831d185f20f97a383da5b7bac390"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e81e7c7a554ab3b80667c311497c83eb"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d9c6905666e01815bf7e585cb5ce14dd"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "071da26a16c15da0c5b80923bb10d3b4"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "4d5e38a0c2a23755bc556f7a96a60f68"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "5c3d44da0deff99877bfc57e51c424fe"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "220a28153553fa3bacc26b2f16355a6d"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "fbfb5a5d621e5833601382ac4b1381e6"
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
    "revision": "99a9d26416f7daa5d4cbe6dc9def10e6"
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
    "revision": "4805267bff59230584b659efecd107c7"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "b6613fd231465c4f163e0bb2741db220"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "a308cebaeac32af5e5b5646ef3bccf34"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "8d69a37cb2ee5746672698db4b313dc3"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "396063f52bea87618fdf0c3861610c6e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "958b18a9ed630ba9b3782dcc55121ef7"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "db07dc1d37bb10e9f3917f58acd5fe2a"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "6b881933e9920341f10c51f5e39e4bfb"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "70eec27fecc90bcf394f07d9f8a723c0"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "aa87d9a273271770fe26c26001d1d97d"
  },
  {
    "url": "tag/index.html",
    "revision": "8c4000a338d2b547e9624f0dee484ea2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "33c7c15e657c40cf446f78062231452b"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "5566ecbdcc9bb2dd1a961bbdc11d2d42"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "89b28a1d7485afedcd3f5e3cfdeed07f"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "b387457ec35b2b6d9e13592c3bd5d671"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "80ee1d8993c517f7338bb7f6f9863c41"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "fd100de191a7d840816b65ba768b24a8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "bc03cc44c8527859e0a5e3ca10f07640"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "32e9d114d0dd6d98a81a2c58ae37007e"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "aad5e385e2b8c43542dc99305666a9e7"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "f62d5aceff84da055403ee026bfde2c7"
  },
  {
    "url": "timeline/index.html",
    "revision": "313ed4e59bc605446d11409c6639fb19"
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
