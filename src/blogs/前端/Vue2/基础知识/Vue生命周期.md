---
title: 知识篇 -- Vue生命周期：理解组件的生老病死
description: 深入探讨Vue组件的生命周期，包括各个阶段的钩子函数（beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed），以及它们在组件不同阶段的作用和应用场景。
date: 2024-04-20
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 3
meta:
  - name: description
    content: Vue生命周期深度解析
  - name: keywords
    content: Vue 生命周期 钩子函数 beforeCreate created mounted updated destroyed
tags:
 - Vue
 - 基础知识
 - 生命周期
categories:
 - 前端
---

在Vue.js应用中，每个组件从创建到销毁都经历了一系列明确定义的阶段，这些阶段被称为组件的**生命周期**。Vue提供了一系列**生命周期钩子函数**，允许开发者在组件生命周期的特定时刻执行自定义逻辑。理解这些钩子函数对于编写健壮、高效的Vue应用至关重要。

<!-- more -->

## Vue组件生命周期概览

Vue组件的生命周期可以大致分为四个阶段：**创建阶段**、**挂载阶段**、**更新阶段**和**销毁阶段**。每个阶段都对应着不同的钩子函数。

![Vue生命周期图示](https://vuejs.org/images/lifecycle.png)
*图：Vue实例生命周期示意图 (来源：Vue官方文档)*

## 1. 创建阶段 (Creation)

此阶段在组件实例被创建时触发，主要用于初始化组件的内部状态。

*   **`beforeCreate()`**：
    *   **触发时机**：在实例初始化之后，数据观测 (data observer) 和 `event/watcher` 事件配置之前被调用。
    *   **可访问内容**：此时组件的 `data`、`methods`、`computed` 等都尚未初始化，无法访问。
    *   **用途**：通常用于在实例初始化之前执行一些操作，例如加载一些非响应式的数据。

*   **`created()`**：
    *   **触发时机**：在实例创建完成后立即调用。此时实例已完成以下配置：数据观测 (data observer)，`props`，`methods`，`computed`，`watch`，`event/watcher` 事件回调。
    *   **可访问内容**：可以访问 `data`、`methods`、`computed` 等属性，但DOM尚未挂载，无法进行DOM操作。
    *   **用途**：适合进行异步数据请求（如Ajax请求），初始化组件数据。

**示例**：
```javascript
new Vue({
    data: {
        message: 'Hello Vue'
    },
    beforeCreate() {
        console.log('beforeCreate: data is undefined, message is', this.message);
        console.log('beforeCreate: methods are undefined', this.myMethod);
    },
    created() {
        console.log('created: data is available, message is', this.message);
        this.myMethod(); // methods也已可用
    },
    methods: {
        myMethod() {
            console.log('myMethod called');
        }
    }
});
// 输出：
// beforeCreate: data is undefined, message is undefined
// created: data is available, message is Hello Vue
// myMethod called
```

## 2. 挂载阶段 (Mounting)

此阶段在组件的模板被编译并挂载到DOM时触发。

*   **`beforeMount()`**：
    *   **触发时机**：在挂载开始之前被调用：相关的 `render` 函数首次被调用。
    *   **可访问内容**：`data`、`methods` 等已可用，但DOM尚未渲染，`$el` 属性还不存在。
    *   **用途**：在渲染前对模板进行最后一次修改。

*   **`mounted()`**：
    *   **触发时机**：实例被挂载后调用，此时 `el` 被新创建的 `vm.$el` 替换，并挂载到实例上去。
    *   **可访问内容**：可以完全访问DOM元素，包括组件自身的 `$el`。
    *   **用途**：适合进行DOM操作、集成第三方库（如D3.js、ECharts）、发送依赖于DOM的异步请求。

**示例**：
```javascript
new Vue({
    el: '#app',
    template: '<div>{{ message }}</div>',
    data: {
        message: 'Hello Vue'
    },
    beforeMount() {
        console.log('beforeMount: $el is', this.$el); // undefined
    },
    mounted() {
        console.log('mounted: $el is', this.$el); // <div>Hello Vue</div>
        console.log('mounted: DOM is ready');
        // 可以在这里操作DOM
        this.$el.style.color = 'red';
    }
});
```

## 3. 更新阶段 (Updating)

此阶段在组件的响应式数据发生变化，导致视图重新渲染时触发。

*   **`beforeUpdate()`**：
    *   **触发时机**：数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前。
    *   **可访问内容**：此时 `data` 中的新数据已可用，但DOM尚未更新。
    *   **用途**：可以在DOM更新之前访问现有DOM，例如手动移除一些事件监听器。

*   **`updated()`**：
    *   **触发时机**：在实例更新完毕后调用，此时组件DOM已更新。
    *   **可访问内容**：可以访问到更新后的DOM。
    *   **用途**：适合在DOM更新后执行依赖于新DOM的操作。避免在此钩子中修改状态，否则可能导致无限循环更新。

**示例**：
```html
<div id="app">
    <p>{{ count }}</p>
    <button @click="count++">增加</button>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            count: 0
        },
        beforeUpdate() {
            console.log('beforeUpdate: count is', this.count, 'DOM text is', this.$el.querySelector('p').textContent);
        },
        updated() {
            console.log('updated: count is', this.count, 'DOM text is', this.$el.querySelector('p').textContent);
        }
    });
</script>
```
当点击“增加”按钮时，`beforeUpdate` 会显示更新前的DOM内容和更新后的 `count` 值，`updated` 会显示更新后的DOM内容和 `count` 值。

## 4. 销毁阶段 (Destruction)

此阶段在组件实例被销毁时触发。

*   **`beforeDestroy()`**：
    *   **触发时机**：实例销毁之前调用。
    *   **可访问内容**：实例仍然完全可用。
    *   **用途**：适合进行清理工作，如移除事件监听器、取消定时器、取消订阅、销毁第三方插件实例等，以防止内存泄漏。

*   **`destroyed()`**：
    *   **触发时机**：实例销毁之后调用。
    *   **可访问内容**：实例的所有指令都被解绑，所有事件监听器都被移除，所有子实例都被销毁。
    *   **用途**：此时组件已完全脱离Vue生态，无法再进行任何操作。

**示例**：
```javascript
const vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    },
    beforeDestroy() {
        console.log('beforeDestroy: message is', this.message);
        // 清理工作
    },
    destroyed() {
        console.log('destroyed: instance is gone');
    }
});

// 假设在某个时机销毁实例
// vm.$destroy();
```

## 总结

Vue组件的生命周期是其核心概念之一。通过理解和合理利用各个生命周期钩子函数，开发者可以在组件的不同阶段执行精确的逻辑，从而更好地管理组件的状态、行为和资源。这对于构建高性能、可维护、无内存泄漏的Vue应用至关重要。
