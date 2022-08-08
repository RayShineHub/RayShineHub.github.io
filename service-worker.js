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
    "revision": "1c94888e9d602a89fc6e14c7b256e96c"
  },
  {
    "url": "assets/css/0.styles.a73d4dab.css",
    "revision": "babccb3ea811f212847a17d0dc5b1175"
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
    "url": "assets/js/10.885c3d4e.js",
    "revision": "86cf6677d7aad26b9b52781abc4c6cf9"
  },
  {
    "url": "assets/js/11.97a6cc42.js",
    "revision": "4f2d966d82ad9eea22bb67c62e9d76b6"
  },
  {
    "url": "assets/js/12.e8d85ea8.js",
    "revision": "dba3501c8da0930264da22ba5d1b07db"
  },
  {
    "url": "assets/js/13.719f50d2.js",
    "revision": "8ab3ead24b92ee5651a9d48266fb8bed"
  },
  {
    "url": "assets/js/14.3f04aa82.js",
    "revision": "103634c41ba8134bdb6c25b54b0de01b"
  },
  {
    "url": "assets/js/15.3471f752.js",
    "revision": "dc7a4f2e90f19aac8da7af326b61ecbb"
  },
  {
    "url": "assets/js/16.54d3dd07.js",
    "revision": "ba38686e137b0e6b0446fad9592638c7"
  },
  {
    "url": "assets/js/17.d1c2de41.js",
    "revision": "2b532ff5b14d858cefbcc5ed4c79124c"
  },
  {
    "url": "assets/js/18.89efc548.js",
    "revision": "d44802666a61b5217f8b640a9221f515"
  },
  {
    "url": "assets/js/19.7137dc46.js",
    "revision": "1a589cffbd445f8b8303a1762291aae3"
  },
  {
    "url": "assets/js/20.ec2f9204.js",
    "revision": "0c22c95e6e6ef1a45f426ada3bed72bd"
  },
  {
    "url": "assets/js/21.d8599499.js",
    "revision": "158e668861551d933fdbb8cfbd4ef88d"
  },
  {
    "url": "assets/js/22.3a76aa60.js",
    "revision": "085de62996bf5ebffbfecfd08197c457"
  },
  {
    "url": "assets/js/23.2da3afa3.js",
    "revision": "3ebbf92f9742fa986fe53d528085b63a"
  },
  {
    "url": "assets/js/24.d7054091.js",
    "revision": "fad88675a317e424ea552bfa0d3d47e0"
  },
  {
    "url": "assets/js/25.3229edb3.js",
    "revision": "1a73fe63dbe77378a90a859adf04d282"
  },
  {
    "url": "assets/js/26.578353f7.js",
    "revision": "d1d386a316eb95bba9560944ae7d45bd"
  },
  {
    "url": "assets/js/27.67a73848.js",
    "revision": "c8791378d9c5f91de339a0b4c260ab22"
  },
  {
    "url": "assets/js/28.f6c13cc5.js",
    "revision": "36c7cf3a9d807bfead18caa048f5110e"
  },
  {
    "url": "assets/js/29.c305551b.js",
    "revision": "c9d2cb32e16d907f5b31d1f5dd5b2e1a"
  },
  {
    "url": "assets/js/3.4bf30332.js",
    "revision": "853759e25459fc47cb36e4e61272fd70"
  },
  {
    "url": "assets/js/30.37d5e2b0.js",
    "revision": "d1c33df3fd51fbb579e353ccce7f034a"
  },
  {
    "url": "assets/js/31.7b706c3a.js",
    "revision": "412161616d5ef083b7c3a0febdfb1a6b"
  },
  {
    "url": "assets/js/32.dda17c02.js",
    "revision": "c4d75a4bd17bf404ec78b0bb02405f91"
  },
  {
    "url": "assets/js/33.91999995.js",
    "revision": "1cd0216613767bca2963ae3621670e30"
  },
  {
    "url": "assets/js/34.2ada649c.js",
    "revision": "f7916dd0c2e5799961c6e0c1ac1a0cca"
  },
  {
    "url": "assets/js/35.91fc64ba.js",
    "revision": "2bdfefb0795b682954ea734baf0148d4"
  },
  {
    "url": "assets/js/36.0b7279c7.js",
    "revision": "4cd575c4e965040e1cf332b9e9dc9e36"
  },
  {
    "url": "assets/js/37.8dabc34a.js",
    "revision": "4a77c8860e5b76812a0e7b9ac74c1956"
  },
  {
    "url": "assets/js/38.5adb2f5a.js",
    "revision": "64ecdbc03ae23b1204fcd53db18cc812"
  },
  {
    "url": "assets/js/39.f60e46c7.js",
    "revision": "014f81e3e26b4a4e18c669a236934c52"
  },
  {
    "url": "assets/js/4.ac5e9992.js",
    "revision": "4d77071eef5a611dbd077c7418b5a369"
  },
  {
    "url": "assets/js/40.420e723b.js",
    "revision": "7cb7248ae96e7f94324af0ed3c3b183d"
  },
  {
    "url": "assets/js/41.df73841d.js",
    "revision": "1b59e801e51ea03575c0af99aefe94e7"
  },
  {
    "url": "assets/js/5.cf023e05.js",
    "revision": "46a91cf4e65fc084c345d7e114af0e7c"
  },
  {
    "url": "assets/js/6.49a5e5a0.js",
    "revision": "55ed59c57c39e8066f7bbc20340cc023"
  },
  {
    "url": "assets/js/7.47a67900.js",
    "revision": "7e0af325f6e128af8d4ab7355eff5de8"
  },
  {
    "url": "assets/js/8.9c7bf666.js",
    "revision": "ce20e913063c9ea1c245b39c626e4649"
  },
  {
    "url": "assets/js/9.337842b3.js",
    "revision": "3e3109975265feada1f23fcfc9e522fc"
  },
  {
    "url": "assets/js/app.7fba9ddb.js",
    "revision": "9d6aa2b2faf08c7acb452c55f6bf95b8"
  },
  {
    "url": "assets/js/vendors~docsearch.fa2b45ca.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "b66d0abb30d863dd595002f230a03ca0"
  },
  {
    "url": "blogs/others/收藏/emoji/emoji.html",
    "revision": "d1c237dafc3bb2e7140d95637cd0dfce"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "5a388c00ace3235291d2e13dbf23d541"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "7d11bca49023946b03d6b04348845a2b"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "7a6d29bbe13f96ef67d9bcd3f007f01e"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "dfa2396e7d1f97da15157c066b5828a4"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "7bff32ba9c7a9555460e525b7c030ee4"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "c0aadd8726a0a927361d2aff92c4c283"
  },
  {
    "url": "blogs/前端/2022/7/Windows配置GitHub秘钥SSH.html",
    "revision": "bc4cb9a28f8ff1edeb098c648179a158"
  },
  {
    "url": "blogs/前端/2022/8/自带插件平滑滚动中文路径问题.html",
    "revision": "decc3ac5281e6dc2aed2bc2b834a9a1b"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "ab8c4766bd4a21e374852c182b60e0f9"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "b8c8d24b97617f9398ddf2a05a23f161"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "06dbdef9f816f1dbebdd13e16d318af9"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "0a00e7f6e4de135a9d93d3aae462498e"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "e1f1f730e0816130137d9a773d5210d6"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "496d9621a8db2b8e9dfc53958e1edebb"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "5c200bf4fb8a531f574a47b045175198"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "28ee3a5d1a87ded80b27310cd7d71ccf"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "7cee2ef0776d1e8814951cca88082f9c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "0602a2816f267a2c6f9569b89497fd49"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "e9694e7a5c903c6ec3cda27ba59e8504"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "61c9e8f6ab1b53ac1aca9b750b49979d"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "b63ab2153b158b811e5cf8415eaa38e7"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "2d170bc89f512ff20bc24580cd0b3504"
  },
  {
    "url": "blogs/每日一题/2022年/6月/16日.html",
    "revision": "7c98c6de69241e444d1ff1db06d15720"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "99d87e065a30d1099bff88a90c6f6515"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "60caa1a6b080c5ca5f0bbc0ea35c9727"
  },
  {
    "url": "categories/index.html",
    "revision": "e0494142ef5b49db45d03d3e4a44a7bd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6286987b4a6a807ef2b5ccdb409d285d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "a1841f6de10270b375c45c5f3c452529"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "3f7e0d281faef540b5ed7eb2ca0a5c7d"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "9416959354c73289bb016d7e8770b929"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "d43400bb98d05058cb3f53adca174b26"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "892f45d08bea78b392171d96e431bbc0"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "92108f8068b0aa4123bc1a4ef7b70ca0"
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
    "revision": "9c86290a27dd0a4a64bb6a957ffa7c64"
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
    "revision": "792d3df8a3c1e1246af6ae27ef764459"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "fa09cbdc7515183ba3a129e6d17e1e63"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "aed7d73ee45947ca1ccd83c88b7ef864"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "8c6e97e0f6e62134c4adf5eb63fd87a1"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "597ce2220364fe1c8fbdda29eef32c05"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ffd04af445c39821bdd98487dd987fca"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "dc9e8484f412f12178f18e167eaa84df"
  },
  {
    "url": "tag/GitHub Emoji/index.html",
    "revision": "62dca530af3ce0282067579ce65b07c2"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "12ea8f63d34537135aceeb51297914a6"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "417d4fc31ebbb14044b17cf7956ae4b1"
  },
  {
    "url": "tag/index.html",
    "revision": "ce967a38df30bcdb7ade757ea74756af"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6de77154b71782843199fc046c8ebf37"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "4b3872f5f259a43d66fcec91c3424e50"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "579f101de45ed409a12e5f3603f8ca57"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "8a8118f08ef49d23c4c6368f690ada55"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "3621416c64a93d8bbc5709950552f79e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b07344ad2418d206c17bee9f79d95c96"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "38a2f5ccdcdb71637e20f380a88c5584"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0384a113fd33b98debbfc231d11c2c9d"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "66dc2c2ae615dac21f8c04bedaa2090a"
  },
  {
    "url": "timeline/index.html",
    "revision": "e28d1051ea4394cc04a72c021c3bd05a"
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
