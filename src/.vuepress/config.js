const envConfig = require("./build")
const nav = require("./config/nav")
const sidebar = require("./config/sidebar")
const socials = require("./config/socials")
const mottos = require("./config/mottos")
const friendLink = require("./config/friendLink")
const plugins = require('./plugins/index')
const NavPlayer = require('./config/NavPlayer')

const sourceUrl = envConfig.sourceUrl

// 检测网站是否被收录   site:blog.rayshine.site web9158

module.exports = {
  base: "/",
  title: "一ξひβθ光 i",
  description: '当才华不足以支持也行的时候，你就应该努力了！',
	dest: 'dist',
  head: [
		["meta", {name: "viewport",content: "width=device-width,initial-scale=1,user-scalable=no"}],
    ["meta", {name: "baidu-site-verification",content: "code-U0ZDB2tiQp"}],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/mouseClick.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/bg.js"}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/noConsole.js"}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/fairyDustCursor.js"}],
		["script", { src: "https://cdn.bootcdn.net/ajax/libs/typed.js/2.0.12/typed.min.js" }],
		//友盟+统计
		// ["script", { src: "https://s9.cnzz.com/z_stat.php?id=1280664116&web_id=1280664116" }],
		// ['script', {}, `
		// 	document.write(
		// 		unescape(
		// 			"%3Cspan id='cnzz_stat_icon_1280664116' style='position: fixed;bottom: 0px;' %3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php?id=1280664116&show=pic' type='text/javascript'%3E%3C/script%3E"
		// 		)
		// 	);
		// `] 
  ],
  theme: "reco",
  // markdown-it 插件
  markdown: {
    lineNumbers: false,
    plugins: {
      'markdown-it-progress': {
        render: 'svg'
      },
      'markdown-it-task-lists': {
        label: true, 
        labelAfter: true
      }
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  // 热重载触发文件
  patterns: ['**/*.md', '**/*.vue', '**/*.js', '**/*.sytl'],
	locales: {
	  "/": {
	    "lang": 'zh-CN'
	  }
	},
  // permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    // 音乐播放器配置
    NavPlayer,
    // 主题颜色
    mode:"auto",
    //首页样式
    back:{
      musicUrl: envConfig.musicUrl,
      sourceUrl: sourceUrl,
      isRandom: false,
      bgImage: sourceUrl + '/imgs/others/31.jpg',
      homeImage: sourceUrl + '/imgs/others/31.jpg',
      bgUrls: [
        sourceUrl + '/home/1.png',
        sourceUrl + '/home/2.jpg',
        sourceUrl + '/home/3.jpg',
        sourceUrl + '/home/4.png',
        sourceUrl + '/home/5.jpg',
        sourceUrl + '/home/6.png',
        sourceUrl + '/home/7.jpg',
        sourceUrl + '/home/8.jpg',
        sourceUrl + '/home/9.png',
				sourceUrl + '/imgs/city/1.jpg',
				sourceUrl + '/imgs/city/2.jpg',
				sourceUrl + '/imgs/city/3.jpg',
				sourceUrl + '/imgs/city/4.jpg',
				sourceUrl + '/imgs/city/5.jpg',
				sourceUrl + '/imgs/city/6.jpg',
				sourceUrl + '/imgs/city/7.jpg',
				sourceUrl + '/imgs/city/8.jpg',
				sourceUrl + '/imgs/city/9.jpg',
				sourceUrl + '/imgs/others/1.jpg',
				sourceUrl + '/imgs/others/2.png',
				sourceUrl + '/imgs/others/3.png',
				sourceUrl + '/imgs/others/4.jpg',
				sourceUrl + '/imgs/others/5.jpg',
				sourceUrl + '/imgs/others/6.jpg',
				sourceUrl + '/imgs/others/7.jpg',
				sourceUrl + '/imgs/others/8.png',
				sourceUrl + '/imgs/others/9.png',
				sourceUrl + '/imgs/others/10.jpg',
				sourceUrl + '/imgs/others/11.jpg',
				sourceUrl + '/imgs/others/12.jpg',
				sourceUrl + '/imgs/others/13.png',
				sourceUrl + '/imgs/others/31.jpg',
				sourceUrl + '/imgs/others/15.jpg',
				sourceUrl + '/imgs/others/16.jpg',
				sourceUrl + '/imgs/others/17.jpg',
				sourceUrl + '/imgs/others/18.jpg',
				sourceUrl + '/imgs/others/19.jpg',
				sourceUrl + '/imgs/others/20.png'
      ]
    },
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
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客" // 默认 “分类”Category
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签" // 默认 “标签”Tag
      },
    },
    valineConfig: {
			appId: 'C1QftJERODGumPjT0jYf4lU1-gzGzoHsz',// your appId
			appKey: 'ArQ4h9IPpKU31g1XkDRgmX0n', // your appKey
			placeholder: '请务必填写联系方式，方便及时回复！',
			pageSize: 20,
			enableQQ: true,
			recordIP:true,
			visitor:true
    },

    // // 第三方搜索工具  支持全文搜索且免费，内置的搜索只能搜索一级二级标题
    // algolia: {
    //   apiKey: '2e7303515a032dfb8c91084fec9c4b66',
    //   indexName: 'RayShineBlog',
    //   // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //   appId: '4L0A7VRWY5',
    // },


    // 导航栏
    nav,
    // 自定义左侧侧边栏
		sidebar,
		
    logo: sourceUrl + '/home/rainbow-logo.png',
    authorAvatar: sourceUrl + "/avatar/avatar.jpg",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: "上次更新",
    // 作者
    author: "Ray Shine",
    // 备案号
    record: '辽ICP备2021012735',
		// 备案连接地址
		recordLink: '#',
    // 项目开始时间
    startYear: "2020",

    // 个人联系方式
		socials,

    // 友链
    friendLink,

    //首页格言
    mottos
    
  },
  plugins
 };
