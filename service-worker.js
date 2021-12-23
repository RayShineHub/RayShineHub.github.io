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
    "revision": "5dce9f8c9b409f098c76037b47ff9aca"
  },
  {
    "url": "about/index.html",
    "revision": "5797a4c4564c3b53a4c4d852409e10a3"
  },
  {
    "url": "assets/css/0.styles.5d034003.css",
    "revision": "d143038ee100618831dca13285b04e66"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.697e3bee.js",
    "revision": "20b0f32a13274106807c7999c66cfbe5"
  },
  {
    "url": "assets/js/10.2c99a5e7.js",
    "revision": "2d4a28ac6a008b6d87df0b93be65d0d6"
  },
  {
    "url": "assets/js/11.8404c347.js",
    "revision": "66dba6ebe8c3cb69f144a0c341aa6887"
  },
  {
    "url": "assets/js/12.822ab2e4.js",
    "revision": "f186e83bd50c6a2a26379ad601fc00b7"
  },
  {
    "url": "assets/js/13.de3110ba.js",
    "revision": "fdb59413d17ab1eb15a035953d476d9f"
  },
  {
    "url": "assets/js/14.6caaf6c9.js",
    "revision": "b6ffdbaf890122b2be0fc875f1cc6f9a"
  },
  {
    "url": "assets/js/15.9aa3b704.js",
    "revision": "fff26792007f537fee4f0af8a5ff23a0"
  },
  {
    "url": "assets/js/16.c55c9668.js",
    "revision": "9b5fb5b199342526eec8a4754059efa2"
  },
  {
    "url": "assets/js/17.d509f65e.js",
    "revision": "df010d01db385aafeb02cb20e734e2e4"
  },
  {
    "url": "assets/js/18.66d923ee.js",
    "revision": "bce86d3165d999f622e6a289c95500d6"
  },
  {
    "url": "assets/js/19.9afee852.js",
    "revision": "34c29c7e1b18ac71edb523d64f7a7900"
  },
  {
    "url": "assets/js/2.6356dc11.js",
    "revision": "a1c2a9a8e812a5010dea2d1292214edf"
  },
  {
    "url": "assets/js/20.719f53f7.js",
    "revision": "ef88b773a1301d94d27cff7f4f3429b7"
  },
  {
    "url": "assets/js/21.576c25c2.js",
    "revision": "874bad633557ac154218e1138693d963"
  },
  {
    "url": "assets/js/22.3ca6d205.js",
    "revision": "5a6847e2349c1504956811616c6ebc43"
  },
  {
    "url": "assets/js/23.a9b8a173.js",
    "revision": "610fb085ea2e381a5c05e5a8313ddfb4"
  },
  {
    "url": "assets/js/24.a13c3f88.js",
    "revision": "f32f5fd36da5a0e9a81c78b962b77251"
  },
  {
    "url": "assets/js/25.467917f5.js",
    "revision": "e24b21873bd15ce32d6b0845a08e4117"
  },
  {
    "url": "assets/js/26.47d8e2ac.js",
    "revision": "b164d43b1b15f9a27dee7493e95970b4"
  },
  {
    "url": "assets/js/27.6c327465.js",
    "revision": "aa6738e7cd1fff6f662dc0261ff75a9e"
  },
  {
    "url": "assets/js/28.5a1fc913.js",
    "revision": "21bfc34336dfd3f555693ebff9dae69e"
  },
  {
    "url": "assets/js/29.19bbac59.js",
    "revision": "c1bffc116a72dd4ac65c4c6dae66e8ed"
  },
  {
    "url": "assets/js/3.0b23843e.js",
    "revision": "11343cc7d50c1695d5684839ffd4ab48"
  },
  {
    "url": "assets/js/5.58975608.js",
    "revision": "ae43420bdffc4b846ad9d1e7cb10accb"
  },
  {
    "url": "assets/js/6.e787629a.js",
    "revision": "7cf19ccba67c3f8b1669d4b10a7e270a"
  },
  {
    "url": "assets/js/7.0c8512d0.js",
    "revision": "2de57d6163fab5b8b47b03bd4c6fb911"
  },
  {
    "url": "assets/js/8.d5a1a8de.js",
    "revision": "b7b38ad5ec5b4fdfbeb5fa0f7d48641c"
  },
  {
    "url": "assets/js/9.dee86914.js",
    "revision": "81a93560c2d396ef1f4b1d4829c52055"
  },
  {
    "url": "assets/js/app.91ddfb33.js",
    "revision": "89ae86495bc170fca02be4676ed7d481"
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
    "revision": "1ec17f6004d3e3eb7477c18854bf0b7c"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "e80a66c2580f3259608b2bc0e429b1f6"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "6ae1fd8bd2b02a6bd56abec6aea4a944"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "5db2aa69e0e30a341ad8076c39cd4ab2"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "9046d5aafd83cb6d607d3dd38ef77da1"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "70e896be2fdac833c810367cbc352a89"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "99e3b1d2091fb3e0238005e84d0f0775"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "5cd19a214cc7dae0b6799e93737bdbf7"
  },
  {
    "url": "categories/index.html",
    "revision": "9ae35048b22e4ed368823cc78a222f31"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5e9a2bf6ae59799ae2cd3e9339d4e0ad"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "6f43cfccb256380938bab4d86ecb018d"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "028c22a27a6c2041f7925eb16b546514"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "0efd367e3ccd1604bcbbce9f928cfaf4"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "9f935d281c48c5d57cd15b4c1a50de04"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "7f72ccb220cd8aba259b03603bc02c4b"
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
    "revision": "31361a38d16e5e925f669e39cf3b26c7"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "623c3a210f995ac5b2c9ef37b2138182"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "41179d2a53153cb5b14b8b7954d2fe58"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "84cd6e2ed979ad03a749a373cefdb4e9"
  },
  {
    "url": "tag/index.html",
    "revision": "050e5a4750dae04611b55a063e47298a"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "0e6882e72896858fab61641d981d1ff7"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "558e0b3c5196884b4e527d003b4a0d26"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "d3611f626f97c3bdfa90a698047c0677"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "39a308f02cee3e5697e6c08df20e035e"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "7026d1964b0671ac8ac5fb93fa3809d7"
  },
  {
    "url": "timeline/index.html",
    "revision": "889b02814d331510cbe70ea97693f004"
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
