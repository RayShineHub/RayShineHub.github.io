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
    "revision": "2b8b856f4127a2aa1ae4005c5cc9add0"
  },
  {
    "url": "about/index.html",
    "revision": "55dbebc115accc3b172ef77c30e8fb2a"
  },
  {
    "url": "assets/css/0.styles.b7e611cf.css",
    "revision": "bc2a5df1fa80a4c84843fc787fc0a48c"
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
    "url": "assets/js/28.6db6eeea.js",
    "revision": "2c880b24749d227c7dce740094301d53"
  },
  {
    "url": "assets/js/29.6f4ff2ad.js",
    "revision": "ebd8de26a62946a46eb60282f915026a"
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
    "url": "assets/js/5.155848f5.js",
    "revision": "1e2c66a1bba5174402d3ad5a230eff5c"
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
    "url": "assets/js/app.92ef0382.js",
    "revision": "e6325f3ff3ac36997885372c9eb73b47"
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
    "revision": "6aea03865169ad86e59ac9d8698f38a4"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "d2cf3ea05457e513a14a0d6b47e20769"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "036299312af66d8bdf432c0bd8fdd9de"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "a8af74f9d67099e85fa83a343555d07d"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "dcf79ac0634dc27b386d037f79fa516d"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "11f044d7f407883e2a5346ecb672d80b"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "904a7bb2e318d092bf02447a2e3f99f3"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "310c4c43480a256a5f54c0a0a781b993"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "1386add2819f328e4f75a5be7b70f402"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "aca36ef51346e4d3e929f9f63134f67f"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "a68e4167c1a727cb46f3dbde0e9b68ff"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "e1add6e1a6da9a4c329a23009e031f86"
  },
  {
    "url": "categories/index.html",
    "revision": "5edb5624525161219944548486b4e146"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7fee69d1a061e6543f31715437697b85"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "7a44da4b05529a78d2cadad510b80cc4"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "b11a4fa94c75c12cf781e1cb697a026f"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "1c11d7d9d30e3bd69ca53d599a4330fe"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "addb42ade1f0c0f2e96b77e6a9a90c4a"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "7f8906891b9f9ae149fd6fe2d2204e35"
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
    "revision": "ce1e8a2b215be2ad28c7193ecb2a6a9e"
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
    "revision": "e0b76c40786a3959eb13260252306c4c"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "e452fedbb37c8db8b4ecc23c07ba8ce1"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "f4ae8f5968bde947b458cc3cc6ddee94"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "123f35faf6e6a89a0342eace4303c254"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "0148bdb749877c527e53c4b72e901ab9"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "4bd78d969e4b725d3596bc396871a7f1"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "8519b3d6e6f66c24902d44162e6c3ef7"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "9f165c78f9cad09060a82e087a681214"
  },
  {
    "url": "tag/index.html",
    "revision": "a222f5a4b13b2af2ede35e3686701f6d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "04e3c69c17f972c806c5dc42a4752b13"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "cfe45a2f180374c61b27245626d9dd2e"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "18487e6c9331e6f93e02f5f9f9439f7c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "c69761472b49bd4b8a39ae65a6a0aad3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9fc5ae32ecd35a7cf8a5098e152f2896"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "3acc2e35fe65ba4145ede90d693d8003"
  },
  {
    "url": "timeline/index.html",
    "revision": "041e18e908aa92d1f74c47255488924a"
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
