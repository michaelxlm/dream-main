(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_template/uni-id/weixin/weixin"],{"25c5":function(e,n,t){"use strict";t.r(n);var i=t("54e1"),u=t.n(i);for(var s in i)"default"!==s&&function(e){t.d(n,e,(function(){return i[e]}))}(s);n["default"]=u.a},"3ee7":function(e,n,t){"use strict";t.r(n);var i=t("500b"),u=t("25c5");for(var s in u)"default"!==s&&function(e){t.d(n,e,(function(){return u[e]}))}(s);t("79bc");var a,c=t("f0c5"),r=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,"52f6d742",null,!1,i["a"],a);n["default"]=r.exports},"500b":function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return i}));var u=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){return e.vk.navigateTo("../../openapi/weixin/weixin")})},s=[]},"54e1":function(e,n,t){"use strict";(function(e){var t,i;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{hasWeixinAuth:!0,sessionKey:"",image:"",data:{}}},onLoad:function(e){t=this,i=t.vk,t.init()},methods:{init:function(){i.userCenter.code2SessionWeixin({data:{needCache:!0},success:function(e){t.sessionKey=e.sessionKey}})},loginByWeixin:function(){i.userCenter.loginByWeixin({success:function(e){i.alert(e.msg),t.data=e}})},code2SessionWeixin:function(){i.userCenter.code2SessionWeixin({success:function(e){i.alert(JSON.stringify(e))}})},setUserInfo:function(){try{e.getUserProfile({desc:"用于快速设置昵称头像",success:function(e){var n=e.userInfo;i.userCenter.updateUser({data:{nickname:n.nickName,avatar:n.avatarUrl,gender:n.gender},success:function(e){i.alert("设置成功")}})}})}catch(n){i.alert("您的微信版本过低，请先更新微信!")}},bindWeixin:function(){i.userCenter.bindWeixin({success:function(e){i.alert("绑定成功"),t.data=e}})},unbindWeixin:function(){i.userCenter.unbindWeixin({success:function(e){i.alert("解绑成功"),t.data=e}})},getPhoneNumber:function(e){var n=e.detail,u=n.encryptedData,s=n.iv;if(!u||!s)return!1;i.userCenter.getPhoneNumber({data:{encryptedData:u,iv:s,sessionKey:t.sessionKey},success:function(e){i.alert("手机号:"+e.phone)}})},loginByWeixinPhoneNumber:function(e){var n=e.detail,u=n.encryptedData,s=n.iv;if(!u||!s)return!1;i.userCenter.loginByWeixinPhoneNumber({data:{encryptedData:u,iv:s,sessionKey:t.sessionKey},success:function(e){i.alert(e.msg)}})}}};n.default=u}).call(this,t("543d")["default"])},"79bc":function(e,n,t){"use strict";var i=t("cf81"),u=t.n(i);u.a},a35d:function(e,n,t){"use strict";(function(e){t("1b7c"),t("921b");i(t("66fd"));var n=i(t("3ee7"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},cf81:function(e,n,t){}},[["a35d","common/runtime","common/vendor"]]]);