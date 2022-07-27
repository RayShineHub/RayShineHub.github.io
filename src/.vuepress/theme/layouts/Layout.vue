<template>
  <Common :sidebarItems="sidebarItems" :showModule="show">
    <component v-if="$frontmatter.home" :is="homeCom"/>
    <Page v-else :key="path" :sidebar-items="sidebarItems"/>
    <Footer v-if="$frontmatter.home" class="footer" />
  </Common>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from 'vue'
import Home from '@theme/components/Home'
import HomeBlog from '@theme/components/HomeBlog'
import Page from '@theme/components/Page'
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common'
import { resolveSidebarItems } from '@theme/helpers/utils'
import { useInstance } from '@theme/helpers/composable'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'

export default defineComponent({
  components: { HomeBlog, Home, Page, Common, Footer, ModuleTransition },
  setup (props, ctx) {
    const instance = useInstance()

    const sidebarItems = computed(() => {
      const { $page, $site, $localePath } = instance
      if ($page) {
        let items = resolveSidebarItems(
          $page,
          $page.regularPath,
          $site,
          $localePath
        )
        // add by Rayshine 自动生成侧边栏时，文章排序
        // 在 frontmatter 中配置每篇文章的 sidebarSeq
        if (items && items.length > 0) {
          items = items.map(item => sortArticles(item))
        }
        return items
      } else {
        return []
      }
    })
    
    const sortArticles = (item) => {
      const children = item.children || []
      if (children.length > 0) {
          children.sort( (a,b) => {
          if (a.frontmatter && b.frontmatter) return a.frontmatter.sidebarSeq - b.frontmatter.sidebarSeq
          return
        })
      }
      return {
        type: item.type,
        path: item.path,
        title: item.title,
        sidebarDepth: item.sidebarDepth,
        children: children.map(v => sortArticles(v)),
        collapsable: item.collapsable !== false
      }
    }

    const homeCom = computed(() => {
      const { type } = instance.$themeConfig || {}
      if (type) {
        return type == 'blog' ? 'HomeBlog' : type
      }
      return 'Home'
    })

    const show = ref(false)
    onMounted(() => {
      show.value = true
    })

    const path = computed(() => {
      return instance?.$page.path
    })

    return { sidebarItems, homeCom, show, path }
  }
})
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
