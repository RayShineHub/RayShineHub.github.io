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
    "revision": "49c1c8027900911f03b7b961c83e3ad1"
  },
  {
    "url": "about/index.html",
    "revision": "b36cb0c481d08c05656e1d17c7f85c33"
  },
  {
    "url": "assets/css/0.styles.fd6913f4.css",
    "revision": "1ff102e39a1b8f8881a228377baf92ef"
  },
  {
    "url": "assets/js/1.bfd486a9.js",
    "revision": "520493ab20285041dd839cd8a4ad35a2"
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
    "url": "assets/js/20.9a578960.js",
    "revision": "f3d497aeec509c6c535d34d1388aba01"
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
    "url": "assets/js/32.f3c1c087.js",
    "revision": "16635b78afc2437975c82dae75f76240"
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
    "url": "assets/js/4.2f1a3963.js",
    "revision": "862b256d45b79c747eb03b4f69753c9f"
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
    "url": "assets/js/5.cdb19b57.js",
    "revision": "f091334967f2833300a191ba646a628b"
  },
  {
    "url": "assets/js/6.bc97db53.js",
    "revision": "576c544eb239065bf5dbe8455d1f4a3e"
  },
  {
    "url": "assets/js/7.2ba90ff0.js",
    "revision": "c3a77671b76ef0f32be33fdd0db59213"
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
    "url": "assets/js/app.760adc4b.js",
    "revision": "a6295b68b7d6851fde5d0a8d3fa74e33"
  },
  {
    "url": "assets/js/vendors~docsearch.85c73219.js",
    "revision": "97cb57422357c9eb4de43b56c52fb515"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "b5d8ef2db5b4aea2c829049a279465d4"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "39223db286af11d34325a882aad0ea99"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "bbabcc85d7eb9dc02d74d2f5727f505a"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "1f9a3adf3680efe4b1e63d2236467618"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "cc0e85058335335b593dc4ca5f34e2da"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "34ab4e7df3aa4ecfe923c0b5456788c5"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "62d0a5fd1c641f7bc2139826760aacd0"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "80c4533f8bec6ec4337a6d9d92fc12d4"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "0be96f937f01767946b48be99bc0fa65"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "18a57858a0483a9040f11891f0797e81"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "41dbcd207ec05758fc46cdd721ed89c2"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "8b56d22fc4ba28a0fbe8a0436033fd22"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "8d79c5bd62c4374bd8fdb7d9be3aeb32"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "483470bd02b0f5ce8f449bdf19ae722c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "9d58256850f2667d71994a2c7a5238f3"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "1195da6d75ee1e616af8b978f594fcfd"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "f31720bfe230b06013265bfded504fbb"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "5fef64ee2fdb3394d3dcf686ff3a011a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "522944cce75fed753126c5e3fa180523"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "444d2b2fd36857ffa17d8e3d1d4d2bb3"
  },
  {
    "url": "categories/index.html",
    "revision": "52fb6fc2fe096c246cf2188d4d08d755"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "73f0de1bbfe9570d3299d21a7033c51a"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "da030a96e250255a43a3c210d080a30f"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "650cc2205848e86d7b8b47670a8b50fa"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "0418a152ed9fc9f64f1dc6ff2ce2d4fc"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "31aeac7f742e1263bf0eb5f3a2c87921"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "72ec67a221809f5c7b3fff4b5a67e03b"
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
    "revision": "d18096e4fa1967a76fbdf4fafc06a894"
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
    "revision": "d8b420f4095782c93d16f4d72dfc7005"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "256fea22fa9d54c526101805136e421e"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "6c830e257b244e5f13626caf671b0d08"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "7f2c684e36b9052ad123eb826468f38f"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "4096a4123f80e734b818ff2ae741158f"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "8855b8cbad5d43daff3d7bd91c4acbdb"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "6b0257c92450b1cd80c1aa693523e52a"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "84a91340c2227d869db6c7ccbc5b1d69"
  },
  {
    "url": "tag/index.html",
    "revision": "b9da1fb346a89f5a13210f658b96731d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c68d7b16c6b97a410bc1155170fbf658"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "0d9e5cfafdd794ddb99c1440c3a9fa6d"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "72a4575058e67603fd518ae30162a75a"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "91d6f936f74bf53085f20a0c2777aa45"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "69788b7b33ba68896d5bb6266e503831"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "8137c2cd1425c5dc327aef54c2ea9b0c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "e2cacf0c0d1ba8ce88d08fda83319b05"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "0f05400339e304c1a02799de1a5957a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "b013911021d3dd1eda892b4b6e410764"
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
