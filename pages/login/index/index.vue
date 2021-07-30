<template>
	<view>
		<!-- 头部logo -->
		<view class="headerLogo">
			<u-image :src="mainLogo" shape="circle" :width="160" :height="160" :show-error="false"
				:show-loading="false" />
		</view>
		<view class="u-text-center u-m-t-32">
			<!-- #ifdef MP-WEIXIN -->
			<u-button ripple-bg-color="#909399" :plain="true" type="primary" open-type="getPhoneNumber" size="medium"
				@getphonenumber="loginByWeixinPhoneNumber">
				手机号登录
			</u-button>
			<!-- #endif -->
		</view>
		<!-- 主体表单 -->
		<!-- <view class="mainForm">
			<u-form :model="form1" ref="uForm1">
				<u-form-item border-bottom={false}>
					<u-input v-model="form1.username" type="text" :maxlength="11" placeholder="用户名/手机号"
						placeholder-style="'color':'#8e8e8e'" />
				</u-form-item>
				<u-form-item border-bottom={false}>
					<u-input v-model="form1.password" type="password" placeholder="密码"
						placeholder-style="'color':'#8e8e8e'" />
				</u-form-item>
			</u-form>
			<u-button shape="circle" @click="login" :plain="false" :hair-line="false" type="success">
				{{$t('mine.login')}}</u-button>
		</view> -->
		<!-- 其他登录 -->
		<view class="cuIcon">
			<!-- #ifdef APP-PLUS -->
			<!-- <view class="login_icon">
				<u-icon name="weixin-fill" @tap="login_weixin" size="80" color="#19be6b"></u-icon>
			</view> -->
			<!-- #endif -->
		</view>

		<!-- 底部信息 -->
		<!-- <view class="footer">
			<navigator url="../forget/forget" open-type="navigate">{{$t('mine.RetrievePassword')}}</navigator>
			<text class="center-line">|</text>
			<navigator url="../register/register" open-type="navigate">{{$t('mine.registered')}}</navigator>
		</view> -->
	</view>
</template>

<script>
	import config from '@/app.config.js'
	var that; // 当前页面对象
	var app = getApp(); // 可获取全局配置
	var vk; // 自定义函数集
	export default {
		data() {
			// 页面数据变量
			return {
				// init请求返回的数据
				data: {

				},
				sessionKey: '',
				// 表单请求数据
				form1: {
					agreement: true,
					username: '',
					password: ''
				},
				scrollTop: 0,
			}
		},
		onPageScroll(e) {
			that.scrollTop = e.scrollTop;
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options) {
			that = this;
			vk = that.vk;
			that.init(options);
			uni.setNavigationBarTitle({
				title: that.$t('mine.login')
			});
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {

		},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {


		},
		// 监听 - 页面每次【隐藏时】执行(如：返回)
		onHide() {


		},
		// 监听 - 页面下拉刷新
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
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
		// 函数
		methods: {
			errorFunc(e) {
				console.log('errorFunc')
				console.log(e)
			},
			// 页面数据初始化函数
			init(options = {}) {
				vk.userCenter.code2SessionWeixin({
					data: {
						needCache: true
					},
					success: function(data) {
						that.sessionKey = data.sessionKey;
					},
				});
			},
			pageTo(path) {
				vk.navigateTo(path);
			},
			// 账号密码登录
			login() {
				const {
					agreement,
					username,
					password
				} = that.form1;
				if (!agreement) {
					vk.toast('请阅读并同意用户服务及隐私协议', "none");
					return;
				}
				if (username.length < 4) {
					vk.toast('账号至少4位数', "none");
					return;
				}
				if (!vk.pubfn.checkStr(password, 'pwd')) {
					vk.toast('密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线', "none");
					return;
				}
				// 登录操作
				var form1 = that.form1;
				vk.userCenter.login({
					data: form1,
					success: function(data) {
						console.log("data", data);
						vk.toast("登陆成功!");
						setTimeout(function() {
							// 跳转到首页,或页面返回
							that.login_success(data);
						}, 1000);
					}
				});
			},
			login_success(data) {
				vk.setVuex('$user.userInfo', data.userInfo);
				// 检查是否有指定跳转的页面
				if (vk.navigate.originalPage) {
					vk.navigate.originalTo();
					return false;
				}
				// 跳转到首页,或页面返回
				var pages = getCurrentPages();
				if (pages.length > 1 &&
					pages[pages.length - 2] &&
					pages[pages.length - 2].route &&
					pages[pages.length - 2].route.indexOf('login/index') == -1
				) {
					const eventChannel = that.getOpenerEventChannel();
					eventChannel.emit('loginSuccess', {});
					vk.navigateBack();
				} else {
					// 进入首页
					vk.reLaunch("../../index/index");
				}
			},
			// 第三方登录 - 微信
			login_weixin() {
				vk.userCenter.loginByWeixin({
					success: function(data) {
						vk.toast("登陆成功!");
						setTimeout(function() {
							// 跳转到首页,或页面返回
							that.login_success(data);
						}, 1000);
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
				vk.userCenter.loginByWeixinPhoneNumber({
					data: {
						encryptedData,
						iv,
						sessionKey: that.sessionKey
					},
					success(data) {
						vk.alert(data.msg);
						setTimeout(function() {
							// 跳转到首页,或页面返回
							that.login_success(data);
						}, 1000);
					}
				});
			}
		},
		// 过滤器
		filters: {

		},
		// 计算属性
		computed: {
			mainLogo() {
				return config.staticUrl.logo
			}
		}
	}
</script>
