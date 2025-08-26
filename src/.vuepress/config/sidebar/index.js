/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-22 20:25:06
 * @LastEditors SPF spf1773@gmail.com
 * @LastEditTime 2025-08-26 10:41:12
 * @FilePath /RayShineBlog/src/.vuepress/config/sidebar/index.js
 * @Description: 自动生成侧边栏配置
 * sidebar: {
			'/blogs/前端/面试题/': [
				{
					title: '面试题',
					collapsable: false,
					children: [
						'2022年2月9日',
						'2022年2月8日'
					]
				},
			]
		},
 *
 * 配置规则  '组名': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'路径'), 是否排序，排序顺序，文件名称排序规则)
 *
 * Copyright (c) 2022 by pengfei.shao 570165036@qq.com, All Rights Reserved. 
 */
const path = require("path")
const rootpath = path.resolve(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath;
const  autoGetSidebarOptionBySrcDir  = require('./getFileName.js');
module.exports = {
    // 面试题
    '/blogs/面试题/': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'../../../blogs/面试题/'), true, 'dirName', 'up', {reg: /[\u4e00-\u9fa5]|\.md$/g, to: ''}),
		// CSS
		'/blogs/前端/CSS/': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'../../../blogs/前端/CSS/'), false),
		// JS
		'/blogs/前端/JavaScript/': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'../../../blogs/前端/JavaScript/'), false)
};