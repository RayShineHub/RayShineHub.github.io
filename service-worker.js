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
    "revision": "0e3f4e436deb509c0964c132b8f5de97"
  },
  {
    "url": "about/index.html",
    "revision": "9e47bef26fb091cb815f0cc76fc7f865"
  },
  {
    "url": "assets/css/0.styles.5668b613.css",
    "revision": "a28cd6d61d4d99513f9afb1cc0a2e516"
  },
  {
    "url": "assets/js/1.525ed4e4.js",
    "revision": "7cd5ade70ac2e2e427ab3f3fe2aa6093"
  },
  {
    "url": "assets/js/10.4f9ce5e1.js",
    "revision": "14e830cf2d174eb479e2dc0150ac83c3"
  },
  {
    "url": "assets/js/11.b98d59d6.js",
    "revision": "5bb2abb4ded4af1efc25992233742911"
  },
  {
    "url": "assets/js/12.f458674f.js",
    "revision": "88b4c98f8b5e649a3b66e06a5dc0fcc4"
  },
  {
    "url": "assets/js/13.ec15351c.js",
    "revision": "2219edd18c7b94772bd07ec561a96b8b"
  },
  {
    "url": "assets/js/14.89de6961.js",
    "revision": "285da2c4036dcdbb29b32c359cd1a392"
  },
  {
    "url": "assets/js/15.4cae9802.js",
    "revision": "4d7b75c6894e5afee96a189a88bf28e1"
  },
  {
    "url": "assets/js/16.b5b93c6a.js",
    "revision": "da1d563f531ab05916821e29b9b572df"
  },
  {
    "url": "assets/js/17.37a7da59.js",
    "revision": "25b261c0dc7907a4571903b3810db319"
  },
  {
    "url": "assets/js/18.65063395.js",
    "revision": "3b67582755c6283b06882476308259bb"
  },
  {
    "url": "assets/js/19.c9304ef9.js",
    "revision": "96c5d718543cb0ab477393b1dd4a8eee"
  },
  {
    "url": "assets/js/20.551b018e.js",
    "revision": "bb487b4b1297a1b7f318cf75594ab88c"
  },
  {
    "url": "assets/js/21.0be037c9.js",
    "revision": "ddc9d89ad8816345f12efc88b5970d59"
  },
  {
    "url": "assets/js/22.ed8de840.js",
    "revision": "f9e0d5c0e75e79147e594fa849bf6a6a"
  },
  {
    "url": "assets/js/23.a3a1ec3d.js",
    "revision": "fe18ee541e61e4ab60d65b6d7f6761bb"
  },
  {
    "url": "assets/js/24.fba8a624.js",
    "revision": "510ed4c3bae30a0645b2a071f562bf1c"
  },
  {
    "url": "assets/js/25.b05bf863.js",
    "revision": "3c59e0f4ff83335b86c649fc700e8ff6"
  },
  {
    "url": "assets/js/26.94d2c519.js",
    "revision": "0e8ab7cb777720fdeebfb2ce2b744caa"
  },
  {
    "url": "assets/js/27.4b4c85f3.js",
    "revision": "b8a43a66cf4f20ae341ec3868527b53c"
  },
  {
    "url": "assets/js/28.3a0889f5.js",
    "revision": "91a4aab3f1a38978bb7c558b1190bba1"
  },
  {
    "url": "assets/js/29.8568a041.js",
    "revision": "039dfb6c8fe7a0a3ddcd7f99091dcfd0"
  },
  {
    "url": "assets/js/30.bc50900f.js",
    "revision": "e3d2b7c525b2c4633f82220a0d674b15"
  },
  {
    "url": "assets/js/31.efbf683f.js",
    "revision": "d326f3ca9ff4f4fcd63d64b2c1f7e0b3"
  },
  {
    "url": "assets/js/32.5cf489c1.js",
    "revision": "7e2e8f55e97a6512684dc28d72962b9e"
  },
  {
    "url": "assets/js/33.f9d38ac6.js",
    "revision": "cc83470a225ab5e03cadcb536a4b7304"
  },
  {
    "url": "assets/js/34.c8e048b3.js",
    "revision": "953a7f6ab58c201fa1a9fc97da5b0980"
  },
  {
    "url": "assets/js/35.0f047627.js",
    "revision": "cdf3336da67e9b7d8660a7d40a16ff63"
  },
  {
    "url": "assets/js/36.4fa8239b.js",
    "revision": "6d5f1484c5199466b54a8cbd455a0055"
  },
  {
    "url": "assets/js/37.770e5b82.js",
    "revision": "fa1ec909671861b1a91db8175f702a9e"
  },
  {
    "url": "assets/js/38.9e76fe3f.js",
    "revision": "c845d783ccae5256925702d530cee95d"
  },
  {
    "url": "assets/js/39.baa46000.js",
    "revision": "a082053f82c32d676dd28b31c752914c"
  },
  {
    "url": "assets/js/4.2721c6b6.js",
    "revision": "5554f66493eb456a112d164d95f93609"
  },
  {
    "url": "assets/js/40.f8a3be3b.js",
    "revision": "ad41bc89fbf42c20f78cf365a6ada77e"
  },
  {
    "url": "assets/js/41.32678368.js",
    "revision": "ddb06e743df95fecf3e034e748861c39"
  },
  {
    "url": "assets/js/42.47995240.js",
    "revision": "69e543cca78991a8d92540a134f25af7"
  },
  {
    "url": "assets/js/43.ab7af9c9.js",
    "revision": "cd4eb5d43a39a960b12b68195cb8652c"
  },
  {
    "url": "assets/js/44.68f47fc2.js",
    "revision": "d0640bcf5eec21fb61586d63098b9b37"
  },
  {
    "url": "assets/js/45.9a88f6d8.js",
    "revision": "cdef23077d09d543f7e648c044382db8"
  },
  {
    "url": "assets/js/46.214cabf0.js",
    "revision": "14f4c10dd01126d417b613da5bf7d30a"
  },
  {
    "url": "assets/js/47.43cf26d2.js",
    "revision": "536c4743e87e3c6d933160bb429e5913"
  },
  {
    "url": "assets/js/48.9b37ea62.js",
    "revision": "9751e8a4ea5d38f9e5d878c5fd75c70e"
  },
  {
    "url": "assets/js/5.c46083a6.js",
    "revision": "4039cf04d30df4754da436ccd3c86c1f"
  },
  {
    "url": "assets/js/6.39502e0d.js",
    "revision": "c40e9515294d15d081c2ba4398b1aa59"
  },
  {
    "url": "assets/js/7.945d82b5.js",
    "revision": "214a148ff374c64c00c2bdb128d1f9df"
  },
  {
    "url": "assets/js/8.8c133614.js",
    "revision": "d9242a2a9ee18ab5d1939a4cebb799c7"
  },
  {
    "url": "assets/js/9.cb9bb5d4.js",
    "revision": "aab9744e6cadcb89d43fe2cc348c9e98"
  },
  {
    "url": "assets/js/app.8bab3ade.js",
    "revision": "01c685d3356817c790f4b6638ea4ff85"
  },
  {
    "url": "assets/js/vendors~docsearch.85c73219.js",
    "revision": "97cb57422357c9eb4de43b56c52fb515"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "473bca765a59fcbea475dd5628021e79"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "943c0787e694b19db8b71b6c4ed67715"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "520807fd9784d41575ee1bc73b3b7a94"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "839ea531b27f5173a203243a9dc9329d"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "ca08ddd2e3d3e339b43450eceb84c261"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "48b0c91310366cf17cebe81f57043f37"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "5e67f175154690d13865ce17595aa433"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "9243f968b9f89019d7adedfe67685fd6"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "7121029c6981194b2ccce222828a9341"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "be952657f44ef82cd5cd87b171b05672"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "a2c111e2160dc713ca5af8aa6d9c77f6"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "0fbd891611ccf1a266c511df8228e689"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "a973b94dae54c5e5d5d64a8c650895b8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "ed9b6ea53bc8504d6b031b6c54fe6b6c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "bf63a6af31e6d13b7da4b65658ed9f3c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "904194b5d86461e4a8173b81736c3043"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "6400e9cd23a3db15d2fbb874e6b10a9f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "5e17119bf89d66174b6783b6e77d0878"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "5f4e0a872e95796eec8de11a306f4d26"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "d89df99302c5bcb66c6afa191c51aeca"
  },
  {
    "url": "categories/index.html",
    "revision": "01d05c6590f8a2f3dc42fc95436e06dc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6e400e4a94a2f880095bd9b03895d5f9"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "2c0688282ce49997603248213b5a6f44"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "f67594fadcc3497571ad020bffe9cc5b"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "17d108f5ddfe7e942f56ccdb18a0583c"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "6d36bf1da0a3b5b823a88bf202b91b27"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "c0f6b1e1a817febd6c4b81483c91677d"
  },
  {
    "url": "cus-icon-font/iconfont.css",
    "revision": "124d747586fba2e391df543ca9271d3c"
  },
  {
    "url": "cus-icon-font/iconfont.ttf",
    "revision": "c48b3cead48609dc7757df060e8d2076"
  },
  {
    "url": "cus-icon-font/iconfont.woff",
    "revision": "2cf196314c36a13b99486b17f5b25ea5"
  },
  {
    "url": "cus-icon-font/iconfont.woff2",
    "revision": "cc6d447b8a80041317345a1616d2eabd"
  },
  {
    "url": "index.html",
    "revision": "70a23cd0697bbf009d40059f2c164a62"
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
    "revision": "eb0f0ef3bab766877028c8601a3378a7"
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
    "url": "logo.png",
    "revision": "9677afaf7b215f54e090d7aabd93c71a"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "35efccea9e5205029837c9100d4dea19"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "457a0a7d41b141736ad3733abac32a26"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "0385b5bac11ad13b408772db0daa357a"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "161274c647883e798f065359927744b4"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "7202369b69650aa461fcdf41faf70acb"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "300352fe19d5c54c5b7fc1c1d0eecc87"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "4aadb7532022a801ce9f4ae3cbc68cf0"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "b830533f09a9c170a31852ffaaf67734"
  },
  {
    "url": "tag/index.html",
    "revision": "b6f9b25bfe3e80de7bd61ba513544dba"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "19fe4c03a6c448ff743f50eb0ce0c3dd"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "517873396b49663c013edf3310a9baa2"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "c2d9f5fc38e2a49063ac0be326b95c27"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "911ae7b40c5c1dfa8739d4fa7b6f6480"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b803bc659d2670152419be3508c88913"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "29c2e81be9518522fca168bc1a10a96d"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "861536c3567490e6a0d0b54d0c2a9f2d"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "2bb66fd1b2d9c572ffa21daa6b950aea"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e67e140a517251976272d2f7269ed0d"
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
