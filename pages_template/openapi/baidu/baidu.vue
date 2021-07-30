<template>
	<view class="content">
		<button type="default" @tap="business_license">营业执照识别</button>
		<button type="default" @tap="idcard">身份证识别</button>

		<scroll-view scroll-x="true">
			<rich-text :nodes="`<pre>${JSON.stringify(data, null, 2)}</pre>`"></rich-text>
		</scroll-view>

	</view>
</template>

<script>
var that;		// 当前页面对象
var vk;			// vk依赖
export default {
	data() {
		return {
			data:{}
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
		init(options) {

		},
		// 营业执照识别
		business_license() {
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				success: function (res) {
					let file = res.tempFiles[0];
					vk.openapi.baidu.open.ocr.business_license({
						title:"识别中...",
						data: {
							file
						},
						success: (data) => {
							that.data = data;
						},
						fail:(err) => {
							that.data = err;
						}
					});
				}
			});
		},
		// 身份证识别
		idcard() {
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				success: function (res) {
					let file = res.tempFiles[0];
					vk.openapi.baidu.open.ocr.idcard({
						title:"识别中...",
						data: {
							file
						},
						success: (data) => {
							that.data = data; 
						},
					});
				}
			});
		},
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
