<template>
	<view>
		<view>
			<view class="container u-skeleton">
				<view v-if="vk.pubfn.isNotNull(userInfo.mobile)"
					class="userinfo u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30"
					@click="pageTo('/pages/mine/info?from=mine')">
					<block>
						<u-avatar class="userinfo-avatar u-skeleton-circle u-m-r-20" :src="userInfo.avatar || mainLogo"
							size="140" />
						<view class="u-skeleton-fillet u-flex-1">
							<view class="u-font-18 u-p-b-20">
								<text>{{ userInfo.nickname|| userInfo.username ||"游客" }}</text>
							</view>
							<view class="u-font-14 u-tips-color">{{userInfo.intro }}</view>
						</view>
						<view class="u-m-l-10 u-p-10">
							<u-icon name="setting" color="#969799" size="28"></u-icon>
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
				sessionKey: "",
				options: {},
				componentsDynamic: {}
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
			userInfo() {
				return this.vk.getVuex('$user.userInfo') || {}
			},
			miniProgramData() {
				return this.componentsDynamic['miniProgramData'] ? this.componentsDynamic['miniProgramData']['list'] : []
			},
			mainLogo() {
				return config.staticUrl.logo
			}
		},
		watch: {
			userInfo: {
				handler(oldVal, newVal) {
					console.log(oldVal)
					console.log(newVal)
					if (this.vk.pubfn.isNotNull(newVal.mobile)) {
						vk.userCenter.code2SessionWeixin({
							data: {
								needCache: true
							},
							success: function(data) {
								that.sessionKey = data.sessionKey
							},
						});

					}
				},
				deep: true
			}
		},
		onLoad(options = {}) {
			that = this;
			that.options = options
			vk = that.vk;
			vk.pubfn.getComponentsDynamicData({
				that: that,
				ids: [
					"miniProgramData"
				]
			});
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
				vk.userCenter.getPhoneNumber({
					data: {
						encryptedData,
						iv,
						sessionKey: that.sessionKey
					},
					success(phone) {
						console.log(phone.data)
						vk.userCenter.bindMobile({
							data: {
								uid: vk.getVuex('$user.userInfo._id'),
								mobile: phone.mobile
							},
							success(data) {
								that.vk.setVuex('$user.userInfo', data.userInfo || {});
								that.getList()
							}
						});
					}
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
