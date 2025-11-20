---
title: 知识篇 -- Vue3生命周期：Composition API下的组件生命周期
description: 深入探讨Vue3中组件的生命周期，重点介绍Composition API下新的生命周期钩子函数（onMounted, onUpdated, onUnmounted等）及其与Vue2选项式API的对比，理解在不同阶段执行逻辑的最佳实践。
date: 2024-06-20
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 3
meta:
  - name: description
    content: Vue3生命周期深度解析
  - name: keywords
    content: Vue3 生命周期 Composition API 钩子函数 onMounted onUpdated onUnmounted
tags:
 - Vue3
 - 基础知识
 - 生命周期
categories:
 - 前端
---

Vue3在保留了Vue2选项式API的生命周期概念的同时，为组合式API（Composition API）提供了新的生命周期钩子函数。这些钩子函数以 `on` 开头，并在 `setup` 函数中导入和使用，使得组件逻辑的组织更加灵活和清晰。理解Vue3的生命周期对于编写高效、可维护的组件至关重要。

<!-- more -->

## Vue3生命周期概览

Vue3的生命周期与Vue2在概念上保持一致，但钩子函数的命名和使用方式有所变化，尤其是在组合式API中。

![Vue3生命周期图示](https://v3.cn.vuejs.org/images/lifecycle.png)
*图：Vue3生命周期示意图 (来源：Vue官方文档)*

## 组合式API下的生命周期钩子

在组合式API中，生命周期钩子函数需要从 `vue` 包中导入，并在 `setup` 函数中调用。它们会自动注册到 `setup` 所处的组件实例上。

### 1. 创建阶段

在组合式API中，`setup` 函数本身就承担了 `beforeCreate` 和 `created` 的职责。在 `setup` 函数中执行的同步代码，就相当于在 `beforeCreate` 和 `created` 钩子中执行。

*   **`setup()`**：
    *   **执行时机**：在 `beforeCreate` 钩子之前执行。
    *   **用途**：定义响应式状态、计算属性、方法、侦听器，以及注册其他生命周期钩子。

### 2. 挂载阶段

*   **`onBeforeMount()`**：
    *   **触发时机**：组件挂载到DOM之前。
    *   **用途**：在组件首次渲染前执行一些操作，例如准备DOM元素。
*   **`onMounted()`**：
    *   **触发时机**：组件挂载到DOM之后。此时组件的DOM元素已经可用。
    *   **用途**：进行DOM操作、集成第三方库（如D3.js、ECharts）、发送依赖于DOM的异步请求。

**示例**：
```vue
<template>
  <div ref="root">Hello Vue3</div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';

const root = ref(null);

onBeforeMount(() => {
  console.log('onBeforeMount: DOM is not yet mounted');
  console.log('onBeforeMount: root.value is', root.value); // null
});

onMounted(() => {
  console.log('onMounted: DOM is mounted');
  console.log('onMounted: root.value is', root.value); // <div>Hello Vue3</div>
  root.value.style.color = 'blue';
});
</script>
```

### 3. 更新阶段

*   **`onBeforeUpdate()`**：
    *   **触发时机**：响应式数据更新时，DOM重新渲染之前。
    *   **用途**：在DOM更新前访问现有DOM，例如获取DOM状态。
*   **`onUpdated()`**：
    *   **触发时机**：响应式数据更新时，DOM重新渲染之后。
    *   **用途**：在DOM更新后执行依赖于新DOM的操作。避免在此钩子中修改状态，否则可能导致无限循环更新。

**示例**：
```vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="count++">Increment</button>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate, onUpdated } from 'vue';

const count = ref(0);

onBeforeUpdate(() => {
  console.log('onBeforeUpdate: count is', count.value, 'DOM text is', document.querySelector('p').textContent);
});

onUpdated(() => {
  console.log('onUpdated: count is', count.value, 'DOM text is', document.querySelector('p').textContent);
});
</script>
```

### 4. 卸载阶段

*   **`onBeforeUnmount()`**：
    *   **触发时机**：组件实例被卸载之前。
    *   **用途**：执行清理工作，如移除事件监听器、取消定时器、取消订阅等。
*   **`onUnmounted()`**：
    *   **触发时机**：组件实例被卸载之后。
    *   **用途**：此时组件已完全脱离Vue生态，无法再进行任何操作。

**示例**：
```vue
<template>
  <div>
    <p>Component is active</p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue';

onBeforeUnmount(() => {
  console.log('onBeforeUnmount: Component is about to be unmounted');
});

onUnmounted(() => {
  console.log('onUnmounted: Component has been unmounted');
});
</script>
```

### 5. 调试钩子

Vue3还提供了一些用于调试的生命周期钩子：

*   **`onRenderTracked()`**：当组件的渲染函数追踪到响应式依赖时调用。
*   **`onRenderTriggered()`**：当组件的渲染函数因为响应式依赖发生变化而重新运行时调用。

### 6. 缓存组件钩子

对于使用 `<KeepAlive>` 缓存的组件，Vue3提供了额外的生命周期钩子：

*   **`onActivated()`**：缓存组件被激活时调用。
*   **`onDeactivated()`**：缓存组件被停用时调用。

## 选项式API与组合式API生命周期对比

| 选项式API钩子 | 组合式API钩子 | 描述                                   |
| :------------ | :------------ | :------------------------------------- |
| `beforeCreate`  | `setup()`     | 在实例初始化之后，数据观测之前调用。   |
| `created`       | `setup()`     | 实例创建完成后调用，数据观测已完成。   |
| `beforeMount`   | `onBeforeMount` | 挂载开始之前。                         |
| `mounted`       | `onMounted`   | 实例挂载到DOM之后。                    |
| `beforeUpdate`  | `onBeforeUpdate` | 数据更新时，DOM重新渲染之前。          |
| `updated`       | `onUpdated`   | 数据更新时，DOM重新渲染之后。          |
| `beforeDestroy` | `onBeforeUnmount` | 实例销毁之前。                         |
| `destroyed`     | `onUnmounted` | 实例销毁之后。                         |
| `errorCaptured` | `onErrorCaptured` | 捕获子孙组件的错误。                   |
| `renderTracked` | `onRenderTracked` | 调试用，追踪响应式依赖。               |
| `renderTriggered` | `onRenderTriggered` | 调试用，响应式依赖触发重新渲染。       |
| `activated`     | `onActivated` | `KeepAlive` 组件激活时。               |
| `deactivated`   | `onDeactivated` | `KeepAlive` 组件停用时。               |

## 总结

Vue3的生命周期钩子在组合式API下提供了更灵活、更直观的使用方式。通过将生命周期逻辑与相关功能代码聚合在 `setup` 函数中，开发者可以更好地组织组件逻辑，提高代码的可读性和可维护性。理解这些钩子函数的执行时机和用途，是高效开发Vue3应用的关键。
