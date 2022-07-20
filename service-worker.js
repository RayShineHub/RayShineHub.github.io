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
    "revision": "ed365298f0e696fa2b1efc4350f678f9"
  },
  {
    "url": "assets/css/0.styles.a3ef7604.css",
    "revision": "0b6091c3b45207f9cdbb9f00c19b7446"
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
    "url": "assets/js/14.712e3f3c.js",
    "revision": "6c7f9d5456c2851089a5318ba89a4f16"
  },
  {
    "url": "assets/js/15.45c3d7cd.js",
    "revision": "f18984a9ea6bc9311c2599417c2a9f86"
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
    "url": "assets/js/18.6a735194.js",
    "revision": "be3caf8c454d5f9d139ec53fd5064d5f"
  },
  {
    "url": "assets/js/19.2d1f80fa.js",
    "revision": "8fc8bdf18b34620853550a1bff579198"
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
    "url": "assets/js/23.3bde3315.js",
    "revision": "2090d8c8e83cece3a220d32b8c9e2f32"
  },
  {
    "url": "assets/js/24.9f049b7d.js",
    "revision": "18f795ae20ddc07c9b14d3164e64f3c2"
  },
  {
    "url": "assets/js/25.08d02d0f.js",
    "revision": "27e653f389647280a565eb06103f8cc7"
  },
  {
    "url": "assets/js/26.ed9af0dd.js",
    "revision": "53034e8b59b5e99cdf4339a5e46b2787"
  },
  {
    "url": "assets/js/27.4e4bfdb5.js",
    "revision": "24b8e93726e1af5bc17006636d033967"
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
    "url": "assets/js/5.f20b6532.js",
    "revision": "68f1e40e879cc2ee4b5ae3a4aaa26a35"
  },
  {
    "url": "assets/js/6.0a3c2fca.js",
    "revision": "a3cc1adb18747e66cde422950f272942"
  },
  {
    "url": "assets/js/7.419f843b.js",
    "revision": "b5ef7f8c3a75091f111a70815ec821e8"
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
    "url": "assets/js/app.176bf804.js",
    "revision": "b3eed11aceeaf43f49787b74542bf86c"
  },
  {
    "url": "assets/js/vendors~docsearch.7ad93d70.js",
    "revision": "73936cbc1b195ce504b27ad9e7a127fc"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "0a34988d9176f686038b782cd1e0b3d4"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "dea8e653de7ed92648139c7b1dc0708d"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "944b7d6b0dd2245f96dad547646aca31"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "d4be53457733181eebef61b6be366817"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "92be334dd38d5338b4e1204c907a3d1e"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "dfe02d76fa742e0b29659da613b0e388"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "087643579b36fcf6540f152da9a4571a"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "7e000a227f54e6504cd813232bafbd15"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "103c9ffd62c18ad625a8cd09b4c5105f"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "655503b29ce36a995b6a7850b3e34bdf"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "bb38114a36b4e941bc74fe8dbde9a8af"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "d3e18e6a4c8eba672044d946c47a6602"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "42753122c06bf82f7941ef43367ccbe4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "2477bb7aae496f0c366b4122102cc86c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "a2535897000350dae641bfbd3ffe9a2a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "3550925f333cc54d7873f56274c254d8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "36c9a76628d3a1d80c8ab71d6a995c36"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "164cbdfe6aa19b53873248212802b703"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "904840833f1a00e5cc4ef84309451bd0"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "75e8f2dd11683253885462051b2cac0d"
  },
  {
    "url": "categories/index.html",
    "revision": "853be746691d49be97abc1776e7e8449"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "85d1fce133cdc6e29885c8ce5f2870ee"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8f37abe1de6e059ebda6038bc0b40334"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "4aecd6f83a8db7f0744f16f6464dc3e1"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "8c2691077f90b630fae2e87debcb7909"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "8405000489e98957eb2f9d9fecc0beb4"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "3f2b48a683dd7e6870bb9275f62d66ff"
  },
  {
    "url": "font/iconfont.css",
    "revision": "fbe154d40d451c5699b6a322a52cb2c1"
  },
  {
    "url": "font/iconfont.ttf",
    "revision": "fac25803286301006782c42dfe4bd1b1"
  },
  {
    "url": "font/iconfont.woff",
    "revision": "288a1d9acce42e06855a07113edfc0dc"
  },
  {
    "url": "font/iconfont.woff2",
    "revision": "f972024eafcf8a93825add79f099d76c"
  },
  {
    "url": "index.html",
    "revision": "67bd38607971c6abe59abb0984424242"
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
    "revision": "feb96c910615ddd6cb49192e800ea59f"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "9850e2a3034ea33a53879d0e6666ffe5"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "edae9a30eda47c00ea316b722fc6a9d2"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "4748e475b84f0c9bfa87f08d268a8a8e"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "b8c6cabeea3e820888f3a43bb47fc7fe"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "80f0964691d5461113327ced050d9ff7"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "92baa1a3b79387cfdb80719fd6fbf9ed"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "3dfa6015cd93d513e6826a11e741e8ae"
  },
  {
    "url": "tag/index.html",
    "revision": "cc3d1c9b8c032644b67dae210641eb85"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "e8c791e64a044e774fbf08066a01310a"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "889f6837b9ab847c649b170ba92c749e"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "973ce2dd7ea09423536ff9e7ed2238be"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "4e91bfbf7bc83665fb99a4b9b2e47a54"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e6c5519566451e71999b7af68001e3f1"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "12c038e386c74efed14455807ec30843"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "ce117c89afc1af93ea5ee73ca7b3fbb5"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "1079335b69f8e623d6e026a76c494c7f"
  },
  {
    "url": "timeline/index.html",
    "revision": "8905a206665cafa4d69abb2d8c76c4aa"
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
