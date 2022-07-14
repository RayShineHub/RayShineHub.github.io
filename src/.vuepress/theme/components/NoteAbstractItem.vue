<template>
  
  <div v-if="!isPC"
    class="abstract-item"
    @click="$router.push(item.path)">
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
    <div class="title">
      <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
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
    <i v-if="item.frontmatter.date"
      class="tip-date iconfont reco-date">
      <span>{{ item.frontmatter.date | formatDateValue }}</span>
    </i>
	</div>
    <div class="abstract-content-wrap" :class="num%2==0?'flyl':'flyr'" :style="num%2==0?{'margin-left':'5%'}:{'margin-right':'5%'}">
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
    <div class="title">
      <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
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
import PageInfo from './PageInfo'
// 引入时间格式化js文件
import { formatDate } from '@theme/helpers/utils'
export default {
  components: { PageInfo },
  props: ['item', 'num', 'currentPage', 'currentTag'],
  data () {
    return {
      isPC: true
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
  mounted () {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isPC = false
    } else {
      this.isPC = true
    }
  }
}
</script>

<style>
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
}
</style>
<style lang="stylus" scoped>
@require '../styles/mode.styl'
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
	// &:hover a
	// 	visibility visible
	// 	-webkit-transform: scaleX(1);
	// 	transform: scaleX(1);
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
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
