<template>
  <main class="page" :style="pageStyle" :class="{ noright: isFull }">
    <ModuleTransition>
      <section v-show="recoShowModule" class="article">
        <div class="page-title"  :class="{ fullPic: isFull }" :style="
          (!$themeConfig.fullscreen
            ? { 'margin-top': '2.2rem !important' }
            : {},
            isFull ? { background: 'url(' + getPic() + ')' } : {})
        ">
          <h1 v-if="isFull" class="title"><center>{{$page.title}}</center></h1>
          <h1 v-else class="title">{{$page.title}}</h1>
          <PageInfo :pageInfo="$page" :showAccessNumber="showAccessNumber" :isFull="isFull" :showCopyright="true"></PageInfo>
        </div>
        <!-- 这里使用 v-show，否则影响 SSR -->
        <Content class="theme-reco-content" :style="isFull ? { 'padding-top': '4rem !important' } : {}"/>
      </section>
    </ModuleTransition>
    <ModuleTransition delay="0.16">
      <footer v-if="recoShowModule" class="page-edit">
        <div class="edit-link" v-if="editLink">
          <a
            :href="editLink"
            target="_blank"
            rel="noopener noreferrer"
          >{{ editLinkText }}</a>
          <OutboundLink/>
        </div>

        <div
          class="last-updated"
          v-if="lastUpdated"
        >
          <span class="prefix">{{ lastUpdatedText }}: </span>
          <span class="time">{{ lastUpdated }}</span>
        </div>
      </footer>
    </ModuleTransition>
    <ModuleTransition delay="0.24">
      <div class="page-nav" v-if="recoShowModule && (prev || next)">
        <p class="inner">
          <span v-if="prev" class="prev">
            <router-link v-if="prev" class="prev" :to="prev.path">
              ← {{ prev.title || prev.path }}
            </router-link>
          </span>
          <span v-if="next" class="next">
            <router-link v-if="next" :to="next.path">
              {{ next.title || next.path }} →
            </router-link>
          </span>
        </p>
      </div>
    </ModuleTransition>
    <ModuleTransition delay="0.32">
      <Comments v-if="recoShowModule" :isShowComments="shouldShowComments"/>
    </ModuleTransition>
    
    <ModuleTransition delay="0.24">
      <SubSidebarTip v-if="recoShowModule" :style="isFull  ? { display: 'none' } : {}" />
    </ModuleTransition>
    
    <ModuleTransition delay="0.24">
      <SubSidebar v-if="recoShowModule" :style="isFull ? { display: 'none' } : {}"/>
    </ModuleTransition>
  </main>
</template>

<script>
import { defineComponent, computed, toRefs } from 'vue'
import PageInfo from '@theme/components/PageInfo'
import { resolvePage, outboundRE, endingSlashRE } from '@theme/helpers/utils'
import SubSidebar from '@theme/components/SubSidebar'
import SubSidebarTip from '@theme/components/SubSidebarTip'
import { useInstance, useShowModule } from '@theme/helpers/composable'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'

