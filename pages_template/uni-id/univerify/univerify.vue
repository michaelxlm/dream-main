<template>
	<view class="content">
		<button type="default" @tap="loginByUniverify">本机号码一键登录</button>
		<view class="tips">需要先配置uniCloud/cloudfunctions/common/config/index.js</view>
		<view class="tips">中的 uni.service.univerify</view>
		<view class="code" v-if="userInfo && userInfo._id">
			<scroll-view scroll-x="true">
				<rich-text :nodes="`<pre>${JSON.stringify(userInfo, null, 2)}</pre>`"></rich-text>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	var that; 										// 当前页面对象
	var vk;												// vk依赖
	export default {
		data() {
			return {
				userInfo:{}
			}
		},
		onLoad(options) {
			that = this;
			vk = that.vk;
			that.init(options);
		},
		methods: {
			init(options){
				// 预授权
				uni.preLogin({
					provider: 'univerify',
					success(){

					},
					fail(res){
						console.log(res);
					}
				})
			},
			loginByUniverify() {
				vk.userCenter.loginByUniverify({
					// 更多配置请查看 https://uniapp.dcloud.io/univerify
					univerifyStyle: {
						"fullScreen": true,									// 是否全屏显示(hbx3.1.5起支持全屏)，true表示全屏模式，false表示非全屏模式，默认值为false。
						"backgroundColor": "#f5f5f5",				// 授权页面背景颜色，默认值：#ffffff
						"authButton": {
							"normalColor": "#19be6b",					// 授权按钮正常状态背景颜色 默认值：#3479f5
							"highlightColor": "#18b566",			// 授权按钮按下状态背景颜色 默认值：#2861c5（仅ios支持）
							"disabledColor": "#71d5a1",				// 授权按钮不可点击时背景颜色 默认值：#73aaf5（仅ios支持）
							"textColor": "#ffffff",						// 授权按钮文字颜色 默认值：#ffffff
							"title": "本机号码一键登录"					// 授权按钮文案 默认值：“本机号码一键登录”
						},
						"privacyTerms":{
							"suffix": "使用本机号码登录", 		// 条款后的文案 默认值：“并使用本机号码登录”
							"termsColor":"#555555"
						}
					},
					data:{

					},
					success:function(data){
						uni.closeAuthView();
						that.userInfo = data.userInfo;
						setTimeout(function(){
							vk.alert(data.msg);
						},300);
					},
					fail:function(res){
						uni.closeAuthView();
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 15px;
	}
	.content button {
		margin-bottom: 15px;
	}
	.tips {
		text-align: left;
		line-height: 20px;
		font-size: 14px;
		color: #999999;
		margin-bottom: 20px;
	}
	.code{
		overflow-x: hidden;
		font-size: 24rpx;
	}
</style>
