<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout" :class="{background: layout != 'NotFound',overflow: layout != 'Layout' }">
    <component :is="layout"/>
    <NavPlayer v-show="layout != 'NotFound'"></NavPlayer>
    <!-- <div id="NavPlayer" v-show="layout != 'NotFound'"></div> -->
  </div>
</template>

<script>
import Aos from 'aos'
import Vue from "vue"
import Category from './Category.vue'
import Layout from './Layout.vue'
import Tag from './Tag.vue'
import Tags from './Tags.vue'
import TimeLines from './TimeLines.vue'
export default {
  components: {Category, Layout, Tag, Tags, TimeLines},
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  },
  mounted() {
    // var tipComponent = Vue.extend({
    //         render: (h) =>
    //             h(NavPlayer),
    // }); //生成组件的dom
    // const component = new tipComponent().$mount();
    // var DomContent = component.$el; //将vue结构转化成dom
    // document.getElementById("NavPlayer").appendChild(DomContent);
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== from.path) {
        setTimeout(() => {window.scrollTo(0, 0)}, 10)
        setTimeout(() => { Aos.refresh() }, 1000)
      }
    }
  }
}
</script>

<style lang="stylus">
.overflow {
  overflow: hidden
  min-height: 100vh;
}
.background {
  background: var(--background-color)
}
</style>