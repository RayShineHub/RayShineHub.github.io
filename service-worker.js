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
    "revision": "030717ef4756380d1e4664bbf28f350b"
  },
  {
    "url": "about/index.html",
    "revision": "1861f2ab4da35843388e5d8106243144"
  },
  {
    "url": "assets/css/0.styles.3bae01e6.css",
    "revision": "0e0b23b627fb2499c76ce3faf75b54a7"
  },
  {
    "url": "assets/js/1.601c3f78.js",
    "revision": "7ad3692846873a84f8238ff705e9f5f2"
  },
  {
    "url": "assets/js/10.477e27f6.js",
    "revision": "b710820c088d705fe65ed4aafb477312"
  },
  {
    "url": "assets/js/11.3d119ee6.js",
    "revision": "ba2aaf16dfebac1d9f07206357cdef35"
  },
  {
    "url": "assets/js/12.99bb1fb8.js",
    "revision": "6b81e71c244d64b16257f5c39fd05f3f"
  },
  {
    "url": "assets/js/13.019da50d.js",
    "revision": "b71907df7e82542878b008cf3f7a4360"
  },
  {
    "url": "assets/js/14.60ab72a5.js",
    "revision": "f88d6c9aa8bf1fa94aad6c2e996e5e01"
  },
  {
    "url": "assets/js/15.4201fa7a.js",
    "revision": "890e699e323c8bce5266c0723f98984e"
  },
  {
    "url": "assets/js/16.9cbde866.js",
    "revision": "23ac02faf89437da1e0c5b41f4744f0c"
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
    "url": "assets/js/2.bed94bd8.js",
    "revision": "7cd04fcb2005f068e6f3079f30ae2ca5"
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
    "url": "assets/js/3.042ed882.js",
    "revision": "f996adc8eb11d396de20d1cecc5a95e7"
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
    "url": "assets/js/5.ea3e2f29.js",
    "revision": "f887f6aa286564fbeb588d781a7a607f"
  },
  {
    "url": "assets/js/6.de28d98d.js",
    "revision": "ac62891221948b82918edeb4cf35d27f"
  },
  {
    "url": "assets/js/7.90f4cff3.js",
    "revision": "67c7b35a4ec66008c244fddad87a68ce"
  },
  {
    "url": "assets/js/8.8e9743c3.js",
    "revision": "1bc5304a80370c47c09c41a7e91f3826"
  },
  {
    "url": "assets/js/9.55422031.js",
    "revision": "9ff071c7d48ff34a58ceb9d6ec4d4203"
  },
  {
    "url": "assets/js/app.301863dd.js",
    "revision": "b64d809a05666dd99b2449aa2edd13c2"
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
    "revision": "e5943cd22b36d4089633701df4eaf398"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "a4c77aacf5f1efc3782d393db9d33499"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "013ab5eea0fc22301f5db6a0cf60bbd6"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "06245d1731c6ff0fcf9a9d5cc8e6419d"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "a7af26c0e43caa684b4a73b6219e4e5f"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "5a7446e7e02f85a91895e6d88297bc8b"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "6cd5f1319e3c54e5e89ec2565fa7d412"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "34cf0e5b8c4f24e59cf78d92f3ccb5a3"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "49cf994002fbefe9d8ad66e820c4dd08"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "33d35ee153c35f46f45fa87c9beccd5b"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "3302d7db6adf7100390cc2f6efedd5a3"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "606044b47c15a59fe71370655728fcca"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "dfcf008bd8ecf985c0a96267b74fd2ef"
  },
  {
    "url": "categories/index.html",
    "revision": "42a90fa74415b8105bac43d9ff7cd409"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7033274ab5063eb722b27f685a11c10c"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "9e1a364a95e188c0ee47ebb5a3d59f6c"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "5d2462fd4d5b13ab3249312982993a24"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "bbc1bd7faa56179b8241f105530a2cd4"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "a3ddaa6ed80a57c73a0ff56da00a7ad9"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "b60d00d69c333726449cc9fa444fca56"
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
    "revision": "bcacc39b9047f040e629562bb18a3ca7"
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
    "revision": "3bd6bb382e318e993684012054f8d3eb"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "49962a5fbbd5504959522489d3cdaaa5"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "ff354589ae6438cf9ebcbd21363dae98"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "bcdf710745b071e5bf5d49bab44b3a18"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "624fe606317d5cffba15f125ecab57bd"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "f11a3e20980249058f982990fb32cb52"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "1e90c64789863721cb947f2fb745c680"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "c22ee7fc6c528b8305ae12cc25228960"
  },
  {
    "url": "tag/index.html",
    "revision": "c00fbb8e47621e1230846af0910c9a44"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6339b4b06f2ae5729248b04909c56617"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "d17faef4870ce18dd659619c94640a33"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "0e8ffb7ce81da326b5bfb8f886243001"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "510bb6c16a8824a51b1297ff3221296d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5d2dea28a30ff30d5775498e274c7a0d"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "d8f1d9f0b0a699ea8a5481f75c39ed63"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "1cf942ddfa6217d97ad6c6c783668ac6"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "e9ca0675774af94c249197a671d66cae"
  },
  {
    "url": "timeline/index.html",
    "revision": "313cb343ea66aac99255042803848b6d"
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
