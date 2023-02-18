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
    "revision": "8809ccffddd815c635b24c676c4df777"
  },
  {
    "url": "assets/css/0.styles.5488bd95.css",
    "revision": "9fccb8e742a07a06154b2a6fa9355f82"
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
    "url": "assets/js/18.ef77d9ce.js",
    "revision": "a01ac37f8c576c5b50d6e032029bb58d"
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
    "url": "assets/js/7.5f13d06d.js",
    "revision": "ab705fc6577b1ba2b1882f507698d2f5"
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
    "url": "assets/js/app.480f4685.js",
    "revision": "b7c517c40181dd325060a04469518481"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "8b38184eb0d2c281e759d719d18c67e4"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "baf2b20936038a764576fe527b389d15"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "229f72b2f3b68ce708a5ac309bb8e22a"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "61401c7e38b3b4df3917a61412a01246"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "99a3758decf6ddedf16fa6b63d9720ff"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "0530b8be3cdbc58ef2715c79c078b36d"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "1de4e2335515b3c0dc39055d62a0bcdc"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "0fb02547bd5314bf79fe613cc1dd77c3"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "1d37dcc880769f7b075414bab3ef593c"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "87fa731cd44e38b52fe66dbfc17e7ba9"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "5d74d63c13174fff7d54f2ae93c50d3e"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "0a8f3ec6777e5e4c03aa8151be3f2735"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "3c9fa1915df30255e7d1a0b6a5721b27"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "a8320ba5bf751c1e755e34a46efa1b2d"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "7dd8c63363ade97ac991f374d8861027"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "7c6c92269d543b9171d5d2ea86642141"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "4412525f763bc9bcacc293be699a3f6e"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "ea3c1afb537219dda7182cc44fed8101"
  },
  {
    "url": "blogs/文章/🌟西安🌟攻略.html",
    "revision": "40a23ff9140d8f919511396e48a4d6f2"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "65341910a0af43c0c6a854ebcc9e6e37"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "66355ed79bc5d1dae011487332c563fa"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "fe132db3adaa9af7d8c342a78d305d3c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "f151053aade5df2c2354884c9cdc4317"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "9f61877fba404399be6ff4c39dfb26cb"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "ded2e4c23e8e5bb6a9ba3df65d164846"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "fa4ccea594075237232f21c8fe9c9158"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "1b5b98b0e9e393d1437c3e0b8652c0ee"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "f89b3f0e9becd352c4fab6ffcafcb3c8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "06b0c88e462f6d9d23bfa9850d38033c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "4e05a7616430a572f7723a48804dfe1b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "4483e2a42b2d5771c3479f5603957780"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "47e31c601a7f8b24cc96a232b07fdc9a"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "06ba6c239bd611afee28a71bd66c984c"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "57703ab97811a71834c0fde8f495d9bf"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "a2b801d8e589e8c239312080fb3d5209"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "4be00a0dce44d7996b818795f08749cd"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "89094106224b7e33baafb8fd7e4a489e"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "9719f1de720187eed869d71349c8d4f7"
  },
  {
    "url": "blogs/每日一题/2023年/1月/14日.html",
    "revision": "bbf76b36dbf6a5fe4cb720ba49721930"
  },
  {
    "url": "blogs/每日一题/2023年/1月/15日.html",
    "revision": "19386f335922f5c4b076c6d906d16979"
  },
  {
    "url": "blogs/每日一题/2023年/1月/16日.html",
    "revision": "f8bd84b8cbb67a073c954f3b1bb18ee2"
  },
  {
    "url": "categories/index.html",
    "revision": "acc5d218616a3a8584228554d2065dd3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7e6bd6c2a6a5c3f2aa59b78e1a3a69e3"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "15d4a271afa9013e9e19f41c9b825cb5"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "0fb0ceb78ce4c02e33344274e1e7d334"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "c754fc76fe9e41e3b83800a2244b61c0"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "247f6251e83976bc54142235e9db80b9"
  },
  {
    "url": "categories/旅游攻略/index.html",
    "revision": "675b1d46841bfa894f906c5d287a61f4"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "9d49d3e8139f4e8b55a1b670aa5821b8"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "103554cbbe6169ae8e88c03998968f8f"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "fd141a42397a815c7ca218cd750d0a93"
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
    "revision": "3d7d6448395c36baecb5d0291b766428"
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
    "revision": "06222e0fdee1e96d59ba01b067e6ccca"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "7bc35845ad816929e41b82db9a297a42"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "ca7ce7a837ff4e58b2de6b3e941b6378"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a40b71bd40d4e25d15cd670291e9d1a1"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "e17bcb97bf563b93ae25bef28529e6a4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c7b350e83d43584d1e52746d7b71d07d"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "5cc342fa170e47215d10a5a3ce30a02e"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "1866de48f42accbf720905679856c683"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "92fabefb2fb653a1165e71a0e89f78b0"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "2a3639180043e53f94eb1b9ec5fb8c7b"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "aea9fe9afc0736f2a35112c295e1985a"
  },
  {
    "url": "tag/index.html",
    "revision": "90ed072788e729bb0a111b95ed69cbaf"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "4729abcc95f43f153c68540d290a03e4"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "bc1da8628e4c893f1790a7adf109a5d0"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "a7470c47a54a87f3959c8ed70879ffcc"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "4d29048fb8ca63056878332a30016baf"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "d5f457b985f884e115031cfeef2a3c51"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "9374079b2fdd0c56f4642b63999d8a2c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "cacac1018dd5b64687f6841db794f3d9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "956d9a6e58381a5763d70f3b4882c0e4"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "3017f4236dfcd602dc62a05418102e10"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0d59b0c1a65e49ea268df283fa473377"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "90cdfddf7198640f5f8ecf40cad7c4d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "d68f2f3bd955027e453060c3267428db"
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
