<template>
	<view>
		<view>
			<view class="container u-skeleton">
				<view v-if="vk.pubfn.isNotNull(userInfo.mobile)"
					class="userinfo u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30"
					@click="pageTo('/pages/mine/info?from=mine')">
					<block>
						<u-avatar class="userinfo-avatar u-skeleton-circle u-m-r-36" :src="userInfo.avatar || mainLogo"
							size="120" :show-sex="userInfo.gender!=='0'&&userInfo.gender&&userInfo.gender!==''"
							:sex-icon="userInfo.gender===1?'man':'woman'" />
						<view class="u-skeleton-fillet u-flex-1">
							<view class="u-font-18 u-p-b-20">
								<text>{{useName}}</text>
							</view>
							<view class="u-font-14 u-tips-color">{{userInfo.intro }}</view>
						</view>
						<view class="u-m-l-10 u-p-10">
							<u-icon name="setting" color="#969799" size="36"></u-icon>
						</view>
					</block>
				</view>
				<view v-else class="u-text-center u-m-t-32">
					<!-- #ifdef MP-WEIXIN -->
					<u-button ripple-bg-color="#909399" :plain="true" type="primary" open-type="getPhoneNumber"
						size="medium" @getphonenumber="loginByWeixinPhoneNumber">
						手机号绑定
					</u-button>
					<!-- #endif -->
				</view>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN || H5 -->
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item v-for="miniItem in miniProgramData" :key="miniItem.code" :title="miniItem.title"
					@click="goMiniProgramFunc(miniItem)"></u-cell-item>
			</u-cell-group>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item :title="$t('mine.setting')" @click="openSetting()"></u-cell-item>
			</u-cell-group>
		</view>
		<!-- #endif -->
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
				options: {},
			}
		},
		computed: {
			customStyle() {
				return {
					height: 'auto',
					lineHeight: 'auto',
					padding: '0'
				}
			},
			useName() {
				return this.userInfo.nickname || this.userInfo.username || this.vk.pubfn.hidden(this.userInfo.mobile, 3, 4) || '游客';
			},
			userInfo() {
				return this.vk.getVuex('$user.userInfo') || {}
			},
			miniProgramData() {
				return this.vk.getVuex('$app.componentsDynamic.miniProgramData.list') || []
			},
			mainLogo() {
				return config.staticUrl.logo
			}
		},
		watch: {
		},
		onLoad(options = {}) {
			that = this;
			that.options = options
			vk = that.vk;
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: that.$t('nav.mine')
			});
		},
		methods: {
			/* 
			 调用内置的设置页面
			 */
			openSetting() {
				uni.openSetting({
					success(res) {
						console.log(res.authSetting)
					}
				});
			},
			// 使用微信绑定的手机号登录/注册
			loginByWeixinPhoneNumber(e) {
				let {
					encryptedData,
					iv
				} = e.detail;
				if (!encryptedData || !iv) {
					return false;
				}
				vk.userCenter.code2SessionWeixin({
					data: {
						needCache: true
					},
					success: function(data) {
						vk.userCenter.getPhoneNumber({
							data: {
								encryptedData,
								iv,
								sessionKey: data.sessionKey
							},
							success(phone) {
								console.log(phone.data)
								vk.userCenter.bindMobile({
									data: {
										uid: vk.getVuex('$user.userInfo._id'),
										mobile: phone.mobile
									},
									success(res) {
										that.vk.setVuex('$user.userInfo', res.userInfo || {});
									}
								});
							}
						});
					},
				});
			},
			pageTo(path) {
				vk.navigateTo(path);
			},
			/* 小程序跳转 */
			goMiniProgramFunc(miniItem) {
				vk.myfn.navigateToMini(miniItem)
			}
		}
	}
</script>
<style lang="scss" scoped>
</style>
