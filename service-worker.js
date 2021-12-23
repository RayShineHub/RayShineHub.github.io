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
    "revision": "48825c22baeaf79a1351f3ab536b8793"
  },
  {
    "url": "about/index.html",
    "revision": "a34004b3a6497e85c710ef2030786f09"
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
    "url": "assets/js/21.65e149fc.js",
    "revision": "2536c1639ee4e5c3ae3b5a514c183eaf"
  },
  {
    "url": "assets/js/22.fda07fba.js",
    "revision": "7645351ab382cb725b1b62ab929c5198"
  },
  {
    "url": "assets/js/23.75011176.js",
    "revision": "57ff5c7a046ffd21ce652e47241c9164"
  },
  {
    "url": "assets/js/24.4b53f56a.js",
    "revision": "02987f142012f2679af0809ae2ed24b3"
  },
  {
    "url": "assets/js/25.8fc094ce.js",
    "revision": "508d96b136928e03e57db3a6aa29e666"
  },
  {
    "url": "assets/js/26.d6d82344.js",
    "revision": "2b0f0f19e2c7e5520a630c72e013b7d5"
  },
  {
    "url": "assets/js/27.cf1d4caa.js",
    "revision": "a979ecd00ec220858e3f9354134dab28"
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
    "url": "assets/js/app.a7f56b18.js",
    "revision": "a2b411607dd2ab24e7bff0d900a248ee"
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
    "revision": "d67ab7a60830321170a4163f1db96b62"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "aa96a0d7a0382517aace5ead95a069dd"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "cb5b7ca4e92f77bdf62878ab616ba152"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "9153f08c26d6354dfbad1817b4624e37"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "bcefbcecf52045a0ab7ce514ea5b8ebd"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "8e34358ec33a59b9996788639cc4fad6"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "6d882942d8a69ace47f1d33fce2f3944"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "2b19f825ae1af21616d81d978dafb15d"
  },
  {
    "url": "categories/index.html",
    "revision": "08d4689c75e9c2b3c393644265e8baa9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7e90a83f9d04aa24f064ffe74eb029d5"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "80ec0d8bcb7d614f52a7688ec5aec53f"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "3df7359971b2cb09f0774987a9499bf0"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "5f4bbed4c2304b9a4b6905678db69c95"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "d895b5037def3b61a38bd583732af0c6"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "43392a947e540e17158c6adb964ef7dd"
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
    "revision": "d408fee2216a14d8330c920259c62d2d"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "fb0fdb038249b6e185e2646cfb0aa3c9"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "6b181baee4a69e45311e1d26f52e657d"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "1efb07dff4478bb5f08bdedb665f1351"
  },
  {
    "url": "tag/index.html",
    "revision": "8c813a3c67402767c549ede503a962ed"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "e9765ac1affeff222f5fbabb1b57d7db"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "a3bb0135c5a747d963b762ffd429d91f"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "f3c99dbc38a79ddbb6770ef4937a0896"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9b7152d86cbbadfb56a4772b5c030a41"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "44e39d80140e3e7abea08c4e8b537438"
  },
  {
    "url": "timeline/index.html",
    "revision": "0387a903f85aa3f2b7e614d025847d7f"
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
