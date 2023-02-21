<!--
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-17 15:24:10
 * @LastEditors: Ray Shine spf1773@gmail.com
 * @LastEditTime: 2023-02-22 02:00:43
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
    :style="[{right: linksWrapOffsetWidth ?  parseInt(linksWrapOffsetWidth)/16 + 'rem' : ''}]">
    <div class="img-box">
      <a class="point_box" @click="immerse">
        <div class="point_1"></div>
        <div class="point_2"></div>
      </a>
      <img class="avatar" :class="{playing: isPlaying}"
      :src="currentMusic? currentMusic.cover : ''"
      />
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
            {{isPlaying && currentMusic.lrc ? currentMusic.lrc : (currentMusic.artist || '') + (currentMusic.name ? ' - ':'') + (currentMusic.name || '')}}  
          </span>
        </div>
      </div>
      <div class="action-bar">
        <!-- <i class="iconfont rays-switch" @click="next"></i> -->
        <i class="iconfont rays-prev-face" @click="prev"></i>
        <i v-if="!isPlaying" class="iconfont rays-play" @click="onPlay"></i>
        <i v-if="isPlaying" class="iconfont rays-pause" @click="onPlay"></i>
        <i class="iconfont rays-next-face" @click="next"></i>
        <i v-if="currentMusic.volume <= 0" class="iconfont rays-mute" style="margin-left: .5rem"></i>
        <i v-if="currentMusic.volume > 0" class="iconfont rays-volume-reduce" style="margin-left: 1rem" @click="onVolume('jian')"></i>
        <span class="volume">{{parseInt(currentMusic.volume * 10)}}</span>
        <i class="iconfont rays-volume-add" @click="onVolume('jia')"></i>
        <!-- 循环方式 -->
        <i class="iconfont palylist" :class="'rays-' + playType" @click="playTypeHandle" style="font-size: 1.2rem;"></i>
        <!-- 歌单列表 -->
        <div class="dropdown-wrapper">
          <a class="dropdown-box">
            <i class="iconfont rays-songlist palylist" 
            @mouseenter="scrollToCurrentMusic('dropdown_', currentMusic.musicId, {behavior: 'auto', block: 'center'})"></i>
          </a>
          <DropdownTransition>
            <ul class="music-dropdown">
              <li class="music-dropdown-item" :key="item.musicId || index" v-for="(item, index) in musicList">
                <div class="music-info" 
                :id="'dropdown_' + item.musicId"
                @click="getCurrentMusic('change', item)">
                  <div style="display: flex;align-items: center;">
                    <!-- 头像 -->
                    <img class="avatar" :src="item? item.cover : ''"/>
                    <div class="detail">
                      <!-- 名称 -->
                      <div class="title-name" :class="{'current-music': item.musicId == currentMusic.musicId}">
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
                  <div class="heart-hot" v-if="isPlaying && item.musicId == currentMusic.musicId">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </li>
            </ul>
          </DropdownTransition>
        </div>
      </div>
    </div>
    <!-- 沉浸模式   -->
    <div class="immerse-wapper" :style="open? 'height: 100%;': 'height: 0;'" >
      <!-- 操作栏 -->
      <div class="immerse-action">
        <span class="immerse-close" @click="immerse"></span>
      </div>
      <!-- 歌曲主体 -->
      <div class="immerse-main">
        <!-- 头像 -->
        <div class="immerse-avtar">
          <img class="avatar" :class="{playing: isPlaying}"
          :src="currentMusic? currentMusic.cover : ''"
          style="width: 20rem;height: 20rem;border-radius: 500px;"
          @click="onPlay"
          />
        </div>
        <!-- 歌名 & 歌词 -->
        <div class="immerse-cover">
          <div class="immerse-title">
            <span>
              {{currentMusic.name || currentMusic.artist || ''}}  
            </span>
            <!-- <span style="font-size: 1rem;">
              {{ currentMusic.artist }}
            </span> -->
          </div>
          <ul class="immerse-lrc" ref="lyric">
            <div style="max-width: 60rem;" :style="{margin: isArrow ? '30% 0' : '10% 0'}">
              <li class="lrc" ref="lrcLine"
              :class="{active: isPlaying && (lrcItem.timestemp <= currentMusic.timestemp && (index != currentMusic.lrcList.length -1 && currentMusic.timestemp < parseInt(currentMusic.lrcList[index + 1].timestemp))),
              lrcFlag: index === 0}"
              v-if="lrcItem.str"
              :key="index" 
              v-for="(lrcItem, index) in currentMusic.lrcList"
              >{{ lrcItem.str }}</li>
            </div>
          </ul>
        </div>
        <!-- 歌单列表 -->
        <div class="immerse-musicList">
          <div style="display: flex;padding: 0.5rem 1rem;">
            <div class="catgBtns">
              <div class="listBtn" v-for="(catgItme, index) in catgList"
              :class="{'listBtn_1':index == 0, 'listBtn_2' : index!=0 && index == catgList.length -1, 'selected': !searchFlag && catgItme.id == currentMusic.playListId}"
               @click="getMusicList(catgItme.index, catgItme.id)">
                <span>
                  {{ catgItme.name }}
                </span>
              </div>
            </div> 
            <div class="refreshBtn" :class="isListRefresh ? 'refreshing': ''">
              <i class="iconfont rays-shuaxin1"
               @click="getMusicList('refresh', playlistId)"></i>
            </div>
            <div class="locationBtn" style="margin-left: -1.5rem;">
              <i class="iconfont rays-dingwei"
               @click="getScoll('music_')"></i>
            </div>
            <div class="searchBox">
              <i class="iconfont" :class="{'reco-search': !search.isRuning, 'rays-shuaxin': search.isRuning, 'refreshing': search.isRuning}"></i>
              <input 
              @input="searchHandle($event.target.value)"
              :value="search.query"
              :style="{width: search.query ? '60%': '0'}"
              :class="{focused: searchFlag}"
              aria-label="Search"
              placeholder="搜索"
              autocomplete="off"
              spellcheck="false"
              >
            </div>
          </div>
          <div style="width: 99%;height: calc(100% - 2.5rem);">
            <ul class="immerse-musicList-wapper" ref="musicList">
              <li class="music-dropdown-item" :key="item.musicId || index" v-for="(item, index) in songsList">
                <div class="music-info" 
                :id="'music_' + item.musicId"
                @click="getCurrentMusic('change', item)">
                  <div style="display: flex;align-items: center;">
                    <!-- 头像 -->
                    <img class="avatar" :src="item? item.cover : ''"/>
                    <div class="detail">
                      <!-- 名称 -->
                      <div class="title-name" :class="{'current-music': item.musicId == currentMusic.musicId}">
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
                  <div class="heart-hot" v-if="isPlaying && item.musicId == currentMusic.musicId">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 底部操作栏 -->
      <div class="immerse-footer">
        <div class="action-bar">
          <!-- <i class="iconfont rays-switch" @click="next"></i> -->
          <i class="iconfont rays-prev-face" @click="prev"></i>
          <i v-if="!isPlaying" class="iconfont rays-play" @click="onPlay" style="font-size: 3rem;"></i>
          <i v-if="isPlaying" class="iconfont rays-pause" @click="onPlay" style="font-size: 3rem;"></i>
          <i class="iconfont rays-next-face" @click="next"></i>
          <!-- controls  controlslist="nodownload" -->
          <audio ref="audio"
          controls
          :loop="playType == 'playsingle'"
          :autoplay="false" 
          :src="currentMusic.url"
          :volume="0.3"
          @volumechange="onVolume"
          @play="play" 
          @pause="pause"
          @loadedmetadata="onLoadedmetadata"
          @timeupdate="onTimeupdate"
          @ended="onEnded"
          ></audio>
          <i v-if="currentMusic.volume <= 0" class="iconfont rays-mute" style="margin-left: 1rem"></i>
          <i v-if="currentMusic.volume > 0" class="iconfont rays-volume-reduce" style="margin-left: 1rem" @click="onVolume('jian')"></i>
          <span class="volume">{{parseInt(currentMusic.volume * 10)}}</span>
          <i class="iconfont rays-volume-add" @click="onVolume('jia')"></i>
          <i class="iconfont palylist" :class="'rays-' + playType" @click="playTypeHandle" ></i>
        </div>
      </div>
      
    </div>

  </div> 
