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
    "revision": "e4364afcfbd7b10b17dd8459be520bff"
  },
  {
    "url": "assets/css/0.styles.72fdeac0.css",
    "revision": "f761b77a92523df2f4b1662bcf3d6e58"
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
    "url": "assets/js/18.1c3de22c.js",
    "revision": "a417deb67900b0906d4ed833a6ed828b"
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
    "url": "assets/js/7.6d642cbf.js",
    "revision": "1e1d13174269157f272c60115d5a50c8"
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
    "url": "assets/js/app.3d76cab0.js",
    "revision": "eb3a6176ec91c95e4284fb5ecc1c8d87"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "02b6b303e08fe57b80ec1bc83d0e204f"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "b11cdc452ea918f30e5bdf1f3300e49b"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "d35c879e224c26e215d644095c8829dc"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "e10a9a7b33b5060b64f277cb6e9bab76"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "4057ce21c103702f1fc7e93c3948773a"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "f9bcd3a78751af95595bd20ebc563965"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "0b95335c2b7fbd4fc5336c7e97d6f2ed"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "eba22a0752068c2053191c79ada2cb9a"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "6f62aa25a10382f9ea00393b2bf85011"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "5993fb0b82e21918fc27cae92b937392"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "ad4c9689ccb171956904ede515b5c27a"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "8aa433cd4e612d9d0be465e929ff3c1b"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "0965d589f91dc22d458336bb383baa8d"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "01ef4a018becebd5dd583545a5ddaf28"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "d8421304f9f978430d8481c069b89479"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "2c8676a99e7681cb14d94cce75d94a44"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "c267c561f23276b0dd88da7a384d248c"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "f90970552a15b7d58a624933bea3f367"
  },
  {
    "url": "blogs/文章/🌟西安🌟攻略.html",
    "revision": "c4078bceea7be56d9e4716b2f65ae49d"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "3e2732e126cdb1de7dcfb61a03511990"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "cdca1d035c353cc4891392e6d30f8d30"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "7722d5396c7a96d22f958aff2349ff3b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "de3a614aa85877f06d19fb0c0abcfb31"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "e4d13237103bccb851e2a39cf8353026"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "469b2ac7715907f8f803bc6391f3bef4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "ecb831db89b89b38d853faa33df0c33a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "7db29a0ea4a25fff5e89852f2e6ed233"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "f604006931c3e0662e956a0eab8d5139"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "7d613b80b71b5a8ade03657e3b0d446d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "54e54070c5b88963c8db527ff3cc821d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "09d83d4ebde08e79dcac435cf4b3b9a1"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "f8cb852c7b8d674cf816bfcfa7626bd6"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "d9b019df09cc94c359186a8ed30e9596"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "e749624d8f57a48ee8a13e2d4f12f664"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "887ee54d60384d261593e484f97e2eb7"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "bdf5b88e50857d2a0b1b2e1a2bab07cd"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "66b8557a7f987debee51d5d1df2762aa"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "da32f9963a163076d376e1b979fcd8d1"
  },
  {
    "url": "blogs/每日一题/2023年/1月/14日.html",
    "revision": "7ed9abb046c504fa43c73f1b1bab3bfa"
  },
  {
    "url": "blogs/每日一题/2023年/1月/15日.html",
    "revision": "2b593502a5ebb23275f26ae68046ab29"
  },
  {
    "url": "blogs/每日一题/2023年/1月/16日.html",
    "revision": "554e81c1b9f7a5212f9fbbd1f323d09b"
  },
  {
    "url": "categories/index.html",
    "revision": "aaae88ef5fd079eac9b6e85bc7ab5c07"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3ebb00b3a362f3f971e130bd9a0843e9"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "fe0ae0c1eac7b84b8acc862c468dae1c"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "4c14a89734b44d536f3b48dc21d53df9"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "bdc62750c33bf1ca1aafa50fe4287120"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "e9c5dda5f008499885c16fc2b1b71d95"
  },
  {
    "url": "categories/旅游攻略/index.html",
    "revision": "76c5bbe7df56f970147c52079ca5a0ea"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "e9c2ce2ef097bac3c804bc736334cb24"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "19f53e9b22f3b6f55c00a9db331d34e0"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "90e872674701038460558374688a6204"
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
    "revision": "b54b5b928a755229843c189315b3175b"
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
    "revision": "963678e80d7d77b98e6ff47fd881d1c2"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "d6b9655b56ee4f9e6afa6728efe579df"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "d5dd6711b81a5fd37b59fb5debc5c1e1"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "13a55727ad34413d41653abe29fea2a5"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "65371e31641f6acf2897469223d45852"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f3b84df5ef31927eea39b0fb1e436e10"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "e61332db34fe6fd78072553dda1d8895"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "fab3380633fab74a6438c7f83df5b005"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "0d4c34a2d323aed7fc6f32c5e08dfe7f"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "5dae94492e37b3eaad1fd8b8c6cf49b5"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "3233023d399ac95f188b36b65a5e6407"
  },
  {
    "url": "tag/index.html",
    "revision": "5fe19b1d94b88cc109534517463bbcbf"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "74b07c8cb29c5a37c080ebba3e9fb8be"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "4cc71ec62c19105bc6d941cb498514e0"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "fe1a4b950eb4ba6bd1ce8e6fd6913b2b"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "1fb1c06e0e9e8113288aaab0261cd33a"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "45c971b59632af9bc58b3cb3acd3dee8"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "9bb632701fbc000972314de2cfda4d31"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "490e6f95d61f541dadf45b2adfea12f1"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e4e52374b754e84c19438247ced4c36b"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "11526639ff80e06594c27da206c37ff7"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "72e8b444439b89762cc7138326e002a5"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "2b90a391abfe67166240fc441c83320b"
  },
  {
    "url": "timeline/index.html",
    "revision": "efff4aecc4280a005000a1ed1b41e2ca"
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
