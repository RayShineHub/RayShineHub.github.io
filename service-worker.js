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
    "revision": "9752abeb6c8727eccb454f6afdaf5a97"
  },
  {
    "url": "about/index.html",
    "revision": "5dd7d66025138d83978d613abb343ea4"
  },
  {
    "url": "assets/css/0.styles.1f34a9dc.css",
    "revision": "7c376ec1536e7bc6c4d252f9aefcc494"
  },
  {
    "url": "assets/js/1.66f3ac4d.js",
    "revision": "f9f9729ba76ebebff9a72ed4878bfd58"
  },
  {
    "url": "assets/js/10.5141241e.js",
    "revision": "ee77a7879b789a63e856a8e3ffa63ee1"
  },
  {
    "url": "assets/js/11.db507b84.js",
    "revision": "6d38e628c4d8bcea527e73b96213aadc"
  },
  {
    "url": "assets/js/12.93e756de.js",
    "revision": "5b09ae5b342a2bd5b2572430ea718ae5"
  },
  {
    "url": "assets/js/13.824fab2e.js",
    "revision": "57a8b61b404cacd7fb1309543bcafdba"
  },
  {
    "url": "assets/js/14.e0570045.js",
    "revision": "fe25cfaccafdffe46cc97d35d2997ce4"
  },
  {
    "url": "assets/js/15.00d0bb60.js",
    "revision": "38747d74b86fd458c2c9dcd93769a284"
  },
  {
    "url": "assets/js/16.c8c0f62a.js",
    "revision": "454b630515b5a1719df4d39dbfb44d00"
  },
  {
    "url": "assets/js/17.1452a57b.js",
    "revision": "c130fca016b5ad9b0797d54ad970fd84"
  },
  {
    "url": "assets/js/18.e3b02b36.js",
    "revision": "c7a335e1f330751f38cdcff4926a6471"
  },
  {
    "url": "assets/js/19.a5aa770b.js",
    "revision": "28f857a3b240fb6d11c19ec09ec160ae"
  },
  {
    "url": "assets/js/2.fd9227c0.js",
    "revision": "847b6fe1ddecff47486296789f191047"
  },
  {
    "url": "assets/js/20.74317fbb.js",
    "revision": "862451a996551e846972dec982cf322e"
  },
  {
    "url": "assets/js/21.e40043e6.js",
    "revision": "0ff4dfc0689065e128a849804ce0f0ad"
  },
  {
    "url": "assets/js/22.f509744f.js",
    "revision": "52e17824a9ca36866e06beffe3c417de"
  },
  {
    "url": "assets/js/23.c72104ed.js",
    "revision": "c65ab3604ed5ef59138fbc196bfb55cc"
  },
  {
    "url": "assets/js/24.db9f0c62.js",
    "revision": "23ef7653172737f7cb34f76a1258fbab"
  },
  {
    "url": "assets/js/25.dc4cd0c9.js",
    "revision": "6982a1a4b2bc5922953eea404b90d6fe"
  },
  {
    "url": "assets/js/26.e7773971.js",
    "revision": "207095ee638e526841e34466a84378a8"
  },
  {
    "url": "assets/js/27.aab5816e.js",
    "revision": "9b2af1ea15abd1a93651de017420a0b0"
  },
  {
    "url": "assets/js/28.2597744e.js",
    "revision": "dcd34b343b9a993c006a08a675b49d87"
  },
  {
    "url": "assets/js/29.82d15be5.js",
    "revision": "373fb24d5b25ce3860dec2c4f756acdb"
  },
  {
    "url": "assets/js/3.3b277e05.js",
    "revision": "630a1849893b28a34cc57049884ca265"
  },
  {
    "url": "assets/js/30.5f6b873e.js",
    "revision": "dfad28eb10e8b5a0d45554541fe44905"
  },
  {
    "url": "assets/js/31.a9b03e42.js",
    "revision": "b7f943faf8a7e19227aa55c42c5a48d6"
  },
  {
    "url": "assets/js/32.ca3027b6.js",
    "revision": "65afdd76ea2a6612ac6e9b67dd6ceab8"
  },
  {
    "url": "assets/js/33.dd0bbaf2.js",
    "revision": "bf09d5ea07f2e6cfcaebcaa214207dda"
  },
  {
    "url": "assets/js/34.7fab1a06.js",
    "revision": "00bcaccf287d3cd6b403d1220df07082"
  },
  {
    "url": "assets/js/35.274caac2.js",
    "revision": "8dfa4d27e3356de9a797aa6c2b0dfbad"
  },
  {
    "url": "assets/js/36.e4036268.js",
    "revision": "ee56ebc4992731f6d26f7417fc2329f8"
  },
  {
    "url": "assets/js/37.5f3cf829.js",
    "revision": "f1da5445079a3cfd9363acb3b5e538a3"
  },
  {
    "url": "assets/js/38.b1689928.js",
    "revision": "697d473fdbc55fe52cd9e77344cb1dec"
  },
  {
    "url": "assets/js/39.f034e984.js",
    "revision": "407f41aa2b8deb178df7f22422a7401b"
  },
  {
    "url": "assets/js/40.994da670.js",
    "revision": "d167c482369a13f5487942fd4f21671f"
  },
  {
    "url": "assets/js/41.a0d3705c.js",
    "revision": "fdc99d62c0d94bea467739ff4137db97"
  },
  {
    "url": "assets/js/42.e4321575.js",
    "revision": "47e120662eacf23c19ef2d64b0ca9911"
  },
  {
    "url": "assets/js/43.5acadbaf.js",
    "revision": "892f2f41ef61641fc94da53acaa9a612"
  },
  {
    "url": "assets/js/5.c6df0148.js",
    "revision": "b0272baf55a3b037422f07eff8dadd18"
  },
  {
    "url": "assets/js/6.03d4a561.js",
    "revision": "ff3b9787d9eefb6ce02c4fe5fc7fb50e"
  },
  {
    "url": "assets/js/7.03155dc8.js",
    "revision": "3324c09b0eb4af829ff1271ad41421b1"
  },
  {
    "url": "assets/js/8.b46d8243.js",
    "revision": "3245ef140c7172b1c05d2ecd80f7bf2a"
  },
  {
    "url": "assets/js/9.3da6a55f.js",
    "revision": "deb4299db6ca386474ccb17f30c6a802"
  },
  {
    "url": "assets/js/app.ad3c5e41.js",
    "revision": "8e30bd1825705d527800c039ca472948"
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
    "revision": "c6dce38231bee5325a5492c6119a245a"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "747d22ea781a4c2dfcc9db3f01f059b2"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "782fd2860d1bb8ee56f117c8afcbcf8d"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "06efa18a8810621ccd2fc85349e7e493"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "ae9e876b4a2a0bd385be4321e239ccf7"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "dd3e9d58a3bb39f0e99081654a208234"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "0e8788a43c2f99d23424ff20ec35b661"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "94377b96a3c0b907ed6289f91a239f33"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "8229ccca36fc9ab13cce197372b960b0"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "eafb9e1bcaa848beb53ff063d5140730"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "86397bb0b37a51abcd4544c476cd4431"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "a34dd006238dc8700ca9271fd0bcb632"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "ab4fc9804ffa9fd273209c246051bf97"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "2ca689fef91875a6c01978a21305dafa"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "d724bdad6ef3fcbbfa685ba56429ea24"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "22999cc9db848cdccaf1b7ca259a67ec"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "6008d7d6ed78cbe044c4594420d1b00d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "6713b1db47c6986e9effadb724d10ff7"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "ebba96af602cc0c44b81ba6e0333d909"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "df49de78ba012ea86f0bdfd6eab4e249"
  },
  {
    "url": "categories/index.html",
    "revision": "a241bd787507f78445c3d72b37e4c2a9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1d97126f57c26c36ae0ff73ddcb9bf26"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "2700c9bea28c62651b17e1d33e63f18d"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "000bc6ba05998b556933e485d6b8aaea"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "518113b7eedbf8074287c096d0a4abcc"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "dc8e460bc5451aa92d587c1f3e3ce86f"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "1640bcf086b89d552657a324e3bea62f"
  },
  {
    "url": "cus-icon-font/iconfont.css",
    "revision": "124d747586fba2e391df543ca9271d3c"
  },
  {
    "url": "cus-icon-font/iconfont.ttf",
    "revision": "c48b3cead48609dc7757df060e8d2076"
  },
  {
    "url": "cus-icon-font/iconfont.woff",
    "revision": "2cf196314c36a13b99486b17f5b25ea5"
  },
  {
    "url": "cus-icon-font/iconfont.woff2",
    "revision": "cc6d447b8a80041317345a1616d2eabd"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "fa779b654c91964a54f4dbb7f6c65708"
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
    "revision": "f273127f75a5f2c180dee5fd84499d70"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "cca55c3f4e8f28a65e56f5408e13e913"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "230ccab84dcfeda8cf4f68423c8d45c4"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "dd1f52bae5ba507223b2cb5b8a1cf6dd"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "89902e7d4e48ff283ef850e91bc59b64"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "7b03bd8fb47d20254e53ed1c3630a63b"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "c7b96a2fc5f48956073463bfb00367a1"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "78ab522a12dc6f028b0de66787b613bc"
  },
  {
    "url": "tag/index.html",
    "revision": "45c482d2937800e28f881b01036852bf"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "40eed695254acef1d14ad7ad49a4ad6c"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "c9dd2750a6b47872ee1b2f9434404483"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "e350eefe205dbb329a55659487d93ede"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "0fec2fca8ab33e81dde735475e6ba7a4"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "04ec649751c8ee3e563b8822a6403a7b"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "2a0b56952af3737bf2a4da59d4b2d6d7"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a36d065296c11e2e4693305bb7a0ca03"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "dbe8aa86ddda58d11ed3ac7a664d1e6c"
  },
  {
    "url": "timeline/index.html",
    "revision": "15d6e24dad5fbab00c393b2db61e662e"
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
