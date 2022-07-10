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
    "revision": "abef2fda7628779de4438ca249700a0b"
  },
  {
    "url": "about/index.html",
    "revision": "d2cf4e0bbcd21875a5fc43b70caba267"
  },
  {
    "url": "assets/css/0.styles.896264df.css",
    "revision": "be6f2fe5abd865338ee3dbd1903e07b2"
  },
  {
    "url": "assets/js/1.ecea75ca.js",
    "revision": "97aed50b20defd9d18c10f1dd9408b9f"
  },
  {
    "url": "assets/js/10.983a8e3b.js",
    "revision": "e66d995660798edcc627f15ddfbd6890"
  },
  {
    "url": "assets/js/11.5b3408ee.js",
    "revision": "950ceebcedcc6309cf10d1628877f623"
  },
  {
    "url": "assets/js/12.da1ce9e7.js",
    "revision": "b5c135557214547a407546d2a9e48b4f"
  },
  {
    "url": "assets/js/13.c03fa7af.js",
    "revision": "88146ecb811d2f0936be1e57488fa8ce"
  },
  {
    "url": "assets/js/14.bed6cd51.js",
    "revision": "1d3d802787c5029d811623bd40be7c5d"
  },
  {
    "url": "assets/js/15.3d8bfba1.js",
    "revision": "9c06c18bcdd13e9d76cb6d8290e91c7a"
  },
  {
    "url": "assets/js/16.7c2de005.js",
    "revision": "b8b99d3dca45aeee5b16c85ed035529c"
  },
  {
    "url": "assets/js/17.b25159a1.js",
    "revision": "817f5f223fea5013fea21c16e2ab40e7"
  },
  {
    "url": "assets/js/18.cc626919.js",
    "revision": "1589e25cef50c51155d795ef5b39e8a0"
  },
  {
    "url": "assets/js/19.eca9af34.js",
    "revision": "0a9ff85af6c34da404af13f50c117b31"
  },
  {
    "url": "assets/js/2.1efb38c4.js",
    "revision": "af594c2173bf0e3b8e94801b7ef65331"
  },
  {
    "url": "assets/js/20.404ab38e.js",
    "revision": "28804e47bbe72e671595eca8b400bffe"
  },
  {
    "url": "assets/js/21.fb2929c4.js",
    "revision": "9370bcc19b7451311c9dc94cd3bd4811"
  },
  {
    "url": "assets/js/22.a0fd0bf5.js",
    "revision": "3bd72fd9d59731b7fffcfe2feee00324"
  },
  {
    "url": "assets/js/23.077697b2.js",
    "revision": "5c21ea77b199580e510be315a241ad7e"
  },
  {
    "url": "assets/js/24.5aceb63b.js",
    "revision": "6a08e1cdb363b7384fdc14ee1bbd4b36"
  },
  {
    "url": "assets/js/25.6a137930.js",
    "revision": "ba90bee09102a921da4d69e6b77554d3"
  },
  {
    "url": "assets/js/26.258d9834.js",
    "revision": "d32f9d1ea969ca66bfc484ba5a4d0f0a"
  },
  {
    "url": "assets/js/27.bcaef2d7.js",
    "revision": "4752b578398d54a9fb833d0a37af7997"
  },
  {
    "url": "assets/js/28.67e63e0c.js",
    "revision": "d24891672ee831092e0e23b7c3318806"
  },
  {
    "url": "assets/js/29.d88a2e70.js",
    "revision": "0a0d34888483bba77927564c19f3761f"
  },
  {
    "url": "assets/js/3.b6eb2d9b.js",
    "revision": "74eadfd7d469445fb7b89a7a5e0c223c"
  },
  {
    "url": "assets/js/30.00e918c3.js",
    "revision": "447941ddee74aba18198ba58bc6f9d91"
  },
  {
    "url": "assets/js/31.f65ea1d4.js",
    "revision": "a751b57c8a901944ba9d76a0ae92542d"
  },
  {
    "url": "assets/js/32.f0cad74c.js",
    "revision": "7ddf5351a68eab37eb6d8b398ec26fd5"
  },
  {
    "url": "assets/js/33.9eec1153.js",
    "revision": "b2b86430d40db07f07c7f3ba0c61eb5c"
  },
  {
    "url": "assets/js/34.b89065c8.js",
    "revision": "4618d181d6d3eff60b3752c0d884b44c"
  },
  {
    "url": "assets/js/35.dad2b9ab.js",
    "revision": "b335acf3319200a5f94a9eb3d3fabfe7"
  },
  {
    "url": "assets/js/36.c3801270.js",
    "revision": "5c6b2268760426294f0293cac4f81fcc"
  },
  {
    "url": "assets/js/37.c0b1ef64.js",
    "revision": "25bb77e1d433a1aab76863dd411bbdbf"
  },
  {
    "url": "assets/js/38.1d3c3023.js",
    "revision": "51986bfb4edbc2062378a45d1a5ffbaf"
  },
  {
    "url": "assets/js/39.954b4274.js",
    "revision": "deb42260ce805e404cc32adbd170460e"
  },
  {
    "url": "assets/js/40.bc7ca16a.js",
    "revision": "54acc7417c748b81c84e5c7e022dc8a2"
  },
  {
    "url": "assets/js/41.0209665f.js",
    "revision": "f1865231db107de16812f7973e970bb2"
  },
  {
    "url": "assets/js/42.b7f54948.js",
    "revision": "3edf0d140cc35a2e95eab5d8322c32a7"
  },
  {
    "url": "assets/js/5.ed115cc3.js",
    "revision": "1f31a09ea625e769f3164a6f590d4fd4"
  },
  {
    "url": "assets/js/6.43232766.js",
    "revision": "ffef414cb4bcf9a28cb71d114b0d945e"
  },
  {
    "url": "assets/js/7.fae0bf54.js",
    "revision": "2b13b99d297e20925c23fea6aee16186"
  },
  {
    "url": "assets/js/8.08fa27a2.js",
    "revision": "e8a97ff44d42e6fd9e57a2eab12552fa"
  },
  {
    "url": "assets/js/9.124fd123.js",
    "revision": "b3a063ebab5e78df9d145bf61c9cad48"
  },
  {
    "url": "assets/js/app.541a35bb.js",
    "revision": "481010c800694e36f335acf1ca57c74c"
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
    "revision": "a9b2498be7eb28fd08abb28ed590061b"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "24b3b5c8d59cbec87a3b99bdcc73970b"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "06e07398c7df9b327f895f491961cee1"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "24d4025dfe3b97a94a4bb0a661b53aac"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "13c773d490805ffcdc4f6a25048c64cf"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "c96dbf33f32b2646d4ce6ecd7518fa45"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "1e61a369bbb33782c2554614d9b10da0"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "e36f89e50853ab6b58dbfed2e1aac15e"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "91c07fbc080ccf22f0fcd57020245b59"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "426f268ce9872616077aecb542a2be4f"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "697b71e278fbebd8e688a1cf4ac66e34"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "b2adbcb8f5cdf88fb2443ee2533fb566"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "1fe54192d1fc93786d29f1a81a3f279d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "de504286c87506f5c6e686133dabf977"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "746099c03f1bbcac5711adca7a36a724"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "1f53e0241e82a02897e9b243ee221d50"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "85145215e340086faa3247e70ede99eb"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "812ddb82c0c2eb2382366842a2b15349"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "7cd62ff50b8463ef952a2ca81ddc17bd"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "3f3f588e63a9806d0b0f28c27c9d4a75"
  },
  {
    "url": "categories/index.html",
    "revision": "c6844fc92f0b5eecd387c392571c4480"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "eb2aa9f48d67cada794b0b6b9ccf59f1"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8f2e6bee6762172ef5cb78aab2db7990"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "a4a504103928b86c8774d1dcc239b0db"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "5cc26af34d72751eeb49f03f0a39c2a4"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "ec5b662d56f1ba6acf21a54d1f99d625"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "e08187e91cd5738ec5d5b33c94959b61"
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
    "revision": "77cd138912dec9147243b1ab920ca618"
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
    "revision": "59e9a1d6c22581b44030a4ea90cca1e0"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "04ae96bb7854ae3cf2b32f0311e844ad"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "f334983703c2de3f52926374b2f6e345"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "78de6b74558c7eb8cec932b177c9c349"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "752edb1df3a0e3fc7517919017653e08"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "c35dac96038a232151f05d2128895423"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "b1546a406f0d9d5d3d724f6bed78cd15"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "69a05d4b7e97a54febf02be5478aa4ea"
  },
  {
    "url": "tag/index.html",
    "revision": "9104c964260d92467a3c11dc57015d28"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8aa67d257b09eb29adbebdd2304bd278"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "25691c8dac390c666290c83a6dbd2b27"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "1f3512d4038bd12e72f87f3c7b310317"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "cfc345e2a7cbb7558101e083153610ce"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "86a5da24de6205e95a82db5f72935dc9"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "edc7e9aad3506fc318479aa85c00387d"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "fcb2b0aa59688a096cc02b7fbc2c01b3"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "d9b9033d47e78342122450196c0b5780"
  },
  {
    "url": "timeline/index.html",
    "revision": "410e08e4134d092a94eee8a371e7e1ab"
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
