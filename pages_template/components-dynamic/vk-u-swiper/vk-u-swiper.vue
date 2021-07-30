<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<!-- 轮播 -->
				<vk-u-swiper :datas='componentsDynamic["vk-test-index-swiper-01"]' :custom-datas='customDatas' @click="click"></vk-u-swiper>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				数据库交互
			</view>
			<view class="u-config-item">
				<view class="u-item-title">修改组件动态数据内容</view>
				<u-subsection vibrateShort :list="['还原组件动态数据内容', '修改组件动态数据内容']" @change="dataChange1"></u-subsection>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">指示器模式</view>
				<u-subsection vibrateShort :list="['round', 'rect', 'number', 'none']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">标题</view>
				<u-subsection vibrateShort current="1" :list="['显示', '隐藏']" @change="titleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">指示器位置</view>
				<u-subsection vibrateShort current="3" :list="['上左', '上右', '下左', '下中', '下右']" @change="indicatorPosChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">3D效果</view>
				<u-subsection vibrateShort current="1" :list="['开启', '关闭']" @change="effect3dChange"></u-subsection>
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
					ids : ["vk-test-index-swiper-01"]
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
					data_value.list = [
						{
							"title": "修改后的标题11111111",
							"image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598597729217&di=87219dfad2f2e615c717961e422da5c3&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg"
						},
						{
							"title": "修改后的标题2222222",
							"image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598597729217&di=332b8b428f7dacff6b195d7c75df5c2f&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg"
						},
						{
							"title": "修改后的标题3333333",
							"image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598597754654&di=cbf48b7e5f2d1c0730684584559ad06f&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F180330%2F4-1P330160644.jpg"
						}
					]
				}else{
					// 还原
					data_value.list = [
						{
							"title": "标题11111111",
							"image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594798331539&di=fe544344d765e4f23f90457f02a2d361&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F58f03bf05fddb.jpg%3Fdown"
						},
						{
							"title": "标题2222222",
							"image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594798658581&di=bcd5486940ad88cf88a904f411c53e94&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn15%2F600%2Fw1920h1080%2F20180505%2Fad66-hacuuvt5802647.jpg"
						},
						{
							"title": "标题3333333",
							"image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594798022306&di=ed613c19ef36df7856b383601acb2f05&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1306%2F17%2Fc1%2F22199754_1371460645988.jpg"
						}
					]
				}
				that.callFunction({
					data_id:"vk-test-index-swiper-01",
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
			titleChange(index) {
				let title = index == 0 ? true : false;
				that.set("title",title);
			},
			modeChange(index) {
				let mode = index == 0 ? 'round' : index == 1 ? 'rect' : index == 2 ? 'number' : 'none';
				that.set("mode",mode);
			},
			indicatorPosChange(index) {
				let indicatorPos = index == 0 ? 'topLeft' : index == 1 ? 'topRight' : index == 2 ? 'bottomLeft' : index == 3 ? 'bottomCenter'  : 'bottomRight';
				that.set("indicator-pos",indicatorPos);
			},
			effect3dChange(index) {
				let effect3d = index == 0 ? true : false;
				that.set("effect3d",effect3d);
			},
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}张图片`,
					type: 'success'
				})
			},
			change(index) {
				
			},
			toast(title) {
				this.$refs.uToast.show({
					title: title,
					type: 'warning'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		margin: 30rpx 0;
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
