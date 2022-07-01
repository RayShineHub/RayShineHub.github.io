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
					:class="{pagefull: !isFull}"
          v-if="$siteTitle">{{ $siteTitle }}</span>
					<!-- :style="{color: isFixed ? '' : '#eee'}" -->
      </router-link>


      <div
        ref="links"
        class="links"
				:class="{pagefull: !isFull}"
        :style="{
          'max-width': linksWrapMaxWidth? linksWrapMaxWidth + 'px' : ''}">

        <!-- 搜索框 -->
        <AlgoliaSearchBox
          v-if="isAlgoliaSearch"
          :options="algolia"/>
        <SearchBox :isNavFixed="isFixed" v-else-if="$themeConfig.search !== false && $frontmatter.search !== false"/>

        <!-- 导航 -->
				<NavLinks class="can-hide" :isNavFixed="isFixed"/>

        <!-- 主题 -->
        <Mode />
        
      </div>

      <!-- <div class="nav-music"
      :style="linksWrapOffsetWidth ? {
        'right': linksWrapOffsetWidth + 'px'
      } : {}">
        <img class="avatar" :src="currentMusic? currentMusic.avatarImg : ''" />
        <audio ref="audio" :autoplay="false" :src="currentMusic? currentMusic.url : ''"></audio>
      </div> -->
	  <!-- <APlayer class="nav-music" iid="APlayer" mini :audio="audio" :lrcType="3" v-show="false"></APlayer> -->
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

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Mode },

  data () {
    let that = this
    return {
      linksWrapMaxWidth: null,
      linksWrapOffsetWidth: null,
      fixedHeight: 0,
      pageYOffset: 44,
      isFixed: false,
      isVisible: false,
			audio: {
				name: 'Let It Go.m3u8',
				artist: 'Idina Menzel',
				url: 'https://cdn.moefe.org/music/hls/frozen.m3u8',
				cover: 'https://p1.music.126.net/n72JJkPg2-ENxhB-DsZ2AA==/109951163115400390.jpg?param=300y300', // prettier-ignore
				lrc: 'https://cdn.moefe.org/music/lrc/frozen.lrc',
				type: 'customHls',
			},
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
    window.addEventListener('scroll', this.throttle(this.handleScroll, 300))
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, 200))
  },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },
		isFull () {
			return this.$frontmatter.layout || this.$frontmatter.home || (this.$frontmatter.isFull || this.isVisible) ? true :false
		}
  },

  methods: {
    handleScroll () {
      this.isFixed = window.pageYOffset > this.fixedHeight
			// this.$frontmatter['isFixed'] = window.pageYOffset > 44
      this.throttle(this.handleVisible(), 200)
    },
    handleVisible () {
      this.isVisible = window.pageYOffset < this.pageYOffset && window.pageYOffset > 0
			// debugger
			// this.$frontmatter['isFixed'] = window.pageYOffset < 44
      this.pageYOffset = window.pageYOffset
    },
    throttle (func, delay) {
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

.pagefull
    color var(--text-color) !important

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
    top -60px
    z-index 20
    padding 10px 36px
    box-shadow var(--box-shadow)
    background $darkColor6
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
    color $lightColor10
    position relative
  .nav-music
    padding-right 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    // background-color var(--background-color)
    .avatar
      height $navbarHeight - 1.4rem
      min-width $navbarHeight - 1.4rem
      margin-right 0.8rem
      vertical-align top
      border-radius 50%
      box-shadow 0 1px 8px 1px rgba(0, 0, 0, 0.3)
      -webkit-animation animal 1s infinite linear
      -webkit-transform-origin center center
      -ms-transform-origin center center
      transform-origin center center
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

