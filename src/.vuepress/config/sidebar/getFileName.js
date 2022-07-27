/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-22 20:25:06
 * @LastEditors: pengfei.shao 570165036@qq.com
 * @LastEditTime: 2022-07-22 00:09:07
 * @FilePath: \RayShineHub\src\.vuepress\config\sidebar\getFileName.js
 * @Description: 自动生成siderbar
 * 							 使用方法：var siderbarhelper = require('./utils/getFilenames.js')
 * 							 siderbarhelper("/views/technology-sharing/vuepress/")
 * 
 * Copyright (c) 2022 by pengfei.shao 570165036@qq.com, All Rights Reserved. 
 */
'use strict'

 const path = require("path");
 const dirTree = require("directory-tree");
 const SRC_PATH = path.resolve(__dirname, "../src/blogs");

 /**
  * @description: 按照 vuepress '分组侧边栏'的规范生成单个配置
	* 							参考 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
  * @param {Array} tree
  * @param {boolean} sort
	* @param {string} dsc
  * @return {Object[]}
  */ 
 function toSidebarOption(tree = [], sort, sortType, dsc, replace) {
	if (tree[0] === null) return [];

	const collapsable = true
	const sidebarDepth = 0

	return tree.map((v) => {
		// 文件夹
		if (v.type === 'directory') {
			// 是否根据目录名称排序
			if (sort) v.children.sort((a, b) => {
				// ctimeMs 排序
				if (sortType === 'ctime') {
					if (dsc === 'up') return a.ctimeMs - b.ctimeMs
					if (dsc === 'down') return b.ctimeMs - a.ctimeMs
				}
				// mtimeMs 排序
				if (sortType === 'mtime') {
					if (dsc === 'up') return a.mtimeMs - b.mtimeMs
					if (dsc === 'down') return b.mtimeMs - a.mtimeMs
				}
				// dirName 排序
				if (dsc === 'down') return b.name.replace(replace.reg, replace.to) - a.name.replace(replace.reg, replace.to)
				return a.name.replace(replace.reg, replace.to) - b.name.replace(replace.reg, replace.to)
			})
			return {
				title: v.name,
				collapsable: collapsable, // 可选的, 默认值是 true,
				sidebarDepth: sidebarDepth,
				children: toSidebarOption(v.children, sort, sortType, dsc, replace)
			}; 

		// 文件
		} else {
			// 因为所有的md文件必须放到'docs'文件夹下
			// 所以相对路径就是'docs'后面的部分
			// 最后把扩展名去掉, 就是路由的路径
			if (!v.path.split("src")[1]) return ""
			return [v.path.split("src")[1].replace(/\.md$/, ""), v.path.split("/")[v.path.split("/").length - 1].replace(/\.md$/, "")];
		}
	})
 }

	
 /**
  * @description: 根据 自定义文件夹'docs/src'自动生成vuepress的sidebar选项
  * @param {string} sidebarPath 自定义文件夹路径,必须在docs文件夹下
	* @param {boolean} sort 是否根据目录名称排序
	* @param {boolean} sortType 排序类型（dirName：文件夹名称，ctime：创建时间，mtime：修改时间）
	* @param {string} dsc up升序还是dowm降序
	* @param {Object} replace 排序名称默认规则，使用正则过滤目录名称，将目录名称处理成可排序的字符串
  * @return {object[]}
  */	
 function autoGetSidebarOptionBySrcDir(sidebarPath = SRC_PATH, sort = true, sortType = 'dirName', dsc = 'up', replace = {reg: /\.md$/g, to: ''}) {
		 const srcDir = dirTree(sidebarPath, {
				 extensions: /\.md$/,
				 normalizePath: true,
				 attributes:['size', 'type', 'extension', 'ctimeMs', 'mtimeMs']  // 不加参数默认不显示，坑的一
		 });
		 const srcDirArr = []
		 srcDirArr.push(srcDir)
		 if (!srcDirArr) return []
		//  console.log(toSidebarOption(srcDirArr, sort, dsc, replace)[0].children[0].children)
		 return toSidebarOption(srcDirArr, sort, sortType, dsc, replace)
		 // [title:'group-name', children:['/route-a','route-b']]
 }
	
 module.exports = autoGetSidebarOptionBySrcDir;