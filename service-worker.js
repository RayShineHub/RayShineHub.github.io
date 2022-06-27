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
    "revision": "93d3605ef4ff5b47c579dc150956c44e"
  },
  {
    "url": "about/index.html",
    "revision": "44afaaef7702eaa4f433ddf2e7a5d581"
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
    "url": "assets/js/29.9a3a498d.js",
    "revision": "8a8bf211a02cb9886e77d6710e22d5c4"
  },
  {
    "url": "assets/js/3.2d7c019a.js",
    "revision": "834bc094830cdae17380708dfe94f330"
  },
  {
    "url": "assets/js/30.0356b16c.js",
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
    "url": "assets/js/app.0055e780.js",
    "revision": "7323f6f67861ac4a5f967b4d293fd7f9"
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
    "revision": "8b0ece9ac7148cf1ba0a190958a34af0"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "093447bedecc0ae51bc090296c241d0f"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "72e1176b5c82867f7d186b0291169891"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "f6defe64a7c4a756013b1f947870cf40"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "c21f78590e0c48e291aeff7c0bc25151"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "7d2ff9de3d7b1c4a0acf73dd5468675e"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "ab76abe991b309a1905e94d9ba6a23a8"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "02d12495c665cf0454b25a4f58b3c9fd"
  },
  {
    "url": "blogs/每日一题/前端/2022年/2月/8日.html",
    "revision": "bda359e20e8340c1c4a6c58a1bd1ed4a"
  },
  {
    "url": "blogs/每日一题/前端/2022年/2月/9日.html",
    "revision": "937da41c8cc75716ebf3b73d215274f3"
  },
  {
    "url": "categories/index.html",
    "revision": "e1c3f0d5e895520af99ffb7c8d0347e3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8c88e5112dba71e85ac796a6c93d101f"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "bbdfe6b0801d2d2952faa875623addc6"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "9dcc1cb8e5863039499f479292ed8508"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "d88361d5c7c2afb76b40afbcb0bad763"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "329119ed3281115c6296675e8ba25803"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "769e7bce564a475d6e3093d1df135ef9"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "c7d9697fc6daacac93d858b2a1f30c6a"
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
    "revision": "5bd7eef17f2ff2598fa7ff0f32f7893e"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c5eb9fb7de6bf12756326c1b2f0f1beb"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "bcc04f30eb35abf43eba8a6a927751ea"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "8edbdce3c7ec07de26375c078b04eb0e"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "3b9735c13be1b5c5c059053ce9743a63"
  },
  {
    "url": "tag/index.html",
    "revision": "2c408c636c79949f00fb33aae97fa7ff"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "0712ab37caa2fa125fae0bad6b8e6f96"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "abb2b2c40cfc1c8015607cee9917afec"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "dd4e30b2becf5c33d7f698eb68a92a52"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2e94ee553a4f62beb98e737de90aa681"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "438c15fdbfb371e1c05da71467a66693"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "47b659988146e605b620bf5ed3dee68e"
  },
  {
    "url": "timeline/index.html",
    "revision": "f2cdc770db7bea2995178d86903e99ba"
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
