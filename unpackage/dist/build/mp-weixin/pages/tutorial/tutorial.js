(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tutorial/tutorial"],{"0c46":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var o={uAvatar:function(){return n.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"beaa"))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"03f5"))},uImage:function(){return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null,"e32b"))},uGap:function(){return n.e("node-modules/uview-ui/components/u-gap/u-gap").then(n.bind(null,"43b2"))},uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"855a"))},uDivider:function(){return n.e("node-modules/uview-ui/components/u-divider/u-divider").then(n.bind(null,"be66"))},uModal:function(){return n.e("node-modules/uview-ui/components/u-modal/u-modal").then(n.bind(null,"bffc"))},uPopup:function(){return n.e("node-modules/uview-ui/components/u-popup/u-popup").then(n.bind(null,"a477"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,"bf08"))},uBadge:function(){return n.e("node-modules/uview-ui/components/u-badge/u-badge").then(n.bind(null,"7ee9"))},uBackTop:function(){return n.e("node-modules/uview-ui/components/u-back-top/u-back-top").then(n.bind(null,"7376"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.vk.pubfn.isNotNull(t.tutorialData.author)),o=t.vk.pubfn.isNotNull(t.tutorialData.author),i=t.vk.pubfn.dateDiff(t.tutorialData._add_time),u=t.vk.pubfn.isNotNull(t.tutorialData.author),a=t.vk.pubfn.isNotNull(t.tutorialData.imageList),l=t.vk.pubfn.isNotNull(t.commentList),m=t.vk.pubfn.isNotNull(t.tutorialData.author),d=l?t.__map(t.commentList,(function(e,n){var o=t.__get_orig(e),i=t.vk.pubfn.isNotNull(e.author),u=t.vk.pubfn.isNotNull(e.isLikeList._id),a=t.vk.pubfn.isNotNull(e.isLikeList),l=t.vk.pubfn.dateDiff(e._add_time),m=t.vk.pubfn.isNotNull(e.replyList),d=m?t.__map(e.replyList,(function(e,n){var o=t.__get_orig(e),i=t.vk.pubfn.isNotNull(e.author);return{$orig:o,g12:i}})):null;return{$orig:o,g7:i,g8:u,g9:a,g10:l,g11:m,l0:d}})):null;t.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:i,g3:u,g4:a,g5:l,g6:m,l1:d}})},u=[]},"43fd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i,u,a=l(n("ae86"));function l(t){return t&&t.__esModule?t:{default:t}}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=(o={data:function(){return{dbName:"tw",wid:"",tutorialData:{},commentList:[],comment:{total:0,loadMoreStatus:!1,pagination:{pageIndex:1,pageSize:10}},likeStatus:!1,addCommentPopup:{status:!1,commentItem:{},replyText:"",placeholder:"发表评论"},del:{show:!1,content:"确定删除当前评论？",type:"",comment:{}},scrollTop:0}},onBackPress:function(t){console.log("返回按钮",t)},onPageScroll:function(t){i.scrollTop=t.scrollTop},onShareAppMessage:function(){return{title:i.banner.title,path:"/pages/tutorial/tutorial?id="+i.wid}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=this,u=i.vk,i.options=t,console.log("onLoad"),u.pubfn.isNotNull(t.id)?(i.init(t),i.getComment("init")):u.navigateTo("/pages/error/404/404")},onReady:function(){},onShow:function(){t.setNavigationBarTitle({title:this.$t("tutorial.title")}),console.log(i.$u.mpShare),i.getComment("init")},onHide:function(){},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),1e3)},onReachBottom:function(t){console.log(t),console.log("监听 - 页面触底部"),i.comment.hasMore&&(i.comment.pagination.pageIndex+=1,i.getComment("more"))},onResize:function(){}},m(o,"onShareAppMessage",(function(t){})),m(o,"methods",{init:function(t){i.wid=t.id,u.callFunction({url:"client/general/pub/getList",title:"请求中...",data:{dbName:i.dbName,getOne:!0,whereJson:{_id:i.wid,status:0},foreignDB:[{dbName:"uni-id-users",localKey:"uid",foreignKey:"_id",as:"author",whereJson:{status:0},limit:1},{dbName:"tw_like",localKey:"_id",foreignKey:"tw_id",whereJson:{uid:i.userInfo._id,status:0},as:"isLikeMine",sortArr:[{name:"_add_time",type:"desc"}],limit:1}]},success:function(t){u.pubfn.isNotNull(t.rows)&&(i.tutorialData=t.rows,i.$u.mpShare.title=i.tutorialData.text,i.$u.mpShare.imageUrl=a.default.imageShareUrl,u.pubfn.isNotNull(i.tutorialData.isLikeMine._id)?i.likeStatus=!0:i.likeStatus=!1)}})},toAllReply:function(t){u.navigateTo("/pages/tutorial/reply?parent_comment_id="+t+"&wid="+i.wid)},attentionFunc:function(){},getLike:function(t){u.callFunction({url:"client/general/kh/addLove",title:"请求中...",data:{mainDBname:i.dbName,dbName:i.dbName+"_comment",tw_id:i.wid,from:"comment",comment_id:t},success:function(t){console.log(t),u.pubfn.isNull(t.id)||i.getComment("init"),u.toast(t.msg,"none")}})},delLike:function(t,e){u.callFunction({url:"client/general/kh/delLove",title:"请求中...",data:{mainDBname:i.dbName,dbName:i.dbName+"_comment",tw_id:i.wid,from:"comment",comment_id:t,like_id:e},success:function(t){console.log(t),u.pubfn.isNull(t.id)||i.getComment("init"),u.toast(t.msg,"none")}})},getComment:function(t){"init"===t&&(i.comment.pagination.pageIndex=1),u.callFunction({url:"client/general/pub/getList",title:"请求中...",data:{dbName:i.dbName+"_comment",pageIndex:i.comment.pagination.pageIndex,pageSize:i.comment.pagination.pageSize,getCount:!0,whereJson:{tw_id:i.wid,status:0,comment_parent_status:!1},sortArr:[{name:"_add_time",type:"desc"}],treeProps:{id:"_id",parent_id:"parent_comment_id",children:"replyList",level:1,limit:2,whereJson:{status:0,comment_parent_status:!0,tw_id:i.wid},sortArr:[{name:"_add_time",type:"desc"}]},foreignDB:[{dbName:"uni-id-users",localKey:"uid",foreignKey:"_id",as:"author",limit:1},{dbName:"tw_comment_like",localKey:"_id",foreignKey:"comment_id",whereJson:{uid:i.userInfo._id,status:0},as:"isLikeList",sortArr:[{name:"_add_time",type:"desc"}],limit:1}]},success:function(e){console.log(e),"init"===t&&(i.commentList=[]),u.pubfn.isNotNull(e.rows)&&(i.commentList=i.commentList.concat(e.rows)),i.comment.hasMore=e.hasMore||!1,i.comment.total=e.total||0,i.comment.pagination=e.pagination}})},replyCommentFunc:function(t){console.log(t),u.pubfn.isNotNull(t)?(i.addCommentPopup.commentItem=t,i.addCommentPopup.placeholder="回复"+t.author.nickname):(i.addCommentPopup.commentItem={},i.addCommentPopup.placeholder=""),i.addCommentPopup.status=!0},replyCommentSubmitFunc:function(){var t={tw_id:i.wid,commentText:i.addCommentPopup.replyText||"",comment_reply_status:!1,reply_uid:"",status:0,reply_comment_id:""};u.pubfn.isNotNull(i.addCommentPopup.commentItem)?(t.comment_parent_status=!0,t.parent_uid=i.addCommentPopup.commentItem.uid||"",t.parent_comment_id=i.addCommentPopup.commentItem._id||""):(t.comment_parent_status=!1,t.parent_uid="",t.parent_comment_id=""),u.callFunction({url:"client/general/kh/adds",title:"请求中...",data:{addJson:t,dbName:i.dbName+"_comment",mainDBname:"tw",type:"comment"},success:function(t){console.log(t),0===Number(t.code)&&(i.getComment("init"),i.addCommentPopupClose())}})},addCommentPopupClose:function(){i.addCommentPopup={status:!1,commentItem:{},replyText:"",placeholder:"发表评论"}},gotoCommentFunc:function(){i.$u.getRect(".comment").then((function(e){t.pageScrollTo({scrollTop:i.scrollTop+e.top,duration:0})}))},likeTWFunc:function(){i.likeStatus?u.callFunction({url:"client/general/kh/delLove",title:"请求中...",data:{mainDBname:i.dbName,dbName:i.dbName,tw_id:i.wid,from:"tw",comment_id:"",like_id:i.tutorialData.isLikeMine._id},success:function(t){console.log(t),u.pubfn.isNull(t.id)||i.init(i.options),u.toast(t.msg,"none")}}):u.callFunction({url:"client/general/kh/addLove",title:"请求中...",data:{mainDBname:i.dbName,dbName:i.dbName,tw_id:i.wid,from:"tw",comment_id:""},success:function(t){console.log(t),u.pubfn.isNull(t.id)||i.init(i.options),u.toast(t.msg,"none")}})},delCommentFunc:function(t,e){console.log(t),i.del.show=!0,i.del.type=e,i.del.comment=t},delConfirm:function(){u.callFunction({url:"client/general/kh/del",title:"请求中...",data:{mainDBname:i.dbName,dbName:"comment"===i.del.type?i.dbName+"_comment":i.dbName,tw_id:i.wid,childCommint:i.del.comment.comment_parent_status||!1,type:i.del.type,del_id:"comment"===i.del.type?i.del.comment._id:i.wid},success:function(t){console.log(t),0===t.code&&(i.getComment("init"),i.delCancel()),i.delCancel(),u.toast(t.msg,"none")},fail:function(){i.delCancel()}})},delCancel:function(){i.del={show:!1,content:"确定删除当前评论？",type:"",comment:{}}}}),m(o,"filters",{}),m(o,"computed",{tabbar:function(){return this.vk.getVuex("$app.config.tabbar")||[]},userInfo:function(){return console.log("userInfo"),this.vk.getVuex("$user.userInfo")||{}},attentionStatusName:function(){return this.tutorialData.attentionStatus?this.$t("tutorial.attentioned"):this.$t("tutorial.attention")}}),o);e.default=d}).call(this,n("543d")["default"])},"8c04":function(t,e,n){"use strict";n.r(e);var o=n("0c46"),i=n("f92b");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);var a,l=n("f0c5"),m=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=m.exports},"905e":function(t,e,n){"use strict";(function(t){n("3d10"),n("921b");o(n("66fd"));var e=o(n("8c04"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f92b:function(t,e,n){"use strict";n.r(e);var o=n("43fd"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=i.a}},[["905e","common/runtime","common/vendor"]]]);