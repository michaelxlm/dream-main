<template>
	<view class="detailCompontent">
		<view class="contentView">
			<view class="header">
				<!-- 头像 -->
				<u-avatar v-if="vk.pubfn.isNotNull(tutorialData.author)" :src="tutorialData.author.avatar"></u-avatar>
				<view class="author">
					<!-- 作者名 -->
					{{vk.pubfn.isNotNull(tutorialData.author)?tutorialData.author.nickname:'匿名'}}
					<view>
						<view>
							<!-- 创建时间 -->
							{{vk.pubfn.dateDiff(tutorialData._add_time)}}
						</view>
						<view v-if="vk.pubfn.isNotNull(tutorialData.author)">
							<!-- 标签 -->
							{{tutorialData.author.tags?tutorialData.author.tags:''}}
						</view>
					</view>
				</view>
				<view class="attention">
					<!-- 关注 -->
					<u-button v-if="vk.pubfn.isNotNull(attentionStatusName)" shape="circle" @click="attentionFunc()"
						:plain="false" :hair-line="false">
						{{attentionStatusName}}
					</u-button>
				</view>
			</view>
			<!-- 描述 -->
			<u-parse :html="tutorialData.text"></u-parse>
			<view v-if="vk.pubfn.isNotNull(tutorialData.imageList)"
				:class="tutorialData.imageList.length === 4 ?'photoAlbum-4':'photoAlbum-9'">
				<view class="photoItem" v-for="(itm, idx) in tutorialData.imageList" :key="itm.url">
					<view class="imgView">
						<u-image width="100%" height="100%" :src="itm.url" mode="aspectFill" :border-radius="10">
						</u-image>
					</view>
				</view>
			</view>
		</view>
		<view v-if="vk.pubfn.isNotNull(commentList)">
			<u-gap height="20" bg-color="#bbb"></u-gap>
			<!-- 评论列表 -->
			<view class="comment" v-for="(commentItem, index) in commentList" :key="commentItem._id">
				<u-avatar v-if="vk.pubfn.isNotNull(tutorialData.author)" :src="tutorialData.author.avatar" :size="64">
				</u-avatar>
				<view class="right">
					<view class="top">
						<view class="name">{{ vk.pubfn.isNotNull(commentItem.author)?commentItem.author.nickname:'匿名' }}
						</view>
						<view class="like" :class="{ highlight: vk.pubfn.isNotNull(commentItem.isLikeList._id)}">
							<view class="num">{{ commentItem.loveNumber }}</view>
							<u-icon v-if="!vk.pubfn.isNotNull(commentItem.isLikeList)" name="thumb-up" :size="30"
								color="#9a9a9a" @click="getLike(commentItem._id)"></u-icon>
							<u-icon v-else name="thumb-up-fill" :size="30"
								@click="delLike(commentItem._id,commentItem.isLikeList._id)">
							</u-icon>
						</view>
					</view>
					<view class="content">{{ commentItem.commentText }}</view>
					<view class="reply-box" v-if="vk.pubfn.isNotNull(commentItem.replyList)">
						<view class="item" v-for="(item, index) in commentItem.replyList" :key="item.index">
							<view class="username">{{ vk.pubfn.isNotNull(item.author)?item.author.nickname:'匿名' }}
							</view>
							<view class="text">{{ item.commentText }}</view>
						</view>
						<view class="all-reply" @tap="toAllReply(commentItem._id)"
							v-if="commentItem.replyList != undefined">
							共{{ commentItem.commentNumber }}条回复
							<u-icon class="more" name="arrow-right" :size="26"></u-icon>
						</view>
					</view>
					<view class="bottom">
						{{vk.pubfn.dateDiff(commentItem._add_time)}}
						<view class="replyButton" @click="replyCommentFunc(commentItem)">回复</view>
					</view>
				</view>
			</view>
			<u-divider v-if="!comment.hasMore">已显示全部评论</u-divider>
		</view>
		<u-popup v-model="addCommentPopup.status" mode="bottom" border-radius="14" height="180">
			<view class="addCommentPopup">
				<view class="issureCommentText">
					<u-input v-model="addCommentPopup.replyText" type="textarea" :border="false" :height="100"
						:auto-height="true" :focus="true" :placeholder="addCommentPopup.placeholder" />
				</view>
				<view class="issureCommentButton" @click="replyCommentSubmitFunc()">发表</view>
			</view>
		</u-popup>
		<view class="operationNavigation">
			<view class="issureComment">
				<u-input :placeholder="'发表评论'" :border="false" :height="56" :disabled="true"
					@click="replyCommentFunc()" />
			</view>
			<view class="operationButton">
				<view class="operationItem" @click="gotoCommentFunc()">
					<!-- 评论锚点 -->
					<u-icon name="chat" color="#2979ff" size="48"></u-icon>
					<u-badge :count="comment.total" :offset='[10,10]'></u-badge>
				</view>
				<view class="operationItem" @click="likeTWFunc()">
					<!-- 点赞 -->
					<u-icon :name="!likeStatus?'thumb-up':'thumb-up-fill'" color="#2979ff" size="48"></u-icon>
					<u-badge :count="tutorialData.loveNumber" :offset='[10,10]'></u-badge>
				</view>
				<view class="operationItem" @click="shareTWFunc()">
					<!-- 分享 -->
					<u-icon name="zhuanfa" color="#2979ff" size="48"></u-icon>
				</view>
			</view>
		</view>
		<u-back-top :scrollTop="scrollTop" :z-index="999"></u-back-top>

	</view>
