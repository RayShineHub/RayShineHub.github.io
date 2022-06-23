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
    "revision": "7fea727b80c5d6da8d63321daa6375eb"
  },
  {
    "url": "about/index.html",
    "revision": "5ae456f074a9fdda6cd404394a0aa467"
  },
  {
    "url": "assets/css/0.styles.d1f8cc1e.css",
    "revision": "4851dfa079f62f01c677ab406727dd1a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.9fb98dc2.js",
    "revision": "9383a0927f289b5f28458c16689ea0a8"
  },
  {
    "url": "assets/js/10.31af920b.js",
    "revision": "dd1a8bc8e2bd3c89723b6a925da4a0de"
  },
  {
    "url": "assets/js/11.96f6e068.js",
    "revision": "203d8bfb02b3a7079f3adadfa6660b07"
  },
  {
    "url": "assets/js/12.6a890018.js",
    "revision": "f49799bcbfc6b9bbedf44f0157dab601"
  },
  {
    "url": "assets/js/13.46a1fd37.js",
    "revision": "8427e708fff181a29ad6ffb29040acc1"
  },
  {
    "url": "assets/js/14.60db30ec.js",
    "revision": "d9fee586a7ebbb0a855ee58e06ad9f98"
  },
  {
    "url": "assets/js/15.d68cfff6.js",
    "revision": "e9f48ee0d109b1717540f8c06017a1e6"
  },
  {
    "url": "assets/js/16.adf193e1.js",
    "revision": "279f9867cbb21e08fcdb7146f0a0cb33"
  },
  {
    "url": "assets/js/17.ab1b83e9.js",
    "revision": "bd97fe12e63354a6b7226e9e7d5f6029"
  },
  {
    "url": "assets/js/18.4c322080.js",
    "revision": "b7bbfe6f9a76991b219d647be5d707d2"
  },
  {
    "url": "assets/js/19.d47f783b.js",
    "revision": "836b79b12b9478d8b32c3918f2ef8e44"
  },
  {
    "url": "assets/js/2.538db8bd.js",
    "revision": "c3d9b7c181b56b7f6770b43a0df6494c"
  },
  {
    "url": "assets/js/20.5553e0bf.js",
    "revision": "eaceb31d22797f07f7153aee6097d05c"
  },
  {
    "url": "assets/js/21.598cbb60.js",
    "revision": "364963008e2cf7e8c2741347125842ab"
  },
  {
    "url": "assets/js/22.3170e1c8.js",
    "revision": "9b0ec6236aeeecb77d5c13e3a8ad0ead"
  },
  {
    "url": "assets/js/23.ca3dfa62.js",
    "revision": "80651c0a6315fd37abc15d091538391f"
  },
  {
    "url": "assets/js/24.d3eb77d7.js",
    "revision": "87a58765a1233c874987e3667e1ea373"
  },
  {
    "url": "assets/js/25.118c0365.js",
    "revision": "5c21e8f244d78f92dd360ea50cbafef7"
  },
  {
    "url": "assets/js/26.aa746fec.js",
    "revision": "1fa596c9665ac5279685ec02b6a345f8"
  },
  {
    "url": "assets/js/27.08d3cc89.js",
    "revision": "0a8f641d4e3e21a07625fbfb6c168ee1"
  },
  {
    "url": "assets/js/28.e8c35599.js",
    "revision": "029e5b8b8ea38676fc8c3d2b3910ea10"
  },
  {
    "url": "assets/js/29.e97a8e70.js",
    "revision": "3c28479d369014a9a9e0d7568e198508"
  },
  {
    "url": "assets/js/3.56635259.js",
    "revision": "30cd3c19489b2afa0504a796cc362a09"
  },
  {
    "url": "assets/js/30.c7165e26.js",
    "revision": "8ff4e7c6f0fdb42ded3895862d9544ea"
  },
  {
    "url": "assets/js/31.c2300794.js",
    "revision": "f97bc7fa0057e447b0bae9fad0ec48f9"
  },
  {
    "url": "assets/js/5.0c2e92b1.js",
    "revision": "c1257d31b604e531b3dc044044980dae"
  },
  {
    "url": "assets/js/6.d029f55b.js",
    "revision": "779b6627ee529b2b3e09d5441350b43b"
  },
  {
    "url": "assets/js/7.697f2eb7.js",
    "revision": "0750524d34d17c3bf07862c625b51e02"
  },
  {
    "url": "assets/js/8.19b44c45.js",
    "revision": "d02fd5d624ccd1ebda431e643fc36165"
  },
  {
    "url": "assets/js/9.61d93c3a.js",
    "revision": "bf6e8b8d7e69c7b67b4fafe665f1b240"
  },
  {
    "url": "assets/js/app.ca8a0a90.js",
    "revision": "a610273d89a59fa94ef9852942e9fd6a"
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
    "revision": "9325abb16813e7ccf6e64581ab4ecf61"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "2c0a40e52109c56305994dd0e01755e0"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "92286f0caddc42d94a1c82d2ea522766"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "1fe494c9066c47179f3a33e919f9b4b5"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "c982f1662d41930c1bb121672af4f1b2"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "624ccc28aea11522bf9ab4a574fb83c7"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "bde7686040c94ae66b5d9d87a7a00bff"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "1c6d1ae876ab9071b2f846d20e7ef77c"
  },
  {
    "url": "blogs/每日一题/前端/2022年2月8日.html",
    "revision": "fcb7a85e5778d29a87b54755aac8e456"
  },
  {
    "url": "blogs/每日一题/前端/2022年2月9日.html",
    "revision": "4ab3f1008bf8e763bb72374d231e0ef6"
  },
  {
    "url": "categories/index.html",
    "revision": "0e9101a5311ee6d1fbb6dd49e3344e8d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bdf536474e855f0e4b5283c9552d9baf"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8052f25a2342371e1fc8a78ff9ca5a80"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "92b199db7e55c2519b4094ae3d044be0"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "8d2418d81a2aeef9c1a788ef93ff83d4"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "26726340f8248cf22afdc97017e71a9f"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "d63e74a2bfe99fb5d6e2085dbf710940"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e0dcb204bffc54c035369be4227c52d7"
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
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "bd71c3f86e00f011af379f2787103dc0"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "268e12e5b37343421527058bc6efa2c3"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "25a03d081ec00da946e3661ee637fe19"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "33a18c712a2f8f7571c01e2843316985"
  },
  {
    "url": "tag/index.html",
    "revision": "f476cdabcbd86ced0b798c35dc578583"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "e8bc84923d1220b3fc1135083d19dee6"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "d510968e67969c8e98b92ef4dc4cec16"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "04287988e801a39d49f2b01dc75899c4"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "15ddf1e0e743f051fd2ecf2eab0dde7c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "e7e5d06a11aa4275b8e67bc814d6c2c8"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "6217612eabf71c50fe4ff404b7a2ec33"
  },
  {
    "url": "timeline/index.html",
    "revision": "60585d164c62a839660a8253ac4ea137"
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
