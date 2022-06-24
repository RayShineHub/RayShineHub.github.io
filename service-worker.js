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
    "revision": "767945b83787754b7a1d3789626e1d95"
  },
  {
    "url": "about/index.html",
    "revision": "3796348a8f90279218eca2e23d5b8251"
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
    "url": "assets/js/29.9b1b0552.js",
    "revision": "647383bd1d80bbb2e8dc066b27988868"
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
    "url": "assets/js/app.94d22b51.js",
    "revision": "81b8dfa615b0dfb80c0ca824db41ed15"
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
    "revision": "300ef0bc566e4505f27b63cfd5fdc91a"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "7d120e2621468c771c6b887c06146807"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "d6fb54b17a9a769f62ead872e47ebc97"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "d48ce9d440ad1d34ef9eb2584305fe8a"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "289b5c1e336bf61d17cb31b07b1055ae"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "2f2cbf9550c14c3e76260a46bdd8a63c"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "e3419eb91b8d6504515e48c8578483dd"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "30487c8740989647c0facb8f0aec3e09"
  },
  {
    "url": "blogs/每日一题/前端/2022年2月8日.html",
    "revision": "6ab33a277e12d66ee692fae2a14051a7"
  },
  {
    "url": "blogs/每日一题/前端/2022年2月9日.html",
    "revision": "91368b70d659eabf19238b47e8e8c019"
  },
  {
    "url": "categories/index.html",
    "revision": "3f4900056b138be5ed59bb938b2e3559"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7cc956d7cbe60510be532d3c83f6b5bf"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "b6b8c3bb71f0ec6328308ae7c629bf78"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "236b33a3d6f1ca2e3b38cc5924be1244"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "d281b33f8f50c002830721d2878f1f75"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "0f829f830cfac0e505bd8ba0c7f07796"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "784c30e991ec1c8dc884414efd722e78"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "3125b9b2075eaa9d29789865366b653e"
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
    "revision": "a71cc3014e8c624a504c80d26467659b"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "b5fdecbeb1bf970a4b1ac715d4459065"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "fab2970b99e02c4d895b5ebc9e2abce9"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "8323f6d34c58fec8b8f760d835af81be"
  },
  {
    "url": "tag/index.html",
    "revision": "efea9971aee2219e0968b3619c8f4896"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "88b65879100cc9fcc5ef9a58157311f0"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "e60c254e4b3f6d1f249e0e7b16907363"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "c09bfbd70bf94432cc3a307cf1bb99c5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8b8d0a2e78c3f432c3573d43ddb5fc1f"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0f7ecaf43f8f1a4e50c4fdee107bf2cb"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "b498323461947e186513b3deed5bd2d5"
  },
  {
    "url": "timeline/index.html",
    "revision": "02e862392827048dfda8b2fb2e50b215"
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
