<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<!-- 图文导航 -->
				<vk-u-grid-button :datas='componentsDynamic["vk-test-grid-button-01"]' :custom-datas='customDatas' @click="click"></vk-u-grid-button>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				数据库交互
			</view>
			<view class="u-config-item">
				<view class="u-item-title">修改按钮1的数据库内容</view>
				<u-subsection vibrateShort :list="['还原修改按钮1的内容', '修改按钮1的内容']" @change="dataChange1"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">修改列数</view>
				<u-subsection vibrateShort :list="['还原列数为4列', '修改列数为3列']" @change="dataChange2"></u-subsection>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否显示边框</view>
				<u-subsection vibrateShort :list="['否', '是']" @change="borderChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否可滑动</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="isSwiperChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">修改列数</view>
				<u-subsection vibrateShort :list="['4', '3']" @change="colChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	var that;											// 当前页面对象
	var vk;												// vk依赖
	export default {
		data() {
			return {
				componentsDynamic:{},
				customDatas:{}
			};
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options) {
			that = this;
			vk = that.vk;
			//console.log("onLoad",options);
			that.init(options);
		},
		methods: {
			// 页面数据初始化函数
			init(options = {}){
				// 获取组件数据
				vk.pubfn.getComponentsDynamicData({
					that : that,
					ids : ["vk-test-grid-button-01"]
				});
			},
			set(key,value){
				that.$set(that.customDatas,key,value);
			},
			dataChange1(index){
				let data_value = JSON.parse(JSON.stringify(that.componentsDynamic["vk-test-grid-button-01"]));
				if(index == 1){
					// 修改
					data_value.list[0].text = "修改后的按钮1222";
					data_value.list[0].icon = "https://img2.baidu.com/it/u=528808604,872300859&fm=26&fmt=auto&gp=0.jpg";
				}else{
					// 还原
					data_value.list[0].text = "按钮1";
					data_value.list[0].icon = "red-packet";
				}
				that.callFunction({
					data_id:"vk-test-grid-button-01",
					data_value:data_value
				});
			},
			dataChange2(index){
				let data_value = JSON.parse(JSON.stringify(that.componentsDynamic["vk-test-grid-button-01"]));
				if(index == 1){
					// 修改
					data_value.col = 3;
				}else{
					// 还原
					data_value.col = 4;
				}
				that.callFunction({
					data_id:"vk-test-grid-button-01",
					data_value:data_value
				});
			},
			callFunction(obj){
				vk.callFunction({
					url: 'plugs/components_dynamic/client/pub/update',
					title:'请求中...',
					data:{
						data_id:obj.data_id,
						data_value:obj.data_value
					},
					success(data) {
						// 修改成功
						that.toast(`修改成功`);
						that.init();
					}
				});
			},
			isSwiperChange(index) {
				let isSwiper = index == 0 ? true : false;
				that.set("isSwiper",isSwiper);
			},
			borderChange(index) {
				let border = index == 1 ? true : false;
				that.set("border",border);
			},
			colChange(index) {
				let col = index == 0 ? 4 : 3;
				that.set("col",col);
			},
			click(item) {
				vk.toast(`点击了${item.text}`,"none");
			},
			toast(title) {
				this.$refs.uToast.show({
					title: title,
					type: 'warning'
				})
			},
		}
	};
</script>

<style scoped lang="scss">
.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $u-type-info;
}

.badge-icon {
	position: absolute;
	width: 40rpx;
	height: 40rpx;
}

.swiper {
	height: 480rpx;
}

.indicator-dots {
	margin-top: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.indicator-dots-item {
	background-color: $u-tips-color;
	height: 6px;
	width: 6px;
	border-radius: 10px;
	margin: 0 3px;
}

.indicator-dots-active {
	background-color: $u-type-primary;
}
/* start--演示页面使用的统一样式--start */
	.u-demo {
		padding: 50rpx 40rpx;
	}
	
	.u-demo-wrap {
		border-width: 1px;
		border-color: #ddd;
		border-style: dashed;
		background-color: rgb(250, 250, 250);
		padding: 40rpx 20rpx;
		border-radius: 6px;
	}
	
	.u-demo-area {
		text-align: center;
	}
	
	.u-no-demo-here {
		color: $u-tips-color;
		font-size: 26rpx;
	}
	
	.u-demo-result-line {
		border-width: 1px;
		border-color: #ddd;
		border-style: dashed;
		padding: 10rpx 40rpx;
		margin-top: 30rpx;
		border-radius: 5px;
		background-color: rgb(240, 240, 240);
		color: $u-content-color;
		font-size: 32rpx;
		/* #ifndef APP-NVUE */
		word-break: break-word;
		display: inline-block;
		/* #endif */
		text-align: left;
		
	}
	
	.u-demo-title,
	.u-config-title {
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 40rpx;
	}
	
	.u-config-item {
		margin-top: 50rpx;
	}
	
	.u-config-title {
		margin-top: 40rpx;
		padding-bottom: 10rpx;
	}
	
	.u-item-title {
		position: relative;
		font-size: 28rpx;
		padding-left: 8px;
		line-height: 1;
		margin-bottom: 22rpx;
	}
	
	.u-item-title:after {
		position: absolute;
		width: 4px;
		top: -1px;
		height: 16px;
		/* #ifndef APP-NVUE */
		content: '';
		/* #endif */
		left: 0;
		border-radius: 10px;
		background-color: $u-content-color;
	}
	/* end--演示页面使用的统一样式--end */
</style>
