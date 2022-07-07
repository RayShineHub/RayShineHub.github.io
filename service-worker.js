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
    "revision": "2d6b2cd2a7656b319d5d4201ad97ca9a"
  },
  {
    "url": "about/index.html",
    "revision": "1a7f1c33ca1ea0ecab2fc1b903463d17"
  },
  {
    "url": "assets/css/0.styles.8f713add.css",
    "revision": "3031aa45b53f3b9c10b373b770354c9d"
  },
  {
    "url": "assets/js/1.6436ed95.js",
    "revision": "aab348415bbb8a9d7dc6fb64386b57b8"
  },
  {
    "url": "assets/js/10.fae029d8.js",
    "revision": "a39a4e08458efad591e8a19333a11cc0"
  },
  {
    "url": "assets/js/11.52bafe7d.js",
    "revision": "eaee061c5c716d666060f0a981147e25"
  },
  {
    "url": "assets/js/12.bb406ca5.js",
    "revision": "1f48261fb3187ac496d17f513becc669"
  },
  {
    "url": "assets/js/13.c724549e.js",
    "revision": "f5e76429e0513a75147ced8c283129bf"
  },
  {
    "url": "assets/js/14.4ca5aad9.js",
    "revision": "06263e0a7300be6cf271d83e09d9db4f"
  },
  {
    "url": "assets/js/15.c493da4c.js",
    "revision": "e61c9132d90817682aa1f783068a0898"
  },
  {
    "url": "assets/js/16.ea804ba4.js",
    "revision": "27207598a2f0e240ed73f28e9946fedc"
  },
  {
    "url": "assets/js/17.8222271a.js",
    "revision": "5237c47e7d868b86a1069af239bd6e2b"
  },
  {
    "url": "assets/js/18.f5c65413.js",
    "revision": "2d3c281cff957868bfd9b310daee1d51"
  },
  {
    "url": "assets/js/19.3a88b900.js",
    "revision": "0cfb4c8ea790b58586a7c7cb1125d742"
  },
  {
    "url": "assets/js/2.16520945.js",
    "revision": "e26fbc5ee0911fc262c60ed736b93229"
  },
  {
    "url": "assets/js/20.1c93d1c2.js",
    "revision": "3dc52832bd2ab53001ad12dc9032ba7f"
  },
  {
    "url": "assets/js/21.3c629c0c.js",
    "revision": "fedf83cc9bcb50876ee49886557ca8c6"
  },
  {
    "url": "assets/js/22.435f0ecc.js",
    "revision": "e195716bad1821514529ad332d4bab78"
  },
  {
    "url": "assets/js/23.d4449c50.js",
    "revision": "30fde49f9a942b463fd09bec2b63ff5f"
  },
  {
    "url": "assets/js/24.fb7cb458.js",
    "revision": "60062585c17ad700f937e6cf4fe79d76"
  },
  {
    "url": "assets/js/25.c38e5dcd.js",
    "revision": "de587ceb7d67611a5b5ae921fd48221d"
  },
  {
    "url": "assets/js/26.563a4314.js",
    "revision": "b45d749845b7fdb6c2f81b12f18116cd"
  },
  {
    "url": "assets/js/27.3ac41afe.js",
    "revision": "4d1d4c4bc90633bd6ee5dec9761bed71"
  },
  {
    "url": "assets/js/28.ec5c654d.js",
    "revision": "5a0f90e2206916ca1ba689b008066e0b"
  },
  {
    "url": "assets/js/29.dec7199a.js",
    "revision": "8c1ce8552728628e84e7fd8bcb90ef3f"
  },
  {
    "url": "assets/js/3.3d08193b.js",
    "revision": "e884d6ce1b2e43d94a158585cd747b46"
  },
  {
    "url": "assets/js/30.98746112.js",
    "revision": "6e10727d8a9ac412a7c44cfe01aa87b4"
  },
  {
    "url": "assets/js/31.a1fb9db2.js",
    "revision": "5c82c9d3af56a008c907874531a59310"
  },
  {
    "url": "assets/js/32.2f66f430.js",
    "revision": "54aa0ac0aa62bb9db82d9922d6ea8563"
  },
  {
    "url": "assets/js/33.56324f33.js",
    "revision": "f099bc08cf4eace12ca119b437aecaeb"
  },
  {
    "url": "assets/js/34.98156a96.js",
    "revision": "50db1706e466e149eec07bb9cf155eb5"
  },
  {
    "url": "assets/js/35.27cb84a8.js",
    "revision": "9f9b4988b91a0c0f5d4c259532402ba7"
  },
  {
    "url": "assets/js/36.a2fa6d63.js",
    "revision": "07ff629f3b09e6df0677165293980a61"
  },
  {
    "url": "assets/js/37.fd470f44.js",
    "revision": "5d5d609b530581d5f2d6c4c48d551109"
  },
  {
    "url": "assets/js/38.265651ce.js",
    "revision": "d5079a9ad27401142ad85a948b998feb"
  },
  {
    "url": "assets/js/39.226b8c7b.js",
    "revision": "628765e2d2274b071c881b2b8f33fb2a"
  },
  {
    "url": "assets/js/40.a6e35625.js",
    "revision": "1c8df0670ad9e02a784c35ed4ca44f0a"
  },
  {
    "url": "assets/js/5.68ae1a6b.js",
    "revision": "39492462594d8881a2ae7cf79913fc3e"
  },
  {
    "url": "assets/js/6.c5194e61.js",
    "revision": "a959967ebdf632fd26fd7662bdad001e"
  },
  {
    "url": "assets/js/7.88bcebfc.js",
    "revision": "acb110c326ef3a211b0a92fb706c49e2"
  },
  {
    "url": "assets/js/8.8b8abc85.js",
    "revision": "8465a27a98717e3263ed1801746d8d18"
  },
  {
    "url": "assets/js/9.f0422615.js",
    "revision": "b5bd6ee9846c5b6dd8037f95f0a7e639"
  },
  {
    "url": "assets/js/app.2b80a42e.js",
    "revision": "5091ea9a85d94395610af056ee3fc85f"
  },
  {
    "url": "authorAvatar.png",
    "revision": "a0f444359496b1978934d0cfba647d92"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "c55b5f309956f48b96d7611aef983145"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "33623c461181a4d45562881301083b7c"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "1f0482bc0bcab4fb1e0a5c385c9eaf78"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "f5373053c903fc04f6eac8bf99cb5ae6"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "7305ce7c683d60f63c19824580200820"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "dd78c59fec6adab0342431815688967d"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "1b7ef78872c43d2149652c0d64155bd3"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "aaedaef1cf731292528f265ea533d939"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "2704ecd2d31ca6954be57557ee9cf3ee"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "69e174d1b093d32769ab265f52152ff6"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "cf086e4bf108014efdfb42e53f09ab2d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "6b0a8c4ca8542c1ad730fa70645b581c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "8385164611b00197a06951f91f27970b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "275bf8132b9431adcc0aaa873681d188"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "918377ae7f7d1bd7fbb309a52d89a437"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "af893336f3eafd70ccec693c4526e52e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "a1e5339b8583a1e78ff0b20d2e516809"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "d0f6b11ab1c1dc6c2de0b11560b2daf8"
  },
  {
    "url": "categories/index.html",
    "revision": "b6ab8d1438c104d87b05b6700a04b7ae"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c5cbe0e72d7228f0b9a13a9e2494f1ab"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "1e1a61fb58213db2cdd7bcb675decfc1"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "785ef7839bb38efb173eb13502234e1a"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "3c12fec03698d4c69537c16562d80f70"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "1a56e830e4704c59714482489ac9ea82"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "dc0f2d2e82da7a299248315f5c32aa7f"
  },
  {
    "url": "cus-icon-font/iconfont.css",
    "revision": "f4489d173798b9ad31723d2ce5761086"
  },
  {
    "url": "cus-icon-font/iconfont.ttf",
    "revision": "0a9cbd443eec3c0c463cfcdadf2d1ef1"
  },
  {
    "url": "cus-icon-font/iconfont.woff",
    "revision": "52dd9791239339a9d4afdff1fb5d7892"
  },
  {
    "url": "cus-icon-font/iconfont.woff2",
    "revision": "7d02738c9ded0aba101b632f13179ecf"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "201a7d36100eb906e87264ff47719b3a"
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
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "logo.png",
    "revision": "9677afaf7b215f54e090d7aabd93c71a"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "2643d07d5b37c01da497421994148943"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "fe9efd388fd2063c9b7c9857fc891372"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "cad9a915c91d7d91d016582a5bf22d37"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "f339c1c810659a5a624f7f285ea2b8a3"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "a742a83a9af497403a94844d53d56a64"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "7c4a6a5dbfee23e6a9d8612c7e670100"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "74606420863e214098fc1b252161cf97"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "c5a1631548494806dd674b6540dc651f"
  },
  {
    "url": "tag/index.html",
    "revision": "2f37d5fbac1da070f71baf1e2ec9a6fd"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "7ca2f1c94337ee6a2d1e671de0d3965b"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "cc91510198f85e36af1ca8f93ffb267e"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "5f449f39becda3330aee247d5dcc5f77"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "f3ff5a1cd0c3aebf082169bce32b84e7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "af1638ac344e75d9f48f997bc39fc5a8"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "945ac6b338b5909ed50f75a4ed79f3d3"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "337492bfc10e16e57a20052a63d864be"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "824935bf99f0eafa0e3d8b96c569a3ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "38392c678992f464e37a71e2485d0c95"
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
