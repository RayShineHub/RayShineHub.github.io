/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-17 15:24:10
 * @LastEditors: Ray Shine spf1773@gmail.com
 * @LastEditTime: 2023-03-01 15:24:03
 * @FilePath: \RayShineHub\src\.vuepress\config\nav\index.js
 * @Description: 统一自定义NavLinks配置中心
 * 
 * Copyright (c) 2022 by pengfei.shao 570165036@qq.com, All Rights Reserved. 
 */
module.exports = [
  //Home
  { text: "主页", link: "/", icon: "reco-home" }, 
  //TimeLine
  { text: "时间轴", link: "/timeline/", icon: "reco-date" }, 
	//Contact
	{
	  text: "收藏", 
	  icon: "iconfont rays-favicon-star-face",
	  items: [
      {
        text: "文档", 
        items: [
          {
            text: "Vue.js",
            link: "https://cn.vuejs.org/",
            icon: "iconfont rays-vuejs"
          },
          {
            text: "React",
            link: "https://react.docschina.org/",
            icon: "iconfont rays-react"
          },
          {
            text: "MDN",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
            icon: "iconfont rays-javascript"
          },
          {
            text: "uniapp",
            link: "https://uniapp.dcloud.net.cn/",
            imgUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788"
          },
          {
            text: "DocSearch",
            link: "https://docsearch.algolia.com/",
            imgUrl: "https://docsearch.algolia.com/img/favicon.ico"
          }
        ]
      },
      {
        text: "导航 & 工具", 
        items: [
          {
            text: "菜鸟工具",
            link: "https://c.runoob.com/",
            icon: "iconfont rays-link"
          },
          {
            text: "图标工具",
            link: "https://badgen.net/",
            icon: "iconfont rays-link"
          },
          {
            text: "CodePen",
            link: "https://codepen.io/your-work/?item_type=pen",
            imgUrl: "https://cpwebassets.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg"
          },
					{
						text: "站联导航",
						link: "https://www.zhanlian.net/",
						imgUrl: "https://www.zhanlian.net/wp-content/uploads/2021/12/%E4%BA%92%E8%81%94%E7%BD%91.png"
					}
        ]
      },
			{
			  text: "其他", 
			  items: [
			    {
			      text: "精美壁纸",
			      link: "https://wallhaven.cc/",
			      icon: "iconfont rays-picture"
			    },
			    {
			      text: "印记中文",
			      link: "https://docschina.org/",
			      icon: "iconfont rays-link"
			    }
			  ]
			}
	  ],
	},
  //About
  // { text: "关于我", link: "/about/", icon: "reco-account" }, 
  //Contact
  // {
  //   text: "联系我", 
  //   icon: "reco-message",
  //   items: [
  //     {
  //       text: "GitHub",
  //       link: "https://github.com/RayShineHub",
  //       icon: "reco-github",
  //     }
  //   ],
  // },
];
