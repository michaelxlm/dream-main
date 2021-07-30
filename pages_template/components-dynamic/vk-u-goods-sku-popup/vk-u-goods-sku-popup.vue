<template>
	<view class="u-demo">
		<u-button @click="sku_key = true">打开SKU组件</u-button>
		<vk-u-goods-sku-popup
			v-model="sku_key" 
			border-radius="20" 
			:custom-action="findGoodsInfo"
			:mode="form.skuMode"
			:buy-now-text="form.buyNowText"
			:buy-now-color = "form.buyNowColor"
			:buy-now-background-color="form.buyNowBackgroundColor"
			:add-cart-text="form.addCartText"
			:add-cart-color = "form.addCartColor"
			:add-cart-background-color="form.addCartBackgroundColor"
			:no-stock-text="form.noStockText"
			:min-buy-num="form.minBuyNum"
			:max-buy-num="form.maxBuyNum"
			:step-buy-num="form.stepBuyNum"
			:show-close="form.showClose"
			:mask-close-able="form.maskCloseAble"
			:price-color="form.priceColor"
			@open="openSkuPopup"
			@close="closeSkuPopup"
			@add-cart="addCart"
			@buy-now="buyNow"
		></vk-u-goods-sku-popup>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">更换商品</view>
				<u-subsection vibrateShort :list="['商品1', '商品2', '商品3', '商品4']" @change="goodsChange"></u-subsection>
				<view style="padding-top: 40rpx;color: #767676;">
					<view>商品1：多组多规格商品</view>
					<view>商品2：单组多规格商品</view>
					<view>商品3：单组单规格商品</view>
					<view>商品4：暂无库存商品</view>
				</view>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式</view>
				<u-subsection vibrateShort :list="['都显示', '只显示购物车', '只显示立即购买']" @change="skuModeChange"></u-subsection>
			</view>
			<u-form :model="form" ref="uForm" label-width ="300">
				<u-form-item label="立即购买文字">
					<view style="width: 30rpx;height: 30rpx;"></view>
					<u-input v-model="form.buyNowText" />
				</u-form-item>
				<u-form-item label="立即购买文字颜色">
					<view :style="'background-color: '+form.buyNowColor+';'" style="width: 30rpx;height: 30rpx;"></view>
					<u-input v-model="form.buyNowColor"/>
				</u-form-item>
				<u-form-item label="立即购买按钮背景色">
					<view :style="'background-color: '+form.buyNowBackgroundColor+';'" style="width: 30rpx;height: 30rpx;"></view>
					<u-input v-model="form.buyNowBackgroundColor" />
				</u-form-item>
				<u-form-item label="加入购物车文字">
					<view style="width: 30rpx;height: 30rpx;"></view>
					<u-input v-model="form.addCartText" />
				</u-form-item>
				<u-form-item label="加入购物车文字颜色">
					<view :style="'background-color: '+form.addCartColor+';'" style="width: 30rpx;height: 30rpx;"></view>
					<u-input v-model="form.addCartColor"/>
				</u-form-item>
				<u-form-item label="加入购物车按钮背景色">
					<view :style="'background-color: '+form.addCartBackgroundColor+';'" style="width: 30rpx;height: 30rpx;"></view>
					<u-input v-model="form.addCartBackgroundColor" />
				</u-form-item>
				<u-form-item label="无库存时按钮文字">
					<u-input v-model="form.noStockText" />
				</u-form-item>
				<u-form-item label="价格的字体颜色">
					<view :style="'background-color: '+form.priceColor+';'" style="width: 30rpx;height: 30rpx;"></view>
					<u-input v-model="form.priceColor" />
				</u-form-item>
				<u-form-item label="最小购买数量">
					<vk-u-number-box
						v-model="form.minBuyNum" :min="1" :max="10000" :step="1" :positive-integer="true">
					</vk-u-number-box>
				</u-form-item>
				<u-form-item label="最大购买数量">
					<vk-u-number-box
						v-model="form.maxBuyNum" :min="1" :max="10000" :step="1" :positive-integer="true">
					</vk-u-number-box>
				</u-form-item>
				<u-form-item label="步进器步长">
					<vk-u-number-box
						v-model="form.stepBuyNum" :min="1" :max="10000" :step="1" :positive-integer="true">
					</vk-u-number-box>
				</u-form-item>
			</u-form>
			<view class="u-config-item">
				<view class="u-item-title">是否显示关闭按钮</view>
				<u-subsection vibrateShort :list="['显示', '隐藏']" @change="showCloseChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">点击遮罩关闭组件</view>
				<u-subsection vibrateShort :list="['是', '否']" @change="maskCloseAbleChange"></u-subsection>
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
				// 后台接口请求获得的数据
				goods_id:"001",
				// sku组件开关
				sku_key:false,
				form:{
					skuMode:1,							// 模式 1:都显示  2:只显示购物车 3:只显示立即购买 默认 1
					buyNowText:"立即购买",
					buyNowColor:"#ffffff",
					buyNowBackgroundColor:"#fe560a",
					addCartText:"加入购物车",
					addCartColor:"#ffffff",
					addCartBackgroundColor:"#ff9402",
					noStockText:"该商品已抢完",
					minBuyNum:1,
					maxBuyNum:10000,
					stepBuyNum:1,
					priceColor:"#fe560a"
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
			// 初始化
			init(options = {}){
				
			},
			// sku组件 开始-----------------------------------------------------------
			openSkuPopup(){
				console.log("监听 - 打开sku组件");
			},
			closeSkuPopup(){
				console.log("监听 - 关闭sku组件");
			},
			// 加入购物车前的判断
			addCartFn(obj){
				let { selectShop } = obj;
				// 模拟添加到购物车,请替换成你自己的添加到购物车逻辑
				let res = {};
				let name = selectShop.goods_name;
				if(selectShop.sku_name != "默认"){
					name += "-"+selectShop.sku_name;
				}
				res.msg = `${name} 已添加到购物车`;
				if(typeof obj.success == "function") obj.success(res);
			},
			// 加入购物车按钮
			addCart(selectShop){
				console.log("监听 - 加入购物车");
				that.addCartFn({
					selectShop : selectShop,
					success : function(res){
						// 实际业务时,请替换自己的加入购物车逻辑
						vk.toast(res.msg,"none");
					}
				});
			},
			// 立即购买
			buyNow(selectShop){
				console.log("监听 - 立即购买");
				that.addCartFn({
					selectShop : selectShop,
					success : function(res){
						// 实际业务时,请替换自己的立即购买逻辑
						vk.toast("立即购买");
					}
				});
			},
			// 
			/**
			 * 获取商品信息
			 * 这里可以看到每次打开SKU都会去重新请求商品信息,为的是每次打开SKU组件可以实时看到剩余库存
			 */
			findGoodsInfo(){
				return new Promise(function (resolve, reject) {
					vk.callFunction({
						url: 'template/test/pub/findGoodsInfo',
						title:'请求中...',
						data:{
							goods_id : that.goods_id
						},
						success(data) {
							resolve(data.goodsInfo);
						}
					});
				});
			},
			
			
			// 参数配置开始 -----------------------------------------------------------
			goodsChange(index){
				let list = ["001","002","003","004"];
				that.goods_id = list[index];
				that.sku_key = true;
			},
			showCloseChange(index){
				let list = [true,false];
				that.form.showClose = list[index];
				that.sku_key = true;
			},
			maskCloseAbleChange(index){
				let list = [true,false];
				that.form.maskCloseAble = list[index];
				that.sku_key = true;
			},
			skuModeChange(index){
				let list = [1,2,3];
				that.form.skuMode = list[index];
				that.sku_key = true;
			}
			// 参数配置结束 -----------------------------------------------------------
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
