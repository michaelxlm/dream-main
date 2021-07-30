<template>
	<view>
		<!-- 头部logo -->
		<view class="headerLogo">
			<u-image :src="mainLogo" shape="circle" :width="160" :height="160" :show-error="false" :show-loading="false"/>
		</view>
		<!-- 主体 -->
		<view class="mainForm">
			<u-form :model="form1" ref="uForm1">
				<u-form-item border-bottom={false}>
					<u-input class="main-input" v-model="form1.mobile" type="text" :maxlength="11" placeholder="手机号"
						placeholder-style="'color':'#8e8e8e'" />
				</u-form-item>
				<u-form-item border-bottom={false}>
					<u-input class="main-input" v-model="form1.password" type="password" placeholder="请输入新密码"
						placeholder-style="'color':'#8e8e8e'" />
				</u-form-item>
				<u-form-item border-bottom={false}>
					<u-input class="main-input" v-model="form1.password2" type="password" placeholder="请再次输入新密码"
						placeholder-style="'color':'#8e8e8e'" />
				</u-form-item>
				<u-form-item border-bottom={false}>
					<u-input class="main-input" v-model="form1.code" type="number" :maxlength="6" placeholder="请输入验证码"
						placeholder-style="'color':'#8e8e8e'" />
					<!-- 验证码倒计时开始 -->
					<vk-u-verification-code slot="right" seconds="60" :mobile="form1.mobile" type="register">
					</vk-u-verification-code>
					<!-- 验证码倒计时结束 -->
				</u-form-item>
			</u-form>
			<u-button shape="circle" @click="loginBySms" :plain="false" :hair-line="false" type="success">
				{{$t('mine.registered')}}
			</u-button>
		</view>
		<!-- 底部信息 -->
		<view class="footer">
			<u-checkbox v-model="form1.agreement" active-color="#737373" shape="circle">{{$t('mine.agree')}}
			</u-checkbox>
			<!-- 协议地址 -->
			<navigator url="../agreement/agreement" open-type="navigate" style="color: #007AFF;">
				《{{$t('mine.agreement')}}》</navigator>
		</view>
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
				// 表单请求数据
				form1: {
					agreement: true,
					mobile: "",
					password: "",
					password2: "",
					code: "",
					type: "register"
				},
				scrollTop: 0,
				isRotate: false,
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
				title: that.$t('mine.registered')
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
			// 页面数据初始化函数
			init(options = {}) {
				console.log("init: ", options);
			},
			pageTo(path) {
				vk.navigateTo(path);
			},
			// 登录(手机号+验证码) 不存在会自动注册
			loginBySms() {
				if (that.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
				const {
					agreement,
					mobile,
					code,
					password,
					password2
				} = that.form1;
				if (!agreement) {
					vk.toast('请阅读并同意用户服务及隐私协议', "none");
					return;
				}
				if (!vk.pubfn.checkStr(mobile, 'mobile')) {
					vk.toast('请输入正确的手机号码', "none");
					return;
				}
				if (!vk.pubfn.checkStr(password, 'pwd')) {
					vk.toast('密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线', "none");
					return;
				}
				if (!vk.pubfn.checkStr(password2, 'pwd')) {
					vk.toast('密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线', "none");
					return;
				}
				if (password != password2) {
					vk.toast('两次密码必须相同!', "none");
					return;
				}
				if (!vk.pubfn.checkStr(code, 'mobileCode')) {
					vk.toast('验证码格式为6位数字', "none");
					return;
				}
				that.isRotate = true;
				vk.userCenter.loginBySms({
					data: that.form1,
					success: function(data) {
						that.isRotate = false;
						if (data.type == "login") {
							vk.toast("登录成功!");
						} else {
							vk.toast("注册成功!");
						}
						setTimeout(function() {
							// 跳转到首页,或页面返回
							var pages = getCurrentPages();
							if (pages.length > 1) {
								vk.navigateBack();
							} else {
								// 进入首页
								vk.switchTab("../../index/index");
							}
						}, 1000);
					},
					complete: function() {
						that.isRotate = false;
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
