<template>
	<view class="app">
		<!-- 页面内容开始 -->
		<button @click="chooseImage">上传图片,并检测图片是否违规</button>
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
			// init请求返回的数据
			data: {},
			// 表单请求数据
			form1: {}
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
		chooseImage() {
			// 选择一张图片
			uni.chooseImage({
				count: 1,
				sizeType: ["compressed"], //可以指定是原图还是压缩图，默认二者都有
				success: function(res) {
					let file = res.tempFiles[0];
					// 图片转base64
					vk.pubfn.fileToBase64({ file }).then(base64 => {
						if (file.size / 1024 / 1024 > 1) {
							vk.toast("图片不能大于1M", "none");
							return false;
						}
						vk.callFunction({
							url: "template/openapi/weixin/pub/imgSecCheck",
							title: "检测中...",
							data: {
								base64
							},
							success: function(data) {
								that.data = data;
							},
							fail: function(data) {
								vk.toast(data.msg, "none");
							}
						});
					});
				}
			});
		}
	},
	// 过滤器
	filters: {},
	// 计算属性
	computed: {}
};
</script>
<style lang="scss" scoped></style>
