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
    "revision": "6b8e80b4cc6fc11005bab0201f79bb7d"
  },
  {
    "url": "assets/css/0.styles.90b15e5e.css",
    "revision": "601e7590e2adf7044188ec1f38ccd284"
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
    "url": "assets/js/18.8c72b82c.js",
    "revision": "5fca5f0d5f890004eb93602be6ca5874"
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
    "url": "assets/js/app.ebd7f465.js",
    "revision": "8a82e1e3b58e0eb080c5666060ca1b42"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "f02f230eed2b82c264bb11289540b946"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "8bebd0a5c551bb96d487a959b371e734"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "84fe464ca188f698a686bcb719ed7c0b"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "8c60d7ba46734c227e64d48f1170620c"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "0ce7cf9015e7467ba5cd09663418665f"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "11f8e3f28bc5b8f289f9e88316c8881d"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "4789dac15ecb27ed1fb9807ac7cbbb32"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "6a6be894256c4eba916a6c43cb8337d4"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "648bcf3a5c0ff8e1b695ddb60e325c89"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "0fbc04a5aa37e07a91e92b88faf7c748"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "0e76c4047d1b5f6f86ab895d8969b4fb"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "3c56408b02fdf47ba79ebb74ecc47aa6"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "1d044dbd7148f391f6ab9f4540582c3b"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "aa77eccdd77f7abb2a442047e0af96cc"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "e19c5180071c4af40f589bf242c9c0ff"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "f9ffad2d84fd68efaf48d272683ae466"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "edaf1ecf90a8c54978b0fac970c96b48"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "df0af0518fd65727f731da7110535892"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "f6e70a4f48aa9a8ab532c85e05988acb"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "c119aa48dfec5556f6f808731b0aacb3"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "65ac64791901deea7189e7fa24fd762a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "1278929f03f752fca538d67105bbce37"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "b25c463bcbfbd207d5bf4ac0c0777f99"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "728278ecbeaf98a5442c22a83b23b1cd"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "6011ec1387bd87d753ba3cce462c0ef8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "5ca6fb1325098554c0fcbd03f1954e68"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "18823befb518284de3b8e6cf8336a454"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "180d54f9a8697cfef4e30db074b3bc7d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/18日.html",
    "revision": "93d9c0ece63a3923c808395ae49666ce"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "f4c289126f3af655ad84d71be5d20a99"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "d15e9d0277b9ab3879e7f5116138ebda"
  },
  {
    "url": "categories/index.html",
    "revision": "afbfc7f998baa4acda43c78077eaead2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "58afed66dc128351f5095d2fa3d5ca1d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "18e7edc56cf8e19a6b6389dd2e6f62e8"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "b405bb6332ab14de0b877294b97a9821"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "c8cd2a9a0808ba5630347634713f6cdf"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "f88472ea67ac62f0491cffdb2ff1b7d0"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "6c82604d4ccf875aa8d41db3aa381b3a"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "c89e2f74b5c619ed2a0895a2730bb8b9"
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
    "url": "index.html",
    "revision": "da3f25ca131e1abfda7d6934e07d2874"
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
    "revision": "145b0d898a640ab28b25e597343b2421"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "a138b04a01a92ad207f3906cc3beef2a"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "5c44e6d92857bc4250cc6d4d6d60369b"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "ee621790ce2db66b6a39aa56077dfff5"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "8760d6ebaaa5f3148aed44a3f2d0fe5c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "40083c5a962822e9d518633f9a162084"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "de163a8747ce173ddffb350803e8e221"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "9fb45fd699f6016ed756bb62a6195451"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "8053ecf328bf40993e18ae0508c60f80"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "187afddbd63ed4e4b5f4f9f9e2d78de0"
  },
  {
    "url": "tag/index.html",
    "revision": "303fbd16373d0f0fc048094c27fa4e7e"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "5f4facd926d8cc9f45cdaa8b7e3843b4"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "663e9a6cae62af92854366d7d2576eeb"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "13f76af384a6d3686b1c629b83304561"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "71dda7c13c20d7c5553b683d30b69f6f"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "9c935da6c8b7b9bad5593559a5881ad5"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "8092593ce5bc7091d850100c556b2287"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e25bda0b2d6bd7eb5b156369b1878140"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "7615dcc1d313c7609fd29ff0c8fd7c82"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "df9ced3126cd47f91086dc9ac05cb65c"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "77304a71e086a3d09b6c168dcb30983c"
  },
  {
    "url": "timeline/index.html",
    "revision": "df75df1db7158c4198e65b89eae5e275"
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
