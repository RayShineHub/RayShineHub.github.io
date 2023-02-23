---
title: '博客篇 -- Transition 优化过渡动画丢帧的问题'
description: Transition过渡动画丢帧解决方案
date: 2023-02-22
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
meta:
  - name: description
    content: 'Transition过渡动画丢帧解决方案'
  - name: keywords
    content: transition 硬件加速 css will-change 过渡动画丢帧
tags:
 - '博客优化'
 - 'Vuepress'
categories: 
 - '前端'
#置顶顺序
sticky: 1
---

> 记录 **`Transition`** 过渡动画在执行的过程中一直丢帧的问题。关键在于 **`will-change: transform;`** 属性。

<!-- more -->

最近写了一个 `Vurpress` **沉浸式音乐播放器**，在体验的过程中，每当第一次打开[博客首页](https://blog.rayshine.site)，然后再打开音乐播放软件的时候，总是出现 **卡顿**、**丢帧** 的现象，这里记录下整个问题的优化过程，也为大家提供个解决思路。

## 优化过程

### 1、感谢

[kaixuan - 总结下transition卡顿问题解决方案](https://zhuanlan.zhihu.com/p/48873834)

[angularjs - 找出使用CSS3动画掉帧的原因](https://www.lmlphp.com/user/151293/article/item/4695137/)

### 2、动画本身的问题

**最早之前沉浸式播放器是通过修改 `Div` 本身的 `Height` 属性来完成的**
```html
<div class="immerse-wapper" :style="{height: open ? '100%': '0%'}">
</div>
```
```css
.immerse-wapper{
  /* ... */
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all .3s ease-in-out;
}
```
那么效果如图：
![沉浸式播放器过渡动画优化前height问题](https://cdn.rayshine.site/blog/NavPlayer/沉浸式播放器过渡动画优化前height问题.gif)

::: danger
通过控制 `Div` 本身的 `Height` 属性虽然可以完成 **自上而下** 的过渡动画过程，但是这样会涉及到一个 `DOM树`的 [重排和重绘](https://blog.csdn.net/qq_39998026/article/details/125441268) 的问题，这样非常影响浏览器的性能，导致画面出现卡顿，或者丢帧的现象，**而像 `Transform` 以及 `Opacity` 这样的属性的改变则不会使DOM树进行重排重绘。**
:::

优化后的代码如下：
```html
<!-- 由改变 height 改为 通过 transfrom -->
<div class="immerse-wapper" :class="{'immerse-wapper-open': open}">
</div>
```
```css
.immerse-wapper{
  /* ... */
  height: 100%;
  position: fixed;
  /* top: 0; */
  left: 0;
  bottom: 100%
  transition: all .3s ease-in-out;
}

.immerse-wapper-open {
  /* 开启硬件加速 */
  webkit-transform: translateY(100%);
  -moz-transform: translateY(100%);
  -ms-transform: translateY(100%);
  -o-transform: translateY(100%);
  transform: translateY(100%);
}
```
经过 `Height` 到 `Transfrom` 的转变确实在性能上得到了很好的优化，但是依然还是会出现卡顿，丢帧的现象。

### 3、Transfrom的问题
![沉浸式播放器过渡动画优化前](https://cdn.rayshine.site/blog/NavPlayer/沉浸式播放器过渡动画优化前.gif)

可以看到在整个 `Transition` 过渡动画的过程中，播放器不止一次的出现卡顿，丢帧的现象，为了解决问题，让我们先学习使用谷歌浏览器 `DevTools` 中的 `(性能)Performance` 进行动画性能分析，如果需要请参考[这里](https://www.51cto.com/article/661836.html)。

![性能图优化前](https://cdn.rayshine.site/blog/NavPlayer/性能图优化前.png)

通过性能分析报告，我们能看到，从 **动画开始** 一直到 **动画结束**，出现了很多的 **丢帧** 或者 **部分丢帧** 的现象，在网上一顿冲浪，终于找到了关键属性 **`will-change: transform;`**，它可以让我们 **提前通知浏览器** 我们将可能会对元素进行哪些更改，以便它可以在需要之前进行适当的优化。可以更改和更快地渲染元素，从而获得更流畅的体验。

让我们一起来看代码的优化：
```html
<div class="immerse-wapper" :class="{'immerse-wapper-open': open}">
</div>
```
```css
.immerse-wapper{
  /* ... */
  height: 100%;
  position: fixed;
  /* top: 0; */
  left: 0;
  bottom: 100%
  will-change: transform;      /* 没错，我们只需要一行代码 */
  transition: all .3s ease-in-out;
}

.immerse-wapper-open {
  /* 开启硬件加速 */
  webkit-transform: translateY(100%);
  -moz-transform: translateY(100%);
  -ms-transform: translateY(100%);
  -o-transform: translateY(100%);
  transform: translateY(100%);
}
```

**效果如下：**
![沉浸式播放器过渡动画优化前](https://cdn.rayshine.site/blog/NavPlayer/沉浸式播放器过渡动画优化后.gif)

是不是流畅很多，而且丢帧的现象基本修复了 **百分之99** ，虽然治标不治本，但是至少算是一种解决思路。

![性能图优化前](https://cdn.rayshine.site/blog/NavPlayer/性能图优化后.png)


##  知识点 - will-change

- 它是做什么的呢

CSS 是用来描述结构化文档（如HTML、XML）怎样渲染的语言。

CSS渲染器在渲染属性前，会有个准备的过程。有些属性需要css渲染器事先做很多准备才能实现渲染。这就容易导致页面出现卡顿，交互体验不好等问题。

如果设置了 `will-change` 属性，那么浏览器就可以提前知道哪些元素的属性将会改变，提前做好准备。待需要改变元素的时机到来时，就可以立刻实现它们。从而避免卡顿等问题。
> 例如，使用 3D Transforms 让元素在屏幕上移动时，此元素和它的上下文会被提到另一个 “层” ，独立于其它元素被渲染。这样那些不变的元素就能避免被重复渲染。这可以显著提高性能。

更多知识请参考[will-change - CSS:层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change)。

::: warning
不要对太多元素使用 `will-change`，这会导致相反的结果,可能会引发一些十分耗费资源的优化措施。
目前，`Chrome`，`Firefox`和 `Opera` 支持此功能。它似乎得到了所有现代浏览器 **in the future** 的支持。
:::

