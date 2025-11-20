---
title: 知识篇 -- JS DOM操作详解
description: 深入理解JavaScript如何通过DOM（文档对象模型）与HTML和XML文档进行交互，包括选取元素、修改内容、修改样式、处理事件等核心操作。
date: 2024-02-22
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 10
meta:
  - name: description
    content: JavaScript DOM操作深度解析
  - name: keywords
    content: JavaScript DOM 文档对象模型 元素选取 修改内容 修改样式 事件处理
tags:
 - JavaScript 
 - 基础知识
 - DOM
categories:
 - 前端
---

DOM (Document Object Model) 文档对象模型是HTML和XML文档的编程接口。它将网页内容解析成一个由节点（Node）和对象（Object）组成的结构化表示，使得JavaScript能够访问和操作网页的结构、样式和内容。掌握DOM操作是前端开发的核心技能之一，它允许我们创建动态和交互式的网页。
<!-- more -->

## 一、选取元素：找到你想要操作的HTML节点 <Badge text="基础" type="tip"/>

在进行任何DOM操作之前，首先需要找到目标HTML元素。JavaScript提供了多种方法来选取元素。

### 1. `document.getElementById()` <Badge text="ID选择" type="success"/>

*   **作用**：通过元素的 `id` 属性选取唯一元素。
*   **特点**：`id` 在文档中必须是唯一的。如果找到，返回该元素对象；否则返回 `null`。
*   **示例**：
    ```html
    <div id="myDiv">Hello</div>
    ```
    ```javascript
    const myDiv = document.getElementById("myDiv");
    console.log(myDiv.textContent); // Hello
    ```

### 2. `document.getElementsByClassName()` <Badge text="类名选择" type="info"/>

*   **作用**：通过元素的 `class` 属性选取所有匹配的元素。
*   **特点**：返回一个 **HTMLCollection** (类数组对象)，包含所有匹配的元素。
*   **示例**：
    ```html
    <p class="item">Item 1</p>
    <p class="item">Item 2</p>
    ```
    ```javascript
    const items = document.getElementsByClassName("item");
    console.log(items.length); // 2
    console.log(items[0].textContent); // Item 1
    ```

### 3. `document.getElementsByTagName()` <Badge text="标签名选择" type="info"/>

*   **作用**：通过元素的标签名选取所有匹配的元素。
*   **特点**：返回一个 **HTMLCollection**。
*   **示例**：
    ```html
    <ul><li>Apple</li><li>Banana</li></ul>
    ```
    ```javascript
    const listItems = document.getElementsByTagName("li");
    console.log(listItems[0].textContent); // Apple
    ```

### 4. `document.querySelector()` (ES5新增) <Badge text="CSS选择器" type="success"/>

*   **作用**：使用CSS选择器选取文档中第一个匹配的元素。
*   **特点**：如果找到，返回该元素对象；否则返回 `null`。
*   **示例**：
    ```html
    <div class="container"><p class="text">First</p><p class="text">Second</p></div>
    ```
    ```javascript
    const firstText = document.querySelector(".container .text");
    console.log(firstText.textContent); // First
    ```

### 5. `document.querySelectorAll()` (ES5新增) <Badge text="CSS选择器" type="success"/>

*   **作用**：使用CSS选择器选取文档中所有匹配的元素。
*   **特点**：返回一个 **NodeList** (类数组对象)，包含所有匹配的元素。
*   **示例**：
    ```javascript
    const allTexts = document.querySelectorAll(".container .text");
    allTexts.forEach(p => console.log(p.textContent)); // First, Second
    ```
*   **注意**：`HTMLCollection` 和 `NodeList` 都是类数组对象，但它们不是真正的数组。如果需要使用数组方法（如 `map`, `filter`），需要将其转换为数组（例如 `Array.from(collection)` 或使用扩展运算符 `[...collection]`）。
<!-- 图片建议：一张图示，对比各种元素选取方法的语法和返回结果。 -->

## 二、修改元素内容：动态更新网页信息 <Badge text="内容操作" type="tip"/>

选取元素后，我们可以修改其文本内容或HTML结构。

### 1. `textContent` <Badge text="纯文本" type="info"/>

*   **作用**：获取或设置元素的纯文本内容。
*   **特点**：会自动编码HTML实体，不会解析HTML标签。
*   **示例**：
    ```html
    <p id="myPara">Original <span>Text</span></p>
    ```
    ```javascript
    const myPara = document.getElementById("myPara");
    console.log(myPara.textContent); // Original Text
    myPara.textContent = "New Text"; // <p id="myPara">New Text</p>
    ```

### 2. `innerHTML` <Badge text="HTML内容" type="warning"/>

*   **作用**：获取或设置元素的HTML内容。
*   **特点**：会解析HTML标签，可以插入复杂的HTML结构。
*   **注意**：使用 `innerHTML` 插入用户输入的内容时要小心，可能导致XSS攻击。
*   **示例**：
    ```javascript
    const myPara = document.getElementById("myPara");
    myPara.innerHTML = "<strong>Bold</strong> New Text"; // <p id="myPara"><strong>Bold</strong> New Text</p>
    ```

### 3. `createElement()` 和 `appendChild()` / `insertBefore()` <Badge text="创建与插入" type="success"/>

*   **作用**：动态创建新元素并将其添加到DOM树中。
*   **示例**：
    ```html
    <ul id="myList"></ul>
    ```
    ```javascript
    const myList = document.getElementById("myList");
    const newItem = document.createElement("li"); // 创建li元素
    newItem.textContent = "New Item";
    myList.appendChild(newItem); // 将li添加到ul的末尾

    const firstItem = document.createElement("li");
    firstItem.textContent = "First Item";
    myList.insertBefore(firstItem, myList.firstChild); // 将li添加到ul的开头
    ```

