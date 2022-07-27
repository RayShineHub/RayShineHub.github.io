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
    "revision": "5c4d0d033985f2acb18e8376814dcc71"
  },
  {
    "url": "assets/css/0.styles.db6cbeeb.css",
    "revision": "f6c62b09cb2f0c973c022f0bee00e4bb"
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
    "url": "assets/js/10.c8943557.js",
    "revision": "fc0c28fd19c54562ad73275f655e72dc"
  },
  {
    "url": "assets/js/11.90abd343.js",
    "revision": "c1b772918e8cb7b55dfc2f01c705b6eb"
  },
  {
    "url": "assets/js/12.b89da40c.js",
    "revision": "cf5cf3a36da71539bc684724522db9ea"
  },
  {
    "url": "assets/js/13.edc2942a.js",
    "revision": "19fac4ae71a59ad8fcf576ef66d30eeb"
  },
  {
    "url": "assets/js/14.712e3f3c.js",
    "revision": "6c7f9d5456c2851089a5318ba89a4f16"
  },
  {
    "url": "assets/js/15.45c3d7cd.js",
    "revision": "f18984a9ea6bc9311c2599417c2a9f86"
  },
  {
    "url": "assets/js/16.78e62aba.js",
    "revision": "6fafb05a9842872e38fbc3822327363e"
  },
  {
    "url": "assets/js/17.373fc0a7.js",
    "revision": "a528abafef99cf01b5e88c9fa16b164b"
  },
  {
    "url": "assets/js/18.6a735194.js",
    "revision": "be3caf8c454d5f9d139ec53fd5064d5f"
  },
  {
    "url": "assets/js/19.6a869dc6.js",
    "revision": "67f13a4009848097d932ed0820787129"
  },
  {
    "url": "assets/js/20.2dd28edb.js",
    "revision": "c04590c316be169241f20923ab10f763"
  },
  {
    "url": "assets/js/21.3f552ff1.js",
    "revision": "e606c3cb19075d2cce64dbb4464f8e78"
  },
  {
    "url": "assets/js/22.cbc781a7.js",
    "revision": "3a5d831d9e309580bcde3593a072ee02"
  },
  {
    "url": "assets/js/23.de762808.js",
    "revision": "c2c568acc2fa977d07f1a7e9b77a3e16"
  },
  {
    "url": "assets/js/24.91d2b9dd.js",
    "revision": "bafa4ba5a6b6b3e0d5b21fbe58b227ac"
  },
  {
    "url": "assets/js/25.72400426.js",
    "revision": "2d250790c5d57b63a9f5f9ad98d82221"
  },
  {
    "url": "assets/js/26.7e41bbfb.js",
    "revision": "4ee828108ae3b582a437c678b916e0db"
  },
  {
    "url": "assets/js/27.ccfadac2.js",
    "revision": "ee66fe1a62cbc977d8232fc085f3532e"
  },
  {
    "url": "assets/js/28.1c94882a.js",
    "revision": "a2402306db9589bcec14ed72837677c2"
  },
  {
    "url": "assets/js/29.7c0456f9.js",
    "revision": "ad4217dc6a0d548203962f80d6afe9cb"
  },
  {
    "url": "assets/js/3.4e4cb990.js",
    "revision": "2bc26bf88d5805a1d49b1617daf569d2"
  },
  {
    "url": "assets/js/30.cda85656.js",
    "revision": "e420843dea4986a6eca2561af9e53d43"
  },
  {
    "url": "assets/js/31.a14f9819.js",
    "revision": "dae4df8be72707ded807c387ebc824ec"
  },
  {
    "url": "assets/js/32.4b77a5ab.js",
    "revision": "072a26d5073d7d455481ed62a9a8e404"
  },
  {
    "url": "assets/js/33.fb7a38c9.js",
    "revision": "3a2f49a88e2ea2fa73e24118f599083f"
  },
  {
    "url": "assets/js/34.f84dfd6d.js",
    "revision": "ade950058b166241d1601522753327dc"
  },
  {
    "url": "assets/js/35.c94ea4bd.js",
    "revision": "cd4c46e413b43f5edf9ec8a612bdba52"
  },
  {
    "url": "assets/js/36.33a4c736.js",
    "revision": "474fe6aefc09d65472c0619371e00190"
  },
  {
    "url": "assets/js/37.6ab66f88.js",
    "revision": "5738175ecc79062c33eb0ad106482e02"
  },
  {
    "url": "assets/js/4.683e5ba2.js",
    "revision": "8e3f2d56a9a888ceb4ee2a6f0f90a5d7"
  },
  {
    "url": "assets/js/5.f20b6532.js",
    "revision": "68f1e40e879cc2ee4b5ae3a4aaa26a35"
  },
  {
    "url": "assets/js/6.0a3c2fca.js",
    "revision": "a3cc1adb18747e66cde422950f272942"
  },
  {
    "url": "assets/js/7.419f843b.js",
    "revision": "b5ef7f8c3a75091f111a70815ec821e8"
  },
  {
    "url": "assets/js/8.247dc7e3.js",
    "revision": "6e1af48d9db7de0a53d81f81959e0eb7"
  },
  {
    "url": "assets/js/9.3a089a83.js",
    "revision": "61e987646cd18b35ecfef187527c2f65"
  },
  {
    "url": "assets/js/app.294def50.js",
    "revision": "859f1568199992e495b998c480e31117"
  },
  {
    "url": "assets/js/vendors~docsearch.7ad93d70.js",
    "revision": "73936cbc1b195ce504b27ad9e7a127fc"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "4185e993d7b1a410cbcc3ec849b3845a"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "3988a377c43bce3c38fced55bc3a420f"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "c53a5d16a5f37f6ee830846e7235ceba"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "c584bebf1a464e647b137b2ca67176c8"
  },
  {
    "url": "blogs/前端/2022/7/AutoGenerateSideBar.html",
    "revision": "315d472ead3a0c64611b863696a5cd76"
  },
  {
    "url": "blogs/前端/2022/7/NavPlayer.html",
    "revision": "944c4c47afe72f199fdddc6cb0f2747c"
  },
  {
    "url": "blogs/前端/2022/7/npm无法加载文件.html",
    "revision": "e32fbd6bbc02dcd8ed96353c49636487"
  },
  {
    "url": "blogs/前端/CSS/基础知识/基础语法.html",
    "revision": "58e9584e20622f3e7185faacf91d3641"
  },
  {
    "url": "blogs/前端/CSS/基础知识/简介.html",
    "revision": "93ff47e8522fc91ef0279b88c8adeb7a"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/数组排序.html",
    "revision": "c7ea6dcfba3d711e538f439aedb3d6a4"
  },
  {
    "url": "blogs/前端/JavaScript/基础知识/节流和防抖.html",
    "revision": "137335eca663519f4ff14aacb4ac10fb"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "42cac597b38279cf1288adbd899ee262"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "a050db3b26f66e4ceeedde2e746c2f7e"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "bc46b68f38d57e0e8c168a296c3c351a"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "8a2f268c68c313d628f1053ecd530dea"
  },
  {
    "url": "blogs/每日一题/2022年/6月/10日.html",
    "revision": "d44ef7e5eb90ee8a091fc9c6c53c3887"
  },
  {
    "url": "blogs/每日一题/2022年/6月/11日.html",
    "revision": "93c6f29b27a62fa7c9cc163098eace7c"
  },
  {
    "url": "blogs/每日一题/2022年/6月/12日.html",
    "revision": "0335444d42ad0904c3f6d27f60feda86"
  },
  {
    "url": "blogs/每日一题/2022年/6月/13日.html",
    "revision": "a7ac71af53e151f7bfcac93732d10919"
  },
  {
    "url": "blogs/每日一题/2022年/6月/14日.html",
    "revision": "ec115f884721de50d2b075e30d959903"
  },
  {
    "url": "blogs/每日一题/2022年/6月/15日.html",
    "revision": "739eb9730a53247f486362dfeeb45efe"
  },
  {
    "url": "blogs/每日一题/2022年/6月/8日.html",
    "revision": "d25bcf5a214c7520eedf41b4b6c7a145"
  },
  {
    "url": "blogs/每日一题/2022年/6月/9日.html",
    "revision": "4ef1754d70f380d9a9922af29f1ac389"
  },
  {
    "url": "categories/index.html",
    "revision": "1e19bc549f94b07d404639d0c3203de4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0cafc00bed2a8f7f24c476846102b5f1"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "9eb541e2650b393670ef15ccc84c2052"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "147bfa9a79a4fa3b1675bf9bf01fbd3c"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "ed7f01a62e5ae376f0cbcd920096bbb0"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "dc23a09c3cd5f9a45280aa3450e07292"
  },
  {
    "url": "categories/每日一题/index.html",
    "revision": "4fa5a1d02edf6525281dc53607dc6228"
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
    "revision": "dca20e8722ea1b4ebe96f72abdcb3f7a"
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
    "revision": "6efe623e4d6aac06f9792f0d0965426e"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "d4d1cf0e217c8f74d0eff41bc4dc63a7"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "b9679662c00c64adc3adc7905c1f3f55"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c80b26e77aaeee8486650df596bf3112"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "5e54ad37306511627c6e0609bff31271"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "68e9a5d5003001df9822994244e01861"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "14b7f3009bfb9576d641cdf349212a04"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "097de5e6a96a2acef2b6c111ff0b3c9b"
  },
  {
    "url": "tag/index.html",
    "revision": "1bbadf12a4e2e49c8727f1f7e97dfd3a"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "7760b2a60aab0e4c092a199f7c897b6f"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "78a74214aeb5b6de40f56226c8aa164b"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "403f7d064848f40719fdde73c8e7cf54"
  },
  {
    "url": "tag/powerShell/index.html",
    "revision": "638f4290cd47aa530259ee5ea7c4ec62"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "634a153a91b4dc9bb3bec127b115449f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b0dbbafba1570e4e3a6a1a0d81920663"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "10bca93826ddcd448ee35680505acd9a"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "36e4205f65d8fd3b15db17bb36e79be9"
  },
  {
    "url": "tag/博客优化/index.html",
    "revision": "6466f3f5f47b7bb7a482e572d284d3a8"
  },
  {
    "url": "timeline/index.html",
    "revision": "1fb723b6d9f4de619145e26dfad2aa09"
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
