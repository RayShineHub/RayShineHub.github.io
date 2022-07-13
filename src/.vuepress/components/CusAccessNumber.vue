<template>
  <span v-if="solution && solution === 'valine'" :id="getIdVal(idVal)" class="leancloud-visitors" :data-flag-title="flagTitle">
    <a class="leancloud-visitors-count" :style="numStyle"></a>
  </span>
  <span v-else-if="solution && solution === 'waline'" class="waline-pageview-count" :data-path="getIdVal(idVal)" :style="numStyle"/>
</template>

<script>
export default {
  name: 'CusAccessNumber',
  props: {
    idVal: String,
    numStyle: Object,
    flagTitle: {
      type: String,
      default: 'Your Article Title'
    }
  },
  computed: {
    solution () {
      return this.$themeConfig.commentsSolution || 'waline'
    }
  },
  methods: {
    getIdVal (path) {
      if (this.$themeConfig.commentsSolution === 'waline' && path != '/') {
        path = '/' + this.$page.relativePath.replace(/\.md$/g, '.html')
      }
      const base = this.$site.base
      return base.slice(0, base.length - 1) + path
    }
  }
}
</script>

<style lang="styl">
.waline-pageview-count {
  font-weight: 500;
  color: #67cc86;
}
</style>
