(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_template/vuex/vuex"],{"17aea":function(e,t,n){"use strict";n.r(t);var u=n("ce49"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=a.a},"962b":function(e,t,n){"use strict";(function(e){n("1b7c"),n("921b");u(n("66fd"));var t=u(n("aa2c"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},aa2c:function(e,t,n){"use strict";n.r(t);var u=n("f721"),a=n("17aea");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("b755");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],u["b"],u["c"],!1,null,"1a18c482",null,!1,u["a"],o);t["default"]=c.exports},b755:function(e,t,n){"use strict";var u=n("dbe5"),a=n.n(u);a.a},ce49:function(e,t,n){"use strict";(function(e){var n,u;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{form1:{username:"admin",password:"123456"}}},onLoad:function(e){n=this,u=n.vk},methods:{register:function(){var e=n.form1;u.userCenter.register({data:e,success:function(e){u.alert("注册成功!")}})},login:function(){var e=n.form1;u.userCenter.login({data:e,success:function(e){u.setVuex("$user.userInfo",e.userInfo),u.alert("登陆成功!")}})},logout:function(){u.userCenter.logout({success:function(e){u.setVuex("$user.userInfo",{}),u.alert("退出成功")}})},uploadAvatar:function(){e.chooseImage({count:1,sizeType:["compressed"],success:function(e){u.callFunctionUtil.uploadFile({title:"上传中...",filePath:e.tempFilePaths[0],fileType:"image",success:function(e){u.userCenter.setAvatar({data:{avatar:e.fileID},success:function(){u.setVuex("$user.userInfo.avatar",e.fileID)}})}})}})}},computed:{}};t.default=a}).call(this,n("543d")["default"])},dbe5:function(e,t,n){},f721:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return u}));var u={uAvatar:function(){return n.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"95bc"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.vk.getVuex("$user.userInfo")),u=n?e.vk.getVuex("$user.userInfo.nickname"):null,a=n?e.vk.getVuex("$user.userInfo.username"):null,r=n?e.vk.getVuex("$user.userInfo.avatar"):null;e.$mp.data=Object.assign({},{$root:{g0:n,g1:u,g2:a,g3:r}})},r=[]}},[["962b","common/runtime","common/vendor"]]]);