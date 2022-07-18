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
    "revision": "0b18be8ddd36215da500b99bcef19cda"
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
    "url": "assets/js/19.c2f8af84.js",
    "revision": "1e1afe50c94bec73bfa6e16bd1657f81"
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
    "url": "assets/js/app.2ebe117d.js",
    "revision": "168fee3b75ee2626b2c10ec011dca639"
  },
  {
    "url": "assets/js/vendors~docsearch.b3bc89ee.js",
    "revision": "bc0b74482068bcbcf7f40f3a2b851c80"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "de85ee8a61878136c560d9270f03ce45"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "2101d0a2c06f93b282e1f3e8bfdb36f3"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "187dde6a97418ba652d6edcfce117194"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "1d7e3ffdcc4a1e29cccd68fc20181e9a"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "aafb514ead6fcf4f576156f85be7bc92"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "8adef8464fc07685ff7af77b6867b8f7"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "376684a26818316ff63874b4db614e1e"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "3c95a4f50c85a15a2eb1bf437d4e4205"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "330c2bbfd6a0cab7838a5f1fc94584eb"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "9ba5e6cc3bc24d872c61d47c42af277d"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "3353bec66592672ff5ea855556c11eb0"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "34bb3733a1f3fd6227df8c3a1fe53f28"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "50908905948b7eb58982953e5f330a4f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "360bcedfb59fe766d7c024c72dc20006"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "98a8d2e64ef63b69057c116e0349fd4f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "c7ae40d07809696b9f1d6a444493152b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "716afd2db2f34b4740b7a8997fb4d78d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "a3245a7d9fa1ece3081dc2e1ace3f390"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "710696564758fb52628c59d1d144daa8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "432c21a5ba84071715aeca580ce64b64"
  },
  {
    "url": "categories/index.html",
    "revision": "5ba4b8fdd34d92ce7e166289613ea492"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6b57f99bfab32f8805c3700e88b9cbe3"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "22a00461ba87c5d552771129f2cbd592"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "47ee0e867e40415be6e27b1473ffb91d"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "e1e06b8d8ab71e0c77dba2a74877cec1"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "a409b718f8df5d354c4d11a7e536018c"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "0268024a1f7f9b5c20e9e2e13e371ef6"
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
    "revision": "a45ae3ff0356b7196533a4483d857ece"
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
    "revision": "483b13aa5f59f73faabb392062780c56"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "421db9d002b8f97115050c65bcb7295a"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "8ea38615a70777122e2837d2de0f16c9"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c33abac1c56363b9e2a92c0dc7db46b2"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "9aaf64f01ade09078073715a9aa7ef21"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "f46270df4f4e8c39d4fbddedb8d510c7"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "6a74aae6b6ae6d137e2c89f004179ae9"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "35a852c07b241211f81da4816b11c852"
  },
  {
    "url": "tag/index.html",
    "revision": "f4f9f2e2e99f587d875d4116e578ebc1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1ecbf92886a6ef6d749511a5059e4a72"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "6ceab7a8143fa7d6e56c83e7f5689fa9"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "c9187525720a924ca470bf5db161e09e"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "73a4dd3abd276cc60d822b80a22588aa"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f5b7891148035b872575e23a177b4d4b"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "4bd05ca1f3033f91a416dd7dfdab8266"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a7db50f18362e990021e1084bfc92dce"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "2ada6d9cc359c1e3f2e7e74ee104aa31"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc648e1706fdaa6c9b7b3540e661fb6b"
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
