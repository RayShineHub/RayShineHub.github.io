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
    "revision": "c9ffd1280491df538c9492e874707ef6"
  },
  {
    "url": "about/index.html",
    "revision": "79f6b7e53f5b5665eabb33ed5a88d31f"
  },
  {
    "url": "assets/css/0.styles.199e94d5.css",
    "revision": "fc1870ea9e644cace41542b147558b36"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.43307cd8.js",
    "revision": "77b09cd6a16e9472edc89e2025f50359"
  },
  {
    "url": "assets/js/10.781b7e3d.js",
    "revision": "839cf06dbae9b99e6188dda71572be64"
  },
  {
    "url": "assets/js/11.9526634e.js",
    "revision": "8529cc1f2115f41b9217ae52baa3fc2b"
  },
  {
    "url": "assets/js/12.d4755b66.js",
    "revision": "e1be25dd5924b6b67224f8d4e69cd772"
  },
  {
    "url": "assets/js/13.729f71d1.js",
    "revision": "7c8d02dd3dcd1a3b5e04ef7a03c94c6b"
  },
  {
    "url": "assets/js/14.1d80931a.js",
    "revision": "a9c545db9995b1054d9fb61cff4c5b17"
  },
  {
    "url": "assets/js/15.f03d5151.js",
    "revision": "3bd160c5b40a63f21cc8b84d254994ad"
  },
  {
    "url": "assets/js/16.2fa1e114.js",
    "revision": "726d9e738ef6fdf79feccddc1d6974b4"
  },
  {
    "url": "assets/js/17.fb76bef4.js",
    "revision": "b27a0422b50a15deacc300173ffec880"
  },
  {
    "url": "assets/js/18.9d42939f.js",
    "revision": "6e46cdc994761c6f57892de3599b5851"
  },
  {
    "url": "assets/js/19.3e45c74e.js",
    "revision": "3f034e7ff90effeef399b4e6c09472da"
  },
  {
    "url": "assets/js/2.fee2da62.js",
    "revision": "912cc3fe90cc5671ebedc22bbf9a54af"
  },
  {
    "url": "assets/js/20.33b7cb99.js",
    "revision": "4fa12cfc33b0809d647a4f4a0d43feb7"
  },
  {
    "url": "assets/js/21.215cbbe3.js",
    "revision": "5d9d49d4f7942d5f3ed7c938db4fda9b"
  },
  {
    "url": "assets/js/22.54775c92.js",
    "revision": "ae7754790857192b79ab840de9910899"
  },
  {
    "url": "assets/js/23.4143b12a.js",
    "revision": "9e420b07a8685e07f27b4bc5e302fa36"
  },
  {
    "url": "assets/js/24.c8d41b26.js",
    "revision": "a5f30d06943c1c8dccb12b8de269e5e5"
  },
  {
    "url": "assets/js/25.2f63625d.js",
    "revision": "e7827c334806526133f5ca304e7f29ba"
  },
  {
    "url": "assets/js/26.2d6dd489.js",
    "revision": "191fcc1fee0a419b5c2fe0fcec27be2c"
  },
  {
    "url": "assets/js/27.da0b0369.js",
    "revision": "1444c61b489338bc50d158852928aa70"
  },
  {
    "url": "assets/js/28.1d8c787a.js",
    "revision": "ae91609b6247b76fca2dcce8f43191c9"
  },
  {
    "url": "assets/js/29.d84b8bd5.js",
    "revision": "19a2f53f8f557c160749461fcae6fd57"
  },
  {
    "url": "assets/js/3.80103227.js",
    "revision": "73f28e3647e40fcfe380468ffc647380"
  },
  {
    "url": "assets/js/30.6d4d8373.js",
    "revision": "94fbe26837e93bfd2fc65c04be190dda"
  },
  {
    "url": "assets/js/31.536bfc41.js",
    "revision": "6ec60fc5a808a2f6fd95500fa459dbaf"
  },
  {
    "url": "assets/js/5.940c35ca.js",
    "revision": "bddb2e2a716949c50778f25214b468ed"
  },
  {
    "url": "assets/js/6.2c3937c3.js",
    "revision": "6212fe5fa9e77f72a7dc22e79fbfeaf1"
  },
  {
    "url": "assets/js/7.08760e74.js",
    "revision": "5ae8629c254ec3cf9dd45b253d83949a"
  },
  {
    "url": "assets/js/8.dd950f25.js",
    "revision": "9a631ee66377aa32557430d1c90c9783"
  },
  {
    "url": "assets/js/9.d89197aa.js",
    "revision": "a4b31b611b15b0a3c8bb002e2a24faa1"
  },
  {
    "url": "assets/js/app.82778c5c.js",
    "revision": "bb656af928a6bab2c5ba8bd513148550"
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
    "revision": "f4e94ce5bdf3764033f408cf1b75710c"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "7ead5b6cd2bc0763e0d279e33b0adbaf"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "a4cc88b25ef8d9c3a044f16589a6697c"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "ae96864ab3230cd38a332923c3e6e396"
  },
  {
    "url": "blogs/前端/每日一题/2022年2月8日.html",
    "revision": "d579bb0b5e44dd7e6ec40a235747407b"
  },
  {
    "url": "blogs/前端/每日一题/2022年2月9日.html",
    "revision": "dd45418ff2de4331274199ffbce2d6a3"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "5223363325b87683f2703fe8ae5d583d"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "0aa70e8e408e8c6ed9558ec24e009b2d"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "7fca5f74c89a38235f39ee1c476647d9"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "7ada0d1367f409f2782ada630e976a1f"
  },
  {
    "url": "categories/index.html",
    "revision": "069f46b506474dfed3764961061f85ef"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d723089333d0f559b0fabab99991099e"
  },
  {
    "url": "categories/前端每日一题/index.html",
    "revision": "c282dcfc234a2149f2a9839e7b67fcf2"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "42bbc2b72bff10f1610270eac5da5ef2"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "a122e4ca546b970a19b3373284706a5b"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "24f2bc00f5727c13806173efe122ac4c"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "e919698a9b7d4c464ffd3364d4416ffa"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "8f358f1c5afad2d55ab2b7ce594ac222"
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
    "revision": "6eb506652be09c9e01ab7a9a70461c1a"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "069bda52d5dd70db0338e20d898685ee"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "d0e8e493571d7d5393eaee84a1eebd3c"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "08e17088f3e7151b9a4069174ee06c77"
  },
  {
    "url": "tag/index.html",
    "revision": "15410196e99de66ac858d7c88a5282e1"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "a6c07ab510f2bdcf9559153cc735f100"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "5e934030bcf198137db0c6720f05a379"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "42243a4eba742ea485d4742168bacbcb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cc141888eb3b9027b0ff437cbb6a6339"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "f6287b0de3b48b964d7ca48777cd41d9"
  },
  {
    "url": "tag/每日一题/index.html",
    "revision": "d57ff918e4d9094d389536a874262429"
  },
  {
    "url": "timeline/index.html",
    "revision": "17d96371f2339c7d2bd9dc0ff11215d6"
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
