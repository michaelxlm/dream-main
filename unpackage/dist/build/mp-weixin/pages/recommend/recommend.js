(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/recommend/recommend"],{"4ab6":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var o={contentList:function(){return e.e("components/contentList/contentList").then(e.bind(null,"88d0"))},uBackTop:function(){return e.e("node-modules/uview-ui/components/u-back-top/u-back-top").then(e.bind(null,"7376"))}},i=function(){var t=this,n=t.$createElement;t._self._c},c=[]},"7b4a":function(t,n,e){"use strict";e.r(n);var o=e("4ab6"),i=e("b6e7");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);var a,r=e("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=u.exports},"8ce2":function(t,n,e){"use strict";(function(t){e("3d10"),e("921b");o(e("66fd"));var n=o(e("7b4a"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"8f55":function(t,n,e){"use strict";(function(t){var e,o;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{url:"client/general/pub/getList",data:{list:[],hasMore:!1},form1:{dbName:"tw",whereJson:{status:0},sortArr:[{name:"_add_time",type:"desc"}],pageIndex:1,pageSize:10},componentsDynamic:{},scrollTop:0}},computed:{recommendSettingList:function(){return this.componentsDynamic["recommendSetting"]?this.componentsDynamic["recommendSetting"]["list"]:[]}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=this,o=e.vk,e.options=t,o.pubfn.getComponentsDynamicData({that:e,ids:["recommendSetting"]})},onReady:function(){e.init()},onNavigationBarButtonTap:function(t){o.onNavigationBarButtonTap({e:t,that:e})},onPageScroll:function(t){e.scrollTop=t.scrollTop},onShow:function(){var n=e.recommendSettingList.length>0?e.recommendSettingList[0].title:e.$t("nav.recommend");t.setNavigationBarTitle({title:n})},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),1e3)},onReachBottom:function(t){e.nextPage()},onResize:function(){},onShareAppMessage:function(t){},created:function(){},methods:{init:function(t){e.getList()},getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.form1.sortArr=e.recommendSettingList.length>0?e.recommendSettingList[0].sortArr:[{name:"recommendNumber",type:"desc"}],o.pubfn.getListData({that:e,url:e.url,success:t.success})},nextPage:function(){e.data.hasMore&&(e.form1.pageIndex++,e.getList())}}};n.default=i}).call(this,e("543d")["default"])},b6e7:function(t,n,e){"use strict";e.r(n);var o=e("8f55"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a}},[["8ce2","common/runtime","common/vendor"]]]);