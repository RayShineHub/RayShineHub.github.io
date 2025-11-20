---
title: 知识篇 -- Vue3组合式API：更灵活的逻辑复用与代码组织
description: 深入探讨Vue3组合式API（Composition API）的核心概念（setup函数、ref、reactive、computed、watch、生命周期钩子），理解它如何解决Vue2选项式API在大型组件中的痛点，并提供更灵活的逻辑复用和代码组织方式。
date: 2024-06-15
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 2
meta:
  - name: description
    content: Vue3组合式API深度解析
  - name: keywords
    content: Vue3 组合式API Composition API setup ref reactive computed watch 生命周期
tags:
 - Vue3
 - 基础知识
 - 组合式API
categories:
 - 前端
---

Vue3引入的**组合式API（Composition API）** 是其最重要的新特性之一，它提供了一种全新的方式来组织和复用组件逻辑。相较于Vue2的选项式API（Options API），组合式API在处理大型、复杂组件时，能够更好地解决逻辑关注点分离、代码复用和TypeScript支持等问题，从而提升开发效率和代码可维护性。

<!-- more -->

## 什么是组合式API？

组合式API是一组允许我们以函数形式编写Vue组件逻辑的API。它将组件的逻辑关注点（如响应式状态、计算属性、方法、生命周期钩子等）聚合在一起，而不是像选项式API那样将它们分散在不同的选项中。

**组合式API的主要优势**：

*   **更好的逻辑组织**：可以将同一个逻辑关注点相关的代码（例如，一个功能模块的所有响应式数据、计算属性和方法）放在一起，提高代码的可读性和可维护性。
*   **更强大的逻辑复用**：通过将逻辑封装成可复用的函数（称为“组合式函数”或“Hook”），可以轻松地在不同组件之间共享逻辑。
*   **更好的TypeScript支持**：组合式API的函数式特性使得TypeScript能够提供更准确的类型推断和更强大的类型检查。
*   **更小的包体积**：通过摇树优化，未使用的API可以被完全移除。

## 核心API详解

组合式API主要在组件的 `setup` 函数中使用。

### 1. `setup` 函数

`setup` 函数是组合式API的入口点。它在组件实例创建之前执行，是组合式API的“舞台”。

*   **执行时机**：在 `beforeCreate` 钩子之前执行。
*   **参数**：
    *   `props`：一个响应式对象，包含了父组件传递的所有 `props`。
    *   `context`：一个普通JavaScript对象，暴露了 `attrs`, `slots`, `emit` 等属性。
*   **返回值**：
    *   如果返回一个对象，该对象的属性和方法将暴露给模板和组件实例（在选项式API中）。
    *   如果返回一个渲染函数，该函数将作为组件的渲染函数。

**示例**：
```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <p>Double: {{ double }}</p>
    <p>Prop Message: {{ message }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    message: String
  },
  setup(props, context) {
    // 响应式状态
    const count = ref(0);
    const increment = () => {
      count.value++;
    };

    // 计算属性
    const double = computed(() => count.value * 2);

    // 访问props
    console.log(props.message);

    // 访问emit
    const emitEvent = () => {
      context.emit('my-event', 'hello');
    };

    // 返回的对象会暴露给模板
    return {
      count,
      increment,
      double,
      emitEvent
    };
  }
};
</script>
```
**注意**：在 `<script setup>` 语法糖中，顶层声明（变量、函数、import等）会自动暴露给模板，无需手动 `return`。

### 2. 响应式API

*   **`ref()`**：
    *   用于创建一个响应式引用。它接受一个内部值，返回一个响应式且可变的 `ref` 对象。
    *   在 `setup` 函数中访问 `ref` 对象的值需要通过 `.value` 属性。
    *   在模板中，`ref` 会被自动解包，无需 `.value`。
    ```javascript
    import { ref } from 'vue';
    const count = ref(0); // count.value = 0
    const name = ref('Alice'); // name.value = 'Alice'
    ```

