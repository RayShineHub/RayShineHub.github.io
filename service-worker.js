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
    "revision": "063059639846c607f131826566a57f06"
  },
  {
    "url": "about/index.html",
    "revision": "0175bdfe50e7f0ed4b28091d97dab067"
  },
  {
    "url": "assets/css/0.styles.b7e611cf.css",
    "revision": "bc2a5df1fa80a4c84843fc787fc0a48c"
  },
  {
    "url": "assets/js/1.98b06837.js",
    "revision": "d2ea995813ba792533e2fd2b01bcc701"
  },
  {
    "url": "assets/js/10.de7762fe.js",
    "revision": "0b1b684da8eabf4d7c1e716660cc82fd"
  },
  {
    "url": "assets/js/11.97abefbf.js",
    "revision": "ba2aaf16dfebac1d9f07206357cdef35"
  },
  {
    "url": "assets/js/12.16c615e6.js",
    "revision": "6b81e71c244d64b16257f5c39fd05f3f"
  },
  {
    "url": "assets/js/13.971de210.js",
    "revision": "b71907df7e82542878b008cf3f7a4360"
  },
  {
    "url": "assets/js/14.ebc16892.js",
    "revision": "f88d6c9aa8bf1fa94aad6c2e996e5e01"
  },
  {
    "url": "assets/js/15.9614f803.js",
    "revision": "890e699e323c8bce5266c0723f98984e"
  },
  {
    "url": "assets/js/16.198551db.js",
    "revision": "2e555dd5fea9329c30532a29f8418d11"
  },
  {
    "url": "assets/js/17.908a49dd.js",
    "revision": "da0f20e0749a2305588db275108d52ff"
  },
  {
    "url": "assets/js/18.6957a418.js",
    "revision": "7a971789296095721ac1500eb7a8c38a"
  },
  {
    "url": "assets/js/19.1d0d2d87.js",
    "revision": "797e14175a65d201e2a2a8df7750634a"
  },
  {
    "url": "assets/js/2.bed94bd8.js",
    "revision": "7cd04fcb2005f068e6f3079f30ae2ca5"
  },
  {
    "url": "assets/js/20.8f3a9ec9.js",
    "revision": "9e26cc9a3454730263a164ca5fce6fa2"
  },
  {
    "url": "assets/js/21.47669a30.js",
    "revision": "093d69d50161a3260a90352b6db444a7"
  },
  {
    "url": "assets/js/22.171482d5.js",
    "revision": "797655f527a5bbb9391eb105487259e3"
  },
  {
    "url": "assets/js/23.9821cb19.js",
    "revision": "6e34e3d7924cda22f1335d22e4407227"
  },
  {
    "url": "assets/js/24.22d305e3.js",
    "revision": "90be1706be0d8a225d3ff595a868b2e0"
  },
  {
    "url": "assets/js/25.460a3b08.js",
    "revision": "837c815be9e029d427368d84bed0a934"
  },
  {
    "url": "assets/js/26.3695f011.js",
    "revision": "ac5a9d2237201a754a8fa9f62b742096"
  },
  {
    "url": "assets/js/27.cbd78b90.js",
    "revision": "e36495485a3ec7587ea4a972330e3d27"
  },
  {
    "url": "assets/js/28.7c23047b.js",
    "revision": "89d70062ebf20ca3a71f702fad79298a"
  },
  {
    "url": "assets/js/29.8dbce8c7.js",
    "revision": "cbe123c337f328205f6a6f4b783a23a4"
  },
  {
    "url": "assets/js/3.3532802c.js",
    "revision": "6c0196679f7a09491ba52bdb5bf6b9b1"
  },
  {
    "url": "assets/js/30.564313b1.js",
    "revision": "e0da2cfe91ca049b157c6a2fc938aaf4"
  },
  {
    "url": "assets/js/31.5c9f2235.js",
    "revision": "38f57e470627ed95e561796f51fbe990"
  },
  {
    "url": "assets/js/32.f93c543d.js",
    "revision": "1c4b46304cafb54a1fac1c933415bb21"
  },
  {
    "url": "assets/js/33.980184d5.js",
    "revision": "b80f3003c919bb7b146371e18618c70f"
  },
  {
    "url": "assets/js/34.d3d079fc.js",
    "revision": "fbb8ddddac8e5b809c1e4b1746f0221b"
  },
  {
    "url": "assets/js/5.155848f5.js",
    "revision": "1e2c66a1bba5174402d3ad5a230eff5c"
  },
  {
    "url": "assets/js/6.39a76209.js",
    "revision": "72b94d12bd0970ba19b3f049bb283fc8"
  },
  {
    "url": "assets/js/7.84389eae.js",
    "revision": "ae21d561bc19b0da4806185955fbf061"
  },
  {
    "url": "assets/js/8.cff76f7a.js",
    "revision": "685df9cda672397151498a5a69c2a341"
  },
  {
    "url": "assets/js/9.f7807364.js",
    "revision": "9ff071c7d48ff34a58ceb9d6ec4d4203"
  },
  {
    "url": "assets/js/app.22888c50.js",
    "revision": "e041046529ea5d1220883a38f753d3fb"
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
    "revision": "abe3c7d1967547a95713f59b89453240"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "09ad0e808bda3dd3ce5af5fe5c12239d"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "9108fd8a61bed6001e27dda296c7d738"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "f9ff136f84ffbf561811e7e88cc150c3"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "ee40dbbbd9246dea05c57c7f811defc9"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "506c221d3a1cc741d91b566e02fa3330"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "8a864d279f253e658f7de02d9c5aa989"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "daefffb5503c95a1c84b822f4ace6153"
  },
  {
    "url": "blogs/每日一题/2022年/2月/10日.html",
    "revision": "f3d6783b1717296cbc3ee6754c4b38bf"
  },
  {
    "url": "blogs/每日一题/2022年/2月/11日.html",
    "revision": "6f039fa68c74cd404f7a6772ef4d5600"
  },
  {
    "url": "blogs/每日一题/2022年/2月/8日.html",
    "revision": "fc666fcdb706a66de56fa2c5bc2b7092"
  },
  {
    "url": "blogs/每日一题/2022年/2月/9日.html",
    "revision": "675024e28a67d7ee3124ec4e77648f5c"
  },
  {
    "url": "categories/index.html",
    "revision": "4e3f3ce5bf4da6e28b9ccb5e3dd5dc2b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "554fda392bdf9d77ee0fcb7c5612cfcf"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d6eacc179e21640a53e27c2c98bfd530"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "d1cc16b8df234045c720f036c0e3d779"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "e4ae9a7ebe64e0adf56769cea2ba2cc5"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "24b1b226ce8bff0077573675844f0979"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "cfb69b7da4a628c04c1605d99ab8ac0e"
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
    "revision": "43b1ea90d3417218c43026ef30590e76"
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
    "revision": "4aad62605ef23cc69d74b649256f7d38"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "4238eb4e5a37cac132cb7180430f4fe3"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "f80a7fa5ae607d7165f5070e288e42ea"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "800626b54400a21b4732340813943434"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "c715d2625c2035ac1ab0a442fbef6683"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "bb7915967854ed379b33d4863f8910ae"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "257a1822fbb71941868607feafddb57d"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "dcd4cb1ed04e3e85d3c7074274a6967b"
  },
  {
    "url": "tag/index.html",
    "revision": "8e1d2f6fdaa0326b640e688c0cf929ef"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "0dc697d11b50554752f96ea12ee58bdb"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "8328662f9499f14fbc7ef6095abc66d1"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "6cf30a070110f8440076a1a408ef7b0b"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "e210923b9e544c1f30800bdcdacb3cba"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "11826bed00217226fc6e4f5c98b8b04d"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "3910003835ea9eb304617bc3f8ccd2b8"
  },
  {
    "url": "timeline/index.html",
    "revision": "b82b399430c44d6b5f78952f646ef3dd"
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
