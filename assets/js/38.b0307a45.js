(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{506:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"javascript-闭包-closure-的概念与理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-闭包-closure-的概念与理解"}},[t._v("#")]),t._v(" "),a("code",[t._v("JavaScript")]),t._v(" "),a("strong",[t._v("闭包(closure)")]),t._v(" 的概念与理解？")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("概念")]),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("闭包")]),a("OutboundLink")],1),t._v("是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用链域，也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。")])]),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("创建")]),a("p",[t._v("在 "),a("code",[t._v("JavaScript")]),t._v(" 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。")])]),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("特性")]),a("ol",[a("li",[t._v("函数嵌套函数。")]),t._v(" "),a("li",[t._v("内部函数可以引用外层函数的参数与变量。")]),t._v(" "),a("li",[t._v("参数与变量不会被垃圾回收机制回收，可以通过引用一直访问到这些内容。")])])]),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mozilla"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name 是一个被 init 创建的局部变量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("displayName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// displayName() 是内部函数，一个闭包")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用了父函数中声明的变量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("displayName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("init()")]),t._v(" 创建了一个局部变量 "),a("code",[t._v("name")]),t._v(" 和一个名为 "),a("code",[t._v("displayName()")]),t._v(" 的函数。"),a("code",[t._v("displayName()")]),t._v(" 是定义在 "),a("code",[t._v("init()")]),t._v(" 里的内部函数，并且仅在 "),a("code",[t._v("init()")]),t._v(" 函数体内可用。请注意，"),a("code",[t._v("displayName()")]),t._v(" 没有自己的局部变量。然而，因为它可以访问到外部函数的变量，所以 "),a("code",[t._v("displayName()")]),t._v(" 可以使用父函数 "),a("code",[t._v("init()")]),t._v(" 中声明的变量 "),a("code",[t._v("name")]),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"_9大使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9大使用场景"}},[t._v("#")]),t._v(" 9大使用场景")]),t._v(" "),a("ol",[a("li",[t._v("返回值（最常用，如 "),a("code",[t._v("Vue")]),t._v(" 的 "),a("code",[t._v("data()")]),t._v(" 函数）")]),t._v(" "),a("li",[t._v("函数赋值")]),t._v(" "),a("li",[t._v("函数参数")]),t._v(" "),a("li",[a("code",[t._v("IIFE")]),t._v("（自执行函数）")]),t._v(" "),a("li",[t._v("循环赋值")]),t._v(" "),a("li",[a("code",[t._v("getter")]),t._v(" 和 "),a("code",[t._v("setter")])]),t._v(" "),a("li",[t._v("迭代器（执行一次函数往下取一个值）")]),t._v(" "),a("li",[t._v("首次区分（相同的参数，函数不会重复执行）")]),t._v(" "),a("li",[t._v("缓存")])]),t._v(" "),a("p",[t._v("详情参考"),a("a",{attrs:{href:"https://www.fly63.com/article/detial/9974?type=2",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解JavaScript闭包9大使用场景"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"说说你对闭包的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说你对闭包的理解"}},[t._v("#")]),t._v(" 说说你对闭包的理解?")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("ul",[a("li",[a("p",[t._v("使用闭包主要是为了设计私有的方法和变量。闭包的"),a("strong",[t._v("优点是可以避免全局变量的污染，缺点是闭包会常驻内存")]),t._v("，会增大内存使用量，使用不当很容易造成内存泄露。在 "),a("code",[t._v("js")]),t._v(" 中，函数即闭包，只有函数才会产生作用域的概念.")])]),t._v(" "),a("li",[a("p",[t._v("闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即"),a("strong",[t._v("闭包可以使得它诞生环境一直存在。")])])]),t._v(" "),a("li",[a("p",[t._v("闭包的另一个用处，是封装对象的私有属性和私有方法。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);