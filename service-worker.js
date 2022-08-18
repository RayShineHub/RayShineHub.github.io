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
    "revision": "d9af0f4c1c69ae04cda56f3634eeb584"
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
    "url": "assets/js/18.bc754da7.js",
    "revision": "cef90c17e773661664ccc48a00835060"
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
    "url": "assets/js/app.0d27d73c.js",
    "revision": "64161a03f1c41c9f2c314d0f8b305613"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "4a6466e47f16766ccb84b6bb0aca7997"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "37eae4afd4b8dcea10775255ffea1c88"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "10c89a5ba42eeb578426af2df31566b8"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "5f6f7bef1c1091ba0546059819033123"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "3aff863a257c35a3ac6494a41e8e42a6"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "f8296b2fdf3963cd07c5f8e00d3caa5f"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "4553701d41ace706aa4f88db73996d74"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "9238e2f454c6babc3693113ff52760bb"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "47b341898d6d7515a2f6309ced6b318f"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "f1555078d6ab2aa3520627a7e87b9106"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "b3031edef92d9e486da964115ef859da"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "db966c059a960674f3f2a04d5d64c667"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "b030017f5b7d272ed5ae647db9466bf5"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "ad07a69dbe50a870f4c950a290775523"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "17d4957d6793022e4cc66a04cec6738c"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "50bbb4066113acb64f09a34cbe958612"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "79162e90e45839d059c30ef71863b6f5"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "90c4f0265dfdd8a4df7620496fbd0e84"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "eccad30d3642599583e2fbf7abc3e7e9"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "5770fa6b059cd1174e33ee712a81432f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "37f89f8a4c386b271a81467f9ae8bf67"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "e00ad5a2126bfbc9d9c2da1d605c1a67"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "da1f0667071153b11401c6b0f87dad27"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "bfc51834242df43336f301f9e99bea5b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "de5792d5837e47d2bae0ceb550d43545"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "4ce757ea27c8bd44c085ca72b0fc6c02"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "2b4a1b15d62a450ec8a0624ec565e2c1"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "6cfa7346dd2d2970d4a21c7b90cd993a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/18日.html",
    "revision": "7f7ed9568b73375e251a63343ad04fee"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "14598672efd24d5231431c3f59498d39"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "011360ff0fa0b948caac0267353761e1"
  },
  {
    "url": "categories/index.html",
    "revision": "bc9b1175c614d34873a4b53d1160363a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6d02ec7b9fdbce31220f2131db264c06"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "04a97563d8a2af7cf124aab56f065187"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "a099a3a1f49d3f13ef2bd880350c15ca"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "76a6c1bdf49b5c4622097cb49fb8aa74"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "6531097157d3ef2a06d6e57bff959ff4"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "8896c6e2dac8485c76e4e90bdbbe3047"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "7d18caebd89ea3e44cb68d2d7a14494c"
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
    "revision": "3f6c35bcd2a853d09b8ea6a1cfe3df2c"
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
    "revision": "ccafae93946c4057eaaeae2e583f7533"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "76546c53d78abfbfbf0e6e8279d803a3"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "5ae2c49f4eeb1dae9b647c89c60b24c9"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "0e1ce235ec584692e196fa035fac677f"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "51d298f7ddf3c9ded682c028b65ef987"
  },
  {
    "url": "tag/git/index.html",
    "revision": "23acd67ffe688edc127d1c25536cf516"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "782f8e1429e1ff228d32b498fa387dfe"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "d2dd9c659d0d8ea1737eb78f6f9700c9"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "9f34c09a2b4223d258ffec369ee296fd"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "0d8216141c64e06c6f60ee489b43be50"
  },
  {
    "url": "tag/index.html",
    "revision": "541c17af148921f3e17bdf870f3d3872"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "bb40936b5e6407eec8b96afda552f99e"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "67487062be57e7f37dd07567a43fea20"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "df3390fe28328dfe8ec7fdbdd30af28e"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "3fc9ce14530cfbba02cc2f6fa024097d"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "79d7d6a9181287692e3ffd9c4d70a1ac"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "a6768ce63e9ceaa8247b704b9ffc822e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "82a56d055a1595a1127de656b0a43b83"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "18f962b32449e71a55f2febb80bda5cb"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "1ac2b7f1ce82231a8c2571d5bc0e1071"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "ef461c1eadc3a02f8713fd4bdc840ad1"
  },
  {
    "url": "timeline/index.html",
    "revision": "f006aedb206e2e62ae05b773a9f969b4"
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
