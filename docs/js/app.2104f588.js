(function(e){function t(t){for(var a,o,s=t[0],u=t[1],d=t[2],p=0,c=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&c.push(i[o][0]),i[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(c.length)c.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},i={app:0},n=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/notionyellow/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=u;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"027b":function(e,t,r){},"304e":function(e,t,r){"use strict";var a=r("027b"),i=r.n(a);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[e._m(0),r("div",{staticClass:"videoFrame",staticStyle:{width:"1285px",height:"400px",border:"0px solid #000"}},[r("div",{staticClass:"videoFrameLeft",staticStyle:{float:"left",width:"640px",height:"370px",border:"0px solid #000"}},[r("youtube",{attrs:{"video-id":"IgTZMFIjnXQ","player-vars":{start:0,autoplay:1}},on:{ready:e.ready,ended:e.ended,playing:e.playing,paused:e.paused,buffering:e.buffering,qued:e.qued}})],1),r("div",{staticClass:"videoFrameRight",staticStyle:{float:"right",width:"640px",height:"370px",border:"0px solid #000"}},[r("youtube",{attrs:{"video-id":"-JatHU_PAns","player-vars":{start:0,autoplay:1}},on:{ready:e.ready,ended:e.ended,playing:e.playing,paused:e.paused,buffering:e.buffering,qued:e.qued}})],1)]),r("div",{staticClass:"videoFrame",staticStyle:{width:"1285px",height:"400px",border:"0px solid #000"}},[r("div",{staticClass:"videoFrameLeft",staticStyle:{float:"left",width:"640px",height:"370px",border:"0px solid #000"}},[r("youtube",{attrs:{"video-id":e.videoIDLowerLeft,"player-vars":{start:0,autoplay:1}},on:{ready:e.ready,ended:e.ended,playing:e.playing,paused:e.paused,buffering:e.buffering,qued:e.qued}})],1),r("div",{staticClass:"videoFrameRight",staticStyle:{float:"right",width:"640px",height:"370px",border:"0px solid #000"}},[r("youtube",{attrs:{"video-id":e.videoIDLowerRight,"player-vars":{start:0,autoplay:1}},on:{ready:e.ready,ended:e.ended,playing:e.playing,paused:e.paused,buffering:e.buffering,qued:e.qued}})],1)]),r("div",{staticClass:"linkInputArea"},[r("div",{staticClass:"b-row"},[e._m(1),r("b-container",{attrs:{fluid:""}},[r("div",[r("b-row",{staticClass:"my-1"},[r("label",{attrs:{for:"youtubeLink"}},[e._v(" YouTube Link ")])]),r("b-row",[r("b-form-input",{attrs:{id:"youtubeLink",placeholder:"Input YouTube Link"},model:{value:e.youtubeLink,callback:function(t){e.youtubeLink=t},expression:"youtubeLink"}})],1)],1)]),r("div",[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"videoReplace"}},[e._v(" Replace Video ")])]),r("b-col",{attrs:{sm:"9"}},[r("b-button",{attrs:{variant:"primary"},on:{"~click":function(t){return e.videoUpperLeft(t)}}},[e._v("Upper Left Video")]),r("b-button",{attrs:{variant:"primary"},on:{"~click":function(t){return e.videoUpperRight(t)}}},[e._v("Upper Right Video")]),r("b-button",{attrs:{variant:"primary"},on:{click:e.replacevideoLowerLeft}},[e._v("Lower Left Video")]),r("b-button",{attrs:{variant:"primary"},on:{click:e.replacevideoLowerRight}},[e._v("Lower Right Video")])],1)],1)],1),r("div",[r("b-row",{staticClass:"my-2"},[r("label",{attrs:{for:"shareMethod"}},[e._v(" Choose Royalty Share Method ")])]),r("b-row",[r("b-button",{attrs:{pressed:e.averageShareMethod,variant:"primary"},on:{"update:pressed":function(t){e.averageShareMethod=t}}},[e._v("Average Share")]),r("p",[e._v("Average Share Status: "),r("strong",[e._v(e._s(e.averageShareMethod))])])],1),r("b-row",[r("b-button",{attrs:{pressed:e.radomShareMethod,variant:"primary"},on:{"update:pressed":function(t){e.radomShareMethod=t}}},[e._v("Random Share")]),r("p",[e._v("Random Share Status: "),r("strong",[e._v(e._s(e.radomShareMethod))])])],1)],1),r("div",[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"inputName"}},[e._v(" Account ")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{attrs:{id:"inputName",placeholder:"Input Account"},model:{value:e.inputName,callback:function(t){e.inputName=t},expression:"inputName"}})],1)],1)],1),r("div",[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"minimumShare"}},[e._v(" Minimum Share ")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{attrs:{id:"minimumShare",placeholder:"Input Minimum Share between 100 and 0 as Integer"},model:{value:e.minimumShare,callback:function(t){e.minimumShare=t},expression:"minimumShare"}})],1)],1)],1),r("div",[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"Description"}},[e._v(" Remark ")])]),r("b-col",{attrs:{sm:"12"}},[r("br"),r("b-form-textarea",{attrs:{id:"Description",rows:"3"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)],1)],1),r("div",[r("b-button",{attrs:{pill:"",variant:"outline-secondary",pressed:e.agreeButton},on:{click:e.agreeParticipate,"update:pressed":function(t){e.agreeButton=t}}},[e._v(" Agree Creating New Page ")]),r("p",[e._v("Agreement Status: "),r("strong",[e._v(e._s(e.agreeButton))])])],1)],1)])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tagetSale"},[r("h3",[e._v("Notion On-Line Sales: CHELSEA FLAP SHOULDER BAG")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Create New Page")])])}],o=(r("a4d3"),r("e01a"),r("e0ec")),s=r.n(o),u=r("5f5b"),d=r("9fab"),l=r.n(d);a["default"].use(s.a),a["default"].use(u["a"]);var p={data:function(){return{videoIDLowerRight:"Yn_Iex3hNRY",videoIDLowerLeft:"NM5922pkxCs",averageShareMethod:!1,radomShareMethod:!1,agreeButton:!1,firstPlayerInfor:{},inputName:"",minimumShare:"",description:""}},props:{youtubeLink:{type:String,default:function(){return""}}},methods:{replacevideoLowerRight:function(){this.videoIDLowerRight=l()(this.youtubeLink)},replacevideoLowerLeft:function(){this.videoIDLowerLeft=l()(this.youtubeLink)},videoUpperLeft:function(){alert("It is Guns and Roses! Whats matter with you")},videoUpperRight:function(){alert("It is Guns and Roses! Whats matter with you")},agreeParticipate:function(){this.inputName&&this.minimumShare||alert("please don't leave empty space");var e={playerName:this.inputName,PlayerShare:this.minimumShare,playerRemark:this.description};JSON.stringify(e),this.inputName="",this.minimumShare="",this.description=""}}},c=p,f=(r("304e"),r("2877")),h=Object(f["a"])(c,i,n,!1,null,null,null),v=h.exports;a["default"].use(u["a"]),a["default"].use(s.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.2104f588.js.map