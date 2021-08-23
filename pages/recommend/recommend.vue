<template>
	<view>
		<contentList :list="data.list"></contentList>
		<u-back-top :scrollTop="scrollTop" :z-index="999"></u-back-top>
	</view>
</template>

<script>
	var that; // 当前页面对象
	var vk; // vk依赖
	export default {
		data() {
			return {
				url: 'client/general/pub/getList',
				data: {
					list: [], // 列表数据
					hasMore: false, // 是否还能加载下一页
				},
				// 表单请求数据
				form1: {
					dbName:'tw',
					whereJson: {
						status: 0,
					},
					sortArr: [{
						name: '_add_time',
						type: 'desc'
					}],
					pageIndex: 1, //当前页码
					pageSize: 10, //每页显示数量
				},
				componentsDynamic: {},
				scrollTop: 0,
			}
		},
		// 计算属性
		computed: {
			recommendSettingList() {
				return this.componentsDynamic['recommendSetting'] ? this.componentsDynamic['recommendSetting']['list'] : []
			},
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options = {}) {
			that = this;
			vk = that.vk;
			that.options = options;
			vk.pubfn.getComponentsDynamicData({
				that: that,
				ids: [
					"recommendSetting"
				]
			});
		},
		onReady() {
			that.init();
		},
		onNavigationBarButtonTap(e) {
			vk.onNavigationBarButtonTap({
				e,
				that
			});
		},
		onPageScroll(e) {
			that.scrollTop = e.scrollTop;
		},
		onShow() {
			let title = that.recommendSettingList.length > 0 ? that.recommendSettingList[0].title : that.$t(
				'nav.recommend')
			uni.setNavigationBarTitle({
				title: title
			});
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
		methods: {
			// 页面数据初始化函数
			// 页面数据初始化函数
			init(options) {
				that.getList()
			},
			getList(obj = {}) {
				that.form1.sortArr = that.recommendSettingList.length > 0 ? that.recommendSettingList[0].sortArr : [{
					name: 'recommendNumber',
					type: 'desc'
				}]
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
					that.getList();
				}
			},
		}
	}
</script>
