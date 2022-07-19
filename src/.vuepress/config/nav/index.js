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
          },
          {
            text: "MDN",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
            icon: "iconfont rays-javascript"
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
