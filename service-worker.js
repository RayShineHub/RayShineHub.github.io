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
    "revision": "47e367b023dededc8b0115fd432f40af"
  },
  {
    "url": "about/index.html",
    "revision": "975f5f52e80dc6013e332742b2f15e54"
  },
  {
    "url": "assets/css/0.styles.a5030533.css",
    "revision": "97a1778de2d5093e960ba0e3327a1048"
  },
  {
    "url": "assets/js/1.3524903b.js",
    "revision": "b5ae4aace826fe706b44a637694037a9"
  },
  {
    "url": "assets/js/10.32711daf.js",
    "revision": "76ede62c2df827da31a6031121dcc010"
  },
  {
    "url": "assets/js/11.8b019f3f.js",
    "revision": "19ab2fa543303a102533b1c2c337dfbb"
  },
  {
    "url": "assets/js/12.30c34cb9.js",
    "revision": "b6805364657156a37d60b0ddcfac559d"
  },
  {
    "url": "assets/js/13.3a6d3121.js",
    "revision": "662d8761ab320e4edb2e156b45393057"
  },
  {
    "url": "assets/js/14.8b0d0854.js",
    "revision": "4fa4ab5e8e8327d7ea2e7c47c5909188"
  },
  {
    "url": "assets/js/15.da1b5b66.js",
    "revision": "d5ba2f2a39c656a46ade9ac71d9dcbe6"
  },
  {
    "url": "assets/js/16.133eb603.js",
    "revision": "21308bc46539806c8e42b47974e5837a"
  },
  {
    "url": "assets/js/17.2f3c8f74.js",
    "revision": "3846043dd97150910415b35620d10412"
  },
  {
    "url": "assets/js/18.9e734c70.js",
    "revision": "f179413f5e8d7fcd4c77612cd0c005df"
  },
  {
    "url": "assets/js/19.a1c47b9f.js",
    "revision": "912ae13f36e4f82bd7b022ef00d5b9e2"
  },
  {
    "url": "assets/js/2.e3eced98.js",
    "revision": "fac13d47981d38bd4b3b8c5d0632b807"
  },
  {
    "url": "assets/js/20.73f03426.js",
    "revision": "18ca5e57e2a78e6b1effc867fd305f01"
  },
  {
    "url": "assets/js/21.4e87889b.js",
    "revision": "11544499a010529976dc198d18f7e8c3"
  },
  {
    "url": "assets/js/22.c3fa4344.js",
    "revision": "4690d283685f9f908123e9e9eb851088"
  },
  {
    "url": "assets/js/23.dece1672.js",
    "revision": "c62e08f5118afaff24d40100f6e7219e"
  },
  {
    "url": "assets/js/24.4de2b600.js",
    "revision": "70d9f0b383b8f14d5591c61c8510d6fd"
  },
  {
    "url": "assets/js/25.c3ab536c.js",
    "revision": "7750e464b554ee0405eabee46bd7659a"
  },
  {
    "url": "assets/js/26.2658bf96.js",
    "revision": "0e36882c0579e455cc1f227c85fa85e2"
  },
  {
    "url": "assets/js/27.1a529710.js",
    "revision": "c5e78518cd8a2f6897994b81fb04a3cd"
  },
  {
    "url": "assets/js/28.f5858742.js",
    "revision": "50b0b2695820d7f192f73d05a7c2eed7"
  },
  {
    "url": "assets/js/29.050f7a04.js",
    "revision": "6df7bfac17cae5c4763e0d0f26d4ef39"
  },
  {
    "url": "assets/js/3.60af35e9.js",
    "revision": "6823ca05fcb40a49833f66ef9ff7ae34"
  },
  {
    "url": "assets/js/30.ceadd11d.js",
    "revision": "32fd8057b4c4f77bf6a725e3033a255a"
  },
  {
    "url": "assets/js/31.74af721e.js",
    "revision": "678ea4d5e2d68385f82baeb9375d0a7b"
  },
  {
    "url": "assets/js/32.fc4cc183.js",
    "revision": "89937ac6ad7e2788c13b28c91d10a173"
  },
  {
    "url": "assets/js/33.50d93283.js",
    "revision": "35a8bcf64b315e968f6f7d530fca6353"
  },
  {
    "url": "assets/js/34.c141cdc4.js",
    "revision": "83aaad17118cd8f4d4a828d9c91a2033"
  },
  {
    "url": "assets/js/35.46b0fefa.js",
    "revision": "780091d495584b1960584cce67566ecb"
  },
  {
    "url": "assets/js/36.6afadc8c.js",
    "revision": "339d0e239889fe7818f2054618020f39"
  },
  {
    "url": "assets/js/37.a14693b7.js",
    "revision": "87d536e502dfb6162f1cc01ff75bcb27"
  },
  {
    "url": "assets/js/38.1b9134b1.js",
    "revision": "7d0fb67b8df7247ad9f027b82fcf3245"
  },
  {
    "url": "assets/js/39.534f34f0.js",
    "revision": "ee5f49888d32f0f4bd0e0253acb89919"
  },
  {
    "url": "assets/js/40.962d7a37.js",
    "revision": "f9cb48a618ae33da386de01b9fc4d58f"
  },
  {
    "url": "assets/js/41.e10e4387.js",
    "revision": "b6006575db2d98f707b91496f0e5c4d6"
  },
  {
    "url": "assets/js/42.a305d727.js",
    "revision": "c2d6c7662dffcd42ab3dbac38f0672ce"
  },
  {
    "url": "assets/js/43.9bf7f9fc.js",
    "revision": "3bd02958c12e416f6fee321bd5806789"
  },
  {
    "url": "assets/js/5.b1f4da2d.js",
    "revision": "f9d05ac4c13b7ca413d0fd68428aa748"
  },
  {
    "url": "assets/js/6.b723a972.js",
    "revision": "e6b705a38ed312c06bf2cf70e2beb6d8"
  },
  {
    "url": "assets/js/7.e591e2db.js",
    "revision": "58be3e1e2298e6c622bd8add39043a8b"
  },
  {
    "url": "assets/js/8.1d2ad8bf.js",
    "revision": "3308f9bed2725ec6b0df8117cc60cf65"
  },
  {
    "url": "assets/js/9.f77339f6.js",
    "revision": "e72bd8f938979b47d050910d7e910401"
  },
  {
    "url": "assets/js/app.692fb49c.js",
    "revision": "270c7bce8bbd003b239374e71de192fa"
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
    "revision": "1c301659d993a3ae45a075fdbb548548"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "e900c71a93bed6ee2e2645da63f34d36"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "2c919df462cc9d98ad3334b2ffbc773f"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "35f02755462e52bbfe50f439610845c8"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "1180898cb2521cb0941d5dd227ab5e70"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "d2cceeda0abaaad0273500a8495653d7"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "4cde4ea46628e85211b0f92553108fa9"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "684a04751f0dc0b6c07ce6279f149fb2"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "8d8f6f79fd65e76f0e8985d933fe46d0"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "d7239fd243651b5c20ec71df9f22351e"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "a93402dff20190b7d21bcbc7329e0afb"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "1a4b64fdb7bfde5536a337c3b52ca0ec"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "c7fd005913d47c6c7b43265331bcd974"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "f817b18f6b09cd2a4923a9e6543f7305"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "d672da4f845c147fd24abda3b32a498f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "c19f73b5945c9c89bf8338e48b7cba2c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "6277844c170e3705d04972c3e7d236ae"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "c06423a61a8918a4d6f2236c38123d31"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "9a7c24f72bb27bcf9157d0da692c28fc"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "a92101e9ada98bb1d2ab0ae1952b4240"
  },
  {
    "url": "categories/index.html",
    "revision": "4d549e3a97ef751aa4d4d7a715fc265b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "48fe8b35542e2668a659f32e75c41485"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "23a8678d98690b08f71df757ff935739"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "e1ebbaecf7efd9ae5c72009cafc06a44"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "c96e50b338a6a6fafa584ce15515cda4"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "b4d92f32dd5191c1b2d8d8fa69cdc8ab"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "4517ce599a442fb663d9b77f321b64a6"
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
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "947550ea5307bb8dcbe3845f88a94824"
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
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "logo.png",
    "revision": "9677afaf7b215f54e090d7aabd93c71a"
  },
  {
    "url": "tag/CD/index.html",
    "revision": "10f82b45294a523a69fdf1168ff39ff1"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "b9552931f9a330d721e9bd4866fec02a"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "7090deb03fc197aa727a3fcf2c86b057"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "5e607e041849f1a8c928f14cc39c2483"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "2e8196417429ccfe8383d830da499a2f"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "75be62bdd2f3c8c4675e3c470c195615"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "a87e13284be60d722bc5d7e9e31817a3"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "e8a238a7ffd81cac2987f3153b705235"
  },
  {
    "url": "tag/index.html",
    "revision": "9cf26306be8f63d96598e02275462e20"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "510e92abd40ad46c41306059a04e7c2e"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "c6e1ef698f243b55c5f3e6875e7beb56"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "1e2a04b4ccce1dd356a98f82aa5a07f6"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "ee1393e0736678aaeac083edee9d3380"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4845b719edc54797eaa000747896459d"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "bec79a90dfcf3559381dd56def981d13"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "558ce4b11ac77254bab8380a4f0716d7"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "fb4ec2ef66d5c51818303abc9d172385"
  },
  {
    "url": "timeline/index.html",
    "revision": "5507e7204e6d899a50873daaee6b1261"
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
