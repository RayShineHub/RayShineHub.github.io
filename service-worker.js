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
    "revision": "20323e1e634452ebdfba3f57c6c52103"
  },
  {
    "url": "assets/css/0.styles.c1da04fd.css",
    "revision": "d09ed5d1093063fd78cc2023f6a7f080"
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
    "url": "assets/js/19.163e2936.js",
    "revision": "d85087ed290e6fa4acbbab52949f4d7c"
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
    "url": "assets/js/7.2e100659.js",
    "revision": "557d4081e06094ed2e2df3f771127b17"
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
    "url": "assets/js/app.08d88edd.js",
    "revision": "23c6daef993f0abb24e27175beeade1c"
  },
  {
    "url": "assets/js/vendors~docsearch.7ad93d70.js",
    "revision": "73936cbc1b195ce504b27ad9e7a127fc"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "9d4d3dcfe3f31d033a15f3012521eac1"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "96304e273837061e161f05b9369768da"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "2ee25cff4b76033094399af39666a738"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "0b41aafd1cbd3b7b78a95d2ffe1a5a00"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "492e86d8123075f5bf31f739a315eec2"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "96f11f9b7947b8857bbdc806c3153cf4"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "f38e9c64916269e5710c34bf2c869148"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "ee4e203c50d239597f9fca0fbd8bb88e"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "4f1da9d35883e29fc58d8ed048a4879e"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "5a2da6d0c645a2650508a0c1549ad25f"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "27a371ba68d11d2aff90b8602f7f9c38"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "ecd1db6c5c39a5f26b76df1ff05c8d15"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "621171f4c9204776751df4f3e7de0257"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "a7a4b177e51a56895ba7fd34a8bef97b"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "b09ea4b775cb6e618dabe8189f2ea8a4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "6169b2fe224ea781595cb802c858d49a"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "a645409336ac886358bd2ec871eba7ac"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "5fe310b5e78a63bdc2e329e16ff1cc0c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "0f99160f083331f6efef39ba47f18e23"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "f170ea5d5f8187bdb840e904d3843be8"
  },
  {
    "url": "categories/index.html",
    "revision": "4250a68e6fc8332dfdb3268d20ec46f9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "033a8088cb3dc606ddb63110b8551c9e"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "1ad7cfc518b1dd7cd56316bcafb8c7ed"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "8148c8065fa2c81ad6cdf4b71607513c"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "7e7cb95c82b342d9f80a124777fc712e"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "3631f4c29d6f8a54e64cf7493001b5af"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "25ef72d484b4c4518febb6bf9c90b7cd"
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
    "revision": "bcaaff026bd856a14469f8f75d984240"
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
    "revision": "54da34d28cfa771290e60425da469fce"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "6f5e01f64144e37679c7eb4548d3a8b7"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "0c3ebabad5d171700f7eb08fca519822"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "6a967b47bd6cea396eadbfbd884d6450"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "04acdf51803cfe85de8c9b413ae34e1c"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "1eb178485dbeeb5b7c9685f513b368c0"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "ab10636c05f6d1eb3539ee4169abd9a5"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "97a5899dc7019fe392ea70c6674b6379"
  },
  {
    "url": "tag/index.html",
    "revision": "d7b25cae900e5cc5cec27cac3aeb7446"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b8d1c0bc4860a7b383abdf702dbc0cce"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "125a0643bf9b567a210759c7e8e9c9f2"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "f3a28bf5a3ed34d52664653310274534"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "c3806f8d2e7e8b03f748fcc0f8ed1022"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4f5ac16ac990770dbfa99c1c6610adfb"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "5eda472a6f741464eb33e167ec117196"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "2ee7c8e9008155e28668c5f70666bc59"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "6b29234c2c083666ead54b685adfbeab"
  },
  {
    "url": "timeline/index.html",
    "revision": "1356e34222e3f56eae914ce060ba4806"
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
