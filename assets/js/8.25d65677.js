(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{438:function(t,s,i){},449:function(t,s,i){"use strict";i(438)},463:function(t,s,i){"use strict";i.r(s);var e={name:"word-cloud",data:()=>({width:270,height:300,tagsNum:0,RADIUS:120,speedX:Math.PI/360/1.5,speedY:Math.PI/360/1.5,tags:[],data:["金晨","昆凌","李冰冰","刘诗诗","刘雯","刘亦菲","林心如","林志玲","李湘","李亚男","李若彤","李沁","李嘉欣","林依晨","刘嘉玲","闰妮","李宇春","李晟","罗震环","刘雨欣","李波儿","黎姿","张敏","梁小冰","黎美娴","李彩桦","林允儿","米雪","李菲儿","娄艺潇","李金铭","李萌萌"],timer:null}),computed:{CX(){return this.width/2},CY(){return this.height/2}},created(){this.initData()},methods:{initData(){let t=[];this.tagsNum=this.data.length;for(let s=0;s<this.data.length;s++){let i={},e=(2*(s+1)-1)/this.tagsNum-1,a=Math.acos(e),h=a*Math.sqrt(this.tagsNum*Math.PI);i.text=this.data[s],i.x=this.CX+this.RADIUS*Math.sin(a)*Math.cos(h),i.y=this.CY+this.RADIUS*Math.sin(a)*Math.sin(h),i.z=this.RADIUS*Math.cos(a),i.id=s,t.push(i)}this.tags=t},rotateX(t){var s=Math.cos(t),i=Math.sin(t);for(let t of this.tags){var e=(t.y-this.CY)*s-t.z*i+this.CY,a=t.z*s+(t.y-this.CY)*i;t.y=e,t.z=a}},rotateY(t){var s=Math.cos(t),i=Math.sin(t);for(let t of this.tags){var e=(t.x-this.CX)*s-t.z*i+this.CX,a=t.z*s+(t.x-this.CX)*i;t.x=e,t.z=a}},runTags(){"number"==typeof this.timer&&(clearInterval(this.timer),this.timer=null);let t=setInterval(()=>{this.rotateX(this.speedX),this.rotateY(this.speedY)},17);this.timer=t},listenerMove(t){t.target.id&&clearInterval(this.timer)},listenerOut(t){t.target.id&&this.runTags()},clickToPage(){}},mounted(){this.runTags()}},a=(i(449),i(1)),h=Object(a.a)(e,(function(){var t=this,s=t._self._c;return s("div",[s("svg",{attrs:{width:t.width,height:t.height}},t._l(t.tags,(function(i,e){return s("a",{key:"tag-"+e,staticClass:"fontA"},[s("text",{attrs:{id:i.id,x:i.x,y:i.y,"font-size":270/(400-i.z)*20,"fill-opacity":(400+i.z)/600},on:{mousemove:function(s){return t.listenerMove(s)},mouseout:function(s){return t.listenerOut(s)},click:t.clickToPage}},[t._v("\n        "+t._s(i.text)+"\n      ")])])})),0)])}),[],!1,null,"09b7e03a",null);s.default=h.exports}}]);