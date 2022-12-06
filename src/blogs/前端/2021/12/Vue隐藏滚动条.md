---
title: '知识篇 -- Vue 隐藏滚动条'
date: 2021-12-05
isFull: true
isShowComment: true
isAbstract: true
meta:
  - name: description
    content: Vue 隐藏滚动条
  - name: keywords
    content: Vue 隐藏滚动条
tags:
- 'Vue'
categories:
- '前端'
---

<Boxx/>

## 设置滚动条

```css
	overflow-x: scroll;
	white-space: nowarp;

```

## 隐藏滚动条

```css
	::-webkit-scrollbar {
		width: 0 !important
	}
	::-webkit-scrollbar {
		width: 0 !important
		height: 0
	}

```

