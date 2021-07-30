<!-- 添加教程 -->
<template>
	<view>
		<view class="">
			<view>
				<view style="background-color: #EEEEEE;" class="u-p-10">
					<u-input type="textarea" v-model="issureForm.text" :height="200" :auto-height="true"
						:placeholder="$t('issure.text_placeholder')" :maxlength="400" :focus="true" :clearable="false"
						:custom-style='textareaCustomStyle' />
					<!-- <view class="photoAlbum-9">
						<view class="photoItem" v-for="(item, index) in issureForm.imageList" :key="index">
							<view class="imgView">
								<u-image width="100%" height="100%" :src="item.url" mode="aspectFill"
									:border-radius="20">
								</u-image>
								<u-icon name="close-circle-fill" @click="removeImg(item)"></u-icon>
							</view>
						</view>
						<view class="addPhotoItem" v-if="issureForm.imageList.length<9">
							<u-icon name="plus" @click="upLoadImg()"></u-icon>
						</view>
					</view> -->
				</view>
				<u-form :model="issureForm" ref="issureForm" class="issureForm">
					<u-form-item :label="$t('issure.tags')" right-icon="arrow-right">
						<span
							@click="tagSelectFunc()">{{vk.pubfn.isNotNull(issureForm.tags)?issureForm.tags[0].text:'跟更多同好交流'}}</span>

					</u-form-item>
				</u-form>
			</view>
			<u-button class="u-m-32" @click="submitFunc">{{$t('issure.confirm')}}</u-button>
		</view>
		<tagSelect :show="tagSelectShow" @tagSelectClose="tagSelectClose()" @tagSelectItem="tagSelectItem"></tagSelect>
		<u-back-top :scrollTop="scrollTop" :z-index="999"></u-back-top>
		<u-toast ref="uToast" />
	</view>
</template>


<script>
	var that; // 当前页面对象
	var vk; // vk依赖
	export default {
		data() {
			return {
				options: {},
				tagSelectShow: false,
				issureForm: {
					need_user_info: false, // 如果云函数用不到 `userInfo`，则传false可以加快接口相应速度
					text: '', //描述
					imageList: [],
					tags: [], //标签列表
				},
				scrollTop: 0,
			}
		},
		onPageScroll(e) {
			that.scrollTop = e.scrollTop;
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options = {}) {
			that = this;
			vk = that.vk;
			that.options = options;
			that.init(options);
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {
			uni.setNavigationBarTitle({
				title: that.$t('issure.title')
			});
		},
		// 监听 - 页面每次【隐藏时】执行(如：返回)
		onHide() {

		},
		// 监听 - 页面触底部
		onReachBottom() {

		},
		// 监听 - 窗口尺寸变化(仅限:App、微信小程序)
		onResize() {

		},
		// 监听 - 点击右上角转发时
		onShareAppMessage(options) {

		},
		// 监听 - 页面创建时
		created() {

		},
		// 监听 - 原生返回按钮
		onBackPress(e) {
			console.log("返回按钮", e);

		},
		// 函数
		methods: {
			// 页面数据初始化函数
			init(options) {
				that.$nextTick(() => {
					that.issureForm.text = ""
				})
				console.log("init: ", options);
			},
			// 上传图片
			upLoadImg() {
				// 选择图片
				let count = 9 - that.issureForm.imageList.length
				if (count < 1) {
					that.$refs.uToast.show({
						title: '最多添加每组9张图片',
						type: 'error',
					})
					return
				}
				uniCloud.chooseAndUploadFile({
					type: 'image',
					count: 1,
					onChooseFile(res) {
						const processAll = []
						for (let i = 0; i < res.tempFiles.length; i++) {
							processAll.push(vk.myfn.cropImg(res.tempFiles[i]))
						}
						return Promise.all(processAll).then((fileList) => {
							let result = {
								tempFilePaths: []
							}
							result.tempFiles = fileList.map((fileItem, index) => {
								result.tempFilePaths.push(fileItem.path)
								let cloudPath = 'tutorial_' + vk.getVuex('$user.userInfo._id') +
									'_' + Date.now() + '_' + index + vk.pubfn.random(12,
										"abcdefghijklmnopqrstuvwxyz0123456789") + '.' + fileItem
									.ext; // 云端路径
								return {
									path: fileItem.path,
									cloudPath: cloudPath,
									fileType: fileItem.fileType
								}
							})
							return result
						})
					}
				}).then(res => {
					console.log(res)
					if (res.errMsg === "chooseAndUploadFile:ok") {
						that.issureForm.imageList = that.issureForm.imageList.concat(res.tempFiles)
					}
				})
			},
			/* 删除图片 */
			removeImg(item) {
				console.log(item)
			},
			// 打开标签选择器
			tagSelectFunc() {
				console.log('tagSelectFunc')
				that.tagSelectShow = true
			},
			// 关闭标签选择器
			tagSelectClose() {
				that.tagSelectShow = false
			},
			// 获取选中的标签
			tagSelectItem(item) {
				if (vk.pubfn.isNotNull(item._id)) {
					that.issureForm.tags = [item]
				}
				that.tagSelectClose()
			},
			/* 确定 */
			submitFunc() {
				console.log(that.issureForm)
				vk.callFunction({
					url: 'client/wordImg/kh/add',
					title: '请求中...',
					data: that.issureForm,
					success(res) {
						console.log(res)
						if (!vk.pubfn.isNull(res.id)) {
							vk.navigateTo('/pages/tutorial/tutorial?id=' + res.id)
						}
					}
				});
			}

		},
		// 过滤器
		filters: {

		},
		// 计算属性
		computed: {
			tabbar() {
				return this.vk.getVuex('$app.config.tabbar') || []
			},
			textareaCustomStyle() {
				return {
					padding: '16rpx'
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
</style>
