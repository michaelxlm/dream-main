<template>
	<view class="u-text-center">
		<u-image :src="errorPageImage" width="750" height="400rpx" :show-error="false"
			:show-loading="false"></u-image>
		<view class="u-flex u-m-t-42 u-row-center ">
			<u-button shape="circle" @click="returnIndexFunc()" :plain="false" :hair-line="false">
				{{$t('main.returnIndex')}}
			</u-button>
		</view>
	</view>
</template>

<script>
	import config from '@/app.config.js'
	var that; // 当前页面对象
	var app = getApp(); // 可获取全局配置
	var vk = app.globalData.vk; // vk依赖
	export default {
		data() {
			// 页面数据变量
			return {

			}
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
			init(options) {
				console.log("init: ", options);
			},
			returnIndexFunc() {
				vk.redirectTo('/pages/index/index');
			}
		},
		// 过滤器
		filters: {

		},
		// 计算属性
		computed: {
			errorPageImage() {
				return config.error.pageImage
			}
		}
	}
</script>
<style lang="scss" scoped>


</style>
