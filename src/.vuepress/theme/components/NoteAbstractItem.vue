<template>
  <div v-if="!isPC"
    class="abstract-item"
    @click="$router.push(item.path)">
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="title">
      <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
      <router-link :to="item.path">{{item.title}}</router-link>
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
    <PageInfo
      :pageInfo="item"
      :currentTag="currentTag">
    </PageInfo>
  </div>
  <!-- 改版 -->
  <div v-else
    class="abstract-item"
    @click="$router.push(item.path)"
    data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="300" data-aos-delay="0" data-aos-offset="-100"
    >
    <div 
      :style="item.frontmatter.pic?{'background':'url('+ item.frontmatter.pic +') center/cover no-repeat'}:{'background':'url('+ coverRandom(true) +') center/cover no-repeat'}"
      class="cover-wrap" :class="num%2==0?'flyl':'flyr'">
      <!-- 显示时间 add by spf-->
      <reco-icon v-if="item.frontmatter.date"
        icon="reco-date"
        class="tip-date">
        <span>{{ formatDateValue(item.frontmatter.date) }}</span>
      </reco-icon>
    </div>
    <div class="abstract-content-wrap" :class="num%2==0?'flyl':'flyr'" :style="num%2==0?{'margin-left':'5%'}:{'margin-right':'5%'}">
      <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
      <div v-if="item.frontmatter.isAbstract" class="abstract" v-html="item.excerpt"></div>
      <PageInfo
        :pageInfo="item"
        :currentTag="currentTag">
      </PageInfo>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs, reactive, computed, onMounted } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { useInstance } from '@theme/helpers/composable'
import PageInfo from './PageInfo'
// 引入时间格式化js文件
import { formatDate } from '@theme/helpers/utils'

export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ['item', 'num', 'currentPage', 'currentTag'],

  setup (props, ctx) {
    const instance = useInstance()

    const state = reactive({
      isPC: false
    })
    onMounted(() => {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        state.isPC = false
      } else {
        state.isPC = true
      }
    })

     const formatDateValue = (value) => {
      return new Intl.DateTimeFormat(instance.$lang).format(new Date(value))
    }

    return { formatDateValue, ...toRefs(state)}
  }
})
</script>
<style lang="stylus" scoped>
.cover-wrap{
    width: 40%;
    flex: 1;
    transition: 1s ease-out;
    border-radius: .5rem;
    overflow: hidden;
    height: 12.5rem;
    position: relative;
    text-align:center;

}
.abstract-content-wrap{
  width: 55%;
  height: 12rem;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    display: flex;
    transition: all .3s;
}
.cover{
    width: 100%;
    height: 100%;
    transition: transform .5s;
    transform: scale(1.1);
}
.flyl{
  float: left;
}
.flyr{
  float: right;
}

.tip-date {
	position: absolute;
	z-index: 1;
	top: 5px;
	right: 5px;
	background: $accentColor;
	height: 20px;
	line-height: 20px;
	padding: 0 8px;
	color: #fff;
	font-size: 12px;
	transition: transform 0.35s, -webkit-transform 0.35s;
	border-radius: 10px;
  &:hover {
    box-shadow: var(--box-shadow-hover)
  }
    
  &:hover .tip-date {
    transition: transform 0.35s, -webkit-transform 0.35s;
	  border-radius: 10px;
	  visibility visible
	  -webkit-transform: translate(-35px,0);
	  transform: translate(-35px,0);
  }  
}
</style>
<style lang="stylus" scoped>
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  .tip-date
    visibility: hidden;
    position: absolute;
    z-index: 1;
    top: 5px;
    right: -30px;
    background: $accentColor;
    height: 20px;
    line-height: 20px;
    padding: 0 8px;
    color: #fff;
    font-size: 12px;
  &:hover
    box-shadow: var(--box-shadow-hover)
  &:hover .tip-date 
	  transition: transform 0.35s, -webkit-transform 0.35s;
	  border-radius: 10px;
	  visibility visible
	  -webkit-transform: translate(-35px,0);
	  transform: translate(-35px,0);
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.2rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor

@media (max-width: $MQNarrow)
  .abstract-item
    .cover-wrap
      width 0 !important
    
    .abstract-content-wrap
      width 100% !important
      margin 0 !important

    .flyr
      float left !important



@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
