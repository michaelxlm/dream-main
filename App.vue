<script>
	import config from '@/app.config.js'
	export default {
		methods: {
			// 监听本地缓存
			watchLocalStorage: function() {
				let that = this;
				let {
					vk
				} = this;
				// 从缓存中获取数据并重新请求数据更新

				// #ifdef MP-WEIXIN
				wx.getBackgroundFetchData({
					fetchType: 'pre',
					success(res) {
						console.log(res.fetchedData) // 缓存数据
						console.log(res.timeStamp) // 客户端拿到缓存数据的时间戳
						console.log(res.path) // 页面路径
						console.log(res.query) // query 参数
						console.log(res.scene) // 场景值
					}
				})
				// #endif
			},
			// 页面初始化时静默登录/注册
			initLogin: function() {
				let that = this;
				// #ifdef MP-WEIXIN
				that.vk.userCenter.loginByWeixin({
					success: function(data) {
						console.log(data)
						that.vk.setVuex('$user.userInfo', data.userInfo || {});
					}
				});
				// #endif
			},
			// 初始化服务器配置参数
			gitAppInit: function() {
				let that = this;
				this.vk.callFunction({
					url: 'plugs/components_dynamic/client/pub/gitAppInit',
				}).then((data) => {
					that.vk.setVuex('$app.componentsDynamic', data.componentsDynamic || {});
				}).catch((err) => {
					console.log(err)
					that.vk.setVuex('$app.componentsDynamic', {});
				});
			},
		},
		// 监听 - 页面404
		onPageNotFound: function(e) {
			uni.redirectTo({
				url: config.error.url
			})
		},
		onLaunch: function() {
			if (config.debug) console.log('App Launch')
			let that = this;
			that.gitAppInit()
			that.watchLocalStorage();
			that.initLogin()
			// #ifdef APP-NVUE
			plus.screen.lockOrientation('portrait-primary');

			let appid = plus.runtime.appid;
			if (appid && appid.toLocaleLowerCase() != "hbuilder") {
				uni.request({
					url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
					data: {
						appid: plus.runtime.appid,
						version: plus.runtime.version
					},
					success: (res) => {
						console.log('success', res);
						if (res.statusCode == 200 && res.data.isUpdate) {
							let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
							// 提醒用户更新
							uni.showModal({
								title: '更新提示',
								content: res.data.note ? res.data.note : '是否选择更新',
								success: (showResult) => {
									if (showResult.confirm) {
										plus.runtime.openURL(openUrl);
									}
								}
							})
						}
					}
				})
			}

			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "texticons",
				'src': "url('./static/text-icon.ttf')"
			});
			// #endif
		},
		onShow: function() {
			if (config.debug) console.log('App Show')
		},
		onHide: function() {
			if (config.debug) console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*z自定义全局样式*/
	@import "./common/css/main.scss";

	page {}
</style>
