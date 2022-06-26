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
    "revision": "cc05c954195101947d4c5d9fb6e0e561"
  },
  {
    "url": "about/index.html",
    "revision": "57511eb75625dce7e45d3dd122488153"
  },
  {
    "url": "assets/css/0.styles.f4171d4c.css",
    "revision": "275dd592316bcb2efee18f891b2fc23b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.98f33a91.js",
    "revision": "2455203965a810f7fbb63e9649d02359"
  },
  {
    "url": "assets/js/10.363ace9e.js",
    "revision": "37221922088c38b9f1046de06731b530"
  },
  {
    "url": "assets/js/11.b97ee90b.js",
    "revision": "5a6ec6c68f69293f20e2126e645f9ecb"
  },
  {
    "url": "assets/js/12.2ffddf05.js",
    "revision": "7760acc4565b7cd179b66fc47ace5e74"
  },
  {
    "url": "assets/js/13.e956661c.js",
    "revision": "fea8f0bc630881a35e0b74dd07efe263"
  },
  {
    "url": "assets/js/14.54fcd106.js",
    "revision": "5f363093198bfd9bbd27689ed78527b3"
  },
  {
    "url": "assets/js/15.8f4646f5.js",
    "revision": "d23f55aed0db8e4e15fb9f9bd85cff3a"
  },
  {
    "url": "assets/js/16.bec0f072.js",
    "revision": "4e0287b0967517d006b98c3722e2cfbd"
  },
  {
    "url": "assets/js/17.d13ee3ae.js",
    "revision": "c6f34b6f0461c21a0c9613abb8863a07"
  },
  {
    "url": "assets/js/18.d11f6e1f.js",
    "revision": "0552f2a38795b25228d98308edf2a193"
  },
  {
    "url": "assets/js/19.efd57812.js",
    "revision": "65f1170e4114963b842fad6fc7fc8f1e"
  },
  {
    "url": "assets/js/2.6259a194.js",
    "revision": "4088341f9c61bb0626f1f3844aad6bb6"
  },
  {
    "url": "assets/js/20.2e8bbe10.js",
    "revision": "4d30b81a21413e7ce752b715757b5c49"
  },
  {
    "url": "assets/js/21.db6e8d37.js",
    "revision": "f41ee38b1a617f73cbb2f8e8260d993c"
  },
  {
    "url": "assets/js/22.2ecfd2f9.js",
    "revision": "41285acc1326901943b6f6c7bdc6b242"
  },
  {
    "url": "assets/js/23.e9a7ef3b.js",
    "revision": "8415e940a13b9989bb2b75a66f53fe6c"
  },
  {
    "url": "assets/js/24.8867e429.js",
    "revision": "d34290292a81d908a31c0c7fc22ebbce"
  },
  {
    "url": "assets/js/25.6f8ec8c6.js",
    "revision": "a377be04de58fac8559a71eba5466cc1"
  },
  {
    "url": "assets/js/26.e3445624.js",
    "revision": "287dc705d3984701b90a0c0fe6241e3e"
  },
  {
    "url": "assets/js/27.0bdfba43.js",
    "revision": "803fcd7fee89f6cf3f6f4b8c1bfda3dc"
  },
  {
    "url": "assets/js/28.6169912c.js",
    "revision": "b5675f9709ea47a673cd7db6c35cf496"
  },
  {
    "url": "assets/js/29.2f4e316f.js",
    "revision": "8a8bf211a02cb9886e77d6710e22d5c4"
  },
  {
    "url": "assets/js/3.2d7c019a.js",
    "revision": "834bc094830cdae17380708dfe94f330"
  },
  {
    "url": "assets/js/30.b64805ed.js",
    "revision": "ea89439ce69dafa26a9e79c2c0542ab9"
  },
  {
    "url": "assets/js/31.38680ee1.js",
    "revision": "28d0e191ac12cdc8539c36527a5ec4f4"
  },
  {
    "url": "assets/js/32.1169a654.js",
    "revision": "bc69de2ee9145cb785a532f622a20932"
  },
  {
    "url": "assets/js/5.36bbb719.js",
    "revision": "6f7abec5f7d08bf05f830a9e6810154b"
  },
  {
    "url": "assets/js/6.519cb619.js",
    "revision": "daeeec15be0d4ad3401fc98ce9f14b61"
  },
  {
    "url": "assets/js/7.ad046bb3.js",
    "revision": "46856cc1ae711f60207260841cc68851"
  },
  {
    "url": "assets/js/8.e20762a7.js",
    "revision": "4fa2d226a9026e541430118b003353f0"
  },
  {
    "url": "assets/js/9.dbdec916.js",
    "revision": "a22ea99c5539aec9cfc191b3670e4632"
  },
  {
    "url": "assets/js/app.0a10ccbe.js",
    "revision": "1b37dd1d651cd99b42dc6f1f3ae3e28d"
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
    "revision": "b00f927c1fefe5dcd543ce161d5ab86a"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "48feabce84c1870cec01a172c2a7f8b5"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "04d6e3322f0e8f24fbbf892f4faba3fd"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "9b08849e9f2d37629149455935ddbfa3"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "10a2c78df695b3e9e9e051c6689ea0ab"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "14b92ed110049fbacebc2833992134cd"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "3b3c5f6a049d4105a7ffdc1c0e9d8bb6"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "d167341b31c598c14c93bd6eec04a409"
  },
  {
    "url": "blogs/每日一题/前端/2022年2月8日.html",
    "revision": "a6aeb37796b7de499902e012f87cdc8a"
  },
  {
    "url": "blogs/每日一题/前端/2022年2月9日.html",
    "revision": "e68e47baf3c6c81627851eba6224ad8d"
  },
  {
    "url": "categories/index.html",
    "revision": "62907a7195ea8ae73e7d911c23cfbeb1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1acf7abfa4bda1cb0c3c9c57b7612634"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "5a4b7bf3dff5383f2292bb281d2c0528"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "32f91db34d08e293da398ce0a1e21751"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "65f392f8ca605a5f9df01834ae410349"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "ef8dfc1367b0882ee3ca50ad7907b4f3"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "e0bd9cc8231b9713151fbd01852ffb23"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "13ff42740c0515416609020efd132016"
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
    "revision": "a16b48eee5f156f37ca5bdc1e95378aa"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a784afc05e016cfe7a28d34c1f03c236"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "c53b4586b3617fd66420e91a87bdadfe"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "9f7c142f8150982c744522b62311d317"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "1c3070731c87003bb770db12c5cbc75f"
  },
  {
    "url": "tag/index.html",
    "revision": "b247e5e8ff0727ecb365406368472ce7"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "d38206b63f6e36333a1e66e03af7762b"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "4d5cfc8e30a200670806a3a22d284488"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "6dc20eb646a53bee68b42ce69d0b82a3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2d0cd0ae30beec3bf3297d87272e9414"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "bd0b9cc727397b39987596cde485ebaf"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "b5f1b36a08a52d30f5e8828d8ba8bc8e"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e177f83308d422d576a3283885d12a9"
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
