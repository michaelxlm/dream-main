<template>
	<view class="wrap">
		<view class="tips-view">
			<view style="font-size: 32rpx;font-weight: bold;">
				前后端一体动态数据组件优势:
			</view>
			<view style="margin-top: 20rpx;">
				1、减少APP或小程序的审核次数，页面组件局部更新不需要重新发布小程序，且实时生效。
			</view>
			<view style="margin-top: 20rpx;">
				2、方便维护，只需要修改数据库对应的组件数据即可达到修改页面的目的。
			</view>
			<view style="margin-top: 20rpx;">
				3、是支持可视化装修页面的必备能力。
			</view>
		</view>
		<view class="list-wrap">
			<u-cell-group title-bg-color="rgb(243, 244, 246)" :title="item.groupName" v-for="(item, index) in list" :key="index">
				<u-cell-item :titleStyle="{fontWeight: 500}" @click="pageTo(item1.path)" :title="item1.title" v-for="(item1, index1) in item.list" :key="index1">
					<image slot="icon" class="u-cell-icon" :src="getIcon(item1.icon)" mode="widthFix"></image>
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>


<script>
	var that;											// 当前页面对象
	var vk;												// vk依赖
	export default {
		data() {
			return {
				list: [
					{
						groupName: '动态数据组件 - 展示类组件',
						list:[
							{
								path: '../vk-u-notice-bar/vk-u-notice-bar',
								icon: 'noticeBar',
								title: 'vk-u-notice-bar 公告滚动通知',
							},
							{
								path: '../vk-u-swiper/vk-u-swiper',
								icon: 'swiper',
								title: 'vk-u-swiper 图片轮播',
							},
							{
								path: '../vk-u-grid-button/vk-u-grid-button',
								icon: 'grid',
								title: 'vk-u-grid-button 图文导航',
							}
						]
					}
				]
			}
		},
		computed: {
			getIcon() {
				return path => {
					return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
				}
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
				// 检查数据库,若没有测试数据,则自动添加测试数据
				vk.callFunction({
					url: 'plugs/components_dynamic/client/pub/init',
					title:'检查数据库...'
				});
			},
			pageTo(url) {
				vk.navigateTo({
					url:url
				})
			}
		}
	}
	
</script>
<style lang="scss" scoped>
	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
	.tips-view{
		padding: 30rpx;
		font-size: 30rpx;
	}
</style>
