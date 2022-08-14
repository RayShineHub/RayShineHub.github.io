<template>
  <Common class="tags-wrapper" :sidebar="false" :style="$themeConfig.fullscreen ? {
    'max-width': '2080px',
    'margin': '0 auto',
    'padding': '0'
  } : {}">
    <div v-if="$themeConfig.fullscreen"
    :class="$themeConfig.fullscreen ? 'tsfullPic' : ''"
    :style="$themeConfig.fullscreen ? {
      'background': 'url(' + getPic() + ')'
    } : {}">
    </div>
    <div :style="$themeConfig.fullscreen ? {
      'max-width': '960px',
      'margin': '0 auto',
      'padding': '4.6rem 2.5rem 0'
    } : {}">
      <!-- 标签集合 -->
      <TagList
        :currentTag="$recoLocales.all"
        @getCurrentTag="tagClick"></TagList>

      <!-- 博客列表 -->
      <note-abstract
        class="list"
        :data="$recoPosts"
        @paginationChange="paginationChange"
      ></note-abstract>
    </div>
  </Common>
</template>

<script>
import { defineComponent } from 'vue'
import Common from '@theme/components/Common'
import TagList from '@theme/components/TagList'
import NoteAbstract from '@theme/components/NoteAbstract'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  components: { Common, NoteAbstract, TagList },

  setup (props, ctx) {
    const instance = useInstance()

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
      return  instance.$themeConfig.tagPic !== null ? instance.$themeConfig.tagPic : instance.coverRandom(true)
    }
    
    return { tagClick, paginationChange, getPic }
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
.tags-wrapper
  max-width: $contentWidth
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tags-wrapper
    padding: 5rem 0.6rem 0;
</style>
