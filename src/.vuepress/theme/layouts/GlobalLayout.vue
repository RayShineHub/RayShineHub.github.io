<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <!-- <header><h1>Header</h1></header> -->
    <NavPlayer></NavPlayer>
    <component :is="layout"/>
    <!-- <footer><h1>Footer</h1></footer> -->
  </div>
</template>

<script>
export default {
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
  }
}
</script>