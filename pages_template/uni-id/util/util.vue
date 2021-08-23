<template>
	<view class="content">
		<view style="text-align: center;">
			<u-avatar :src="avatar" v-if="avatar" size="140"></u-avatar>
		</view>
		<button type="default" @click="setAvatar">直接设置头像</button>
		<button type="default" @click="uploadAvatar">上传到云储存(并设置为头像)</button>
		<button type="default" @click="updateUser">更新用户信息</button>
		<button type="default" @click="getMyUserInfo">获取用户信息</button>
		<button type="default" @click="checkToken">token校验</button>

		<button type="default" @click="setUserInviteCode">设置邀请码</button>
		<view class="tips">设置邀请码时如果传入邀请码则设置传入的邀请码，如果不传则随机生成6位邀请码</view>
		<input type="text" v-model="form1.inviteCode" placeholder="邀请码" />
		<button type="default" @click="acceptInvite">接受邀请</button>

		<button type="default" @click="logout">退出</button>
	</view>
</template>

<script>
	var that; 										// 当前页面对象
	var vk;												// vk依赖
	export default {
		data() {
			return {
				form1:{
					inviteCode:""
				},
				avatar:""
			}
		},
		onLoad(options) {
			that = this;
			vk = that.vk;
		},
		methods: {
			// 设置头像
			setAvatar(){
				let avatar = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594798658581&di=bcd5486940ad88cf88a904f411c53e94&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn15%2F600%2Fw1920h1080%2F20180505%2Fad66-hacuuvt5802647.jpg";
				var form1 = that.form1;
				vk.userCenter.setAvatar({
					data:{
						avatar:avatar
					},
					success:function(data){
						that.avatar = avatar;
						vk.alert("设置成功");
					}
				});
			},
			updateUser() {
				var form1 = that.form1;
				vk.userCenter.updateUser({
					data:{
						nickname:"剑圣李白",
					},
					success:function(data){
						vk.alert("更新成功");
					}
				});
			},
			getMyUserInfo() {
				var form1 = that.form1;
				vk.userCenter.getCurrentUserInfo({
					success:function(data){
						vk.alert(JSON.stringify(data.userInfo));
					}
				});
			},
			// token校验
			checkToken(){
				vk.userCenter.checkToken({
					success:function(data){
						vk.alert("token有效");
					}
				});
			},
			// 退出
			logout(){
				vk.userCenter.logout({
					success:function(data){
						vk.alert("退出成功");
					}
				});
			},
			setUserInviteCode() {
				vk.userCenter.setUserInviteCode({
					success:function(data){
						vk.alert(data.msg);
					}
				});
			},
			acceptInvite() {
				var form1 = that.form1;
				if (!form1.inviteCode) {
					vk.alert("请填写邀请码");
					return;
				}
				vk.userCenter.acceptInvite({
					data:form1,
					success:function(data){
						vk.alert("接受邀请成功");
					}
				});
			},
			// 上传头像到云储存,并设置为头像
			uploadAvatar(){
				// 选择图片
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: function (res) {
						// 上传图片到云储存
						vk.callFunctionUtil.uploadFile({
							title:"上传中...",
							filePath: res.tempFilePaths[0],
							fileType: "image",
							success(res) {
								// 执行绑定头像
								vk.userCenter.setAvatar({
									data: {
										avatar: res.fileID,
										deleteOldFile:true
									},
									success() {
										that.avatar = res.fileID;
									}
								});
							}
						});
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
