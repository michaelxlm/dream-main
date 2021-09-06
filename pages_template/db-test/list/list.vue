<template>
	<view class="app">
		<!-- 页面内容开始 -->
		<view class="vk-list-view">
			<!--头部开始 -->
			<view class="list-head">
				<view class="list-search">
					<u-search placeholder="输入金额搜索" v-model="form1.searchvalue" :show-action="false" input-align="center" shape="square" @search="onSearch" @clear="onSearch" ></u-search>
				</view>
				<view class="list-head-desc-text"> 共 <text class="list-head-text-num">{{ data.total }}</text> 条记录 </view>
			</view>
			<!--头部结束 -->
			<!--无内容时 -->
			<view v-if="data.list.length == 0" style="padding: 40% 0 80% 0;">
				<u-empty text="暂无内容" mode="list"></u-empty>
			</view>
			<!--有内容时开始-->
			<view v-if="data.list.length > 0" class="list-view my-list-view">
				<view v-for="(item, index) in data.list" :key="item._id">
					<!-- 自定义item的内容开始 -->

					<view
						@click="itemBtn(item)"
						style="display: block;height: 200rpx;background-color: #FFFFFF;margin: 20rpx;"
					>
						{{ index + 1 }}: {_id: {{ item._id.substring(20) }}, money: {{ item.money }}}
						此处为你自己写的UI样式
					</view>

					<!-- 自定义item的内容结束 -->
				</view>
				<!-- 加载更多 -->
				<u-loadmore :status="data.loadmore" bg-color="#f8f8f8" margin-bottom="30" @loadmore="nextPage" />
			</view>
			<!--有内容时结束-->
		</view>
		<!-- 页面内容结束 -->
	</view>
</template>

<script>
var that;		// 当前页面对象
var vk;			// vk依赖
export default {
	data() {
		// 页面数据变量
		return {
			url: "template/db_api/pub/getList", // 获取list数据的云函数请求路径
			// init请求返回的数据
			data: {
				list: [], // 列表数据
				pageKey: true, // 是否还能加载下一页
				loadmore: "loading"
			},
			// 表单请求数据
			form1: {
				addTime: "",
				endTime: "",
				searchvalue: "",
				pageIndex: 1, //当前页码
				pageSize: 10 //每页显示数量
			},
			scrollTop: 0
		};
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
	onReady() {},
	// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
	onShow() {},
	// 监听 - 页面每次【隐藏时】执行(如：返回)
	onHide() {},
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
	onResize() {},
	// 监听 - 点击右上角转发时
	onShareAppMessage(options) {},
	// 函数
	methods: {
		// 页面数据初始化函数
		init(options) {
			console.log("init: ", options);
			that.getList({
				success: function() {}
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
	// 计算属性
	computed: {}
};
</script>
<style lang="scss" scoped>
page {
	background-color: #f8f8f8;
	min-height: 100vh;
}
/* list 开始 */
.vk-list-view {
	background-color: #f8f8f8;
}
.vk-list-view .list-view {
	padding: 0rpx 0rpx 20rpx 0rpx;
}
.vk-list-view .list-search {
	background-color: #ffffff;
	padding: 20rpx 30rpx;
}
.vk-list-view .list-head-desc-text {
	font-size: 28rpx;
	color: #999;
	padding: 20rpx 30rpx 0rpx 30rpx;
	padding-bottom: 0;
	line-height: 52rpx;
	width: 100%;
}
.vk-list-view .list-head-text-num {
	font-weight: bold;
	color: black;
	font-size: 26rpx;
	margin-left: 10rpx;
	margin-right: 10rpx;
}
/* list 结束 */
</style>