</template>

<script>
import axios from 'axios'
import DropdownTransition from '@theme/components/DropdownTransition'

/**
 * @description: Add by RayShine 防抖
 * @param {Fn} func
 * @param {int} delay
 * @return {*}
 */ 
const deounce = function (func, delay = 200) {
  let timer = null

  return function () {
    let context = this
    let args = arguments
    // 清除上次还未发生的事件
    timer && clearTimeout(timer)
    // 设置一个新的定时器
    timer = setTimeout(() =>{
      func.apply(context, args)
    }, delay)
  }
};
/**
 * @description: Add by RayShine 节流
 * @param {Fn} func
 * @param {int} delay
 * @return {*}
 */    
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
      open: false,
      time: 0,
      loading: true,
      isPC: true,
      search: {
        isRuning: false,
        placeholder: '搜索',
        resultList: []
      },
      playHistory: false,
      isPlaying: false,
      // playsingle 单曲循环, playloop 列表循环, playorder 列表顺序, playrandom 随机
      playType: that.defaultPlayType,
      musicList: [],
      currentMusic: {
        playListId: '144719593',
        musicId: '',
        currentTime: 0,
        maxTime: 0,
        duration: 0,
        volume: 0.3,
        name: '',
        artist: '',
        url: '',
        cover: 'https://p2.music.126.net/3MaeDnsU61e96WlH5-hoaQ==/109951163195183343.jpg', // prettier-ignore
        timestemp: 0,
        lrc: '',
        lrcList:[],
        sort: 0,
        brList: []
      },
      lineNo: 1,
      isArrow: true,
      linksWrapOffsetWidth: null,
      linksWrapMaxWidth: null,
      fixedHeight: 0,
      pageYOffset: 44,
      isFixed: false,
      isVisible: false,
      isListRefresh: false,
      searchFlag: false
    }
  },
  computed: {
    playlistId () {
      return this.$themeConfig.NavPlayer.playlistId || ''
    },
    catgList () {
      return this.$themeConfig.NavPlayer.catgList || []
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
    defaultPlayType () {
      // playsingle 单曲循环, playloop 列表循环, playorder 列表顺序, playrandom 随机
      return this.$themeConfig.NavPlayer.playType || 'playloop'
    },
    songsList () {
      return this.searchFlag ? this.search.resultList : this.musicList
    }
  },
  watch: {},
  mounted () {
    
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isPC = false
    } else {
      this.playType = this.defaultPlayType
      this.isPC = true
      this.getMusicList('first',this.playlistId)
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
     * @description: Add by RayShine 切换播放模式
     * @param {*} playlistId
     * @return {*}
     */  
    playTypeHandle () {
      // playsingle 单曲循环, playloop 列表循环, playorder 列表顺序, playrandom 随机
      switch (this.playType) {
        case 'playsingle':
          this.playType = 'playloop'
          break;

        case 'playloop':
          this.playType = 'playorder'
          break;

        case 'playorder':
          this.playType = 'playrandom'
          break;
      
        default:
        this.playType = 'playsingle'
          break;
      }
    },
    /**
     * @description: Add by RayShine 获取歌单列表
     * @param {*} playlistId
     * @return {*}
     */    
    getMusicList(type='first', playlistId = '144719593'){
      let that = this
      let sort = 0
      that.searchFlag = false   // 重置搜索列表
      that.search.query = ''
      that.isListRefresh = true
      // 刷新不换歌单
      if (type == 'refresh') {
        playlistId = that.currentMusic.playListId
      } 
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
                  artist: song.ar.map(ar => { return ar.name }).join('，') || '',
                  cover: song.al.picUrl || '',   // prettier-ignore
                  brList,
                  sort: sort++
                }
              })
              
              // 设置刷新标志
              setTimeout(() => {
                that.isListRefresh = false
              }, 2000); 
              // 第一次获取歌单，加载一首歌
              if (type == 'first') {
                // type = 'mine'
                that.getCurrentMusic(type)
                // 设置默认音量
                that.$refs.audio.volume = that.defaultVolume
                // 显示默认音量
                that.currentMusic.volume = that.$refs.audio.volume
              }

              // 歌单赋值
              that.currentMusic.playListId = playlistId
              // console.log('musicList ->', that.musicList)
              // console.log('currentMusic ->', that.currentMusic)
              // 滚动到当前歌曲
              setTimeout(() => {
                that.scrollToCurrentMusic('music_', that.currentMusic.musicId)
              }, 1500);
            }
            
          }, function(err) {
            that.loading = false
            that.isListRefresh = false
            that.currentMusic.artist = err.response.data.message
            that.currentMusic.currentTime = 0
            console.log(err);
          });
        }
      }, function(err) {
        that.loading = false
        that.isListRefresh = false
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
      // 同一首歌不切换
      if (music && music.musicId == this.currentMusic.musicId) return
      // 滚动到当前音乐
      setTimeout(() => {
        this.scrollToCurrentMusic('music_',this.currentMusic.musicId)
      }, 1500);
      // 暂停
      this.$refs.audio.pause()
      // 清除歌词
      this.currentMusic.lrc = ""
      this.currentMusic.lrcList = []
      // 随机取，但是不能和当前歌曲相同
      if(this.playType == 'playrandom' && type !== 'change'){
        // 排除相同的歌曲
        let musicList = this.songsList.filter((music) => {
          return music.musicId != this.currentMusic.musicId
        })
        this.currentMusic = Object.assign({},this.currentMusic, musicList[Math.floor(Math.random() * musicList.length)])
      // 列表顺序或者列表循环，取下一首歌曲
      }else{
        if (type === 'first') {
          this.currentMusic = Object.assign({},this.currentMusic, this.songsList[0])
        } else if (type === 'change'){
          this.currentMusic = Object.assign({},this.currentMusic, music)
        } else {
          // playsingle 单曲循环, playloop 列表循环, playorder 列表顺序, playrandom 随机
          let nextSort = type == 'prev' ? --this.currentMusic.sort : ++this.currentMusic.sort
          if (type === 'next' && nextSort > this.songsList.length - 1) {
            nextSort = 0
            if (this.playType == 'playorder') return
          } else if (type === 'prev' && nextSort < 0) {
            nextSort = this.songsList.length - 1
          }
          this.currentMusic.sort = nextSort
          this.currentMusic = Object.assign({},this.currentMusic, this.songsList[nextSort])
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
          // 获取歌词
          that.getMusicLrc(musicId)
          // 获取音乐文件
          axios({
            baseURL: that.$themeConfig.back.musicUrl,
            url:"/song/url?id=" + musicId + '&br=' + br,
            withCredentials: true
          }).then(function(response) {
            if (response.status === 200) {
              that.loading = false
              // that.pause();
              // 替换 http 为 https
              that.currentMusic.url = response.data.data[0].url.match('^http://') ?  response.data.data[0].url.replace("http://","https://") : response.data.data[0].url;
              // 首次加载歌单，是否自动播放取决于用户设置
              if (type != 'first' || (type == 'first' && that.autoPlay)) setTimeout(() => { that.$refs.audio.play() }, 2000)
            }

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
              let lineNo = 1
              that.currentMusic.lrcList = lrcStr.split('\n').map(lrc => {
                let time = lrc.substring(lrc.indexOf("[")+1,lrc.indexOf("]")+0).split(":")
                return {
                  // timestemp: Math.floor((time[0] * 60 + time[1]) * 100 ) / 100,
                  timestemp: parseInt(Math.floor(time[0] * 60) + Math.floor(time[1])),
                  str:lrc.substring(lrc.indexOf("]") + 1),
                  lineNo: lrc.substring(lrc.indexOf("]") + 1) && lineNo++
                }
              }).filter(res => {
                return res.str
              })
              // 初始化歌词显示的位置，如果不支持滚动的歌词就靠上一点，支持滚动的就靠中间一点显示
              that.isArrow = true
              if (that.currentMusic.lrcList.length > 0 && !that.currentMusic.lrcList[1].timestemp && that.currentMusic.lrcList[1].timestemp != 0) that.isArrow = false
              // console.log(that.currentMusic.lrcList)
            }
      },function(err){
        console.log(err)
      })
    },
    /**
     * @description: Add by RayShine 转换歌词 && 沉浸式歌词滚动
     * @return {*}
     */   
    transformLrc:throttle(function(time) {
      let that = this
      // 不支持滚动的歌词
      if (!that.isArrow) return
      // 查找时间相同的歌词
      let musicList = that.currentMusic && that.currentMusic.lrcList.filter(lrc => {
        // return lrc.timestemp - 0.5 >= Math.floor(time * 100 ) / 100 >= lrc.timestemp + 0.5
        return lrc.timestemp <= time
      })
      // 提取歌词，准备mini模式的切换展示
      let str = musicList.filter(lrc => {
        return lrc.timestemp == parseInt(time)
      }).map(res => {
        return res.str
      }).join(",")
      
      // 歌词切换
      if (str && that.currentMusic.lrc != str) {
        that.currentMusic.lrc = str
      }
      // 找出当前行的行序号
      let currentLineNo = Math.max.apply(null, musicList.map(res => {
        return res.lineNo
      }))

      // 记录当前行歌词和歌词主体大小
      let immerseLrcOffsetHeight = parseInt(that.$refs.lyric && that.$refs.lyric.offsetHeight * 0.12) || 85
      let lrcLineOffsetHetght = parseInt(that.$refs.lrcLine && that.$refs.lrcLine.length != 0 && that.$refs.lrcLine[0].offsetHeight) || 45
      // console.log('immerseLrcOffsetHeight->',immerseLrcOffsetHeight);
      // console.log('immerseLrcOffsetHeight->',lrcLineOffsetHetght);
      // 歌词滚动 (每一行的高度是固定的)   排除 Infinity
      if (currentLineNo && isFinite(currentLineNo)) that.$refs.lyric.scrollTop = lrcLineOffsetHetght * currentLineNo - immerseLrcOffsetHeight

      // console.log('currentLineNo->', currentLineNo)
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
      this.playHistory = true
      this.isPlaying = true
    },
    pause () {
      this.playHistory = false
			this.isPlaying = false
		},
    /**
     * @description: Add by RayShine 切换下一首 需要防抖
     * @param {*} e
     * @return {*}
     */    
    next (e) {
      // 暂停音乐
      // this.$refs.audio.pause()
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
      // this.$refs.audio.pause()
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
      this.currentMusic.timestemp =  parseInt(Math.floor(e.target.currentTime * 100) / 100)
      // 装换歌词
      this.transformLrc(this.currentMusic.timestemp)
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
      if (typeof(e) == 'string') {
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
      }
      this.currentMusic.volume = this.$refs.audio.volume
    },
    /**
     * @description: Add by RayShine 沉浸模式开关
     * @param {*} e 
     */
    immerse(e) {
      this.open = !this.open
      if (this.open) setTimeout(() => {
        this.scrollToCurrentMusic('music_', this.currentMusic.musicId, {behavior: 'auto'})
      }, 1500);
    },
    getScoll (type = 'music_') {
      this.scrollToCurrentMusic(type, this.currentMusic.musicId, {behavior: 'auto'})
    },
    /**
     * @description: Add by RayShine 歌单列表定位
     * @param {*} musicId 
     */
    scrollToCurrentMusic(type = 'music_', musicId = '', options = {behavior:'smooth',block: 'center',}) {
      if (!musicId) return
      // 找到当前播放歌曲的实例
      this.$nextTick(() => {
        document.querySelector('#' + type + musicId) && document.querySelector('#' + type + musicId).scrollIntoView({
          behavior: options.behavior || 'auto',
          block: options.block || 'center'
        })
      })    
    },
    /**
     * @description: Add by RayShine 歌曲搜索
     * @param {*} musicId 
     */
    searchHandle: deounce(function(query) {
      let that = this
      let sort = 0
      that.search.query = query
      // 输入框中没有结果显示原先的歌单
      if (!query) that.searchFlag = false
      that.search.resultList = []
      if (query) {
        that.search.isRuning = true
        // 执行搜索 可选参数 limit用于分页，type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
        axios({
          baseURL: that.$themeConfig.back.musicUrl,
          url:"/cloudsearch?keywords=" + query,
          withCredentials: true
        }).then(function(response) {
          if (response.status === 200) {
            
            that.search.resultList = response.data.result.songs.map(song => {
              let brList = [] 
              brList.push(song.privilege.maxbr)
              return {
                musicId: song.id,
                name: song.name || '',
                artist: song.ar.map(ar => { return ar.name }).join('，') || '',
                cover: song.al.picUrl || '',   // prettier-ignore
                brList,
                sort: sort++
              }
            })
            that.searchFlag = true
            setTimeout(() => {
              that.search.isRuning = false
            }, 1000);
            console.log(response.data.result.songs)
          }
        },function(err){
          that.search.isRuning = false
          console.log(err)
        })
      }
    }, 1500)
  }
}
</script>

