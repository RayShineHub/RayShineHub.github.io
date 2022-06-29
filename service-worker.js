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
    "revision": "794d7731d4c7d9e543266d01476c4e6b"
  },
  {
    "url": "about/index.html",
    "revision": "2f14572df7452650e69846e5126f0d04"
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
    "url": "assets/js/32.d92aa046.js",
    "revision": "ef81041bd22c5cfe9a6922f1a474aa7f"
  },
  {
    "url": "assets/js/33.bfd917f1.js",
    "revision": "bb2d4a2ef3043a186e57997ede71b700"
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
    "url": "assets/js/app.239dbc40.js",
    "revision": "83097629c3badf65f514381ea6a581a3"
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
    "revision": "85791fe714866fe2e66a93b09be1d90a"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "c1fba21782d6d2f7bb348db0f3697bdd"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "734f8323890f3628bdb8699bd0bd02fd"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "93e9ce3c270b6b226585078a292f48f9"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "9d8fff3e7060ac8c1ac0d9ec1f241194"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "d32692a599f20f32b6c9041de3907548"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "df13c7afb814264f7981ba6d187f77b0"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "26947848751d57443c43392a94f80d67"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "3c8c591c306b44cbeb5ca9e1a94e24ba"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "08809e0255ae4ba21d99ce9a415cc0ee"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "4baed745d269bfc2f7002d7856cf7686"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "9efa2a6bf7677cba3b6a747b8756b8aa"
  },
  {
    "url": "categories/index.html",
    "revision": "a14e6601e40598483e4a959bbd2fb68b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cab23081605a02526d663c58f939ad0c"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "56304b3e43c724ee790b30a83457e862"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "db77960746d1d7c05c452d7b7e12c51b"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "4085bba68e61853a6a10942edc66828e"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "af6d81051587d345cc2168e9e69ef1a1"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "22f4fac8d5b7b132030f83c4c036202f"
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
    "revision": "b8d7d8c5c2d80c15df220362e03dde09"
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
    "revision": "0691f56f2db394fa7a722b20d2cff894"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "d94981cfce7a38fa6f99f29676710d6b"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "31e91896f8a6b0161cce5cf468250b8d"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "60ac537ef066252709e25bb41a48a9d8"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "971036378aaeb91b924edfa07d03822b"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "bd07841faaea0df700c81efcf364ef57"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "ed192c8504752959e5c637a02744cf3c"
  },
  {
    "url": "tag/index.html",
    "revision": "4047409b6c26c2945a666d9dc63ac9ab"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "21e9b34b1c945c3e1fe18349909c3092"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "313a9987612f8d11942124fa4767075b"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "8d58d7b24f9e8f20f8c05fe223429b22"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "953f5978332e6330d58f20e4da6dba04"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "277c97a1ae9ada659d1e2e7d30979a74"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "375cc1ca9429639e1f5417ed5d05ecde"
  },
  {
    "url": "timeline/index.html",
    "revision": "70dd4fc1fd1a4508b7727ffb4a866370"
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
