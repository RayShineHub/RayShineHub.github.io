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
    "revision": "568da9802578fbbb5cc229fd5bd9dfc4"
  },
  {
    "url": "assets/css/0.styles.dceddedd.css",
    "revision": "d8ab1b178869ffb14c8a295de50fac87"
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
    "url": "assets/js/18.a5571eca.js",
    "revision": "76d4d5261e919f887f274ac23679ef42"
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
    "url": "assets/js/45.e65bec96.js",
    "revision": "b7cb1ebccd9bac57863a6dde03449c40"
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
    "url": "assets/js/7.ae63b101.js",
    "revision": "50b7d2d749ed1a3532998d730e4bda84"
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
    "url": "assets/js/app.041898d0.js",
    "revision": "7ced6a8c0813b774fc52b73c59ad936e"
  },
  {
    "url": "assets/js/vendors~docsearch.b1c74a26.js",
    "revision": "918078c528aa7f1e2744323e38bdfdc5"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "4824167868de67d769d2def34238d215"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "5d7dc8d0aa9baf1751bfc1ff2be2d6a7"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "f1633aad1f6064a73ecafe3d1995d460"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "4e852a345c03f4895f9ab1ab8b3dd4f3"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "68b013fd2d2e13ecd691f31f9a46bd48"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "fa1cbc5cef32c67882bb421f9ce6e65a"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "bde5302dd4c588170590375d2ffd6ff5"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "1944efb1943111665495355116351626"
  },
  {
    "url": "blogs/前端/2023/2/transition过渡丢帧.html",
    "revision": "09a0fd7a1e5795d92094925355ef64d8"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "e04570d648c6d619757f4683e0bf9a5f"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "2bc1c612774fba65447a8effead8c0b3"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/基础知识.html",
    "revision": "04d810cabd99006b2509e8021a7ce57b"
  },
  {
    "url": "blogs/前端/JavaScript/RegExp 对象/常用正则表达式收集.html",
    "revision": "afdde60ff56a627f55fbef6934b04910"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "4e3a87e6087c102f3bc9931de31ea052"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "3778d38f9ca06e1adc4be9a590423b9f"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "29c2e820402feaab680b24f34c66a445"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "b6816e3a7897e670aa9a604c6a7400f8"
  },
  {
    "url": "blogs/收藏/bilibili/恋爱告急.html",
    "revision": "b13e7e2130e89020aa21582a38da533e"
  },
  {
    "url": "blogs/收藏/emoji/emoji.html",
    "revision": "83425294736e3fcb91f16acf8737b7e8"
  },
  {
    "url": "blogs/文章/🌟西安🌟攻略.html",
    "revision": "c13eb4fbb4c908d40a078c2011fa2834"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "a4739a1bc67db5a687e917710a72f762"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "d44f18fababf168f14d7211b8b788ea9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "84afd9b22d3ec8a50f4a6fb067888a93"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "e823b038703c3e6e387ab3bb2c0bce21"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "728d1bf93462fd4e3a6b85e3ef55e2fb"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "6c559f7deec602e121a876d88f720713"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "9cf58103199bc0594c7fcba5feda302d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "4b5dfab796456d004fbb67d6045f0f74"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "1c15b4241fbd66571f9aea1521b6b6d0"
  },
  {
    "url": "blogs/每日一题/2022年/6月/17日.html",
    "revision": "838f0722f9fbfcccd6103fb329cef167"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "e22023ba5d8c2439900a8e08435c29ee"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "7b1c1921ea606cbfa9f28ef10396a9b4"
  },
  {
    "url": "blogs/每日一题/2022年/8月/1日.html",
    "revision": "2225df3ba07ddaa8b16de7815b9f7741"
  },
  {
    "url": "blogs/每日一题/2022年/8月/2日.html",
    "revision": "c0c7add30ca981ff2fca1fe4e6ecf56a"
  },
  {
    "url": "blogs/每日一题/2022年/8月/3日.html",
    "revision": "8ba3df498e751cb6b5744549d124b014"
  },
  {
    "url": "blogs/每日一题/2022年/8月/4日.html",
    "revision": "87467a79f47b434accac2b83097b402b"
  },
  {
    "url": "blogs/每日一题/2022年/8月/5日.html",
    "revision": "339e440ed26ac5af9ce4cf8f110efdb8"
  },
  {
    "url": "blogs/每日一题/2022年/8月/6日.html",
    "revision": "1b8b2c913168e4edb624ede962e6d2bf"
  },
  {
    "url": "blogs/每日一题/2022年/8月/7日.html",
    "revision": "4684f45e3d64a9664a1c644ed2ba5046"
  },
  {
    "url": "blogs/每日一题/2023年/1月/14日.html",
    "revision": "74620a5c04c9649b4221037e1c7ce701"
  },
  {
    "url": "blogs/每日一题/2023年/1月/15日.html",
    "revision": "8a95f8696b369569cbd3c6c4b1d5c78c"
  },
  {
    "url": "blogs/每日一题/2023年/1月/16日.html",
    "revision": "c3e86bbb823105410562572bd1b02d29"
  },
  {
    "url": "categories/index.html",
    "revision": "74b0d8cd2cfeff1c6f08e215108895d9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "16768617b28cf64381b6713b2a6e8316"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "049cf843f3cf7d3cb523f422190e3b49"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8266fa820ba592658b828c0269eb1fa3"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "30abb45859b1dcd0076a8222c56d5219"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "6228742513a1135fe8c54f5d6508a561"
  },
  {
    "url": "categories/旅游攻略/index.html",
    "revision": "84af87da0e17c0dda81d5ff778ae27fe"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "7727a5d466fff8053213c8452efb0f22"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "d1f8386767748db1c119a515f25b6cc3"
  },
  {
    "url": "categories/每日一题/page/2/index.html",
    "revision": "e7570ae261548f0402fee42f0d0beb5c"
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
    "revision": "d60b0f006b7341bce17b2ada9883f41f"
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
    "revision": "ed38869ce46fde230cad63bc17d7f991"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "8d35ab18c7d3bffc980aa0dc714e1a22"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "282b66ace5402191e57f8828d3a8a101"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "f452f05a4c769e7a92c2db513c82e270"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "501a949c192aff2f31b85a2ee5501c3d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c4cad77c6d92b791369af8c59663e476"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "df5d96cfdbb7c62a57bd360a01be5506"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "f6e84ced2706d7cfa20a7bfe2b8a266b"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "33f231c5c8ab5f5d837abe722ae06ef4"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "5d95a78a0a308f7347c7c3d1e3f2fb44"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "9b09154767c93c4cf730094df37d1e90"
  },
  {
    "url": "tag/index.html",
    "revision": "ca060f00aeec905f22a20356b9ccd8ae"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "0a6d680753db25a8edae7b86bc8788ac"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "21a948a8001d8c26cc52e17e0b3fcd8b"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "8b95fa1ea7db9e1d5e21222956a5c5f3"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "4d08f6f496e37109bb3c7fe80482425a"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "fac0b56e9bad81d8948c40c2b01ce5f7"
  },
  {
    "url": "tag/Regex/index.html",
    "revision": "597b5f72f4165024e2b87e4934ce53eb"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "c41a76898056e717004af9708a521004"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "55da0639ff0d6bdffb6c2ca2948c641f"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "dcdd2129bb121d0f1d421065b224ce97"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "689e5f90819a9da3210678e5355b9f54"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "c59ad54d5aea073974dd85eba8676ac7"
  },
  {
    "url": "timeline/index.html",
    "revision": "65366e78ca3a74ebf2cba60786764861"
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
