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
    "revision": "725962d7fb7e925368aafc1737c34049"
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
    "url": "assets/js/16.187eedda.js",
    "revision": "d7330f254db1ea5564c8af5a2b9e06f4"
  },
  {
    "url": "assets/js/17.c07a7c02.js",
    "revision": "6891cc78f9b2c35084aac44f40f0b3c1"
  },
  {
    "url": "assets/js/18.61aaf72c.js",
    "revision": "aa85c2538f6048dacfa90affc694e266"
  },
  {
    "url": "assets/js/19.984a7ae6.js",
    "revision": "b09eb918d39bf78a7f3432800d2f91db"
  },
  {
    "url": "assets/js/20.dad848c9.js",
    "revision": "d3759e412ee367314f7bc69f0b436d43"
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
    "url": "assets/js/31.3340abda.js",
    "revision": "84f157694be0003be138b97a77faf38f"
  },
  {
    "url": "assets/js/32.2f914238.js",
    "revision": "74a8f1193b313289355987b7ab8e021d"
  },
  {
    "url": "assets/js/33.25e6bb3e.js",
    "revision": "6ca697cf11f8d7758b229ba6559ad0ad"
  },
  {
    "url": "assets/js/34.685c01c6.js",
    "revision": "9de14a1d2f31eb51a0e7a7d8bb863f57"
  },
  {
    "url": "assets/js/35.284af396.js",
    "revision": "67909b3e14bbbd6aff40a19b12b89369"
  },
  {
    "url": "assets/js/36.b819a80a.js",
    "revision": "273613783636af74118f80d9a6736f90"
  },
  {
    "url": "assets/js/37.904ebf65.js",
    "revision": "4856d8080dfa861be737b0e4ff79e5a7"
  },
  {
    "url": "assets/js/38.e172b010.js",
    "revision": "056c6b567e87242733f1b9bb5accbf96"
  },
  {
    "url": "assets/js/39.c2522a06.js",
    "revision": "44e8e60a75a64cb13bb952f6a9e620f4"
  },
  {
    "url": "assets/js/4.d78373e5.js",
    "revision": "728ab64fe4081b516d808ec97ab21ebf"
  },
  {
    "url": "assets/js/40.b2297f92.js",
    "revision": "ab28d71589c7cde9f0f7687157e81037"
  },
  {
    "url": "assets/js/41.a3ff20bf.js",
    "revision": "a68343ea6fc64aa80ff2e49eef4c965b"
  },
  {
    "url": "assets/js/42.528c1f06.js",
    "revision": "dd1be7b7e0f7a03245b66bbbc5bae702"
  },
  {
    "url": "assets/js/43.bad1d63a.js",
    "revision": "7d3717d97f585494d15f6f5e2e0ce943"
  },
  {
    "url": "assets/js/44.fb6ec4c7.js",
    "revision": "2c719eb93da39b2f4d5cda926925aa35"
  },
  {
    "url": "assets/js/45.a084c87a.js",
    "revision": "27c70667b9beb4b546dfdc03332e8e79"
  },
  {
    "url": "assets/js/46.acb14bb9.js",
    "revision": "a6062515b4d0be5ddc5d06b5ccde55b5"
  },
  {
    "url": "assets/js/47.2fb0a0e4.js",
    "revision": "22a8f765f916c76130478220ca2076cb"
  },
  {
    "url": "assets/js/48.6e9fcd41.js",
    "revision": "484a5434983c50d49df89182f1ffa8e6"
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
    "url": "assets/js/app.125ad0d7.js",
    "revision": "5859ca9938b30ad0db9206693f7d7fee"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "a0dbf5475902420f924ba24ee37d7b4b"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "5f7be187b1227f0b7bb8bba47a224d2f"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "5f6e94a9acb9c5e419adc8e8e2c13ccd"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "03786c22cf3b54e926470169bb917c15"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "7795ae2298fa6b0f1be93bd56fe377d7"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "91a2db0004121808e426501e9b9309e1"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "47caeb920d3b3774c0b0e2f1de623382"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "8e42f6802158427901b785df4434614f"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "871cb9cebe50b0758ad3ee21a1389cd6"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "f84a00f365a85bd3c9acf6de5c602787"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "bc5e6b2e7e28dc903491e90052da3d37"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "962e2de51cdc40b72007358e7d7b398c"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "9938427aff3bccce989fbcd61642e177"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "ff6d2a70111816875ae45b19b5e68152"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "c8bac5d3aac3a941d1db49454d3bc717"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "bad70b0dac686c964973b1f2b60584b7"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "904d2ff7568fc915a1e2455e4d60445b"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "bf08c940b26ca380ae4e6e53b1e0d2b9"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "805017ffbc1d67dd4f5bf57675c417b4"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "872ab31ed9a681f71eed1ae1fde393fa"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "693cd26d5c0e7e186d336de0fac5deef"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "cd0c1a17c788b99c8ae17ad69fd2169e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "e683a8b210ca6f73e5ad8651cf27ab07"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "19b81208d513a744528c3104fc469740"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "59f45edfdf11448fa00dfefe48513ea3"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "6a050f9ac67b6b878a9f356641f0d01a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "e5d161e65ddbc5f0996aa4069a00ebbb"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "1a61017bd3544cb58f3dd39cbfaf0d20"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "67d6e950324203349e3972ca4604442e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "a76e0f1ed7aab02482716bed6a878bc3"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "5595b1d509f56897c53f68e57d1edca6"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "8526fbcfa44c0c1a6e9f8d473510af7d"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "a4d4a77d18f10cbef9c9b86ed32ef404"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "f2c523335442e0067a69456c62318152"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "45b8554aa0c881a09268dcacaf3d5212"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "b64b6be1b42187e8f237c8d4b676c3ec"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "0b2b7f1c7b30db80503c063e350831e6"
  },
  {
    "url": "categories/index.html",
    "revision": "47f5ab7a590d98281c2981f2b123aa2e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "adef139128a57cee64afcd460f35744b"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "9007f97bd4df7d2b248657d345e6f726"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "e9ed90ec638e75908f893245ae6cbc83"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "2252f4b22f528379fe37c5244225b9dc"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "2248ee2327b57a3eae69b42d61289d1a"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "0bab7b665d2737968279f37f149ee369"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "ff59697eb9ddecce6ae6d708bceae40b"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "eb359b01cf538024a427948a9d16ae22"
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
    "revision": "64e0696310c9f9c8d5436b5a45e15217"
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
    "revision": "556ba85a40599d942e93bea8e542f9ed"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "2d98681b691bb9bb4c2214de9c81687a"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "0c80059624f73ab22bf53317347f6c82"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "dcda1c9927eadccfb96737e3519a0eef"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "80928276208972db48a8dbc263ca28ea"
  },
  {
    "url": "tag/git/index.html",
    "revision": "87789767f4750fddfee33025b0c23785"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "f07a68bee8a65b3297098014c8fdef54"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "c140b8e70a0afedea372bfd99eec6196"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "658e340b46a40b69def9e6eb6cf3fc91"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "0bbbb1fda9ce159275cbcd4d33662e2a"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "4eb554d4abee961e22b51980b56a1870"
  },
  {
    "url": "tag/index.html",
    "revision": "1f6a99e92f48e3f8dab5fa13ca3c7c38"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3547a428ac31b7175aeb91487f1ce696"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "3b16084b8d5c90c9ff20a51fb936e1e1"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "d793f03a3ddf622e363d4c76f0cf41cb"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "d5df334527c168d73edf24f2e32e7411"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "7efe12ccda60551743bc2dab2a770543"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "5a95907ae71b668b751d01ca09d54378"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "107805ca4f4af889715bc311a3ac2609"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "5968b4dbfa6fb97e1ae93c81a7aca37f"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "09d5e2a52d6b8628ecb6d24f1426e027"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "9225f9db8e2601772100f6069ed76e9d"
  },
  {
    "url": "timeline/index.html",
    "revision": "814cd22a7106446120a3d42e2b0df772"
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
