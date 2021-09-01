<template>
	<view class="mainForm">
		<!-- 头部logo -->
		<view class="headerLogo">
			<view @click="chooseAvatar()" class="editImgView">
				<u-image class="editImg" :src="infoForm.avatar || mainLogo" mode="aspectFill" shape="circle" :width="160" :height="160"
					:show-error="false" :show-loading="false" />
					<u-icon name="edit-pen" size="40" class="editImgIcon"></u-icon>
			</view>
		</view>
		<u-form :model="infoForm" ref="infoForm" label-width="160" label-style={labelStyle}>
			<u-form-item label="姓名">
				<u-input v-model="infoForm.nickname" />
			</u-form-item>
			<u-form-item label="性别">
				<u-radio-group v-model="infoForm.gender">
					<u-radio v-for="(item, index) in genderList" :key="index" :name="item.value">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="手机号">
				<u-input v-model="infoForm.mobile" />
			</u-form-item>
			<!-- <u-form-item label="微信号">
				<u-input v-model="infoForm.wx_code" />
			</u-form-item> -->
			<!-- <u-form-item label="生日">
				<view @click="calendarShowFunc()">{{infoForm.birthday||'请选择生日'}}</view>
			</u-form-item> -->
			<u-form-item label="介绍">
				<u-input v-model="infoForm.intro" />
			</u-form-item>
		</u-form>
		<u-button shape="circle" @click="submitInfo()" :plain="false" :hair-line="false" type="success">
			{{$t('mine.update')}}
		</u-button>
		<u-calendar v-model="calendarShow" mode="date" @change="calendarChange()"></u-calendar>
	</view>
</template>

<script>
	import config from '@/app.config.js'
	var that;
	var app = getApp();
	var vk;
	export default {
		components: {},
		data() {
			return {
				genderList: [{
						value: '0',
						name: '保密'
					},
					{
						value: '1',
						name: '男'
					}, {
						value: '2',
						name: '女'
					}
				],
				calendarShow: false, //日历打开
				infoForm: {}
			}
		},
		computed: {
			labelStyle() {
				return {
					textAlign: 'justify',
				}
			},
			mainLogo() {
				return config.staticUrl.logo
			}
		},
		onLoad(options = {}) {
			that = this;
			that.options = options
			vk = that.vk;
			uni.setNavigationBarTitle({
				title: that.$t('mine.setting')
			});
			that.init();
			uni.$on('uAvatarCropper', async (path) => {
				// 可以在此上传到服务端
				let filename = ''
				if (path.indexOf("/") > 0) { //如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
					filename = path.substring(path.lastIndexOf("/") + 1, path.length);
				} else {
					filename = path;
				}
				let cloudPath = '/useAvatar/' + that.infoForm._id + '/' + filename
				const result = await uniCloud.uploadFile({
					filePath: path,
					cloudPath: cloudPath,
					onUploadProgress: function(progressEvent) {
						console.log(progressEvent)
						var percentCompleted = Math.round((progressEvent.loaded * 100) /
							progressEvent.total)
					}
				})
				that.infoForm.avatar = result.fileID || ''
			})
		},
		onShow() {
			that.init();
		},
		methods: {
			init() {
				let use = vk.getVuex('$user.userInfo');
				that.infoForm = use
			},
			chooseAvatar() {
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
				this.$u.route({
					// 关于此路径，请见下方"注意事项"
					url: '/pages/u-avatar-cropper/u-avatar-cropper',
					// 内部已设置以下默认参数值，可不传这些参数
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 200,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			calendarShowFunc() {
				that.calendarShow = !that.calendarShow
			},
			// 选择生日发生改变时触发
			calendarChange(e) {
				that.infoForm.birthday = e.result
				that.infoForm.birthdayObj = e
			},
			submitInfo() {
				vk.userCenter.updateUser({
					data: {
						nickname: that.infoForm.nickname,
						avatar: that.infoForm.avatar,
						gender: that.infoForm.gender,
						intro: that.infoForm.intro,
						mobile: that.infoForm.mobile,
						wx_code: that.infoForm.wx_code,
						birthday: that.infoForm.birthday,
						birthdayObj: that.infoForm.birthdayObj
					},
					success: function(data) {
						vk.setVuex('$user.userInfo', data.userInfo);
						uni.showToast({
							title: '更新成功',
							icon: 'none',
							duration: 2000,
							complete: function() {
								vk.redirectTo('/pages/mine/index');
							}
						});

					}
				});
			}
		}
	}
</script>
