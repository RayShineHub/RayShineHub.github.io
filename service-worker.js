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
    "revision": "ed8aefad0c3d6d2aa588fe47e0196412"
  },
  {
    "url": "about/index.html",
    "revision": "2dbd89a9cc10c9d338de1948b1745e51"
  },
  {
    "url": "assets/css/0.styles.f465098a.css",
    "revision": "4a6b97214372c61e329d49831ecf8a9b"
  },
  {
    "url": "assets/js/1.a924c300.js",
    "revision": "6e24157c9b2a23f257e02895d5ccd4d1"
  },
  {
    "url": "assets/js/10.0bcbdbc6.js",
    "revision": "5f1fbb7cbb989fc6fceaa9c664355409"
  },
  {
    "url": "assets/js/11.96f21109.js",
    "revision": "171c31ed2a779f0de802a03cd557bf3d"
  },
  {
    "url": "assets/js/12.f4f67232.js",
    "revision": "ca837c460f18296c787d95b314b53d2f"
  },
  {
    "url": "assets/js/13.d941321d.js",
    "revision": "61313d9dc7cf9a3178ee9a54b7f82e1a"
  },
  {
    "url": "assets/js/14.501fdf19.js",
    "revision": "b1adbb565c80e78cbf32d8622c031048"
  },
  {
    "url": "assets/js/15.80edbcaa.js",
    "revision": "76eb3e28a0bf89ea6d257d76c5e70d6e"
  },
  {
    "url": "assets/js/16.ad5a3ef3.js",
    "revision": "eacf37daeb4278074871e92ddfe9cea6"
  },
  {
    "url": "assets/js/17.709a4118.js",
    "revision": "4d2ac47cca9e23193e79c2d5b718f959"
  },
  {
    "url": "assets/js/18.c4b287ea.js",
    "revision": "e749b5caa56847461c625f7d58789cd8"
  },
  {
    "url": "assets/js/19.da0c5857.js",
    "revision": "aa37f11ef9b0add43c9bbc93594126cb"
  },
  {
    "url": "assets/js/2.b81a5181.js",
    "revision": "8bd8c2eafefc05ca6350d60377762bc4"
  },
  {
    "url": "assets/js/20.45378042.js",
    "revision": "8e8758440eeeebb063c3b2970a0abb01"
  },
  {
    "url": "assets/js/21.6ccdbeff.js",
    "revision": "00dd20e0fa9dc76e58b6ab59fc097fdf"
  },
  {
    "url": "assets/js/22.612300cf.js",
    "revision": "1aed3523cdde8164631924fdba485f67"
  },
  {
    "url": "assets/js/23.4faa05be.js",
    "revision": "d03ee1a3d9707675c9053c2dbccdbec9"
  },
  {
    "url": "assets/js/24.9f061eff.js",
    "revision": "ceebd46f1b93780185c59c407850dea0"
  },
  {
    "url": "assets/js/25.cd1f8d35.js",
    "revision": "307e1d21211e21f51301bcc68817cf51"
  },
  {
    "url": "assets/js/26.be8c46cb.js",
    "revision": "aa753a61509f8b7555b7da7bfefea76e"
  },
  {
    "url": "assets/js/27.94f50ded.js",
    "revision": "9780d690d4702fecbaac2ca19e2af8b3"
  },
  {
    "url": "assets/js/28.f3759078.js",
    "revision": "55b6d277b7fcef9bb98a15367c6a74bd"
  },
  {
    "url": "assets/js/29.835f2658.js",
    "revision": "60458c6fa715a8207299471642a0313b"
  },
  {
    "url": "assets/js/3.05fa3fc6.js",
    "revision": "26905bf48a84a040175f6383b6845aa0"
  },
  {
    "url": "assets/js/30.17908821.js",
    "revision": "4b641a2d91bcba5f7d8ddd733563cfcc"
  },
  {
    "url": "assets/js/31.d9ac0add.js",
    "revision": "7222e33cdc0ca469d2e5fe92b2eff160"
  },
  {
    "url": "assets/js/32.28bab645.js",
    "revision": "6f87d1bcc78a9d83a779428048fd7dc8"
  },
  {
    "url": "assets/js/33.e4d11a40.js",
    "revision": "b36794a18465e272455df885c2aa860a"
  },
  {
    "url": "assets/js/34.198d2072.js",
    "revision": "e7be8dc38d0be678366653dfd98792bd"
  },
  {
    "url": "assets/js/35.84ea54a1.js",
    "revision": "d8a962682c20a0dfd2f1a10dacfcbeb5"
  },
  {
    "url": "assets/js/6.c806db23.js",
    "revision": "57b37912640e052da66fdf141347cd68"
  },
  {
    "url": "assets/js/7.444cc600.js",
    "revision": "d8aee69f8d67eef88400b9e10c8cc11d"
  },
  {
    "url": "assets/js/8.6ae1298e.js",
    "revision": "01420b1ad63308ace2f0cea93289b3a6"
  },
  {
    "url": "assets/js/9.de1dcfdb.js",
    "revision": "ef743a75dbd285d5795b85f617307169"
  },
  {
    "url": "assets/js/app.dde2e819.js",
    "revision": "98949a27689bb79496c3de1e580d4fe1"
  },
  {
    "url": "assets/js/vendors~docsearch.bab3c832.js",
    "revision": "a96d04b1db284919b5e259a9519203ec"
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
    "revision": "dcc2dce502c59529dffac3f2006cec87"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "47ccc76f6ffae38714ccb753a21b4779"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "f077f72b4fc6391d8b9ab7e23224ea3b"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "30cded9e41114152e8f9303597133187"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "9c8ed4d20209ba94394dd05a66b2b823"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "cc68e55b58829af8dc3d8f2a61583511"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "8386fe07eff9c1e20010d8b3b010369c"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "257cf0bac3928ce395d535a0e127f945"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "a15dcc7714f2403c3d7700f13858840f"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "6ae6de75b9ab285204dc23cd265b01a9"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "ef79354a1732a3ccd5cfc2f4cd162f47"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "b1e6958989772200e06ffc80897ad1fc"
  },
  {
    "url": "categories/index.html",
    "revision": "0049788a0f23f2f5aad6c4d193f325d3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cf0590d52a8051c538c2a235279cb9f4"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "4670e8afc7b10bb569a760fb04bacf43"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "9155f47b4efd967f20fe92b27a163398"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "a57822342bd3c14728c10354a4435764"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "8ed80c3a810578ee1f1579f5b0848ed1"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "f87f1da834f020f0894821009f99881f"
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
    "revision": "7be342ade1b901c2f3a3f558d3f83848"
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
    "revision": "b3412bec8ef700dc29f2c6ae409a46ac"
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
    "revision": "9f6644e294d172256bc86384e61be14e"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "e47461e9ec4175b7cd4231b57796529b"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "256d545e06cd58354fbd37c4cada3ad5"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "8031ebfe4a3c98060b60c5540f9309af"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "792eaeb7700d97baf747e4e063714d82"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "972bc2c0a0f87cb26fd974e29ee8150e"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "c15a563bf452c9a5d94c7543147834e8"
  },
  {
    "url": "tag/index.html",
    "revision": "46866597910236a85dd0943c50f26dd2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "e98731df62fb9689256aaf03b27c2398"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "4374f169f964df981f35395740ce83d2"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "6efef06059a9b5544072de5f7eaa0b4b"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "728c5e05a5f9cfae20e527a9282ca5d4"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "55f32925416bfe0569bf3e791a4dba74"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "cd4db825dd0cc450f1a46ee0f897f2b4"
  },
  {
    "url": "timeline/index.html",
    "revision": "b4cb4dad5211a526fc83da201ac796a3"
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
