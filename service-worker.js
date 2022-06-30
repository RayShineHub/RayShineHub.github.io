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
    "revision": "0353cad984bb0029aec9e1d2a1639bdd"
  },
  {
    "url": "about/index.html",
    "revision": "35eab232a9258d8deab956a91a0bcca1"
  },
  {
    "url": "assets/css/0.styles.b71c9e4f.css",
    "revision": "18623b0c12c6a91b9abe73909b5cac30"
  },
  {
    "url": "assets/js/1.98b06837.js",
    "revision": "d2ea995813ba792533e2fd2b01bcc701"
  },
  {
    "url": "assets/js/10.de7762fe.js",
    "revision": "0b1b684da8eabf4d7c1e716660cc82fd"
  },
  {
    "url": "assets/js/11.97abefbf.js",
    "revision": "ba2aaf16dfebac1d9f07206357cdef35"
  },
  {
    "url": "assets/js/12.16c615e6.js",
    "revision": "6b81e71c244d64b16257f5c39fd05f3f"
  },
  {
    "url": "assets/js/13.971de210.js",
    "revision": "b71907df7e82542878b008cf3f7a4360"
  },
  {
    "url": "assets/js/14.ebc16892.js",
    "revision": "f88d6c9aa8bf1fa94aad6c2e996e5e01"
  },
  {
    "url": "assets/js/15.9614f803.js",
    "revision": "890e699e323c8bce5266c0723f98984e"
  },
  {
    "url": "assets/js/16.198551db.js",
    "revision": "2e555dd5fea9329c30532a29f8418d11"
  },
  {
    "url": "assets/js/17.908a49dd.js",
    "revision": "da0f20e0749a2305588db275108d52ff"
  },
  {
    "url": "assets/js/18.6957a418.js",
    "revision": "7a971789296095721ac1500eb7a8c38a"
  },
  {
    "url": "assets/js/19.1d0d2d87.js",
    "revision": "797e14175a65d201e2a2a8df7750634a"
  },
  {
    "url": "assets/js/2.bed94bd8.js",
    "revision": "7cd04fcb2005f068e6f3079f30ae2ca5"
  },
  {
    "url": "assets/js/20.8f3a9ec9.js",
    "revision": "9e26cc9a3454730263a164ca5fce6fa2"
  },
  {
    "url": "assets/js/21.47669a30.js",
    "revision": "093d69d50161a3260a90352b6db444a7"
  },
  {
    "url": "assets/js/22.140cd097.js",
    "revision": "5120f62d202b18d7bd3f61348b415a36"
  },
  {
    "url": "assets/js/23.9821cb19.js",
    "revision": "6e34e3d7924cda22f1335d22e4407227"
  },
  {
    "url": "assets/js/24.22d305e3.js",
    "revision": "90be1706be0d8a225d3ff595a868b2e0"
  },
  {
    "url": "assets/js/25.460a3b08.js",
    "revision": "837c815be9e029d427368d84bed0a934"
  },
  {
    "url": "assets/js/26.3695f011.js",
    "revision": "ac5a9d2237201a754a8fa9f62b742096"
  },
  {
    "url": "assets/js/27.cbd78b90.js",
    "revision": "e36495485a3ec7587ea4a972330e3d27"
  },
  {
    "url": "assets/js/28.7c23047b.js",
    "revision": "89d70062ebf20ca3a71f702fad79298a"
  },
  {
    "url": "assets/js/29.8dbce8c7.js",
    "revision": "cbe123c337f328205f6a6f4b783a23a4"
  },
  {
    "url": "assets/js/3.3532802c.js",
    "revision": "6c0196679f7a09491ba52bdb5bf6b9b1"
  },
  {
    "url": "assets/js/30.564313b1.js",
    "revision": "e0da2cfe91ca049b157c6a2fc938aaf4"
  },
  {
    "url": "assets/js/31.5c9f2235.js",
    "revision": "38f57e470627ed95e561796f51fbe990"
  },
  {
    "url": "assets/js/32.f93c543d.js",
    "revision": "1c4b46304cafb54a1fac1c933415bb21"
  },
  {
    "url": "assets/js/33.980184d5.js",
    "revision": "b80f3003c919bb7b146371e18618c70f"
  },
  {
    "url": "assets/js/34.d3d079fc.js",
    "revision": "fbb8ddddac8e5b809c1e4b1746f0221b"
  },
  {
    "url": "assets/js/5.8bd8c724.js",
    "revision": "ebb6669ee8deb6f297784fe2fbb28f48"
  },
  {
    "url": "assets/js/6.39a76209.js",
    "revision": "72b94d12bd0970ba19b3f049bb283fc8"
  },
  {
    "url": "assets/js/7.84389eae.js",
    "revision": "ae21d561bc19b0da4806185955fbf061"
  },
  {
    "url": "assets/js/8.cff76f7a.js",
    "revision": "685df9cda672397151498a5a69c2a341"
  },
  {
    "url": "assets/js/9.f7807364.js",
    "revision": "9ff071c7d48ff34a58ceb9d6ec4d4203"
  },
  {
    "url": "assets/js/app.d88fd313.js",
    "revision": "daa4082bfe646e421a78ff910da6c043"
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
    "revision": "83433e90c614bad520fd3c5ae0b66bbc"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "3bbaea380dcd44038890f230906895f9"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "5407a78b3b4823cc18d9e0754af46673"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "010939f3572e62d71a94ada91d714279"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "c28ef717acfe4ea26fa28d5ee6cf60f3"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "bf7a45e116f16df998abe2b913a5c0b7"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "46652de13736b0f5fca9f172edd76084"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "1177edc1c9b2d85a991b480a330d22ec"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "6ad50959b3be91db1c2988692dbc586c"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "488854df48ed098daa6f30a6e4b1b943"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "50856bbe035d6c99f900ae149096bd1c"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "3d41fe0e7b1669237731c18725999e04"
  },
  {
    "url": "categories/index.html",
    "revision": "8880e947c4d206da9b42b0162507eabc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b6466e32c88e817f721d03097a142903"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8751e747ece15bc01e960970a790733a"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "f235db6e9a75b16bd1ee4dc6a79b5f39"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "fa5ff53ccd9a0e8aaae0cf529a99672d"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "dd6cc6d4bfddda50ca3c322e16732494"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "ae8504663318e1b94ec0e999e72f9fc2"
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
    "revision": "7378cc584d561de2c24d3a10c5c51627"
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
    "revision": "521c04e1ffb991d1056626fa40fbf456"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "beeb8314c2b86300dbeed06b3a2c3509"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "888f7e4ab90e1821093adf41edbd9a9c"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "6c56262659422d286817ff7cba65a507"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "aebeeed80454100802fd2fc59d13a614"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "25925366321c5e6738dd8ee5860f2ece"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "352869bc2df688cbeb66a6dde845d85f"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "e093a70432e3bb93d024eaa1b369d0c0"
  },
  {
    "url": "tag/index.html",
    "revision": "2c80b9facff8c98ce62467800ecd2532"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "4b8c90f045f70c560f3b9907f8b89229"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "3fae33643e35a9ee43eabaf99a91bd20"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "300b0e3a3e780fc48576427362a5b32b"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "c7ed88ee1f3b3acc3307a37adabcb5c9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4ff1469f06371816e2c40015b42ff7af"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "c08fb8ef091544154014e3123d838879"
  },
  {
    "url": "timeline/index.html",
    "revision": "ecbbdeaf094f50578b6cdb73c3584235"
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
