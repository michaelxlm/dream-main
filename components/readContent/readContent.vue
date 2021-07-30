<template>
	<u-read-more ref="uReadMore" :shadow-style="shadowStyle" :show-height="800" :toggle="true">
		<u-parse :html="content"></u-parse>
	</u-read-more>
</template>

<script>
	/**
	 * 时间轴图文显示
	 * 
	 * */
	export default {
		name: "readContent",
		props: {
			content: {
				type: String,
				default () {
					return '';
				}
			},
		},
		data() {
			return {
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx"
				}, //文案样式
			};
		},
		mounted() {
			this.$refs.uReadMore.init();
		},
	}
</script>