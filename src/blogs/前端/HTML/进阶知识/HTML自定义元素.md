---
title: 知识篇 -- HTML自定义元素：构建可复用组件
description: 深入探讨HTML自定义元素（Custom Elements）的概念、生命周期、如何创建和使用，以及它们在构建可复用、封装性强的Web组件中的作用。
date: 2024-03-25
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 6
meta:
  - name: description
    content: HTML自定义元素深度解析
  - name: keywords
    content: HTML 自定义元素 Custom Elements Web Components 组件化 封装
tags:
 - HTML
 - 进阶知识
 - Web Components
categories:
 - 前端
---

在现代Web开发中，组件化是提高开发效率和代码可维护性的核心思想。HTML自定义元素（Custom Elements）作为Web Components规范的一部分，允许开发者定义自己的HTML标签，这些标签拥有自定义的行为和功能，并且可以像原生HTML标签一样在任何Web页面中使用。这为构建可复用、封装性强的Web组件提供了原生的解决方案。

<!-- more -->

## 什么是自定义元素？

自定义元素是Web Components规范中的一项技术，它允许开发者创建全新的HTML标签，或者扩展现有的HTML标签。这些自定义标签拥有自己的DOM结构、样式和行为，并且与页面的其他部分隔离。

自定义元素有两种类型：

1.  **自主自定义元素 (Autonomous custom elements)**：完全独立的HTML元素，不继承自任何内置HTML元素。它们直接继承自 `HTMLElement`。例如：`<my-component>`。
2.  **自定义内置元素 (Customized built-in elements)**：继承自标准的HTML元素，并扩展其功能。例如：`<button is="my-button">`。

## 创建自定义元素

创建自定义元素主要包括两个步骤：定义一个JavaScript类和注册这个类。

### 1. 定义JavaScript类

自定义元素的JavaScript类必须继承自 `HTMLElement`（对于自主自定义元素）或特定的内置HTML元素（对于自定义内置元素）。在这个类中，你可以定义元素的行为、属性和生命周期回调。

**示例**：
```javascript
class MyGreeting extends HTMLElement {
    constructor() {
        super(); // 必须调用super()来正确初始化父类
        // 可以在这里进行一些初始化工作，但不要操作DOM
        console.log('MyGreeting constructor called');
    }

    // 生命周期回调函数
    connectedCallback() {
        // 当元素首次被插入到文档DOM时调用
        // 适合在这里进行DOM操作、事件监听等
        console.log('MyGreeting connected to DOM');
        this.innerHTML = `Hello, ${this.getAttribute('name') || 'World'}!`;
    }

    disconnectedCallback() {
        // 当元素从文档DOM中移除时调用
        // 适合在这里进行清理工作，如移除事件监听器
        console.log('MyGreeting disconnected from DOM');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // 当元素的属性被添加、移除或更改时调用
        // 只有在observedAttributes数组中列出的属性才会触发此回调
        console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
        if (name === 'name') {
            this.innerHTML = `Hello, ${newValue || 'World'}!`;
        }
    }

    static get observedAttributes() {
        // 返回一个数组，列出需要观察的属性
        return ['name'];
    }
}
```

### 2. 注册自定义元素

使用 `customElements.define()` 方法将你定义的JavaScript类注册为自定义元素。

*   **第一个参数**：自定义元素的标签名。必须包含连字符（例如 `my-component`），以避免与现有或未来的HTML标签冲突。
*   **第二个参数**：你定义的JavaScript类。
*   **第三个参数** (可选)：一个配置对象，用于指定自定义内置元素所继承的内置标签。

**示例**：
```javascript
customElements.define('my-greeting', MyGreeting); // 注册自主自定义元素
```

**使用自定义内置元素**：
```javascript
class MyButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => {
            alert('My custom button clicked!');
        });
    }

    connectedCallback() {
        console.log('MyButton connected to DOM');
    }
}

customElements.define('my-button', MyButton, { extends: 'button' }); // 注册自定义内置元素
```
**使用**：
```html
<button is="my-button">点击我</button>
```

## 自定义元素的生命周期

自定义元素提供了一系列生命周期回调函数，允许开发者在元素的不同阶段执行特定的代码：

*   **`constructor()`**：
    *   在元素被创建时调用（例如通过 `document.createElement('my-greeting')` 或解析HTML时）。
    *   必须调用 `super()`。
    *   适合设置初始状态、事件监听器，但不应操作DOM或访问属性（因为此时元素可能尚未完全连接到DOM）。
*   **`connectedCallback()`**：
    *   当元素首次被插入到文档DOM时调用。
    *   适合进行DOM操作、获取属性值、设置初始渲染、发起网络请求、添加事件监听器等。
    *   如果元素被移动到DOM的不同部分，此回调可能会被多次调用。
*   **`disconnectedCallback()`**：
    *   当元素从文档DOM中移除时调用。
    *   适合进行清理工作，如移除事件监听器、取消定时器、取消网络请求等，以防止内存泄漏。
*   **`adoptedCallback()`**：
    *   当元素被移动到新的文档（例如使用 `document.adoptNode()`）时调用。
    *   在大多数应用中不常用。
*   **`attributeChangedCallback(name, oldValue, newValue)`**：
    *   当元素的属性被添加、移除或更改时调用。
    *   只有在 `static get observedAttributes()` 数组中列出的属性才会触发此回调。
    *   适合根据属性变化更新元素的内部状态或渲染。

## 封装性与Shadow DOM

自定义元素本身提供了行为的封装，但为了实现样式和DOM结构的封装，通常会结合Shadow DOM使用。Shadow DOM允许你将一个独立的DOM树附加到自定义元素上，这个DOM树与主文档DOM隔离，其内部的样式和结构不会影响外部，外部的样式也不会影响内部。

**示例** (结合Shadow DOM)：
```javascript
class MyStyledGreeting extends HTMLElement {
    constructor() {
        super();
        // 附加Shadow DOM
        this.attachShadow({ mode: 'open' }); // 'open'模式允许外部JavaScript访问Shadow DOM

        // 创建内部DOM结构和样式
        this.shadowRoot.innerHTML = `
            <style>
                p {
                    color: blue;
                    font-family: sans-serif;
                }
                .highlight {
                    background-color: yellow;
                }
            </style>
            <p class="highlight">Hello from Shadow DOM, <slot name="name-slot">World</slot>!</p>
        `;
    }

    connectedCallback() {
        console.log('MyStyledGreeting connected to DOM');
    }

    static get observedAttributes() {
        return ['name']; // 观察name属性，但这里通过slot插入内容，所以name属性不会直接改变innerHTML
    }
}

customElements.define('my-styled-greeting', MyStyledGreeting);
```
**使用**：
```html
<my-styled-greeting>
    <span slot="name-slot">Alice</span>
</my-styled-greeting>

<style>
    /* 这个样式不会影响my-styled-greeting内部的p标签 */
    p {
        color: red;
    }
</style>
```
在这个例子中，`my-styled-greeting` 内部的 `p` 标签会是蓝色背景黄色高亮，而外部的 `p` 标签样式不会影响它。`<slot>` 元素作为占位符，允许外部内容插入到Shadow DOM的特定位置。

## 总结

HTML自定义元素是Web Components技术栈的核心，它为开发者提供了一种原生的方式来创建可复用、可封装的Web组件。通过定义JavaScript类来控制元素行为，利用生命周期回调管理元素状态，并结合Shadow DOM实现样式和结构隔离，自定义元素极大地提升了前端开发的模块化和标准化水平。掌握自定义元素，是迈向构建高性能、可维护的现代Web应用的重要一步。