<style lang="stylus" scoped>

audio {
  width: 25%;
  height: 2rem;
  opacity .5
  margin: 0 3rem;
  // margin-top 1rem
  // background-color var(--nav-background-color)
  border-color none
  color var(--text-color)
}

audio::-webkit-media-controls {
    width: inherit;
    height: inherit;
    position: relative;
    display: -webkit-flex;
    // background-color var(--nav-background-color)
    -webkit-align-items: flex-start;
    -webkit-justify-content: flex-end;
    -webkit-flex-direction: column;
}

audio::-webkit-media-controls-mute-button {
    // display: none;
}

audio::-webkit-media-controls-panel {
  -webkit-justify-content: center;
  height: 100%;
  // background-color: var(--nav-background-color);
  backdrop-filter: blur(10rem);
}

/* Removes the timeline */
audio::-webkit-media-controls-timeline {
  // display: none !important;
}
// audio::-webkit-media-controls-timeline, video::-webkit-media-controls-timeline {
//     -webkit-appearance: media-slider;
//     display: -webkit-flex;
//     -webkit-flex: 1 1;
//     background-color: initial;
//     border: initial;
//     color: inherit;
//     margin: initial;
//     min-width: 0;
// }

/* Removes the time stamp */
audio::-webkit-media-controls-current-time-display {
  // display: none;
}
audio::-webkit-media-controls-time-remaining-display {
  // display: none;
}
audio::-webkit-media-controls-play-button {
  display: none;
}
audio::-webkit-media-controls-overlay-play-button {
  display: none;
}
audio::-webkit-media-controls-timeline-container {
  display: none;
}
//  歌单列表滚动条
.immerse-musicList-wapper::-webkit-scrollbar {
  width: .3rem !important;
}
.immerse-musicList-wapper::-webkit-scrollbar-thumb {
  border-radius 10rem
  background-color var(--text-color)
}

