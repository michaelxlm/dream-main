(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/issue/time"],{"17c4":function(e,o,n){"use strict";n.r(o);var t=n("6bca"),i=n.n(t);for(var r in t)"default"!==r&&function(e){n.d(o,e,(function(){return t[e]}))}(r);o["default"]=i.a},"6bca":function(e,o,n){"use strict";(function(e,t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i,r,u=s(n("a34a")),a=s(n("310d"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,o,n,t,i,r,u){try{var a=e[r](u),s=a.value}catch(l){return void n(l)}a.done?o(s):Promise.resolve(s).then(t,i)}function d(e){return function(){var o=this,n=arguments;return new Promise((function(t,i){var r=e.apply(o,n);function u(e){l(r,t,i,u,a,"next",e)}function a(e){l(r,t,i,u,a,"throw",e)}u(void 0)}))}}var c={components:{},data:function(){return{genderList:[{value:"0",name:"保密"},{value:"1",name:"男"},{value:"2",name:"女"}],birthdayTimeParams:{year:!1,month:!1,day:!1,hour:!0,minute:!0,second:!0},birthdayTimeShow:!1,hometownShow:!1,calendarShow:!1,issureForm:{avatar:"",nickname:"",gender:"0",mobile:"",birthday:"",birthdayObj:{},birthdayTime:"",birthdayTimeCode:"",birthdayTimeObj:{},hometown:"北京市市辖区朝阳区",hometownCode:["11","1101","110105"],hometownObj:{province:{label:"北京市",value:"11"},city:{label:"市辖区",value:"1101"},area:{label:"朝阳区",value:"110105"}},intro:""},rules:{nickname:[{required:!0,message:"请输入姓名",trigger:["blur,change"]}],mobile:[{required:!0,message:"请输入手机号",trigger:["blur,change"]}]}}},computed:{labelStyle:function(){return{textAlign:"justify"}},mainLogo:function(){return a.default.staticUrl.logo}},onLoad:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=this,i.options=o,r=i.vk,e.setNavigationBarTitle({title:i.$t("issure.title")}),o.id&&i.init(),e.$on("uAvatarCropper",function(){var e=d(u.default.mark((function e(o){var n,r,a;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="",n=o.indexOf("/")>0?o.substring(o.lastIndexOf("/")+1,o.length):o,r="/timeAvatar/"+i.issureForm._id+"/"+n,e.next=5,t.uploadFile({filePath:o,cloudPath:r,onUploadProgress:function(e){console.log(e);Math.round(100*e.loaded/e.total)}});case 5:a=e.sent,i.issureForm.avatar=a.fileID||"";case 7:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}())},onShow:function(){},onReady:function(){this.$refs.issureForm.setRules(this.rules)},methods:{init:function(){r.callFunction({url:"client/time/pub/findById",title:"请求中...",data:{whereJson:{_id:i.options.id,status:0}},success:function(e){r.pubfn.isNotNull(e.rows)&&(i.issureForm={avatar:e.rows[0].avatar,nickname:e.rows[0].nickname,gender:e.rows[0].gender,mobile:e.rows[0].mobile,birthday:e.rows[0].birthday,birthdayObj:e.rows[0].birthdayObj,birthdayTime:e.rows[0].birthdayTime,birthdayTimeCode:e.rows[0].birthdayTimeCode,birthdayTimeObj:e.rows[0].birthdayTimeObj,hometown:e.rows[0].hometown,hometownCode:e.rows[0].hometownCode,hometownObj:e.rows[0].hometownObj,intro:e.rows[0].intro})}})},chooseAvatar:function(){console.log("chooseAvatar"),this.$u.route({url:"/pages/u-avatar-cropper/u-avatar-cropper",params:{destWidth:300,rectWidth:200,fileType:"jpg"}})},calendarShowFunc:function(){i.calendarShow=!i.calendarShow},calendarChange:function(e){i.issureForm.birthday=e.result,i.issureForm.birthdayObj=e,r.pubfn.isNull(i.issureForm.birthdayTimeCode)&&(i.issureForm.birthdayTimeCode=i.issureForm.birthday+" 00:00:00")},hometownShowFunc:function(){i.hometownShow=!i.hometownShow},hometownShowConfirm:function(e){console.log(e),i.issureForm.hometown=e.province.label+e.city.label+e.area.label,i.issureForm.hometownCode[0]=e.province.value,i.issureForm.hometownCode[1]=e.city.value,i.issureForm.hometownCode[2]=e.area.value,i.issureForm.hometownObj=e},birthdayTimeShowFunc:function(){r.pubfn.isNull(i.issureForm.birthdayObj)?r.alert("请先选择日期"):i.birthdayTimeShow=!i.birthdayTimeShow},birthdayTimeShowConfirm:function(e){console.log(e),i.issureForm.birthdayTime=e.hour+":"+e.minute+":"+e.second,i.issureForm.birthdayTimeCode=i.issureForm.birthday+" "+i.issureForm.birthdayTime,i.issureForm.birthdayTimeObj=e},submitInfo:function(){i.$refs.issureForm.validate((function(e){e?(console.log("验证通过"),r.pubfn.isNull(i.issureForm.birthdayTime)&&(i.issureForm.birthdayTimeObj={}),r.pubfn.isNotNull(i.options.id)&&(i.issureForm.time_id=i.options.id),r.callFunction({url:"client/time/kh/add",title:"请求中...",data:i.issureForm,success:function(e){console.log(e),0===Number(e.code)&&(r.alert("添加成功"),r.reLaunch({url:"/pages/index/index"}))}})):console.log("验证失败")}))}}};o.default=c}).call(this,n("543d")["default"],n("a9ff")["default"])},"74c0":function(e,o,n){"use strict";n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return r})),n.d(o,"a",(function(){return t}));var t={uImage:function(){return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null,"9f9b"))},uForm:function(){return n.e("node-modules/uview-ui/components/u-form/u-form").then(n.bind(null,"27b6"))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,"7b8b"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,"f087"))},uRadioGroup:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-radio-group/u-radio-group")]).then(n.bind(null,"1473"))},uRadio:function(){return n.e("node-modules/uview-ui/components/u-radio/u-radio").then(n.bind(null,"c585"))},uCollapse:function(){return n.e("node-modules/uview-ui/components/u-collapse/u-collapse").then(n.bind(null,"884b"))},uCollapseItem:function(){return n.e("node-modules/uview-ui/components/u-collapse-item/u-collapse-item").then(n.bind(null,"9ba8"))},uButton:function(){return n.e("node-modules/uview-ui/components/u-button/u-button").then(n.bind(null,"a9e2"))},uCalendar:function(){return n.e("node-modules/uview-ui/components/u-calendar/u-calendar").then(n.bind(null,"1491"))},uPicker:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-picker/u-picker")]).then(n.bind(null,"1a36"))}},i=function(){var e=this,o=e.$createElement,n=(e._self._c,e.$t("mine.update"));e.$mp.data=Object.assign({},{$root:{m0:n}})},r=[]},"87ec":function(e,o,n){"use strict";n.r(o);var t=n("74c0"),i=n("17c4");for(var r in i)"default"!==r&&function(e){n.d(o,e,(function(){return i[e]}))}(r);var u,a=n("f0c5"),s=Object(a["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],u);o["default"]=s.exports},d60e:function(e,o,n){"use strict";(function(e){n("1b7c"),n("921b");t(n("66fd"));var o=t(n("87ec"));function t(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,n("543d")["createPage"])}},[["d60e","common/runtime","common/vendor"]]]);