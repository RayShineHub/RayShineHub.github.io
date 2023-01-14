(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{500:function(v,_,e){"use strict";e.r(_);var t=e(1),o=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"为什么要用diff算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用diff算法"}},[v._v("#")]),v._v(" 为什么要用Diff算法")]),v._v(" "),_("p",[v._v("由于在浏览器中操作 "),_("code",[v._v("DOM")]),v._v(" 是很昂贵的，频繁的操作 "),_("code",[v._v("DOM")]),v._v("，会产生一定的性能问题，这就是虚拟 "),_("code",[v._v("DOM")]),v._v(" 的产生原因。虚拟 "),_("code",[v._v("DOM")]),v._v(" 本质上是 "),_("code",[v._v("JavaScript")]),v._v(" 对象，是对真实 "),_("code",[v._v("DOM")]),v._v(" 的抽象状态变更时，记录新树与旧树的差异，最后把差异更新到真正的 "),_("code",[v._v("DOM")]),v._v(" 中。")]),v._v(" "),_("p",[v._v("即使使用了 "),_("code",[v._v("Virtual DOM")]),v._v(" 来进行真实DOM的渲染，在页面更新的时候，也不能全量地将整颗 "),_("code",[v._v("Virtual DOM")]),v._v(" 进行渲染，而是去渲染改变的部分，这时候就需要一个计算 "),_("code",[v._v("Virtual DOM")]),v._v(" 树改变部分的算法了，这个算法就是 "),_("code",[v._v("Diff算法")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("diff算法的作用：用来修改DOM的一小段，不会引起dom树的重绘。")])]),v._v(" "),_("h2",{attrs:{id:"vue-diff算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-diff算法"}},[v._v("#")]),v._v(" Vue Diff算法")]),v._v(" "),_("p",[_("code",[v._v("Diff算法")]),v._v("将 "),_("code",[v._v("虚拟DOM")]),v._v(" 的某个节点数据改变后生成的新的node节点与旧节点进行比较，并替换为新的节点，具体过程就是调用 "),_("code",[v._v("Patch")]),v._v(" 方法，比较新旧节点，一边比较一边给真实 "),_("code",[v._v("DOM")]),v._v(" 打补丁进行替换\n简单来说，"),_("code",[v._v("Diff算法")]),v._v("有以下过程")]),v._v(" "),_("ol",[_("li",[v._v("同级比较，再比较子节点")]),v._v(" "),_("li",[v._v("如果节点类型不同，直接干掉前面的节点，再创建并插入新节点，不会再比较这个节点以后的子节点。")]),v._v(" "),_("li",[v._v("子节点：先判断一方有子节点，一方没有子节点的情况(如果新的children没有子节点，将旧的节点移除)）")]),v._v(" "),_("li",[v._v("比较都有子节点的情况(核心diff)，递归比较子节点")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("svg",{staticClass:"svgIcon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[_("g",{attrs:{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[_("circle",{attrs:{cx:"12",cy:"12",r:"9"}}),_("path",{attrs:{d:"M12 8h.01"}}),_("path",{attrs:{d:"M11 12h1v4h1"}})])]),_("p",{staticClass:"title"}),_("p",[v._v("正常diff两个树的时间复杂度是 "),_("code",[v._v("O(n^3)")]),v._v("， 但实际情况下我们很少会进行跨层级的移动DOM，所以vue将diff进行了优化，从 "),_("code",[v._v("O(n^3)")]),v._v(" –> "),_("code",[v._v("O(n)")]),v._v(" ，只有当新旧children都为多个子节点时才需要用核心的diff算法进行同层级比较。")])]),_("h3",{attrs:{id:"vue-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-2"}},[v._v("#")]),v._v(" Vue 2")]),v._v(" "),_("p",[_("code",[v._v("Vue2.x")]),v._v(" 的核心 "),_("code",[v._v("Diff算法")]),v._v(" 采用了 "),_("strong",[v._v("双端比较算法")]),v._v("，同时从新旧children的两端开始进行比较，借助Key值找到可复用的节点，再进行相关操作。")]),v._v(" "),_("p",[v._v("新旧children中的节点只有顺序是不同的时候，最佳的操作应该是通过移动元素的位置来达到更新的目的，需要在新旧children的节点中保存映射关系，以便能够在旧children的节点中找到可复用的节点。key也就是children中节点的唯一标识。")]),v._v(" "),_("p",[v._v("相比 "),_("code",[v._v("React")]),v._v(" 的 "),_("code",[v._v("Diff算法")]),v._v("，同样情况下可以"),_("strong",[v._v("减少移动节点的次数，减少不必要的性能损耗，更加的优雅")]),v._v("。")]),v._v(" "),_("h3",{attrs:{id:"vue-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-3"}},[v._v("#")]),v._v(" Vue 3")]),v._v(" "),_("p",[_("code",[v._v("Vue3.x")]),v._v(" 借鉴了 "),_("code",[v._v("ivi算法")]),v._v(" 和 "),_("code",[v._v("inferno算法")]),v._v("。")]),v._v(" "),_("p",[v._v("在创建 "),_("code",[v._v("VNode")]),v._v(" 时就确定其类型，以及在 "),_("code",[v._v("mount/patch")]),v._v(" 的过程中采用位运算来判断一个 "),_("code",[v._v("VNode")]),v._v(" 的类型，在这个基础之上再配合核心的 "),_("code",[v._v("Diff算法")]),v._v("，使得性能上较 "),_("code",[v._v("Vue2.x")]),v._v("有了提升(实际的实现可以结合Vue3.x的源码看)")]),v._v(" "),_("p",[v._v("该算法中还运用了动态规划的思想求解最长递归子序列。")])])}),[],!1,null,null,null);_.default=o.exports}}]);