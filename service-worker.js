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
    "revision": "95c9dbfa33406f567858258f44915f8d"
  },
  {
    "url": "about/index.html",
    "revision": "337acddc2d5ec45f5840d200f82d35f0"
  },
  {
    "url": "assets/css/0.styles.19d16bfa.css",
    "revision": "d06d5ac86cb893aaf68c9db0f5919de7"
  },
  {
    "url": "assets/js/1.78218d19.js",
    "revision": "c067768615ca49065bf780cd4821c985"
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
    "url": "assets/js/20.155160c7.js",
    "revision": "110ab6f13eb366a449a03ed8a51f779d"
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
    "url": "assets/js/32.b54471c6.js",
    "revision": "cee939f2b3c8437b8c8ed59753314a81"
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
    "url": "assets/js/app.7d339a1d.js",
    "revision": "bf6032d73b46be1c7fca7b9792a6c601"
  },
  {
    "url": "assets/js/vendors~docsearch.85c73219.js",
    "revision": "97cb57422357c9eb4de43b56c52fb515"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "734412a67b6253ff4601a8060d29bcaa"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "d67a8e196998e67915efeffed3ce375f"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "7e8a2b609a1ebf42d24bca78b567fbe5"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "1e2d64fa692be9cb72c7df76508bdc1c"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "401790b3d3b799aff544aaa5d691d65e"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "7fe225ce1a85c9d45482c203b554be59"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "421c116c73c8ec4624417b02919d78a7"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "52fe37e04ef9c4deeac3728098517e7c"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "02289899acf925fa05c5f6c5de034e59"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "9f5c30258ae4769017aaae1f880cfaad"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "c7a7e44f327ea6f0aae262ef874eb4ae"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "2a7f0fde2b83ce15f9b0e26ab450b1d2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "da08e14f54a7e19c40ed94c6bf17e3ef"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "805551a60fff11ec67835c23909171a1"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "cc1bc496317ec30be23ea60bef075bd1"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "49e430d6312b970c3262547324519a15"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "22bf68bd42dc268463bbafc01a1860d5"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "bba1dfe6a1565070f87e09474ad8c955"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "834d337cde156a2198e3d28083390f0e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "7960b8be775426cca792e536e2c01f35"
  },
  {
    "url": "categories/index.html",
    "revision": "f96c9ffdb7470d9703638774bfd6efd8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c11bc4a30a8b11ebc454bc5839006349"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "48b126c0f2ceae485dc3732cc03d01cd"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "196c812c9c6eaf83cc9caeae3f1098e2"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "3e7fd8611b982b7d4be17e88517dc17c"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "98fecc79d35b8321c93e8fc3112a4edc"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "cb3e4deb776a561bb629346b8dc2e1c8"
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
    "revision": "f4887ac33aa62582a7fcd0e3f757de7d"
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
    "revision": "1a7497587f6c3a528ff7f1b191239824"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "14bfe841285162ca78ac5c989878c392"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "2fd547f82086d0c53cdfc8cee343404d"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a4c200d1e16d6faf48092be9b5de556d"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "9d6adbb0f56abdb8b6885ff492e5befc"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "ccf20318c974142e46994331fb543bf2"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "b15b0757f4b52aec3079c4c54d04a948"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "a234feab3ab0f1959143fa6bb9c08f9b"
  },
  {
    "url": "tag/index.html",
    "revision": "4399ef50955b203bf613c2d41a47e496"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "858d740eb1f0c55962f04fb640c63404"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "53bad28dacb873c25a61f943011a3807"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "baef8b3d6af5b08e76fc73f5f472dc1c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "77f3980d722847106ba91941e811b4bc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "73510c48817750a398b5af12a0514ad2"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "e386ee98c311a1c76bd00e2369d2c492"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "e5a8ba8550da3e093416a0b474777cc3"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "dc4ff6a61d60808e441fe6129fc3139f"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e85c0c7b0cb384a16ab1d089f0067c6"
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
