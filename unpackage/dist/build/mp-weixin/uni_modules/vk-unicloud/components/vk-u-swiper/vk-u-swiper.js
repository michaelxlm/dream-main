(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/vk-unicloud/components/vk-u-swiper/vk-u-swiper"],{"0de3":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l={name:"vk-u-swiper",props:{dataId:{type:String,default:function(){return""}},datas:{type:Object,default:function(){return{}}},customDatas:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{onClick:function(t){this.$emit("click",t)},onChange:function(t){this.$emit("change",t)},getValue:function(t,a){var e=this.customDatas,l=this.datas;e||(e={}),l||(l={});var n=e[t];return"undefined"===typeof n&&(n=l[t],"undefined"===typeof n&&(n=a)),n}}};a.default=l},"285e":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return l}));var l={uSwiper:function(){return e.e("node-modules/uview-ui/components/u-swiper/u-swiper").then(e.bind(null,"e7a9"))},uImage:function(){return e.e("node-modules/uview-ui/components/u-image/u-image").then(e.bind(null,"e32b"))}},n=function(){var t=this,a=t.$createElement,e=(t._self._c,t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("list"):null),l=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("title"):null,n=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("mode","round"):null,s=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("height",300):null,u=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("indicator-pos","bottomCenter"):null,i=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("autoplay",!0):null,d=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("interval",2500):null,r=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("circular",!0):null,o=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("duration",500):null,c=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("border-radius",8):null,g=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("title-style"):null,f=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("img-mode","aspectFill"):null,m=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("name","image"):null,h=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("bg-color","#f3f4f6"):null,p=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("current",0):null,v=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("effect3d"):null,V=t.datas&&t.datas.list&&t.datas.list.length>0?t.getValue("effect3d-previous-margin",50):null,b=t.datas&&t.datas.list&&t.datas.list.length>0?null:t.getValue("height",300);t.$mp.data=Object.assign({},{$root:{m0:e,m1:l,m2:n,m3:s,m4:u,m5:i,m6:d,m7:r,m8:o,m9:c,m10:g,m11:f,m12:m,m13:h,m14:p,m15:v,m16:V,m17:b}})},s=[]},a30d:function(t,a,e){"use strict";e.r(a);var l=e("285e"),n=e("d47a");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);var u,i=e("f0c5"),d=Object(i["a"])(n["default"],l["b"],l["c"],!1,null,"3449b9c4",null,!1,l["a"],u);a["default"]=d.exports},d47a:function(t,a,e){"use strict";e.r(a);var l=e("0de3"),n=e.n(l);for(var s in l)"default"!==s&&function(t){e.d(a,t,(function(){return l[t]}))}(s);a["default"]=n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/vk-unicloud/components/vk-u-swiper/vk-u-swiper-create-component',
    {
        'uni_modules/vk-unicloud/components/vk-u-swiper/vk-u-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a30d"))
        })
    },
    [['uni_modules/vk-unicloud/components/vk-u-swiper/vk-u-swiper-create-component']]
]);
