/**
 * 自动生成侧边栏配置
 */
const path = require("path")
const rootpath = path.dirname(path.dirname(path.dirname(__dirname))) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath;
const gitFileNames = require('./getFileName.js');
module.exports = {
    // 技术总结
    '/blogs/前端/每日一题/': gitFileNames(docs + '/blogs/前端/每日一题/', '每日一题', false),
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