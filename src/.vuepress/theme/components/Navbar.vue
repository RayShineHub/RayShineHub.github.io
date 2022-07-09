<template>
  <header class="navbar" >
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
					<!-- :style="{color: isFixed ? '' : '#eee'}" -->
      </router-link>


      <div
        ref="links"
        class="links"
        :style="{
          'max-width': linksWrapMaxWidth? linksWrapMaxWidth + 'px' : ''}">
        <!-- 播放器 -->
        <NavPlayer :linksWrapOffsetWidth="linksWrapOffsetWidth" :isNavFixed="isFixed"></NavPlayer>
        <!-- 搜索框 -->
        <AlgoliaSearchBox
          v-if="isAlgoliaSearch"
          :options="algolia"
          :isNavFixed="isFixed"/>
        <SearchBox :isNavFixed="isFixed" v-else-if="$themeConfig.search !== false && $frontmatter.search !== false"/>

        <!-- 导航 -->
				<NavLinks class="can-hide" :isNavFixed="isFixed"/>

        <!-- 主题 -->
        <Mode />

      </div>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton'
import NavLinks from '@theme/components/NavLinks'
// import Mode from '@theme/components/Mode'
import Mode from '@theme/components/DayAndNight.vue'
import NavPlayer from '../../components/NavPlayer.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Mode, NavPlayer},

  data () {
    let that = this
    return {
      linksWrapMaxWidth: null,
      linksWrapOffsetWidth: null,
      fixedHeight: 0,
      pageYOffset: 44,
      isFixed: false,
      isVisible: false
    }
  },
  props: {
    musicList: {
      type: Array,
      default: () => []
    },
    currentMusic: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    let that = this
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        that.linksWrapMaxWidth = null
      } else {
        that.linksWrapMaxWidth = that.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          (that.$refs.siteName && that.$refs.siteName.offsetWidth || 0)
        that.linksWrapOffsetWidth = that.$refs.links.offsetWidth || 0
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
    window.addEventListener('scroll', this.throttle(this.handleScroll, 500))
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, 1000))
  },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  methods: {
    handleScroll () {
      this.isFixed = window.pageYOffset > this.fixedHeight
			// this.$frontmatter['isFixed'] = window.pageYOffset > 44
      this.throttle(this.handleVisible(), 1000)
    },
    handleVisible () {
      this.isVisible = window.pageYOffset < this.pageYOffset && window.pageYOffset > 0
			// debugger
			// this.$frontmatter['isFixed'] = window.pageYOffset < 44
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
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>
<style scoped="scoped">

</style>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  position relative
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
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
  .nav-music
    display: inline-block;
    padding-right 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    // position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    // background-color var(--background-color)
    .avatar
      height $navbarHeight - 1rem
      min-width $navbarHeight - 1rem
      margin-right 0.8rem
      vertical-align top
      border-radius 50%
      box-shadow 0 1px 8px 1px var(--text-color)
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

@-webkit-keyframes animal
  0%
    transform rotate(0deg)
    -ms-transform rotate(0deg);
    -webkit-transform rotate(0deg);
  100%
    transform rotate(-360deg)
    -ms-transform rotate(-360deg)
    -webkit-transform rotate(-360deg)

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .fixed
      padding 10px 4rem
    .can-hide
      display none
    .links
      padding-left .2rem
</style>

