<template>
	<view class="mainForm">
		<!-- 头部logo -->
		<view class="headerLogo">
			<u-image :src="issureForm.avatar || mainLogo" mode="aspectFill" shape="circle" :width="160" :height="160"
				:show-error="false" :show-loading="false" @click="chooseAvatar()" />
		</view>
		<u-form :model="issureForm" ref="issureForm" label-width="160" :label-style="labelStyle" >
			<u-form-item label="姓名" prop="nickname">
				<u-input v-model="issureForm.nickname" />
			</u-form-item>
			<u-form-item label="性别" prop="gender">
				<u-radio-group v-model="issureForm.gender">
					<u-radio v-for="(item, index) in genderList" :key="index" :name="item.value">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="手机号" prop="mobile">
				<u-input type="number" v-model="issureForm.mobile" />
			</u-form-item>
			<!-- <u-form-item label="生日" prop="birthday">
				<u-input v-model="issureForm.birthday" placeholder="请选择生日" @click="calendarShowFunc()" disabled />
			</u-form-item> -->
			<u-collapse>
				<u-collapse-item title="更多设置">
					<!-- <u-form-item label="出生时间" prop="birthdayTime">
						<u-input v-model="issureForm.birthdayTime" placeholder="请选择出生时间" @click="birthdayTimeShowFunc()"
							disabled />
					</u-form-item> -->
					<u-form-item label="家乡" prop="hometown">
						<u-input v-model="issureForm.hometown" placeholder="请选择家乡" @click="hometownShowFunc()"
							disabled />
					</u-form-item>
					<u-form-item label="关系" prop="intro">
						<u-input v-model="issureForm.intro" placeholder="描述你们的关系" />
					</u-form-item>
				</u-collapse-item>
			</u-collapse>
		</u-form>
		<u-button shape="circle" @click="submitInfo()" :plain="false" :hair-line="false" type="success">
			{{$t('mine.update')}}
		</u-button>
		<u-calendar v-model="calendarShow" mode="date" @change="calendarChange()"></u-calendar>
		<u-picker mode="region" v-model="hometownShow" :area-code='issureForm.hometownCode' title="请选择家乡"
			@confirm="hometownShowConfirm()"></u-picker>
		<u-picker mode="time" v-model="birthdayTimeShow" :params="birthdayTimeParams"
			:default-time="issureForm.birthdayTimeCode" title="请选择出生时间" @confirm="birthdayTimeShowConfirm()"></u-picker>
	</view>
</template>

