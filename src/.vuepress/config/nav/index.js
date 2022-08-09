/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-17 15:24:10
 * @LastEditors: pengfei.shao 570165036@qq.com
 * @LastEditTime: 2022-07-19 11:01:39
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
      },
      {
        text: "工具", 
        items: [
          {
            text: "菜鸟工具",
            link: "https://c.runoob.com/",
            icon: "iconfont rays-link"
          },
          {
            text: "图标工具",
            link: "https://img.shields.io/",
            icon: "iconfont rays-link"
          }
        ]
      },
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
