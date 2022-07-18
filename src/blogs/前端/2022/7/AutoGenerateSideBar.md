---
title: '博客篇 -- Vuepress自动生成SideBar'
date: 2022-07-01
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
meta:
  - name: description
    content: Vuepress自动生成SideBar
  - name: keywords
    content: Vuepress SideBar 博客 AutoGenerateSideBar 博客优化 directory-tree
tags:
 - '博客优化'
 - 'Vuepress'
categories: 
 - '前端'

#置顶顺序
sticky: 1
---

<Boxx/>

基于 [vuepress v1.x](https://www.vuepress.cn) 博客，通过[directory-tree](https://www.npmjs.com/package/directory-tree)模块，指定文件夹，自动提取该文件夹下所有文件目录和文件，自动生成 `SideBar` 左侧侧边栏。

<!-- more -->

## 前言

Vuepress相信大家已经很熟悉了，其中SideBar的配置及生成实在是有点儿用不太习惯，于是就着手写一个简单的自动生成左侧侧边栏的脚本，支持`指定文件夹`，`文件名称排序`，`根据文件名称自定义排序规则`。
<br/>
当然，如果大家不想手写，也可以参考[VuePress 自动生成侧边栏和导航栏，完美替代 [GitBook](https://juejin.cn/post/6844903935027707918)。
<br/>
同时感谢[贝茵斯都](https://blog.csdn.net/weixin_40532650/article/details/115165153)。

::: theorem Vuepress 支持的 AutoSideBar

  1. `front matter`

  ``` yaml
    ---
    sidebar: auto
    ---
  ```
  2. `themeConfig`

  ``` js
    // .vuepress/config.js
    module.exports = {
      themeConfig: {
        sidebar: 'auto'
      }
    }
  ```
:::

:kiss: 不管怎么配置，总是达不到自己想要的效果，而且要想达到效果，需要在 `themeConfig` 中加入太多的代码。:kiss:

``` js
  // .vuepress/config.js
  module.exports = {
    themeConfig: {
      sidebar: [
        {
          title: 'Group 1',   // 必要的
          path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/'
          ]
        },
        {
          title: 'Group 2',
          children: [ /* ... */ ],
          initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
      ]
    }
  }
```

## 安装插件
- npm
```sh
npm i -D directory-tree@latest
```

- yarn
```sh
yarn add directory-tree@latest
```

## 分析结构

::: theorem 1.项目本地目录结构

![博客目录结构](https://cdn.rayshine.site/AutoSideBar/博客目录结构.png)

:::

::: theorem 2.VuePress需要的Sidebar结构数据

```js
sidebar: {
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
}
```

:::

::: theorem 3.需求 OR 目标

`每日一题` 文件夹下所有的文件 **自动生成侧边栏**，其余目录不生成。

:::

## 获取&组装数据

在`.vuepress/config` 文件夹下新建 `sidebar` 文件夹及所需文件。
<br><br>
![AutoSideBar文件目录](https://cdn.rayshine.site/AutoSideBar/AutoSideBar文件目录.png)

### index.js

```js
'use strict'
  
const path = require("path")

const  AutoGenerateSideBar  = require('./getFileName.js');
module.exports = {
    // 每日一题
    '/blogs/每日一题/': AutoGenerateSideBar(path.resolve(__dirname,'../../../blogs/每日一题/'), true, 'up', {reg: /[\u4e00-\u9fa5]|\.md$/g, to: ''})
    // 其他分组
    ...
}

```

### getFileName.js

```js
'use strict'

 const path = require("path");
 const dirTree = require("directory-tree");
 const SRC_PATH = path.resolve(__dirname, "../src/blogs");

 /**
  * @description: 按照 vuepress '分组侧边栏'的规范生成单个配置
  * @param {Array} tree
  * @param {boolean} sort
  * @param {string} dsc
  * @return {Object[]}
  */ 
 function GenerateOptions(tree = [], sort, dsc, replace) {
	if (tree[0] === null) return [];

	const collapsable = true
	const sidebarDepth = 1

	return tree.map((v) => {
		// 文件夹
		if (v.type === 'directory') {
			// 是否根据目录名称排序
			if (sort) v.children.sort((a, b) => {
				if (dsc === 'down') return b.name.replace(replace.reg, replace.to) - a.name.replace(replace.reg, replace.to)
				return a.name.replace(replace.reg, replace.to) - b.name.replace(replace.reg, replace.to)
			})
			return {
				title: v.name,
				collapsable: collapsable, // 可选的, 默认值是 true,
				sidebarDepth: sidebarDepth,
				children: GenerateOptions(v.children, sort, dsc, replace)  // 递归查找
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
 }

	
 /**
  * @description: 根据 自定义文件夹'docs/src'自动生成vuepress的sidebar选项
  * @param {string} sidebarPath 自定义文件夹路径,必须在docs文件夹下
  * @param {boolean} sort 是否根据目录名称排序
  * @param {string} dsc up升序还是dowm降序
  * @param {Object} replace 排序名称默认规则，使用正则过滤目录名称，将目录名称处理成可排序的字符串
  * @return {object[]}
  */	
 function AutoGenerateSideBar(sidebarPath = SRC_PATH, sort = true, dsc = 'up', replace = {reg: /\.md$/g, to: ''}) {
		 const srcDir = dirTree(sidebarPath, {
				 extensions: /\.md$/,
				 normalizePath: true,
				 attributes:['size', 'type', 'extension']  // 不加参数默认不显示，坑的一
		 });
		 const srcDirArr = []
		 srcDirArr.push(srcDir)
		 if (!srcDirArr) return []
		 return GenerateOptions(srcDirArr, sort, dsc, replace)
 }
	
 module.exports = AutoGenerateSideBar;
```

## 使用
在 `.vuepress/config.js` 文件中添加sidebar属性。

```js
// .vuepress/config.js
const siderbarConf = require("./config/sidebar")

module.exports = {
  themeConfig: {
    sidebar: siderbarConf
  }
}
```

## 效果

![AutoSideBar成果](https://cdn.rayshine.site/AutoSideBar/AutoSideBar成果.png)


[在线示例，欢迎指导](https://blog.rayshine.site)

## 参考文献
[vuepress v1.x](https://www.vuepress.cn)
<br>
[vuepress 侧边栏自动生成](https://blog.csdn.net/weixin_40532650/article/details/115165153)<br>
[VuePress 自动生成侧边栏和导航栏，完美替代 GitBook](https://juejin.cn/post/6844903935027707918)

