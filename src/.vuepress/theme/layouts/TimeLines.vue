<template>
  <Common class="timeline-wrapper" :sidebar="false" :style="$themeConfig.fullscreen? {
        'max-width': '2080px',
        'margin': '0 auto',
        'padding': '0'
      } : {}">
    <div v-if="$themeConfig.fullscreen"
      :class="$themeConfig.fullscreen?'sjfullPic hclass':'hclass'"
      :style="$themeConfig.fullscreen? {
        'background': 'url(' + getPic() + ')'
      } : {}" >
      <h1 style="font-family: Regular,cursive;color: #fff;letter-spacing: 1rem">流时的间</h1>
      </div>
       <div :style="$themeConfig.fullscreen? {
        'max-width': '960px',
        'margin': '0 auto',
        'padding': '4.6rem 2.5rem 0'
      } : {}">
      <ul class="timeline-content">
        <ModuleTransition >
          <li v-show="recoShowModule" class="desc">{{$recoLocales.timeLineMsg}}</li>
        </ModuleTransition>
        <ModuleTransition
          :delay="String(0.08 * (index + 1))"
          v-for="(item, index) in $recoPostsForTimeline"
          :key="index">
          <li v-show="recoShowModule">
            <h3 class="year" 
            data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-delay="0" data-aos-offset="-50"
            >{{item.year}}</h3>
            <ul class="year-wrapper">
              <li v-for="(subItem, subIndex) in item.data" :key="subIndex" 
              data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-delay="0" data-aos-offset="-50">
                <span class="date">{{dateFormat(subItem.frontmatter.date)}}</span>
                <span class="title" @click="go(subItem.path)">{{subItem.title}}</span>
              </li>
            </ul>
          </li>
        </ModuleTransition>
      </ul>
    </div>
  </Common>
</template>

<script>
import { defineComponent } from 'vue'
import Common from '@theme/components/Common'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import { useInstance, useShowModule } from '@theme/helpers/composable'

export default defineComponent({
  name: 'TimeLine',
  components: { Common, ModuleTransition },
  setup (props, ctx) {
    const instance = useInstance()

    const go = (url) => {
      instance.$router.push({ path: url })
    }

    const dateFormat = (date, type) => {
      function renderTime (date) {
        const dateee = new Date(date).toJSON()
        return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/-/g, '/')
      }
      date = renderTime(date)
      const dateObj = new Date(date)
      const mon = dateObj.getMonth() + 1
      const day = dateObj.getDate()
      return `${mon}-${day}`
    }

    const recoShowModule = useShowModule()

    // add by Rayshine
    const getPic = () => {
      return instance.$themeConfig.timePic ? instance.$themeConfig.timePic : instance.coverRandom(false,instance.$themeConfig.back.homeImage)
    }

    return { recoShowModule, go, dateFormat, getPic }
  }
})
</script>
<style>
.sjfullPic {
  margin-top: -3.6rem !important;
  width: 100% !important;
  height: 50vh;
  background-position: 50% 50% !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.hclass{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl'

.timeline-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;
  .timeline-content
    box-sizing border-box
    position relative
    list-style none
    &::after {
      content: " ";
      position: absolute;
      top: 14px;
      left: 0;
      z-index: -1;
      margin-left: -2px;
      width: 4px;
      height: 100%;
      background: var(--border-color);
    }
    .desc, .year {
      position: relative;
      color var(--text-color);
      font-size 16px
      &:before {
        content: " ";
        position: absolute;
        z-index 2;
        left: -20px;
        top: 50%;
        margin-left: -4px;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        background: var(--background-color);
        border: 1px solid var(--border-color);
        border-radius: 50%;
      }
    }
    .year {
      margin: 80px 0 0px;
      color var(--text-color);
      font-weight: 700;
      font-size 26px
    }
    .year-wrapper {
      padding-left 0!important
      li {
        display flex
        padding 30px 0 10px
        list-style none
        border-bottom: 1px dashed var(--border-color);
        position relative
        &:hover {
          .date {
            color $accentColor
            &::before {
              background $accentColor
            }
          }
          .title {
            color $accentColor
          }
        }
        .date {
          width 40px
          line-height 30px
          color var(--text-color-sub)
          font-size 12px
          &::before {
            content: " ";
            position: absolute;
            left: -18px;
            top: 41px;
            width: 6px;
            height: 6px;
            margin-left: -4px;
            background: var(--background-color);
            border-radius: 50%;
            border: 1px solid var(--border-color);
            z-index 2
          }
        }
        .title {
          line-height 30px
          color var(--text-color-sub)
          font-size 16px
          cursor pointer
        }
      }
    }
@media (max-width: $MQMobile)
  .timeline-wrapper
    margin: 0 1.2rem;
</style>
