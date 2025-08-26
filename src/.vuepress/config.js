const envConfig = require("./build")
// const { nav, sidebar, socials, mottos, friendLink, plugins, NavPlayer} = require("./config")
const nav = require("./config/nav")
const sidebar = require("./config/sidebar")
const socials = require("./config/socials")
const mottos = require("./config/mottos")
const friendLink = require("./config/friendLink")
const plugins = require('./config/plugins')
const NavPlayer = require('./config/NavPlayer')


module.exports = {
  base: '/',
  title: "一ξひβθ光 i",
  description: '当才华不足以支持野心的时候，你就应该努力了！',
  dest: "dist",
  // 热重载触发文件
  patterns: ['**/*.md', '**/*.vue', '**/*.js', '**/*.sytl'],
  head: [
    ["meta", {name: "viewport",content: "width=device-width,initial-scale=1,user-scalable=no"}],
    ["meta", {name: "baidu-site-verification",content: "code-U0ZDB2tiQp"}],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
    // ["script", {"language": "javascript","type": "text/javascript","src": "/js/mouseClick.js"}],
    // ["script", {"language": "javascript","type": "text/javascript","src": "/js/bg.js"}],
    ["script", {"src": "https://hm.baidu.com/hm.js?9f41253f09999faf9afb7881ac96ccf9", async: true}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/noConsole.js", async: true}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/fairyDustCursor.js", async: true}],
    // ["script", {"language": "javascript","type": "text/javascript","src": "/js/fish.js"}],
		["script", { src: "https://cdn.bootcdn.net/ajax/libs/typed.js/2.0.12/typed.min.js" }],
    ["link", { rel: "preconnect", href: "https://5KJPBBG282-dsn.algolia.net", crossorigin: true }]
  ],
  theme: "reco",
  markdown: {
    lineNumbers: false,
    plugins: {
      'markdown-it-task-lists': {
        label: true, 
        labelAfter: true
      }
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  locales: {
	  "/": {
	    "lang": 'zh-CN'
	  }
	},
  themeConfig: {
    // 音乐播放器
    NavPlayer,
    // 主题颜色
    mode:"auto",
    //首页样式
    back:{
      musicUrl: envConfig.musicUrl,
      sourceUrl: envConfig.sourceUrl,
      isRandom: false,
      bgImage: envConfig.sourceUrl + '/imgs/others/31.webp',
      homeImage: envConfig.sourceUrl + '/imgs/others/31.webp',
      bgUrls: [
        envConfig.sourceUrl + '/home/1.webp',
        envConfig.sourceUrl + '/home/2.webp',
        envConfig.sourceUrl + '/home/3.webp',
        envConfig.sourceUrl + '/home/4.webp',
        envConfig.sourceUrl + '/home/5.webp',
        envConfig.sourceUrl + '/home/6.webp',
        envConfig.sourceUrl + '/home/7.webp',
        envConfig.sourceUrl + '/home/8.webp',
        envConfig.sourceUrl + '/home/9.webp',
				envConfig.sourceUrl + '/imgs/city/1.webp',
				envConfig.sourceUrl + '/imgs/city/2.webp',
				envConfig.sourceUrl + '/imgs/city/3.webp',
				envConfig.sourceUrl + '/imgs/city/4.webp',
				envConfig.sourceUrl + '/imgs/city/5.webp',
				envConfig.sourceUrl + '/imgs/city/6.webp',
				envConfig.sourceUrl + '/imgs/city/7.webp',
				envConfig.sourceUrl + '/imgs/city/8.webp',
				envConfig.sourceUrl + '/imgs/city/9.webp',
				envConfig.sourceUrl + '/imgs/others/1.webp',
				envConfig.sourceUrl + '/imgs/others/2.webp',
				envConfig.sourceUrl + '/imgs/others/3.webp',
				envConfig.sourceUrl + '/imgs/others/4.webp',
				envConfig.sourceUrl + '/imgs/others/5.webp',
				envConfig.sourceUrl + '/imgs/others/6.webp',
				envConfig.sourceUrl + '/imgs/others/7.webp',
				envConfig.sourceUrl + '/imgs/others/8.webp',
				envConfig.sourceUrl + '/imgs/others/9.webp',
				envConfig.sourceUrl + '/imgs/others/10.webp',
				envConfig.sourceUrl + '/imgs/others/11.webp',
				envConfig.sourceUrl + '/imgs/others/12.webp',
				envConfig.sourceUrl + '/imgs/others/13.webp',
				envConfig.sourceUrl + '/imgs/others/31.webp',
				envConfig.sourceUrl + '/imgs/others/15.webp',
				envConfig.sourceUrl + '/imgs/others/16.webp',
				envConfig.sourceUrl + '/imgs/others/17.webp',
				envConfig.sourceUrl + '/imgs/others/18.webp',
				envConfig.sourceUrl + '/imgs/others/19.webp',
				envConfig.sourceUrl + '/imgs/others/20.webp'
      ]
    },
    // 关闭 404 腾讯页
    noFoundPageByTencent: false,

    indexTitle:"看走眼的东西，要及时扔掉。抓不住的东西，伸手都是多余。",
    indexDes:"Throw away the wrong things in time, what you can't grasp is superfluous.",

    //是否全屏样式 true，false
    fullscreen: true,

    //全屏模式下才应用 分类图片 不填或者默认为随机
    categoryPic: null,

    tagPic: null,

    timePic: null,

    modePicker: true,

    type: "blog",
    // 导航栏
    nav,
    // 左侧侧边栏
    sidebar,
    // 文章大纲
    subSidebar: 'auto',
    blogConfig: {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // 评论设置
    valineConfig: {
			appId: 'C1QftJERODGumPjT0jYf4lU1-gzGzoHsz',// your appId
			appKey: 'ArQ4h9IPpKU31g1XkDRgmX0n', // your appKey
			placeholder: '请务必填写联系方式，方便及时回复！',
			pageSize: 20,
			enableQQ: true,
			recordIP:true,
			visitor:true
    },
    logo: envConfig.sourceUrl + '/home/rainbow-logo.png',

    author: "Ray Shine",
    authorAvatar: envConfig.sourceUrl + "/avatar/avatar.webp",

    search: true,
    searchMaxSuggestions: 10,

    // 第三方搜索工具  支持全文搜索且免费，内置的搜索只能搜索一级二级标题
    algolia: envConfig.algolia,

    lastUpdated: "最后更新时间",
    
    // 备案号
    record: '蒙ICP备2025029961号-1',
		// 备案连接地址
		recordLink: 'https://beian.miit.gov.cn/',
    // 项目开始时间
    startYear: "2022",

    // 友链
    friendLink,

    // 个人联系方式
		socials,

    // 友链
    friendLink,

    //首页格言
    mottos

  },
  plugins
}