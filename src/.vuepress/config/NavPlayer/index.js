/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-07-11 13:40:38
 * @LastEditors: Ray Shine spf1773@gmail.com
 * @LastEditTime: 2023-03-01 11:56:14
 * @FilePath: \RayShineHub\src\.vuepress\config\NavPlayer\index.js
 * @Description: Create by RayShine 导航栏音乐播放器配置
 * 
 * Copyright (c) 2022 by pengfei.shao 570165036@qq.com, All Rights Reserved. 
 */

module.exports = {
  playlistId: '144719593',
  playType: 'playorder',   // playsingle 单曲循环, playloop 列表循环, playorder 列表顺序, playrandom 随机
  autoPlay: false,
  volumeStep: 0.1,
  defaultVolume: 0.2,
  catgList: [    // 歌单
    {
      name:'推荐歌单',
      index: 'mine',
      id: '144719593'
    },
    //  要登录
    // {
    //   name: '我喜欢',
    //   index: 'like',
    //   id: '130541802'
    // },
    {
      name:'游戏必备',
      index: 'dj',
      id: '946216567'
    }
  ]
};