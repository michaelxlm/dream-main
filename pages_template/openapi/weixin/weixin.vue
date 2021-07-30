<template>
	<view class="content">
		<button type="default" @tap="getWeixinMPqrcode">生成带参数的小程序码</button>
		<view style="text-align: center;" v-if="imageUrl">
			<image :src="imageUrl" style="width: 400rpx;height: 400rpx;"></image>
		</view>
		<button type="default" @tap="getWeixinMPscheme">生成带参数的scheme码</button>
		<view class="tips" v-if="openlink">
			<view>将下方链接复制后从手机浏览器打开即可打开小程序</view>
			<view>{{ openlink }}</view>
		</view>
		<button type="default" @tap="vk.navigateTo('msgSecCheck/msgSecCheck')">文本安全检测</button>
		<button type="default" @tap="vk.navigateTo('imgSecCheck/imgSecCheck')">图片安全检测</button>
		<button type="default" @tap="vk.navigateTo('sendMessage/sendMessage')">发送订阅消息</button>
	</view>
</template>

<script>
var that;		// 当前页面对象
var vk;			// vk依赖
export default {
	data() {
		return {
			imageUrl: "",
			openlink: ""
		};
	},
	onLoad(options) {
		that = this;
		vk = that.vk;
		that.options = options;
		that.init(options);
	},
	methods: {
		// 初始化
		init(options) {},
		// 生成带参数的小程序码
		getWeixinMPqrcode() {
			vk.userCenter.getWeixinMPqrcode({
				data: {
					scene: "a=1"
				},
				success(data) {
					that.imageUrl = data.base64;
				}
			});
		},
		// 生成带参数的小程序scheme码
		getWeixinMPscheme() {
			vk.userCenter.getWeixinMPscheme({
				data: {
					query: "a=1&b=2",
					path: "pages/index/index"
				},
				success(data) {
					that.openlink = data.openlink;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	padding: 30rpx;
}
.content button {
	margin-bottom: 30rpx;
}
.tips {
	font-size: 28rpx;
	color: #999999;
	margin-bottom: 32rpx;
}
</style>
