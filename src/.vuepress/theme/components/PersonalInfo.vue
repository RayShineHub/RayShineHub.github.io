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
  <div class="num">
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
  </div>
  <hr>
</div>
</template>

<script>
import { ensureExt } from '@theme/helpers/utils'
export default {
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
}
</style>