<script>
	import config from '@/app.config.js'
	var that;
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
				birthdayTimeParams: {
					year: false,
					month: false,
					day: false,
					hour: true,
					minute: true,
					second: true
				},
				birthdayTimeShow: false,
				hometownShow: false, //地址打开
				calendarShow: false, //日历打开
				issureForm: {
					avatar: '', //头像
					nickname: '', //昵称
					gender: '0', //性别
					mobile: '', //手机号
					birthday: '', //生日
					birthdayObj: {}, //生日信息
					birthdayTime: '', //生日时间
					birthdayTimeCode: '', //生日时间
					birthdayTimeObj: {}, //生日时间信息
					hometown: '北京市市辖区朝阳区', //家乡
					hometownCode: ['11', '1101', '110105'], //家乡
					hometownObj: {
						province: {
							label: "北京市",
							value: "11"
						},
						city: {
							label: "市辖区",
							value: "1101"
						}, //家乡信息
						area: {
							label: "朝阳区",
							value: "110105"
						}
					},
					intro: '', //关系
				},
				rules: {
					nickname: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式
						trigger: ['blur,change']
					}],
					// birthday: [{
					// 	required: true,
					// 	message: '请选择生日',
					// 	// 可以单个或者同时写两个触发验证方式
					// 	trigger: ['blur,change']
					// }],
					mobile: [{
						required: true,
						message: '请输入手机号',
						// 可以单个或者同时写两个触发验证方式
						trigger: ['blur,change']
					}],
				}
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
				title: that.$t('issure.title')
			});
			if (options.id) {
				that.init();
			}

			uni.$on('uAvatarCropper', async (path) => {
				// 可以在此上传到服务端
				let filename = ''
				if (path.indexOf("/") > 0) { //如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
					filename = path.substring(path.lastIndexOf("/") + 1, path.length);
				} else {
					filename = path;
				}
				let cloudPath = '/timeAvatar/' + that.issureForm._id + '/' + filename
				const result = await uniCloud.uploadFile({
					filePath: path,
					cloudPath: cloudPath,
					onUploadProgress: function(progressEvent) {
						console.log(progressEvent)
						var percentCompleted = Math.round((progressEvent.loaded * 100) /
							progressEvent.total)
					}
				})
				that.issureForm.avatar = result.fileID || ''
			})
		},
		onShow() {},
		onReady() {
			this.$refs.issureForm.setRules(this.rules);
		},
		methods: {
			init() {
				vk.callFunction({
					url: 'client/time/pub/findById',
					title: '请求中...',
					data: {
						where: {
							_id: that.options.id,
							status: 0
						}
					},
					success(res) {
						if (vk.pubfn.isNotNull(res.rows)) {
							that.issureForm = {
								avatar: res.rows[0].avatar, //头像
								nickname: res.rows[0].nickname, //昵称
								gender: res.rows[0].gender, //性别
								mobile: res.rows[0].mobile, //手机号
								birthday: res.rows[0].birthday, //生日
								birthdayObj: res.rows[0].birthdayObj, //生日信息
								birthdayTime: res.rows[0].birthdayTime, //生日时间
								birthdayTimeCode: res.rows[0].birthdayTimeCode, //生日时间
								birthdayTimeObj: res.rows[0].birthdayTimeObj, //生日时间信息
								hometown: res.rows[0].hometown, //家乡
								hometownCode: res.rows[0].hometownCode, //家乡
								hometownObj: res.rows[0].hometownObj,
								intro: res.rows[0].intro, //关系
							}
						}
					}
				});
			},
			chooseAvatar() {
				console.log('chooseAvatar')
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
			// 生日年月日选择器
			calendarShowFunc() {
				that.calendarShow = !that.calendarShow
			},
			// 选择生日发生改变时触发
			calendarChange(e) {
				that.issureForm.birthday = e.result
				that.issureForm.birthdayObj = e
				if (vk.pubfn.isNull(that.issureForm.birthdayTimeCode)) {
					that.issureForm.birthdayTimeCode = that.issureForm.birthday + ' 00:00:00'
				}
			},
			// 家乡地址选择器
			hometownShowFunc() {
				that.hometownShow = !that.hometownShow
			},
			// 选择家乡地址发生改变时触发
			hometownShowConfirm(e) {
				console.log(e)
				that.issureForm.hometown = e.province.label + e.city.label + e.area.label
				that.issureForm.hometownCode[0] = e.province.value
				that.issureForm.hometownCode[1] = e.city.value
				that.issureForm.hometownCode[2] = e.area.value
				that.issureForm.hometownObj = e
			},
			// 生日时分秒选择器
			birthdayTimeShowFunc() {
				if (vk.pubfn.isNull(that.issureForm.birthdayObj)) {
					vk.alert("请先选择日期");
				} else {
					that.birthdayTimeShow = !that.birthdayTimeShow
				}

			},
			// 选择生日时分秒时触发
			birthdayTimeShowConfirm(e) {
				console.log(e)
				that.issureForm.birthdayTime = e.hour + ':' + e.minute + ':' + e.second
				that.issureForm.birthdayTimeCode = that.issureForm.birthday + ' ' + that.issureForm.birthdayTime
				that.issureForm.birthdayTimeObj = e
			},
			submitInfo() {
				that.$refs.issureForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						if (vk.pubfn.isNull(that.issureForm.birthdayTime)) {
							that.issureForm.birthdayTimeObj = {}
						}
						if (vk.pubfn.isNotNull(that.options.id)) {
							that.issureForm.time_id = that.options.id
						}
						vk.callFunction({
							url: 'client/time/kh/add',
							title: '请求中...',
							data: that.issureForm,
							success(res) {
								console.log(res)
								if (Number(res.code) === 0) {
									vk.alert("添加成功");
									vk.reLaunch({
										url: '/pages/index/index'
									})
								}
							}
						});
					} else {
						console.log('验证失败');
					}
				});

			}
		}
	}
</script>
