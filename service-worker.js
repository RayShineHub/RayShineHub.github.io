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
    "revision": "1d3515325cb71fade0e8f76dea8b2fea"
  },
  {
    "url": "about/index.html",
    "revision": "d4563bbfad711058d2f90f1aba658e8e"
  },
  {
    "url": "assets/css/0.styles.6fb244c1.css",
    "revision": "abaaba1a54035ed6c397f0a7742796c7"
  },
  {
    "url": "assets/js/1.3cbe7f75.js",
    "revision": "eb6dc17173d24ab5fbf09ac0822abf46"
  },
  {
    "url": "assets/js/10.fae029d8.js",
    "revision": "a39a4e08458efad591e8a19333a11cc0"
  },
  {
    "url": "assets/js/11.52bafe7d.js",
    "revision": "eaee061c5c716d666060f0a981147e25"
  },
  {
    "url": "assets/js/12.bb406ca5.js",
    "revision": "1f48261fb3187ac496d17f513becc669"
  },
  {
    "url": "assets/js/13.c724549e.js",
    "revision": "f5e76429e0513a75147ced8c283129bf"
  },
  {
    "url": "assets/js/14.4ca5aad9.js",
    "revision": "06263e0a7300be6cf271d83e09d9db4f"
  },
  {
    "url": "assets/js/15.c493da4c.js",
    "revision": "e61c9132d90817682aa1f783068a0898"
  },
  {
    "url": "assets/js/16.592677fe.js",
    "revision": "bb6e0f1d3e83ccf92e664090e38487e5"
  },
  {
    "url": "assets/js/17.8222271a.js",
    "revision": "5237c47e7d868b86a1069af239bd6e2b"
  },
  {
    "url": "assets/js/18.f5c65413.js",
    "revision": "2d3c281cff957868bfd9b310daee1d51"
  },
  {
    "url": "assets/js/19.3a88b900.js",
    "revision": "0cfb4c8ea790b58586a7c7cb1125d742"
  },
  {
    "url": "assets/js/2.16520945.js",
    "revision": "e26fbc5ee0911fc262c60ed736b93229"
  },
  {
    "url": "assets/js/20.1c93d1c2.js",
    "revision": "3dc52832bd2ab53001ad12dc9032ba7f"
  },
  {
    "url": "assets/js/21.3c629c0c.js",
    "revision": "fedf83cc9bcb50876ee49886557ca8c6"
  },
  {
    "url": "assets/js/22.435f0ecc.js",
    "revision": "e195716bad1821514529ad332d4bab78"
  },
  {
    "url": "assets/js/23.d4449c50.js",
    "revision": "30fde49f9a942b463fd09bec2b63ff5f"
  },
  {
    "url": "assets/js/24.fb7cb458.js",
    "revision": "60062585c17ad700f937e6cf4fe79d76"
  },
  {
    "url": "assets/js/25.c38e5dcd.js",
    "revision": "de587ceb7d67611a5b5ae921fd48221d"
  },
  {
    "url": "assets/js/26.88119672.js",
    "revision": "e9418407e17cc74c0eeea24262777b3c"
  },
  {
    "url": "assets/js/27.0e123436.js",
    "revision": "7a14926d55a3f8a8d6531ed17df56616"
  },
  {
    "url": "assets/js/28.e46a0493.js",
    "revision": "401f258f15f68e64165692e8aef440c2"
  },
  {
    "url": "assets/js/29.4f35dd31.js",
    "revision": "c4289029849e987a2fa6127ed69f60cc"
  },
  {
    "url": "assets/js/3.3d08193b.js",
    "revision": "e884d6ce1b2e43d94a158585cd747b46"
  },
  {
    "url": "assets/js/30.1b9a3987.js",
    "revision": "ba156e040cc9445cbc48740553ecc100"
  },
  {
    "url": "assets/js/31.0c0ca786.js",
    "revision": "4b9d1eb0da7d79f3a6a0e8a0c333b97c"
  },
  {
    "url": "assets/js/32.36b5edaf.js",
    "revision": "19a9d127b1e620c2ae917b1dd13afd89"
  },
  {
    "url": "assets/js/33.53966138.js",
    "revision": "8fec3221b1c1acd85b3206c7c10d2512"
  },
  {
    "url": "assets/js/34.51940b83.js",
    "revision": "84b02a9cdd04f98ffe8566da4bc44a8e"
  },
  {
    "url": "assets/js/35.001c7eaf.js",
    "revision": "f1241bfd7bfbb5d84b1bf6e36f740898"
  },
  {
    "url": "assets/js/36.35d8ec9e.js",
    "revision": "ecb88635532d35fe3b8335a15f1582dd"
  },
  {
    "url": "assets/js/37.e043c005.js",
    "revision": "524f9cf6aa7bf5b58e7d0973d84ed394"
  },
  {
    "url": "assets/js/38.02663372.js",
    "revision": "bf6732ac5670039b61e240017d115696"
  },
  {
    "url": "assets/js/39.1cc7a4b3.js",
    "revision": "6aaa185e9c8d9a55f1fb80866c506da8"
  },
  {
    "url": "assets/js/40.77a59baf.js",
    "revision": "0145c92c01c48df541b65a489b3308e4"
  },
  {
    "url": "assets/js/41.0b49809c.js",
    "revision": "30346428ce86b50abe2714915e926e9a"
  },
  {
    "url": "assets/js/5.bfee5cf8.js",
    "revision": "2ac3bb25094c6516abe7f132abb599f9"
  },
  {
    "url": "assets/js/6.c5194e61.js",
    "revision": "a959967ebdf632fd26fd7662bdad001e"
  },
  {
    "url": "assets/js/7.88bcebfc.js",
    "revision": "acb110c326ef3a211b0a92fb706c49e2"
  },
  {
    "url": "assets/js/8.8b8abc85.js",
    "revision": "8465a27a98717e3263ed1801746d8d18"
  },
  {
    "url": "assets/js/9.f0422615.js",
    "revision": "b5bd6ee9846c5b6dd8037f95f0a7e639"
  },
  {
    "url": "assets/js/app.8fd08d65.js",
    "revision": "fb1f1ca87c4f5ea954969597b2343e64"
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
    "revision": "77466feb799566550d16190a31742f30"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "b16a8c469e4b6fc637808ab5e1c3dbbe"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "67522997ecca1b2c8b0a3efb498a38fd"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "2f9893a95c2b914f5e81f7062926d787"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "b7bc39a8b8d77f3a86941360883cc5de"
  },
  {
    "url": "blogs/前端/2022/7/节流和防抖.html",
    "revision": "60de85e0a12eb600666920b3f2caa79c"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "258f51207391d7b5a8457c84d03f0383"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "efa9061cae0d59eb8bf29d1056f2e55f"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "d89ebe06f56085761408cfa3c492e127"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "962b2ea57ef14328cb4f7212a01aa5aa"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "0fe7a53867c03476e1e8e40d9a8880e4"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "34d8258c32abce3027b79c51bc325cfd"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "ddde2497534667bdf6ddf0d1b1607357"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "f9dc07c68f9bada0686092340ab3fc1c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "38ac521771931ae7f695c76de5a51206"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "e140b65c16f09d583e540ce975c0009f"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "5daa0421be2d0d36303683858c98b249"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "af4ba9629479c64b5544a25512505ac8"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "a8c9b2de324d2db672007ae2f24398c1"
  },
  {
    "url": "categories/index.html",
    "revision": "ed351afbf0005c63672d2fe2adeb4bfb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "23448860bca5666e869cd2dfdf14a0fb"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d6ef1d70348056b5ef272bbbb675b8e3"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "6ad6dcffbd7c08f5d6a15f40b827ad14"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "1e78beb8f0ecf4be7eade6d2a2cce1d3"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "0729027f4b7466696babc8683bff2ab1"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "6426a4242568040be9594282c716d259"
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
    "revision": "d57d93a50ea778370b29852eb57f82e9"
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
    "revision": "f6a81eee883512280a0395f288b16dfc"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "1a593c0e777f9963afb6da3c775a98b0"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "af5fcc72e0e13429b3bf0c86cb446263"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "0f9a2c5d2ca26a2a5f4bfeb4f07e8171"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "ef96af72af5803c35d248dba967c0ea4"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "90b12f0b96aeb2a4aa8c3b4f9c2ced7d"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "65c8c3626c0054a49d74b4d86a04d9cc"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "64dc0bf2ecb45a80ccdb25cac374ac6d"
  },
  {
    "url": "tag/index.html",
    "revision": "2175d11c6c76d842cfe40aee9f356e05"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d8dcb9ce50cacb2db3104d02a0f66088"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "5480a60fa89e761bddaac71a138864a8"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "884e384dbb85452bbd6ef53de6e7bb4f"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "2e4a554dcc8874a30c09b95c8c89b17a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6344c63e77545db79ea864fd42b301d4"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "2656fe1debced257066a40edece7f54a"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "797bb71fc448bdcf4e440bf4f1c931b8"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "53fc57a851db847f6f310fbd77eb0443"
  },
  {
    "url": "timeline/index.html",
    "revision": "a3741828a3d13bca24ae3adfe64d279f"
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
