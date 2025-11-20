---
title: Vue3 script setup 详解
description: 深入探讨Vue3的&lt;script setup&gt;语法糖，了解其如何简化组合式API的组件编写，提升开发效率。涵盖其优势、基本用法及示例，帮助开发者更好地利用这一特性。
date: 2024-07-15
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 9
meta:
  - name: description
    content: Vue3 script setup 语法糖
  - name: keywords
    content: Vue3 script setup 语法糖 组合式API
tags:
 - Vue3
 - 进阶知识
 - script setup
categories:
 - 前端
---

Vue3引入的`<script setup>`是一个编译时语法糖，旨在极大简化使用组合式API（Composition API）的组件编写体验。它允许开发者在单文件组件（SFC）的`<script>`标签中直接编写顶层代码，而无需手动设置`setup`函数并返回响应式数据和方法。这不仅减少了样板代码，还提升了开发效率和代码可读性。

<!-- more -->

## 什么是 `<script setup>`？

在Vue3中，传统的组合式API组件需要一个`setup`函数来定义组件的逻辑、状态和方法，并显式地通过`return`语句将它们暴露给模板。`<script setup>`则将这一过程自动化。当你在`<script>`标签上添加`setup`属性后，该脚本块中的所有顶层绑定（包括`import`、变量、函数声明等）都会自动暴露给模板。

**优势**：

*   **更简洁的代码**：告别繁琐的`setup`函数和`return`语句，代码量显著减少，结构更扁平。
*   **更好的TypeScript支持**：由于顶层变量和函数直接暴露，TypeScript能够更好地进行类型推断，减少了手动类型注解的需求，提升了类型安全性。
*   **更好的运行时性能**：`<script setup>`在编译时进行优化，可以生成更高效的组件代码，从而带来更好的运行时性能。
*   **更直观的开发体验**：开发者可以更专注于业务逻辑的实现，而不用过多关注Vue的API细节。

## 基本用法

### 1. 声明响应式状态

使用`ref`或`reactive`声明的响应式状态可以直接在模板中使用。

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const increment = () => {
  count.value++;
};
</script>
```

### 2. 导入组件和函数

`import`的组件和函数可以直接在模板中使用，无需额外配置。

```vue
<template>
  <div>
    <MyChildComponent />
    <button @click="logMessage">Log</button>
  </div>
</template>

<script setup>
import MyChildComponent from './MyChildComponent.vue';
import { someUtilityFunction } from './utils';

const logMessage = () => {
  someUtilityFunction('Hello from script setup!');
};
</script>
```

### 3. 定义 `props`、`emits` 和 `expose`

在`<script setup>`中，Vue3提供了一系列宏函数来定义组件的接口，它们在编译时可用，无需导入。

*   **`defineProps()`**：用于声明组件接收的`props`。
*   **`defineEmits()`**：用于声明组件可以触发的自定义事件。
*   **`defineExpose()`**：用于显式地暴露组件实例的公共属性和方法。

这些宏函数将在后续的文章中详细介绍。

## 示例

以下是一个结合了响应式状态、计算属性、`props`、`emits`和`expose`的完整`<script setup>`组件示例：

```vue
<!-- MyComponent.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ double }}</p>
    <button @click="increment">Increment</button>
    <p>Message from Parent: {{ msg }}</p>
    <button @click="emitEvent">Emit Event</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// defineProps, defineEmits, defineExpose 是宏函数，无需导入

// 定义props
const props = defineProps({
  msg: String
});

// 定义emits
const emit = defineEmits(['my-event']);

// 响应式状态
const count = ref(0);
const increment = () => {
  count.value++;
};

// 计算属性
const double = computed(() => count.value * 2);

// 触发事件
const emitEvent = () => {
  emit('my-event', 'Hello from child!');
};

// 暴露给父组件的方法或属性（通过模板引用）
const publicMethod = () => {
  console.log('This is a public method from child component.');
};
defineExpose({
  publicMethod,
  count
});
</script>

<style scoped>
/* 样式 */
</style>
```

## 总结

`<script setup>`是Vue3中一个非常强大的特性，它通过编译时转换，极大地简化了组合式API的组件编写。掌握`<script setup>`能够帮助你编写出更简洁、高效、类型安全的Vue3组件，提升开发体验。在后续的文章中，我们将深入探讨`defineProps`、`defineEmits`、`defineExpose`等宏函数，以及高级插槽、自定义指令、`Teleport`和`Suspense`等进阶特性。
