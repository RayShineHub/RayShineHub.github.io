---
title: 知识篇 -- Vue3 Router：构建现代单页应用的导航系统
description: 深入探讨Vue Router在Vue3中的使用，包括其核心概念（路由配置、动态路由、嵌套路由、导航守卫、路由元信息）以及与Vue2版本的差异，帮助开发者构建高效、灵活的单页应用导航系统。
date: 2024-07-05
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 8
meta:
  - name: description
    content: Vue3 Router深度解析
  - name: keywords
    content: Vue3 Router 路由 单页应用 SPA 导航守卫 动态路由 嵌套路由
tags:
 - Vue3
 - 进阶知识
 - 路由
categories:
 - 前端
---

Vue Router是Vue.js官方的路由管理器，它与Vue.js核心深度集成，是构建单页应用（Single Page Application, SPA）不可或缺的一部分。在Vue3中，Vue Router也发布了4.x版本，带来了与Vue3 Composition API更好的集成，以及一些API上的优化。本文将深入探讨Vue Router在Vue3中的使用。

<!-- more -->

## Vue Router 4.x 的主要变化

Vue Router 4.x 专为Vue3设计，并充分利用了Vue3的新特性。与Vue Router 3.x（Vue2版本）相比，主要变化包括：

*   **创建方式**：不再通过 `new VueRouter()` 创建实例，而是使用 `createRouter` 函数。
*   **历史模式**：`mode` 选项被 `history` 选项取代，用于配置不同的历史模式（`createWebHistory`, `createWebHashHistory`, `createMemoryHistory`）。
*   **安装方式**：通过 `app.use(router)` 显式安装到Vue应用实例。
*   **访问路由实例**：在 `setup` 函数中，通过 `useRoute` 和 `useRouter` 组合式函数访问路由信息和路由实例。
*   **导航守卫**：API保持一致，但使用方式更灵活。

## Vue Router的基本使用 (Vue3)

### 1. 安装

首先，你需要安装Vue Router 4.x。
```bash
npm install vue-router@4
# 或者
yarn add vue-router@4
```

### 2. 创建路由实例

在你的Vue应用中，创建一个 `router` 实例，并定义路由配置。

**`router/index.js`**：
```javascript
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(), // 使用HTML5 History模式
    // history: createWebHashHistory(), // 使用Hash模式
    routes
});

export default router;
```

### 3. 挂载到Vue应用实例

将创建的 `router` 实例挂载到Vue应用实例中。

**`main.js`**：
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由实例

const app = createApp(App);
app.use(router); // 注入路由
app.mount('#app');
```

### 4. 路由链接与路由视图

在Vue组件的模板中，使用 `<router-link>` 创建导航链接，使用 `<router-view>` 显示匹配到的组件。

**`App.vue`**：
```html
<template>
    <div id="app">
        <nav>
            <router-link to="/">首页</router-link> |
            <router-link to="/about">关于</router-link>
        </nav>
        <router-view></router-view> <!-- 路由匹配到的组件将渲染在这里 -->
    </div>
</template>
```

## 动态路由匹配 (Vue3)

当需要将同一个组件映射到不同的URL模式时，可以使用动态路由。

**`router/index.js`**：
```javascript
const routes = [
    // ...
    {
        path: '/user/:id', // :id 是一个动态片段
        name: 'User',
        component: () => import('../views/User.vue') // 懒加载组件
    }
];
```

**`User.vue` (使用Composition API)**：
```vue
<template>
    <div>
        <h2>用户详情</h2>
        <p>用户ID: {{ route.params.id }}</p>
        <button @click="goToHome">返回首页</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(); // 获取当前路由信息
const router = useRouter(); // 获取路由实例

const goToHome = () => {
    router.push('/'); // 编程式导航
};
</script>
```
在 `setup` 函数中，通过 `useRoute()` 访问当前路由信息，通过 `useRouter()` 访问路由实例进行编程式导航。

## 嵌套路由 (Vue3)

Vue Router 4.x 同样支持嵌套路由，其配置方式与Vue2版本类似。

**`router/index.js`**：
```javascript
const routes = [
    {
        path: '/dashboard',
        component: () => import('../views/Dashboard.vue'),
        children: [ // 嵌套路由
            {
                path: 'profile', // 完整的路径是 /dashboard/profile
                component: () => import('../views/DashboardProfile.vue')
            },
            {
                path: 'settings', // 完整的路径是 /dashboard/settings
                component: () => import('../views/DashboardSettings.vue')
            }
        ]
    }
];
```

**`Dashboard.vue`**：
```html
<template>
    <div>
        <h1>仪表盘</h1>
        <nav>
            <router-link to="/dashboard/profile">个人资料</router-link> |
            <router-link to="/dashboard/settings">设置</router-link>
        </nav>
        <router-view></router-view> <!-- 嵌套路由的组件将渲染在这里 -->
    </div>
</template>
```

## 导航守卫 (Navigation Guards) (Vue3)

导航守卫在Vue Router 4.x 中仍然是重要的功能，用于在路由跳转过程中进行权限验证、数据加载等操作。API保持一致，但使用方式更灵活。

**全局前置守卫示例**：
```javascript
router.beforeEach((to, from) => {
    // to: 即将进入的目标路由对象
    // from: 当前导航正要离开的路由对象
    // next: 在Vue Router 4.x 中，next() 是可选的，如果没有调用next，则导航会被阻止。
    //       如果返回 false，则导航会被取消。
    //       如果返回一个路由地址，则导航到该地址。
    const isAuthenticated = false; // 假设用户未登录

    if (to.name !== 'Login' && !isAuthenticated) {
        return { name: 'Login' }; // 未登录，跳转到登录页
    }
    // 否则，允许进入
});
```
**注意**：在Vue Router 4.x 中，`next()` 是可选的。如果没有调用 `next`，则导航会被阻止。如果返回 `false`，则导航会被取消。如果返回一个路由地址，则导航到该地址。

## 路由元信息 (Meta Fields) (Vue3)

你可以在路由配置中定义 `meta` 字段，为路由添加自定义数据。这些元信息可以在导航守卫或组件内部访问。

**`router/index.js`**：
```javascript
const routes = [
    {
        path: '/admin',
        component: () => import('../views/Admin.vue'),
        meta: { requiresAuth: true, roles: ['admin'] } // 添加元信息
    }
];
```

**在导航守卫中访问元信息**：
```javascript
router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !isAuthenticated) {
        return { name: 'Login' };
    }
});
```

## 总结

Vue Router 4.x 专为Vue3设计，提供了与Composition API更好的集成，以及更简洁的API。通过其强大的路由映射、动态路由、嵌套路由、导航守卫和路由元信息等功能，开发者可以轻松地构建出复杂、灵活且用户体验良好的单页应用导航系统。掌握Vue Router 4.x，是深入Vue3生态系统和开发大型前端应用的关键技能。
