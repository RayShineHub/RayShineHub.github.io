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
    "revision": "0a0d1388d673795958a84a7c4b25c9be"
  },
  {
    "url": "about/index.html",
    "revision": "3bac3845312b415daa01bb245ed90894"
  },
  {
    "url": "assets/css/0.styles.199e94d5.css",
    "revision": "fc1870ea9e644cace41542b147558b36"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.ee034e8c.js",
    "revision": "66b727143508e4fc220742f368215890"
  },
  {
    "url": "assets/js/10.4318e8a9.js",
    "revision": "63d2a596fc3bd14e2f7a461048ab97bb"
  },
  {
    "url": "assets/js/11.38e5af6f.js",
    "revision": "e82c1429ef7c96a5308d17cd47d8d835"
  },
  {
    "url": "assets/js/12.9a73d53f.js",
    "revision": "13172e733651b7d9271325132c5f212a"
  },
  {
    "url": "assets/js/13.6fa46621.js",
    "revision": "15733961c4e6c1b5f93d7723374008f3"
  },
  {
    "url": "assets/js/14.5c4578c8.js",
    "revision": "e1d4bf3e2f4d6e712b0a3c2d573b4962"
  },
  {
    "url": "assets/js/15.2b00ad91.js",
    "revision": "adad72ae97938394b652a284f5160525"
  },
  {
    "url": "assets/js/16.6aa63920.js",
    "revision": "1efa31579beeffb23ff494be2689542b"
  },
  {
    "url": "assets/js/17.a9c5ae5a.js",
    "revision": "d1e323801866d87b22f2c1ec3bf0ab96"
  },
  {
    "url": "assets/js/18.17067fe7.js",
    "revision": "9bdc7b0b80e9409f2999100d073d6064"
  },
  {
    "url": "assets/js/19.f823abce.js",
    "revision": "6b9be5d169ba86ff0b42b4fe194614c0"
  },
  {
    "url": "assets/js/2.e0c8fb4c.js",
    "revision": "1826a09dc0a8f1cef1c309a679c0d692"
  },
  {
    "url": "assets/js/20.733e856f.js",
    "revision": "0487533fecb1989c6c4554630371457b"
  },
  {
    "url": "assets/js/21.5bc03b92.js",
    "revision": "5b46267dd88818932227cbc2812a3351"
  },
  {
    "url": "assets/js/22.7eb6d439.js",
    "revision": "46d81b2f647dc27988c39f62def69447"
  },
  {
    "url": "assets/js/23.8add12ca.js",
    "revision": "be98a9c38c29225be092ab6abe748e87"
  },
  {
    "url": "assets/js/24.43d2524d.js",
    "revision": "356b3ad0ceeae96d9db5cec63d61ac26"
  },
  {
    "url": "assets/js/25.85d48961.js",
    "revision": "ecacbb31cdaac0f7369be923d198ea33"
  },
  {
    "url": "assets/js/26.03d6b704.js",
    "revision": "3af32cb8fb922f8a7963dd34d9e000ce"
  },
  {
    "url": "assets/js/27.d3976085.js",
    "revision": "5cfc46fd0fc8854d4b9fa17d80022b4f"
  },
  {
    "url": "assets/js/28.514961b7.js",
    "revision": "9cedcef07807651063d42dd82854f026"
  },
  {
    "url": "assets/js/29.b83e3b5c.js",
    "revision": "5d6096ec529ad852fa9ab9af1c59ac7d"
  },
  {
    "url": "assets/js/3.6ab1c0f2.js",
    "revision": "2c1d472fc9caa955a76524d2f8882581"
  },
  {
    "url": "assets/js/30.eb3e449f.js",
    "revision": "a607d3d3fcbad65fc1ac593fd538fed8"
  },
  {
    "url": "assets/js/31.b2fe7215.js",
    "revision": "d384c6f6fa18e31d075e9345d2a44334"
  },
  {
    "url": "assets/js/5.1be8904d.js",
    "revision": "81e19448206ee17dee82c3d395d9b9c2"
  },
  {
    "url": "assets/js/6.f6356921.js",
    "revision": "e77f552e775516238c8e490477f4ccf7"
  },
  {
    "url": "assets/js/7.f31d3e42.js",
    "revision": "6d3552e24def314fe5d9882c5ba22b0b"
  },
  {
    "url": "assets/js/8.456b58b8.js",
    "revision": "bff8e877fb2c0e7a007b0369533086c1"
  },
  {
    "url": "assets/js/9.c1e06c23.js",
    "revision": "7c8901ce71eda4c085be75e379305380"
  },
  {
    "url": "assets/js/app.21a85673.js",
    "revision": "2301db7141547c8bec071bb5e8cea495"
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
    "revision": "9af1a1a4eb7fd6010e5d0b2cb86b5a58"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "2d1325774b0545f84ecf0751d53e63a5"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "f95c0000a4f0f268c0a303019ddb267e"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "649ecd765016728ecc788d6da2daccb1"
  },
  {
    "url": "blogs/前端/每日一题/2022年2月8日.html",
    "revision": "e0993e1c7bfbf4f087626bac40d09bf8"
  },
  {
    "url": "blogs/前端/每日一题/2022年2月9日.html",
    "revision": "144bcfe4b8c909c4832c3040dedeba66"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "4f2244693a4f5c76bba440750e1932f2"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "1e7bccebfec3e668d670dd50c51a846e"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "2899149e088f881ea13b04d2409c0408"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "d3e62885f87d360c65eca94d2006a9d1"
  },
  {
    "url": "categories/index.html",
    "revision": "b2393ed82dcb2792b6875e0153aac6fb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cf8223f15bf42401e99d8678f0af65a3"
  },
  {
    "url": "categories/前端每日一题/index.html",
    "revision": "1be2a1be5f17c17ad69c0241da79cb7c"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "b325efec7f4f5fc18fd7d38c66e7822c"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "b6a5cf0b7ec75303ceea9eaf760064a6"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "05ad489394be7639bc3c55046f6bfa08"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "f6c7a21024d7d35b4e6b85f06a5b2886"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6f9a064fe4f8812ed7df8f61cff29c9c"
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
    "revision": "8709d145741d7387830d25b637ac3ccf"
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
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "671d618a3e8340bc221dff9458d15d09"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "8614a9c40887e1a256736ff8883f4f36"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "1174bdbdc0f64ac685bd8e3aa034212a"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "b76f062c4921606acbdac573329e854f"
  },
  {
    "url": "tag/index.html",
    "revision": "b5748427c81941c5284edca4de650407"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "9b16f24f65a86dc6a925a1dbf1d3c3d5"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "dd9f9403ff0acf27bceb0856af3575ec"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "8f0ceaa30a56e1b67de001038f91dee0"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "16f78e5098857985687e88c7de3453ba"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "66a22d06a9165fe1d6ec29734557b80e"
  },
  {
    "url": "tag/每日一题/index.html",
    "revision": "571850f8da555cf3dfce1333cbcfc5a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "19bb75309973407c0fc439a0888326f7"
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
