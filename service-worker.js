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
    "revision": "d0598584d62c9f4d84fff6154594f1cf"
  },
  {
    "url": "about/index.html",
    "revision": "77bdc1dcfa1d8eac15e93445c419fb20"
  },
  {
    "url": "assets/css/0.styles.a92c67c9.css",
    "revision": "c84b57e5cf692fea2d182725acb6b92f"
  },
  {
    "url": "assets/js/1.38c26113.js",
    "revision": "c2c41eec362383023c4b4cb424c204cc"
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
    "url": "assets/js/16.656ad2e4.js",
    "revision": "d98ba1afed5df4eadb70c70bd58f1ce9"
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
    "url": "assets/js/app.2874b1e9.js",
    "revision": "4c3dc3ce492f55e2e2bceabc2c800e19"
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
    "revision": "ae82782da67331761e7eaa74f3a24f71"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "1a08842a5579dc38d9fa1286271915bd"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "3c4c46631b492075be7908c541aece48"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "c2072b0355bea46088290688f7d06cce"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "e060112fb2d4fa1b33e2697cdea7b0a0"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "d07b2ed049cd5702b2e426c3e215202e"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "c9403259eb302b44fa59a0094863f246"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "25db3513379013970dca4f9e4d711a62"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "972f297742cee1f185383040b02d2660"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "e0835d718670136d9b7d06bb209cf270"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "3ab4ef608189a648c2d3c31332b5195d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "6550e526ebc3b0ad56680c01e9f06a5c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "db7b6eb4fcf5ecda26961c9932af1c46"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "fcadca18152bc0cf897e0340391eab99"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "a54f239ad4ba1244980c210c2e4aef41"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "7a939f1ba5dd52151508938035524b79"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "42889cf503f723e4dec8ca663c2b4d18"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "ae4e85739f969f02c96bd47abaa9c574"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "f75c2f216a467dfb87f69fe77eb0138a"
  },
  {
    "url": "categories/index.html",
    "revision": "f4e0b370229bbcc1dc5a5d1b73620e7f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6630bc5d3fd5f4589805e22cf2de05cd"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "53d6ce7c939901a8f67f0ec284def5dd"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "2f41c9fba093c46a3b9d39c5ad6ff4aa"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "27b9e0ba195a143428f455b337966d8c"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "bbbeb60c9effeeed63c38041d1563b21"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "ab987f4a6dee9fa9c987f0bcd38e576c"
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
    "revision": "211188145515dab03ada6f2f232d0eb2"
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
    "revision": "4b205556a5bf04774af9b9dd275c74d2"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "2df91e1bfce79e04c24f4e0ab9b7f7c6"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "682186760f85565e9ff46613aad2e8c6"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "58cf4e913847d5461ebdc4f681947285"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "3a9a56bf1ff42b3009caa666b13b0052"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "9dc438212a6cd1adfcfb8b5d0d7270b0"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "9b536eb1cfd7245ea243892eaacfa0d4"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "12f45b7319d021b9807b9b7c632ca5a3"
  },
  {
    "url": "tag/index.html",
    "revision": "545f28783af2c342b0aa4b77c1f991dc"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3a9d1faf746605bfb18fa58ca1aba7c9"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "d8b755a9260bb7cb745dae44443d981e"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "002f18791c669645435c3e9a79bf06cf"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "4c57635ebb7b3d968c754d1a31d04f42"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d24699ad7b57c4df4e58b0ccb4bf529a"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "cea0d55f430a9763976e666b8f4f1c34"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "d06d71f1842dc518df4c882fc7408747"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "60f72f78eb37a1301baafd546b004ebe"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d2936b6cdd278922754be587f5717cf"
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
