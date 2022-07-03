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
    "revision": "13e8ab4b01bb66e09d056450e4957798"
  },
  {
    "url": "about/index.html",
    "revision": "fed6b7ab29048a10bfb137376c5beb8d"
  },
  {
    "url": "assets/css/0.styles.de9597f4.css",
    "revision": "a297f15c69049652a603a207e722f47a"
  },
  {
    "url": "assets/js/1.7e037bfa.js",
    "revision": "25224e2d4595800e98b80f9947ba2ff5"
  },
  {
    "url": "assets/js/10.bd18b9d0.js",
    "revision": "2172a0b2d853991ecb9f6ae72618fdf9"
  },
  {
    "url": "assets/js/11.326280ce.js",
    "revision": "7211ab88e5598c08ed4b7f96c6d1d091"
  },
  {
    "url": "assets/js/12.1dea6f88.js",
    "revision": "4b55ad1ad6a75854a512d4c1644c328f"
  },
  {
    "url": "assets/js/13.edc3b517.js",
    "revision": "e70e778da469e9e55106c3ba344c8777"
  },
  {
    "url": "assets/js/14.8a5fbd15.js",
    "revision": "4a7d4e8afb7ed834e9a7de82ff2938c4"
  },
  {
    "url": "assets/js/15.40a83e52.js",
    "revision": "67b250df5f24f81f91dee0881375587d"
  },
  {
    "url": "assets/js/16.c5394710.js",
    "revision": "da14992362254634d07b582906ac20c3"
  },
  {
    "url": "assets/js/17.351a92c0.js",
    "revision": "c1c8d733009be711d893ea8892392a1a"
  },
  {
    "url": "assets/js/18.8d1eb572.js",
    "revision": "889ce0d7a40dcab5d7bf86904b0a8504"
  },
  {
    "url": "assets/js/19.a9a4b653.js",
    "revision": "841106a07f891d9bb93728df379ad254"
  },
  {
    "url": "assets/js/2.abb60b6d.js",
    "revision": "53bdf93a8d9f9825114fa44cabcede90"
  },
  {
    "url": "assets/js/20.6f6715bc.js",
    "revision": "831619626341c39925fca423d99054da"
  },
  {
    "url": "assets/js/21.671d2d3c.js",
    "revision": "f5d8b938e6bc9cbea15b92e97dc940b2"
  },
  {
    "url": "assets/js/22.004a8916.js",
    "revision": "c6ca6ecb18078f8d4a5499b5b4444479"
  },
  {
    "url": "assets/js/23.db32a11c.js",
    "revision": "3085cb4bb6087e2cf76706cbcbdaa1e1"
  },
  {
    "url": "assets/js/24.566c67b0.js",
    "revision": "ff5633d7d1575a2fdb8d9eb3926ef395"
  },
  {
    "url": "assets/js/25.c3dc337e.js",
    "revision": "3400bfd6d253c88c96c7de94d77161ed"
  },
  {
    "url": "assets/js/26.f7165b53.js",
    "revision": "471d6daee39c770cfaacb2c68d256ffb"
  },
  {
    "url": "assets/js/27.3f9cb74b.js",
    "revision": "e25dad4aac131be177a2611e6e4b63a0"
  },
  {
    "url": "assets/js/28.2ddc4f27.js",
    "revision": "c244d47c2cb0549256cc421bd5b7abbc"
  },
  {
    "url": "assets/js/29.a182f1a3.js",
    "revision": "23dd5b9a86d772a92f011f7517e3eaa4"
  },
  {
    "url": "assets/js/3.42a2a67e.js",
    "revision": "fee233cf824e0ce98b124ac564c4155c"
  },
  {
    "url": "assets/js/30.62a63157.js",
    "revision": "9a68553707a89defa470e8f5deb950dc"
  },
  {
    "url": "assets/js/31.b1df6603.js",
    "revision": "76684ad185fa4c90c7c86a340550ba5e"
  },
  {
    "url": "assets/js/32.c63c3179.js",
    "revision": "54b5c0efceb98a1492f43ca5b1cab9d6"
  },
  {
    "url": "assets/js/33.9ce6fff3.js",
    "revision": "33917b42c2eaef7ada78468510679a94"
  },
  {
    "url": "assets/js/34.7ad50246.js",
    "revision": "3730ac0fc8cbb5b3095070c3bf7fdf93"
  },
  {
    "url": "assets/js/35.cacd8b1b.js",
    "revision": "4dfd496428f4963a13e078bed25e2571"
  },
  {
    "url": "assets/js/36.e0e0856d.js",
    "revision": "a231cff1cf02876dcce84b054db23ee3"
  },
  {
    "url": "assets/js/6.7a24e962.js",
    "revision": "1a6bfa29cc04580871de685d0bf5675b"
  },
  {
    "url": "assets/js/7.0b55998f.js",
    "revision": "635f21de862513a11402f5ce351fffe5"
  },
  {
    "url": "assets/js/8.ecf88cdc.js",
    "revision": "ca4b7f55ec9550af27a5bec3aca74303"
  },
  {
    "url": "assets/js/9.1ee3b2f1.js",
    "revision": "2ec0b428fbb998859f983d1532247e17"
  },
  {
    "url": "assets/js/app.77a76cb4.js",
    "revision": "1176af77ff0948c74f64245ef6c775b8"
  },
  {
    "url": "assets/js/vendors~docsearch.280b5f35.js",
    "revision": "0e6177741a087501a0745e6c3bf76031"
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
    "revision": "d1805c6fa6d75ad5129144c0b1e00594"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "4e48f43955fd70dd7effc3bf03f0875e"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "dc12eff08f6de3121881017a70cc6b89"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "d4ad6e0b049315d706c9345d5df4531f"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "e2f4f6077b4dab2571ddb5a6fa157019"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "b666a8cb29551c5f1dbae3d2814abae2"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "a4fca792a879184660204fbfac3522f6"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "f4ec31e6d7d4ca15efb645033e3fee45"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "c6c85a2af60d17fe4544e7319f1dbece"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "3cec858aafc675d958379368687b3aa1"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "91965014a9b40556be24b84240ff4f42"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "cccba2b393b9ffd4d1f1e0648b7511a0"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "9d53e4a6e378bbb90f3b2f026be00cd5"
  },
  {
    "url": "categories/index.html",
    "revision": "1b23ed92df9200d954e0c073c6a52eba"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fce38a26b4ee4cb6df46e082e19916a9"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "516b135ca96e550e1c02380bdc41914e"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "ab280565158ecaca6468caf455f76a42"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "3c7869f686ccde36a999ab17c7f4dc1f"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "e25a71692cc82f43c7e83faa3367484f"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "056c562752693e0c9ba18c54f1558281"
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
    "revision": "f0bc6b6ec24eca31f02345e87a1638ab"
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
    "revision": "f035f72efd47f0e289aa5eec89200e9a"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "fd50753fc2ac4b5c7785ede93c5e71fd"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "0322de01ddabf2d79fa44e6344ef12e0"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "3b80c6e6da385117f67c9307554ead0a"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "458135275c139149f6b33bcfd1f95624"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "c22f5af3923cf2ce1d82c3e10ca24c7e"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "9c6ab54868b04160069860dec2f55bc4"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "0147dd276888ddbf0c35dfc451a54885"
  },
  {
    "url": "tag/index.html",
    "revision": "36e1fdb9bfdb9d6950a369180319f0da"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "65a4714327b14c89c4c0d2a1914e71dc"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "f440f4e65d610e656699f637c65a6442"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "521c228c3a56d43865ba5fff3937b959"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "fb17ffec91b1747d0f6c751fd8339762"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3b55d480b9bbab92b261b38a089c8b84"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "c3531dfe90019a9ba07f440d2b665009"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a26fa50ad75fb69de5ec4ab6124aedbb"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "69e84c0119d8e05efa7b5801a8641b91"
  },
  {
    "url": "timeline/index.html",
    "revision": "d3be4d213a958c8350a968190034f551"
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
