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
    "revision": "4ac4edacc628c04625f98852f24e878c"
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
    "url": "assets/js/10.da652802.js",
    "revision": "2c9893f514e949ab35a0848bb9be7f0f"
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
    "url": "assets/js/18.f2cc28e5.js",
    "revision": "4c72269d3b1e1046b451907362c30119"
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
    "url": "assets/js/51.8b9f1e07.js",
    "revision": "6325ff7d69748809448df26c5939c4a8"
  },
  {
    "url": "assets/js/52.eb69d552.js",
    "revision": "05bf8533b9a94339acd973779381737b"
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
    "url": "assets/js/9.e7c2dc9b.js",
    "revision": "4cd2545388a7486cdd050ba4338871a7"
  },
  {
    "url": "assets/js/app.c0a88d55.js",
    "revision": "f7686683b217701d9a6de8b8c8cb339d"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "0f468905cb8fdac454a205b530279931"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "ac15f75f318051a30e2e9a490c16b09e"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "6f38662a95f070ede099cb2d2d62c85e"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "161941c73e67b9ed07066ee3fe18529d"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "e7f7d97fb9cc200d0cef9f37f7d99b82"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "d40b3c558744b20ab6dc0aee92722d32"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "7552b3c89fbe42853f0627c245b930e5"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "51d9b495d097d93214c157dc6ded6d74"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "dfa5f9a4abc19d7efffe796889b0bbb5"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "28b9476ffcefaf50a1eb39167d8685d8"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "0de818bc5ffd16c273405ae894dafb22"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "dd1ae9d70d5771d1af96dbf9c9c4f886"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "8e964ec7bff5b215ba5633a65cc86dc9"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "2ea4ead3f1ac1634100ac5d822c30a52"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "616cc471613237b0bcd851d6bf84fe07"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "eefe856313f6700fb9f58f717278960b"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "195cc1d88cc06b671f83fee1ca1fc0ec"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "7ea6c3e2cd5286338484559a5768f97b"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "f9da9983f9268e17d6e8055e5990dedd"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "dd121e68c8b3f4a3d56148e08e71c14e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "1fe79c2b25fae39070eed2015990d5d2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "28d1e43fb7fdc56755f43f97cab87c9c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "62ebda81f6ad0b7846302dc242bc2256"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "fb1c19cabe2f24907b5702e952a2742f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "9fa6f0dcb16c2fa1b076dd936848f09a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "ea9bb53d371cfdffa2da150413b16532"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "3d02dde522cb80516d1303fbb22c5f99"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "54e33cb502fc4c6c2ad5f10502a5007c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "fc970b9ca14283bba23274ce578b824c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "f4822e94a057f996f95c62531c127fca"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "5c7d9899bf9618d98eefe6b08444009d"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "1b1ca08c72481b756417c4dd96546b62"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "2cc33b05c553321a38020a84299a47cf"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "d4ab32b1f0c85f15cc6ff0e9ceeb4f69"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "c952806f10a433e8f196598c93d7b8f3"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "d889a8f78b5742f185958762aa19472a"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "f7d3a220551a95b30a1ba18ec4bc9c63"
  },
  {
    "url": "blogs/每日一题/2023年/1月/14日.html",
    "revision": "bb068c05ff5910f2cb5dfd187ff5f31e"
  },
  {
    "url": "categories/index.html",
    "revision": "1e27946edd43d3ae8a8b5e077e0242c3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "89536c08c128f424a44fb0b82d9088cf"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "b4402b33a1d7aa1397af9032954b7810"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "bef9b1c725cfc0e3a317bd1aa1acecc5"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "c262259f9ace95c1a58ba58eed167602"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "753b959c25d0cc0567bb520068110c00"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "df1d1caf6a23a9a05ae582988b1e2d40"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "6cccc7e00f871818d7e7ab9dcc661879"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "b58e048da46c59f6023f1d860f35475f"
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
    "revision": "21f4276113f790c34b30cdde65540ac4"
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
    "revision": "868e17608e8b9a4a8b03f47892c3a794"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "a1ffba91aa335e50b4b5a2495465fcba"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "6009c8341379f5375884c319d1321649"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "1ffe48fa63d8fb2590893cea5f80f548"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "a389f84ec4899c0211d3c303a24a7ed7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "08edddbd46767b10f0138beae70796af"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "6c8b2156eaf8718298d7864ec3f84f37"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "49848ada5d79e58bcf44db5466429e63"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "337c65b3a4087be2528e95990b6dc5cd"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "a04faeadba38f5a819aeb45eb65fbce7"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "bfab1ee4518d3dbf0fd46278a270f0bf"
  },
  {
    "url": "tag/index.html",
    "revision": "7dc2f5adee03dda8349a575673e32067"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "5eb024510259220925620d7ae8b0e69a"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "f6efeaf642eae0d2137a17d9693eeeea"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "5e1b268ede74971b10afa02095b8f9b1"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "fc96eba1e89efe5ab5aff54b4c6e9f8f"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "c4ae6bcf90a5a9c026e42b168e66eb40"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "038bdef81234cc44b77a6f4dfb5b9031"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "6b16075ba3ae3fec5d78d6e1c91231e9"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "9511210acc724dbb4f8862b9a110781a"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "2190ecc7a62cdf1b5f21bf465abf15ff"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "a52f355f8f4d23c878188b3876981012"
  },
  {
    "url": "timeline/index.html",
    "revision": "ff63bd8b075df2174452450ee3f83777"
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
