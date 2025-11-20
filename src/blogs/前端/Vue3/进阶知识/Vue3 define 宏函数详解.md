---
title: Vue3 define 宏函数详解
description: 深入解析Vue3 &lt;script setup&gt; 中 defineProps、defineEmits、defineExpose 三大宏函数，掌握类型安全的组件接口定义，提升开发效率和代码可维护性。
date: 2024-07-15
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 10
meta:
  - name: description
    content: Vue3 defineProps defineEmits defineExpose 宏函数
  - name: keywords
    content: Vue3 defineProps defineEmits defineExpose 宏函数 类型安全
tags:
 - Vue3
 - 进阶知识
 - defineProps
 - defineEmits
 - defineExpose
categories:
 - 前端
---

在Vue3的`<script setup>`语法糖中，为了更好地支持组合式API和TypeScript，Vue引入了三个编译时宏函数：`defineProps`、`defineEmits`和`defineExpose`。这些宏函数无需导入即可直接使用，它们在编译阶段被处理，用于定义组件的输入（props）、输出（emits）和公共接口（expose），从而实现更类型安全、更简洁的组件开发。

<!-- more -->

## 1. `defineProps()`：定义组件属性

`defineProps()`宏函数用于声明组件接收的`props`。它返回一个`props`对象，可以直接在`<script setup>`中解构或作为普通对象使用。`defineProps`支持两种主要的声明方式：运行时类型声明和TypeScript类型声明。

### 运行时类型声明

这种方式与Vue2的`props`选项类似，通过一个对象来定义`props`的类型、默认值、是否必需等。

```vue
<script setup>
const props = defineProps({
  // 基础类型检查
  msg: String,
  // 带有默认值
  count: {
    type: Number,
    default: 0
  },
  // 必需的属性
  requiredProp: {
    type: String,
    required: true
  },
  // 自定义验证函数
  validatorProp: {
    type: String,
    validator: (value) => {
      return ['success', 'warning', 'danger'].includes(value);
    }
  }
});

console.log(props.msg); // 访问props
</script>
```

### TypeScript类型声明

当使用TypeScript时，`defineProps`可以接受一个类型参数，从而提供更强大的类型推断和编译时检查。这是推荐的方式，因为它提供了最佳的开发体验。

```typescript
<script setup lang="ts">
interface Props {
  msg?: string; // 可选属性
  count: number;
  items: string[];
}

// 使用类型参数声明props
const props = defineProps<Props>();

console.log(props.msg); // 自动推断为 string | undefined
console.log(props.count); // 自动推断为 number

// 也可以为props提供默认值，需要使用 withDefaults 宏函数
// const propsWithDefaults = withDefaults(defineProps<Props>(), {
//   msg: 'default message',
//   count: 1
// });
</script>
```

## 2. `defineEmits()`：定义组件事件

`defineEmits()`宏函数用于声明组件可以触发的自定义事件。它返回一个`emit`函数，用于在组件内部触发事件。同样，`defineEmits`也支持运行时声明和TypeScript类型声明。

### 运行时声明

通过一个字符串数组来声明事件名称。

```vue
<script setup>
const emit = defineEmits(['update', 'delete']);

const handleClick = () => {
  emit('update', 123); // 触发 'update' 事件，并传递数据
};
</script>
```

### TypeScript类型声明

通过一个类型字面量来声明事件，可以指定事件名称和传递的参数类型，提供更严格的类型检查。

```typescript
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update', id: number, value: string): void;
  (e: 'delete', id: number): void;
  (e: 'change', event: Event): void;
}>();

const handleUpdate = () => {
  emit('update', 1, 'new value');
};

const handleDelete = (id: number) => {
  emit('delete', id);
};
</script>
```

## 3. `defineExpose()`：暴露公共接口

默认情况下，当父组件通过模板引用（`ref`）访问子组件实例时，如果子组件使用了`<script setup>`，那么父组件将无法访问到子组件内部的任何变量或方法。`defineExpose()`宏函数就是为了解决这个问题，它允许你显式地暴露组件实例的公共属性和方法。

```vue
<!-- ChildComponent.vue -->
<script setup>
import { ref } from 'vue';

const privateData = ref('I am private');
const publicData = ref('I am public');

const privateMethod = () => {
  console.log('Private method called');
};
const publicMethod = () => {
  console.log('Public method called');
};

// 只有 publicData 和 publicMethod 会被暴露给父组件
defineExpose({
  publicData,
  publicMethod
});
</script>
```

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent ref="childRef" />
  <button @click="callChildMethod">Call Child Method</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ChildComponent from './ChildComponent.vue';

const childRef = ref(null);

onMounted(() => {
  if (childRef.value) {
    console.log(childRef.value.publicData); // 访问暴露的属性
    childRef.value.publicMethod(); // 调用暴露的方法
    // console.log(childRef.value.privateData); // 无法访问，会报错
  }
});

const callChildMethod = () => {
  if (childRef.value) {
    childRef.value.publicMethod();
  }
};
</script>
```

## 总结

`defineProps`、`defineEmits`和`defineExpose`是Vue3 `<script setup>`中构建组件接口的核心宏函数。它们不仅简化了代码，更重要的是，通过与TypeScript的结合，提供了强大的类型安全保障，使得组件的开发更加健壮和可维护。熟练掌握这些宏函数的使用，是高效开发Vue3组件的关键。
