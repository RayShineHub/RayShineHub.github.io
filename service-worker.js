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
    "revision": "38d20d78c8c06a2b655fefc94a66d696"
  },
  {
    "url": "assets/css/0.styles.39e6453f.css",
    "revision": "0f8e185a4ddbdb4f2a22d4556648724b"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/10.263bb514.js",
    "revision": "e44463b99b857715b1b48d0a366e2f6d"
  },
  {
    "url": "assets/js/11.90abd343.js",
    "revision": "c1b772918e8cb7b55dfc2f01c705b6eb"
  },
  {
    "url": "assets/js/12.b89da40c.js",
    "revision": "cf5cf3a36da71539bc684724522db9ea"
  },
  {
    "url": "assets/js/13.edc2942a.js",
    "revision": "19fac4ae71a59ad8fcf576ef66d30eeb"
  },
  {
    "url": "assets/js/14.29741549.js",
    "revision": "ab03c4adc2277aa11c15cde719ea29d3"
  },
  {
    "url": "assets/js/15.9d6fb046.js",
    "revision": "990f7aeaf15a8ed68a136db010042dd5"
  },
  {
    "url": "assets/js/16.78e62aba.js",
    "revision": "6fafb05a9842872e38fbc3822327363e"
  },
  {
    "url": "assets/js/17.373fc0a7.js",
    "revision": "a528abafef99cf01b5e88c9fa16b164b"
  },
  {
    "url": "assets/js/18.1cabaebe.js",
    "revision": "e90425ee3978d5148ce7be264357d81e"
  },
  {
    "url": "assets/js/19.8b26bbd5.js",
    "revision": "3a74a3d00a1f53b7375e7a5c50dfc5c3"
  },
  {
    "url": "assets/js/20.d35c2f49.js",
    "revision": "b6904380edf89b3b66fbe3bbdbf795ce"
  },
  {
    "url": "assets/js/21.68fdbb6f.js",
    "revision": "e606c3cb19075d2cce64dbb4464f8e78"
  },
  {
    "url": "assets/js/22.a1222589.js",
    "revision": "13fe6a1fc3535d53d29fb7e0faacc5ab"
  },
  {
    "url": "assets/js/23.145d0807.js",
    "revision": "8104797f58b1c763371e8baf2af68bc7"
  },
  {
    "url": "assets/js/24.aabb3e3f.js",
    "revision": "63a81fb5ed2d218af990abf8ec0e1227"
  },
  {
    "url": "assets/js/25.16440e6f.js",
    "revision": "5a45b1bd35192d2760b2949baa7fff22"
  },
  {
    "url": "assets/js/26.b3b83d33.js",
    "revision": "7279dea859451ccc8af036ef9e45de4b"
  },
  {
    "url": "assets/js/27.02a6f0e4.js",
    "revision": "e68c42258d62edd8c3734e1bc8a26f00"
  },
  {
    "url": "assets/js/28.00002cf6.js",
    "revision": "9bb97915054e3b346835bdc72a4db728"
  },
  {
    "url": "assets/js/29.ce9bf933.js",
    "revision": "91fffe4b2d1d21bb294cbc7aef19d894"
  },
  {
    "url": "assets/js/3.4e4cb990.js",
    "revision": "2bc26bf88d5805a1d49b1617daf569d2"
  },
  {
    "url": "assets/js/30.beb9b9ae.js",
    "revision": "3dfab73c28dfdb69605a4018d2ba6773"
  },
  {
    "url": "assets/js/31.fbf32c5a.js",
    "revision": "6f9c4c5021f059775abae5945c4bc40e"
  },
  {
    "url": "assets/js/32.5e9a86f2.js",
    "revision": "5b052efa183e8e49b6c7b158f65e6c4e"
  },
  {
    "url": "assets/js/33.52bdeecc.js",
    "revision": "75b791734b9ef88685542f2c2b57f4f6"
  },
  {
    "url": "assets/js/34.22a0da60.js",
    "revision": "9ca888a99a694805406f02a227a29eb6"
  },
  {
    "url": "assets/js/4.683e5ba2.js",
    "revision": "8e3f2d56a9a888ceb4ee2a6f0f90a5d7"
  },
  {
    "url": "assets/js/5.f3274fa0.js",
    "revision": "aac4eaeb67c4ef6547151d35c3c98013"
  },
  {
    "url": "assets/js/6.0a3c2fca.js",
    "revision": "a3cc1adb18747e66cde422950f272942"
  },
  {
    "url": "assets/js/7.bb4323e2.js",
    "revision": "dd3915742979dec3f834a59e41c79424"
  },
  {
    "url": "assets/js/8.247dc7e3.js",
    "revision": "6e1af48d9db7de0a53d81f81959e0eb7"
  },
  {
    "url": "assets/js/9.74047379.js",
    "revision": "ff7735ea1374664676418f05699790bb"
  },
  {
    "url": "assets/js/app.ae60d516.js",
    "revision": "bd66d0205ad145733579e0132947ef33"
  },
  {
    "url": "assets/js/vendors~docsearch.b3bc89ee.js",
    "revision": "bc0b74482068bcbcf7f40f3a2b851c80"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "6459e581a1c530b656849cb902fcfcd6"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "aac490def05bb89e5fdbefa37c3f76fc"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "2b2cae876874a568fd68929b1ba7ef45"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "0e3967640b151bcff6e75c6f30b17e81"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "9377319b1ae2e57bc0fd7d2568ccddea"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "d70f12d98a3998401e3d7b16dca8ed7c"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "a029d8740c5cd7a285425d716b74019c"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "2f26022eea0e45e61673de7864de6763"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "0167ad1c92a23b6d2c3d290c0158f4ac"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "c16fb28e2a9bfe553c13bed6cc50de8a"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "fa43f2c7f183896625cdb1cdf893c342"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "c4a76866ce7db976a822d9c35b4436b2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "55d0c610f3bc433a6466e0829f12f6ed"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "4d339c68a6f4121990c9f4813c5957c9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "a6596bca8ce9133e292260d4aa3e8e40"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "2364adee222ed7b00743b50e70ec0651"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "903a1bd8b1238190b940c4759e29d3ad"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "8a6c39234f36368482fc086e6bc3e3b9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "b1011d3a97a3c179047d571f57b66c86"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "5513be93d56b4c1a0a6f28b8acb96cd8"
  },
  {
    "url": "categories/index.html",
    "revision": "bce72c4c9cd51a43762b76ef586bb085"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "952569865e0cb523b1b2eb705f3a2f32"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "793371627b2a1332b6d21e3d66787c55"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "5b7c5b75da674b4e9daad6e5c4b381b3"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "1c4776639daedd266b19d4db58217b18"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "3f1d344fd2b107c3875e1b0ff2ac0fef"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "446445fcdf1f80826ed4b4493e26a2a6"
  },
  {
    "url": "font/iconfont.css",
    "revision": "124d747586fba2e391df543ca9271d3c"
  },
  {
    "url": "font/iconfont.ttf",
    "revision": "c48b3cead48609dc7757df060e8d2076"
  },
  {
    "url": "font/iconfont.woff",
    "revision": "2cf196314c36a13b99486b17f5b25ea5"
  },
  {
    "url": "font/iconfont.woff2",
    "revision": "cc6d447b8a80041317345a1616d2eabd"
  },
  {
    "url": "index.html",
    "revision": "e07444678c2110bfd05d99c0d64c9923"
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
    "revision": "be40518206c51b9c048759f3620bf923"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "b6206bd0525b8b1d84b2d29123bffb06"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "578c5449b63e563e127ef07bd8ad9a18"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "589d60800ea683b871b37b4af5b70652"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "ecc3bdc25fede4077d3c8bc710bc9a72"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "555d53a24a1eab64674af09feb7fe9c4"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "8a039af714e06d2b028875aee6bfac38"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "610dd65eadaae1caf54a52966819f807"
  },
  {
    "url": "tag/index.html",
    "revision": "0675febf7eeea49b89879a8d342149dd"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "854232fa92ee1f46ef04fabfad324af2"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "a7a268880694590cf4b3bac1faa1a5e2"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "73a07f9bb0446c2503465f1f83b04c0a"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "ada4850446dd10095d1ae506c52fbe95"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7c6cfcfd475ba2e3eaf8fb5ae6e70c3c"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "fdb7a0b92812f96cbe736282ec5791ef"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "654ca7d51f0c371de46ed2e7757ae654"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "723f95724ba22acde87294924578cb80"
  },
  {
    "url": "timeline/index.html",
    "revision": "27581a3724c44e1675b9f63451fed4bb"
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
