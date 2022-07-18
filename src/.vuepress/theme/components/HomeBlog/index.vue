<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...bgImageStyle }" :class="$themeConfig.fullscreen ? 'fullscreen':''">
      <div style="position: absolute;transform: translate(-50%, -50%);top: 50%;left: 50%;width: 100%;">
        <ModuleTransition>
          <img
            class="hero-img"
            v-if="recoShowModule && $frontmatter.heroImage"
            :style="heroImageStyle || {}"
            :src="$withBase($frontmatter.heroImage)"
            alt="hero"
          />
        </ModuleTransition>

        <ModuleTransition delay="0.04">
          <h1 v-if="recoShowModule && $frontmatter.heroText !== null" style="color: #fff;font-family: Regular,cursive;">
            {{ $frontmatter.heroText || motto.zh || $title || 'RayShine Blogs' }}
          </h1>
        </ModuleTransition>

        <ModuleTransition delay="0.08">
          <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description" style="color: #fff;font-family: Regular,cursive;">
            <!-- {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }} -->
            <AutoInput iid="description" :des= "$frontmatter.tagline || motto.en || $themeConfig.indexDes || $description || 'Welcome to RayShine Blogs site'"/>
          </p>
        </ModuleTransition>
      </div>
      <FloatingArrow @onClick ="onClick" />
      <component v-if="bubbles" :is="bubbles" />
    </div>

    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper" style="margin: 3rem auto 0">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract :data="$recoPostsIndex" @paginationChange="paginationChange" />
        </div>
        <div class="info-wrapper" data-aos="fade-left" data-aos-duration="300" data-aos-delay="50" data-aos-mirror="false">
          <PersonalInfo/>
          <div class="flex between" style="margin-bottom: -0.9rem;">
            <h4>
              <reco-icon icon="reco-category" />
              {{$recoLocales.category}}
            </h4>
            <h5 style="margin-right: 0.7rem;">
              {{$recoPosts.length}} 篇
            </h5>
          </div>
          <ul class="category-wrapper">
            <li class="category-item" v-for="(item, index) in this.$categories.list" :key="index" 
            data-aos="fade-left" data-aos-duration="300" data-aos-delay="50" data-aos-mirror="false">
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span class="post-num" :style="{ 'backgroundColor': getOneColor() }">{{ item.pages.length }}</span>
              </router-link>
            </li>
          </ul>
          <hr>
          <div v-if="$tags.list.length !== 0" class="flex between" style="margin-bottom: -0.9rem;">
            <h4 v-if="$tags.list.length !== 0">
              <reco-icon icon="reco-tag" />
              {{$recoLocales.tag}}
            </h4>
            <h5 style="margin-right: 0.7rem;">
              {{$tags.list.length}} 个
            </h5>
          </div>
          <TagList @getCurrentTag="getPagesByTags" />
          <h4 v-if="$themeConfig.friendLink && $themeConfig.friendLink.length !== 0"><reco-icon icon="reco-friend" /> {{$recoLocales.friendLink}}</h4>
          <FriendLink />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import { defineComponent, toRefs, reactive, computed, onMounted } from 'vue'
import TagList from '@theme/components/TagList'
import FriendLink from '@theme/components/FriendLink'
import NoteAbstract from '@theme/components/NoteAbstract'
import { ModuleTransition, RecoIcon } from '@vuepress-reco/core/lib/components'
import PersonalInfo from '@theme/components/PersonalInfo'
import { getOneColor } from '@theme/helpers/other'
import { useInstance, useShowModule } from '@theme/helpers/composable'

export default defineComponent({
  components: { NoteAbstract, TagList, FriendLink, ModuleTransition, PersonalInfo, RecoIcon },
  setup (props, ctx) {
    const instance = useInstance()

    const state = reactive({
      recoShow: false,
      heroHeight: 0,
      bubbles: null
    })

    const recoShowModule = useShowModule()

    const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {})

    // 获取首页格言
   const motto = computed(() => {
      //获取当天格言
      const itoday= new Date();
      const week = itoday.getDay();
      return instance.$themeConfig.mottos[week]
    })

    const bgImageStyle = computed(() => {
      // modify by Ray Shine
      const bgUrl = instance.coverRandom(false, instance.$themeConfig.back.homeImage)
      const url = bgUrl
        ? instance.$withBase(bgUrl)
        : require('../../images/bg.svg')

      const initBgImageStyle = {
        textAlign: 'center',
        overflow: 'hidden',
        background: `url(${url}) center/cover no-repeat`
      }

      const { bgImageStyle } = instance.$frontmatter

      return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
    })

    onMounted(() => {
      import('vue-canvas-effect/src/components/bubbles').then(module => { 
        state.bubbles = module.default
      })
      state.heroHeight = document.querySelector('.hero').clientHeight
      state.recoShow = true
    })

    return { recoShowModule, heroImageStyle, bgImageStyle, ...toRefs(state), getOneColor, motto }
  },
  methods: {
    onClick(){
     const height = document.documentElement.clientHeight;
     window.scrollTo(0,height);
    },
    paginationChange (page) {
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight)
      }, 100)
    },
    getPagesByTags (tagInfo) {
      this.$router.push({ path: tagInfo.path })
    }
  }
})
</script>

<style lang="stylus">
.fullscreen {
  margin: -3.6rem auto 0 !important;
}
.home-blog {
  padding: 0;
  margin: 0px auto;
  .hero {
    margin $navbarHeight auto 0
    position relative
    box-sizing border-box
    padding 0 20px
    height 100vh
    display flex
    align-items center
    justify-content center
    .hero-img {
      max-width: 300px;
      margin: 0 auto 1.5rem
    }

    h1 {
      display: block;
      margin:0 auto 1.8rem;
      font-size: 2.5rem;
    }

    .description {
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }
  .home-blog-wrapper {
    display flex
    align-items: flex-start;
    margin 20px auto 0
    padding 0 20px
    max-width $homePageWidth
    .blog-list {
      flex auto
      width 0
      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0px;
        }
      }
    }
    .info-wrapper {
      position -webkit-sticky;
      position sticky;
      top 70px
      overflow hidden
      transition all .3s
      margin-left 15px
      flex 0 0 300px
      height auto
      box-shadow var(--box-shadow)
      border-radius $borderRadius
      box-sizing border-box
      padding 0 15px
      background var(--background-color)
      &:hover {
        box-shadow var(--box-shadow-hover)
      }
      h4 {
        color var(--text-color)
      }
      .flex {
        display flex
      }
      .between {
        justify-content space-between
      }
      .category-wrapper {
        list-style none
        padding-left 0
        .category-item {
          margin-bottom .4rem
          padding: .4rem .8rem;
          transition: all .5s
          border-radius $borderRadius
          box-shadow var(--box-shadow)
          background-color var(--background-color)
          &:hover {
            transform scale(1.04)
            a {
              color $accentColor
            }
          }
          a {
            display flex
            justify-content: space-between
            align-items: center
            color var(--text-color)
            .post-num {
              width 1.6rem;
              height 1.6rem
              text-align center
              line-height 1.6rem
              border-radius $borderRadius
              background #eee
              font-size 13px
              color #fff
            }
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    .hero {
      height 450px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    .hero {
      height 450px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}
</style>
