(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tutorial/reply"],{"131b":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}));var o={uAvatar:function(){return n.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"beaa"))},uGap:function(){return n.e("node-modules/uview-ui/components/u-gap/u-gap").then(n.bind(null,"43b2"))},uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"855a"))},uPopup:function(){return n.e("node-modules/uview-ui/components/u-popup/u-popup").then(n.bind(null,"a477"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,"bf08"))},uBadge:function(){return n.e("node-modules/uview-ui/components/u-badge/u-badge").then(n.bind(null,"7ee9"))},uBackTop:function(){return n.e("node-modules/uview-ui/components/u-back-top/u-back-top").then(n.bind(null,"7376"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.vk.pubfn.isNotNull(e.comment.author)),o=e.vk.pubfn.isNotNull(e.comment.author),i=e.vk.pubfn.dateDiff(e.comment._add_time),u=e.__map(e.replyList,(function(t,n){var o=e.__get_orig(t),i=e.vk.pubfn.isNotNull(t.author),u=e.vk.pubfn.isNotNull(t.author),l=e.vk.pubfn.dateDiff(t._add_time),a=e.vk.pubfn.isNotNull(t.isLikeList),d=e.vk.pubfn.isNotNull(t.isLikeList),m=e.vk.pubfn.isNotNull(t.reply._id),s=m?e.vk.pubfn.isNotNull(t.reply.author):null;return{$orig:o,g3:i,g4:u,g5:l,g6:a,g7:d,g8:m,g9:s}})),l=e.vk.pubfn.isNotNull(e.comment.isLikeList),a=e.vk.pubfn.isNotNull(e.comment.isLikeList);e.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:i,l0:u,g10:l,g11:a}})},u=[]},"2c07":function(e,t,n){"use strict";n.r(t);var o=n("52b6"),i=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=i.a},4346:function(e,t,n){"use strict";n.r(t);var o=n("131b"),i=n("2c07");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);var l,a=n("f0c5"),d=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],l);t["default"]=d.exports},"52b6":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i,u=l(n("ae86"));function l(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{dbName:"tw",options:{},comment:{},addCommentPopup:{status:!1,commentItem:{},replyText:"",placeholder:"发表评论"},pageIndex:1,pageSize:20,total:0,hasMore:!1,replyList:[],scrollTop:0}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o=this,i=o.vk,o.options=t,i.pubfn.isNotNull(o.options.parent_comment_id)||i.pubfn.isNotNull(o.options.wid)?(o.getReply("init"),o.getFindById()):e.redirectTo({url:u.default.error.url})},onPageScroll:function(e){o.scrollTop=e.scrollTop},onPullDownRefresh:function(){setTimeout((function(){e.stopPullDownRefresh()}),1e3)},onShow:function(){e.setNavigationBarTitle({title:this.$t("issure.allReply")})},onReachBottom:function(e){console.log(e),console.log("监听 - 页面触底部"),o.hasMore&&(o.pageIndex+=1,o.getReply("more"))},computed:{userInfo:function(){return console.log("userInfo"),this.vk.getVuex("$user.userInfo")||{}}},methods:{getFindById:function(){i.callFunction({url:"client/general/pub/getList",title:"请求中...",data:{dbName:o.dbName+"_comment",getOne:!0,whereJson:{_id:o.options.parent_comment_id,tw_id:o.options.wid,status:0},sortArr:[{name:"_add_time",type:"desc"}],foreignDB:[{dbName:"uni-id-users",localKey:"uid",foreignKey:"_id",as:"author",whereJson:{},limit:1},{dbName:"tw_comment_like",localKey:"_id",foreignKey:"comment_id",whereJson:{uid:o.userInfo._id,status:0},as:"isLikeList",sortArr:[{name:"_add_time",type:"desc"}],limit:1}]},success:function(e){console.log(e),i.pubfn.isNotNull(e.rows)&&(o.comment=e.rows)}})},gotoCommentFunc:function(){o.$u.getRect(".all-reply").then((function(t){e.pageScrollTo({scrollTop:o.scrollTop+t.top,duration:0})}))},getLike:function(e){i.callFunction({url:"client/general/kh/addLove",title:"请求中...",data:{mainDBname:o.dbName,dbName:o.dbName+"_comment",tw_id:o.wid,from:"comment",comment_id:e},success:function(e){console.log(e),i.pubfn.isNull(e.id)||(o.getReply("init"),o.getFindById()),i.toast(e.msg,"none")}})},delLike:function(e,t){i.callFunction({url:"client/general/kh/delLove",title:"请求中...",data:{mainDBname:o.dbName,dbName:o.dbName+"_comment",tw_id:o.wid,from:"comment",comment_id:e,like_id:t},success:function(e){console.log(e),i.pubfn.isNull(e.id)||(o.getReply("init"),o.getFindById()),i.toast(e.msg,"none")}})},getReply:function(e){"init"===e&&(o.pageIndex=1),i.callFunction({url:"client/general/pub/getList",title:"请求中...",data:{dbName:o.dbName+"_comment",whereJson:{comment_parent_status:!0,parent_comment_id:o.options.parent_comment_id,tw_id:o.options.wid,status:0},getCount:!0,sortArr:[{name:"_add_time",type:"desc"}],treeProps:{id:"reply_comment_id",parent_id:"_id",children:"reply",level:2,limit:1,whereJson:{status:0}},foreignDB:[{dbName:"uni-id-users",localKey:"uid",foreignKey:"_id",as:"author",limit:1},{dbName:"tw_comment_like",localKey:"_id",foreignKey:"comment_id",whereJson:{uid:o.userInfo._id,status:0},as:"isLikeList",sortArr:[{name:"_add_time",type:"desc"}],limit:1}],pageIndex:o.pageIndex,pageSize:o.pageSize},success:function(t){console.log(t),"init"===e&&(o.replyList=[]),i.pubfn.isNotNull(t.rows)&&(o.replyList=t.rows,o.hasMore=t.hasMore,o.total=t.total)}})},replyCommentFunc:function(e){console.log(e),i.pubfn.isNotNull(e)?(o.addCommentPopup.commentItem=e,o.addCommentPopup.placeholder="回复"+e.author.nickname):(o.addCommentPopup.commentItem={},o.addCommentPopup.placeholder=""),o.addCommentPopup.status=!0},replyCommentSubmitFunc:function(){var e={dbName:o.dbName+"_comment",status:0,tw_id:o.options.wid,commentText:o.addCommentPopup.replyText||"",comment_parent_status:!0,parent_uid:o.comment.uid||"",parent_comment_id:o.comment._id||""};i.pubfn.isNotNull(o.addCommentPopup.commentItem)?(e.comment_reply_status=!0,e.reply_uid=o.addCommentPopup.commentItem.uid||"",e.reply_comment_id=o.addCommentPopup.commentItem._id||""):(e.comment_reply_status=!1,e.reply_uid="",e.reply_comment_id=""),i.callFunction({url:"client/general/kh/add",title:"请求中...",data:e,success:function(e){console.log(e),0===Number(e.code)&&o.addCommentPopupClose(),o.getReply("init")}})},addCommentPopupClose:function(){o.addCommentPopup={status:!1,commentItem:{},replyText:"",placeholder:"发表评论"}}}};t.default=a}).call(this,n("543d")["default"])},"65bf":function(e,t,n){"use strict";(function(e){n("3d10"),n("921b");o(n("66fd"));var t=o(n("4346"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["65bf","common/runtime","common/vendor"]]]);