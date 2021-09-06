<template>
	<view>
		<view class="time_card" v-show="vk.pubfn.isNotNull(nowTime)">
			<view class="time_card_detail">{{nowTime.hours}}:{{nowTime.minutes}}</view>
			<view class="time_card_other">
				<view>{{nowTime.year}}年{{nowTime.month}}月{{nowTime.day}}日</view>
				<view>(星期{{nowTime.weekText}})</view>
				<view>(GMT{{nowTime.OffsetUTC}})</view>
			</view>
		</view>
		<!-- <view class="Rubik">
			<view class="leftItem" @click="pageTo('/pages/issue/time')">发布</view>
			<view class="rightItem">
				<view class="rightItemTop" @click="pageTo('/pages/issue/time')">每年</view>
				<view class="rightItemBottom" @click="">单次</view>
			</view>
		</view> -->
		<view v-if="bindMobileStatus">
			<!-- <u-tabs :list="tabSortList" :is-scroll="false" active-color="#2979ff" :current="tabCurrent" name="title"
				@change="tabChange">
			</u-tabs> -->
			<contentList :list="data.list"></contentList>
			<uni-fab :pattern="{
				color:'#3c3e49',
				selectedColor:'#007AFF',
				backgroundColor:'#ffffff',
				buttonColor:'#3c3e49',
			}" :popMenu="false" vertical="bottom" horizontal="right" @fabClick="pageTo('/pages/issue/index')"></uni-fab>
		</view>
		<view v-else class="u-text-center u-m-t-32">
			<!-- #ifdef MP-WEIXIN -->
			<u-button ripple-bg-color="#909399" :plain="true" type="primary" open-type="getPhoneNumber" size="medium"
				@getphonenumber="loginByWeixinPhoneNumber">
				手机号绑定
			</u-button>
			<!-- #endif -->
		</view>
		<!-- <u-button @click="pageTo('/pages_template/uni-id/index/index')">实例</u-button> -->
		<u-back-top :scrollTop="scrollTop" :z-index="999"></u-back-top>
	</view>
</template>


<script>
	var that; // 当前页面对象
	var vk; // vk依赖
	var setIntervalTime;
	export default {
		data() {
			// 页面数据变量
			return {
				nowTime: {},
				url: 'client/general/pub/getList',
				data: {
					list: [], // 列表数据
					hasMore: false, // 是否还能加载下一页
				},
				// 表单请求数据
				form1: {
					dbName: 'tw',
					whereJson: {
						status: 0,
					},
					findSelf: true,
					uid: '',
					sortArr: [{
						name: '_add_time',
						type: 'desc'
					}],
					fieldJson: {
						text: true,
						uid: true, //用户id
						status: true, // 0-正常
						heatNumber: true, //热度值
						_add_time: true, //创建时间  
					},
					pageIndex: 1, //当前页码
					pageSize: 10, //每页显示数量
				},
				tabCurrent: 0, //排序
				scrollTop: 0,
			}
		},
		watch: {},
		onNavigationBarButtonTap(e) {
			vk.onNavigationBarButtonTap({
				e,
				that
			});
		},
		onPageScroll(e) {
			that.scrollTop = e.scrollTop;
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options = {}) {
			that = this;
			vk = that.vk;
			that.options = options;
			that.init(options);
			clearInterval(setIntervalTime)
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {

		},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {
			clearInterval(setIntervalTime)
			uni.setNavigationBarTitle({
				title: that.$t('nav.index')
			});
			that.getList()
			setIntervalTime = setInterval(function() {
				that.nowTime = vk.myfn.getSystemDetailTime()
			}, 1000)
		},
		// 监听 - 页面每次【隐藏时】执行(如：返回)
		onHide() {
			clearInterval(setIntervalTime)
		},
		// 监听 - 页面下拉刷新
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 监听 - 页面触底部
		onReachBottom(options) {
			that.nextPage();
		},
		// 监听 - 窗口尺寸变化(仅限:App、微信小程序)
		onResize() {

		},
		// 监听 - 点击右上角转发时
		onShareAppMessage(options) {

		},
		// 监听 - 页面创建时
		created() {

		},
		// 函数
		methods: {
			// 页面数据初始化函数
			init(options) {


			},
			// 使用微信绑定的手机号登录/注册
			loginByWeixinPhoneNumber(e) {
				let {
					encryptedData,
					iv
				} = e.detail;
				if (!encryptedData || !iv) {
					return false;
				}
				vk.userCenter.code2SessionWeixin({
					data: {
						needCache: true
					},
					success: function(data) {
						vk.userCenter.getPhoneNumber({
							data: {
								encryptedData,
								iv,
								sessionKey: data.sessionKey
							},
							success(phone) {
								console.log(phone.data)
								vk.userCenter.bindMobile({
									data: {
										uid: vk.getVuex('$user.userInfo._id'),
										mobile: phone.mobile
									},
									success(res) {
										that.vk.setVuex('$user.userInfo', res.userInfo || {});
										console.log('loginByWeixinPhoneNumber')
										that.getList()
									}
								});
							},
							fail() {
								that.getList()
							}
						});
					},
					fail() {
						that.getList()
					}
				});


			},
			// 获取数据
			getList(obj = {}) {
				that.form1.sortArr = that.tabSortList.length > 0 ? that.tabSortList[that.tabCurrent].sortArr : [{
					name: '_add_time',
					type: 'desc'
				}];
				that.form1.uid = that.userInfo._id
				vk.pubfn.getListData({
					that: that,
					url: that.url,
					success: obj.success
				});
			},
			// 加载下一页数据
			nextPage() {
				if (that.data.hasMore) {
					that.form1.pageIndex++;
					console.log('nextPage')
					that.getList();
				}
			},
			pageTo(path) {
				clearInterval(setIntervalTime)
				vk.navigateTo(path);
			},
			/* 排序发生改变时出发 */
			tabChange(index) {
				console.log('tabChange')
				that.tabCurrent = index
				that.getList()
			}
		},
		// 过滤器
		filters: {

		},
		// 计算属性
		computed: {
			userInfo() {
				return this.vk.getVuex('$user.userInfo') || {}
			},
			bindMobileStatus() {
				let mobile = this.vk.getVuex('$user.userInfo.mobile') || null
				return this.vk.pubfn.isNotNull(mobile)
			},
			tabSortList() {
				return this.vk.getVuex('$app.componentsDynamic.indexListSort.list') || []
			},
		}
	}
</script>
<style lang="scss" scoped>
</style>
