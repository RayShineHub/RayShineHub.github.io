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
  <div class="social-links">
    <a v-if="socials.github" :href="socials.github" title="github" target="_blank" class="social-items">
      <i class="iconfont big reco-github black"></i>
    </a>
    <a v-if="socials.gitlab" :href="socials.gitlab" title="gitlab" target="_blank" class="social-items">
      <i class="iconfont big reco-gitlab coral"></i>
    </a>
    <a v-if="socials.gitee" :href="socials.gitee" title="gitee" target="_blank" class="social-items">
      <i class="iconfont big reco-mayun crimson"></i>
    </a>
    <a v-if="socials.jianshu" :href="socials.jianshu" title="简书" target="_blank" class="social-items">
      <i class="iconfont big reco-jianshu indianred"></i>
    </a>
    <a v-if="socials.zhihu" :href="socials.zhihu" title="知乎" target="_blank" class="social-items">
      <i class="iconfont big reco-zhihu lightskyblue"></i>
    </a>
    <a v-if="socials.toutiao" :href="socials.toutiao" title="头条" target="_blank" class="social-items">
      <i class="iconfont big reco-toutiao lightsalmon"></i>
    </a>
    <a v-if="socials.juejin" :href="socials.juejin" title="掘金" target="_blank" class="social-items">
      <i class="iconfont big reco-juejin dodgerblue"></i>
    </a>
    <a v-if="socials.segmentfault" :href="socials.segmentfault" title="思否" target="_blank" class="social-items">
      <i class="iconfont big reco-sf forestgreen"></i>
    </a>
    <a v-if="socials.csdn" :href="socials.csdn" title="CSDN" target="_blank" class="social-items">
      <i class="iconfont big reco-csdn indianred"></i>
    </a>
    <a v-if="socials.wechat" href="javascript:;" title="微信" target="_blank" class="social-items" @mouseenter="toggle('wechat')" @mouseleave="toggle('wechat')">
      <i class="iconfont big reco-wechat forestgreen"></i>
    </a>
    <a v-if="socials.qq" href="javascript:;" title="QQ" target="_blank" class="social-items" @mouseenter="toggle('wechat')" @mouseleave="toggle('wechat')">
      <i class="iconfont big reco-qq lightskyblue"></i>
    </a>
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
      open: false
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
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
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
