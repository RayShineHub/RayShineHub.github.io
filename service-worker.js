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
    "revision": "99b85b51aaed70f3975b523449fe01d2"
  },
  {
    "url": "about/index.html",
    "revision": "b361b707b76cfa81fd3d8783a9ca127b"
  },
  {
    "url": "assets/css/0.styles.0b33859d.css",
    "revision": "073504f35591f398da7db619a550248e"
  },
  {
    "url": "assets/js/1.11309eee.js",
    "revision": "6039a6f74316af6210cfe72047d93110"
  },
  {
    "url": "assets/js/10.d402adbd.js",
    "revision": "c4a536063d4c5800b60ec2fb51ffa1a5"
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
    "url": "assets/js/16.65af9ccc.js",
    "revision": "ef8b88eb0d4b252c759d52bf8278ece3"
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
    "url": "assets/js/26.a0511fe8.js",
    "revision": "ef5e157ec09c18cd495707b0a0c5c3f4"
  },
  {
    "url": "assets/js/27.da155f88.js",
    "revision": "571c9077c0c4352a4fa735b198a54b0f"
  },
  {
    "url": "assets/js/28.9fecb60f.js",
    "revision": "3c72da8f8600a3d125ddc160e62cf9c6"
  },
  {
    "url": "assets/js/29.0e59ef6f.js",
    "revision": "e67b208c428fcc19089d55e94db18dde"
  },
  {
    "url": "assets/js/30.d0d9c792.js",
    "revision": "9c3c3c27d0ccd54f6dd97da1a64f7b8e"
  },
  {
    "url": "assets/js/31.dae515a4.js",
    "revision": "0dca26e69608d89ebe8a4055f448323e"
  },
  {
    "url": "assets/js/32.afb1e187.js",
    "revision": "def0a6bef05c89992b7196b161aa8963"
  },
  {
    "url": "assets/js/33.820b52e5.js",
    "revision": "d7a5c14646aa8290d7870feb5f3b1206"
  },
  {
    "url": "assets/js/34.8b95a86d.js",
    "revision": "c7dc95504cf5a80ccbf0e9f741d1e295"
  },
  {
    "url": "assets/js/35.dd52094d.js",
    "revision": "54038a6f2e0dce7ad34aa43030cb2056"
  },
  {
    "url": "assets/js/36.02287886.js",
    "revision": "d5a55c02a1800756ab0f6a98e602b411"
  },
  {
    "url": "assets/js/37.da59b8ce.js",
    "revision": "bfa1aad1d89ac8fb2978b99bcab2dff2"
  },
  {
    "url": "assets/js/38.53a3e884.js",
    "revision": "ee0a5e350982c8081f1f43d111e9637d"
  },
  {
    "url": "assets/js/4.4f99d6e9.js",
    "revision": "0a2ec59fe6fcd39431915a3704de026e"
  },
  {
    "url": "assets/js/5.39b8644a.js",
    "revision": "c8c275e684da7bd9affcb9523c0caa9e"
  },
  {
    "url": "assets/js/6.45572ded.js",
    "revision": "3e6ef9757d17f47ac854af70768fb380"
  },
  {
    "url": "assets/js/7.ff999521.js",
    "revision": "e6369fdce968890ea7aa553b886b6a23"
  },
  {
    "url": "assets/js/8.177e10c4.js",
    "revision": "677bc556ccb221dc771596071d761299"
  },
  {
    "url": "assets/js/9.d37da8d4.js",
    "revision": "719b111a013141a2ad51c238689eea99"
  },
  {
    "url": "assets/js/app.00ad5399.js",
    "revision": "c87e093eb976103944aa1648330d7b50"
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
    "revision": "04b07dbc24f03960922cc3fb329fda47"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "9cd20cde494c8f1ce3d5c1d2ae253cfb"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "e1064d74f416242beb7d9a3295094eb5"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "93e5c3f5d7d254edbd2c1426b46c0b38"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "7078d61193e000c4d36b65651ea37913"
  },
  {
    "url": "blogs/前端/CSS/简介.html",
    "revision": "c9779a053a253a4575b141f09f8835bb"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "515abcb0f20fadaf708a77c99db589f2"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "ac5809a747212746f994bb84d01c1a58"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "726951d4d01d9446e91131395e214a29"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "f0911185421dac24fab635e66f5df38e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "2d8185d912ba184a965f2461db418192"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "8642fe0a38624dba7003fff6179eb773"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "06b8e6c0ccb28c832a8e54c749793ccf"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "8990ad700f0f105b2a0a17aefdd1d2dc"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "66d19fcc507642264c57f4991407366a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "8ab0131c3919dda117a79291acc24a76"
  },
  {
    "url": "categories/index.html",
    "revision": "15a4a9ee1a36b5f9f6f6674f64933caf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "20570a4a6cf4fb40518477cc2c64205b"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "45863fac00385fa1e2fda70ba195da10"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "5f93d7382e1d3c68bc38e9e150b0bf66"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "d20f9bb03a3aec02c907a75de57cde22"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "28b08660fe65d56a3f2ff9ad492ab902"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "2f47d8544e978ea0ca42f338ee32b5e5"
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
    "revision": "f4d8587774466c5d72d4548fa2c8854b"
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
    "revision": "ded9be576844f78ecdc2d816baa3199c"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "f84bd3f8980607949e32663c2043efa0"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "5abf59309a0c83df659658e43d5dc41e"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "2d5bdee1fa5dacb53a625c5813aa4ea1"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "ce2d431393effd1a11e36463e5215fdb"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "5976fb3930b9e01935fa987a1305463b"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "b7d2ef9bd7f591455881bdc9406f7f2f"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "cbc0f4d0899cfc16c0c75c9ef53977a9"
  },
  {
    "url": "tag/index.html",
    "revision": "8852c7b9991c5f203f9c70f08cc03a36"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f3fdf25397fc1048047dfbf95dc41429"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "91343075a0dcec5689c646b6d1709e59"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "9c3424517f710d52c3b8aea510739af9"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "19adbc6852c0bc42291e92e4e54d5745"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "edb30a6d8747de7024e4317a3a294a2a"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "5ab589a604075b70b521c0d5d2798919"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "96277c14b7029afd7944cd60b88c952e"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "f1d47d9902208ef1e88d3564c0750c74"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a87384d92ea9a87e31ef724d5462925"
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
