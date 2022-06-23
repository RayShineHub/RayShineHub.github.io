/**
 * 自动生成侧边栏配置
 * 
 * 
 * // sidebar需要的参数规则，如下
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
 * 配置规则  '组名': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'路径'))
 */


const path = require("path")
const rootpath = path.resolve(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath;
const  autoGetSidebarOptionBySrcDir  = require('./getFileName.js');
module.exports = {
    // 每日一题
    '/blogs/每日一题/': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'../../../blogs/每日一题/'))
};