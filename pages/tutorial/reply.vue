<template>
	<view class="detailCompontent">
		<view class="commentReply">
			<view class="top">
				<view class="left">
					<view class="heart-photo">
						<u-avatar v-if="vk.pubfn.isNotNull(comment.author)" :src="comment.author.avatar">
						</u-avatar>
					</view>
					<view class="user-info">
						<view class="name">{{ vk.pubfn.isNotNull(comment.author)?comment.author.nickname:'匿名' }}</view>
						<view class="date">{{vk.pubfn.dateDiff(comment._add_time)}}
						</view>
					</view>
				</view>
				<view class="right" :class="{ highlight: vk.pubfn.isNotNull(comment.isLikeList) }">
					{{ comment.loveNumber }}
					<u-icon v-if="!vk.pubfn.isNotNull(comment.isLikeList)" name="thumb-up" class="like" color="#9a9a9a"
						:size="30" @click="getLike(comment.isLikeList._id)"></u-icon>
					<u-icon v-else name="thumb-up-fill" class="like" :size="30"
						@click="delLike(comment._id,comment.isLikeList._id)">
					</u-icon>
				</view>
			</view>
			<view class="content">{{ comment.commentText }}</view>
		</view>
		<view class="all-reply">
			<view class="all-reply-top">全部回复（{{ total||0 }}）</view>
			<view class="item" v-for="(item, index) in replyList" :key="index">
				<view class="commentReply">
					<view class="top">
						<view class="left">
							<view class="heart-photo">
								<u-avatar v-if="vk.pubfn.isNotNull(item.author)" :src="item.author.avatar" :size="64">
								</u-avatar>
							</view>
							<view class="user-info">
								<view class="name">{{ vk.pubfn.isNotNull(item.author)?item.author.nickname:'匿名' }}
								</view>
								<view class="date">{{vk.pubfn.dateDiff(item._add_time)}}
									<view class="replyButton" @click="replyCommentFunc(item)">回复</view>
								</view>
							</view>
						</view>
						<view class="right" :class="{ highlight: vk.pubfn.isNotNull(item.isLikeList)}">
							<view class="num">{{ item.loveNumber }}</view>
							<u-icon v-if="!vk.pubfn.isNotNull(item.isLikeList)" name="thumb-up" class="like" :size="30"
								color="#9a9a9a" @click="getLike(item.isLikeList._id)"></u-icon>
							<u-icon v-else name="thumb-up-fill" class="like" :size="30"
								@click="delLike(item._id,item.isLikeList._id)"></u-icon>
						</view>
					</view>
					<view class="reply" v-if="vk.pubfn.isNotNull(item.reply._id)">
						<view class="username">
							{{ vk.pubfn.isNotNull(item.reply.author)?item.reply.author.nickname:'匿名' }}:</view>
						<view class="text">{{ item.reply.commentText }}</view>
					</view>
					<view class="content">{{ item.commentText }}</view>
				</view>
			</view>
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
					<u-badge :count="total" :offset='[10,10]'></u-badge>
				</view>
				<view class="operationItem" :class="{ highlight: vk.pubfn.isNotNull(comment.isLikeList) }">
					<u-icon v-if="!vk.pubfn.isNotNull(comment.isLikeList)" name="thumb-up" class="like" color="#2979ff"
						:size="48" @click="getLike(comment.isLikeList._id)"></u-icon>
					<u-icon v-else name="thumb-up-fill" class="like" :size="48" color="#2979ff"
						@click="delLike(comment._id,comment.isLikeList._id)">
					</u-icon>
					<u-badge :count="comment.loveNumber" :offset='[10,10]'></u-badge>
				</view>
				<view class="operationItem">
					<!-- 分享 -->
					<u-icon name="zhuanfa" color="#2979ff" size="48"></u-icon>
				</view>
			</view>
		</view>
		<u-back-top :scrollTop="scrollTop" :z-index="999"></u-back-top>
	</view>
</template>

