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
    "revision": "6387efa4d90841fb2aa2191b51602c58"
  },
  {
    "url": "assets/css/0.styles.19cf74f4.css",
    "revision": "503e1aec646a3ab40ca3920d27b9d164"
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
    "url": "assets/js/10.1b616f60.js",
    "revision": "da82fee739469984a4096fbb245b1527"
  },
  {
    "url": "assets/js/11.00800801.js",
    "revision": "816f10673c1469b825640f99d4c7af84"
  },
  {
    "url": "assets/js/12.fe1162b9.js",
    "revision": "9e0670b065caf1d7f754b87117abfd0a"
  },
  {
    "url": "assets/js/13.790e07bb.js",
    "revision": "1a0b1f8e49b87fd1da4c71804c1e692e"
  },
  {
    "url": "assets/js/14.3905c96a.js",
    "revision": "a399b9ace4143a12f4cc1142292209eb"
  },
  {
    "url": "assets/js/15.abeb0709.js",
    "revision": "10a97b03cbc6877995307ff3a10c947d"
  },
  {
    "url": "assets/js/16.c205384c.js",
    "revision": "02ec900d451a19a716e959e929f0a670"
  },
  {
    "url": "assets/js/17.3f174ea3.js",
    "revision": "dfa23354a360200170c77b98d668b52b"
  },
  {
    "url": "assets/js/18.544467d3.js",
    "revision": "0d1ff942b335a372a5e3145649520707"
  },
  {
    "url": "assets/js/19.ade9785f.js",
    "revision": "216e597579e26eeff2a59789154cfe89"
  },
  {
    "url": "assets/js/20.2f49a80a.js",
    "revision": "19a01fa7caeac7f097051615798badc4"
  },
  {
    "url": "assets/js/21.3ce848b0.js",
    "revision": "9f1613845cb8a29eecc327b1cf32b4d0"
  },
  {
    "url": "assets/js/22.2682ce91.js",
    "revision": "08934c46af64c2e715f90548852db6c6"
  },
  {
    "url": "assets/js/23.15ebd6fc.js",
    "revision": "cb87ff0296ac67b884487541a50298e0"
  },
  {
    "url": "assets/js/24.d541f481.js",
    "revision": "5bb9b8c0d21718a639ea290f07e33e17"
  },
  {
    "url": "assets/js/25.bd1f9052.js",
    "revision": "e596fbc364dd419d745c8ce54a6715e9"
  },
  {
    "url": "assets/js/26.243039dd.js",
    "revision": "846f460a135915872a99415c3d41459f"
  },
  {
    "url": "assets/js/27.6808df01.js",
    "revision": "d20d64ca0484d1f15c96f4f1a8c02ba9"
  },
  {
    "url": "assets/js/28.1c8d4142.js",
    "revision": "73559ce5149a7a9358cca1a0252d9507"
  },
  {
    "url": "assets/js/29.ab3c6a01.js",
    "revision": "f93dffa2834c4403789bbd608f832347"
  },
  {
    "url": "assets/js/3.b379fc74.js",
    "revision": "fc22a5286c2b66180b79d620503a86d7"
  },
  {
    "url": "assets/js/30.c0554527.js",
    "revision": "d4db72ce825e11c9b2a34e8ae8e79d41"
  },
  {
    "url": "assets/js/31.3a741884.js",
    "revision": "325d69c5880a5b405ead072b251d9552"
  },
  {
    "url": "assets/js/32.49f14537.js",
    "revision": "d81a0eb3a7383dfa458ab016cd412183"
  },
  {
    "url": "assets/js/33.be9c78e1.js",
    "revision": "af1f9b7236477a63469c93e93688df19"
  },
  {
    "url": "assets/js/34.7cdbdda0.js",
    "revision": "a53957c3388936a8575e33ae256ba2f6"
  },
  {
    "url": "assets/js/35.7b343e6c.js",
    "revision": "562fd3123631071405dec9cd6f37f341"
  },
  {
    "url": "assets/js/36.2abcce8b.js",
    "revision": "822468b11745397788e4dae32ae5ee6e"
  },
  {
    "url": "assets/js/37.f6c81fac.js",
    "revision": "b216b4fc3db69846d13c11f7dcd58b14"
  },
  {
    "url": "assets/js/38.ad8b92c6.js",
    "revision": "af89a7f07b543b1370cc76a3ff765cf2"
  },
  {
    "url": "assets/js/39.5a7f4605.js",
    "revision": "cb6178b9cc9ee0109b15cafd5d6cf458"
  },
  {
    "url": "assets/js/4.01cf93cb.js",
    "revision": "182b1dd003c3c0303a3d8689c2ab1c7d"
  },
  {
    "url": "assets/js/40.0cf55df0.js",
    "revision": "cb2ad0d7843fa3e963376d463308e6a8"
  },
  {
    "url": "assets/js/41.f514eb55.js",
    "revision": "9d7875fde5681f6c3f4df1d4c8ca5db3"
  },
  {
    "url": "assets/js/42.815372e8.js",
    "revision": "22e73debdfbf1ee6e17338cd7e2990ea"
  },
  {
    "url": "assets/js/43.6f737e03.js",
    "revision": "546d5233f65e0dc3b2d0c71007e4dcf0"
  },
  {
    "url": "assets/js/44.839097c6.js",
    "revision": "b33c968d279dbbabcb50c0425d5727a7"
  },
  {
    "url": "assets/js/45.b3af8293.js",
    "revision": "6e3fa97cf7248119704ecd8a8a367832"
  },
  {
    "url": "assets/js/46.bd45c9e6.js",
    "revision": "32c3f05a4529d0a15717137da91c698c"
  },
  {
    "url": "assets/js/47.f6b93c2e.js",
    "revision": "10aefe3bcbdcb8edb81f5dabf93ec6c9"
  },
  {
    "url": "assets/js/48.ca88c6f2.js",
    "revision": "913e2a77e9762116e02d281fa3ba5089"
  },
  {
    "url": "assets/js/49.c9680cde.js",
    "revision": "76cb1631b51b46a712f396239833b689"
  },
  {
    "url": "assets/js/5.b3ac6ec7.js",
    "revision": "43e8eb0c5f53ea7b5bebf2346b5b3175"
  },
  {
    "url": "assets/js/50.26014f0b.js",
    "revision": "83dc15f74f2c829d807a7c4bb9ec90bd"
  },
  {
    "url": "assets/js/51.e5f55edb.js",
    "revision": "0d5cc34564c0b9699ce2a3f81583cea9"
  },
  {
    "url": "assets/js/52.7199fb87.js",
    "revision": "a339dd6775490f625b008b011e70ed2c"
  },
  {
    "url": "assets/js/53.a4f97ef3.js",
    "revision": "0fbc6fdc0405f9041e766adcfa23ca1b"
  },
  {
    "url": "assets/js/54.75dff7e7.js",
    "revision": "db200cb3bdcf138ee93e731dd4f8640e"
  },
  {
    "url": "assets/js/55.032f6305.js",
    "revision": "fd8df46d5324c14088d601fd7104b549"
  },
  {
    "url": "assets/js/56.9d2371bd.js",
    "revision": "6f69543b18988b0beed7d894b4e93da4"
  },
  {
    "url": "assets/js/57.1a35db54.js",
    "revision": "1fd207954279b28fb9cc6e530b8b173a"
  },
  {
    "url": "assets/js/58.a3dace84.js",
    "revision": "5cef3e69933f6cd04c13158f7e512b4b"
  },
  {
    "url": "assets/js/59.4b67ee25.js",
    "revision": "55372a9e0580974de129683f1ce6e49f"
  },
  {
    "url": "assets/js/6.49a5fd92.js",
    "revision": "667fba09ebb5b4847c8964e833e4842b"
  },
  {
    "url": "assets/js/7.d37aad59.js",
    "revision": "9707b08fd70f19e4ff59867c6f34378c"
  },
  {
    "url": "assets/js/8.49afca42.js",
    "revision": "93c55c6258acf0f9a2b29cf5209537dc"
  },
  {
    "url": "assets/js/9.486c9096.js",
    "revision": "07fa097d2d6523f7a40a0f554db06594"
  },
  {
    "url": "assets/js/app.c7a47711.js",
    "revision": "820852ed192bf50f0668892a0a9c8842"
  },
  {
    "url": "assets/js/vendors~docsearch.b1c74a26.js",
    "revision": "918078c528aa7f1e2744323e38bdfdc5"
  },
  {
    "url": "blogs/前端/2022/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "8a1987234233a7c45c01ae7e8b51b9dc"
  },
  {
    "url": "blogs/前端/2022/12/Vue隐藏滚动条.html",
    "revision": "4d4a466e9e5bb25bd5d898715d6ee563"
  },
  {
    "url": "blogs/前端/2022/12/webpack.html",
    "revision": "4b5102bbaf9d574de28b2250ba457b08"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "0b2f497d6c523bcce4ef9649fc900825"
  },
  {
    "url": "blogs/前端/2023/2/transition过渡丢帧.html",
    "revision": "fef766d89fc791083a0bf2e186d59924"
  },
  {
    "url": "blogs/前端/2023/7/AutoGenerateSideBar.html",
    "revision": "ab594da22360463c29f147e70d63b6f5"
  },
  {
    "url": "blogs/前端/2023/7/NavPlayer.html",
    "revision": "57e2ed408399c282ed093421b3813fed"
  },
  {
    "url": "blogs/前端/2023/7/npm无法加载文件.html",
    "revision": "2858b3332c1a10fc104d58d1d4b338ae"
  },
  {
    "url": "blogs/前端/2023/7/Windows配置GitHub秘钥SSH.html",
    "revision": "9a3043d0c1d8dcfbb32c5f2d70e7dd5f"
  },
  {
    "url": "blogs/前端/2023/8/自带插件平滑滚动中文路径问题.html",
    "revision": "2be2b96a8b95f09282367b79379e2e1f"
  },
  {
    "url": "blogs/前端/2025/2/前端工程化.html",
    "revision": "04f31a305c893645abc31c0b0a96b7e3"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "dd7746b6aa698e3ca8a9b2e65daebed0"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "3e12db2a86d9e6ab5d44573e97d9cd79"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "cd6de4d391164b7b9f46c7c4603038b7"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "2e5d75abab5d91f29cc37326df318d2f"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "28b6e67efff1024f5e7f74c84b31dea0"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "b5434fa13518706a53c352e4b6b167f5"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "55ffd0a361f332ef1904d0bc2c7b4841"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "81f47ddf92776372335afc1efc5b912d"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "ac5de1d7ea82ba1c6bf4e4d5a4070753"
  },
  {
    "url": "blogs/收藏/bilibili/摩天动物园.html",
    "revision": "767d4d3159394d07894fc79484eb547c"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "f47b62162218d7143e97111c164c4f70"
  },
  {
    "url": "blogs/文章/🌟西安🌟攻略.html",
    "revision": "09fcd2dec140608d1d256c08ca5fae59"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "f19c505911aed65816077b76b0b9449d"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "58a623a8179949164fe6a19b27de5c8b"
  },
  {
    "url": "blogs/面试题/2022年/6月/10日.html",
    "revision": "da14b8c08ff80a561607bd030fb31eb5"
  },
  {
    "url": "blogs/面试题/2022年/6月/11日.html",
    "revision": "e47e65541eb39e073001f37d7bf082b6"
  },
  {
    "url": "blogs/面试题/2022年/6月/12日.html",
    "revision": "3ef90fbd457d134cc66eb3d3e9823adf"
  },
  {
    "url": "blogs/面试题/2022年/6月/13日.html",
    "revision": "c0131fce599fd03b46ac1632849ccae9"
  },
  {
    "url": "blogs/面试题/2022年/6月/14日.html",
    "revision": "5d35c8393694897922bfe90c6a78a9ef"
  },
  {
    "url": "blogs/面试题/2022年/6月/15日.html",
    "revision": "a5fa852ba25123ceab7c83bf9869443b"
  },
  {
    "url": "blogs/面试题/2022年/6月/16日.html",
    "revision": "5a08a68c892a8b9afa1b2fdd5ded23d0"
  },
  {
    "url": "blogs/面试题/2022年/6月/17日.html",
    "revision": "c6f96100603bfa8e72adbe4bd438844c"
  },
  {
    "url": "blogs/面试题/2022年/6月/8日.html",
    "revision": "2527c0505aeb2973452177431c11953e"
  },
  {
    "url": "blogs/面试题/2022年/6月/9日.html",
    "revision": "7e1a44a98654af59d83cd8286c1b6438"
  },
  {
    "url": "blogs/面试题/2022年/8月/1日.html",
    "revision": "66e84e6e65c32928ec3fc84c7318e3ef"
  },
  {
    "url": "blogs/面试题/2022年/8月/2日.html",
    "revision": "c25c21cea59e3015b5ba83887181fb47"
  },
  {
    "url": "blogs/面试题/2022年/8月/3日.html",
    "revision": "705cc106ea00dcb8e933793a62114398"
  },
  {
    "url": "blogs/面试题/2022年/8月/4日.html",
    "revision": "bc03f73920b86be462d7b5408967452f"
  },
  {
    "url": "blogs/面试题/2022年/8月/5日.html",
    "revision": "c856118c4b3080f9c19381a0401c56f5"
  },
  {
    "url": "blogs/面试题/2022年/8月/6日.html",
    "revision": "d9cf5b25b0ff3ae1aabeedcda2415923"
  },
  {
    "url": "blogs/面试题/2022年/8月/7日.html",
    "revision": "e80fcc3dcc386ec26379720525fb19b3"
  },
  {
    "url": "blogs/面试题/2023年/1月/14日.html",
    "revision": "0650e9c9d637ea56cce6fc256960b25c"
  },
  {
    "url": "blogs/面试题/2023年/1月/15日.html",
    "revision": "6f9c986bd83e5139d2344e7fe8293158"
  },
  {
    "url": "blogs/面试题/2023年/1月/16日.html",
    "revision": "0cfa90fcb67f32d7c71188a318ccad2e"
  },
  {
    "url": "categories/index.html",
    "revision": "3e4f28334244924af819b396c7599753"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4960740b4f2dfa635be478a409784661"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c1adfb82fd024332943edb7be66006af"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d41056515afb4b1a8b5dff0f1e600c85"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "8d622e244d43316c55a49678ce9b90e9"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "4e98d04886d4582c74436b52dd31cb78"
  },
  {
    "url": "categories/旅游攻略/index.html",
    "revision": "d9d27042527c5ec4240d6db287b213a1"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "70c164b96b601c8cb8664c6815e7a4d6"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "e671278b7117ec7afb5c337e7f08c3a5"
  },
  {
    "url": "categories/面试题/page/2/index.html",
    "revision": "45e82b58c0c3723814c5b06d1ad81b81"
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
    "revision": "a4d1e37010c165518c49ca2a7b1d0eb2"
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
    "revision": "8709d145741d7387830d25b637ac3ccf"
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
    "revision": "7818037d716675aa0c59b5c8f8e1237b"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "bd2654f97a1899ab69f8cf39637ae3ba"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "80a978d90ae0e56293f3466bb2e71155"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "343e2db4c3baf4247f003ffc276552e5"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "ba0e8213cd89eb4dcee90bc25fba65de"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1959e4527b31b86b4b0681a035803678"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "31e9113c7e784b7e7f7325fab25eb216"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "614200cc11627e8aae045f0e33b4f455"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "f36fcb97c424acaa9fb5c3129a1bc5c4"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "96f8902831dff8a8a3caee4768a0be39"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "bd86982a96778c29c118f6d69510af6d"
  },
  {
    "url": "tag/index.html",
    "revision": "6892bb1e3a95ac215dcb4821d08ab3d5"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "5b38fe0a178b30b7e41e7c93e6835a76"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "f183c9ad6ffa943035ad8cc7fc4b91a1"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "b48bec96b94f2bdd763fea2fd1a07b71"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "3248a3f2e24f8d57d2425bcbf9a12145"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "2668d24fa09dd5143ab42543f258c1ab"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "7957a5e0fb122e5c8a6791ce4c9759be"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "8ad656848d75be556ad7fe3618a5002d"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "20c20bf7a8474f1b5ecaee48758e5bf3"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "bc6165d7babd4e24a580110a435c3ef2"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "8561e6ef31ed9b536e58fd49fd060f06"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "800585cfce1b197517e14bbeb4176a16"
  },
  {
    "url": "tag/工程化/index.html",
    "revision": "b0139b9b6126631396979352f2778e77"
  },
  {
    "url": "timeline/index.html",
    "revision": "b34b2de10b567ff4a88ee45b47ed8044"
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
