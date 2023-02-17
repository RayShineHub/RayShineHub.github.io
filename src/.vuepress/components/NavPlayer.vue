<!--
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-17 15:24:10
 * @LastEditors: Ray Shine spf1773@gmail.com
 * @LastEditTime: 2023-02-17 18:22:51
 * @FilePath: \RayShineHub\src\.vuepress\components\NavPlayer.vue
 * @Description: Create by RayShine 自己实现的音频播放器
 * 代办：歌词、循环随机播放
 * Copyright (c) 2022 by pengfei.shao 570165036@qq.com, All Rights Reserved. 
-->

<template>
  <div class="nav-music" v-if="isPC && linksWrapOffsetWidth != null"
    :class="{
      pagefull:($frontmatter.layout || ($themeConfig.fullscreen && $frontmatter.isFull) || $frontmatter.home ) && !isFixed,
      fixed: isFixed,
      visible: isVisible
    }"
    :style="linksWrapOffsetWidth ? {'right': linksWrapOffsetWidth + 'px'} : {}">

    <div class="dropdown-wrapper">
      <a class="img-box">
        <img class="avatar" :class="{playing: isPlaying}"
        :src="currentMusic? currentMusic.cover : ''"
        />
      </a>
      <DropdownTransition>
        <ul class="music-dropdown" style="margin-top:-.3rem">
          <li class="music-dropdown-item" :key="item.link || index" v-for="(item, index) in musicList">
            <div class="music-info" @click="getCurrentMusic('change', item)">
              <!-- 头像 -->
              <img class="avatar" :src="item? item.cover : ''"/>
              <div class="detail">
                <!-- 名称 -->
                <div class="title-name">
                  <span>
                    {{  item.name || ''}}  
                  </span>
                </div>
                <!-- 歌手 -->
                <div class="title-name-sub">
                  <span>
                    {{item.artist || ''}}
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </DropdownTransition>
    </div>
    <div class="actions">
      <div class="title">
        <div class="time" v-if="currentMusic.currentTime != 0 && !loading">
          <span style="margin-right: 0.1rem">
            {{currentMusic.currentTime == 0 ? '' : currentMusic.currentTime}}
          </span>
        </div>
        <div class="loading" v-if="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="title-name">
          <span>
            {{isPlaying ? currentMusic.lrc : (currentMusic.artist || '') + (currentMusic.name ? ' - ':'') + (currentMusic.name || '')}}  
          </span>
        </div>
      </div>
      <div class="action-bar">
        <!-- <i class="iconfont rays-switch" @click="next"></i> -->
        <i class="iconfont rays-prev-face" @click="prev"></i>
        <i v-if="!isPlaying" class="iconfont rays-play" @click="onPlay"></i>
        <i v-if="isPlaying" class="iconfont rays-pause" @click="onPlay"></i>
        <i class="iconfont rays-next-face" @click="next"></i>
        <i v-if="currentMusic.volume <= 0" class="iconfont rays-mute" style="margin-left: 1rem"></i>
        <i v-if="currentMusic.volume > 0" class="iconfont rays-volume-reduce" style="margin-left: 1rem" @click="onVolume('jian')"></i>
        <span class="volume">{{parseInt(currentMusic.volume * 10)}}</span>
        <i class="iconfont rays-volume-add" @click="onVolume('jia')"></i>
      </div>
    </div>

    <audio ref="audio" 
    :autoplay="false" 
    :src="currentMusic.url"
    :volume="0.3"
    @play="play" 
    @pause="pause"
    @loadedmetadata="onLoadedmetadata"
    @timeupdate="onTimeupdate"
    @ended="onEnded"
    ></audio>
  </div> 
</template>

