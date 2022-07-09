<!--
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-17 15:24:10
 * @LastEditors: pengfei.shao 570165036@qq.com
 * @LastEditTime: 2022-07-09 16:37:05
 * @FilePath: \RayshineHub2.0e:\Font Project\RayShineHub\src\.vuepress\components\NavPlayer.vue
 * @Description: Create by RayShine 自己实现的音频播放器
 * 代办：歌词、循环随机播放
 * Copyright (c) 2022 by pengfei.shao 570165036@qq.com, All Rights Reserved. 
-->

<template>
  <div class="nav-music" v-if="isPC"
      :style="linksWrapOffsetWidth ? {
        'right': linksWrapOffsetWidth + 'px'
  } : {}">
    <div class="img-box">
      <img class="avatar" :class="{playing: isPlaying}"
      :src="currentMusic? currentMusic.cover : ''"
      />
    </div>
    <div class="actions">
      <div class="title">
        <span style="margin-right: 0.1rem">
          {{currentMusic.currentTime == 0 ? '' : currentMusic.currentTime}}
        </span>
        <div class="title-name">
          <span>
            {{currentMusic.artist || ''}} {{currentMusic.name? ' - ':''}}  {{  currentMusic.name || ''}}  
          </span>
        </div>
      </div>
      <div class="action-bar">
        <!-- <i class="iconfont rays-qiege" @click="next"></i> -->
        <i class="iconfont rays-bofang04-mianxing" @click="prev"></i>
        <i v-if="!isPlaying" class="iconfont rays-bofang" @click="onPlay"></i>
        <i v-if="isPlaying" class="iconfont rays-zanting" @click="onPlay"></i>
        <i class="iconfont rays-bofang05-mianxing" @click="next"></i>
        <i v-if="currentMusic.volume <= 0" class="iconfont rays-shengyin-jinyin" style="margin-left: 1rem"></i>
        <i v-if="currentMusic.volume > 0" class="iconfont rays-shengyin-jian" style="margin-left: 1rem" @click="onVolume('jian')"></i>
        <span>{{parseInt(currentMusic.volume * 10)}}</span>
        <i class="iconfont rays-shengyin-jia" @click="onVolume('jia')"></i>
      </div>
    </div>

    <audio ref="audio" 
    :autoplay="false" 
    :src="currentMusic.url"
    :volume="currentMusic.volume"
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
export default {
  data () {
    let that = this
    return {
      isPC: true,
      playlistId: '144719593',
      autoPlay: false,
      volumeStep: 0.2,
      defaultVolume: 0.4,
      isPlaying: false,
      playType: 'random',   // single单一,   list列表, random随机
      musicList: [],
      currentMusic: {
        musicId: '',
        currentTime: 0,
        maxTime: 0,
        duration: 0,
        volume: 0.2,
        name: '',
        artist: '',
        url: '',
        cover: '', // prettier-ignore
        lrc: '',
        sort: 0,
        brList: []
      }
    }
  },
  props: {
    linksWrapOffsetWidth: {
      type: Number,
      default: ''
    },
  },
  watch: {},
  mounted () {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isPC = false
    } else {
      this.isPC = true
      this.getMusicList(this.playlistId)
    }
  },
  methods:  {
    /**
     * @description: Add by RayShine 获取歌单列表
     * @param {*} playlistId
     * @return {*}
     */    
    getMusicList(playlistId = '144719593'){
      let that = this
      let sort = 0
      // 获取音乐文件
      axios({
        url:"https://autumnfish.cn/playlist/detail?id=" + playlistId ,
        withCredentials: true
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
            url:"https://autumnfish.cn/song/detail?ids=" + ids,
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
              // 加载一首歌
              that.getCurrentMusic('first')
              // console.log('musicList ->', that.musicList)
              // console.log('currentMusic ->', that.currentMusic)
            }
          }, function(err) {
            console.log(err);
          });
        }
      }, function(err) {
        console.log(err);
      });
    },
    /**
     * @description: Add by RayShine 从歌单中选一首歌
     * @return {*}
     */    
    getCurrentMusic(type = 'first') {
      // 随机取，但是不能和当前歌曲相同
      if(this.playType == 'random'){
        // 排除相同的歌曲
        let musicList = this.musicList.filter((music) => {
          return music.musicId != this.currentMusic.musicId
        })
        this.currentMusic = Object.assign({},this.currentMusic, musicList[Math.floor(Math.random() * musicList.length)])
      // 单曲循环或者列表循环，取下一首歌曲
      }else{
        if (type === 'first') {
          this.currentMusic = Object.assign({},this.currentMusic, this.musicList[0])
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
      // 检查音乐是否可用
      axios({
        url:"https://autumnfish.cn/check/music?id=" + musicId + '&br=' + br,
        withCredentials: true
      }).then(function(response) {
        // 返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
        if (response.status === 200 && response.data.success) {
          // 获取音乐文件
          axios({
            url:"https://autumnfish.cn/song/url?id=" + musicId + '&br=' + 320000,
            withCredentials: true
          }).then(function(response) {
            if (response.status === 200) {
              that.currentMusic.url = response.data.data[0].url;
              that.$refs.audio.volume = that.defaultVolume
              // 显示默认音量
              that.currentMusic.volume = that.$refs.audio.volume
              // 首次加载歌单，是否自动播放取决于用户设置
              if (type != 'first' || (type == 'first' && that.autoPlay)) setTimeout(() => { that.$refs.audio.play() }, 1500)
            }
          }, function(err) {
            console.log(err);
          });
        }
      }, function(err) {
        that.currentMusic.artist = err.response.data.message
        that.currentMusic.url = ''
        setTimeout(() => {
          that.next()
        }, 1500)
        console.log(err);
      });
    },
    /**
     * @description: Add by RayShine 播放与暂停切换
     * @return {*}
     */    
    onPlay () {
      return this.isPlaying ? this.$refs.audio.pause() : this.$refs.audio.play()
    },
    play () {
      this.isPlaying = true
    },
    pause () {
			this.isPlaying = false;
		},
    /**
     * @description: Add by RayShine 切换下一首
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
     * @description: Add by RayShine 切换上一首
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
     * @description: Add by RayShine 更新当前播放时间
     * @param {*} res
     * @return {*}
     */    
    onTimeupdate(e) {
      this.currentMusic.currentTime = this.transTime(this.currentMusic.duration - e.target.currentTime)
    },
    /**
     * @description: Add by RayShine 获取音频总时长
     * @return {*}
     */ 
    onLoadedmetadata(e) {
      this.currentMusic.duration = e.target.duration
      this.currentMusic.maxTime = this.transTime(e.target.duration)
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
     * @description: Add by RayShine 声音控制器
     * @param {*} e
     * @return {*}
     */    
    onVolume(e) {
      let currentVolume = parseInt(this.$refs.audio.volume * 10)
      let step = this.volumeStep * 10
      if (e === 'jian') {
        debugger
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

<style lang="stylus">
.nav-music {
    margin-top: -0.3rem;
    margin-right: 1.5rem;
    padding: 0.1rem 0.5rem 0.1rem 0.5rem;
    font-size: 1.2rem;
  .img-box {
    display: flex;
    align-items: center;
    .time {
      position: fixed;
      margin-left: 0.2rem;
    }
  }
  .actions{
    .title {
      margin: -0.5rem 0;
      font-size: .8rem;
      font-weight: 600;
      padding-left: 0.3rem;
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
    }
    .action-bar {
      margin: -0.7rem 0;
      .iconfont {
        font-size 1.2rem
        margin 0 .2rem
        transition: all .3s ease-in-sine
        &:hover {
          transform: scale(1.04)
        }  
      }
    }
  }
  .playing {
    -webkit-animation animal 3s infinite linear
    -webkit-transform-origin center center
    -ms-transform-origin center center
    transform-origin center center
  }
}


</style>
