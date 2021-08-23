(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/contentList/contentList"],{"2c38":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"contentList",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{cardClick:function(n){console.log(n),this.vk.navigateTo("/pages/tutorial/tutorial?id="+n)}}};t.default=u},"3e32":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}));var u={uCard:function(){return e.e("node-modules/uview-ui/components/u-card/u-card").then(e.bind(null,"0877"))},uAvatar:function(){return e.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(e.bind(null,"95bc"))},uImage:function(){return e.e("node-modules/uview-ui/components/u-image/u-image").then(e.bind(null,"9f9b"))}},o=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.list,(function(t,e){var u=n.__get_orig(t),o=n.vk.pubfn.dateDiff(t._add_time);return{$orig:u,g0:o}})));n.$mp.data=Object.assign({},{$root:{l0:e}})},r=[]},"6dce":function(n,t,e){"use strict";e.r(t);var u=e("3e32"),o=e("f00c4");for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);var a,i=e("f0c5"),c=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=c.exports},f00c4:function(n,t,e){"use strict";e.r(t);var u=e("2c38"),o=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/contentList/contentList-create-component',
    {
        'components/contentList/contentList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6dce"))
        })
    },
    [['components/contentList/contentList-create-component']]
]);
