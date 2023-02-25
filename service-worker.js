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
    "revision": "372d50cb0856b964c19d4b6297dd850a"
  },
  {
    "url": "assets/css/0.styles.5f44cb00.css",
    "revision": "1b56aba292fe519980a9f924c279131f"
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
    "url": "assets/js/18.99cf5340.js",
    "revision": "ecd03e2b43a0ac7ecdd58836ccffe6c0"
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
    "url": "assets/js/46.fd959cd9.js",
    "revision": "9b56e8c147822ac5a463b6c305405f6b"
  },
  {
    "url": "assets/js/47.c284cd24.js",
    "revision": "6eaa0a947fb504f002cb389c3b96e0c7"
  },
  {
    "url": "assets/js/48.0c84bad4.js",
    "revision": "39ae8ff553beb9dc882850441b026a1b"
  },
  {
    "url": "assets/js/49.e1542aec.js",
    "revision": "ba66ea0429c3a44f55d2edf94ae9bf23"
  },
  {
    "url": "assets/js/5.253c447d.js",
    "revision": "3dcead80046cfe507beacf73d21ecfee"
  },
  {
    "url": "assets/js/50.667a24b8.js",
    "revision": "ddc0d6ebe45cdbaeb17aab4874655ece"
  },
  {
    "url": "assets/js/51.effab616.js",
    "revision": "786c4dbea5cb14b2bae5daeadd5bed87"
  },
  {
    "url": "assets/js/52.a898bf4b.js",
    "revision": "eb4ed7632e7c492afd9a168729e54bb3"
  },
  {
    "url": "assets/js/53.d2fcbf15.js",
    "revision": "8cefb989a580ea44b84f5b1bd0120217"
  },
  {
    "url": "assets/js/54.76dfbd43.js",
    "revision": "948f4888ffbc41076365f3d071122276"
  },
  {
    "url": "assets/js/55.301909df.js",
    "revision": "e94d127f8af494a935e6aba32be1d6eb"
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
    "url": "assets/js/7.f9e9cb11.js",
    "revision": "d02d94e9f62eb6dff84c86a2a57c2c44"
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
    "url": "assets/js/app.1a58a7a3.js",
    "revision": "b57f8eef26b56ed0e782aae3d7237f16"
  },
  {
    "url": "assets/js/vendors~docsearch.a7c5c6f6.js",
    "revision": "f4c847ef7f69aaf33316bc52a28e7f70"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "30134a9c3010ee29426d76d11a9ab777"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "041fb8ae15271f2ecd872bc4ed94a742"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "32392d99b017db5250d50e126c3e82cb"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "c7d4f29b9f6519dcae7020ca7518cd3a"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "cf19c7843c71ed20d1f2ab283c69e1d6"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "140b974a23b66d5994d670fccc7f503e"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "26d7e9cce96188f6eb4acf7d605e035b"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "1bcfd28d3ecd571b356b459e360fdabe"
  },
  {
    "url": "blogs/前端/2023/2/transition过渡丢帧.html",
    "revision": "9056895ba782037536c69a19039708f2"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "614a1ac922315c0c46ef5a0749db15c8"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "c7c4e226a7a25eae3549c172409b980a"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "879c3c41829b057b36b0f1d2d2cefceb"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "91f114407f88d5553c95ab75b2d45b0f"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "ca630980ee7dfb0f49407b590d02b9a0"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "1f034f313639699eb69a2b46132d0aa2"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "862ee073ea4ddf5b5406df436de2dbb7"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "87067abeff13626b6c11773abc014db9"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "8fe827f93f6206d3ef7280bbf6361e49"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "d265ec373479559e927c462e48020319"
  },
  {
    "url": "blogs/文章/🌟西安🌟攻略.html",
    "revision": "71ef8614a706d1edcb48c32acca259e0"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "772bec1e17a7b9ced4f729f7135e12a4"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "05e5dc8dac1dc116487196614133f725"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "a8cc48d724cf17e5085faf97817f6c52"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "4523e25f6fb53fec408a1ceac0da6f67"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "bf71e26da0ade140ff20d2b9162c6dad"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "f6db24ae3d6566088762242f2f0f5b8a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "fe38479415263ac750757ec63b12d952"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "a2f4518de6bea88a6e098ffca1843992"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "65b75f2140a7312acc582d295cf8cdb6"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "adc31c67272b4913f0e68c5c749d3afd"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "7a327c25adcc024741ff9fdfff3fc608"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "fac2e709a2c824b7a515795753887af9"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "79592bf3460d948509a442c7431c1e43"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "92ca1dd2c4552ac3527118fa6d3e88ee"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "d7410a639de01bc2b3a64784b2353297"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "5067df54e0c45861faef8b1bc98c0fd7"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "aed860f3751a7d5e2daad70c026168a1"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "aed5a3bec85a0c63640d848f3c00e275"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "1a5c805bd208371a1045f9b3fea42bca"
  },
  {
    "url": "blogs/每日一题/2023年/1月/14日.html",
    "revision": "865086926c1d6ff11442f8bb7b1a37b3"
  },
  {
    "url": "blogs/每日一题/2023年/1月/15日.html",
    "revision": "467f86a69b0970bb494e126adba7a679"
  },
  {
    "url": "blogs/每日一题/2023年/1月/16日.html",
    "revision": "ec7f2b9790df52ea25853a8bcd79be0b"
  },
  {
    "url": "categories/index.html",
    "revision": "c52244f93251eec9dd65a6f3cbdaf646"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "65556c55333e8122ae1cb507419d1ad0"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "1e572ea08e43d81423c16fe3d8e815f7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "feaf6466c916e30f520314bfc2473148"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "bed28591adace6065c197476f6d483d4"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "8833d66506589d6b22f5bce45edfe402"
  },
  {
    "url": "categories/旅游攻略/index.html",
    "revision": "64b746a5ca1d6ff0b2b2912e73fc391a"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "37b2fe0ec10b023f4a4740d9ce83dca9"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "972e54a191a8b3557a4feb2c951ccfe4"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "208696ba56b2fc1d10edd1f605894fb7"
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
    "revision": "1715bb4249a98af5b1e0297e26c06c89"
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
    "revision": "3b279d303cf39cd2a369d05fb51891cb"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "3c2ddf9bc3eba13dee9e7d74a89d7808"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "92f88ffc5abeeb4c30a5c8587649a3f3"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "d168e0aa05f20f9f9407e0c83632a1cb"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "14192a3fbbef1252b68ffecb255b3bcf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "920c2f11e0f3fcd89fb37bd60bd35783"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "74e4d1bea47dab4dedfac9d47a47dcca"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "3cea1f2fe605553a0991124d481596c4"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "94ed049500b9521be0d1cb47dacb7bb8"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "037f81a66cf07e5918ee250a36465965"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "1d4cd1b2c3b5220e8ff3253f808a5a36"
  },
  {
    "url": "tag/index.html",
    "revision": "c739833498eccd0f6dc57315077934d3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2f6a258e50ada44bccc16f0dbc417209"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "a903363e3c7422f876ad2d95bf4f9b93"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "049e0fe23c0634a223baee79becbf6d2"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "7d4d6c581953f3ce7da2e0c42b1f8e0f"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "40a06a1722d683594007f5b3a2cb3fc4"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "001d1cb69f7211ff462ec30001a0436e"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "d0c68c7a1b3625b9614ddf234a1153ab"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "474fdfce0cf019c5dd174544a46f8d4f"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "62e47ffcc58197aefff7d85a69d909f0"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "8dccd217506e956e3089b386f2f7ad8d"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "937199fbca4822b2ae41463e0840d08f"
  },
  {
    "url": "timeline/index.html",
    "revision": "41bae4366653ae601e88c105b3b71aa2"
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
