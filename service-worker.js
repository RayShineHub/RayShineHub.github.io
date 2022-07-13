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
    "revision": "8aed38f9b9f35ea36a98e37f677c35e9"
  },
  {
    "url": "about/index.html",
    "revision": "168dc6724bcfd9af35e54405fecba646"
  },
  {
    "url": "assets/css/0.styles.59589f00.css",
    "revision": "7923c806756e53d89685e6a517dffb38"
  },
  {
    "url": "assets/js/1.cb91fa2f.js",
    "revision": "34b39c6a1b204bfabd4d02ce7646df3e"
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
    "url": "assets/js/20.77ea6381.js",
    "revision": "5b7599e3d0e8c49cc4f92d559e3f5121"
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
    "url": "assets/js/32.87ba6b0b.js",
    "revision": "b77dffaf89761bf4dcbe03a8e4aab6cb"
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
    "url": "assets/js/app.d64dc960.js",
    "revision": "ed8f9befca9ffb1614c12999683a33f0"
  },
  {
    "url": "assets/js/vendors~docsearch.85c73219.js",
    "revision": "97cb57422357c9eb4de43b56c52fb515"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "dd53b049f42cb73fa35af716d7b21bcf"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "d1d9a98cff7d75f3254aab18589dd541"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "bffdcc15854e68d1f9f35ceb035586c4"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "33b315ffb3def3b24fe06df79d84866c"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "bffbb516ab84b035626852836ce993c6"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "7687baf48b6792896aad600fe40c27a3"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "5cd4b226aad47ee23026d53eb9edbf9c"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "c47e5e467dc5765e55026475cc64fcb7"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "ede3590accf662dcb392c5a308ef2bdd"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "a2a5a87aa9cb75763fcfd73bec3b952b"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "ca7b5d7a1855b5d38ce5dd9452b7dc7b"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "ef6053d3d159d87119b846ce81afbaf9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "2406e82e595dd747e3e201ccb7f1a4c1"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "c0d7fbd687b126bd8ea96dff65644807"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "bd2517fd5f0c3253a8b09cd3c5a4d0a9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "32aa8b1aadbadcaacd916a04a2718a64"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "c39e9ba8065b1818b25982a2143989c6"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "78468a40799f447c440353f6efe3b045"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "bc0f56714de326946b62130f6fedf3fa"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "84927e0ba6496ffe9b19560ea7f5fc62"
  },
  {
    "url": "categories/index.html",
    "revision": "dd574d7d4c1c77d141ecfcf56ba51944"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "df57beea05e5766cbe7876ce9199f97c"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "75f5f467f6a9c34713fa0c224cb8c428"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "b71ec707d375088e3ce8b8524ffa9dc6"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "c2ef62d46acb59484a13066761dc9451"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "5793f6d01d1183fec38d4299156d55ef"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "4cbb46a412226045e43ef86648ad2e11"
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
    "revision": "2751c8ff7dd7d3fcb4ba9348eca43ebc"
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
    "revision": "322dab214471d5d7ad3888794e6f13aa"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "883ec0fe6b5841eb49babbb60d787c0a"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "7cd208feca66117b3a71dc0ae366d485"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "6001035dbaf511d627b3a96d64a2c14f"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "b6e11f04e7668bafd708af6c15468888"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "e6a0ad2db8ed152bb59ae60a9c5bccfd"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "a6e6483285a1c117702ee82317a25cd6"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "4da2ac321939595718bc946c604064fb"
  },
  {
    "url": "tag/index.html",
    "revision": "9ada91ba418506769247185fb69d51fd"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "bf8e93f7101366fb8677e4e90667f412"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "fec19c0c14ded5bf299fd907655c5a6f"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "d3c5e77d898a5879df2ec2a808202e0c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "d0614b469c5c8ec7e7477923ea03e1ca"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "78b06d9100dc1d222ea70b4401b240e4"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "0b0dfd8fd6bfdbc0164fdf86652d50f6"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "61cb4c562418db6ad77dc3dd5c831ebd"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "f17c6ca948b48ceafb15a9bce199aea3"
  },
  {
    "url": "timeline/index.html",
    "revision": "27f194077b9e19933ab9e92ce4e10812"
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
