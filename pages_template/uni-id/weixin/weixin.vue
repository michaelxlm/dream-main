<template>
	<view class="content">
		<button type="default" @click="vk.navigateTo('../../openapi/weixin/weixin')">小程序API</button>
		<!-- #ifdef MP-WEIXIN -->
		<button type="default" @click="loginByWeixin">微信登录</button>
		<view class="tips">静默授权，无弹窗。</view>
		<button type="default" @click="code2SessionWeixin">获取微信openid</button>
		<view class="tips">静默授权，无弹窗。</view>
		<button type="default" @click="setUserInfo">获取并设置微信用户昵称头像</button>
		<view class="tips">需要授权，有弹窗。</view>
		<button type="default" @click="bindWeixin">绑定微信</button>
		<button type="default" @click="unbindWeixin">解绑微信</button>
		<button type="default" open-type="getPhoneNumber"  @getphonenumber="getPhoneNumber">获取微信绑定的手机号</button>
		<view class="tips">仅获取手机号</view>
		<button type="default" open-type="getPhoneNumber"  @getphonenumber="loginByWeixinPhoneNumber">使用微信绑定的手机号登录/注册</button>
		<view class="tips">此操作能同时绑定微信和手机号</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<template v-if="hasWeixinAuth">
			<button type="default" @click="loginByWeixin">微信登录</button>
			<button type="default" @click="bindWeixin">绑定微信</button>
			<button type="default" @click="unbindWeixin">解绑微信</button>
			<button type="default" @click="setUserInfo">获取微信用户昵称头像</button>
			<scroll-view scroll-x="true">
				<rich-text :nodes="`<pre>${JSON.stringify(data, null, 2)}</pre>`"></rich-text>
			</scroll-view>
		</template>
		<template v-else>
			<view class="tips">未包含微信登录模块</view>
		</template>
		<!-- #endif -->
	</view>
</template>

<script>
	var that;		// 当前页面对象
	var vk;			// vk依赖
	export default {
		data() {
			return {
				hasWeixinAuth: true,
				sessionKey:"",
				image:"",
				data:{}
			}
		},
		onLoad(options) {
			that = this;
			vk = that.vk;
			that.init();
		},
		methods: {
			init(){
				// #ifdef MP-WEIXIN
				vk.userCenter.code2SessionWeixin({
					data:{
						needCache:true
					},
					success:function(data){
						that.sessionKey = data.sessionKey;
					},
				});
				// #endif
			},
			// 微信登陆
			loginByWeixin(){
				vk.userCenter.loginByWeixin({
					success:function(data){
						vk.alert(data.msg);
						that.data = data;
					}
				});
			},
			code2SessionWeixin() {
				vk.userCenter.code2SessionWeixin({
					success:function(data){
						vk.alert(JSON.stringify(data));
					},
				});
			}, 
			// 设置用户昵称头像
			setUserInfo(){
				// #ifdef MP-WEIXIN
				try {
					uni.getUserProfile({
						desc:"用于快速设置昵称头像",
						success:function(res){
							let { userInfo } = res;
							vk.userCenter.updateUser({
								data:{
									nickname : userInfo.nickName,
									avatar : userInfo.avatarUrl,
									gender : userInfo.gender
								},
								success:function(data){
									vk.alert("设置成功");
								}
							});
						}
					});
				}catch(err){
					vk.alert("您的微信版本过低，请先更新微信!");
				}
				// #endif
				
				// #ifndef MP-WEIXIN
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: 'weixin',
				      success: function (data) {
								that.data = data;
								let { userInfo } = data;
								vk.userCenter.updateUser({
									data:{
										nickname : userInfo.nickName,
										avatar : userInfo.avatarUrl,
										gender : userInfo.gender
									},
									success:function(data){
										vk.alert("设置成功");
									}
								});
				      }
				    });
				  }
				});
				// #endif
			},
			// 绑定微信
			bindWeixin(){
				vk.userCenter.bindWeixin({
					success:function(data){
						vk.alert("绑定成功");
						that.data = data;
					}
				});
			},
			// 解绑微信
			unbindWeixin(){
				vk.userCenter.unbindWeixin({
					success:function(data){
						vk.alert("解绑成功");
						that.data = data;
					}
				});
			},
			// 获取微信绑定的手机号码
			getPhoneNumber(e){
				let { encryptedData, iv } = e.detail;
				if (!encryptedData || !iv) {
					return false;
				}
				vk.userCenter.getPhoneNumber({
					data:{
						encryptedData,
						iv,
						sessionKey:that.sessionKey
					},
					success:function(data){
						vk.alert("手机号:" + data.phone);
					}
				});
			},
			// 使用微信绑定的手机号登录/注册
			loginByWeixinPhoneNumber(e){
				let { encryptedData, iv } = e.detail;
				if (!encryptedData || !iv) {
					return false;
				}
				vk.userCenter.loginByWeixinPhoneNumber({
					data: {
						encryptedData,
						iv,
						sessionKey : that.sessionKey
					},
					success(data) {
						vk.alert(data.msg);
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
	.content input {
		height: 46px;
		border: solid 1px #DDDDDD;
		border-radius: 5px;
		margin-bottom: 15px;
		padding: 0px 15px;
	}
	.content button {
		margin-bottom: 15px;
	}
	.content navigator {
		display: inline-block;
		color: #007AFF;
		border-bottom: solid 1px #007AFF;
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 15px;
	}
	.tips {
		font-size: 14px;
		color: #999999;
		margin-bottom: 16px;
	}
</style>
