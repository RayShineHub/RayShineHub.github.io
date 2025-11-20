---
title: Vue3 自定义指令
description: 深入了解Vue3自定义指令的用法和生命周期钩子，掌握如何创建可复用的DOM操作逻辑，提升开发效率和代码组织性。
date: 2024-07-15
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 11
meta:
  - name: description
    content: Vue3 自定义指令 Custom Directives
  - name: keywords
    content: Vue3 自定义指令 Custom Directives
tags:
 - Vue3
 - 进阶知识
 - 自定义指令
categories:
 - 前端
---

Vue的自定义指令（Custom Directives）提供了一种机制，允许开发者直接操作DOM元素，封装可复用的低级别DOM行为。在Vue3中，自定义指令的API与Vue2类似，但生命周期钩子的名称有所调整，以更好地与组件生命周期对应，使得理解和使用更加直观。

<!-- more -->

## 什么是自定义指令？

自定义指令是Vue提供的一种扩展HTML能力的方式。当我们需要对普通DOM元素进行底层操作，并且这些操作是可复用的、与组件的业务逻辑相对独立的，自定义指令就显得非常有用。例如，自动聚焦输入框、拖拽元素、权限控制等。

## 注册自定义指令

自定义指令可以分为两种注册方式：全局注册和局部注册。

### 全局注册

全局注册的指令可以在任何组件的模板中使用。

```javascript
// main.js 或 app.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 注册一个名为 'focus' 的全局指令
app.directive('focus', {
  // 当指令第一次绑定到元素并插入到DOM时调用
  mounted(el) {
    el.focus(); // 自动聚焦
  }
});

app.mount('#app');
```

### 局部注册

局部注册的指令只能在其注册的组件内部使用。

```vue
<!-- MyComponent.vue -->
<template>
  <input v-my-directive />
</template>

<script setup>
import { ref } from 'vue';

// 局部注册一个名为 'my-directive' 的指令
const vMyDirective = {
  mounted: (el) => {
    el.style.color = 'red';
  }
};
</script>
```
在`<script setup>`中，任何以`v`开头的驼峰式命名的变量都可以被用作一个自定义指令。

## 指令的钩子函数

Vue3自定义指令的钩子函数与Vue2有所不同，它们更清晰地反映了指令在元素生命周期中的各个阶段。

*   **`created(el, binding, vnode, prevVnode)`** (Vue3新增):
    *   在元素的 attribute 或事件监听器被应用之前调用。
    *   在指令绑定到元素后立即调用。
*   **`beforeMount(el, binding, vnode, prevVnode)`**:
    *   指令绑定到元素后，在父组件挂载之前调用。
*   **`mounted(el, binding, vnode, prevVnode)`**:
    *   元素插入到父节点时调用。
    *   通常用于执行一次性的DOM操作，如聚焦、初始化第三方库等。
*   **`beforeUpdate(el, binding, vnode, prevVnode)`**:
    *   在包含组件的VNode更新之前调用。
    *   在元素自身被更新之前调用。
*   **`updated(el, binding, vnode, prevVnode)`**:
    *   在包含组件的VNode及其子组件的VNode更新之后调用。
    *   在元素自身被更新之后调用。
*   **`beforeUnmount(el, binding, vnode, prevVnode)`**:
    *   指令与元素解绑之前调用。
    *   在父组件卸载之前调用。
*   **`unmounted(el, binding, vnode, prevVnode)`**:
    *   指令与元素解绑时调用。
    *   通常用于清理工作，如移除事件监听器、销毁实例等。

### 钩子函数的参数

每个钩子函数都会接收到以下参数：

*   **`el`**: 指令绑定到的DOM元素。
*   **`binding`**: 一个对象，包含以下属性：
    *   `value`: 传递给指令的值。例如，`v-my-directive="1 + 1"` 中，`value` 是 `2`。
    *   `oldValue`: 之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。
    *   `arg`: 传递给指令的参数。例如，`v-my-directive:foo` 中，`arg` 是 `"foo"`。
    *   `modifiers`: 一个包含修饰符的对象。例如，`v-my-directive.foo.bar` 中，`modifiers` 是 `{ foo: true, bar: true }`。
    *   `instance`: 使用该指令的组件实例。
    *   `dir`: 指令的定义对象。
*   **`vnode`**: 绑定元素的底层VNode。
*   **`prevVnode`**: 上一个VNode，仅在 `beforeUpdate` 和 `updated` 中可用。

## 示例：v-focus 自动聚焦指令

一个常见的自定义指令是 `v-focus`，用于在元素挂载后自动获取焦点。

```vue
<template>
  <input v-focus placeholder="我会自动聚焦" />
  <input placeholder="我不会自动聚焦" />
</template>

<script setup>
// 局部注册 v-focus 指令
const vFocus = {
  mounted: (el) => el.focus()
};
</script>
```

## 示例：v-permission 权限控制指令

自定义指令也可以用于更复杂的场景，例如基于用户权限显示或隐藏元素。

```vue
<template>
  <button v-permission="'admin'">管理员操作</button>
  <button v-permission="'editor'">编辑操作</button>
  <button v-permission="'viewer'">查看操作</button>
</template>

<script setup>
import { ref } from 'vue';

const userRole = ref('admin'); // 假设当前用户角色为 admin

const vPermission = {
  mounted: (el, binding) => {
    const requiredRole = binding.value;
    if (userRole.value !== requiredRole) {
      el.style.display = 'none'; // 如果没有权限，则隐藏元素
    }
  },
  updated: (el, binding) => {
    const requiredRole = binding.value;
    if (userRole.value !== requiredRole) {
      el.style.display = 'none';
    } else {
      el.style.display = ''; // 恢复显示
    }
  }
};
</script>
```

## 总结

Vue3的自定义指令是处理底层DOM操作和封装可复用行为的强大工具。通过清晰的生命周期钩子和灵活的参数传递机制，开发者可以创建出各种功能丰富的指令，从而提高代码的模块化程度和开发效率。掌握自定义指令的使用，能够让你更好地应对复杂的UI交互需求。
