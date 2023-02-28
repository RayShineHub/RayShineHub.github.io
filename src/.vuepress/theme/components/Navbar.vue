<template>
  <header class="navbar">
    <div class="nav-sub" :class="{fixed: isFixed, visible: isVisible}">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

      <router-link
        :to="$localePath"
        class="home-link">
        <img
          class="logo"
          v-if="$themeConfig.logo"
          :src="$withBase($themeConfig.logo)"
          :alt="$siteTitle">
        <span
          ref="siteName"
          class="site-name"
          :class="{
            pagefullTitle:($frontmatter.layout || ($themeConfig.fullscreen && $frontmatter.isFull) || $frontmatter.home ) && !isFixed
          }"
          v-if="$siteTitle">{{ $siteTitle }}</span>
      </router-link>

      <div
        class="links"
        :style="linksWrapMaxWidth ? {
          'max-width': linksWrapMaxWidth + 'px'
        } : {}">

        <AlgoliaSearchBox
          v-if="isAlgoliaSearch"
          :options="algolia"
          :isNavFixed="isFixed"/>
        <SearchBox :isNavFixed="isFixed" v-else-if="$themeConfig.search !== false && $frontmatter.search !== false"/>
        <NavLinks :isNavFixed="isFixed" class="can-hide"/>

        <Mode />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref, onMounted, computed, onBeforeUnmount } from 'vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton'
import NavLinks from '@theme/components/NavLinks'
import Mode from '@theme/components/DayAndNight'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Mode },

  setup (props, ctx) {
    const instance = useInstance()
    const linksWrapMaxWidth = ref(null)
    const isFixed = ref(false)
    const isVisible = ref(false)
    const fixedHeight = ref(0)
    const pageYOffset = ref(44)

    const algolia = computed(() => {
      return instance.$themeLocaleConfig.algolia || instance.$themeConfig.algolia || {}
    })
    const isAlgoliaSearch = computed(() => {
      return algolia.value && algolia.value.apiKey && algolia.value.indexName
    })

    function css (el, property) {
      // NOTE: Known bug, will return 'auto' if style value is 'auto'
      const win = el.ownerDocument.defaultView
      // null means not to return pseudo styles
      return win.getComputedStyle(el, null)[property]
    }

    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
      const NAVBAR_VERTICAL_PADDING =
        parseInt(css(instance.$el, 'paddingLeft')) +
        parseInt(css(instance.$el, 'paddingRight'))

      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapMaxWidth.value = null
        } else {
          linksWrapMaxWidth.value =
            instance.$el.offsetWidth -
            NAVBAR_VERTICAL_PADDING -
            (instance.$refs.siteName && instance.$refs.siteName.offsetWidth || 0)
        }
      }

      handleLinksWrapWidth()
      window.addEventListener('resize', handleLinksWrapWidth, false)
      window.addEventListener('scroll', instance.throttle(instance.handleScroll, 500))
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', instance.throttle(instance.handleScroll, 1000))
    })

    return { linksWrapMaxWidth, algolia, isAlgoliaSearch, css, isFixed, isVisible, fixedHeight, pageYOffset }
  },
    methods: {
    handleScroll () {
      this.isFixed = window.pageYOffset > this.fixedHeight
      this.throttle(this.handleVisible(), 1000)
    },
    handleVisible () {
      this.isVisible = window.pageYOffset < this.pageYOffset && window.pageYOffset > 0
      this.pageYOffset = window.pageYOffset
    },
    /**
     * @description: Add by RayShine 
     * @param {Fn} func
     * @param {int} delay
     * @return {*}
     */    
    throttle (func, delay = 200) {
      let timer = null
      let startTime = Date.now()

      return function () {
        const curTime = Date.now()
        const remaining = delay - (curTime - startTime)
        const context = this
        const args = arguments

        clearTimeout(timer)
        if (remaining <= 0) {
          func.apply(context, args)
          startTime = Date.now()
        } else {
          timer = setTimeout(func, remaining)
        }
      }
    }
  }
})
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  position relative !important
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  // box-shadow var(--box-shadow)
  // background var(--background-color)
  opacity 1
  animation 1s ease 0s 1 normal none running headerNoOpacity
  .nav-sub
    top 0
    left 0
    right 0
    box-sizing border-box
    width 100%
    border none
    font-size 18px
    color var(--text-color)
  .fixed
    position fixed
    top -3.7rem
    z-index 20
    padding: 0.7rem 1.5rem
    box-shadow var(--box-shadow)
    background var(--nav-background-color)
    color var(--text-color)
    -webkit-box-shadow 0 5px 6px -5px rgba(133,133,133,0.6)
    transition transform 0.2s ease-in-out, opacity 0.2s ease-in-out
  .visible
    transition all 0.5s
    transform translate3d(0, 100%, 0)
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
    border-radius 50%
  .site-name
    font-size 1.2rem
    font-weight 600
    color var(--text-color)
    position relative
  .pagefullTitle
    color $pagefullNavColor
  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    // background-color var(--background-color)
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .fixed
      padding: 0.7rem 4rem
    .can-hide
      display none
    .links
      padding-left .2rem

@media (max-width: $MQNarrow) and (min-width: $MQMobile)
  .site-name
    display none !important
</style>
