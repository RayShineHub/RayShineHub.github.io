---
title: '博客篇 -- Vuepress 音乐播放器 & 沉浸式'
date: 2022-07-10
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
meta:
  - name: description
    content: Vuepress 音乐播放器
  - name: keywords
    content: Vuepress audio Html 博客 博客优化 axios 网易云音乐API neteasecloudmusicapi NavPlayer Vue音乐播放器 自动播放
tags:
 - '博客优化'
 - 'Vuepress'
categories: 
 - '前端'

#置顶顺序
sticky: 1
---

<Boxx/>

基于 [vuepress v1.x](https://www.vuepress.cn) ，接入第三方网易云音乐API库[NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/)，纯手写一个导航栏音乐播放器，目前支持获取指定ID的 [网易云歌单](https://music.163.com/#/playlist?id=144719593)，随机播放，未来实现歌单列表。

<!-- more -->

先看下效果。

![NavPlayer](https://cdn.rayshine.site/blog/NavPlayer/NavPlayer.png)

## Step 1 功能设计

- [X] 获取歌单
- [X] 检查歌曲是否可用
- [X] 获取音乐文件
- [X] 获取歌词
- [X] 播放
- [X] 自动播放
- [X] 上一首
- [X] 下一首
- [X] 音量控制
- [X] 显示歌曲写真，暂停时固定，播放时旋转
- [X] 显示制作人、歌名
- [X] 显示播放时长
- [X] 显示歌单
- [X] 显示歌词
- [X] 控制播放时长
- [X] 循环播放：单曲循环、顺序播放、歌单循环、随机播放
- [X] 节流（按钮，audio时间）
- [X] 全局播放
- [X] 导航栏Mini播放器：模式切换、播放控制、音量控制、循环类型切换、获取歌单
- [X] 沉浸式播放器：登录登出、歌词滚动、获取歌单、歌单定位、歌单刷新、歌曲搜索、 绑定快捷键

[完整代码参考](https://github.com/RayShineHub/RayShineHub.github.io/blob/main/src/.vuepress/components/NavPlayer.vue)

## Step 2 集成环境
1. [NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/)
2. [Vue2](https://cn.vuejs.org/)
3. [iconfont](https://www.iconfont.cn/)
4. [Axios](http://www.axios-js.com/docs/vue-axios.html)
5. [VuePress](https://vuepress.vuejs.org/zh/)
6. [Html Audio组件](https://www.runoob.com/tags/tag-audio.html)

## Step 3 部署网易云音乐API服务
::: theorem 方法1：不需要部署，直接请求网易云官方API <Badge text="不推荐" type="error" vertical="top"/>
```js
'https://autumnfish.cn'
```
:::

::: theorem 方法2：使用开源托管平台 Vercel 部署 <Badge text="推荐" type="success" vertical="top"/>
- `Vercel` 开源免费，不需要自己搭建服务器。
- `NeteaseCloudMusicApi v4.0.8` 增加了 `Vercel` 配置文件，部署方式简单。
- 操作步骤
  1. 将 `NeteaseCloudMusicApi` 源码克隆到自己的 **GitHub** 仓库。
  2. 注册 `Vercel` 账号。
  3. 创建一个项目。
  3. 点击 `Import Git Repository`,将指定项目克隆到托管平台。
  4. 点击 `Deploy` 就可以完成部署。
:::

::: theorem 方法3：使用私有服务器部署<Badge text="不推荐" type="warning" vertical="top"/>
- 需要有一台私有服务器。
- 需要配置 `NodeJs` 、 `Docker` 或 `npx` 环境。
- 需要配置 `Nginx` 代理。

如需自行部署，[点这里](https://neteasecloudmusicapi.vercel.app/#/?id=%e8%bf%90%e8%a1%8c)
:::

## Step 4 `NavPlayer` 开发
自行开发请忽略
### 页面及样式

```vue
<template>
  <div class="nav-music" v-if="isPC"
    :style="linksWrapOffsetWidth ? {'right': linksWrapOffsetWidth + 'px'} : {}">
    <div class="img-box">
      <img class="avatar" :class="{playing: isPlaying}"
      :src="currentMusic? currentMusic.cover : ''"
      />
    </div>
    <!-- 播放时长 歌手-歌名 -->
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
      <!-- 上一首、播放/暂停、下一首、音量-、音量+ 按钮-->
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
    <!-- 引入Html Audio组件 -->
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
```

- **\<audio>** 标签常用属性。

| 属性 | 定义 | 用途 |
|------|-----|------|
| `autoplay` | 自动播放 | 设置初次加载是否自动播放音频 |
| `src` | 音频文件访问地址 | 加载音频文件 |
| `volume` | 播放音量 | 设置播放音量 |
| `@play` | 播放事件回调 | 切换播放状态图标 |
| `@pause` | 暂停事件回调 | 切换播放状态图标 |
| `@loadedmetadata` | 音频文件加载完毕回调 | 查询音频文件播放总时长（maxTime） |
| `@timeupdate` | 播放时当前时间变更回调 | 监控剩余播放时长 <br /> **注意：1s触发3~4次，需要节流** | 
| `@ended` | 播放结束回调 | 自动播放下一首 |

### 获取歌单列表

1. 获取指定ID的歌单
2. 通过歌单ID获取歌曲详情

```js
/**
 * @description: Add by RayShine 获取歌单列表
 * @param {*} playlistId
 * @return {*}
 */    
getMusicList(playlistId = '144719593'){
  let that = this
  let sort = 0
  // 获取音乐文件   /playlist/detail?id=123412
  axios({
    baseURL: that.$themeConfig.back.musicUrl,
    url: "/playlist/detail?id=" + playlistId,
    withCredentials: true   // 跨域解决方案
  }).then(function(response) {
    if (response.status === 200 && response.data.code === 200) {
      // 提取歌单中所有歌曲ID
      let ids = response.data.playlist.trackIds.filter((track) => {
        return track.id
      }).map((track) => {
        return track.id
      }).join(',')

      // 获取所有音乐详情   /song/detail?ids=111,111,111
      // 记录一下获取歌词   /lyric?id=  
      axios({
        baseURL: that.$themeConfig.back.musicUrl,
        url: "/song/detail?ids=" + ids,
        withCredentials: true
      }).then(function(response) {
        if (response.status === 200 && response.data.code === 200) {
          
          // 提取需要展示的歌曲详情
          that.musicList = response.data.songs.map((song) => {
            // 提取音质列表
            let brList = response.data.privileges.filter((privilege) => {
              return privilege.id == song.id
            }).map((br) => {
              return br.chargeInfoList.map((chargeInfo) => {
                return chargeInfo.rate
              })
            })[0]
            return {
              musicId: song.id,             // 歌曲ID
              name: song.name || '',        // 歌曲名称
              artist: song.ar[0].name || '',// 歌手名称
              cover: song.al.picUrl || '',  // 歌曲图片
              brList,                       // 音质列表
              sort: sort++
            }
          })
          // 加载一首歌
          that.getCurrentMusic('first')
        }
      }, function(err) {
        console.log(err);
      });
    }
  }, function(err) {
    that.currentMusic.artist = '歌单获取失败'
    console.log(err);
  });
}
```

### 获取音频文件地址

**歌曲详情** 接口中没有音频文件地址，需要单独获取

1. 检查歌曲是否可用
2. 获取音频文件地址
3. 如地址是 `http` 转换为 `https`
4. 自动播放设置
5. 错误处理

```js
/**
 * @description: Add by RayShine 获取当前歌曲，支持自动播放
 * @param {*} musicId
 * @return {*}
 */    
getMusic(musicId = '1868943615', br = 128000, type) {
  let that = this
  // 检查音乐是否可用 /check/music?id=123&br=128000
  axios({
    baseURL: that.$themeConfig.back.musicUrl,
    url:"/check/music?id=" + musicId + '&br=' + br,
    withCredentials: true
  }).then(function(response) {
    // 返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
    if (response.status === 200 && response.data.success) {
      // 获取音乐文件 /song/url?id=123&br=128000
      axios({
        baseURL: that.$themeConfig.back.musicUrl,
        url:"/song/url?id=" + musicId + '&br=' + 320000,
        withCredentials: true
      }).then(function(response) {
        if (response.status === 200) {
          // 替换 http 为 https
          that.currentMusic.url = response.data.data[0].url.match('^http://') ?  response.data.data[0].url.replace("http://","https://") : response.data.data[0].url;
          that.$refs.audio.volume = that.defaultVolume
          // 显示默认音量
          that.currentMusic.volume = that.$refs.audio.volume
          // 首次加载歌单，是否自动播放取决于用户设置
          if ((type != 'first' || (type == 'first' && that.autoPlay)) && that.playHistory) setTimeout(() => { that.$refs.audio.play() }, 2000)
        }
      }, function(err) {
        console.log(err);
      });
    }
  }, function(err) {
    that.currentMusic.artist = err.response.data.message
    that.currentMusic.url = ''
    that.currentMusic.name = ''
    that.currentMusic.currentTime = ''
    setTimeout(() => { that.next() }, 2000)
    console.log(err);
  });
}
```

### <Icon type="rays-play"/> <Icon type="rays-pause"/> 播放/暂停

```js
/**
 * @description: Add by RayShine 播放与暂停切换 需要防抖
 * @return {*}
 */   
onPlay () {
  return this.isPlaying ? this.$refs.audio.pause() : this.$refs.audio.play()
}
```

### <Icon type="rays-prev-face"/> 上一首

```js
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
}
```

### <Icon type="rays-next-face"/> 下一首

```js
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
}
```

### 更新当前播放时间

```js
/**
 * @description: Add by RayShine 更新当前播放时间 需要节流
 * @param {*} res
 * @return {*}
 */    
onTimeupdate(e) {
  this.currentMusic.currentTime = this.transTime(this.currentMusic.duration - e.target.currentTime)
}
```

### 获取音频总时长

```js
/**
 * @description: Add by RayShine 获取音频总时长
 * @return {*}
 */ 
onLoadedmetadata(e) {
  this.currentMusic.duration = e.target.duration
  this.currentMusic.maxTime = this.transTime(e.target.duration)
  this.currentMusic.currentTime = this.currentMusic.maxTime
}
```

### 播放时间转换

```js
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
}
```

### <Icon type="rays-volume-add"/> 音量控制

```js
/**
 * @description: Add by RayShine 声音控制器 需要防抖
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
```

## 鸣谢
[NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/)
<br />
[Vercel](https://vercel.com/)
<br />
[虚心的小白菜 - audio标签的使用方式](https://blog.csdn.net/Lei2021_type/article/details/124156999)