// ::-webkit-scrollbar{}/*整体设置*/

// ::-webkit-scrollbar-button ：滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。

// ::-webkit-scrollbar-track ：外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。

// ::-webkit-scrollbar-track-piece ：内层轨道，具体区别看下面gif图，需要注意的就是它会覆盖第三个属性的样式。

// ::-webkit-scrollbar-thumb ：滚动条里面可以拖动的那部分

// ::-webkit-scrollbar-corner ：边角，两个滚动条交汇处

// ::-webkit-resizer ：两个滚动条交汇处用于拖动调整元素大小的小控件（基本用不上）

.pagefull {
  .actions {
    color $pagefullNavColor
    .title {
      .loading span {
      background: $pagefullNavColor !important;
    }
    }
  }
  .immerse-wapper {
    color rgba(50, 65, 100, 1)
    .iconfont {
      color rgba(50, 65, 100, .5) !important
    }
    .listBtn {
      color rgba(50, 65, 100, 1) !important
      border 2px solid rgba(50, 65, 100, 1) !important
    }
    .music-info {
      border-top: 1px solid rgba(255, 255, 255, .3) !important;
    }
    hr {
      border-top: 1px solid rgba(255, 255, 255, .3) !important;
    }
    input {
      border: .1rem solid rgba(50,65,100,0.5) !important;
    }
  }
  .immerse-footer {
    background-color: rgba(195, 197, 202,1) !important;
  }
  
}
.fixed {
  position fixed
  top -3.7rem !important
  z-index 20
  padding: 0.7rem 1.5rem
  color var(--text-color)
  transition transform 0.2s ease-in-out, top 0.2s ease-in-out
}
.visible {
  // transition all 0.5s
  // transform translate3d(0, 100%, 0)
  top -0.1rem !important
  transition transform 0.2s ease-in-out, top 0.5s ease-in-out
}

