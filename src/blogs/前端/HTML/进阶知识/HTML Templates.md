---
title: 知识篇 -- HTML Templates：可复用DOM结构的声明式定义
description: 深入探讨HTML `<template>` 和 `<slot>` 标签的作用、使用方法以及它们在Web Components中如何实现可复用、可组合的DOM结构，提升开发效率和组件化水平。
date: 2024-04-05
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 8
meta:
  - name: description
    content: HTML Templates深度解析
  - name: keywords
    content: HTML Template Slot Web Components DOM结构 可复用
tags:
 - HTML
 - 进阶知识
 - Web Components
categories:
 - 前端
---

在Web Components技术栈中，HTML Templates（`<template>` 和 `<slot>` 标签）提供了一种声明式的方式来定义可复用的DOM结构。它们允许开发者创建不会立即渲染到页面上的HTML片段，这些片段可以在需要时通过JavaScript进行实例化和插入，极大地提升了组件的灵活性和可组合性。

<!-- more -->

## `<template>` 标签：惰性内容容器

`<template>` 标签用于声明一个HTML片段，该片段在页面加载时不会被渲染，但可以通过JavaScript访问其内容。它的内容是“惰性”的，这意味着：

*   **不会被渲染**：浏览器不会渲染 `<template>` 标签内的内容，即使其中包含图片或脚本，也不会加载或执行。
*   **不属于文档流**：`<template>` 标签及其内容不属于文档流，不会影响页面的布局。
*   **可访问性**：其内容可以通过JavaScript的 `content` 属性访问，返回一个 `DocumentFragment` 对象。

### 使用场景

*   **Web Components**：作为自定义元素和Shadow DOM的内部结构模板。
*   **延迟渲染**：定义需要根据用户交互或其他条件动态添加到页面的HTML结构。
*   **客户端模板**：作为JavaScript框架或库的客户端模板。

### 基本用法

```html
<template id="myTemplate">
    <style>
        p { color: blue; }
    </style>
    <div>
        <h2>模板标题</h2>
        <p>这是模板中的内容。</p>
        <img src="placeholder.png" alt="占位符图片">
        <script>console.log('模板中的脚本不会立即执行');</script>
    </div>
</template>

<script>
    // 获取模板内容
    const template = document.getElementById('myTemplate');
    const content = template.content; // content是一个DocumentFragment

    // 克隆模板内容并插入到DOM中
    const clone = content.cloneNode(true); // true表示深克隆，包括所有子节点
    document.body.appendChild(clone);

    // 此时，模板中的h2和p标签会被渲染，图片会被加载，但脚本不会执行
</script>
```
**注意**：模板中的 `<style>` 标签在被插入到文档DOM后会生效，但如果模板内容被插入到Shadow DOM中，则样式会封装在Shadow DOM内部。

## `<slot>` 标签：内容分发占位符

`<slot>` 标签是Web Components中用于内容分发（Content Distribution）的占位符。它只能在Shadow DOM内部使用，允许外部的“轻量级DOM”（Light DOM）内容插入到Shadow DOM的特定位置。

### 作用

*   **内容组合**：将组件外部提供的内容（Light DOM）与组件内部定义的Shadow DOM结构进行组合。
*   **灵活性**：使得Web组件能够接受和渲染外部的任意HTML内容，增加了组件的灵活性和可定制性。

### 类型

1.  **匿名插槽 (Unnamed Slot)**：
    *   没有 `name` 属性的 `<slot>` 元素。
    *   它会接收所有未指定 `slot` 属性的轻量级DOM内容。
    *   一个Shadow DOM中只能有一个匿名插槽。

2.  **具名插槽 (Named Slot)**：
    *   带有 `name` 属性的 `<slot>` 元素。
    *   它会接收 `slot` 属性值与 `name` 匹配的轻量级DOM内容。
    *   可以有多个具名插槽。

### 基本用法

**Shadow DOM内部定义**：
```javascript
// my-component.js
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .wrapper { border: 1px solid #ccc; padding: 10px; }
        .header { font-weight: bold; }
        .footer { font-size: 0.8em; color: #666; }
    </style>
    <div class="wrapper">
        <div class="header">
            <slot name="title">默认标题</slot> <!-- 具名插槽 -->
        </div>
        <div class="body">
            <slot></slot> <!-- 匿名插槽 -->
        </div>
        <div class="footer">
            <slot name="actions"></slot> <!-- 具名插槽 -->
        </div>
    </div>
`;

class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-component', MyComponent);
```

**HTML中使用**：
```html
<my-component>
    <h3 slot="title">我的自定义组件</h3>
    <p>这是组件的主体内容。</p>
    <button slot="actions">点击我</button>
</my-component>

<my-component>
    <!-- 没有提供title插槽，会显示默认标题 -->
    <p>只有主体内容的另一个组件实例。</p>
</my-component>
```
在上面的例子中，`<h3>` 元素通过 `slot="title"` 属性被分发到Shadow DOM中 `name="title"` 的插槽位置；`<p>` 元素没有 `slot` 属性，被分发到匿名插槽；`<button>` 元素通过 `slot="actions"` 属性被分发到 `name="actions"` 的插槽位置。

## `<template>` 和 `<slot>` 在Web Components中的结合

`<template>` 和 `<slot>` 标签通常与自定义元素和Shadow DOM结合使用，以构建完整的Web组件。`<template>` 用于定义组件的内部结构和样式，而 `<slot>` 则用于在组件内部创建内容插入点，允许外部内容与内部结构进行组合。

这种组合方式使得Web组件具有高度的封装性、可复用性和可组合性，是现代Web开发中实现组件化的强大工具。

## 总结

HTML `<template>` 和 `<slot>` 标签是Web Components技术栈中不可或缺的组成部分。`<template>` 提供了一种声明式定义惰性DOM结构的方式，而 `<slot>` 则实现了组件内部与外部内容之间的灵活组合。通过有效地利用这两个标签，开发者可以构建出结构清晰、功能强大、高度可复用且易于维护的Web组件，从而提升前端开发的效率和质量。
