<template>
  <router-link
    class="nav-link"
    :style="($themeConfig.fullscreen && $frontmatter.isFull) || $frontmatter.home || $frontmatter.layout || $frontmatter.isFixed ?{'color':'#fff'}:{}"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact">
    <i :class="`iconfont ${item.icon}`" :style="($themeConfig.fullscreen && $frontmatter.isFull) || $frontmatter.home || $frontmatter.layout || $frontmatter.isFixed ?{'color':'#fff'}:{}"></i>
    {{ item.text }}
  </router-link>
  <a
    :style="($themeConfig.fullscreen && $frontmatter.isFull) || $frontmatter.home || $frontmatter.layout || $frontmatter.isFixed ?{'color':'#fff','hover':'red'}:{}"
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <i :class="`iconfont ${item.icon}`" 
		:style="($themeConfig.fullscreen && $frontmatter.isFull) || $frontmatter.home || $frontmatter.layout || $frontmatter.isFixed ?{'color':'#fff'}:{}"></i>
    {{ item.text }}
    <OutboundLink/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '@theme/helpers/utils'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