### 4. `removeChild()` 和 `replaceChild()` <Badge text="删除与替换" type="danger"/>

*   **作用**：删除或替换DOM树中的元素。
*   **示例**：
    ```html
    <div id="parent">
        <p id="child1">Child 1</p>
        <p id="child2">Child 2</p>
    </div>
    ```
    ```javascript
    const parent = document.getElementById("parent");
    const child1 = document.getElementById("child1");
    parent.removeChild(child1); // 删除Child 1

    const newChild = document.createElement("span");
    newChild.textContent = "New Child";
    const child2 = document.getElementById("child2");
    parent.replaceChild(newChild, child2); // 用New Child替换Child 2
    ```
<!-- 图片建议：一张图示，展示 createElement、appendChild、removeChild 等操作如何改变DOM树结构。 -->

## 三、修改元素样式：动态改变元素外观 <Badge text="样式操作" type="tip"/>

JavaScript可以直接修改元素的CSS样式。

### 1. `element.style` <Badge text="行内样式" type="info"/>

*   **作用**：直接访问元素的行内样式。
*   **特点**：只能修改行内样式，优先级最高。CSS属性名需要转换为驼峰命名法（如 `background-color` 变为 `backgroundColor`）。
*   **示例**：
    ```html
    <div id="myBox" style="width: 100px; height: 100px; background-color: blue;"></div>
    ```
    ```javascript
    const myBox = document.getElementById("myBox");
    myBox.style.backgroundColor = "red";
    myBox.style.width = "200px";
    ```

### 2. `element.classList` (ES5新增) <Badge text="类名操作" type="success"/>

*   **作用**：方便地添加、移除、切换元素的CSS类。
*   **方法**：`add()`, `remove()`, `toggle()`, `contains()`。
*   **示例**：
    ```html
    <button id="myButton" class="btn primary">Click Me</button>
    ```
    ```css
    .primary { background-color: blue; color: white; }
    .active { border: 2px solid red; }
    ```
    ```javascript
    const myButton = document.getElementById("myButton");
    myButton.classList.add("active"); // 添加active类
    myButton.classList.remove("primary"); // 移除primary类
    myButton.classList.toggle("active"); // 如果有active则移除，没有则添加
    console.log(myButton.classList.contains("btn")); // true
    ```
*   **优点**：通过操作类名来改变样式，比直接操作 `element.style` 更灵活，更符合CSS的最佳实践。
<!-- 图片建议：一张图示，展示 element.style 和 element.classList 修改样式的区别和效果。 -->

## 四、事件处理：响应用户交互 <Badge text="事件" type="tip"/>

事件是用户或浏览器自身执行的动作（如点击、鼠标移动、键盘输入、页面加载等）。JavaScript允许我们监听这些事件并执行相应的代码。

### 1. `element.addEventListener()` (推荐) <Badge text="推荐" type="success"/>

*   **作用**：为元素添加事件监听器。
*   **特点**：
    *   可以为同一个元素和同一个事件类型添加多个监听器。
    *   支持事件捕获和事件冒泡阶段。
    *   可以方便地移除监听器 (`removeEventListener`)。
*   **语法**：`element.addEventListener(event, handler, useCapture)`
    *   `event`: 事件类型字符串（如 "click", "mouseover", "keydown"）。
    *   `handler`: 事件发生时执行的函数。
    *   `useCapture` (可选)：布尔值，`true` 表示在捕获阶段触发，`false` (默认) 表示在冒泡阶段触发。
*   **示例**：
    ```html
    <button id="myBtn">点击我</button>
    ```
    ```javascript
    const myBtn = document.getElementById("myBtn");

    function handleClick() {
        alert("按钮被点击了！");
    }

    myBtn.addEventListener("click", handleClick);

    // 移除事件监听器
    // myBtn.removeEventListener("click", handleClick);
    ```

### 2. 行内事件处理 (不推荐) <Badge text="不推荐" type="danger"/>

直接在HTML标签中添加事件属性。
```html
<button onclick="alert('Hello!');">点击我</button>
```
**缺点**：将JavaScript与HTML混淆，不利于维护和分离。

### 3. DOM属性事件处理 (不推荐) <Badge text="不推荐" type="danger"/>

将事件处理函数赋值给元素的DOM属性。
```javascript
const myBtn = document.getElementById("myBtn");
myBtn.onclick = function() {
    alert("按钮被点击了！");
};
// 缺点：同一个事件类型只能绑定一个处理函数，新的会覆盖旧的。
```
<!-- 图片建议：一张图示，展示事件冒泡和事件捕获的流程，以及 addEventListener 的 useCapture 参数的作用。 -->

## 五、DOM操作的性能优化建议 <Badge text="优化" type="warning"/>

*   **减少DOM操作次数**：频繁的DOM操作会导致浏览器重绘（repaint）和回流（reflow），影响性能。
    *   **批量操作**：将多个DOM操作合并为一次。例如，先构建好HTML字符串，再通过 `innerHTML` 一次性插入。
    *   **使用文档片段 (DocumentFragment)**：在内存中构建DOM结构，完成后一次性插入到文档中。
*   **避免在循环中直接操作DOM**。
*   **使用 `requestAnimationFrame`**：对于动画或频繁的视觉更新，使用 `requestAnimationFrame` 确保在浏览器下一次重绘前执行操作。

掌握DOM操作是前端开发者的基本功。通过这些API，我们可以让静态的网页变得生动起来，响应用户的各种交互，创造出丰富的用户体验。
