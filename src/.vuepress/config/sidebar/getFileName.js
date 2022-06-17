'use strict'
/**
 * 自动生成siderbar
 * 使用方法：var siderbarhelper = require('./utils/getFilenames.js')
 * siderbarhelper("/views/technology-sharing/vuepress/")
 */


const fs = require('fs');
debugger
// 排除检查的文件
const excludes = ['.DS_Store']
module.exports = (path = '', title, collapsable = true, sidebarDepth = 2) => {
	var arr = new Array();
	var fullpath = null
	let filenames = [];
	debugger
	var children = fs.readdirSync(path).forEach(file => {
		debugger
		if (excludes.indexOf(file) < 0) {
			fullpath = path + "/" + file
			var fileinfo = fs.statSync(fullpath)
			if (fileinfo.isFile()) {
				if (file === 'README.md') {
						file = ''
				} else {
						file = file.replace('.md', '')
				}
				filenames.push(file)
			}
		}
		filenames.sort()
		return filenames
	})
	arr.push({
			title,
			collapsable,
			sidebarDepth,
			"children": filenames
	})
	return arr;
}