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
    "revision": "9a30ec67d546a27a6e4400b1cffd1353"
  },
  {
    "url": "assets/css/0.styles.141e95e7.css",
    "revision": "8bae6b4e1c59f88c6cbcf4d820e9f3ab"
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
    "url": "assets/js/19.81090d21.js",
    "revision": "e13ff43e8cf6ec429118361e83b77399"
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
    "url": "assets/js/5.f3274fa0.js",
    "revision": "aac4eaeb67c4ef6547151d35c3c98013"
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
    "url": "assets/js/app.c5cf43b3.js",
    "revision": "eeda5234a5470dae91ef4507e88e26aa"
  },
  {
    "url": "assets/js/vendors~docsearch.7ad93d70.js",
    "revision": "73936cbc1b195ce504b27ad9e7a127fc"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "1ff613a3e3c5672818b54b818e3fe487"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "39568c5f87b08c0a0ee19cb89bfed8d6"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "79d47a45f2d4cde0279b16faa088f89f"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "299028123ed0a5618998ec387053b548"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "0ad81b31d9ef34f0f3e744944868244b"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "9759e4c38e58775ba06d431393e2feea"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "0a1110c1edfc84dbf36c06879b652732"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "f83f95cdc4e4c2106539fe998b344018"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "1c7b0166aa2b4306c6ae5102cf051592"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "5aaca1460686ed75c9bd63773bd109fd"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "fbc8add65f017acc095f6985cb938fa0"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "34f0178f626b82b65b79e940b6e697ad"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "452321a17074a04479860877f6934b8b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "0fbecdca24a369f9312975a23f39b4b8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "9cfe2e2ce5b8ac1b6be188b43cf8277c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "9d5ce09fff5c8205faa6d6f90df2d870"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "56ffe0d84dacec34df50570c0acf678f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "70bc2f7b36361a6410ff4a311b9454be"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "8064622b801da3dca7088fe13be26407"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "3e8a679250130c6a5b62db2e1a1ad2a5"
  },
  {
    "url": "categories/index.html",
    "revision": "3676d34e10fba7b219f9440d514b3fb7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d45de10ce0b92af1ca69cdb0eb351589"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "c4047600b473163f9500a07d327f7e24"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "cdd64fd5806c8eef9b9850aaed100779"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "1b208eb1f1ca38d0cac78b7e33ad0093"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "c4ad9149f5f58bc41366a0e0e9f22a5b"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "3cee0d982ea261204f10852202a779c2"
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
    "revision": "53afd8086491934cc41bb328d330926a"
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
    "revision": "dc3ba8bc962336c2929e9dd16c44b57a"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "9943245ed19c4e0585ec1b67c7d29b23"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "51a2fccc10ff09654df14c1d9568c7c2"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "4646387e6b1e081d0bbeef73aafb90b5"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "3661a6d957ddd6a35c77308ccc28a866"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "4512f28590a7ae040622ff7f9a917389"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "21f98b36aec00768528200a735d2b3d8"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "1c4b5f00883d037d11368032d7023924"
  },
  {
    "url": "tag/index.html",
    "revision": "da7dfbb33fb210e23f5a708b96ae92db"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "47d76f07307672282bba7d3b6145e76c"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "2c0f58bdcc66be576c7b771f8bd4fd34"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "5f2e94cf58730211fd033fbebdf51ad1"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "326585b4c651f6b96d430f69c0697523"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a4ae0aa941f8aa89101c0f777ad2b170"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "6e151feae1b5c4245c6a553160cf6800"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "5794a92973ba797b0dce26a4f58d90ec"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "c75362c55c1182b2cbc240213c48d0ec"
  },
  {
    "url": "timeline/index.html",
    "revision": "39986a1f7ffe40c0dfa833acab4143ac"
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
