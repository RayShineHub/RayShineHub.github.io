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
    "revision": "2230fb16adf01de8150273da80e47519"
  },
  {
    "url": "assets/css/0.styles.51ce0230.css",
    "revision": "953f53b2a7b3c560770c00cf64152639"
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
    "url": "assets/js/18.cdadc73e.js",
    "revision": "639e1b8d72bb5796ae95f213a93ff81b"
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
    "url": "assets/js/6.5a4e2c8a.js",
    "revision": "630aa03ad8a01e3f1c2c04df9f1d86ef"
  },
  {
    "url": "assets/js/7.aad3ca6c.js",
    "revision": "b4dde10162cb76f7eba7db29339224fb"
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
    "url": "assets/js/app.37741a9a.js",
    "revision": "9972a994bbafa9a31c142e672bd8e87f"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "7198f344ad44accbdd53a76c1fe42687"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "6bf579a35d81c47c2ebb781e6c44ce7c"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "2e7b796102be85fa91a780c338d99f89"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "b235cae79b3bc32eb8c124c6026b2fd8"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "f311eced55252a9fbffa9d6a2c631e9c"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "0f1d6e1ee6986b4b248c2402834f3929"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "500226b327fcc7272282df03fd873dea"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "08ac301e7839c5ffa6287a2f9c27637a"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "0080028f1def0cd3e52eb9747cba204f"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "2f2267375db7bd84dafa9c98d0fc059f"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "1f43eba04bb8e8a1318b51da92c6f90c"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "b44c91ef01033adfd6a79d2d71cc9ec0"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "b5b2c70a205cb60726c8f2863c7322ad"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "a2c29381bca7b6965a742721d2460036"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "1c8d656351772bb6a551c76e5c579b87"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "410dda181162c6c03cd46267d7be7fb8"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "e8b2842860ae2e049c80f696386045cc"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "27a2bcf615af2298c469e462efc3f17d"
  },
  {
    "url": "blogs/文章/🌟西安🌟攻略.html",
    "revision": "fc9945e37044aa6e39ca9b23bdf09d9e"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "2421e74c81244fa8d3faed74bed8d9f5"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "59e2016038eac2dd90f2e8cc67368b28"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "262a690b54d3822e1c2fcb8967c7fe9e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "414e581f82913adf983109aaca4bfea4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "feec1da4f19d6d3bfa32dab5b3375745"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "58bb8fb37dce1071bd8e2285f297c7bf"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "68f6de49e1d7e5d38bfc06b475653206"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "1258970c141d8d6d018f8c4cd75156f2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "2cb9f2cab01de794f7af38292d8d5df9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "7c1228360d835ba6a924d16ef12f3b4a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "7c68017591d205c31141bcd6b03de3d2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "fb2a9845aa2b54f389c7134e9ced8532"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "209819a420906c9c8e74e716527b83b5"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "2df19b71cf11ef91a3b6edae904aed9d"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "0e2b108538068d13a9e99d55730362c4"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "f42f0ceb4f2fd86d56720587c25de0f1"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "08cf5fbc138b3d8a63e47c049f6ea49f"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "c37fe6d7336d4cbab047814db2ca9828"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "bdbf332cfae7b753e6455d6dcee521a7"
  },
  {
    "url": "blogs/每日一题/2023年/1月/14日.html",
    "revision": "b8501f99f79fdcfdcf0a4cc5d0f18f93"
  },
  {
    "url": "blogs/每日一题/2023年/1月/15日.html",
    "revision": "dafbc9d11f3bbe012fa2ac4e9ba90c3d"
  },
  {
    "url": "blogs/每日一题/2023年/1月/16日.html",
    "revision": "4f1e7345c93c806928bdaed8bb5423a3"
  },
  {
    "url": "categories/index.html",
    "revision": "4f9f9958ee12cab13dca0c4d697bf624"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "76a047183267b9e4bc2e501057554505"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "38bfbfa93b6efa1aaddabfa9e3cdc8f8"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "c7afec50f078864cf75da4a47ba8c8ee"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "1aee6c8f49048b64cb2df32a42b8b7f5"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "f1741e4fb5697c0762e588e5b76fe1e4"
  },
  {
    "url": "categories/旅游攻略/index.html",
    "revision": "96e107d07b21778ff770447bd96f1fc7"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "3fb4d6a733fc4a0a6103024cb6e8306d"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "7771f322071f13c0610ee8d16ce73573"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "c6c585dbef36c419befc8910fca80062"
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
    "revision": "95eaa3a6667c11ee56d5c617d65e2d38"
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
    "revision": "5e10c29cdf102e2ac71d411a2f0a63c3"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "ea8bafaa3153cc45c673123091434d1f"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "e077118d5b53a268fe6568a1b08e9509"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "98bda6fcefb122155d735c7dcc2b8142"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "3e95b8ebe180750ea29236e0dcbdfbdc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1e3bbfc3b7c14b31240b19e88417e48d"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "3b83c75d78f58924ce83d047a80d37d1"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "da26037eee0d122572ad015279575cfb"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "c3445f3c31695a5f4f0cb7b505e38cf2"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "903c53e0761d4dca72d6b8feb87449a8"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "40335b7e6fc5de41675594fd3fe9980c"
  },
  {
    "url": "tag/index.html",
    "revision": "6cc78dd87bfe5ba929297b2f10950cf1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "92b6df5312982e4d6f2c9be4a14bbd0c"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "6fdd5ccc3a011e3ec0eefa85b4a8f506"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "86fd80847b7637f421a5b7c13444904a"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "aa45898248b90db5f779d9179183b002"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "a68d7988fdb91e0b294d3de0da6c399c"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "fb15baca12089c25e27e0b0d25999077"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "bc7862196e2111687592fda5751dc451"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a4d15f3a26a218fdac64f2ead5080f4e"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "3bcb46f1331c1f9c0dfda4982c48c1a6"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "da41551e1337a035462e270c487289f0"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "7fca6625f7269606d20bce32bf7b7df7"
  },
  {
    "url": "timeline/index.html",
    "revision": "995c037ad7944efc703391a4d807bdb2"
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
