(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{365:function(t,i,e){},372:function(t,i,e){"use strict";e(365)},422:function(t,i,e){"use strict";e.r(i);var s=e(5),r=e.n(s),n={data:()=>({isPC:!0,playHistory:!1,isPlaying:!1,musicList:[],currentMusic:{musicId:"",currentTime:0,maxTime:0,duration:0,volume:.2,name:"",artist:"",url:"",cover:"https://p2.music.126.net/3MaeDnsU61e96WlH5-hoaQ==/109951163195183343.jpg",lrc:"",sort:0,brList:[]},linksWrapOffsetWidth:null,linksWrapMaxWidth:null,fixedHeight:0,pageYOffset:44,isFixed:!1,isVisible:!1}),computed:{playlistId(){return this.$themeConfig.NavPlayer.playlistId||""},autoPlay(){return this.$themeConfig.NavPlayer.autoPlay||!1},volumeStep(){return this.$themeConfig.NavPlayer.volumeStep||.2},defaultVolume(){return this.$themeConfig.NavPlayer.defaultVolume||.2},playType(){return this.$themeConfig.NavPlayer.playType||"random"}},watch:{},mounted(){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.isPC=!1:(this.isPC=!0,this.getMusicList(this.playlistId)),this.handleLinksWrapWidth(),window.addEventListener("resize",this.handleLinksWrapWidth,!1),window.addEventListener("scroll",this.throttle(this.handleScroll,500))},beforeDestroy(){window.removeEventListener("scroll",this.throttle(this.handleScroll,1e3))},methods:{handleLinksWrapWidth(){let t=this,i=document.querySelector(".nav-sub")&&document.querySelector(".nav-sub").offsetWidth||726;document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapOffsetWidth=document.querySelector(".links")&&document.querySelector(".links").offsetWidth||726,(null==t.linksWrapOffsetWidth||t.linksWrapOffsetWidth>i)&&setTimeout(()=>{this.handleLinksWrapWidth()},2e3)},handleScroll(){this.isFixed=window.pageYOffset>this.fixedHeight,this.throttle(this.handleVisible(),1e3)},handleVisible(){this.isVisible=window.pageYOffset<this.pageYOffset&&window.pageYOffset>0,this.pageYOffset=window.pageYOffset},throttle(t,i=200){let e=null,s=Date.now();return function(){const r=Date.now(),n=i-(r-s),a=this,u=arguments;clearTimeout(e),n<=0?(t.apply(a,u),s=Date.now()):e=setTimeout(t,n)}},getMusicList(t="144719593"){let i=this,e=0;r()({baseURL:i.$themeConfig.back.musicUrl,url:"/playlist/detail?id="+t,withCredentials:!0}).then((function(t){if(200===t.status&&200===t.data.code){let s=t.data.playlist.trackIds.filter(t=>t.id).map(t=>t.id).join(",");r()({baseURL:i.$themeConfig.back.musicUrl,url:"/song/detail?ids="+s,withCredentials:!0}).then((function(t){200===t.status&&200===t.data.code&&(i.musicList=t.data.songs.map(i=>{let s=t.data.privileges.filter(t=>t.id==i.id).map(t=>t.chargeInfoList.map(t=>t.rate))[0];return{musicId:i.id,name:i.name||"",artist:i.ar[0].name||"",cover:i.al.picUrl||"",brList:s,sort:e++}}),i.getCurrentMusic("first"))}),(function(t){i.currentMusic.artist=t.response.data.message,i.currentMusic.currentTime=0,console.log(t)}))}}),(function(t){i.currentMusic.artist="歌单获取失败",i.currentMusic.currentTime=0,console.log(t)}))},getCurrentMusic(t="first"){if("random"==this.playType){let t=this.musicList.filter(t=>t.musicId!=this.currentMusic.musicId);this.currentMusic=Object.assign({},this.currentMusic,t[Math.floor(Math.random()*t.length)])}else if("first"===t)this.currentMusic=Object.assign({},this.currentMusic,this.musicList[0]);else{let i="prev"==t?this.currentMusic.sort--:this.currentMusic.sort++;"next"===t&&i>this.musicList.length-1?i=0:"prev"===t&&i<0&&(i=this.musicList.length-1),this.currentMusic=Object.assign({},this.currentMusic,this.musicList[i])}this.getMusic(this.currentMusic.musicId,this.currentMusic.brList[this.currentMusic.brList.length-1],t)},getMusic(t="1868943615",i=128e3,e){let s=this;""!==t&&r()({baseURL:s.$themeConfig.back.musicUrl,url:"/check/music?id="+t+"&br="+i,withCredentials:!0}).then((function(n){200===n.status&&n.data.success&&r()({baseURL:s.$themeConfig.back.musicUrl,url:"/song/url?id="+t+"&br="+i,withCredentials:!0}).then((function(t){200===t.status&&(s.currentMusic.url=t.data.data[0].url.match("^http://")?t.data.data[0].url.replace("http://","https://"):t.data.data[0].url,s.$refs.audio.volume=s.defaultVolume,s.currentMusic.volume=s.$refs.audio.volume,("first"!=e||"first"==e&&s.autoPlay)&&s.playHistory&&setTimeout(()=>{s.$refs.audio.play()},2e3))}),(function(t){console.log(t)}))}),(function(t){s.currentMusic.artist=t.response.data.message,s.currentMusic.url="",s.currentMusic.name="",s.currentMusic.currentTime=0,setTimeout(()=>{s.next()},2e3),console.log(t)}))},onPlay(){return this.isPlaying?this.$refs.audio.pause():this.$refs.audio.play()},play(){this.playHistory=!1,this.isPlaying=!0},pause(){this.playHistory=!0,this.isPlaying=!1},next(t){this.$refs.audio.pause(),this.getCurrentMusic("next")},prev(t){this.$refs.audio.pause(),this.getCurrentMusic("prev")},transTime(t){var i=parseInt(t),e=parseInt(i/60),s=i%60+"";return 0===e?e="00":e<10&&(e="0"+e),1===s.length&&(s="0"+s),e+":"+s},onTimeupdate(t){this.currentMusic.currentTime=this.transTime(this.currentMusic.duration-t.target.currentTime)},onLoadedmetadata(t){this.currentMusic.duration=t.target.duration,this.currentMusic.maxTime=this.transTime(t.target.duration),this.currentMusic.currentTime=this.currentMusic.maxTime},onEnded(t){this.next()},onVolume(t){let i=parseInt(10*this.$refs.audio.volume),e=10*this.volumeStep;this.$refs.audio.volume="jian"===t?i-e<=0?0:(parseInt(10*this.$refs.audio.volume)-e)/10:i+e>=10?1:(parseInt(10*this.$refs.audio.volume)+e)/10,this.currentMusic.volume=this.$refs.audio.volume}}},a=(e(372),e(4)),u=Object(a.a)(n,(function(){var t=this,i=t._self._c;return t.isPC&&null!=t.linksWrapOffsetWidth?i("div",{staticClass:"nav-music",class:{pagefull:(t.$frontmatter.layout||t.$themeConfig.fullscreen&&t.$frontmatter.isFull||t.$frontmatter.home)&&!t.isFixed,fixed:t.isFixed,visible:t.isVisible},style:t.linksWrapOffsetWidth?{right:t.linksWrapOffsetWidth+"px"}:{}},[i("div",{staticClass:"img-box"},[i("img",{staticClass:"avatar",class:{playing:t.isPlaying},attrs:{src:t.currentMusic?t.currentMusic.cover:""}})]),t._v(" "),i("div",{staticClass:"actions"},[i("div",{staticClass:"title"},[0!=t.currentMusic.currentTime?i("div",{staticClass:"time"},[i("span",{staticStyle:{"margin-right":"0.1rem"}},[t._v("\n          "+t._s(0==t.currentMusic.currentTime?"":t.currentMusic.currentTime)+"\n        ")])]):t._e(),t._v(" "),i("div",{staticClass:"title-name"},[i("span",[t._v("\n          "+t._s(t.currentMusic.artist||"")+" "+t._s(t.currentMusic.name?" - ":"")+"  "+t._s(t.currentMusic.name||"")+"  \n        ")])])]),t._v(" "),i("div",{staticClass:"action-bar"},[i("i",{staticClass:"iconfont rays-bofang04-mianxing",on:{click:t.prev}}),t._v(" "),t.isPlaying?t._e():i("i",{staticClass:"iconfont rays-bofang",on:{click:t.onPlay}}),t._v(" "),t.isPlaying?i("i",{staticClass:"iconfont rays-zanting",on:{click:t.onPlay}}):t._e(),t._v(" "),i("i",{staticClass:"iconfont rays-bofang05-mianxing",on:{click:t.next}}),t._v(" "),t.currentMusic.volume<=0?i("i",{staticClass:"iconfont rays-shengyin-jinyin",staticStyle:{"margin-left":"1rem"}}):t._e(),t._v(" "),t.currentMusic.volume>0?i("i",{staticClass:"iconfont rays-shengyin-jian",staticStyle:{"margin-left":"1rem"},on:{click:function(i){return t.onVolume("jian")}}}):t._e(),t._v(" "),i("span",{staticClass:"volume"},[t._v(t._s(parseInt(10*t.currentMusic.volume)))]),t._v(" "),i("i",{staticClass:"iconfont rays-shengyin-jia",on:{click:function(i){return t.onVolume("jia")}}})])]),t._v(" "),i("audio",{ref:"audio",attrs:{autoplay:!1,src:t.currentMusic.url,volume:t.currentMusic.volume},on:{play:t.play,pause:t.pause,loadedmetadata:t.onLoadedmetadata,timeupdate:t.onTimeupdate,ended:t.onEnded}})]):t._e()}),[],!1,null,"0332a764",null);i.default=u.exports}}]);