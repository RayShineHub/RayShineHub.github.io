/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-17 15:24:10
 * @LastEditors: pengfei.shao 570165036@qq.com
 * @LastEditTime: 2022-07-03 13:24:35
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
	  icon: "rays-shoucang-4",
	  items: [
      {
        text: "其他", 
        icon: "rays-shoucang-4",
        items: [
          {
            text: "精美壁纸",
            link: "https://wallhaven.cc/",
            icon: "rays-tupianbizhi"
          },
          {
            text: "印记中文",
            link: "https://docschina.org/",
            icon: "rays-lianjie"
          },
          {
            text: "MDN",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
            icon: "rays-logo-javascript"
          }
        ]
      },
      {
        text: "工具", 
        icon: "rays-shoucang-4",
        items: [
          {
            text: "菜鸟工具",
            link: "https://c.runoob.com/",
            icon: "rays-tupianbizhi"
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
