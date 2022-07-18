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
    v-if="$themeConfig.author"
  >
    {{ $themeConfig.author }}
  </h3>
  <!-- <div class="num">
    <div>
      <h3>{{$recoPosts.length}}</h3>
      <h6>{{$recoLocales.article}}</h6>
    </div>
    <div>
      <h3>{{$tags.list.length}}</h3>
      <h6>{{$recoLocales.tag}}</h6>
    </div>
  </div>
  <ul class="social-links">
    <li
      class="social-item"
      v-for="(item, index) in socialLinks"
      :key="index"
    >
      <reco-icon :icon="item.icon" :link="item.link" :style="{ color: item.color }" />
    </li>
  </ul> -->
  <div class="social-links" v-if="socials && socialsLength > 0">
    <a v-if="item && !item.pop && item.show" v-for="item in socials" :href="item.url" :title="item.title" target="_blank" class="social-items">
      <i class="big" :class="`iconfont ${item.icon}`" :style="`color: ${item.color}`"></i>
    </a>
    <div v-if="item && item.pop && item.show" v-for="item in socials" :title="item.title" target="_blank" class="social-items" 
    @mouseenter="showDetail($event)" @mouseleave="hideDetail($event)"
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
import { defineComponent, reactive, computed, ref, onMounted } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { getOneColor } from '@theme/helpers/other'
import { useInstance } from '@theme/helpers/composable'

const useDetail = () => {
  const instance = useInstance()
  const isPC = ref(true)

  const popupWindowStyle = reactive({
    left: 0,
    top: 0
  })

  const adjustPosition = (dom) => {
    const { offsetWidth } = document.body
    const { x, width } = dom.getBoundingClientRect()
    const distanceToRight = offsetWidth - (x + width)

    if (distanceToRight < 0) {
      const { offsetLeft } = dom
      popupWindowStyle.left = offsetLeft + distanceToRight + 'px'
    }
  }

  const showDetail = (e) => {
    const currentDom = e.target
    const popupWindowWrapper = currentDom.querySelector('.popup-window-wrapper')
    popupWindowWrapper.style.display = 'block'
    const popupWindow = currentDom.querySelector('.popup-window')
    const infoWrapper = document.querySelector('.info-wrapper')
    const { clientWidth } = currentDom
    const { clientWidth: windowWidth, clientHeight: windowHeight } = popupWindow

    if (isPC) {
      popupWindowStyle.left = (clientWidth - windowWidth) / 2 + 'px'
      popupWindowStyle.top = -windowHeight + 'px'

      infoWrapper.style.overflow = 'visible'

      instance.$nextTick(() => {
        adjustPosition(popupWindow)
      })
    } else {
      const getPosition = function (element) {
        const dc = document
        const rec = element.getBoundingClientRect()
        let _x = rec.left
        let _y = rec.top
        _x += dc.documentElement.scrollLeft || dc.body.scrollLeft
        _y += dc.documentElement.scrollTop || dc.body.scrollTop
        return { left: _x, top: _y }
      }

      infoWrapper.style.overflow = 'hidden'
      const left = getPosition(currentDom).left - getPosition(infoWrapper).left

      popupWindowStyle.left = (-left + (infoWrapper.clientWidth - popupWindow.clientWidth) / 2) + 'px'
      popupWindowStyle.top = -windowHeight + 'px'
    }
  }

  const hideDetail = (e) => {
    const currentDom = e.target.querySelector('.popup-window-wrapper')
    currentDom.style.display = 'none'
  }

  onMounted(() => {
    isPC.value = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  })

  return { popupWindowStyle, showDetail, hideDetail }
}


export default defineComponent({
  components: { RecoIcon },
  setup (props, ctx) {

    const instance = useInstance()

    const { popupWindowStyle, showDetail, hideDetail } = useDetail()

    const socialLinks = computed(() => (instance.$themeConfig.blogConfig && instance.$themeConfig.blogConfig.socialLinks || []).map(item => {
      if (!item.color) item.color = getOneColor()
      return item
    }))
    
    const socials = computed(() => { return instance.$themeConfig.socials })

    const socialsLength = computed(() => { 
      let count = 0
      for (let item of instance.$themeConfig.socials) {
        if (item.show) count++
      }
      return count
    })

    return { socialLinks, socials, socialsLength, popupWindowStyle, showDetail, hideDetail }
  }
})
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
      h3 {
        line-height auto
        margin 0 0 .6rem
        color var(--text-color)
      }
      h6 {
        line-height auto
        color var(--text-color)
        margin 0
      }
    }
  }
  // .social-links {
  //   box-sizing border-box
  //   display flex
  //   flex-wrap wrap
  //   padding 10px
  //   .social-item {
  //     width 39px
  //     height 36px
  //     line-height 36px
  //     text-align center
  //     list-style none
  //     transition transform .3s
  //     &:hover {
  //       transform scale(1.08)
  //     }
  //     i {
  //       cursor pointer
  //       font-size 22px
  //     }
  //   }
  //   .h1 {
  //     margin 3rem 0
  //   }
  //   .big {
  //     font-size 1.3rem
  //     margin 0 .5rem
  //   }
  // }
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
</style>
