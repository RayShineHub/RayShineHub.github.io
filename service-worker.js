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
    "revision": "2a0eb1ecc58b609f86f01453b8ec7c4c"
  },
  {
    "url": "assets/css/0.styles.4b5c260e.css",
    "revision": "c84e72f3c968714ff8526328e3aed058"
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
    "url": "assets/js/10.92de4bc9.js",
    "revision": "7f28bb01c34a770ae032268dbce01d1a"
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
    "url": "assets/js/18.d4ca00d4.js",
    "revision": "00e342acc0e2707d14c6422a5d3180f7"
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
    "url": "assets/js/22.a007d9e3.js",
    "revision": "e5c4ee5495152be9d614ffd5dc7245e4"
  },
  {
    "url": "assets/js/23.be26bd74.js",
    "revision": "c7ab6a3b90deaac474f79de2e2e3bad9"
  },
  {
    "url": "assets/js/24.c0fb5d03.js",
    "revision": "cb3906353d29f84244fb071212e7b6ba"
  },
  {
    "url": "assets/js/25.e20021d5.js",
    "revision": "a1df782a36358ff3742581d6c8dcf4dc"
  },
  {
    "url": "assets/js/26.0160d863.js",
    "revision": "d173b3486b29997dde696a6fc581890b"
  },
  {
    "url": "assets/js/27.28e30889.js",
    "revision": "5702d6a310e6eb17372e2cf3166be7d1"
  },
  {
    "url": "assets/js/28.c3a31a7c.js",
    "revision": "c53ad2c934e2a9e02a3532f4c42f66fe"
  },
  {
    "url": "assets/js/29.c86092af.js",
    "revision": "1d211ce5fa13f15be44eb00602e0f7a4"
  },
  {
    "url": "assets/js/3.dbdaf141.js",
    "revision": "f8023efccde5f352c0f196d109eaff20"
  },
  {
    "url": "assets/js/30.bac15a80.js",
    "revision": "de5737f2fb894794770a38db2db1f265"
  },
  {
    "url": "assets/js/31.b7572378.js",
    "revision": "aa6f3d86d9f2c70d57cf14060aefb6dc"
  },
  {
    "url": "assets/js/32.61478da4.js",
    "revision": "e5170b349d503b4bc961d7d67e7ce8d0"
  },
  {
    "url": "assets/js/33.cfdd2c70.js",
    "revision": "0e3e81fad874a962a1680c1ad09d0d83"
  },
  {
    "url": "assets/js/34.004a6c4c.js",
    "revision": "4d0419f7aa7d320bdece91012ae6bbda"
  },
  {
    "url": "assets/js/35.c05b00d5.js",
    "revision": "41cc90dc68863847f0d180b5b27b5f6f"
  },
  {
    "url": "assets/js/36.bbbd5ca4.js",
    "revision": "8113fccb736570ceefbc6fb2ca29d189"
  },
  {
    "url": "assets/js/37.12a3ae33.js",
    "revision": "71f655ae199735f0fcccbd8069ef6d65"
  },
  {
    "url": "assets/js/38.79c4d547.js",
    "revision": "387b45f7733878c0d95d3ca22e024c69"
  },
  {
    "url": "assets/js/39.c11e481b.js",
    "revision": "3d123255def4c8d501529ac416df7021"
  },
  {
    "url": "assets/js/4.d78373e5.js",
    "revision": "728ab64fe4081b516d808ec97ab21ebf"
  },
  {
    "url": "assets/js/40.471aa6fa.js",
    "revision": "e41cdadbc5cf422613dd3f02a28f7664"
  },
  {
    "url": "assets/js/41.7870d830.js",
    "revision": "4dbca72cfbdbcd9705696bcf901f32d6"
  },
  {
    "url": "assets/js/42.3c151ebd.js",
    "revision": "3a5117fcfe2bd179d968bdcf45052295"
  },
  {
    "url": "assets/js/43.a3fca7d2.js",
    "revision": "f27d1d31f52949d922a65b36841ca469"
  },
  {
    "url": "assets/js/44.564df4b7.js",
    "revision": "5f0572874b1b6224a6b7f36ee89f407f"
  },
  {
    "url": "assets/js/45.4f8c09bc.js",
    "revision": "3044313516f29c970e12e2e74f3753b4"
  },
  {
    "url": "assets/js/46.828b6140.js",
    "revision": "c362e25c6b962c5c606bc970d98f4ea1"
  },
  {
    "url": "assets/js/47.e274ee4c.js",
    "revision": "888606065f6b6fc6ed99d5cb446ad304"
  },
  {
    "url": "assets/js/48.92c6058c.js",
    "revision": "7b9f59b9927b46ea56a88d82e374f2ef"
  },
  {
    "url": "assets/js/49.fcd26c55.js",
    "revision": "8263889379b6580da8f56afb2c405c63"
  },
  {
    "url": "assets/js/5.253c447d.js",
    "revision": "3dcead80046cfe507beacf73d21ecfee"
  },
  {
    "url": "assets/js/50.dc49d162.js",
    "revision": "718f1d8a1380218ff31dee8eaa737748"
  },
  {
    "url": "assets/js/51.d1db8d41.js",
    "revision": "6ae78127a86b1529563bd6afdd8f1717"
  },
  {
    "url": "assets/js/52.ab18f1b9.js",
    "revision": "cfc6ec52d9846534ce536647b7e6e368"
  },
  {
    "url": "assets/js/53.14bb83c0.js",
    "revision": "320a32a2de89387de5a50a382b75fa93"
  },
  {
    "url": "assets/js/54.b6e1fd4f.js",
    "revision": "c5f91c2f23a5a5d445c90c564c7c240c"
  },
  {
    "url": "assets/js/55.8697a401.js",
    "revision": "0a408c19c018bb7a1dbaebb0a377d486"
  },
  {
    "url": "assets/js/56.6737070e.js",
    "revision": "f6cb18b92d2430a26530dda729aa9e47"
  },
  {
    "url": "assets/js/6.05747ed2.js",
    "revision": "24c96509c63252b8f099866c82523688"
  },
  {
    "url": "assets/js/7.3120c0e7.js",
    "revision": "34562914aa311e3eea0aafe076ea488d"
  },
  {
    "url": "assets/js/8.25d65677.js",
    "revision": "56b4a67d9838ffc22079b28b12ecd12d"
  },
  {
    "url": "assets/js/9.97c282b3.js",
    "revision": "2119052387a58e7d283418ad48effbc8"
  },
  {
    "url": "assets/js/app.cb2aa001.js",
    "revision": "c80341864454c611b043c594f9b6b6c1"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "7cef1af68af5c73881adb0bb6d9ce320"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "33a986b0ce64ae77c51820dda7dd917e"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "7b0be0c5fdc4f2b0cf43f6104cb203d6"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "6a9e0100c8a32b8c177b81a6511b644d"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "d7c0ba9883c8896410e15e83cab78af7"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "75151930a6eaf21df416e32218685bae"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "8b4b2a52c0fd5bc99422331e9c098f3f"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "53bfb1f59523728638227ac6a09a5cf3"
  },
  {
    "url": "blogs/前端/2023/2/transition过渡丢帧.html",
    "revision": "eccadb3b891e01814244571423520282"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "4fce827d1c2ebe1221a532f75022a46a"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "d5548fb847f866ea3eb5088cac56e1e2"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "09dd3af18b5724ff870ec58cec980071"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "41c4873754b3546dc19f81928c25df94"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "0d4c4ecfe58c3bdef78e31c1b7b89ae7"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "ddb913b927ff806e7aea96636e85bd8c"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "9341395d046debf26e75e733d3f91ae9"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "37785ceadb87c8c07ae41f7008dff348"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "a913b97830ad748172d55ca20a591303"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "9950c422695556d3c01c807dd0e5bf4e"
  },
  {
    "url": "blogs/文章/🌟西安🌟攻略.html",
    "revision": "0fd6ed6a4f1aa39c17e3c977c889350a"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "7068831e6aef6e7f0dcbe9c32a30b50c"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "26d0ab99d401d2e0c6c1bd45b59441f2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "3e707c9988259a32047130a31df15762"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "6a9fea96acafb4cf91c47108c01c06fa"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "186239066c597bf3ca5a9a25834b0323"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "b08527695426e65cb1818345026596a1"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "5b516699b2c9984aa5c217ba7abdc42b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "fbcc0c8e1ef6e9ba2d93b1ca382b3872"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "d63500f1a2c645ab5f3a1185a0a5990c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "ed34a1a7addb266e09c85231d40ecf91"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "72c9250f0343a193131b3b0f11582137"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "a665d4e76d6bbf21d6e61b42683831b8"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "eb91c8d3b9edc101505f2076b443fa9d"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "f870429b1688236cdfe5228b03087702"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "b6c0f65f1092a5ea49c1018332444d38"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "0ee41920514962acbb59ee280af59dc6"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "6871b32e563dc52df6ee59e3fc0c7170"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "2576073b0cee619c94f35aa2aec705ad"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "6de29a9bf925c6e491ab6b628dcd1fba"
  },
  {
    "url": "blogs/每日一题/2023年/1月/14日.html",
    "revision": "15ee097f40f672db802cbe3fb2128f40"
  },
  {
    "url": "blogs/每日一题/2023年/1月/15日.html",
    "revision": "b0c3424adf7c2708b7efb2342e240855"
  },
  {
    "url": "blogs/每日一题/2023年/1月/16日.html",
    "revision": "9138c3705b9314e5a44ce2afd4db00e4"
  },
  {
    "url": "categories/index.html",
    "revision": "73e659a2f961ed1fc9622764714241fc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "83467f338935061acc95fc9563a8baf3"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d37777b3a53f965a71f38d88f60fa5c9"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8a1f1e688c94b6fdf926a9acdac65312"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "85c0b83b763757f6ae1a1447d16a8f62"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "e6b859659205caf9410032af2d4c34e7"
  },
  {
    "url": "categories/旅游攻略/index.html",
    "revision": "8e4d0c6f657179dc758ba66efab65175"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "68b4effceb581d05673d4edbd892c3c1"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "f9e9bbac0e4305593e6f8a69806b3633"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "f7586e5234823c55ef600073b1762bb3"
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
    "revision": "bfa46d0b714607345589b95833302aea"
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
    "revision": "50154a59d686b89ec520157a11743949"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "e0a833aa27e528dcd1c9f1e624948699"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "264b13b9408c57b79714ffbb58d84634"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a836a0cdc2726d6e57e159e9c53a7364"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "27cd8a04ec435f87c3044f526872023d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f1e30d08e8ff737f665ec18142a97fa1"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "e87ed8b8ccd9f8cef452c529925454b3"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "07e0283f1f2122f299ce2c1480b22694"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "aa64c932b80aff483c3e16fdffedda87"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "4aabbb9bd9a460548364dbb95804ef74"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "2acb3fb551fb8e19ef2546d5d9234761"
  },
  {
    "url": "tag/index.html",
    "revision": "5f9c720fbfcc2dcc262393ad4342aa87"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c56ccf391d322c8cd86088f497516520"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "2e11460d9fb39b82decded869db68a60"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "e0cb2bb6d776a4e7395ae4cfbaa2ae5d"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "f3b1b7eb78301ea0103b6936b9566832"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "a9e709a12a4f24226e1b10c12c9132e1"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "1036db18f8879f7b95879159ba2e83e1"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "d216836f7ddd8f3b81abf55306da68fb"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "2854322b52825581d2fba40e96dbdefc"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "6d000d3bc910b9c0a1f7a3d02c986019"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "1b8fbc178a372aaad0d8ecc84775d0b3"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "3f62d94fa1d54a91d6cb66fc55148a40"
  },
  {
    "url": "timeline/index.html",
    "revision": "db5c1c8b255a251bb4ad944398af2cea"
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
