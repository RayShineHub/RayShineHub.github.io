---
title: '博客篇 -- Vuepress 音乐播放器'
date: 2022-07-07
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebar: false
meta:
  - name: description
    content: Vuepress 音乐播放器
  - name: keywords
    content: Vuepress Aplayer 博客 博客优化 axios 网易云音乐 neteasecloudmusicapi NavPlayer Vue音乐播放器
tags:
 - '博客优化'
 - 'Vuepress'
categories: 
 - '前端'

#置顶顺序
sticky: 1
---

<Boxx/>

基于 [vuepress v1.x](https://www.vuepress.cn) ，接入[网易云音乐API](https://neteasecloudmusicapi.vercel.app/)，纯手写一个 `HTML` 音乐播放器，目前支持获取指定ID的 [网易云歌单](https://music.163.com/#/playlist?id=144719593)，随机播放，未来实现展示歌单。

<!-- more -->

先看下效果。

![NavPlayer](https://cdn.rayshine.site/blog/NavPlayer/NavPlayer.png)

## 功能设计

- [x] 获取歌单
- [X] 获取歌单
- [X] 检查歌曲是否可用
- [X] 获取音乐文件
- [ ] 获取歌词
- [X] 播放
- [X] 自动播放
- [X] 上一首
- [X] 下一首
- [X] 音量控制
- [X] 显示歌曲写真，暂停时固定，播放时旋转
- [X] 显示制作人、歌名
- [X] 显示播放时长
- [ ] 显示歌单
- [ ] 通过歌单播放
- [ ] 显示歌词
- [ ] 控制播放时长
- [ ] 单曲循环
- [ ] 顺序播放
- [ ] 歌单循环
- [ ] 随机播放
- [ ] 节流（按钮，audio时间）