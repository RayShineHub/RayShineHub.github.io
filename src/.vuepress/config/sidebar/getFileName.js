'use strict'
/**
 * 自动生成siderbar
 * 使用方法：var siderbarhelper = require('./utils/getFilenames.js')
 * siderbarhelper("/views/technology-sharing/vuepress/")
 */
 const path = require("path");
 const dirTree = require("directory-tree");
 const SRC_PATH = path.resolve(__dirname, "../src/blogs");
	
 // 按照 vuepress '分组侧边栏'的规范生成单个配置
 // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
 
 function toSidebarOption(tree = []) {
	if (tree[0] === null) return [];
	return tree.map((v) => {
		// 文件夹
		if (v.type === 'directory') {
			return {
				title: v.name,
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 1,
				children: toSidebarOption(v.children),
			};

		// 文件
		} else {
			// 因为所有的md文件必须放到'docs'文件夹下
			// 所以相对路径就是'docs'后面的部分
			// 最后把扩展名去掉, 就是路由的路径
			if (!v.path.split("src")[1]) return ""
			return v.path.split("src")[1].replace(/\.md$/, "");
		}
	})
	return tree;
 }
	
 /**
	* @desc 根据 自定义文件夹'docs/src'自动生成vuepress的sidebar选项
	* @param {string} srcPath 自定义文件夹路径,必须在docs文件夹下
	* @returns {object[]}
	*/
 function autoGetSidebarOptionBySrcDir(sidebarPath = SRC_PATH) {
		 const srcDir = dirTree(sidebarPath, {
				 extensions: /\.md$/,
				 normalizePath: true,
				 attributes:['size', 'type', 'extension']  // 不加参数默认不显示，坑的一
		 });
		 const srcDirArr = []
		 srcDirArr.push(srcDir)
		 if (!srcDirArr) return []
		 return toSidebarOption(srcDirArr);
		 // [title:'group-name', children:['/route-a','route-b']]
 }
	
 module.exports = autoGetSidebarOptionBySrcDir;