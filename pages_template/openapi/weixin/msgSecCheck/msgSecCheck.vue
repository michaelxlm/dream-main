<template>
	<view class="app">
		<!-- 页面内容开始 -->
		<textarea v-model="form1.text" style="width: 100%;"></textarea>
		<button @click="msgSecCheck">检测文字是否违规</button>
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
			form1: {
				text: "特3456书yuuo莞6543李zxcz蒜7782法fgnv级"
			}
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
		msgSecCheck(obj) {
			vk.callFunction({
				url: "template/openapi/weixin/pub/msgSecCheck",
				title: "检测中...",
				data: {
					content: that.form1.text
				},
				success: function(data) {
					that.data = data;
				},
				fail: function(data) {
					vk.toast(data.msg, "none");
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
