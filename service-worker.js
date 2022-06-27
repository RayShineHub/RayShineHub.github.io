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
    "revision": "1d9f267b70e0dbdc861450bf782b6be7"
  },
  {
    "url": "about/index.html",
    "revision": "7641b4e1fe052383f0b20c50eaca8037"
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
    "url": "assets/js/app.bf373e96.js",
    "revision": "80cc35869034260f1352265bc94eef09"
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
    "revision": "32fd7b74573c83f2bc1bd75119b22681"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "0d001915cf030258ac4653332e977af6"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "a55cf28c4123b7685cca137838329f1e"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "0b39ed729334e0006fd303bc47f7e91b"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "bdd3bf48f03f3669cb1ddeb10abe6023"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "585dd95ee780e9b1fe02544fdd0c2cdd"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "625fe54288ccdbf82a3039bf3351b0f8"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "e45328557f151d3af1214851a012478f"
  },
  {
    "url": "blogs/每日一题/前端/2022年/2月/10日.html",
    "revision": "6e3b7b3f5c293a9c8426c0a39a241784"
  },
  {
    "url": "blogs/每日一题/前端/2022年/2月/8日.html",
    "revision": "e5ee449b0059a70e1d359642f7eaa416"
  },
  {
    "url": "blogs/每日一题/前端/2022年/2月/9日.html",
    "revision": "ef3a70ad432933af7102fcc9d6c6712b"
  },
  {
    "url": "categories/index.html",
    "revision": "756a2ceec132f0af8f86efa3d9e624bc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "634753182274b0805936a3fd90eb28b2"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "0d5ca8d3f492441cee8910c26890074a"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "c4f477a120985d7f1d9c6848d71d3179"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "07dfff938de0fff3a404a965805e4fad"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "fbf1c7505ddc02966a3f9341b820d3e7"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "3796d6bcc3d4eac50c1e723faf15b679"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "009840db706d838a4f334cc99ea875d9"
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
    "revision": "1df488c232b0a20cf17114591eaec69b"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "8be1c5ec0768c6d1762b8f18f6dc9404"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "808eea4bcdc66e30046f12c7a48c8523"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "2c3c86050288a633d8bbc2e91d4feffc"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "3dac64f9e01edaa171dd513b91a10ab9"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "1d917a836650c515f79a6e9e74d7a0ed"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "ac1e209b610225a43bb77cac64543e3f"
  },
  {
    "url": "tag/index.html",
    "revision": "f1dbc862082a2ff9ba282726111b2a07"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "6f0f09ea2665d518a38cce5c07eb4fa6"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "430b24acbe5d343bc36c46590d5ed56c"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "2dde53ca9f5ca48f12f318ee4695d036"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "51aa326e84c66584a8ad2bdd06cde1eb"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "edfe29f2ee5d7d27f87a8acfcb8b4bfc"
  },
  {
    "url": "timeline/index.html",
    "revision": "7e1c9b1b1a852a4f472938dfc5cab4ad"
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
