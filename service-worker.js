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
    "revision": "579a65fe288dbafb77f2933019fadb5f"
  },
  {
    "url": "about/index.html",
    "revision": "98915d83728dd26651a89201a97347b9"
  },
  {
    "url": "assets/css/0.styles.f465098a.css",
    "revision": "4a6b97214372c61e329d49831ecf8a9b"
  },
  {
    "url": "assets/js/1.a924c300.js",
    "revision": "6e24157c9b2a23f257e02895d5ccd4d1"
  },
  {
    "url": "assets/js/10.0bcbdbc6.js",
    "revision": "5f1fbb7cbb989fc6fceaa9c664355409"
  },
  {
    "url": "assets/js/11.96f21109.js",
    "revision": "171c31ed2a779f0de802a03cd557bf3d"
  },
  {
    "url": "assets/js/12.f4f67232.js",
    "revision": "ca837c460f18296c787d95b314b53d2f"
  },
  {
    "url": "assets/js/13.d941321d.js",
    "revision": "61313d9dc7cf9a3178ee9a54b7f82e1a"
  },
  {
    "url": "assets/js/14.501fdf19.js",
    "revision": "b1adbb565c80e78cbf32d8622c031048"
  },
  {
    "url": "assets/js/15.80edbcaa.js",
    "revision": "76eb3e28a0bf89ea6d257d76c5e70d6e"
  },
  {
    "url": "assets/js/16.ad5a3ef3.js",
    "revision": "eacf37daeb4278074871e92ddfe9cea6"
  },
  {
    "url": "assets/js/17.709a4118.js",
    "revision": "4d2ac47cca9e23193e79c2d5b718f959"
  },
  {
    "url": "assets/js/18.c4b287ea.js",
    "revision": "e749b5caa56847461c625f7d58789cd8"
  },
  {
    "url": "assets/js/19.da0c5857.js",
    "revision": "aa37f11ef9b0add43c9bbc93594126cb"
  },
  {
    "url": "assets/js/2.b81a5181.js",
    "revision": "8bd8c2eafefc05ca6350d60377762bc4"
  },
  {
    "url": "assets/js/20.45378042.js",
    "revision": "8e8758440eeeebb063c3b2970a0abb01"
  },
  {
    "url": "assets/js/21.6ccdbeff.js",
    "revision": "00dd20e0fa9dc76e58b6ab59fc097fdf"
  },
  {
    "url": "assets/js/22.612300cf.js",
    "revision": "1aed3523cdde8164631924fdba485f67"
  },
  {
    "url": "assets/js/23.77f6e337.js",
    "revision": "c95057cddd0362ac930055b4f4db9dda"
  },
  {
    "url": "assets/js/24.fb429ebb.js",
    "revision": "bc4455e0bc708a6a07fdbd38e740e73b"
  },
  {
    "url": "assets/js/25.7fd4a0b7.js",
    "revision": "fc7efb557a738215697fae3b3a3af9f3"
  },
  {
    "url": "assets/js/26.28ca72e6.js",
    "revision": "a326d9e1b3846c07fc29e289a241a1df"
  },
  {
    "url": "assets/js/27.97168e73.js",
    "revision": "b71fea398285af5309e397f4aa8bfc4c"
  },
  {
    "url": "assets/js/28.41732faa.js",
    "revision": "e9a6d765af50143d062aa6d5a6f56a07"
  },
  {
    "url": "assets/js/29.e3d2e0bf.js",
    "revision": "15be09bbb837490fed00a3542ebaf6c2"
  },
  {
    "url": "assets/js/3.05fa3fc6.js",
    "revision": "26905bf48a84a040175f6383b6845aa0"
  },
  {
    "url": "assets/js/30.973b0d3a.js",
    "revision": "86d15385d30d078585f61f6b66611d89"
  },
  {
    "url": "assets/js/31.02167620.js",
    "revision": "a7bbdb9abc042630e822d7210abb655c"
  },
  {
    "url": "assets/js/32.d8d91a55.js",
    "revision": "eb1d9adedb4fe54960dad3af0777b85a"
  },
  {
    "url": "assets/js/33.cdb4d051.js",
    "revision": "95da2ae28da3d625fbe4bf1f7688cc4d"
  },
  {
    "url": "assets/js/34.198d2072.js",
    "revision": "e7be8dc38d0be678366653dfd98792bd"
  },
  {
    "url": "assets/js/35.84ea54a1.js",
    "revision": "d8a962682c20a0dfd2f1a10dacfcbeb5"
  },
  {
    "url": "assets/js/6.c806db23.js",
    "revision": "57b37912640e052da66fdf141347cd68"
  },
  {
    "url": "assets/js/7.444cc600.js",
    "revision": "d8aee69f8d67eef88400b9e10c8cc11d"
  },
  {
    "url": "assets/js/8.6ae1298e.js",
    "revision": "01420b1ad63308ace2f0cea93289b3a6"
  },
  {
    "url": "assets/js/9.de1dcfdb.js",
    "revision": "ef743a75dbd285d5795b85f617307169"
  },
  {
    "url": "assets/js/app.0447a056.js",
    "revision": "4a16826f7f1391ff6511f92acc6023a2"
  },
  {
    "url": "assets/js/vendors~docsearch.bab3c832.js",
    "revision": "a96d04b1db284919b5e259a9519203ec"
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
    "revision": "efc7da07af509f18ba1e4c8b66460b1c"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "61bc6ba8aac830acdf4fb3bcdf53ddd8"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "3083fefc9c4b61b726667eb78ff2cb6c"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "58931238ce7971d2d515aab258ad7352"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "c7ed5537c68619056d3ffbd24a695786"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "2d895a71e29363bc9cf676a093f09891"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "d4890b096ff317401b4108bdc9d50233"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "dc2855189ace4bbd62b93e5281c406be"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "905ab2e572da62bb6e14b406e7539d04"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "a949b35f56fa1c4942eb0e68fd138095"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "a1dc333e44c2f74f581f29e4370b3964"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "4d1d49815d56e56899e8e5ac855a8bea"
  },
  {
    "url": "categories/index.html",
    "revision": "473e7e903bb9b296298b61c6b39acfaf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f7537fe02a9b41a64e69a3231f0b6295"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "13e7c42ff535bbea6d4b3aa148b2fcf7"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "32f358c159e16403d181cc39132b61db"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "b5873742ab55f466eff34d8c7c6e8220"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "5fa987b7761a68a86457a44592b5c5fc"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "3b2a92e4f497e961eb75d2974828328e"
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
    "revision": "50ece4a5257a86424cc8600cfe260b42"
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
    "revision": "b3412bec8ef700dc29f2c6ae409a46ac"
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
    "revision": "c5ec22a636b7f194ef66df25685cf5a6"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "f5b89495a19cb538a3c7dda81f61f892"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "adba3fb46394ba6769aeec6ae4de76d5"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "93e8af8f2ba37c5cc3c121969e21610c"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "c725371cb6ef41f5941c86fa08252989"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "36199cb924374f21297fc9b6c15d1464"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "dda1ece1993eeaae6f415c3fe4938580"
  },
  {
    "url": "tag/index.html",
    "revision": "c04a2e51e5774ddaccca4eca483e4d67"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "bf72d1ada5e59a494662187d029eb435"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "9d65c6565ea2d2d56d0c3c7b2babd842"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "ce055d5cb5142f74c5c1041f3ae4517c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "986f107b4dd65109a9252ee1931a25fc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3a990109505e5216f85355e2ad084204"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "26499356d7033a47b0191de3894bf489"
  },
  {
    "url": "timeline/index.html",
    "revision": "467b81feec0ff7dce077f5c7898f36c5"
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
