(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{472:function(t,i,s){},530:function(t,i,s){"use strict";var e=s(472);s.n(e).a},553:function(t,i,s){"use strict";s.r(i);var e=s(529),n=s.n(e),a={},r={props:{gistId:{type:String,required:!0},file:{type:String,required:!1,default:""}},data:function(){return{gistData:"loading..."}},created:function(){this.getGistData(this.gistId)},methods:{getGistData:function(t){var i=this;this.file.length>0&&(a.file=this.file),n.a.ajax({url:"https://gist.github.com/"+t+".json",data:a,dataType:"jsonp",timeout:2e4,success:function(t){i.gistData=t.div},error:function(t){console.log("error")}})}}},o=(s(530),s(5)),u=Object(o.a)(r,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"div-style"},[i("p",{domProps:{innerHTML:this._s(this.gistData)}})])}),[],!1,null,"bf69bdc4",null);i.default=u.exports}}]);