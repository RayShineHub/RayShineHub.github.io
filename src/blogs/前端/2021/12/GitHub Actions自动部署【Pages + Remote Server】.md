---
title: '【GitHub Actions】自动部署'
date: 2021-12-08
showSponsor: true
isShowComment: true
isAbstract: true
tags:
 - 'GitHub Actions'
 - 'GitHub Pages'
 - 'CentOS7 SFTP配置'
categories: 
 - '前端'

#置顶顺序
sticky: 1
---

<Boxx/>

将 [vuepress](https://www.vuepress.cn) 博客的本地构建过程转移到 [github-actions](https://github.com/features/actions) 中，同时支持将构建结果自动部署到  `GitHub Pages` 及 `linux服务器` 

<!-- more -->

## 开头

最近学了挺多东西，一直苦于没有一个很好的知识储备平台，所以自己动手搭建了一个 [recoluan](https://vuepress-theme-reco.recoluan.com/) 大佬基于 [vuepress](https://www.vuepress.cn) 封装的 <Badge text="清新脱俗" type="success" vertical="middle"/>  的主题博客，准备将自己学习到的知识都记录并分享给大家。

但是，当在我写完一篇文章时，并想将文章同步到  `GitHub Pages` 或者  `自定义服务器` 上时，感觉还是特别的麻烦，流程非常繁琐：

- **优化前流程**
  1. 写一篇文章
  2. 生成静态文件：`npm run build`
  3. 切换  `gh-pages`  分支
  4. 复制静态文件到  `gh-pages`  分支
  5. 访问网址验证是否成功



于是终于一顿冲浪，让我找到了 ***Lasy*** 的 [使用 GitHub Actions 自动部署博客](https://vuepress-theme-reco.recoluan.com/views/other/github-actions.html)



- **优化后流程**
  1. 写一篇文章
  2. 上传到 `Github` 仓库 `main` 分支
  3. 刷新网页，OK，慢慢享受吧



好，不多说了，我相信博主们已经对 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)非常熟悉了，在这里就不多说了，如果有项目配置不明白的地方，请移步[vuepress-theme-reco@1.x官方文档](https://vuepress-theme-reco.recoluan.com/views/1.x/) 

**本文主要给大家分享下本次搭建  `GitHub Actions`  自动部署的方法。**

## 准备工作

1. ***一个完善的可以 `yarn build` 成功的博客工程，但要注意你编译后的文件路径为 `/dist`，workflow中会用到。***
2. ***一个 `GitHub repo` 。***
3. ***一台支持 `SFTP` 的远程Linux服务器，并且配置好通过 `SFTP` 密钥。***
4. ***写一个 `GitHub Actions`  workflow自动化部署脚本。***



### 1、创建一个blog项目并编译

创建项目这里不多说了，唯一一点是在不说的过程中出现的问题，我提一嘴

::: warning 注意，`node_models` 中依赖的版本需要锁定！！！

不管vuepress项目是以 `npm run build` 来编译，还是使用 `yarn build` 来编译，一定要在项目中生成  **lock** 文件，**缓存** 并 **锁定** 好你项目中每个依赖的版本以及依赖之间的关系，这个特别重要，因为GitHub中的依赖版本不一定能兼容本地工程的依赖版本，如有不懂，请移步 [yarn.lock官方网站](https://yarn.bootcss.com/docs/yarn-lock/)。

:::

个人推荐使用 `yarn` 来安装依赖，具体有什么好处呢？又有什么作用呢？

**特点**：

1. 极其快速：Yarn会缓存它下载的每个包，所以无需重复下载。它还能并行化操作以最大化资源利用率。
2. 特别安全：Yarn会在每个安装包被执行前校验其完整性。
3. 超级可靠：Yarn使用格式详尽而又简洁的lockfile文件和确定性算法来安装依赖，能够保证在一个系统上的运行的安装过程也会以同样的方式运行在其他系统上。	

### 2、[GitHub](https://www.github.com) 创建仓库

​	

## 上流程



### yarn 优化



