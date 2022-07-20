<template>
  <Common class="categories-wrapper" :sidebar="false" :style="$themeConfig.fullscreen? {
        'max-width': '2080px',
        'margin': '0 auto',
        'padding': '0'
      } : {}">
    <div v-if="$themeConfig.fullscreen"
      :class="$themeConfig.fullscreen ? 'cfullPic': '' "
      :style="$themeConfig.fullscreen ? {
        'background': 'url(' + getPic() +')'
      } : {}" >
    </div>
    <div :style="$themeConfig.fullscreen? {
        'max-width': '860px',
        'margin': '0 auto',
        'padding': '4.6rem 2.5rem 0'
      } : {}">
      <!-- 分类集合 -->
      <ul class="category-wrapper">
        <li
          class="category-item"
          :class="title == item.name ? 'active': ''"
          v-for="(item, index) in $categoriesList"
          v-show="item.pages.length > 0"
          :key="index">
          <router-link :to="item.path">
            <span class="category-name">{{ item.name }}</span>
            <span class="post-num" :style="{ 'backgroundColor': getOneColor() }">{{ item.pages.length }}</span>
          </router-link>
        </li>
      </ul>

      <!-- 博客列表 -->
      <note-abstract
        class="list"
        :data="posts"
        @paginationChange="paginationChange"
      ></note-abstract>
    </div>
  </Common>
</template>

<script>
import { defineComponent, computed, onMounted, onBeforeMount } from 'vue'
import Aos from 'aos'
import Common from '@theme/components/Common'
import NoteAbstract from '@theme/components/NoteAbstract'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import { sortPostsByStickyAndDate, filterPosts } from '@theme/helpers/postData'
import { getOneColor } from '@theme/helpers/other'
import { useInstance, useShowModule } from '@theme/helpers/composable'

export default defineComponent({
  components: { Common, NoteAbstract, ModuleTransition },

  setup (_, ctx) {
    const instance = useInstance()

    const AosInit = () => {
      Aos.init({
        // offset: 50,
        easing: 'ease-in-sine',
        duration: 50,
        delay: 0,
        mirror: true,
        disable: 'mobile',
        throttleDelay: 10,
        useClassNames: false, 
        startEvent: 'DOMContentLoaded',
      })
    }

    const posts = computed(() => {
      let posts = instance.$currentCategories.pages
      posts = filterPosts(posts)
      sortPostsByStickyAndDate(posts)
      return posts
    })

    const title = computed(() => {
      return instance.$currentCategories.key
    })

    const getCurrentTag = (tag) => {
      ctx.emit('currentTag', tag)
    }

    const paginationChange = (page) => {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }

    const recoShowModule = useShowModule()

    // add by Rayshine
    const getPic = () => {
      return  instance.$themeConfig.categoryPic !== null ? instance.$themeConfig.categoryPic : instance.coverRandom(true)
    }

    onBeforeMount(() => {
      AosInit()
    })
    return {
      posts,
      title,
      getOneColor,
      recoShowModule,
      getCurrentTag,
      paginationChange,
      getPic
    }
  }
})
</script>
<style>
.cfullPic {
  margin-top: -3.6rem !important;
  width: 100% !important;
  height: 50vh;
  background-position: 50% 50% !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
</style>
<style src="../styles/theme.styl" lang="stylus"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus" scoped>
.categories-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;
  .category-wrapper {
    list-style none
    padding-left 0
    .category-item {
      vertical-align: middle;
      margin: 4px 8px 10px;
      display: inline-block;
      cursor: pointer;
      border-radius: $borderRadius
      font-size: 13px;
      box-shadow var(--box-shadow)
      transition: all .5s
      background-color var(--background-color)
      &:hover, &.active {
        background $accentColor
        a span.category-name {
          color #fff
          .post-num {
            color $accentColor
          }
        }
      }
      a {
        display flex
        box-sizing border-box
        width 100%
        height 100%
        padding: 8px 14px;
        justify-content: space-between
        align-items center
        color: #666
        .post-num {
          margin-left 4px
          width 1.2rem;
          height 1.2rem
          text-align center
          line-height 1.2rem
          border-radius $borderRadius
          font-size .7rem
          color #fff
        }
      }
    }
  }

@media (max-width: $MQMobile)
  .categories-wrapper
    padding: 4.6rem 1rem 0;
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left
</style>