<script>
import axios from 'axios'
import DropdownTransition from '@theme/components/DropdownTransition'
const throttle = function (func, delay = 200) {
  let timer = null
  let startTime = Date.now()
 
  return function () {
    const curTime = Date.now()
    const remaining = delay - (curTime - startTime)
    const args = arguments
    const context = this
    clearTimeout(timer)
    if (remaining <= 0) {
      func.apply(context, args)
      startTime = Date.now()
    } 
    // else {
    //   timer = setTimeout(func, remaining)
    // }
  }
}
export default {
  components: { DropdownTransition },
  data () {
    let that = this
    return {
      time: 0,
      loading: true,
      isPC: true,
      playHistory: true,
      isPlaying: false,
      musicList: [],
      currentMusic: {
        musicId: '',
        currentTime: 0,
        maxTime: 0,
        duration: 0,
        volume: 0.3,
        name: '',
        artist: '',
        url: '',
        cover: 'https://p2.music.126.net/3MaeDnsU61e96WlH5-hoaQ==/109951163195183343.jpg', // prettier-ignore
        lrc: '',
        lrcList:[],
        sort: 0,
        brList: []
      },
      linksWrapOffsetWidth: null,
      linksWrapMaxWidth: null,
      fixedHeight: 0,
      pageYOffset: 44,
      isFixed: false,
      isVisible: false
    }
  },
  computed: {
    playlistId () {
      return this.$themeConfig.NavPlayer.playlistId || ''
    },
    autoPlay () {
      return this.$themeConfig.NavPlayer.autoPlay || false
    },
    volumeStep () {
      return this.$themeConfig.NavPlayer.volumeStep || 0.1
    },
    defaultVolume () {
      return this.$themeConfig.NavPlayer.defaultVolume || 0.3
    },
    playType () {
      // singleLoop单曲循环, listLoop列表循环, listNext列表顺序, random随机
      return this.$themeConfig.NavPlayer.playType || 'listLoop'
    }
  },
  watch: {},
  mounted () {
    
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isPC = false
    } else {
      this.isPC = true
      this.getMusicList(this.playlistId)
    }
    this.handleLinksWrapWidth()
    window.addEventListener('resize', this.handleLinksWrapWidth, false)
    window.addEventListener('scroll', this.throttle(this.handleScroll, 500))
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, 1000))
  },
  methods:  {
    handleLinksWrapWidth() {
      const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
      let that = this
      let navSubOffsetWidth = (document.querySelector('.nav-sub') && document.querySelector('.nav-sub').offsetWidth) || 1872
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        that.linksWrapMaxWidth = null
      } else {
        that.linksWrapOffsetWidth = (document.querySelector('.links') && document.querySelector('.links').offsetWidth) || 726
      }
      if (that.linksWrapOffsetWidth == null || that.linksWrapOffsetWidth > navSubOffsetWidth) setTimeout(() => { this.handleLinksWrapWidth() }, 5000)
    },
    handleScroll () {
      this.isFixed = window.pageYOffset > this.fixedHeight
      this.throttle(this.handleVisible(), 1000)
    },
    handleVisible () {
      this.isVisible = window.pageYOffset < this.pageYOffset && window.pageYOffset > 0
      this.pageYOffset = window.pageYOffset
    },
    /**
     * @description: Add by RayShine 节流
     * @param {Fn} func
     * @param {int} delay
     * @return {*}
     */    
    throttle (func, delay = 200) {
      let timer = null
      let startTime = Date.now()
      
      return function () {
        const curTime = Date.now()
        const remaining = delay - (curTime - startTime)
        const args = arguments
        const context = this
        
        clearTimeout(timer)
        if (remaining <= 0) {
          func.apply(context, args)
          startTime = Date.now()
        } else {
          timer = setTimeout(func, remaining)
        }
      }
    },
    /**
     * @description: Add by RayShine 获取歌单列表
     * @param {*} playlistId
     * @return {*}
     */    
    getMusicList(playlistId = '144719593'){
      let that = this
      let sort = 0
      // 获取音乐文件   https://autumnfish.cn
      axios({
        baseURL: that.$themeConfig.back.musicUrl,
        url: "/playlist/detail?id=" + playlistId,
        withCredentials: true
        // timeout: 2000
      }).then(function(response) {
        if (response.status === 200 && response.data.code === 200) {
          // console.log(response)
          let ids = response.data.playlist.trackIds.filter((trackId) => {
            return trackId.id
          }).map((track) => {
            return track.id
          }).join(',')
          // console.log(ids)

          // 获取音乐详情   
          // 记录一下获取歌词/lyric?id=  
          axios({
            baseURL: that.$themeConfig.back.musicUrl,
            url: "/song/detail?ids=" + ids,
            withCredentials: true
          }).then(function(response) {
            if (response.status === 200 && response.data.code === 200) {
              that.musicList = response.data.songs.map((song) => {
                let brList = response.data.privileges.filter((privilege) => {
                  return privilege.id == song.id
                }).map((br) => {
                  return br.chargeInfoList.map((chargeInfo) => {
                    return chargeInfo.rate
                  })
                })[0]
                return {
                  musicId: song.id,
                  name: song.name || '',
                  artist: song.ar[0].name || '',
                  cover: song.al.picUrl || '',   // prettier-ignore
                  brList,
                  sort: sort++
                }
              })
              // 设置默认音量
              that.$refs.audio.volume = that.defaultVolume
              // 显示默认音量
              that.currentMusic.volume = that.$refs.audio.volume
              // 加载一首歌
              that.getCurrentMusic('first')
              // console.log('musicList ->', that.musicList)
              // console.log('currentMusic ->', that.currentMusic)
            }
            
          }, function(err) {
            that.loading = false
            that.currentMusic.artist = err.response.data.message
            that.currentMusic.currentTime = 0
            console.log(err);
          });
        }
      }, function(err) {
        that.loading = false
        that.currentMusic.artist = '歌单获取失败'
        that.currentMusic.currentTime = 0
        console.log(err);
      });
    },
    /**
     * @description: Add by RayShine 从歌单中选一首歌
     * @return {*}
     */    
    getCurrentMusic(type = 'first', music = {}) {
      // 清除歌词
      this.currentMusic.lrc = ""
      // 随机取，但是不能和当前歌曲相同
      if(this.playType == 'random' && type !== 'change'){
        // 排除相同的歌曲
        let musicList = this.musicList.filter((music) => {
          return music.musicId != this.currentMusic.musicId
        })
        this.currentMusic = Object.assign({},this.currentMusic, musicList[Math.floor(Math.random() * musicList.length)])
      // 单曲循环或者列表循环，取下一首歌曲
      }else{
        if (type === 'first') {
          this.currentMusic = Object.assign({},this.currentMusic, this.musicList[0])
        } else if (type === 'change'){
          this.currentMusic = Object.assign({},this.currentMusic, music)
        } else {
          let nextSort = type == 'prev' ? this.currentMusic.sort-- : this.currentMusic.sort++
          if (type === 'next' && nextSort > this.musicList.length - 1) {
            nextSort = 0
          } else if (type === 'prev' && nextSort < 0) {
            nextSort = this.musicList.length - 1
          }
          this.currentMusic = Object.assign({},this.currentMusic, this.musicList[nextSort])
        }
        
      }
      // 加载歌曲 获取最高音质
      this.getMusic(this.currentMusic.musicId, this.currentMusic.brList[this.currentMusic.brList.length - 1], type)
    },
    /**
     * @description: Add by RayShine 获取当前歌曲，支持自动播放
     * @param {*} musicId
     * @return {*}
     */    
    getMusic(musicId = '1868943615', br = 128000, type) {
      let that = this
      if (musicId === '') return
      that.loading = true
      // 检查音乐是否可用
      axios({
        baseURL: that.$themeConfig.back.musicUrl,
        url:"/check/music?id=" + musicId + '&br=' + br,
        withCredentials: true
      }).then(function(response) {
        // 返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
        if (response.status === 200 && response.data.success) {
          // 获取音乐文件
          axios({
            baseURL: that.$themeConfig.back.musicUrl,
            url:"/song/url?id=" + musicId + '&br=' + br,
            withCredentials: true
          }).then(function(response) {
            if (response.status === 200) {
              that.loading = false
              that.pause();
              // 替换 http 为 https
              that.currentMusic.url = response.data.data[0].url.match('^http://') ?  response.data.data[0].url.replace("http://","https://") : response.data.data[0].url;
              // 首次加载歌单，是否自动播放取决于用户设置
              if ((type != 'first' || (type == 'first' && that.autoPlay)) && that.playHistory) setTimeout(() => { that.$refs.audio.play() }, 2000)
            }
            // 获取歌词
            that.getMusicLrc(musicId)

          }, function(err) {
            that.loading = false
            console.log(err);
          });
        }
      }, function(err) {
        that.loading = false
        that.currentMusic.artist = err.response.data.message
        that.currentMusic.url = ''
        that.currentMusic.name = ''
        that.currentMusic.currentTime = 0
        if (type != 'change') {
          setTimeout(() => { that.next() }, 2000)
        }
        console.log(err);
      });
    },
    /**
     * @description: Add by RayShine 获取歌词
     * @return {*}
     */  
    getMusicLrc(musicId = '1868943615'){
      let that = this
      if (!musicId) return
      // 获取歌词
      axios({
            baseURL: that.$themeConfig.back.musicUrl,
            url:"/lyric?id=" + musicId,
            withCredentials: true
          }).then(function(response) {
            if (response.status === 200) {
              let lrcStr = response.data.lrc.lyric
              that.currentMusic.lrcList = lrcStr.split('\n').map(lrc => {
                let time = lrc.substring(lrc.indexOf("[")+1,lrc.indexOf("]")+0).split(":")
                return {
                  // timestemp: Math.floor((time[0] * 60 + time[1]) * 100 ) / 100,
                  timestemp: parseInt(Math.floor(time[0] * 60) + Math.floor(time[1])),
                  str:lrc.substring(lrc.indexOf("]") + 1)
                }
              })
              // console.log(that.currentMusic.lrcList)
            }
      },function(err){
        console.log(err)
      })
    },
    /**
     * @description: Add by RayShine 转换歌词
     * @return {*}
     */   
    transformLrc:throttle(function () {
      let time = this.time
      let that = this
      let str = that.currentMusic && that.currentMusic.lrcList.filter(lrc => {
        // return lrc.timestemp - 0.5 >= Math.floor(time * 100 ) / 100 >= lrc.timestemp + 0.5
        return lrc.timestemp == parseInt(time)
      }).map(res => {
        return res.str
      }).join(",")

      if (str) {
        that.currentMusic.lrc = str
      }
      // console.log(str)
    }, 500),
    /**
     * @description: Add by RayShine 播放与暂停切换 需要防抖
     * @return {*}
     */    
    onPlay () {
      return this.isPlaying ? this.$refs.audio.pause() : this.$refs.audio.play()
    },
    play () {
      this.playHistory = false
      this.isPlaying = true
    },
    pause () {
      this.playHistory = true
			this.isPlaying = false
		},
    /**
     * @description: Add by RayShine 切换下一首 需要防抖
     * @param {*} e
     * @return {*}
     */    
    next (e) {
      // 暂停音乐
      this.$refs.audio.pause()
      // 获取歌曲
      this.getCurrentMusic('next')
    },
    /**
     * @description: Add by RayShine 切换上一首 需要防抖
     * @param {*} e
     * @return {*}
     */    
    prev (e) {
      // 暂停音乐
      this.$refs.audio.pause()
      // 获取歌曲
      this.getCurrentMusic('prev')
    },
    /**
     * @description: Add by RayShine 音频播放时间换算  返回 00:00
     * @param {number} time  - 音频当前播放时间，单位秒
     * @return {*}
     */    
    transTime(time) {
      var duration = parseInt(time)
      var minute = parseInt(duration / 60)
      var sec = (duration % 60) + ''
      var isM0 = ':'
      if (minute === 0) {
        minute = '00'
      } else if (minute < 10) {
        minute = '0' + minute
      }
      if (sec.length === 1) {
        sec = '0' + sec
      }
      return minute + isM0 + sec
    },
    /**
     * @description: Add by RayShine 更新当前播放时间 需要节流
     * @param {*} res
     * @return {*}
     */    
    onTimeupdate(e) {
      // let that = this
      // 实时显示时间
      this.currentMusic.currentTime = this.transTime(this.currentMusic.duration - e.target.currentTime)
      // 装换歌词
      this.time = e.target.currentTime
      this.transformLrc()
    },
    /**
     * @description: Add by RayShine 获取音频总时长
     * @return {*}
     */ 
    onLoadedmetadata(e) {
      this.currentMusic.duration = e.target.duration
      this.currentMusic.maxTime = this.transTime(e.target.duration)
      this.currentMusic.currentTime = this.currentMusic.maxTime
    },
    /**
     * @description: Add by RayShine 播放完自动加载下一首
     * @param {*} e
     * @return {*}
     */    
    onEnded (e) {
      this.next()
    },
    /**
     * @description: Add by RayShine 声音控制器 需要节流
     * @param {*} e
     * @return {*}
     */    
    onVolume(e) {
      let currentVolume = parseInt(this.$refs.audio.volume * 10)
      let step = this.volumeStep * 10
      if (e === 'jian') {
        if (currentVolume - step <= 0) {
          this.$refs.audio.volume = 0
        } else {
          this.$refs.audio.volume = (parseInt(this.$refs.audio.volume * 10) - step) / 10
        }
      } else {
        if (currentVolume + step >= 10 ) {
          this.$refs.audio.volume = 1
        }else {
          this.$refs.audio.volume = (parseInt(this.$refs.audio.volume * 10) + step) / 10
        }
      }
      this.currentMusic.volume = this.$refs.audio.volume
    }
  }
}
</script>

