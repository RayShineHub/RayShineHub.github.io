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
    "revision": "5af38e3448157ec8c354127fe2d083ea"
  },
  {
    "url": "about/index.html",
    "revision": "41b71a578ca7df809aab5be9f5381875"
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
    "url": "assets/js/app.1dde82fe.js",
    "revision": "f470cc868355de8dbb19c51367faaca8"
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
    "revision": "88a292d4badc777123b8eb4593c93e0f"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "9cdbe4d986d2e960f97fa84e53f3b9a4"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "71ec6868a3804cecc7740a6cd1e37af1"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "6b7c4d871bacc13cf296dbd83fd71b51"
  },
  {
    "url": "blogs/前端/每日一题/2022年2月8日.html",
    "revision": "6b7853b6647b01f55c513da9176ca2d1"
  },
  {
    "url": "blogs/前端/每日一题/2022年2月9日.html",
    "revision": "accb232d17ad83c319a9902db3226f48"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "6322424e40f06086bf16174b84f92029"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "20048b6d662834b7c2cc107ad73aa936"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "07f39c745516541976b1ee3fda7e6f3c"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "3ca722fd0de735d44f4f8515cf087364"
  },
  {
    "url": "categories/index.html",
    "revision": "e7a7adb19e0327005802f5cb878e961c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "109a75834132c07910e643cf5115f862"
  },
  {
    "url": "categories/前端每日一题/index.html",
    "revision": "cdee4e700af7c6f66dd6a3691e3cf0ce"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "3a1cdfb8adf70e1bd99116713791e93a"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "8c7b50625100c166507c66785b7a2989"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "8db5dff82844e238a7325061eb7c4f3c"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "6ee29bdba213c0de7c02369ae8195477"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "72f351637270cc1073b8fb3c4b602ed0"
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
    "revision": "99206a0d58f1612392ad1478eae39a38"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "31515417796d83ad5bed84a68628e3ba"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "096e7c74d5588c655a6e0468224c9e36"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "0647717b26f59bc74149bd316a9de38d"
  },
  {
    "url": "tag/index.html",
    "revision": "b8239e1024284e22712fdc124abf5d21"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "ca8d032fd85d870434165628f9159455"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "5e842a8b76f1b8f69acc5b2f4db70c35"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "d012d65abfd19b19c5b69299f2f5923f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "91823137793776cbdbee143b474f12bc"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a5d02de623932593fa73839a3e453ddd"
  },
  {
    "url": "tag/每日一题/index.html",
    "revision": "3e85d9c92e67e4d804ff1966aa35bc1b"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ca9b8f2eedc96451b84a07546317757"
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
