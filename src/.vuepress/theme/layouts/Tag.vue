<template>
  <!-- 公共布局 -->
  <Common class="tag-wrapper" :sidebar="false" :style="$themeConfig.fullscreen ? {
    'max-width': '2080px',
    'margin': '0 auto',
    'padding': '0'
  } : {}">
    <div v-if='$themeConfig.fullscreen' 
    :class="$themeConfig.fullscreen ? 'tsfullPic' : ''"
    :style="$themeConfig.fullscreen ? {
      'background': 'url(' + getPic() + ')'
    } : {}">
    </div>
    <div :style="$themeConfig.fullscreen ? {
      'max-width': '860px',
      'margin': '0 auto',
      'padding': '4.6rem 2.5rem 0'
    } : {}">
      <!-- 标签集合 -->
      <TagList
        class="tags"
        :currentTag="$currentTags.key"
        @getCurrentTag="tagClick"></TagList>

      <!-- 博客列表 -->
      <note-abstract
        class="list"
        :data="posts"
        :currentTag="$currentTags.key"
        @paginationChange="paginationChange"></note-abstract>
    </div>
  </Common>
</template>

<script>
import { defineComponent, computed } from 'vue'
import Common from '@theme/components/Common'
import NoteAbstract from '@theme/components/NoteAbstract'
import TagList from '@theme/components/TagList'
import { sortPostsByStickyAndDate, filterPosts } from '@theme/helpers/postData'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  components: { Common, NoteAbstract, TagList },

  setup (props, ctx) {
    const instance = useInstance()

    // 时间降序后的博客列表
    const posts = computed(() => {
      let posts = instance.$currentTags.pages
      posts = filterPosts(posts)
      sortPostsByStickyAndDate(posts)
      return posts
    })

    const getCurrentTag = (tag) => {
      ctx.emit('currentTag', tag)
    }

    const tagClick = (tagInfo) => {
      if (instance.$route.path !== tagInfo.path) {
        instance.$router.push({ path: tagInfo.path })
      }
    }

    const paginationChange = (page) => {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }

    // add by Rayshine
    const getPic = () => {
      return  instance.$themeConfig.categoryPic !== null ? instance.$themeConfig.categoryPic : instance.coverRandom(true)
    }
    return { posts, getCurrentTag, tagClick, paginationChange, getPic }
  }
})
</script>
<style>
.tsfullPic {
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

.tag-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tag-wrapper
    padding: 4.6rem 1rem 0;
</style>
