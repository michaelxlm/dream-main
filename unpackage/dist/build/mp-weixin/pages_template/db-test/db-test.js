(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_template/db-test/db-test"],{"0a71":function(t,i,n){},3513:function(t,i,n){"use strict";(function(t){n("3d10"),n("921b");a(n("66fd"));var i=a(n("6329"));function a(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},"43f5":function(t,i,n){"use strict";var a=n("0a71"),e=n.n(a);e.a},6329:function(t,i,n){"use strict";n.r(i);var a=n("ad9c"),e=n("765f");for(var u in e)"default"!==u&&function(t){n.d(i,t,(function(){return e[t]}))}(u);n("43f5");var c,l=n("f0c5"),o=Object(l["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);i["default"]=o.exports},"765f":function(t,i,n){"use strict";n.r(i);var a=n("ab81"),e=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(i,t,(function(){return a[t]}))}(u);i["default"]=e.a},ab81:function(t,i,n){"use strict";var a,e;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var u={data:function(){return{form1:{},data:{},item:{},myPosition:{longitude:120.12792,latitude:30.228932}}},onLoad:function(t){a=this,e=a.vk,a.init(t)},methods:{init:function(t){a.getList(!0)},pageTo:function(t){e.navigateTo(t)},add:function(){e.callFunction({url:"template/db_api/pub/add",title:"请求中...",success:function(t){e.alert(JSON.stringify(t)),a.item=t,a.getList()}})},adds:function(){e.callFunction({url:"template/db_api/pub/adds",title:"请求中...",success:function(t){e.alert(JSON.stringify(t)),a.item=t,a.getList()}})},count:function(){e.callFunction({url:"template/db_api/pub/count",title:"请求中...",success:function(t){e.alert(JSON.stringify(t)),a.item=t}})},del:function(){e.callFunction({url:"template/db_api/pub/del",title:"请求中...",success:function(t){e.alert(JSON.stringify(t)),a.item=t,a.getList()}})},findById:function(){var t={};a.data&&a.data.rows[0]&&a.data.rows[0]._id&&(t._id=a.data.rows[0]._id),e.callFunction({url:"template/db_api/pub/findById",title:"请求中...",data:t,success:function(t){e.alert(JSON.stringify(t)),a.item=t}})},findByWhereJson:function(){var t={};a.data&&a.data.rows[0]&&a.data.rows[0]._id&&(t._id=a.data.rows[0]._id),e.callFunction({url:"template/db_api/pub/findById",title:"请求中...",data:t,success:function(t){e.alert(JSON.stringify(t)),a.item=t}})},getList:function(t){e.callFunction({url:"template/db_api/pub/select",title:t?"请求中...":"",data:{},success:function(t){a.data=t}})},getList1:function(){e.callFunction({url:"template/db_api/pub/select",title:"请求中...",data:{},success:function(t){a.data=t,e.alert(JSON.stringify(t)),a.item=t}})},selects:function(){e.callFunction({url:"template/db_api/pub/selects",title:"请求中...",data:{},success:function(t){a.data=t,e.alert(JSON.stringify(t)),a.item=t}})},sample:function(){e.callFunction({url:"template/db_api/pub/sample",title:"请求中...",data:{},success:function(t){t.list&&t.list[0]&&e.alert(JSON.stringify(t.list[0]))}})},update:function(){var t={};a.data&&a.data.rows[0]&&a.data.rows[0]._id&&(t._id=a.data.rows[0]._id),e.callFunction({url:"template/db_api/pub/update",title:"请求中...",data:t,success:function(t){e.alert(JSON.stringify(t)),a.item=t,a.getList()}})},updateById:function(){var t={};a.data&&a.data.rows[0]&&a.data.rows[0]._id&&(t._id=a.data.rows[0]._id),e.callFunction({url:"template/db_api/pub/updateById",title:"请求中...",data:t,success:function(t){e.alert(JSON.stringify(t)),a.item=t,a.getList()}})},sum:function(){e.callFunction({url:"template/db_api/pub/sum",title:"请求中...",success:function(t){e.alert(JSON.stringify(t)),a.item=t}})},avg:function(){e.callFunction({url:"template/db_api/pub/avg",title:"请求中...",success:function(t){e.alert(JSON.stringify(t)),a.item=t}})},max:function(){e.callFunction({url:"template/db_api/pub/max",title:"请求中...",success:function(t){e.alert(JSON.stringify(t)),a.item=t}})},min:function(){e.callFunction({url:"template/db_api/pub/min",title:"请求中...",success:function(t){e.alert(JSON.stringify(t)),a.item=t}})},getGeoList:function(t){e.callFunction({url:"template/db_api/pub/geo",title:"请求中...",data:{},success:function(t){a.data=t}})},calcLocation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0==i.longitude||void 0==i.latitude)return"";var n={},a=0,e=0,u=i.longitude,c=i.latitude,l=t.longitude,o=t.latitude;return a=Math.sqrt((u-l)*(u-l)+(c-o)*(c-o))/180*Math.PI*63e5,a=a.toFixed(1),e=(a/1e3).toFixed(2),n.str=a>=1e6?"很遥远":a>=1e3?e+" km":a+" m",n.m=a,n.km=e,n}},filters:{calcLocationStr:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.calcLocation(t,i).km}}};i.default=u},ad9c:function(t,i,n){"use strict";var a;n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return u})),n.d(i,"a",(function(){return a}));var e=function(){var t=this,i=t.$createElement,n=(t._self._c,t.__map(t.data.rows,(function(i,n){var a=t.__get_orig(i),e=i._id.substring(20),u=t._f("calcLocationStr")(i.position,t.myPosition);return{$orig:a,g0:e,f0:u}}))),a=JSON.stringify(t.item);t.$mp.data=Object.assign({},{$root:{l0:n,g1:a}})},u=[]}},[["3513","common/runtime","common/vendor"]]]);