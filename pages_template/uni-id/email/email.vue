<template>
	<view class="content">
		<input type="text" placeholder="邮箱" v-model="form1.email" />
		<input type="text" placeholder="验证码" v-model="form1.code" />
		<view class="tips" style="color: red;">上次发送的验证码：{{form1.code}}</view>
		<view class="title">邮箱注册&登录相关</view>
		<view class="tips" style="text-align: left;">如需要使用此功能，先确保已安装npm包
			<view>"nodemailer": "^6.4.11"</view>
		</view>
		<view style="display: flex;">
			<button type="default" @click="sendEmailCode('login')">真实-发送验证码</button>
			<button type="default" @click="setVerifyCode('login')">模拟-发送验证码</button>
		</view>
		<button type="default" @click="loginByEmail">邮箱验证码登录（不存在则注册）</button>
		<view class="title">绑定邮箱相关</view>
		<view style="display: flex;">
			<button type="default" @click="sendEmailCode('bind')">真实-发送验证码</button>
			<button type="default" @click="setVerifyCode('bind')">模拟-发送验证码</button>
		</view>
		<button type="default" @click="bindEmail">绑定邮箱（需先登录）</button>
		<view class="tips">绑定邮箱时如果不传验证码或者传空则直接绑定并设置email_confirmed为1，不会去校验验证码</view>
		<view class="title">解绑邮箱相关</view>
		<view style="display: flex;">
			<button type="default" @click="sendEmailCode('unbind')">真实-发送验证码</button>
			<button type="default" @click="setVerifyCode('unbind')">模拟-发送验证码</button>
		</view>
		<button type="default" @click="unbindEmail">解绑邮箱（需先登录）</button>
		<view class="tips">解绑邮箱时如果不传验证码或者传空则直接解除绑定绑定，不会去校验验证码</view>
	</view>
</template>

<script>
	var that;											// 当前页面对象
	var vk;												// vk依赖
	export default {
		data() {
			return {
				form1:{
					email: '',
					code: ''
				}
			}
		},
		onLoad(options) {
			that = this;
			vk = that.vk;
		},
		methods: {
			// 为了演示把这个逻辑放在客户端
			getCode() {
				const randomStr = '00000' + Math.floor(Math.random() * 1000000)
				that.form1.code = randomStr.substring(randomStr.length - 6)
			},
			sendEmailCode(type) {
				if (!/.+@.+/.test(that.form1.email)) {
					uni.showModal({
						content: '请输入正确的邮箱',
						showCancel: false
					})
					return
				}
				var form1 = that.form1;
				vk.userCenter.sendEmailCode({
					data:{
						serviceType:"qq",
						email: form1.email,
						type: type,
					},
					success:function(data){
						vk.alert("邮件发送成功");
					}
				});
			},
			setVerifyCode(type) {
				if (!/.+@.+/.test(that.form1.email)) {
					uni.showModal({
						content: '请输入正确的邮箱',
						showCancel: false
					})
					return
				}
				that.getCode();
				var form1 = that.form1;
				vk.userCenter.setVerifyCode({
					data:{
						email: form1.email,
						code: form1.code,
						type: type,
					},
					success:function(data){
						vk.toast("发送成功");
					}
				});
			},
			// 邮箱登录
			loginByEmail() {
				var form1 = that.form1;
				vk.userCenter.loginByEmail({
					data:form1,
					success:function(data){
						vk.alert("登录成功");
					}
				});
			},
			// 绑定邮箱
			bindEmail(){
				var form1 = that.form1;
				vk.userCenter.bindEmail({
					data:form1,
					success:function(data){
						vk.alert("绑定成功");
					}
				});
			},
			// 解绑邮箱
			unbindEmail(){
				var form1 = that.form1;
				vk.userCenter.unbindEmail({
					data:form1,
					success:function(data){
						vk.alert("解绑成功");
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
		display: block;
	}
	.content button {
		margin-bottom: 15px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 14px;
		padding-right: 14px;
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
		text-align: center;
		line-height: 20px;
		font-size: 14px;
		color: #999999;
		margin-bottom: 20px;
	}
	.title{
		font-size: 36rpx;
		margin-bottom: 20rpx;
	}
</style>
