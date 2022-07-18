<template>
  <div>
    <!-- <reco-icon
      v-if="pageInfo.frontmatter.author || $themeConfig.author"
      icon="reco-account"
    >
      <span>{{ pageInfo.frontmatter.author || $themeConfig.author }}</span>
    </reco-icon> -->
    <!-- 增加原创和转载图标，去掉作者图标 add by Rayshine -->
    <img 
      v-if="pageInfo.frontmatter.reprint"
      class="article-type-img" 
      :src="$themeConfig.back.sourceUrl + '/imgs/article-type/reprint.png'" alt="">
    </img>
    <img 
      v-else
      class="article-type-img" 
      :src="$themeConfig.back.sourceUrl + '/imgs/article-type/original.png'" alt="">
    </img>
    <span class="iconfont reprintUrl" @click.stop="goHome()">
      {{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}
    </span>

    <reco-icon
      v-if="pageInfo.frontmatter.date"
      icon="reco-date"
    >
      <span>{{ formatDateValue(pageInfo.frontmatter.date) }}</span>
    </reco-icon>
    <reco-icon
      v-if="showAccessNumber === true"
      icon="reco-eye"
    >
      <AccessNumber :idVal="pageInfo.path" :numStyle="numStyle" />
    </reco-icon>
    <reco-icon
      v-if="pageInfo.frontmatter.tags"
      icon="reco-tag"
      class="tags"
    >
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag == subItem }"
        @click.stop="goTags(subItem)"
      >{{subItem}}</span>
    </reco-icon>

    <!-- 增加版权显示,原创显示版权,转载显示链接 -->
    <div v-if="showCopyright" class="copyright">
      <i class="iconfont reco-copyright" style="margin:auto;font-size: inherit;"></i>
      <span v-if="pageInfo.frontmatter.reprint">原文链接:
        <a class="iconfont reprintUrl" :href="pageInfo.frontmatter.reprintUrl" title="原文链接" target="_blank">
          {{pageInfo.frontmatter.reprintUrl}}
        </a>
      </span>
      <span v-else>
        本文为博主原创文章，遵循
        <a class="reprintUrl" href="https://creativecommons.org/licenses/by-sa/4.0/" title="版权协议" target="_blank">
          CC 4.0 BY-SA
        </a>
        版权协议，转载请附上原文出处链接和本声明。
      </span>
      <div>
        如有侵权，请联系
        <a class="reprintUrl" href="/" @click.stop="goHome()">
          本博主
        </a>
        删除。
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  components: { RecoIcon },
  props: {
    pageInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    currentTag: {
      type: String,
      default: ''
    },
    showAccessNumber: {
      type: Boolean,
      default: false
    },
    isFull: {
      type: Boolean,
      default: false
    },
    showCopyright: {
      type: Boolean,
      default: false
    }
  },

  setup (props, ctx) {
    const instance = useInstance()

    const numStyle = {
      fontSize: '.9rem',
      fontWeight: 'normal',
      color: '#999'
    }

    const goTags = (tag) => {
      if (instance.$route.path !== `/tag/${tag}/`) {
        instance.$router.push({ path: `/tag/${tag}/` })
      }
    }

    const formatDateValue = (value) => {
      return new Intl.DateTimeFormat(instance.$lang).format(new Date(value))
    }
    const goHome = () => {
      if (instance.$route.path !== `/`) {
        instance.$router.push({ path: `/` })
      }
    }

    return { numStyle, goTags, formatDateValue, goHome }
  }
})
</script>

<style lang="stylus" scoped>
.article-type-img
  display inline-block
  width: 36px
  height: 32px
  line-height: 1.5rem
  margin-bottom: -10px
  &:not(:last-child)
    margin-right 0.2rem
  span
    margin-left 0.5rem

.iconfont
  display inline-block
  line-height 1.5rem
  font-size .9rem
  &:not(:last-child)
    margin-right 1rem
  span
    margin-left 0.5rem
.tags
  .tag-item
    font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    cursor pointer
    &.active
      color $accentColor
    &:hover
      color $accentColor
.copyright
  font-size: 8px;
  margin-top 0.5rem
  span, div
    color var(--text-color-sub)
.reprintUrl
  color var(--text-color-sub)
  &:hover
    color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-left 0 !important
  .copyright
    margin-bottom 2.5rem !important
</style>
