(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/contentList/contentList"],{"256f":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"contentList",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{cardClick:function(n){console.log(n),this.vk.navigateTo("/pages/tutorial/tutorial?id="+n)}}};t.default=u},"88d0":function(n,t,e){"use strict";e.r(t);var u=e("fb14"),a=e("9a7f");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);var r,i=e("f0c5"),c=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=c.exports},"9a7f":function(n,t,e){"use strict";e.r(t);var u=e("256f"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);t["default"]=a.a},fb14:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return u}));var u={uCard:function(){return e.e("node-modules/uview-ui/components/u-card/u-card").then(e.bind(null,"62e4"))},uAvatar:function(){return e.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(e.bind(null,"beaa"))},uImage:function(){return e.e("node-modules/uview-ui/components/u-image/u-image").then(e.bind(null,"e32b"))}},a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.list,(function(t,e){var u=n.__get_orig(t),a=n.vk.pubfn.dateDiff(t._add_time);return{$orig:u,g0:a}})));n.$mp.data=Object.assign({},{$root:{l0:e}})},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/contentList/contentList-create-component',
    {
        'components/contentList/contentList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("88d0"))
        })
    },
    [['components/contentList/contentList-create-component']]
]);
