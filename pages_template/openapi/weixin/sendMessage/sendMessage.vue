<template>
	<view class="app">
		<!-- 页面内容开始 -->
		<button @click="subscribeMessage1">订阅一次消息1</button>
		<button @click="subscribeMessage2">订阅一次消息2</button>
		<button @click="sendMessage">发送订阅消息</button>
		{{ JSON.stringify(data) }}
		<!-- 页面内容结束 -->
	</view>
</template>

<script>
	var that;											// 当前页面对象
	var vk;												// vk依赖
export default {
	data() {
		// 页面数据变量
		return {
			data : {}
		};
	},
	// 监听 - 页面每次【加载时】执行(如：前进)
	onLoad(options = {}) {
		that = this;
		vk = that.vk;
		that.options = options;
		that.init(options);
	},
	// 函数
	methods: {
		// 页面数据初始化函数
		init(options) {},
		// 注意 tmplIds内要改成你自己小程序申请到的订阅消息ID
		subscribeMessage1(){
			uni.requestSubscribeMessage({
			  tmplIds: [
					'UmINo5I6IcqktIwNt2TVorkU7f4dzd4eyNjfvOiwEC0',
					'uf7MotUXQ3GZWx-XftvsWtT355oNaEdMHuW_zt8WAcQ',
					'ZttnDpfQvZeu2BaqM_-rpnDp6eebXnXDsJ2nJkenT9k'
				]
			});
		},
		subscribeMessage2(){
			// 注意 tmplIds内要改成你自己小程序申请到的订阅消息ID
			uni.requestSubscribeMessage({
			  tmplIds: [
					'iC3hOtB2iSy1T0cqy7YtyIamcA3qt2z1wMEOA76IJtA',
					'w4oStuL2rl6Gqpy91mgN7tzk6MDt6eFPs8nofnfMcNM',
					'NcspDBQpH6CGHos3mMADrrQpEv2gHmtfOPa5KTLs92E',
				]
			});
		},
		sendMessage(obj) {
			// 需要先绑定微信
			new Promise((resolve, reject) => {
				// #ifdef MP-WEIXIN
				vk.userCenter.code2SessionWeixin({
					success:function(data){
						resolve(data.openid);
					}
				});
				// #endif
				// #ifndef MP-WEIXIN
				resolve(vk.getVuex('$user.userInfo.wx_openid.mp-weixin'));
				// #endif
			}).then((openid) => {
				vk.callFunction({
					url: "template/openapi/weixin/pub/sendMessage",
					title: "请求中...",
					data: {
						openid
					},
					success: function(data) {
						that.data = data;
					}
				});
			});	
		}
	},
	// 过滤器
	filters: {},
	// 计算属性
	computed: {}
};
</script>
<style lang="scss" scoped>
	.app {
		padding: 30rpx;
	}
	.app button {
		margin-bottom: 30rpx;
	}
	.tips {
		font-size: 28rpx;
		color: #999999;
		margin-bottom: 32rpx;
	}
</style>
