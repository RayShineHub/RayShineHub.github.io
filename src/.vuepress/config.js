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
    ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/mouseClick.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/bg.js"}],
    ["script", {"src": "https://hm.baidu.com/hm.js?9f41253f09999faf9afb7881ac96ccf9"}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/noConsole.js"}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/fairyDustCursor.js"}],
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
      bgImage: envConfig.sourceUrl + '/imgs/others/31.jpg',
      homeImage: envConfig.sourceUrl + '/imgs/others/31.jpg',
      bgUrls: [
        envConfig.sourceUrl + '/home/1.png',
        envConfig.sourceUrl + '/home/2.jpg',
        envConfig.sourceUrl + '/home/3.jpg',
        envConfig.sourceUrl + '/home/4.png',
        envConfig.sourceUrl + '/home/5.jpg',
        envConfig.sourceUrl + '/home/6.png',
        envConfig.sourceUrl + '/home/7.jpg',
        envConfig.sourceUrl + '/home/8.jpg',
        envConfig.sourceUrl + '/home/9.png',
				envConfig.sourceUrl + '/imgs/city/1.jpg',
				envConfig.sourceUrl + '/imgs/city/2.jpg',
				envConfig.sourceUrl + '/imgs/city/3.jpg',
				envConfig.sourceUrl + '/imgs/city/4.jpg',
				envConfig.sourceUrl + '/imgs/city/5.jpg',
				envConfig.sourceUrl + '/imgs/city/6.jpg',
				envConfig.sourceUrl + '/imgs/city/7.jpg',
				envConfig.sourceUrl + '/imgs/city/8.jpg',
				envConfig.sourceUrl + '/imgs/city/9.jpg',
				envConfig.sourceUrl + '/imgs/others/1.jpg',
				envConfig.sourceUrl + '/imgs/others/2.png',
				envConfig.sourceUrl + '/imgs/others/3.png',
				envConfig.sourceUrl + '/imgs/others/4.jpg',
				envConfig.sourceUrl + '/imgs/others/5.jpg',
				envConfig.sourceUrl + '/imgs/others/6.jpg',
				envConfig.sourceUrl + '/imgs/others/7.jpg',
				envConfig.sourceUrl + '/imgs/others/8.png',
				envConfig.sourceUrl + '/imgs/others/9.png',
				envConfig.sourceUrl + '/imgs/others/10.jpg',
				envConfig.sourceUrl + '/imgs/others/11.jpg',
				envConfig.sourceUrl + '/imgs/others/12.jpg',
				envConfig.sourceUrl + '/imgs/others/13.png',
				envConfig.sourceUrl + '/imgs/others/31.jpg',
				envConfig.sourceUrl + '/imgs/others/15.jpg',
				envConfig.sourceUrl + '/imgs/others/16.jpg',
				envConfig.sourceUrl + '/imgs/others/17.jpg',
				envConfig.sourceUrl + '/imgs/others/18.jpg',
				envConfig.sourceUrl + '/imgs/others/19.jpg',
				envConfig.sourceUrl + '/imgs/others/20.png'
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
    authorAvatar: envConfig.sourceUrl + "/avatar/avatar.jpg",

    search: true,
    searchMaxSuggestions: 10,

    // 第三方搜索工具  支持全文搜索且免费，内置的搜索只能搜索一级二级标题
    algolia: envConfig.algolia,

    lastUpdated: "最后更新时间",
    
    // 备案号
    record: '辽ICP备2021012735',
		// 备案连接地址
		recordLink: '#',
    // 项目开始时间
    startYear: "2020",

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