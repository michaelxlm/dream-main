<template>
	<view class="content">
		<button type="default" @click="loginByQQ">QQ登录</button>
		<button type="default" @click="bindQQ">绑定QQ</button>
		<button type="default" @click="unbindQQ">解绑QQ</button>
	</view>
</template>

<script>
	var that;											// 当前页面对象
	var vk;												// vk依赖
	export default {
		data() {
			return {

			}
		},
		onLoad(options) {
			that = this;
			vk = that.vk;
		},
		methods: {
			// QQ登陆
			loginByQQ(){
				vk.userCenter.loginByQQ({
					success:function(data){
						vk.alert("登录成功");
					}
				});
			},
			// 绑定QQ
			bindQQ(){
				vk.userCenter.bindQQ({
					success:function(data){
						vk.alert("绑定成功");
					}
				});
			},
			// 解绑QQ
			unbindQQ(){
				vk.userCenter.unbindQQ({
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
		text-align: center;
		line-height: 20px;
		font-size: 14px;
		color: #999999;
		margin-bottom: 20px;
	}
</style>
