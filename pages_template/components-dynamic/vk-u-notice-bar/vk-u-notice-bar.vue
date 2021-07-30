<template>
	<view class="app u-demo">
		<!-- 页面内容开始 -->
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast :type="type" ref="uToast"></u-toast>
				<vk-u-notice-bar :datas='componentsDynamic["vk-test-notice-bar-01"]' :custom-datas="customDatas" @click="click" @getMore="getMore"></vk-u-notice-bar>
				<vk-u-notice-bar :datas='componentsDynamic["vk-test-notice-bar-02"]' :custom-datas="customDatas" @click="click" @getMore="getMore"></vk-u-notice-bar>
				<vk-u-notice-bar :datas='componentsDynamic["vk-test-notice-bar-03"]' :custom-datas="customDatas" @click="click" @getMore="getMore"></vk-u-notice-bar>
				<vk-u-notice-bar :datas='componentsDynamic["vk-test-notice-bar-04"]' :custom-datas="customDatas" @click="click" @getMore="getMore"></vk-u-notice-bar>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				数据库交互
			</view>
			<view class="u-config-item">
				<view class="u-item-title">修改公告1组件的数据库内容</view>
				<u-subsection vibrateShort :list="['还原公告1的内容', '修改公告1的内容']" @change="dataChange1"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">修改公告2组件的数据库内容</view>
				<u-subsection vibrateShort :list="['还原公告2的内容', '修改公告2的内容']" @change="dataChange2"></u-subsection>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">主题</view>
				<u-subsection vibrateShort :current="3" :list="['primary', 'success', 'error', 'warning', 'none']" @change="typeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">滚动模式</view>
				<u-subsection vibrateShort  :list="['水平', '垂直']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-subsection vibrateShort :list="['播放', '暂停']" @change="playStateChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">图标</view>
				<u-subsection vibrateShort :list="['隐藏', '显示']" @change="iconChange"></u-subsection>
			</view>
		</view>
		<!-- 页面内容结束 -->
	</view>
</template>

<script>
	var that;											// 当前页面对象
	var vk;												// vk依赖
	export default {
		data() {
			return {
				componentsDynamic:{},
				customDatas:{},
			}
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
					ids : [
						"vk-test-notice-bar-01",
						"vk-test-notice-bar-02",
						"vk-test-notice-bar-03",
						"vk-test-notice-bar-04"
					]
				});
			},
			set(key,value){
				that.$set(that.customDatas,key,value);
			},
			dataChange1(index){
				let data_value = {
					list: []
				};
				if(index == 1){
					// 修改
					data_value.list = ["修改后的公告111111111111修改后的公告111111111111"];
				}else{
					// 还原
					data_value.list = ["公告111公告111公告111公告111公告111公告111公告111"];
				}
				that.callFunction({
					data_id:"vk-test-notice-bar-01",
					data_value:data_value
				});
			},
			dataChange2(index){
				let data_value = {
					list: []
				};
				if(index == 1){
					// 修改
					data_value.list = ["修改后的公告222222222222修改后的公告222222222222"];
				}else{
					// 还原
					data_value.list = ["公告222公告222公告222公告222公告222公告222公告222"];
				}
				that.callFunction({
					data_id:"vk-test-notice-bar-02",
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
			typeChange(index) {
				let type = ['primary', 'success', 'error', 'warning', 'none'];
				that.set("type",type[index]);
			},
			modeChange(index) {
				let mode = index == 0 ? 'horizontal' : 'vertical';
				that.set("mode",mode);
			},
			playStateChange(index) {
				let playState = index == 0 ? 'play' : 'paused';
				that.set("play-state",playState);
			},
			iconChange(index) {
				let moreIcon,volumeIcon;
				if(index == 1) {
					moreIcon = true;
					volumeIcon = true;
				} else {
					moreIcon = false;
					volumeIcon = false;
				}
				that.set("more-icon",moreIcon);
				that.set("volume-icon",volumeIcon);
			},
			close() {
				this.toast(`点击了关闭图标`);
			},
			click(index) {
				this.toast(`点击了消息`);
			},
			getMore() {
				this.toast(`点击了更多图标`);
			},
			toast(title) {
				this.$refs.uToast.show({
					title: title,
					type: 'warning'
				})
			},
			end() {
				// console.log('end');
			}
		},
		// 过滤器
		filters:{
			
		},
		// 计算属性
		computed:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		margin-top: 30px;
	}
	.app {
		padding: 30rpx;
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


