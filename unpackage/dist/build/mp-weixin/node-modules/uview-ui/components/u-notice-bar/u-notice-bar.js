(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-notice-bar/u-notice-bar"],{"203e":function(e,t,n){"use strict";var o=n("9e25"),u=n.n(o);u.a},"2fa6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"u-notice-bar",props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},volumeSize:{type:[Number,String],default:34},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},mode:{type:String,default:"horizontal"},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:28},duration:{type:[Number,String],default:2e3},speed:{type:[Number,String],default:160},isCircular:{type:Boolean,default:!0},playState:{type:String,default:"play"},disableTouch:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},padding:{type:[Number,String],default:"18rpx 24rpx"},noListHidden:{type:Boolean,default:!0}},computed:{isShow:function(){return 0!=this.show&&(1!=this.noListHidden||0!=this.list.length)}},methods:{click:function(e){this.$emit("click",e)},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")},end:function(){this.$emit("end")}}};t.default=o},"81eb":function(e,t,n){"use strict";n.r(t);var o=n("8aea"),u=n("e0aa");for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n("203e");var a,r=n("f0c5"),l=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,"3e593176",null,!1,o["a"],a);t["default"]=l.exports},"8aea":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={uRowNotice:function(){return n.e("node-modules/uview-ui/components/u-row-notice/u-row-notice").then(n.bind(null,"9cbd"))},uColumnNotice:function(){return n.e("node-modules/uview-ui/components/u-column-notice/u-column-notice").then(n.bind(null,"8ab2"))}},u=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"9e25":function(e,t,n){},e0aa:function(e,t,n){"use strict";n.r(t);var o=n("2fa6"),u=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component',
    {
        'node-modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("81eb"))
        })
    },
    [['node-modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component']]
]);
