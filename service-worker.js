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
    "revision": "226b407172759c012d70694942004521"
  },
  {
    "url": "about/index.html",
    "revision": "7ce2fa391cd6fc2369f90431bb250f23"
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
    "url": "assets/js/21.ad6a8e50.js",
    "revision": "ae47ce3c7dc617eac805a2c70948bd87"
  },
  {
    "url": "assets/js/22.b692aacf.js",
    "revision": "92f6979e24e3ae3b167ed7fc7f787b9e"
  },
  {
    "url": "assets/js/23.37b9d861.js",
    "revision": "9e84808c0443946e494f2ba5229313d9"
  },
  {
    "url": "assets/js/24.b6b8c5e0.js",
    "revision": "e469c4a7d78916864b3634f6331c1ccb"
  },
  {
    "url": "assets/js/25.759da782.js",
    "revision": "1a9d4720884466470eaf6b4cc69b2a77"
  },
  {
    "url": "assets/js/26.df1ba916.js",
    "revision": "5740bf1a48aeb070f3ffc8faa26c0dcf"
  },
  {
    "url": "assets/js/27.aa621824.js",
    "revision": "d81a6124feaf91f9c01bb992d0820ae5"
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
    "url": "assets/js/app.fcaecd4e.js",
    "revision": "64889e69bc3b04698f945641f2ce40dd"
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
    "revision": "353a9a8c6504903933ab74ba80f9ab09"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "a5f6c26f0e3574c26160a706710b42ab"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "bdd42167d66d378cfa280d2b567593b3"
  },
  {
    "url": "blogs/前端/2022/01/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "dfb71894b77887f9979ffd17c802b72a"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "28a086f18dcd7125fe46555456351c7f"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "fc55827e070ada70b11288a33ed8de82"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "c63fff970763dca196adf60e3c526a6a"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "768e2e516b6c6a9f0579622cc05dff17"
  },
  {
    "url": "categories/index.html",
    "revision": "57089d1b1c671717ef4b101fcd02e834"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "731fb265ea22d868e7afec9ccf893843"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "3823c85b9f941dbe43b2167916740976"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "dabac731ed1a29b0b4186966d608cb3e"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "ea4ec47555f442ffce4adb836bba2031"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "d4bc09c8a8832ea57451ec4ab03aaeaf"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6b6a5fdb84dc9d3095ffdd1b5c621056"
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
    "revision": "f3cc25014bfe117c493ce3e1ed4d98c5"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "8fb826130d4b20bd03b03c3a2ed2e003"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "efd60fff3e13cb9d31eca243cdb3980e"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "75b58612254be192f8c069d164518f83"
  },
  {
    "url": "tag/index.html",
    "revision": "4612e39c8480c14affca9dd525576db9"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "c2a91f5c6ce30495b4500d0acca43f4c"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "4d6a5fa4c9a0a66944824b1834c3d463"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "1780bb81870695a802ce40aaec0ac4ea"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0c767352f3f513f6d402be9b0067bfe7"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a80673e28a6dc4e73569e2c23ba7dc48"
  },
  {
    "url": "timeline/index.html",
    "revision": "d5392284423948ecb483eff80a14d606"
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