// 沉浸模式 ********* start *********
.immerse-wapper{
  z-index 501
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(10rem);
  backdrop-filter: blur(10rem);
  // overflow-y: hidden;
  overflow hidden;
  transition: transform .2s ease-in-out, height .2s ease-in-out;
  .immerse-action {  // 操作栏
    height: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .immerse-title {
      font-weight 500
    }
    .immerse-close {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 10rem;
      color: var(--text-color);
      text-align: center;
      background-color: var(--background-color);
      position: fixed;
      right: 0.5rem;
      backdrop-filter: blur(1rem);
      -webkit-backdrop-filter: blur(1rem);
      box-shadow var(--box-shadow)
    }
    .immerse-close::before {
      content: "\2716"
    }
  }
  .immerse-main {  // 沉浸主体
    height: calc(95% - 4rem);
    width: 100%;
    display: flex;
    .immerse-avtar {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .immerse-cover {
      width: 50%;
      text-align: center;
      .immerse-title {
        height 10%;
        font-weight 500
        font-size 2rem
      }
      .immerse-lrc {
        scroll-behavior:smooth;
        display grid;
        padding: 0;
        height: 85%;
        overflow hidden;
        overflow-y auto;
        .lrc {
          transition .3s 
          padding .2rem
          font-family cursive
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:first-child .lrc {
          margin-top: 10rem
        }
        // &:last-child .lrc {
        //   margin-bottom: 10rem
        // }
      }
      .active {
        font-size: 1.2rem;
        font-weight: 600;
        transform: scale(1.4)
      }
    }
  }
  .immerse-musicList {
    width: 25%;
    max-height: calc(100% - 0.1rem);
    .refreshBtn 
    .locationBtn {
      display: flex; 
      align-items: center;
      padding: 0 1rem;
      &:hover .iconfont{
        color $accentColor !important
      } 
      .iconfont {
        color var(--text-color)
        font-size 1.5rem 
      }
    }
    .searchBox {
      display inline-block
      position relative
      margin-right 1rem
      .iconfont {
        position absolute
        top .4rem
        z-index 0
        left .4rem
        margin auto
      }
      input {
        appearance: none;
        text-align: center;
        cursor text
        width 0rem
        height: 1.5rem
        color var(--text-color) !important
        display inline-block
        border .1rem solid var(--text-color)
        border-radius 25rem
        font-size 0.9rem
        font-weight 600
        line-height 2rem
        padding 0 0.5rem 0 1rem
        outline none
        transition all .2s ease
        background transparent
        background-size 1rem
        &:focus {
          width 60% !important
          cursor auto
          border-color $accentColor !important
        }
      }
      &:hover input {
        width: 60% !important
      }
      .focused {
        cursor auto
        border-color $accentColor !important
      }
    }

    .catgBtns {
      display flex
      .listBtn {
        font-size: .8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        margin-left -.1rem
        color: var(--text-color);
        border: .1rem solid var(--text-color-sub);
        box-shadow var(--box-shadow);
        &:hover {
          color $accentColor !important;
          border-color: $accentColor !important;
        }
      }
      .listBtn_1 {
        border-radius: 3.5rem 0 0 3.5rem;
      }
      .listBtn_2 {
        border-radius: 0 3.5rem 3.5rem 0;
      }
      .selected {
        border-color $accentColor !important
        color $accentColor !important
      }
    }

    .immerse-musicList-wapper {
      // max-height: 100%;
      width: 23%;
      height: calc(95% - 6.5rem);
      overflow: hidden;
      box-sizing border-box;
      overflow-y auto
      position fixed
      padding 0rem 0
      text-align left
      white-space nowrap
      margin 0
      .music-dropdown-item {
        color inherit
        line-height 1.7rem
        padding: .2rem
        height: 3.6rem;
        .music-info {
          display flex
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding 0.2rem 1rem 0 1rem;
          &:hover .title-name{
            color $accentColor;
          }
          .detail {
            display grid
            margin-left: 0.5rem;
            .title-name {
              font-size: .8rem;
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
            .current-music {
              color red
            }
            .title-name-sub {
              font-size: .5rem;
            }
          }
        }
        &:first-child .music-info {
          padding 0.45rem 1rem 0 1rem;
          border-top 0 !important
        }
      }
    }
  }
  .immerse-footer {
    text-align: center;
    font-size 2rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    height 4rem
    border-top var(--border-top)
    -webkit-box-shadow: 0 5px 6px 5px rgba(133, 133, 133, 60%)
    background-color var(--background-color)
    .action-bar {
      display flex
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size 2rem;
        margin .6rem;
        &:hover {
          color $accentColor
        }
      }
    }
    
  }
}
.nav-music {
  z-index 21
  position fixed
  top -0.1rem
  right 45rem 
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
    cursor: pointer
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
    cursor pointer
    &:hover .point_box {
      display block !important
    }
    .time {
      position: fixed;
      margin-left: 0.2rem;
    }

  }
  .point_box {
    display none
    height $navbarHeight - 1rem
    min-width $navbarHeight - 1rem
    margin-top 0.5rem
    margin-right -($navbarHeight - 1rem)
    vertical-align top
    border-radius 50%
    box-shadow 0 1px 8px 1px var(--text-color)
    cursor: pointer
    backdrop-filter: blur(.1rem);
    z-index: 1;
    .point_1:after {
      content: "";
      position: absolute;
      display: block;
      top: .5rem;
      left: 1rem;
      margin-bottom 1rem
      width: .5rem;
      height: .5rem;
      border: 0.15rem solid rgb(247 247 247 / 0.90);
      border-left: none;
      border-top: none;
      -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-animation: arrowMove 1.2s infinite;
      animation: arrowMove 1.2s infinite;
      z-index 1
    }
    .point_2:after {
      content: "";
      position: absolute;
      display: block;
      top: .9rem;
      left: 1rem;
      width: .5rem;
      height: .5rem;
      border: 0.15rem solid rgb(247 247 247 / 0.90);
      border-left: none;
      border-top: none;
      -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-animation: arrowMove 1.2s infinite;
      animation: arrowMove 1.2s infinite;
      z-index 1
    }
    @-webkit-keyframes arrowMove {
      from {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      to {
        -webkit-transform: rotate(45deg) translateY(.2rem) translateX(.2rem);
        transform: rotate(45deg) translateY(.2rem) translateX(.2rem);
        opacity: 0;
      }
    }
    @keyframes arrowMove {
      from {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      to {
        -webkit-transform: rotate(45deg) translateY(.2rem) translateX(.2rem);
        transform: rotate(45deg) translateY(.2rem) translateX(.2rem);
        opacity: 0;
      }
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
    right 0
    background-color var(--background-color)
    padding 0rem 0
    box-shadow: var(--box-shadow);
    color: var(--text-color);
    text-align left
    border-radius $borderRadius
    white-space nowrap
    margin 0
    overflow: scroll-y;
    margin-top:-.5rem;
    overflow-x: hidden;
    &:hover {
      display block !important
    }
    .music-dropdown-item {
      color inherit
      line-height 1.7rem
      padding: .2rem
      height: 3.6rem;
      .music-info {
        display flex
        justify-content: space-between;
        border-top: 1px solid var(--border-color);
        padding 0.2rem 1rem 0 1rem;
        &:hover .title-name{
          color $accentColor;
        }
        .detail {
          display grid
          margin-left: 0.5rem;
          .title-name {
            font-size: .8rem;
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
          .current-music {
            color red
          }
          .title-name-sub {
            font-size: .5rem;
          }
        }
      }
      &:first-child .music-info {
        padding 0.45rem 1rem 0 1rem;
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
        margin-right: 0;
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
        width: 10rem;
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
      .current-music {
        color red
      }
    }
    .action-bar {
      margin: -0.3rem 0 0 0;
      display flex
      .volume{
        font-family: fantasy;
      }
      .iconfont {
        font-size 1.3rem
        margin 0 .2rem
        transition: all .3s ease-in-sine
        &:hover {
          color $accentColor
        }  
      }
      .playlist {
        &:hover .music-dropdown {
          // override the inline style.
          display block !important
        }
      }
    }
  }
  .refreshing {
    -webkit-transform: rotate(360deg);
    animation: rotation 1s linear infinite;
    -moz-animation: rotation 1s linear infinite;
    -webkit-animation: rotation 1s linear infinite;
    -o-animation: rotation 1s linear infinite;
  }
  .playing {
    -webkit-transform: rotate(360deg);
    animation: rotation 3s linear infinite;
    -moz-animation: rotation 3s linear infinite;
    -webkit-animation: rotation 3s linear infinite;
    -o-animation: rotation 3s linear infinite;
  }
  @--webkit-keyframes rotation {
    0% {
      -webkit-transform:rotate(0deg);
    }
    50% {
      -webkit-transform:rotate(180deg);
    }
    100% {
      -webkit-transform:rotate(360deg);
    }
  }
  @keyframes rotation {
    0% {
      -webkit-transform:rotate(0deg);
    }
    50% {
      -webkit-transform:rotate(180deg);
    }
    100% {
      -webkit-transform:rotate(360deg);
    }
  }
  .heart-hot {
    display: flex;
    width: 3rem;
    padding: 0.5rem 1rem;
    transform rotate(180deg)
  }
  .heart-hot span {
    width: 100%;
    margin 0 .1rem;
    height: 2rem;
    border-radius .1rem
    animation-duration: 2s; // 一个完整动画的持续时间
    animation-iteration-count: infinite; // 动画循环次数：无限循环
    animation-name: heart-bounce; // 调用的动画名，对应上面的 .heart-bounce
  }
  .heart-hot span:nth-child(1) {
    animation-delay .2s
    margin-left 0
  }
  .heart-hot span:nth-child(2) {
    animation-delay .4s
  }
  .heart-hot span:nth-child(3) {
    animation-delay .6s
  }
  .heart-hot span:nth-child(4) {
    animation-delay .8s
  }
  .heart-hot span:nth-child(5) {
    animation-delay 1s
    margin-right 0
  }
  @keyframes heart-bounce {
    0%, 100% {height: 0.4rem; background: #ffd166}
    25% {height: 1.8rem; background: #06d6a0}
    50% {height: 1rem; background: #118ab2}
    75% {height: 1.8rem; background: #ef476f}
  }
}


</style>
