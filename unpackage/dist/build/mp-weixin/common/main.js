(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"25a3":function(e,t,n){},2688:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n("ae86"));function u(e){return e&&e.__esModule?e:{default:e}}var c={methods:{watchLocalStorage:function(){this.vk;wx.getBackgroundFetchData({fetchType:"pre",success:function(e){console.log(e.fetchedData),console.log(e.timeStamp),console.log(e.path),console.log(e.query),console.log(e.scene)}})},initLogin:function(){var e=this;e.vk.userCenter.loginByWeixin({success:function(t){console.log(t),e.vk.setVuex("$user.userInfo",t.userInfo||{})}})},gitAppInit:function(){var e=this;this.vk.callFunction({url:"plugs/components_dynamic/client/pub/gitAppInit"}).then((function(t){e.vk.setVuex("$app.componentsDynamic",t.componentsDynamic||{})})).catch((function(t){console.log(t),e.vk.setVuex("$app.componentsDynamic",{})}))}},onPageNotFound:function(t){e.redirectTo({url:o.default.error.url})},onLaunch:function(){o.default.debug&&console.log("App Launch");var e=this;e.gitAppInit(),e.watchLocalStorage(),e.initLogin()},onShow:function(){o.default.debug&&console.log("App Show")},onHide:function(){o.default.debug&&console.log("App Hide")}};t.default=c}).call(this,n("543d")["default"])},"563d":function(e,t,n){"use strict";(function(e){n("3d10"),n("921b");var t=s(n("66fd")),o=s(n("c264")),u=s(n("6309")),c=s(n("ae86")),r=s(n("b274")),a=s(n("5c92")),i=s(n("04bd")),l=s(n("68e1")),f=s(n("223d"));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.use(r.default);var b=n("8b6b");t.default.mixin(b),t.default.use(a.default),t.default.prototype.vk.init({Vue:t.default,config:c.default}),t.default.use(f.default);var v=new f.default({locale:"zh",messages:{zh:i.default,en:l.default}});t.default.prototype._i18n=v,o.default.mpType="app",t.default.config.productionTip=!1;var h=new t.default(p({i18n:v,store:u.default},o.default));e(h).$mount()}).call(this,n("543d")["createApp"])},9808:function(e,t,n){"use strict";n.r(t);var o=n("2688"),u=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=u.a},c264:function(e,t,n){"use strict";n.r(t);var o=n("9808");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("d0c3");var c,r,a,i,l=n("f0c5"),f=Object(l["a"])(o["default"],c,r,!1,null,null,null,!1,a,i);t["default"]=f.exports},d0c3:function(e,t,n){"use strict";var o=n("25a3"),u=n.n(o);u.a}},[["563d","common/runtime","common/vendor"]]]);