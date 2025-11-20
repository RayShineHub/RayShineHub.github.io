---
title: Vue3 高级插槽用法
description: 深入探讨Vue3插槽（Slots）的高级用法，包括具名插槽和作用域插槽，以及它们在构建灵活可复用组件中的重要作用。通过详细示例，掌握插槽的强大功能。
date: 2024-07-15
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 12
meta:
  - name: description
    content: Vue3 插槽 Slots 具名插槽 作用域插槽
  - name: keywords
    content: Vue3 插槽 Slots 具名插槽 作用域插槽
tags:
 - Vue3
 - 进阶知识
 - 插槽
categories:
 - 前端
---

Vue3的插槽（Slots）系统是组件化开发中一个非常强大的特性，它允许开发者在组件之间传递内容，从而实现更灵活、更可复用的组件。在Vue3中，插槽在Vue2的基础上进行了优化，提供了更清晰的具名插槽语法和更强大的作用域插槽，使得组件的组合能力得到了进一步提升。

<!-- more -->

## 什么是插槽？

插槽是Vue组件中用于内容分发的一种机制。它允许父组件向子组件的指定位置注入内容，而子组件则负责渲染这些内容。这使得组件可以更加通用，父组件可以根据需要自定义子组件的内部结构。

## 1. 具名插槽 (Named Slots)

具名插槽允许父组件向子组件的多个不同位置注入内容。每个具名插槽都有一个唯一的名称，父组件通过这个名称来指定内容应该被渲染到哪个插槽。

### 子组件定义具名插槽

在子组件中，使用`<slot name="name"></slot>`来定义具名插槽。如果没有`name`属性，则默认为`default`插槽。

```vue
<!-- ChildComponent.vue -->
<template>
  <div class="card">
    <header>
      <slot name="header">默认头部内容</slot>
    </header>
    <main>
      <slot>默认主要内容</slot>
    </main>
    <footer>
      <slot name="footer">默认底部内容</slot>
    </footer>
  </div>
</template>
```

### 父组件使用具名插槽

父组件通过`v-slot:name`或其简写形式`#name`来向具名插槽传递内容。

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent>
    <!-- 传递内容给 header 插槽 -->
    <template #header>
      <h1>自定义标题</h1>
    </template>

    <!-- 传递内容给 default 插槽 -->
    <p>这是父组件传递给默认插槽的内容。</p>

    <!-- 传递内容给 footer 插槽 -->
    <template #footer>
      <button>点击我</button>
    </template>
  </ChildComponent>
</template>
```

## 2. 作用域插槽 (Scoped Slots)

作用域插槽是插槽系统中最强大的特性之一。它允许子组件向父组件的插槽内容传递数据，使得父组件可以根据子组件提供的数据来渲染插槽内容。这在构建可复用的列表组件、表格组件等场景中非常有用。

### 子组件定义作用域插槽

子组件在`<slot>`标签上绑定属性，这些属性将作为插槽的`props`传递给父组件。

```vue
<!-- ListComponent.vue -->
<template>
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      <!-- 将 item 和 index 作为插槽 props 传递 -->
      <slot :item="item" :index="index">
        <!-- 默认内容，如果父组件没有提供插槽内容，则显示此内容 -->
        {{ index + 1 }}. {{ item.name }}
      </slot>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { id: 1, name: 'Apple', price: 1.0 },
  { id: 2, name: 'Banana', price: 0.5 },
  { id: 3, name: 'Orange', price: 1.2 }
]);
</script>
```

### 父组件使用作用域插槽

父组件通过`v-slot="slotProps"`或`v-slot="{ item, index }"`（解构赋值）来接收子组件传递的数据。

```vue
<!-- ParentComponent.vue -->
<template>
  <h2>商品列表</h2>
  <ListComponent v-slot="{ item, index }">
    <div class="item-card">
      <span>{{ index + 1 }}. {{ item.name }}</span>
      <span class="price">${{ item.price.toFixed(2) }}</span>
      <button>购买</button>
    </div>
  </ListComponent>

  <h2>简单列表</h2>
  <ListComponent>
    <!-- 不使用作用域插槽，将显示子组件的默认内容 -->
  </ListComponent>
</template>

<style scoped>
.item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 5px;
}
.price {
  font-weight: bold;
  color: green;
}
</style>
```

### 具名作用域插槽

具名插槽和作用域插槽可以结合使用。

```vue
<!-- ChildComponent.vue -->
<template>
  <div>
    <slot name="header" :title="headerTitle"></slot>
    <slot :data="mainData"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const headerTitle = ref('这是头部标题');
const mainData = ref('这是主要数据');
</script>
```

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent>
    <template #header="{ title }">
      <h2>{{ title }}</h2>
    </template>
    <template #default="{ data }">
      <p>从子组件获取的数据: {{ data }}</p>
    </template>
  </ChildComponent>
</template>
```

## 总结

Vue3的高级插槽用法，特别是具名插槽和作用域插槽，为组件的灵活性和可复用性提供了强大的支持。通过合理利用插槽，开发者可以构建出更加通用、易于维护的组件，从而提升整个应用的开发效率和质量。掌握插槽的精髓，是成为一名优秀的Vue开发者不可或缺的技能。
