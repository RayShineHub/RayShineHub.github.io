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
  beforeMount() {
    // Aos.init({
    //     // offset: 50,
    //     easing: 'ease-in-sine',
    //     duration: 50,
    //     delay: 0,
    //     mirror: true,
    //     disable: 'mobile',
    //     throttleDelay: 10,
    //     useClassNames: false, 
    //     startEvent: 'DOMContentLoaded',
    // })
  },
  mounted() {
    // Aos.init({
    //     // offset: 50,
    //     easing: 'ease-in-sine',
    //     duration: 50,
    //     delay: 0,
    //     mirror: true,
    //     disable: 'mobile',
    //     throttleDelay: 10,
    //     useClassNames: false, 
    //     startEvent: 'DOMContentLoaded',
    // })
    setTimeout(() => { Aos.refresh() }, 1000)
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== from.path) {
        // setTimeout(() => {window.scrollTo(0, 0)}, 20)
        // debugger
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