<style lang="stylus" scoped>
.pagefull {
  .actions {
    color $pagefullNavColor
    .title {
      .loading span {
      background: $pagefullNavColor !important;
    }
    }
  } 
}
.fixed {
  position fixed
  margin-top -3.7rem !important
  z-index 20
  padding: 0.7rem 1.5rem
  color var(--text-color)
  transition transform 0.2s ease-in-out, opacity 0.2s ease-in-out
}
.visible {
  transition all 0.5s
  transform translate3d(0, 100%, 0)
}
.nav-music {
  z-index 21
  position fixed
  top 0.1rem
  right 45rem 
  display inline-block
  padding-right 1.5rem
  box-sizing border-box
  white-space nowrap
  // position absolute
  right $navbar-horizontal-padding
  top $navbar-vertical-padding
  display flex
  // background-color var(--background-color)
  // margin-top -0.3rem
  margin-right 1.5rem
  padding 0.1rem 0.5rem 0.1rem 0.5rem
  font-size 1.1rem
  user-select none
  image.png
  .avatar {
    height $navbarHeight - 1rem
    min-width $navbarHeight - 1rem
    margin-top 0.5rem
    margin-right 0.3rem
    vertical-align top
    border-radius 50%
    box-shadow 0 1px 8px 1px var(--text-color)
  }
  .dropdown-wrapper{
    &:hover .music-dropdown {
      // override the inline style.
      display block !important
    }
  }
  .img-box {
    display: flex;
    // align-items: center;
    .time {
      position: fixed;
      margin-left: 0.2rem;
    }

  }
  .music-dropdown {
    display none
    // Avoid height shaked by clicking
    width: 100%;
    max-height 20rem !important
    box-sizing border-box;
    max-height calc(100vh - 2.7rem)
    overflow-y auto
    position absolute
    top 100%
    // right 0
    background-color var(--background-color)
    padding 0rem 0
    box-shadow: var(--box-shadow);
    text-align left
    border-radius $borderRadius
    white-space nowrap
    margin 0
    overflow: scroll-y;
    &:hover {
      display block !important
    }
    .music-dropdown-item {
      color inherit
      line-height 1.7rem
      padding: .2rem
      .music-info {
        display flex
        border-top: 1px solid var(--border-color);
        padding .2rem
        &:hover .title-name{
          color $accentColor;
        }
        .detail {
          display grid
          margin-left: 0.5rem;
          .title-name {
            font-size: 12px;
            font-weight 600;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: keep-all;
            display: inline-flex;
            &:hover {
              overflow: visible;
              animation: 3s siderbar linear infinite normal;
            }
          }
          .title-name-sub {
            font-size: 8px;
          }
        }
      }
      &:first-child .music-info {
        padding .2rem
        border-top 0
      }
    }

  }
  .actions{
    .title {
      display: flex;
      margin: 0.5rem 0;
      font-size: .8rem;
      font-weight: 600;
      padding-left: 0.3rem;
      .time {
        width: 2.5rem
        display: inline-block
      }
      // 加载动画
      .loading{
        // margin-right: .5rem;
        width: 2.5rem;
        height: auto;
        display: flex;
        align-items: center;
        // margin: 0 auto;
        // margin-top:100px;
      }
      .loading span{
        display: inline-block;
        width: .2rem;
        height: .2rem;
        margin-right: .1rem;
        border-radius: 50%;
        background: var(--text-color);
        -webkit-animation: load 1.04s ease infinite;
      }
      .loading span:last-child{
        margin-right: 0px;
      }
      @-webkit-keyframes load{
        0%{
          opacity: 1;
        }
        100%{
          opacity: 0;
        }
      }
      .loading span:nth-child(1){
        -webkit-animation-delay:0.13s;
      }
      .loading span:nth-child(2){
        -webkit-animation-delay:0.26s;
      }
      .loading span:nth-child(3){
        -webkit-animation-delay:0.39s;
      }
      .loading span:nth-child(4){
        -webkit-animation-delay:0.52s;
      }
      .loading span:nth-child(5){
        -webkit-animation-delay:0.65s;
      }


      .title-name {
        width: 8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: keep-all;
        display: inline-flex;
        &:hover {
          overflow: visible;
          animation: 3s siderbar linear infinite normal;
        }
      }
    }
    .action-bar {
      margin: -0.3rem 0 0 0;
      .volume{
        font-family: fantasy;
      }
      .iconfont {
        font-size 1.3rem
        // margin 0 .2rem
        transition: all .3s ease-in-sine
        &:hover {
          color $accentColor
        }  
      }
    }
  }
  .playing {
    -webkit-animation rotate 3s linear infinite
    -webkit-transform-origin center center
    -ms-transform-origin center center
    transform-origin center center
  }
  @--webkit-keyframes rotate {
    0%{
      --webkit-transform:rotate(0deg);
    }
    50%{
      --webkit-transform:rotate(180deg);
    }
    100%{
      --webkit-transform:rotate(360deg);
    }
  }
}


</style>
