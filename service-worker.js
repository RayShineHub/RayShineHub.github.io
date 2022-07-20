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
    "revision": "ca0889049cb5390f7bca9f158fdfd34c"
  },
  {
    "url": "assets/css/0.styles.13592759.css",
    "revision": "7426d6f16b42916eb64e925a7c135631"
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
    "url": "assets/js/19.4f1a8cdc.js",
    "revision": "c35c7c0a1da86942afaeafab5a02bcf1"
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
    "url": "assets/js/app.93c4e78d.js",
    "revision": "ab2a5d90b4a5b44b0e4473a4f72c2d48"
  },
  {
    "url": "assets/js/vendors~docsearch.7ad93d70.js",
    "revision": "73936cbc1b195ce504b27ad9e7a127fc"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "fb5e69e220da239fbd8eb169ba673211"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "a6eeb343a07fbb138df2a7a867828ed7"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "22a7a3cc07e53421f6ea4e2b6b18582e"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "50c62fa0e3c912130b11ec214c662d99"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "00431fc2e7b2e667cd8f4ab158b56868"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "dd7ab15a528b065450150ea8cc7335b5"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "a45e641ab14231a1d58f2df588282125"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "0e87db44626b6ad9fe60d692681584d6"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "0ff9e2d2a7133a5626a6c6745b79a496"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "02b48772f926ac5296e0607720a8ab65"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "b666a5d70040500cd64ab28b4825a56b"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "510fe894690886a9a337a5b58dcba5e2"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "36d6dd77d745a5a359a8f93599c35438"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "68e5234d04f7a5ce4b6e6aa57b549a88"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "2dda97acd26544291966602ae66f0e04"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "e2062e6d51980ca5a6306179ad274b5d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "797beea1019dc665a381b152d321bcf9"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "a358628a5d54d3f0ad055f2604b38808"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "d8da3dadf222982454744db5fbbc2452"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "a352f50bfca56a9d16184eae4b9dd5e6"
  },
  {
    "url": "categories/index.html",
    "revision": "008813750173c5b996c0c395758cd7c9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "278429991930a111c71598f767eeb696"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "61a2a5277d489b8767bd4880c6bdf27c"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "38fad0c642b02847b60c5775ff89ecc7"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "e78095753161a24997c8da1e7247e9ec"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "0c081fc757ac0db306a74519bf3cda3e"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "b82fe80de1602025256fb7eae27137b5"
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
    "revision": "9fcd06e5f072dc7b01f1f58968b5d13c"
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
    "revision": "4e97c448b2a97a8b84c85b8e9d21dd0e"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "a58156bbccae5cedea79b1d43eb43690"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "aa485bda3d969414feb79d5d815beed3"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "99e2679162a93e46a0394dd29d7ead45"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "b97156966089c7afc072e2b803c2ff87"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "7a66a5c6d513a3496a5e3583f7fdcd25"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "eca4c508da90b6cd26dc57b632729abc"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "60e4d6940780244eed1284c19d004b97"
  },
  {
    "url": "tag/index.html",
    "revision": "5c80128a3766f89ee821ef06516467cb"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "773aae941b179652785d8fbcf39a69ab"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "a56f40e6855d5fae1b21cb80c27d6d89"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "76ca7ce14dd4aef8b252090c6ce430b7"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "fc6249a3b6c393a7b996b4eab7d75979"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7c6d3db7d1e54da2647e571eb0194b77"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "f334a0a6111b6cf2194e4914d6ea752d"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "f0e484d9928ff914c907b7ccd50f190d"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "bebe5b66615791269a6be86f6977258a"
  },
  {
    "url": "timeline/index.html",
    "revision": "1c924258db78508e21e67a08d3441425"
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
