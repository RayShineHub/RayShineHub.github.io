/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-17 15:24:10
 * @LastEditors: pengfei.shao 570165036@qq.com
 * @LastEditTime: 2022-07-18 17:35:16
 * @FilePath: \RayShineHube:\Font Project\RayshineHub1.x\src\.vuepress\config\plugins\index.js
 * @Description: 统一插件（plugins）管理中心
 * 
 * Copyright (c) 2022 by pengfei.shao 570165036@qq.com, All Rights Reserved. 
 */
module.exports = {
	"dynamic-title":
	{
		showIcon: "https://cdn.rayshine.site/blog/home/favicon.ico",
		showText: "Welcome Back !",
		hideIcon: "https://cdn.rayshine.site/blog/home/favicon1.ico",
		hideText: "Wait ...",
		recoverTime: 2000
	},
	"vuepress-plugin-code-copy":
	{
		successText: "复制成功!"
	},
	"vuepress-plugin-boxx": {},
	'vuepress-plugin-sitemap': {
		hostname: 'https://blog.rayshine.site',
		exclude: ['/404.html']
	},
	'@vuepress-reco/loading-page': {},
	'@vuepress/pwa': {
		serviceWorker: true,
		updatePopup: {
				message: "有新内容喔~",
				buttonText: "Get"
		}
	}
}