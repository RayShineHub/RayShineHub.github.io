/**
 * 自动生成侧边栏配置
 */
const path = require("path")
const rootpath = path.resolve(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
debugger
const docs = rootpath;
const  autoGetSidebarOptionBySrcDir  = require('./getFileName.js');
module.exports = {
    // 技术总结
    '/blogs/前端/每日一题/': autoGetSidebarOptionBySrcDir(path.resolve(__dirname,'../../../blogs/前端/每日一题/')),
};

// sidebar: {
// 			'/blogs/前端/每日一题/': [
// 				{
// 					title: '每日一题',
// 					collapsable: false,
// 					children: [
// 						'2022年2月9日',
// 						'2022年2月8日'
// 					]
// 				},
// 			]
// 		},