*   **`reactive()`**：
    *   用于创建一个响应式对象。它接受一个普通JavaScript对象，返回该对象的响应式代理。
    *   `reactive` 只能用于对象类型（包括数组和Map/Set等集合类型）。
    *   访问 `reactive` 对象属性时无需 `.value`。
    ```javascript
    import { reactive } from 'vue';
    const state = reactive({
      count: 0,
      user: { name: 'Bob' }
    });
    state.count++;
    state.user.name = 'Charlie';
    ```

*   **`toRefs()`**：
    *   将一个响应式对象的所有属性转换为 `ref` 对象。
    *   当从 `reactive` 对象中解构属性时，这些属性会失去响应性。`toRefs` 可以解决这个问题。
    ```javascript
    import { reactive, toRefs } from 'vue';
    const state = reactive({ foo: 1, bar: 2 });
    const stateAsRefs = toRefs(state); // stateAsRefs.foo 是一个ref
    ```

### 3. 计算属性与侦听器

*   **`computed()`**：
    *   用于创建一个响应式的计算属性。它接受一个getter函数，返回一个只读的 `ref` 对象。
    *   也可以接受一个包含 `get` 和 `set` 函数的对象，创建可写的计算属性。
    ```javascript
    import { ref, computed } from 'vue';
    const count = ref(0);
    const double = computed(() => count.value * 2); // 只读
    const plusOne = computed({ // 可写
      get: () => count.value + 1,
      set: (val) => { count.value = val - 1; }
    });
    ```

*   **`watch()`**：
    *   用于侦听一个或多个响应式数据源，并在数据源变化时执行回调函数。
    *   可以侦听 `ref`, `reactive` 对象，getter函数，或这些的数组。
    ```javascript
    import { ref, watch } from 'vue';
    const count = ref(0);
    watch(count, (newCount, oldCount) => {
      console.log(`Count changed from ${oldCount} to ${newCount}`);
    });
    ```

*   **`watchEffect()`**：
    *   立即执行一个函数，同时响应式地追踪其依赖，并在依赖变化时重新执行。
    *   适用于那些副作用函数（如日志记录、DOM操作），其依赖关系由函数内部自动推断。
    ```javascript
    import { ref, watchEffect } from 'vue';
    const count = ref(0);
    watchEffect(() => console.log(`Count is: ${count.value}`)); // 立即执行，并在count变化时重新执行
    ```

### 4. 生命周期钩子

组合式API提供了与选项式API对应的生命周期钩子函数，但它们需要从Vue中导入并在 `setup` 函数中使用。

*   `onMounted()`：组件挂载后执行。
*   `onUpdated()`：组件更新后执行。
*   `onUnmounted()`：组件卸载后执行。
*   `onBeforeMount()`
*   `onBeforeUpdate()`
*   `onBeforeUnmount()`
*   `onErrorCaptured()`
*   `onRenderTracked()`
*   `onRenderTriggered()`
*   `onActivated()`
*   `onDeactivated()`

**示例**：
```javascript
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      console.log('Component mounted!');
    });
    onUnmounted(() => {
      console.log('Component unmounted!');
    });
    // ... 其他逻辑
  }
};
```

## 组合式函数 (Composables)

组合式函数是组合式API的核心优势之一，它允许我们将可复用的逻辑封装成独立的函数。

**示例**：
```javascript
// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));

  return { x, y };
}
```
**在组件中使用**：
```vue
<template>
  <div>Mouse position: {{ x }}, {{ y }}</div>
</template>

<script setup>
import { useMouse } from './useMouse';
const { x, y } = useMouse();
</script>
```
通过组合式函数，我们可以轻松地在多个组件中复用鼠标位置追踪的逻辑，而无需重复编写代码。

## 总结

Vue3的组合式API为Vue组件的逻辑组织和复用带来了革命性的改变。它通过 `setup` 函数、`ref`、`reactive`、`computed`、`watch` 等核心API，以及生命周期钩子，使得开发者能够编写出更清晰、更灵活、更易于维护和测试的代码。特别是组合式函数的使用，极大地提升了逻辑复用的能力。掌握组合式API是深入Vue3开发、构建高性能和可扩展应用的关键。
