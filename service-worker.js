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
    "revision": "9f97d216082a8cefc94aff2ab67fa6ac"
  },
  {
    "url": "about/index.html",
    "revision": "35afbc83a29da759bcfe0dd727a8723a"
  },
  {
    "url": "assets/css/0.styles.0c577a22.css",
    "revision": "3b666a5008e8dcc3967865e633f8fd7e"
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
    "url": "assets/js/12.349ea86f.js",
    "revision": "645bc8d8a192fe3496b2df6544453895"
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
    "url": "assets/js/16.d0c78a33.js",
    "revision": "b264ddef15b61476e4c2414eee0c6436"
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
    "url": "assets/js/22.1a36437e.js",
    "revision": "9e06d8af40360598562f6d88128aab35"
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
    "url": "assets/js/26.15f00b3c.js",
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
    "url": "assets/js/35.2b10abb9.js",
    "revision": "b09bab25787682586412ad28ba9567ae"
  },
  {
    "url": "assets/js/36.1513f043.js",
    "revision": "f8c6d7e2e8d5aafbf6df2e02e61e7db4"
  },
  {
    "url": "assets/js/37.39a2e1c8.js",
    "revision": "ec09ccf2ce450445cd5286df0f205b11"
  },
  {
    "url": "assets/js/38.6f2dc025.js",
    "revision": "44fbc3921ef221e0bcea59546f0bae2b"
  },
  {
    "url": "assets/js/39.46362f32.js",
    "revision": "7483d838d6e0cbee190e0d6eaf868c8a"
  },
  {
    "url": "assets/js/4.b2e70b1a.js",
    "revision": "32a9035d730ccb9b4b73ebea31c25613"
  },
  {
    "url": "assets/js/5.9f23fbca.js",
    "revision": "2bf9106dbaec3e3b4a2fe4c624ce44c4"
  },
  {
    "url": "assets/js/6.9a65a312.js",
    "revision": "5da6424bf063bc2c6fa82d9e4030276f"
  },
  {
    "url": "assets/js/7.fe307657.js",
    "revision": "06a63ff5ca2e360ddc9b3929c6445b28"
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
    "url": "assets/js/app.a1bf1f08.js",
    "revision": "ac472fd40c3633807080df54d30b0411"
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
    "revision": "8816f09d9c444ae1da23d9cbca86791c"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "07c1b62e742076670ef02fd9550ecaaa"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "3fa1be50229306067eb27179272fb21b"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "8216e62b89d8b6e7bde0c53536a5cde0"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "b324fb3d03c04961346d9ce7c7043600"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "86611ed1642d47a52384c5fb24506a98"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "b3350258685aa4d2ffa0792ea24f9c81"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "e4487ac2a63fd1a0241c96eb0ac651c9"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "cfea4c00d3b8c045a6bdf229feb161f1"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "0b60f7eb101f07866effb20498a1a861"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "c9a00933724099090c29c91477a44b61"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "6207a947f54e29853a0e0f5df3fb2c47"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "87e9ee4c9da67347471260dba96ebe2b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "af5ae02127255cc3cdcd40bc14ee993d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "c1fb3ac0514bdd8914d21ba41b02417e"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "5bff8f895c348177e486a27480a83dfc"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "fe6b38180ed3f4bc8e8216aa35dc0258"
  },
  {
    "url": "categories/index.html",
    "revision": "35efb7ae1fd85eb44919ab96c300a0fc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "01aa0bbc5eacb799b4ecda69659351c5"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "14900b1f8cbe6919b4f9058b96c7300c"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "41ba32247be1c0df815ba37b709ab673"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "21c92a53567c8d53d1ba8786a1dc76ad"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "b7f99a9693f62c456e37effa83bd9f2f"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "eba17ba63a3399bdc4a2dc49bd467544"
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
    "revision": "399cf2aef8a234d8a787e5462bdf413e"
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
    "revision": "1cfa2fbcd5cfae5fc01f3f797543928a"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "f652b667e669d7d2c9af69aca45a803b"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "feb307a181ef7c2203a3cd54aa6aa02a"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "0afbb4738d42073e2cb829804da23250"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "f24b7fc56501c051f6c6c0b3ff9f0644"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "1d0c8925a878908b0358d3eeea0c2f33"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "64f25bc7e849f20a9dc09b543112936f"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "68e109ee7ae079e4134bd02bf0173883"
  },
  {
    "url": "tag/index.html",
    "revision": "6bfce2e00bc6dd3d5f4ed34f9aab86a9"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ed9fbfd8241b961985a68ba0a2679619"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "f591a5b5ea3b7ef0cf05b9e5ef8160e1"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "976ec989903e90f94dee72f50fd3244c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "6a5bae0aaad4112286e69a4d8584e43a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e62b7496e28bcf0e5717fea5fbe98e9d"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "8871ad8782500b8a0251105adf4d04ef"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "090e9b2050cc47212536d869eb793a60"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "a0e6dc91c11bb34cfb4512a01837d2a1"
  },
  {
    "url": "timeline/index.html",
    "revision": "176fceff345bcb5f08d64f88b091214f"
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
