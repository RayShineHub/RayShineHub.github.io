

module.exports = [
  //Home
  { text: "主页", link: "/", icon: "reco-home" }, 
  //TimeLine
  { text: "时间轴", link: "/timeline/", icon: "reco-date" }, 
	//Contact
	{
	  text: "收藏", 
	  icon: "rays-shoucang-4",
	  items: [
	    {
	      text: "精美壁纸",
	      link: "https://wallhaven.cc/",
	      icon: "rays-tupianbizhi"
	    },
      {
        text: "印记中文",
        link: "https://docschina.org/",
        icon: "rays-lianjie"
      }
	  ],
	},
  //About
  { text: "关于我", link: "/about/", icon: "reco-account" }, 
  //Contact
  // {
  //   text: "联系我", 
  //   icon: "reco-message",
  //   items: [
  //     {
  //       text: "GitHub",
  //       link: "https://github.com/RayShineHub",
  //       icon: "reco-github",
  //     }
  //   ],
  // },
];
