(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tutorial/tutorial"],{"2d40":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}));var o={uAvatar:function(){return n.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"beaa"))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"03f5"))},uImage:function(){return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null,"e32b"))},uGap:function(){return n.e("node-modules/uview-ui/components/u-gap/u-gap").then(n.bind(null,"43b2"))},uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"855a"))},uDivider:function(){return n.e("node-modules/uview-ui/components/u-divider/u-divider").then(n.bind(null,"be66"))},uModal:function(){return n.e("node-modules/uview-ui/components/u-modal/u-modal").then(n.bind(null,"bffc"))},uPopup:function(){return n.e("node-modules/uview-ui/components/u-popup/u-popup").then(n.bind(null,"a477"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,"bf08"))},uBadge:function(){return n.e("node-modules/uview-ui/components/u-badge/u-badge").then(n.bind(null,"7ee9"))},uBackTop:function(){return n.e("node-modules/uview-ui/components/u-back-top/u-back-top").then(n.bind(null,"7376"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.vk.pubfn.isNotNull(e.tutorialData.author)),o=e.vk.pubfn.dateDiff(e.tutorialData._add_time),i=e.vk.pubfn.isNotNull(e.tutorialData.author),u=e.vk.pubfn.isNotNull(e.tutorialData.imageList),a=e.vk.pubfn.isNotNull(e.commentList),l=a?e.__map(e.commentList,(function(t,n){var o=e.__get_orig(t),i=e.vk.pubfn.isNotNull(t.author),u=e.vk.pubfn.isNotNull(t.isLikeList._id),a=e.vk.pubfn.isNotNull(t.isLikeList),l=e.vk.pubfn.dateDiff(t._add_time),m=e.vk.pubfn.isNotNull(t.replyList),d=m?e.__map(t.replyList,(function(t,n){var o=e.__get_orig(t),i=e.vk.pubfn.isNotNull(t.author);return{$orig:o,g10:i}})):null;return{$orig:o,g5:i,g6:u,g7:a,g8:l,g9:m,l0:d}})):null;e.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:i,g3:u,g4:a,l1:l}})},u=[]},"43fd":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i,u,a=l(n("ae86"));function l(e){return e&&e.__esModule?e:{default:e}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=(o={data:function(){return{dbName:"tw",wid:"",tutorialData:{},commentList:[],comment:{total:0,loadMoreStatus:!1,pagination:{pageIndex:1,pageSize:10}},likeStatus:!1,addCommentPopup:{status:!1,commentItem:{},replyText:"",placeholder:"发表评论"},del:{show:!1,content:"确定删除当前评论？",type:"",comment:{}},scrollTop:0}},onBackPress:function(e){console.log("返回按钮",e)},onPageScroll:function(e){i.scrollTop=e.scrollTop},onShareAppMessage:function(){return{title:i.banner.title,path:"/pages/tutorial/tutorial?id="+i.wid}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=this,u=i.vk,i.options=e,console.log("onLoad"),u.pubfn.isNotNull(e.id)?(i.init(e),i.getComment("init")):u.navigateTo("/pages/error/404/404")},onReady:function(){},onShow:function(){e.setNavigationBarTitle({title:this.$t("tutorial.title")}),console.log(i.$u.mpShare),i.getComment("init")},onHide:function(){},onPullDownRefresh:function(){setTimeout((function(){e.stopPullDownRefresh()}),1e3)},onReachBottom:function(e){console.log(e),console.log("监听 - 页面触底部"),i.comment.hasMore&&(i.comment.pagination.pageIndex+=1,i.getComment("more"))},onResize:function(){}},m(o,"onShareAppMessage",(function(e){})),m(o,"methods",{init:function(e){i.wid=e.id,u.callFunction({url:"client/general/pub/getList",title:"请求中...",data:{dbName:i.dbName,getOne:!0,whereJson:{_id:i.wid,status:0},foreignDB:[{dbName:"uni-id-users",localKey:"uid",foreignKey:"_id",as:"author",whereJson:{status:0},limit:1},{dbName:"tw_like",localKey:"_id",foreignKey:"tw_id",whereJson:{uid:i.userInfo._id,status:0},as:"isLikeMine",sortArr:[{name:"_add_time",type:"desc"}],limit:1}]},success:function(e){u.pubfn.isNotNull(e.rows)&&(i.tutorialData=e.rows,i.$u.mpShare.title=i.tutorialData.text,i.$u.mpShare.imageUrl=a.default.imageShareUrl,u.pubfn.isNotNull(i.tutorialData.isLikeMine._id)?i.likeStatus=!0:i.likeStatus=!1)}})},toAllReply:function(e){u.navigateTo("/pages/tutorial/reply?parent_comment_id="+e+"&wid="+i.wid)},attentionFunc:function(){},getLike:function(e){u.callFunction({url:"client/general/kh/addLove",title:"请求中...",data:{mainDBname:i.dbName,dbName:i.dbName+"_comment",tw_id:i.wid,from:"comment",comment_id:e},success:function(e){console.log(e),u.pubfn.isNull(e.id)||i.getComment("init"),u.toast(e.msg,"none")}})},delLike:function(e,t){u.callFunction({url:"client/general/kh/delLove",title:"请求中...",data:{mainDBname:i.dbName,dbName:i.dbName+"_comment",tw_id:i.wid,from:"comment",comment_id:e,like_id:t},success:function(e){console.log(e),u.pubfn.isNull(e.id)||i.getComment("init"),u.toast(e.msg,"none")}})},getComment:function(e){"init"===e&&(i.comment.pagination.pageIndex=1),u.callFunction({url:"client/general/pub/getList",title:"请求中...",data:{dbName:i.dbName+"_comment",pageIndex:i.comment.pagination.pageIndex,pageSize:i.comment.pagination.pageSize,getCount:!0,whereJson:{tw_id:i.wid,status:0,comment_parent_status:!1},sortArr:[{name:"_add_time",type:"desc"}],treeProps:{id:"_id",parent_id:"parent_comment_id",children:"replyList",level:1,limit:2,whereJson:{status:0,comment_parent_status:!0,tw_id:i.wid},sortArr:[{name:"_add_time",type:"desc"}]},foreignDB:[{dbName:"uni-id-users",localKey:"uid",foreignKey:"_id",as:"author",limit:1},{dbName:"tw_comment_like",localKey:"_id",foreignKey:"comment_id",whereJson:{uid:i.userInfo._id,status:0},as:"isLikeList",sortArr:[{name:"_add_time",type:"desc"}],limit:1}]},success:function(t){console.log(t),"init"===e&&(i.commentList=[]),u.pubfn.isNotNull(t.rows)&&(i.commentList=i.commentList.concat(t.rows)),i.comment.hasMore=t.hasMore||!1,i.comment.total=t.total||0,i.comment.pagination=t.pagination}})},replyCommentFunc:function(e){console.log(e),u.pubfn.isNotNull(e)?(i.addCommentPopup.commentItem=e,i.addCommentPopup.placeholder="回复"+e.author.nickname):(i.addCommentPopup.commentItem={},i.addCommentPopup.placeholder=""),i.addCommentPopup.status=!0},replyCommentSubmitFunc:function(){var e={tw_id:i.wid,commentText:i.addCommentPopup.replyText||"",comment_reply_status:!1,reply_uid:"",status:0,reply_comment_id:""};u.pubfn.isNotNull(i.addCommentPopup.commentItem)?(e.comment_parent_status=!0,e.parent_uid=i.addCommentPopup.commentItem.uid||"",e.parent_comment_id=i.addCommentPopup.commentItem._id||""):(e.comment_parent_status=!1,e.parent_uid="",e.parent_comment_id=""),u.callFunction({url:"client/general/kh/adds",title:"请求中...",data:{addJson:e,dbName:i.dbName+"_comment",mainDBname:"tw",type:"comment"},success:function(e){console.log(e),0===Number(e.code)&&(i.getComment("init"),i.addCommentPopupClose())}})},addCommentPopupClose:function(){i.addCommentPopup={status:!1,commentItem:{},replyText:"",placeholder:"发表评论"}},gotoCommentFunc:function(){i.$u.getRect(".comment").then((function(t){e.pageScrollTo({scrollTop:i.scrollTop+t.top,duration:0})}))},likeTWFunc:function(){i.likeStatus?u.callFunction({url:"client/general/kh/delLove",title:"请求中...",data:{mainDBname:i.dbName,dbName:i.dbName,tw_id:i.wid,from:"tw",comment_id:"",like_id:i.tutorialData.isLikeMine._id},success:function(e){console.log(e),u.pubfn.isNull(e.id)||i.init(i.options),u.toast(e.msg,"none")}}):u.callFunction({url:"client/general/kh/addLove",title:"请求中...",data:{mainDBname:i.dbName,dbName:i.dbName,tw_id:i.wid,from:"tw",comment_id:""},success:function(e){console.log(e),u.pubfn.isNull(e.id)||i.init(i.options),u.toast(e.msg,"none")}})},delCommentFunc:function(e,t){console.log(e),i.del.show=!0,i.del.type=t,i.del.comment=e},delConfirm:function(){u.callFunction({url:"client/general/kh/del",title:"请求中...",data:{mainDBname:i.dbName,dbName:"comment"===i.del.type?i.dbName+"_comment":i.dbName,tw_id:i.wid,childCommint:i.del.comment.comment_parent_status||!1,type:i.del.type,del_id:"comment"===i.del.type?i.del.comment._id:i.wid},success:function(e){console.log(e),0===e.code&&(i.getComment("init"),i.delCancel()),i.delCancel(),u.toast(e.msg,"none")},fail:function(){i.delCancel()}})},delCancel:function(){i.del={show:!1,content:"确定删除当前评论？",type:"",comment:{}}}}),m(o,"filters",{}),m(o,"computed",{mainLogo:function(){return a.default.staticUrl.logo},tabbar:function(){return this.vk.getVuex("$app.config.tabbar")||[]},userInfo:function(){return console.log("userInfo"),this.vk.getVuex("$user.userInfo")||{}},attentionStatusName:function(){return this.tutorialData.attentionStatus?this.$t("tutorial.attentioned"):this.$t("tutorial.attention")}}),o);t.default=d}).call(this,n("543d")["default"])},"8c04":function(e,t,n){"use strict";n.r(t);var o=n("2d40"),i=n("f92b");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);var a,l=n("f0c5"),m=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=m.exports},"905e":function(e,t,n){"use strict";(function(e){n("3d10"),n("921b");o(n("66fd"));var t=o(n("8c04"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},f92b:function(e,t,n){"use strict";n.r(t);var o=n("43fd"),i=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=i.a}},[["905e","common/runtime","common/vendor"]]]);