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
    "revision": "d1ae6ab3af8320da5e8dfedfcc418782"
  },
  {
    "url": "about/index.html",
    "revision": "f6ba610a2a13e8157b4136aa90815fd8"
  },
  {
    "url": "assets/css/0.styles.a041aeb5.css",
    "revision": "1fcfd2445e5b918da2e9d57f723fa2eb"
  },
  {
    "url": "assets/js/1.2d3c22bc.js",
    "revision": "fafad9816545a1301197d8b26540893b"
  },
  {
    "url": "assets/js/10.4ecc87f7.js",
    "revision": "55da65870abbc141ad2605ed408ded11"
  },
  {
    "url": "assets/js/11.1618fbdc.js",
    "revision": "1de2bbee9e0139254e753f978001a256"
  },
  {
    "url": "assets/js/12.c55e02bd.js",
    "revision": "bbb765da97d14246326bee520b6b4121"
  },
  {
    "url": "assets/js/13.13759321.js",
    "revision": "0b22226874cc5ac0b61b9acd28f16f2d"
  },
  {
    "url": "assets/js/14.d57e076d.js",
    "revision": "c2f8fadb0c37d1411cb5796090c97c48"
  },
  {
    "url": "assets/js/15.16f4a8de.js",
    "revision": "433f577f3966880817f18d7db1599467"
  },
  {
    "url": "assets/js/16.d361d3b9.js",
    "revision": "92eda0650902f97a2c4abe3dd660a0cb"
  },
  {
    "url": "assets/js/17.730b2c11.js",
    "revision": "2370c89544fd11d60ea62d0e7ceb115b"
  },
  {
    "url": "assets/js/18.5f3ea9d8.js",
    "revision": "e5c950f4a6ea266f49b35ef935155a08"
  },
  {
    "url": "assets/js/19.c0ff106a.js",
    "revision": "94c2920e186024e23ebfa79654d8ad62"
  },
  {
    "url": "assets/js/2.e376d431.js",
    "revision": "a0f85403577ba8e803d5abcdb3ac2462"
  },
  {
    "url": "assets/js/20.22f35c66.js",
    "revision": "ca2a855eacb59fbf0ba0dd8651ac550d"
  },
  {
    "url": "assets/js/21.8d265008.js",
    "revision": "f09c99dce621f66ccf65131304a888b6"
  },
  {
    "url": "assets/js/22.9eba1fd9.js",
    "revision": "f549f87405fee6accb52776c3649e896"
  },
  {
    "url": "assets/js/23.85b011cb.js",
    "revision": "ce0ed531d34f459259419b9e68abb6dc"
  },
  {
    "url": "assets/js/24.8c608f5c.js",
    "revision": "f0e9292ca3a26159aefc52c676a5c359"
  },
  {
    "url": "assets/js/25.059214ae.js",
    "revision": "cd5fcc99ba6599fa546780ead44cdcd3"
  },
  {
    "url": "assets/js/26.8e4faeeb.js",
    "revision": "3b060b380f679e9ca4615c86896c38e6"
  },
  {
    "url": "assets/js/27.04c22a9e.js",
    "revision": "57d564e34b6b1ecb891931c60720cb23"
  },
  {
    "url": "assets/js/28.2fda1104.js",
    "revision": "ad9de9e95cde655dbfd7d45322f67773"
  },
  {
    "url": "assets/js/29.f95381da.js",
    "revision": "5f63c2a457e5846322297bedca8fdc94"
  },
  {
    "url": "assets/js/30.f0999c27.js",
    "revision": "bcd66a9e643587bb1e2e180a42275c45"
  },
  {
    "url": "assets/js/31.d4fe656b.js",
    "revision": "b9a02623054ee9c1b68710953c5956c0"
  },
  {
    "url": "assets/js/32.c2dac13a.js",
    "revision": "244d55927df846ac5c7ec54744523796"
  },
  {
    "url": "assets/js/33.af224b02.js",
    "revision": "9dfeafa9b0dea579c8e67a0160d690c9"
  },
  {
    "url": "assets/js/34.a352b223.js",
    "revision": "2f87f95573018c68d86bffcb25862684"
  },
  {
    "url": "assets/js/35.877d21c0.js",
    "revision": "bc2838d9fdc2b1a75788f27411c3bcb1"
  },
  {
    "url": "assets/js/36.716c770a.js",
    "revision": "3ce8a69d1f46a14a3613c6fd6e86d3aa"
  },
  {
    "url": "assets/js/37.da59b8ce.js",
    "revision": "bfa1aad1d89ac8fb2978b99bcab2dff2"
  },
  {
    "url": "assets/js/38.8262c1e1.js",
    "revision": "71fe07d26a5e90ecff21f72ef2a3631a"
  },
  {
    "url": "assets/js/4.1634e6de.js",
    "revision": "ca726fd57f7fea7815d026b350a70682"
  },
  {
    "url": "assets/js/5.da36ba90.js",
    "revision": "95fa2daa4d2c134da6c4eb43908aa25a"
  },
  {
    "url": "assets/js/6.e6522fac.js",
    "revision": "1ec458c4c8cbf6f5dc4e7a42b56bfe92"
  },
  {
    "url": "assets/js/7.6d6d1bf2.js",
    "revision": "8662d626860e26edb87e6d773a9ada66"
  },
  {
    "url": "assets/js/8.25f663fa.js",
    "revision": "5d46970aaa50125108c184f1c3c4f29c"
  },
  {
    "url": "assets/js/9.f06d4653.js",
    "revision": "80158a1e8b6e54700edac2912710e0ef"
  },
  {
    "url": "assets/js/app.8aad4a9e.js",
    "revision": "2095fade098ded0023faa7bb5eedf7c0"
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
    "revision": "8feda1a780b2aac5750d8e8ebf7dc7fa"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "a5370fd74786f8b49b909c78d34048df"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "20949c4b4d703b78c3ff2cb297caa461"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "fa068a446280a9c0a7654c17563e9a83"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "46f5700af4567c0db7043cf438a07c3d"
  },
  {
    "url": "blogs/前端/CSS/简介.html",
    "revision": "2c9c1171260354e5eff11a1df0be58a0"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "d8fb44bd5933802da37d331e575baf94"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "b576f9e3916f4f4d8578f99ad6d7f018"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "edf7950aa06249d3bc73d6d4adfd95fa"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "59add919176af4b0e93df3a512d5d3d8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "d99972a9352ee465b7c4a763720bf210"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "7281103a8dc22d47afd158c75b97f0b0"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "a2c0e17dc7f32d4a2d62316baf7c530b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "50a4dad3b492abbd6ad2c9e5b0975e23"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "d45632f34a173a8a2fa84d86b9447b1c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "39bab7dbd91f2b0c6543baeb19cb5ca8"
  },
  {
    "url": "categories/index.html",
    "revision": "e580e3a97f86f7283620c4716b2b8fb1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2b1c990773f9a52938345e534ba08258"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "da623d180811a8457158167011a33b2d"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "929fa265dd8fb60eb5a623bb48641083"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "a1d9ff770010102dc60558f06b88874c"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "4fef4984ac51c5afb3f4d8e7a825579f"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "e787cde274684a7c05ff4b5be529dfe3"
  },
  {
    "url": "cus-icon-font/iconfont.css",
    "revision": "f4489d173798b9ad31723d2ce5761086"
  },
  {
    "url": "cus-icon-font/iconfont.ttf",
    "revision": "0a9cbd443eec3c0c463cfcdadf2d1ef1"
  },
  {
    "url": "cus-icon-font/iconfont.woff",
    "revision": "52dd9791239339a9d4afdff1fb5d7892"
  },
  {
    "url": "cus-icon-font/iconfont.woff2",
    "revision": "7d02738c9ded0aba101b632f13179ecf"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1f91d61d2cbe3f76385807f0741171f5"
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
    "revision": "66ac5e966ec455efd901a1860df11e5a"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "bd79b58c9750a6c0dd71b8798079bfe7"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "f5ca02114c76e9b8a07fad683a719cae"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "57dd0e6a5719b09f877c453e427f4a5c"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "63eaee7037508b36dde2e33be5b1c9ab"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "36ed75f2d7ad7325ee3c11e03fa52df9"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "5ca38c14b7941cce420ed9b600f87683"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "24b2da9535afb9983a4057db38d8b2ef"
  },
  {
    "url": "tag/index.html",
    "revision": "2b7e3ad0f62ac3cead69d8a1264b7371"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "55a8b97461a685c6b1b41aca8803b5f8"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "0ef48cc4e9539da21f0edad97bcd6d1d"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "041c164b6884383ef8dc70a2357c440f"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "bb62f40d0cef403df6a66d65a80e7c73"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5997576a627014750f065188b4eb4447"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "b621b4af5d5d4213d5d0d66ac370ba56"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "d55767c2e393a2998334c00631075770"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "4db99c63cadc903494c310ea01cf2a71"
  },
  {
    "url": "timeline/index.html",
    "revision": "e7a8ca3ae9e588cdb6c9969058076f57"
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
