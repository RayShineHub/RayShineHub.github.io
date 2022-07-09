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
    "revision": "8e73ded35071b4a46f2a334542b92b2b"
  },
  {
    "url": "about/index.html",
    "revision": "19f6badeb13f9f4dfd5e611a79f7e812"
  },
  {
    "url": "assets/css/0.styles.89c3c1c5.css",
    "revision": "1d14d2a816d88fb12f307f303fb57f85"
  },
  {
    "url": "assets/js/1.887909f3.js",
    "revision": "a803bc7ff444f44e27075fb9b1aae9a1"
  },
  {
    "url": "assets/js/10.d8e97800.js",
    "revision": "54dd0d6ecfd3b38acb418583b509b68d"
  },
  {
    "url": "assets/js/11.063b7c6a.js",
    "revision": "b30fd57bff3d9521c8a0381cb4bd1b88"
  },
  {
    "url": "assets/js/12.3cce6503.js",
    "revision": "60828b50efe23822d06b296f86389e51"
  },
  {
    "url": "assets/js/13.df90dccd.js",
    "revision": "234f693350536ecc7f9940551a7ef54b"
  },
  {
    "url": "assets/js/14.773b93b3.js",
    "revision": "61177549a020d12af2b17f26c6917bcc"
  },
  {
    "url": "assets/js/15.06a7e434.js",
    "revision": "4967e6d88d8fcefd87d7e5886630644d"
  },
  {
    "url": "assets/js/16.c917d087.js",
    "revision": "a20c2a0a7e15053256e918db3c361867"
  },
  {
    "url": "assets/js/17.f071fd1c.js",
    "revision": "76d7efb9260c03eb76776ad5d5dd56b1"
  },
  {
    "url": "assets/js/18.a1c41c03.js",
    "revision": "956d98977c8ac546ede1339106c99a18"
  },
  {
    "url": "assets/js/19.0aa35ec2.js",
    "revision": "577b28d1063f79334dc385abd01a9430"
  },
  {
    "url": "assets/js/2.985bbc6a.js",
    "revision": "63798a8d4cde0a7ce188454d27180e93"
  },
  {
    "url": "assets/js/20.f4c59300.js",
    "revision": "5d58a785ea49779d25eaedbb3d618102"
  },
  {
    "url": "assets/js/21.139616a3.js",
    "revision": "9afe844bbb1b2a604260e86019b4439c"
  },
  {
    "url": "assets/js/22.a371dc2a.js",
    "revision": "b2596dcdac577d633d4224a8b1ba613c"
  },
  {
    "url": "assets/js/23.98d5e975.js",
    "revision": "62c7a1df827a1154da3bae12434ede52"
  },
  {
    "url": "assets/js/24.83eb622c.js",
    "revision": "3133c794aabf88850fd9024dc8978e28"
  },
  {
    "url": "assets/js/25.e4babaa3.js",
    "revision": "8fd6dacd4ebc1fc00f00d0301157f682"
  },
  {
    "url": "assets/js/26.72091129.js",
    "revision": "29ebc411d630e0b4df496fcff65da5cb"
  },
  {
    "url": "assets/js/27.e8a2c761.js",
    "revision": "2118bc4d06c2f5f4a876191e9e183b11"
  },
  {
    "url": "assets/js/28.a2e2edfb.js",
    "revision": "685a1295b7f395e98c7b07b625584af8"
  },
  {
    "url": "assets/js/29.f67feae7.js",
    "revision": "3c6063e68f0375e024e50f42f33261d0"
  },
  {
    "url": "assets/js/3.d858668e.js",
    "revision": "7f36513f26efe42dcf32fe80e4f277eb"
  },
  {
    "url": "assets/js/30.cea7b37e.js",
    "revision": "16d5830973c253c98ebedc04742829fc"
  },
  {
    "url": "assets/js/31.038e2719.js",
    "revision": "42a7603e90264fa6cbcf6ab38dad9aa8"
  },
  {
    "url": "assets/js/32.db7697dc.js",
    "revision": "c5c566f9b647974b86f78066726cc812"
  },
  {
    "url": "assets/js/33.e8eb881e.js",
    "revision": "f2c5d9325c1d3c558aaba7ca54295dec"
  },
  {
    "url": "assets/js/34.6f904983.js",
    "revision": "58c09280334ccdf788d2b0fa19ea407b"
  },
  {
    "url": "assets/js/35.fec974b6.js",
    "revision": "5a84823ca790c492c33f711bc5c73afb"
  },
  {
    "url": "assets/js/36.f8b99305.js",
    "revision": "e59662ba3f9fe449f1c81d66e2b3db91"
  },
  {
    "url": "assets/js/37.b9db7839.js",
    "revision": "e40a2cc96d929db23b14a7cf237e0096"
  },
  {
    "url": "assets/js/38.c299de2b.js",
    "revision": "d63c6fada13ca8c6fe033e4746ddfdb9"
  },
  {
    "url": "assets/js/39.94b21229.js",
    "revision": "f3cbb7b0d0f4434ab2f6abf41f7abe69"
  },
  {
    "url": "assets/js/40.00f03d59.js",
    "revision": "7847a437f9f08e23e7a4fabc95ccda1b"
  },
  {
    "url": "assets/js/41.111c4d2f.js",
    "revision": "670ea876459367ccb5998c68f464a9c3"
  },
  {
    "url": "assets/js/5.995aa585.js",
    "revision": "58062ef3bf193e350797dd77f8cfb907"
  },
  {
    "url": "assets/js/6.4cf9e9ce.js",
    "revision": "a55c336dca76fa8a931d34124d5192e7"
  },
  {
    "url": "assets/js/7.dc49bd68.js",
    "revision": "e5762a6dd00a7537a53d67fc76ea9a2c"
  },
  {
    "url": "assets/js/8.22ca77bd.js",
    "revision": "7326f3f28adf706a0e3e36e8ad46bd81"
  },
  {
    "url": "assets/js/9.adefabf4.js",
    "revision": "86f63229a76ef77ad7626da64b9d90d6"
  },
  {
    "url": "assets/js/app.5334e8ea.js",
    "revision": "7444b4751b0efdd925de4e14b759b3d4"
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
    "revision": "7aa34cdb1118da02cf109d9c50b37ac6"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "702155e6ec8d6926592a9ca2b166b5e9"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "c1d30f0a98c172baf1d2f0c6d73bfba2"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "030d75bc5717a41c9bb3e3dfe151d1d0"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "53ad53d2f367ac87544d1296daef5c53"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "d8cde73770e04fbc04dabc40efe03bf8"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "8c6c608ed72e62c256216152103a5e34"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "0d140711458e3e1be18e8879d1dfeca4"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "a96f2659b8e51c39371ad2223b73b9d9"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "d37052654ce12142d735fe9a0e851d79"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "75b6285e4a995720b8a1a157fd15e483"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "99b65ed58274a057950c103de2ae768e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "2a98610d1ce5cb9ee663c08fcf35e685"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "060f9cc3919c045eb4d49603d8aeb8ff"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "26a9f573aaf79c8e32167595242f95c5"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "06964c5acfa371ec7f187eb645ddef01"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "68c5f156e8e4c651b343072258cf2e44"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "88d7718928e853ace1b0d8a0c5729bea"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "cded03ef9a2f65b330ee43d687f5c996"
  },
  {
    "url": "categories/index.html",
    "revision": "b2b4b787767cc8cf176d1f16b9accb0d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1667cd5adfc83c46c1e531458fb5dd70"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "b31084fd799ecf7c01397bac79be603a"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "db4983703486be744591ca2446d2e6e3"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "3772af0104ddc148b99e2b0c55a68efb"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "1102eb6667f6dbf037f7852ea95592e7"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "c3d2b56889a9874aecb75807b9c04325"
  },
  {
    "url": "cus-icon-font/iconfont.css",
    "revision": "124d747586fba2e391df543ca9271d3c"
  },
  {
    "url": "cus-icon-font/iconfont.ttf",
    "revision": "c48b3cead48609dc7757df060e8d2076"
  },
  {
    "url": "cus-icon-font/iconfont.woff",
    "revision": "2cf196314c36a13b99486b17f5b25ea5"
  },
  {
    "url": "cus-icon-font/iconfont.woff2",
    "revision": "cc6d447b8a80041317345a1616d2eabd"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "dfedc9bcc161bcc36a72aace73c788a5"
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
    "revision": "8bd6c08b00a288ed93637c4f4a153691"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "ec670bcd6776e2210cc2b57dfc81e221"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "9f0749d043588d5faa39c922b07793bc"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "0121a93e677ce894ce8b6b6d4cde2912"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "2cc7ec95634f7155d55cc5d3c869016d"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "a9273187dfa0500c50b4da3f12ff7860"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "8c5efb907a071bb81acb0d83a891e8ed"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "c8e81405aa71759df52b10a27024f04b"
  },
  {
    "url": "tag/index.html",
    "revision": "99e3c606e16c73f6efbef2c2f3fb9459"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "cf534c30f697f419af5c662dc4ba09d4"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "574ee68628e7c44961bea79339b3cfdf"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "991e6cbb3238b0ac7fa9b9b83e52c489"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "c6347cb355935afdfa68991c1e55e8f7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5a767cde1d1fea0149483a1dc3e0e4b0"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "3a69fa1689c871b07e1f4381cbb7844b"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "b0d06c557294bbdab11ff9f74c0a56a6"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "381eff21fab0020c87baedf172eda36d"
  },
  {
    "url": "timeline/index.html",
    "revision": "9f81cd71efd0a17895a3b454ada1ca3f"
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
