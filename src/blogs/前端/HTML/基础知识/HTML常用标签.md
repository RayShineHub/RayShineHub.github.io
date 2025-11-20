---
title: 知识篇 -- HTML常用标签：构建网页内容
description: 详细介绍HTML中常用的标签及其作用，包括文本标签、链接标签、图片标签、列表标签、表格标签和表单标签，帮助开发者掌握构建丰富网页内容的基础。
date: 2024-03-05
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 2
meta:
  - name: description
    content: HTML常用标签深度解析
  - name: keywords
    content: HTML 常用标签 文本 链接 图片 列表 表格 表单 语义化
tags:
 - HTML
 - 基础知识
 - 标签
categories:
 - 前端
---

HTML标签是构建网页内容的基石，它们定义了页面上不同元素的类型和结构。掌握常用的HTML标签及其语义，是编写高质量、可访问网页的关键。本文将详细介绍HTML中一些最常用且重要的标签。

<!-- more -->

## 文本相关标签

文本是网页内容的核心，HTML提供了多种标签来组织和格式化文本。

*   **标题标签 `<h1>` 到 `<h6>`**：用于定义不同级别的标题，`<h1>` 是最高级别标题，`<h6>` 是最低级别标题。它们具有语义化意义，有助于搜索引擎理解页面结构。
    ```html
    <h1>这是一级标题</h1>
    <h2>这是二级标题</h2>
    <h3>这是三级标题</h3>
    ```
*   **段落标签 `<p>`**：用于定义文本段落。浏览器会在段落之间自动添加一些空白。
    ```html
    <p>这是一个普通的文本段落。</p>
    <p>这是另一个段落，用于展示不同的内容。</p>
    ```
*   **强调标签 `<strong>` 和 `<em>`**：
    *   `<strong>`：表示文本的重要性，通常浏览器会以粗体显示。
    *   `<em>`：表示文本的强调，通常浏览器会以斜体显示。
    ```html
    <p>请注意，这是一个<strong>非常重要</strong>的信息。</p>
    <p>我<em>真的</em>很喜欢HTML。</p>
    ```
*   **换行标签 `<br>`**：用于在文本中插入一个强制的换行符。
    ```html
    <p>第一行文本。<br>第二行文本。</p>
    ```
*   **水平线标签 `<hr>`**：用于在文档中插入一条水平线，通常表示内容的分隔。
    ```html
    <p>上面是一些内容。</p>
    <hr>
    <p>下面是另一些内容。</p>
    ```

## 链接标签 `<a>`

`<a>` 标签（anchor）用于创建超链接，实现页面间的跳转或定位到页面内的特定位置。

*   **`href` 属性**：指定链接的目标URL。
*   **`target` 属性**：指定链接打开的方式，如 `_blank`（在新标签页打开）、`_self`（在当前标签页打开，默认）。
    ```html
    <p>访问 <a href="https://www.example.com" target="_blank">Example.com</a> 获取更多信息。</p>
    <p><a href="#section2">跳转到第二部分</a></p>
    ```

## 图片标签 `<img>`

`<img>` 标签用于在网页中嵌入图片。它是一个自闭合标签。

*   **`src` 属性**：指定图片文件的路径。
*   **`alt` 属性**：提供图片的替代文本，当图片无法显示时会显示此文本，对SEO和可访问性很重要。
*   **`width` 和 `height` 属性**：指定图片的宽度和高度，有助于浏览器在加载图片前预留空间，避免页面布局抖动。
    ```html
    <img src="image.jpg" alt="一张美丽的风景图" width="500" height="300">
    ```

## 列表标签

HTML提供了有序列表、无序列表和定义列表来组织内容。

*   **无序列表 `<ul>` 和 `<li>`**：
    *   `<ul>`：无序列表容器。
    *   `<li>`：列表项。
    ```html
    <ul>
        <li>苹果</li>
        <li>香蕉</li>
        <li>橙子</li>
    </ul>
    ```
*   **有序列表 `<ol>` 和 `<li>`**：
    *   `<ol>`：有序列表容器。
    *   `<li>`：列表项。
    ```html
    <ol>
        <li>第一步</li>
        <li>第二步</li>
        <li>第三步</li>
    </ol>
    ```

## 表格标签 `<table>`

`<table>` 标签用于创建表格，以行和列的形式展示数据。

*   **`<table>`**：表格容器。
*   **`<thead>`**：表格头部内容。
*   **`<tbody>`**：表格主体内容。
*   **`<tfoot>`**：表格底部内容。
*   **`<tr>`**：表格行。
*   **`<th>`**：表头单元格。
*   **`<td>`**：数据单元格。
    ```html
    <table>
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>城市</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>张三</td>
                <td>25</td>
                <td>北京</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>30</td>
                <td>上海</td>
            </tr>
        </tbody>
    </table>
    ```

## 表单标签 `<form>`

`<form>` 标签用于创建HTML表单，收集用户输入。

*   **`<form>`**：表单容器。
*   **`<input>`**：输入字段，`type` 属性定义输入类型（如 `text`, `password`, `submit`, `checkbox`, `radio`）。
*   **`<textarea>`**：多行文本输入区域。
*   **`<label>`**：为表单控件定义标注，提高可访问性。
*   **`<button>`**：按钮。
*   **`<select>` 和 `<option>`**：下拉选择框。
    ```html
    <form action="/submit" method="post">
        <label for="username">用户名:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">密码:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <label for="message">留言:</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
        <br>
        <input type="checkbox" id="agree" name="agree" value="true">
        <label for="agree">我同意条款</label>
        <br>
        <select id="city" name="city">
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
        </select>
        <br>
        <button type="submit">提交</button>
    </form>
    ```

## 总结

HTML常用标签是构建网页内容的基础工具。通过合理运用这些标签，并结合它们的语义化特性，开发者可以创建出结构清晰、内容丰富、易于访问的网页。理解每个标签的作用和最佳实践，是迈向高效前端开发的重要一步。
