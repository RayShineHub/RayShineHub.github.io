<template>
  <div>
    <!-- <i
      class="iconfont reco-account"
      v-if="pageInfo.frontmatter.author || $themeConfig.author || $site.title">
      <span>{{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}</span>
    </i> -->
    <!-- 增加原创和转载图标，去掉作者图标 add by Rayshine -->
    <img 
      v-if="pageInfo.frontmatter.reprint"
      class="article-type-img" 
      :src="$themeConfig.back.baseImgUrl + '/imgs/article-type/reprint.png'" alt="">
    </img>
    <img 
      v-else
      class="article-type-img" 
      :src="$themeConfig.back.baseImgUrl + '/imgs/article-type/original.png'" alt="">
    </img>
    <span class="iconfont reprintUrl" @click.stop="goHome()">
      {{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}
    </span>
    <i
      v-if="pageInfo.frontmatter.date"
      class="iconfont reco-date">
      <span>{{ pageInfo.frontmatter.date | formatDateValue }}</span>
    </i>
    <i
      v-if="showAccessNumber === true"
      class="iconfont reco-eye">
      <AccessNumber
        :idVal="pageInfo.path"
        :numStyle="numStyle" />
    </i>
    <i
      v-if="pageInfo.frontmatter.tags"
      class="iconfont reco-tag tags">
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag == subItem }"
        @click.stop="goTags(subItem)">{{subItem}}</span>
    </i>

    <!-- 增加版权显示,原创显示版权,转载显示链接 -->
    <div v-if="showCopyright" class="copyright">
      <i class="iconfont reco-copyright" style="margin:auto;"></i>
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
// 引入时间格式化js文件
import { formatDate } from '@theme/helpers/utils'

export default {
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
  data () {
    return {
      numStyle: {
        fontSize: '.9rem',
        fontWeight: 'normal',
        color: '#999'
      }
    }
  },
  filters: {
    formatDateValue (value) {
      if (!value) return ''
      // 返回的value的值都是这个样子2019-09-20T18:22:30.000Z
      // 对value进行处理
      value = value.replace('T', ' ').slice(0, value.lastIndexOf('.'))
      // 转化后的value 2019-09-20 18:22:30
      // 获取到时分秒
      const h = Number(value.substr(11, 2))
      const m = Number(value.substr(14, 2))
      const s = Number(value.substr(17, 2))
      // 判断时分秒是不是 00:00:00 (如果是用户手动输入的00:00:00也会不显示)
      if (h > 0 || m > 0 || s > 0) {
        // 时分秒有一个> 0 就说明用户输入一个非 00:00:00 的时分秒
        return formatDate(value)
      } else {
        // 用户没有输入或者输入了 00:00:00
        return formatDate(value, 'yyyy-MM-dd')
      }
    }
  },
  methods: {
    goTags (tag) {
      if (this.$route.path !== `/tag/${tag}/`) {
        this.$router.push({ path: `/tag/${tag}/` })
      }
    },
    goHome () {
      if (this.$route.path !== `/`) {
        this.$router.push({ path: `/` })
      }
    }
  }
}
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
</style>
