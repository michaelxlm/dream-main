<template>
	<view>
		<!-- 页面内容开始 -->
		<view class="vk-search-view">
			<!--头部开始 -->
				<view class="list-search">
					<u-search :placeholder="$t('main.serchPlaceholder')" v-model="form1.searchvalue" :show-action="false" input-align="center"
						shape="square" @search="onSearch">
					</u-search>
				</view>
				<view class="list-head-desc-text">共<text>{{data.total}}</text>条记录</view>
			<!--头部结束 -->
			<!--无内容时 -->
			<view v-if="data.list.length == 0" style="padding: 40% 0 80% 0;">
				<u-empty text="暂无内容" mode="list"></u-empty>
			</view>
			<!--有内容时开始-->
			<view v-if="vk.pubfn.isNotNull(data.list)">
				<contentList :list="data.list"></contentList>
				<!-- 加载更多 -->
				<u-loadmore :status="data.loadmore" bg-color="#f8f8fa" :margin-bottom="30" @loadmore="nextPage" />
			</view>
			<!--有内容时结束-->
		</view>
		<!-- 页面内容结束 -->
		<u-back-top :scrollTop="scrollTop" :z-index="999"></u-back-top>
	</view>
</template>


<script>
	var that; // 当前页面对象
	var vk; // vk依赖
	export default {
		data() {
			// 页面数据变量
			return {
				url: "client/wordImg/pub/getList", // 获取list数据的云函数请求路径
				// init请求返回的数据
				data: {
					list: [], // 列表数据
					pageKey: true, // 是否还能加载下一页
					loadmore: "loading",
				},
				// 表单请求数据
				form1: {
					addTime: "",
					endTime: "",
					searchvalue: "",
					pageIndex: 1, //当前页码
					pageSize: 10, //每页显示数量
				},
				scrollTop: 0,
			}
		},
		onNavigationBarButtonTap(e) {
			vk.onNavigationBarButtonTap({
				e,
				that
			});
		},
		// 监听 - 原生返回按钮
		onBackPress(e) {
			console.log("返回按钮", e);

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
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {

		},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {
			uni.setNavigationBarTitle({
				title: that.$t('main.serch')
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
				console.log("init: ", options);
				that.getList({
					success: function() {

					}
				});
			},
			pageTo(path) {
				vk.navigateTo(path);
			},
			// 查询list数据
			getList(obj = {}) {
				vk.pubfn.getListData({
					that: that,
					url: that.url,
					success: obj.success
				});
			},
			// 加载下一页数据
			nextPage() {
				if (that.data.loadmore == "loadmore") {
					that.data.loadmore = "loading";
					that.form1.pageIndex++;
					that.getList();
				}
			},
			// 搜索
			onSearch(e) {
				console.log("搜索", that.form1.searchvalue);
				that.form1.pageIndex = 1;
				that.data.pageKey = true;
				that.getList();
			},
			// 列的点击事件
			itemBtn(item) {
				console.log("点击", item);
				vk.toast("点击" + item._id.substring(20));
			}
		},
		// 过滤器
		filters: {

		},
		// 计算属性
		computed: {
			tabbar() {
				return this.vk.getVuex('$app.config.tabbar') || []
			}
		}
	}
</script>
<style lang="scss" scoped>
	page {
		min-height: 100vh;
	}
</style>