</template>

<script>
	var that; // 当前页面对象
	var vk; // vk依赖
	export default {
		data() {
			return {
				wid: '', //图文id
				tutorialData: {},
				commentList: [], //评论列表
				comment: {
					total: 5,
					loadMoreStatus: false,
				},
				likeStatus: false, //是否点赞
				addCommentPopup: {
					status: false, //添加评论弹出框
					commentItem: {}, //评论父级内容
					replyText: '', //评论内容
					placeholder: '发表评论'
				},
				scrollTop: 0,
			}
		},
		// 监听 - 原生返回按钮
		onBackPress(e) {
			console.log("返回按钮", e);

		},
		onPageScroll(e) {
			that.scrollTop = e.scrollTop;
		},
		onShareAppMessage() {
			return {
				title: that.banner.title,
				path: '/pages/tutorial/tutorial?id=' + that.wid
			}
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options = {}) {
			that = this;
			vk = that.vk;
			that.options = options;
			if (vk.pubfn.isNotNull(options.id)) {
				that.init(options);
			} else {
				vk.navigateTo('/pages/error/404/404')
			}
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {

		},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('tutorial.title')
			});
		},
		// 监听 - 页面每次【隐藏时】执行(如：返回)
		onHide() {

		},
		// 监听 - 页面下拉刷新
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 监听 - 页面触底部
		onReachBottom(options) {},
		// 监听 - 窗口尺寸变化(仅限:App、微信小程序)
		onResize() {

		},
		// 监听 - 点击右上角转发时
		onShareAppMessage(options) {

		},
		// 函数
		methods: {
			// 页面数据初始化函数
			init(options) {
				that.wid = options.id
				vk.callFunction({
					url: 'client/general/pub/findById',
					title: '请求中...',
					data: {
						dbName:"tw",
						where: {
							_id: that.wid,
							status: 0
						}
					},
					success(res) {
						if (vk.pubfn.isNotNull(res.rows)) {
							that.tutorialData = res.rows[0]
							if (vk.pubfn.isNotNull(that.tutorialData.isLikeMine._id)) {
								that.likeStatus = true
							} else{
								that.likeStatus = false
							}
						}
					}
				});
				that.getComment();
			},
			// 跳转到全部回复
			toAllReply(id) {
				vk.navigateTo('/pages/tutorial/reply?parent_comment_id=' + id + '&wid=' + that.wid)
			},
			// 关注/取消关注
			attentionFunc() {

			},
			// 点赞
			getLike(comment_id) {
				vk.callFunction({
					url: 'client/comment/kh/addLove',
					title: '请求中...',
					data: {
						tw_id: that.wid, //图文ID
						comment_id: comment_id, //描述
					},
					success(res) {
						console.log(res)
						if (!vk.pubfn.isNull(res.id)) {
							this.commentList[index].likeNum++;
						}
					}
				});
			},
			// 取消点赞
			delLike(comment_id, comment_like_id) {
				vk.callFunction({
					url: 'client/comment/kh/delLove',
					title: '请求中...',
					data: {
						comment_like_id: comment_like_id, //图文ID
						comment_id: comment_id, //描述
					},
					success(res) {
						console.log(res)
						if (!vk.pubfn.isNull(res.id)) {
							this.commentList[index].likeNum--;
						}
					}
				});
			},
			// 获评论列表
			getComment() {
				vk.callFunction({
					url: 'client/comment/kh/getList',
					title: '请求中...',
					data: {
						where: {
							tw_id: that.wid,
							status: 0
						}
					},
					success(res) {
						console.log(res)
						if (vk.pubfn.isNotNull(res.rows)) {
							that.commentList = res.rows
							that.comment.hasMore = res.hasMore
							that.comment.total = res.total
						} else {}
					}
				});
			},
			// 点击回复评论
			replyCommentFunc(commentItem) {
				console.log(commentItem)
				if (vk.pubfn.isNotNull(commentItem)) { //回复评论
					that.addCommentPopup.commentItem = commentItem
					that.addCommentPopup.placeholder = '回复' + commentItem.author.nickname + ''
				} else { //添加新评论
					that.addCommentPopup.commentItem = {}
					that.addCommentPopup.placeholder = ''
				}
				that.addCommentPopup.status = true
			},
			//提交评论
			replyCommentSubmitFunc() {
				console.log('client/comment/kh/add')
				let params = {
					tw_id: that.wid, //图文ID
					commentText: that.addCommentPopup.replyText || '', //描述
					comment_reply_status: false,
					reply_uid: '',
					reply_comment_id: '',
				}
				if (vk.pubfn.isNotNull(that.addCommentPopup.commentItem)) {
					params.comment_parent_status = true;
					params.parent_uid = that.addCommentPopup.commentItem.uid || '';
					params.parent_comment_id = that.addCommentPopup.commentItem._id || '';
				} else {
					params.comment_parent_status = false;
					params.parent_uid = '';
					params.parent_comment_id = '';
				}
				vk.callFunction({
					url: 'client/comment/kh/add',
					title: '请求中...',
					data: params,
					success(res) {
						console.log(res)
						if (Number(res.code) === 0) {
							that.addCommentPopupClose()
						}
					}
				});
			},
			//关闭评论弹窗
			addCommentPopupClose() {
				that.addCommentPopup = {
					status: false, //添加评论弹出框
					commentItem: {}, //评论父级内容
					replyText: '', //评论内容
					placeholder: '发表评论'
				}
			},
			//滚动到评论列表
			gotoCommentFunc() {
				that.$u.getRect('.comment').then(res => {
					uni.pageScrollTo({
						scrollTop: that.scrollTop + res.top,
						duration: 0
					})
				})
			},
			// 点赞图文
			likeTWFunc() {
				if (!that.likeStatus) {
					vk.callFunction({
						url: 'client/wordImg/kh/addLove',
						title: '请求中...',
						data: {
							tw_id: that.wid, //图文ID
						},
						success(res) {
							if (res.code === 0) {
								that.likeStatus = true
								that.tutorialData.loveNumber += 1
							}
						}
					});
				} else {
					console.log(that.tutorialData)
					console.log(that.tutorialData.isLikeMine)
					vk.callFunction({
						url: 'client/wordImg/kh/delLove',
						title: '请求中...',
						data: {
							tw_id: that.wid, //图文ID
							like_id: that.tutorialData.isLikeMine._id, //图文点赞ID
						},
						success(res) {
							if (res.code === 0) {
								that.likeStatus = false
								that.tutorialData.loveNumber -= 1
							}
						}
					});
				}
			},
			// 分享图文
			shareTWFunc() {
				that.collectStatus = !that.collectStatus
			}
		},
		// 过滤器
		filters: {

		},
		// 计算属性
		computed: {
			tabbar() {
				return this.vk.getVuex('$app.config.tabbar') || []
			},
			attentionStatusName() {
				return this.tutorialData.attentionStatus ? this.$t('tutorial.attentioned') : this.$t(
					'tutorial.attention')
			}
		}
	}
</script>
