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
    "revision": "b3c3e2decbf815c6131aa1fa9373291a"
  },
  {
    "url": "about/index.html",
    "revision": "30e6394179ac16d8deecdae3dded48eb"
  },
  {
    "url": "assets/css/0.styles.9fc03ffc.css",
    "revision": "460f999df98d3ebe1a3481c5fd03e81b"
  },
  {
    "url": "assets/js/1.fb6f97d9.js",
    "revision": "a58577023a2887066af79c55a5338578"
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
    "url": "assets/js/16.a1614d66.js",
    "revision": "9177eecb0c6aeed29faf7264930734e1"
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
    "url": "assets/js/2.bee19082.js",
    "revision": "f2c43f01494dbbcdc1baa5e23bb0756e"
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
    "url": "assets/js/3.1957c4f6.js",
    "revision": "ce9efb203f28f865b4871c8c2404e665"
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
    "url": "assets/js/5.ab0faae4.js",
    "revision": "1059d870f0f29ce21a6d005e67552f34"
  },
  {
    "url": "assets/js/6.714f2e7a.js",
    "revision": "21c4a3e061d307d4ff261ef4191d1ad9"
  },
  {
    "url": "assets/js/7.ffcbecf5.js",
    "revision": "196972ebf6de7318dcfeed20624491b5"
  },
  {
    "url": "assets/js/8.6bf620c5.js",
    "revision": "033488d311fc0013ff81be4cdc37a301"
  },
  {
    "url": "assets/js/9.adefabf4.js",
    "revision": "86f63229a76ef77ad7626da64b9d90d6"
  },
  {
    "url": "assets/js/app.5ea451e7.js",
    "revision": "9c25c56914384b6e983f3d173d890769"
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
    "revision": "c0ef1e60b23df0a8fbcd8b5b49478acf"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "ebd17679df033cd9c8e44980af29e447"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "fa5a6d073e31feb5398184b83fdbfb5d"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "5a2656b988c9717e872f4b27f4aaa367"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "9f76625571635d008e7352948a32c4a7"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "384ae43467c9ddbd1c06d1a51fbaa28a"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "14173a03f13bc257b61b8aaa589b6b49"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "58260ffdf7058f8711de10039ff857a0"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "72213852b2b1ea4b45d70729b90d14b7"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "032f875730d1e0b4f7905ef72b495ef2"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "218786c0502eb7217ad7bfcf0ceb3193"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "ec509b41b8c90875670865a6eea38bb4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "90140ca63656b2593fe42c2b37bce6bc"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "9cf41f9ad5abc54ded65acc1af0a8304"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "8590e5afc37509ce0e984c4d5a1dc555"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "8f71eed517d5daba8190f512fd2abedb"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "b8071630efb48e5b2672226a1c52febe"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "6661e4274051db6d428e0f40132eae0d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "7f9943f3a9423e7b6aaaf5878c8296fb"
  },
  {
    "url": "categories/index.html",
    "revision": "734e62c69204eb3fcd545d0f6bc27fc3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "00ee34c55d814acc688025088df9f67e"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "40e2054406aa23675a665d4feb12eaa4"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "3c88891ed8d328d71251cac2511693bb"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "7c274d94bf55be83c90c1130fb33942f"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "6126b486a437bf844e42f5691f7177e9"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "973db021563c245280916a80d8b3dc75"
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
    "revision": "6dfb733554f17d99afbc57ca67a7eb69"
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
    "revision": "ef10b011f3762dc4cfa07c3d0baf048d"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "d50860aa9ae31028f4dc96911de92303"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "107a08fd0e6bd54bc9fb98290302e239"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c4e207f52c4467a64584055b98590b5b"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "44d276e840359f308ff6676bcc077853"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "2a16e0d18a4cfb20515844464ea6fa38"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "99ad29c44a7dc7026fc978be55de3c7b"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "4676ceb41381036d477d857039f5a468"
  },
  {
    "url": "tag/index.html",
    "revision": "c8c2352ab48912808c02a1a371c35d21"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "9a315b374e2f7a670f2c967c2661046d"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "481a182d4999ec59eff12571c55fd859"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "2e52acddc2c56268efe16958f2e277c8"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "e8dc28c11b116a0c146ee4805c9ff43a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "819c4df5ccd015741debd7f2597fb612"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "366c2e47dc4ce2e6291cecf1e72ace20"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0364f303990deebde71c2a0dd6b5b067"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "b4164a1d636a7472dd6a2459ed73e2e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "11a2335a4c432002500cf58cde8b9c4c"
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
