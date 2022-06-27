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
    "revision": "ae75c003f862992dcc59b51740ce0494"
  },
  {
    "url": "about/index.html",
    "revision": "38cd42ebf6b0efc91e1b891f2fb457bf"
  },
  {
    "url": "assets/css/0.styles.369d5175.css",
    "revision": "d220a309edf7acd4ee0cb400d8ce18d4"
  },
  {
    "url": "assets/js/1.50ae3d57.js",
    "revision": "1f0a76695d87157a3a7e4108b0d3ea5c"
  },
  {
    "url": "assets/js/10.363ace9e.js",
    "revision": "37221922088c38b9f1046de06731b530"
  },
  {
    "url": "assets/js/11.de73ee89.js",
    "revision": "7563b8d643c0fd2961525aeb21590e41"
  },
  {
    "url": "assets/js/12.2ffddf05.js",
    "revision": "7760acc4565b7cd179b66fc47ace5e74"
  },
  {
    "url": "assets/js/13.cef7ded5.js",
    "revision": "b4395dbf0da552e8aaa0184e082ec2c6"
  },
  {
    "url": "assets/js/14.54fcd106.js",
    "revision": "5f363093198bfd9bbd27689ed78527b3"
  },
  {
    "url": "assets/js/15.8f4646f5.js",
    "revision": "d23f55aed0db8e4e15fb9f9bd85cff3a"
  },
  {
    "url": "assets/js/16.51e7d5ca.js",
    "revision": "8a552fb5b4de9362e5fb24c55680f435"
  },
  {
    "url": "assets/js/17.d13ee3ae.js",
    "revision": "c6f34b6f0461c21a0c9613abb8863a07"
  },
  {
    "url": "assets/js/18.d11f6e1f.js",
    "revision": "0552f2a38795b25228d98308edf2a193"
  },
  {
    "url": "assets/js/19.efd57812.js",
    "revision": "65f1170e4114963b842fad6fc7fc8f1e"
  },
  {
    "url": "assets/js/2.318a9eca.js",
    "revision": "5df1111cdbe79372fcebc837ea022187"
  },
  {
    "url": "assets/js/20.2e8bbe10.js",
    "revision": "4d30b81a21413e7ce752b715757b5c49"
  },
  {
    "url": "assets/js/21.db6e8d37.js",
    "revision": "f41ee38b1a617f73cbb2f8e8260d993c"
  },
  {
    "url": "assets/js/22.ab5f3791.js",
    "revision": "95068da5e8de272d106d2526a6a99b49"
  },
  {
    "url": "assets/js/23.e9a7ef3b.js",
    "revision": "8415e940a13b9989bb2b75a66f53fe6c"
  },
  {
    "url": "assets/js/24.8867e429.js",
    "revision": "d34290292a81d908a31c0c7fc22ebbce"
  },
  {
    "url": "assets/js/25.6f8ec8c6.js",
    "revision": "a377be04de58fac8559a71eba5466cc1"
  },
  {
    "url": "assets/js/26.e3445624.js",
    "revision": "287dc705d3984701b90a0c0fe6241e3e"
  },
  {
    "url": "assets/js/27.0bdfba43.js",
    "revision": "803fcd7fee89f6cf3f6f4b8c1bfda3dc"
  },
  {
    "url": "assets/js/28.6169912c.js",
    "revision": "b5675f9709ea47a673cd7db6c35cf496"
  },
  {
    "url": "assets/js/29.ebfeba0d.js",
    "revision": "647383bd1d80bbb2e8dc066b27988868"
  },
  {
    "url": "assets/js/3.1ae9521d.js",
    "revision": "669eb11dd1e098699eb966d75982a005"
  },
  {
    "url": "assets/js/30.fb966ade.js",
    "revision": "c335faea5788a1278e91ed03dae7a1e8"
  },
  {
    "url": "assets/js/31.4122003a.js",
    "revision": "93c699fefe11d9561145239abaf09fa2"
  },
  {
    "url": "assets/js/32.f99fcf75.js",
    "revision": "98950e80533ff0718f8bd803179e6385"
  },
  {
    "url": "assets/js/33.dc86bf53.js",
    "revision": "ff2625467047f1c4b4b6bf0c430d598c"
  },
  {
    "url": "assets/js/5.01c2b1ff.js",
    "revision": "dadb04b56e274129b2d95b8ac110fcb8"
  },
  {
    "url": "assets/js/6.c6e6385e.js",
    "revision": "0f3f72f16ea6bc767342ed917be4dcc5"
  },
  {
    "url": "assets/js/7.70da2610.js",
    "revision": "071d0d35c0232aa5ade7f390b4fba2b0"
  },
  {
    "url": "assets/js/8.b7379e2b.js",
    "revision": "42fa5a10a6d0ddf939d3ffd4ff696a3c"
  },
  {
    "url": "assets/js/9.dbdec916.js",
    "revision": "a22ea99c5539aec9cfc191b3670e4632"
  },
  {
    "url": "assets/js/app.21557f54.js",
    "revision": "ad8417a21bc761fbb85a305ff350eee1"
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
    "revision": "a158064a0c4835b6f2a68e56908d9a2c"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "118f00dafbcbf04196e45912d33b8d06"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "1bd2f785b1ef534e7238fc2494bac32d"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "9699f7604c5f4c73063ddf78325acda7"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "99c568ffc8e68c3facea35e5869fa3d7"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "242f406e9e473c6e818e12ba0705e466"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "0ef6e7942e45959f4f3eed30c2b129c1"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "5dbcc929ef6a94a257e8c3e2d008145b"
  },
  {
    "url": "blogs/每日一题/前端/2022年/2月/10日.html",
    "revision": "d22efeeb6e53241c82e6929c5f3694d0"
  },
  {
    "url": "blogs/每日一题/前端/2022年/2月/8日.html",
    "revision": "b304197214f5a2fe55da537a670c25ff"
  },
  {
    "url": "blogs/每日一题/前端/2022年/2月/9日.html",
    "revision": "67e23f66cdc7c85f39b304b169580505"
  },
  {
    "url": "categories/index.html",
    "revision": "27386d99752475ac9a8575fb4f49ea56"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0769327df6bf009168877724176e5a42"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "15ba38a40e89398662d15f4d30ad3b70"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "0cb7e46d0eaba9c8e3efb9fbb3c37cf9"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "04f27b5f519b6b57dda934b07cb9fad4"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "53f75212d6c0a5f916f9f674208e139f"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "11a3a605d965da310472162649732fb7"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "8a54bb381a012a7d0f88232485035a27"
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
    "revision": "27a7dc5e8b17ccaf7c797f4529a562ed"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "0227130f930b8b245a90b8a9a09f9390"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "1092db84bd140a398ae89087228ac8cc"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "d72cb6f7a1b42829a94f91116d586aa3"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "b0ace12670294656514b1385ea0c9b45"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "fd3707ed8b843876afcf88aaee313011"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "1a607795258ceda8a36db8d5e039df42"
  },
  {
    "url": "tag/index.html",
    "revision": "ff796953a8d879407da2376e848f6fdc"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "65cb3b8d58a1e5c4f70e174dc1b9d7f0"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "824c7b21a92ebd5d9eb2d7e2faad372c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "a2e399379eceed5b520474db277499d4"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "08c5f1ed1a595ebd1115f41b0ba49409"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "9d24d8812b56523ece9644c605c33383"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a7e841afae70cb48dada16069c73b78"
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