<script>
	import config from '@/app.config.js'
	var that; // 当前页面对象
	var vk; // vk依赖
	export default {
		data() {
			return {
				options: {},
				comment: {},
				addCommentPopup: {
					status: false, //添加评论弹出框
					commentItem: {}, //评论父级内容
					replyText: '', //评论内容
					placeholder: '发表评论'
				},
				pageIndex: 1, //当前页码
				pageSize: 20, //每页显示数量
				total: 0, //回复数
				hasMore: false, //是否还有数据
				replyList: [], //回复列表
				scrollTop: 0,
			};
		},
		onLoad(options = {}) {
			that = this;
			vk = that.vk;
			that.options = options;
			if (vk.pubfn.isNotNull(that.options.parent_comment_id) || vk.pubfn.isNotNull(that.options.wid)) {
				that.getReply();
				that.getFindById()
			} else {
				uni.redirectTo({
					url: config.error.url
				});
			}
		},
		onPageScroll(e) {
			that.scrollTop = e.scrollTop;
		},
		// 监听 - 页面下拉刷新
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('issure.allReply')
			});
		},
		// 监听 - 页面触底部
		onReachBottom(options) {
			that.nextPage();
		},
		methods: {
			// 获取主评论
			getFindById() {
				vk.callFunction({
					url: 'client/comment/kh/findById',
					title: '请求中...',
					data: {
						whereJson: {
							_id: that.options.parent_comment_id,
							tw_id: that.options.wid,
							status: 0
						},
						sortArr: [{
							"name": "_add_time",
							"type": "desc"
						}]
					},
					success(res) {
						console.log(res)
						if (vk.pubfn.isNotNull(res.rows)) {
							that.comment = res.rows[0]
						} else {}
					}
				});
			},
			//滚动到评论列表
			gotoCommentFunc() {
				that.$u.getRect('.all-reply').then(res => {
					uni.pageScrollTo({
						scrollTop: that.scrollTop + res.top,
						duration: 0
					})
				})
			},
			// 点赞
			getLike(index) {
				if (index === 0 || index > 0) {
					this.replyList[index].isLike = !this.replyList[index].isLike;
					if (this.replyList[index].isLike == true) {
						this.replyList[index].likeNum++;
					} else {
						this.replyList[index].likeNum--;
					}
				} else {
					if (this.comment.isLike == true) {
						this.comment.isLike = !this.comment.isLike;
						this.comment.likeNum--;
					} else {
						this.comment.isLike = !this.comment.isLike;
						this.comment.likeNum++;
					}
				}
			},
			// 加载下一页数据
			nextPage() {
				if (that.hasMore) {
					that.pageIndex++;
					that.getReply();
				}
			},
			// 回复列表
			getReply() {
				vk.callFunction({
					url: 'client/comment/kh/getReplyList',
					title: '请求中...',
					data: {
						whereJson: {
							comment_parent_status: true,
							parent_comment_id: that.options.parent_comment_id,
							tw_id: that.options.wid,
							status: 0
						},
						sortArr: [{
							"name": "_add_time",
							"type": "desc"
						}],
						pageIndex: that.pageIndex, //当前页码
						pageSize: that.pageSize, //每页显示数量
					},
					success(res) {
						console.log(res)
						if (vk.pubfn.isNotNull(res.rows)) {
							that.replyList = res.rows
							that.hasMore = res.hasMore
							that.total = res.total
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
					tw_id: that.options.wid, //图文ID
					commentText: that.addCommentPopup.replyText || '', //描述
					comment_parent_status: true,
					parent_uid: that.comment.uid || '',
					parent_comment_id: that.comment._id || '',
				}
				if (vk.pubfn.isNotNull(that.addCommentPopup.commentItem)) {
					params.comment_reply_status = true;
					params.reply_uid = that.addCommentPopup.commentItem.uid || '';
					params.reply_comment_id = that.addCommentPopup.commentItem._id || '';
				} else {
					params.comment_reply_status = false;
					params.reply_uid = '';
					params.reply_comment_id = '';
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
						that.getReply();
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
		}
	};
</script>
