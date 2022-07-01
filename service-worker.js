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
    "revision": "fab0f6695f86b25c550c98d7e616a54a"
  },
  {
    "url": "about/index.html",
    "revision": "3f9d550a5fe63344bdb4588433dc8875"
  },
  {
    "url": "assets/css/0.styles.e202c20a.css",
    "revision": "e630838f60f02db1cc64a546745b1715"
  },
  {
    "url": "assets/js/1.d94c1d33.js",
    "revision": "04958aaf2f884a74abd761fd6c5432d8"
  },
  {
    "url": "assets/js/10.d148f87b.js",
    "revision": "97f5956df0bd0987712e6bf0da7aded0"
  },
  {
    "url": "assets/js/11.b3884d42.js",
    "revision": "be9999552a48664f3bbbc43f433669f1"
  },
  {
    "url": "assets/js/12.244d6c17.js",
    "revision": "588dd0d00bb1b42735ed1442b87214d1"
  },
  {
    "url": "assets/js/13.930fd067.js",
    "revision": "5110d0d98f11e02ede4e680229fbf6ba"
  },
  {
    "url": "assets/js/14.28cbb023.js",
    "revision": "ed2dcfe4e12a629df5d2f7b530ce3d83"
  },
  {
    "url": "assets/js/15.d0929a49.js",
    "revision": "63ebd12b445e5c7214b8f64365b17e30"
  },
  {
    "url": "assets/js/16.119b8226.js",
    "revision": "44bf7fcd32b93da51c4444bed10907e9"
  },
  {
    "url": "assets/js/17.b53bb75c.js",
    "revision": "da0f20e0749a2305588db275108d52ff"
  },
  {
    "url": "assets/js/18.0d3b9635.js",
    "revision": "7a971789296095721ac1500eb7a8c38a"
  },
  {
    "url": "assets/js/19.641343a1.js",
    "revision": "797e14175a65d201e2a2a8df7750634a"
  },
  {
    "url": "assets/js/2.918fcb90.js",
    "revision": "9e34cdb69af410a0eb5af65f6a4b9069"
  },
  {
    "url": "assets/js/20.ee83ba23.js",
    "revision": "9e26cc9a3454730263a164ca5fce6fa2"
  },
  {
    "url": "assets/js/21.918782c5.js",
    "revision": "093d69d50161a3260a90352b6db444a7"
  },
  {
    "url": "assets/js/22.84524375.js",
    "revision": "5120f62d202b18d7bd3f61348b415a36"
  },
  {
    "url": "assets/js/23.9e8a820e.js",
    "revision": "6e34e3d7924cda22f1335d22e4407227"
  },
  {
    "url": "assets/js/24.b8ece9db.js",
    "revision": "90be1706be0d8a225d3ff595a868b2e0"
  },
  {
    "url": "assets/js/25.77255d4f.js",
    "revision": "4cdab392205f8eefb400c9a37ec40763"
  },
  {
    "url": "assets/js/26.64e309c4.js",
    "revision": "56b66d8b7d15d86ddacdc75e2eec99bd"
  },
  {
    "url": "assets/js/27.9e4570e6.js",
    "revision": "4a57eb164926a8933deab8b4fa084de5"
  },
  {
    "url": "assets/js/28.cb842bdd.js",
    "revision": "2babde4500ef155df0fa1837a66d130d"
  },
  {
    "url": "assets/js/29.886cd673.js",
    "revision": "67d66ca1283a8f4caa0a0d588f9681c2"
  },
  {
    "url": "assets/js/30.ab37a0b7.js",
    "revision": "d8bdedd428bf6f3c822a856b65eda329"
  },
  {
    "url": "assets/js/31.2692c908.js",
    "revision": "f63b2a0d37f33bd681c2cf60622460ef"
  },
  {
    "url": "assets/js/32.6c3fd519.js",
    "revision": "fb57938e4747e7a385597a199e1ddaaf"
  },
  {
    "url": "assets/js/33.6d7b0e9a.js",
    "revision": "668ad9d1671cffc958c08c6ae344d527"
  },
  {
    "url": "assets/js/34.be93afd3.js",
    "revision": "99cb4423b7900942cccebe8311e179a2"
  },
  {
    "url": "assets/js/35.ec81b4bd.js",
    "revision": "90b94caee5d4a622d077b32b76d6ff72"
  },
  {
    "url": "assets/js/4.c42001d6.js",
    "revision": "9d1457916c02eb00ecb07f44d7ef2ab5"
  },
  {
    "url": "assets/js/5.992d7f45.js",
    "revision": "e6e7075233f8ce35f0807569a70f1938"
  },
  {
    "url": "assets/js/6.14c74928.js",
    "revision": "bc359ab41eaefed5da6efcabf58eaa32"
  },
  {
    "url": "assets/js/7.0576c0bf.js",
    "revision": "f0df38db00bd33adfc9a27d42de4071b"
  },
  {
    "url": "assets/js/8.a237d854.js",
    "revision": "a578309af3c8d60ddf430a7cf9de291c"
  },
  {
    "url": "assets/js/9.2c26fbd9.js",
    "revision": "5b4f52db622dfa23e918bd2d7ec1e88a"
  },
  {
    "url": "assets/js/app.6b5bc81a.js",
    "revision": "7f8ec1e6fd1f6f1d4f6216abab0aaa18"
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
    "revision": "2db4acb91efb1759f9316710fbb8ded2"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "5e1241de1ac9e0f0aa3c440640e93ff0"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "df1733ccc36cfd58e64097e78fbdfe69"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "993a7dc13fdb91e789a99281eeea8b1e"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "96461f3daf845981dc7552c34a841a14"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "e085e2fab8cc33a9cf5f7ed5fe876ab6"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "359f41febfc120257a3708e65ce2e2c5"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "b6761813cfdf6a92ecbadef3bdf89898"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "b19495edef5c4d6078f0ace754219eb4"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "40914a96efba8c0037ac45f7887119a2"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "7932e6439a7407817d7d62c0a7b6b436"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "8b0463136b54c8ba2d4a235d17217208"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "bfc12c840a9ae518a3fb9624406e12fb"
  },
  {
    "url": "categories/index.html",
    "revision": "6cbb58bce9bd7b8c17f3fc8d3f5ceb5a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "51d0be3ad2ef0781b5f5c1f8bdd192b2"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d9c80a98ad241dace4b10ebb88fa1523"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "03db1d912c86ce3e1412f13110b8f4b7"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "a52cb6a2624b391c26b2d7942dee0e34"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "89381c75659063c0575f00250089bce7"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "411b46ff9175c202141732ecbb1a63d9"
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
    "revision": "a870bc05e1b0389565ab0403c347ebf3"
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
    "revision": "3e79e7cd57402cabadc2d1beba8e8ce9"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "9269a614ab7310780e33da3a608707a3"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "7ebc1670560a5d06956d717629a06ff5"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "ee99bcfb0a27eace95727abec8bc6331"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "9e3de7516fe8843fd7906333f1df953b"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "9b774de25bf592866fc7df934f44a84a"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "ceaa512ed12904dd6f4ed8cf64e91d10"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "aefcbc858d9c854af6e9e89149dddd8a"
  },
  {
    "url": "tag/index.html",
    "revision": "31031e59c718efa9bd12d3cbfb02dff5"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "4109c394e261839469a25cd479662073"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "7031a90f6b9bc0d6fb143d0650a7b4d9"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "8b5f1637f4c25e6a882430ec416c2d83"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "e12b1f7f3a318a7c68a8c05b4edd01bd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ef00c77498e26d89f735c8cc34488813"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "af5308dd1f9a0a18072aa9e1873b8326"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "88d5926e43a089f107b35a7d672372bc"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "1a69bf967c82fbfc1f7bdb793ff5a78e"
  },
  {
    "url": "timeline/index.html",
    "revision": "347d29ff01183667ed612901c20d8119"
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
