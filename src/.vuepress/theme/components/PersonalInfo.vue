<template>
<div class="personal-info-wrapper">
  <img
    class="personal-img"
    v-if="$themeConfig.authorAvatar"
    :src="$withBase($themeConfig.authorAvatar)"
    alt="author-avatar"
  >
  <h3
    class="name"
    v-if="$themeConfig.author || $site.title"
  >
    {{ $themeConfig.author || $site.title }}
  </h3>
  <!-- <div class="num">
    <div>
      <router-link
        class="personal-link"
        :to="link"
        :exact="exact">
        <h3>{{$recoPosts.length}}</h3>
        <h6>{{homeBlogCfg.article}}</h6>
      </router-link>
    </div>
    <div>
      <router-link
        class="personal-link"
        :to="link"
        :exact="exact">
        <h3>{{$tags.list.length}}</h3>
        <h6>{{homeBlogCfg.tag}}</h6>
      </router-link>
    </div>
  </div> -->
  <div class="social-links" v-if="socials && socialsLength > 0">
    <a v-if="item && !item.pop && item.show" v-for="item in socials" :href="item.url" :title="item.title" target="_blank" class="social-items">
      <i class="big" :class="`iconfont ${item.icon}`" :style="`color: ${item.color}`"></i>
    </a>
    <div v-if="item && item.pop && item.show" v-for="item in socials" :title="item.title" target="_blank" class="social-items" 
    @mouseenter="toggleShow($event)" @mouseleave="toggleHide($event)"
    >
      <i class="big" :class="`iconfont ${item.icon}`" :style="`color: ${item.color}`"></i>
      <transition name="fade">
        <div class="popup-window-wrapper">
          <div
            class="popup-window"
            :style="popupWindowStyle"
            ref="popupWindow">
            <div class="info">
              <div class="title">
                <h4>{{item.pop.title}}</h4>
              </div>
              <div class="logo">
                <img :src="item.pop.img" />
              </div>
              <p  v-if="item.pop.desc">{{item.pop.desc}}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <h1 class="longcang">{{ $themeConfig.info }}</h1>
  </div>
  <hr>
</div>
</template>

<script>
import { ensureExt } from '@theme/helpers/utils'
export default {
  data () {
    return {
      isPC: true,
      popupWindowStyle: {},
      popupImgUrl:''
    }
  },
  mounted() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isPC = false
    } else {
      this.isPC = true
    }
  },
  computed: {
    homeBlogCfg () {
      return this.$recoLocales.homeBlog
    },
    link () {
      return ensureExt('/tag/')
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === '/tag/')
      }
      return this.link === '/'
    },
    socials () {
      return this.$themeConfig.socials
    },
    socialsLength () {
      let count = 0
      for (let item of this.$themeConfig.socials) {
        if (item.show) count++
      }
      return count
    }
  },
  methods: {
    toggleShow (e) {
      const currentDom = e.target
      const popupWindowWrapper = currentDom.querySelector('.popup-window-wrapper')
      const popupWindow = currentDom.querySelector('.popup-window')
      const infoWrapper = document.querySelector('.info-wrapper')
      popupWindowWrapper.style.display = 'block'
      const { clientWidth } = currentDom
      const {
        clientWidth: windowWidth,
        clientHeight: windowHeight
      } = popupWindow
      if (this.isPC) {
        this.popupWindowStyle = {
          left: (clientWidth - windowWidth) / 2 + 'px',
          top: -windowHeight + 'px'
        }
        infoWrapper.style.overflow = 'visible'
        this.$nextTick(() => {
          this._adjustPosition(currentDom.querySelector('.popup-window'))
        })
      } else {
        const getPosition = function (element) {
          const dc = document
          const rec = element.getBoundingClientRect()
          let _x = rec.left
          let _y = rec.top
          _x += dc.documentElement.scrollLeft || dc.body.scrollLeft
          _y += dc.documentElement.scrollTop || dc.body.scrollTop
          return {
            left: _x,
            top: _y
          }
        }
        infoWrapper.style.overflow = 'hidden'
        const left = getPosition(currentDom).left - getPosition(infoWrapper).left
        this.popupWindowStyle = {
          left: (-left + (infoWrapper.clientWidth - popupWindow.clientWidth) / 2) + 'px',
          top: -windowHeight + 'px'
        }
      }
    },
    toggleHide (e) {
      const currentDom = e.target
      const popupWindowWrapper = currentDom.querySelector('.popup-window-wrapper')
      popupWindowWrapper.style.display = 'none'
    },
    _adjustPosition (dom) {
      const { offsetWidth } = document.body
      const { x, width } = dom.getBoundingClientRect()
      const distanceToRight = offsetWidth - (x + width)
      if (distanceToRight < 0) {
        const { offsetLeft } = dom
        this.popupWindowStyle = {
          ...this.popupWindowStyle,
          left: offsetLeft + distanceToRight + 'px'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.personal-info-wrapper {
  .personal-img {
    display block
    margin 2rem auto 1rem
    width 6rem
    height 6rem
    border-radius 50%
  }
  .name {
    font-size 1rem
    text-align center
    color var(--text-color)
  }
  .num {
    display flex
    margin 0 auto 1rem
    width 80%
    > div {
      text-align center
      flex 0 0 50%
      &:first-child {
        border-right 1px solid #333
      }
      .personal-link {
        color var(--text-color)
        &:hover {
          color $accentColor
        }
        h3 {
          line-height auto
          margin 0 0 .6rem
        }
        h6 {
          line-height auto
          margin 0
        }
      }
    }
  }
  .social-links {
    box-sizing: border-box
    display: flex
    flex-wrap: wrap
    padding: 0.5rem
    justify-content: center
    .social-items {
      margin-bottom: 0.2rem;
      &:hover {
        transform scale(1.2)
      }
    }
    .h1 {
      margin 3rem 0
    }
    .big {
      font-size 1.3rem
      margin 0 .5rem
      // &:hover {
      //   transform: scale(1.04)
      // }  
    }
  }
  .popup-window-wrapper {
    display none
    .popup-window {
      position absolute
      display flex
      background var(--background-color)
      box-shadow var(--box-shadow)
      border-radius $borderRadius
      box-sizing border-box
      // padding .8rem 1rem
      width 12.5rem
      justify-content center
      align-items center
      .info {
        flex 0 0 85%
        width 85%
        text-align center
        .title {
          display flex
          align-items center
          justify-content space-between
          height 2.8rem
          h4 {
            margin .2rem 0
            flex 0 0 100%
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight 600;
          }
        }
        .logo {
          height 9rem
          flex 0 0 2rem
          border-radius $borderRadius
          overflow hidden
          img {
            width 9rem
            height 9rem
          }
        }
        p {
          font-size .3rem
          color var(----text-color)
        }
      }
    }
  }
}
.grey
  color grey

.orange
  color orange

.green
  color green

.blue
  color deepskyblue

.pink
  color pink

.dgreen
  color forestgreen

.black
  color #849b87

.coral
  color coral

.crimson
  color crimson

.indianred
  color indianred

.lightskyblue
  color #2ca5f1

.lightsalmon
  color lightsalmon

.dodgerblue
  color dodgerblue

.forestgreen
  color forestgreen
</style>
