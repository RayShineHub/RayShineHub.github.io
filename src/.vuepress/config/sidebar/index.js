/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-22 20:25:06
 * @LastEditors: pengfei.shao 570165036@qq.com
 * @LastEditTime: 2022-07-04 23:42:02
 * @FilePath: \RayShineHub\src\.vuepress\config\sidebar\index.js
 * @Description: 自动生成侧边栏配置
 * sidebar: {
			'/blogs/前端/每日一题/': [
				{
					title: '每日一题',
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
    // 每日一题
    '/blogs/每日一题/': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'../../../blogs/每日一题/'), true, 'up', {reg: /[\u4e00-\u9fa5]|\.md$/g, to: ''}),
		'/blogs/前端/CSS/': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'../../../blogs/前端/CSS/'), false)
};