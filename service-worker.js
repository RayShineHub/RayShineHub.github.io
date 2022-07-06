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
    "revision": "4f151df037d5da9d6f332f319eec008e"
  },
  {
    "url": "about/index.html",
    "revision": "679524ff4aea00aca527059bfeb1d0ab"
  },
  {
    "url": "assets/css/0.styles.0c577a22.css",
    "revision": "3b666a5008e8dcc3967865e633f8fd7e"
  },
  {
    "url": "assets/js/1.05fe673c.js",
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
    "url": "assets/js/16.8b020820.js",
    "revision": "bc73713dbe07db7aa52565d1c5e1ceec"
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
    "url": "assets/js/36.cf908375.js",
    "revision": "4433f587a2a19f63cd0d9dfb39993ec1"
  },
  {
    "url": "assets/js/37.e21673f6.js",
    "revision": "fcc27d3000944ee3b56959b068b168c0"
  },
  {
    "url": "assets/js/38.664e7171.js",
    "revision": "890b8830d25951000d134a7f15722058"
  },
  {
    "url": "assets/js/39.dd59b01d.js",
    "revision": "dd473f78fda31189d3d899ac2a0bfef6"
  },
  {
    "url": "assets/js/4.b2e70b1a.js",
    "revision": "32a9035d730ccb9b4b73ebea31c25613"
  },
  {
    "url": "assets/js/40.920b4452.js",
    "revision": "0a030a033115b2420aa087d653f9acac"
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
    "url": "assets/js/app.e97f6734.js",
    "revision": "07a0c981e053a8259f85ddba6cb02a89"
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
    "revision": "81c365cbebaf63776e7e93b5cbb34627"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "4469e692da5e1fd83df0832299f66868"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "a0f80dd1d85ba0abba65c6428fd92ebd"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "065ecab58033c638c96ac7867ee54be5"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "8d4091386c2fd32cab1b3aec1f51988c"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "dbf21a1720de5b901ee79155d4fea2de"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "b804d4666c0893090a4146d773c54365"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "0c9e76bd9eb56124d57337c9c90e18a2"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "27959a855c45cf2d6f2d03bdcc8f7b89"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "ff92ff812e6201f55bf83a1176110651"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "a85af9d53d312cec0ecd38d5ec1482be"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "ec71e44849c48f4f0fa83683a654a7ee"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "145889c1a3969dea48c23819d607bc86"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "76122715c095cf6046188186b085b1db"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "8fe4cacdcbf8559597c3337af22108ca"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "8316cc2addef13cec40faf7d09e06a35"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "6e3941017d592bc2f74af7b7228cc9f4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "197f9fdad82f72996c139dd4101861cf"
  },
  {
    "url": "categories/index.html",
    "revision": "7db6950c57ba3c74d8a3f6d039aee690"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "03cad8975cb936b049ea55611bb9d50d"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "dd92131e7c1515a8b319e883447c1317"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "e7fb697df5122518e1b7f34b1b2ad01e"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "eb4858dab6acf1839f6fa953b4a750ba"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "82ed21e22d2ed1363dadd41c0d9c1f84"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "f0e8daeeed66dac299ba1e48d2bcbfe9"
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
    "revision": "27c55aa7833ec988a0305a8e22aff9e8"
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
    "revision": "42f615467cd9d805f08cea89fbccb89b"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "92f6ac67351ef3fe7bd189116c829c91"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "95e84613593a4a70e94e3aba77df21f4"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "0a778e0862aa5a1982e9416bb63c212c"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "9b407d207091009a4b492bae752de05d"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "a85499e9f4789c3aceb1ecb5db04fe4a"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "8a7ec7c713639c0616e7133be3f9117b"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "b20a8c04077bf6dfc5964553dd8b5a95"
  },
  {
    "url": "tag/index.html",
    "revision": "0bb18b2e138dbd8eed3fcf3e04b40099"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3bfc75fad8e01db70455fe7fae818473"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "1719c868e311aca5f2e4d3cf4a33202b"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "6374892699706176ca2d878b5391fd67"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "95b4c59331c84b0228eaaa367b2fa88c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d67ea8527f3fe944f2633fc4fcec155b"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "9e1ad0413249dd7a76695991992e4cf9"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "9a62927b43355fa3fd52b14e00df87e5"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "76d57b6a6a33ec674c22908ad7fad003"
  },
  {
    "url": "timeline/index.html",
    "revision": "898c8148ed6f5a3408e4191bc66b9063"
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