export default defineComponent({
  components: { PageInfo, SubSidebar, ModuleTransition, SubSidebarTip },

  props: ['sidebarItems'],

  setup (props, ctx) {

    const instance = useInstance()

    const { sidebarItems } = toRefs(props)

    const isFull = computed(() => {
      return instance.$frontmatter.isFull || false
    })

    const recoShowModule = useShowModule()

    // 是否显示评论
    const shouldShowComments = computed(() => {
      const { isShowComments } = instance.$frontmatter
      const { showComment } = instance.$themeConfig.valineConfig || { showComment: true }
      return (showComment !== false && isShowComments !== false) || (showComment === false && isShowComments === true)
    })

    const showAccessNumber = computed(() => {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = instance || {}

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor != false
    })

    const lastUpdated = computed(() => {
      if (instance.$themeConfig.lastUpdated === false) return false
      return instance.$page.lastUpdated
    })

    const lastUpdatedText = computed(() => {
      if (typeof instance.$themeLocaleConfig.lastUpdated === 'string') {
        return instance.$themeLocaleConfig.lastUpdated
      }
      if (typeof instance.$themeConfig.lastUpdated === 'string') {
        return instance.$themeConfig.lastUpdated
      }
      return 'Last Updated'
    })

    const prev = computed(() => {
      const frontmatterPrev = instance.$frontmatter.prev
      if (frontmatterPrev === false) {
        return
      } else if (frontmatterPrev) {
        return resolvePage(instance.$site.pages, frontmatterPrev, instance.$route.path)
      } else {
        return resolvePrev(instance.$page, sidebarItems.value)
      }
    })

    const next = computed(() => {
      const frontmatterNext = instance.$frontmatter.next
      if (next === false) {
        return
      } else if (frontmatterNext) {
        return resolvePage(instance.$site.pages, frontmatterNext, instance.$route.path)
      } else {
        return resolveNext(instance.$page, sidebarItems.value)
      }
    })

    const editLink = computed(() => {
      if (instance.$frontmatter.editLink === false) {
        return false
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = instance.$themeConfig

      if (docsRepo && editLinks && instance.$page.relativePath) {
        return createEditLink(repo, docsRepo, docsDir, docsBranch, instance.$page.relativePath)
      }
      return ''
    })

    const editLinkText = computed(() => {
      return (
        instance.$themeLocaleConfig.editLinkText || instance.$themeConfig.editLinkText || `Edit this page`
      )
    })

    const pageStyle = computed(() => {
      return instance.$showSubSideBar ? {} : { paddingRight: '0' }
    })

    // add by Rayshine
    const getPic = () => {
      return instance.coverRandom(true)
    }

    return {
      isFull,
      recoShowModule,
      shouldShowComments,
      showAccessNumber,
      lastUpdated,
      lastUpdatedText,
      prev,
      next,
      editLink,
      editLinkText,
      pageStyle,
      getPic
    }
  }
})

function createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
  const bitbucket = /bitbucket.org/
  if (bitbucket.test(repo)) {
    const base = outboundRE.test(docsRepo)
      ? docsRepo
      : repo
    return (
      base.replace(endingSlashRE, '') +
        `/src` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
        path +
        `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
    )
  }

  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`

  return (
    base.replace(endingSlashRE, '') +
    `/edit` +
    `/${docsBranch}/` +
    (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
    path
  )
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.noright 
  padding-right 0 !important
  margin-top -3.6rem

.fullPic 
  margin-top -5rem !important
  max-width 2080px !important
  width 100% !important
  height 50vh
  background-position 50% 50% !important
  background-size cover !important
  background-repeat no-repeat !important
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding-left 0 !important
  flex-direction column

.page
  position relative
  padding-top 3rem
  padding-bottom 2rem
  padding-right 14rem
  .side-bar
    position fixed
    top 10rem
    bottom 10rem
    right 2rem
    overflow-y scroll
    &::-webkit-scrollbar
      width: 0
      height: 0
  .page-title
    max-width: $contentWidth;
    margin: 0 auto;
    padding: 1rem 2.5rem;
    color var(--text-color)
  .theme-reco-content h2
    position relative
    padding-left 0.8rem
    &::before
      position absolute
      left 0
      top 3.5rem
      display block
      height 1.8rem
      content ''
      border-left 5px solid $accentColor
  .page-edit
    @extend $wrapper
    padding-top 1rem
    padding-bottom 1rem
    overflow auto
    .edit-link
      display inline-block
      a
        color $accentColor
        margin-right 0.25rem
    .last-updated
      float right
      font-size 0.9em
      .prefix
        font-weight 500
        color $accentColor
      .time
        font-weight 400
        color #aaa
  .comments-wrapper
    @extend $wrapper

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid var(--border-color)
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

@media (max-width: $MQMobile)
  .page
    padding-right 0
    .side-bar
      display none
    .sub-sidebar-tip
      display none
    .sub-sidebar-wrapper
      display none
    .page-title
      padding: 0 1rem;
    .page-edit
      .edit-link
        margin-bottom .5rem
      .last-updated
        font-size .8em
        float none
        text-align left

</style>
