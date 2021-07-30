/**
 * unicloud-user-center 接口类（uni-id封装）
 * author	VK
 */
import callFunctionUtil from './vk-unicloud-callFunctionUtil.js'
var { callFunction, config, saveToken, deleteToken } = callFunctionUtil;

export default {
	/**
	 * 用户注册(用户名+密码)
	 * data 请求参数 说明
	 * @params {String} username 用户名
	 * @params {String} password 密码
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} token 注册完成自动登录之后返回的token信息
	 * @params {String} tokenExpired token过期时间
	 * @params {Object} userInfo 用户信息
	 * @params {String} uid 用户ID
	 */
	register(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "注册中...";
		return callFunction({
			...obj,
			url: 'user/pub/register'
		});
	},
	/**
	 * 用户登陆(用户名+密码)
	 * data 请求参数 说明
	 * @params {String} username 用户名
	 * @params {String} password 密码
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} token 注册完成自动登录之后返回的token信息
	 * @params {String} tokenExpired token过期时间
	 * @params {Object} userInfo 用户信息
	 * @params {String} uid 用户ID
	 */
	login(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "登录中...";
		return callFunction({
			...obj,
			url: 'user/pub/login'
		});
	},
	/**
	 * 登出(退出)
	 * data 请求参数 说明
	 * 无
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	logout(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/pub/logout',
			success(res) {
				deleteToken();
				if (typeof obj.success == "function") obj.success(res);
			}
		});
	},
	/**
	 * 修改密码
	 * @description 修改成功后，需要重新登录获取新的token
	 * data 请求参数 说明
	 * @params {String} oldPassword 旧密码
	 * @params {String} newPassword 新密码
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	updatePwd(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/updatePwd',
		});
	},
	/**
	 * 重置密码
	 * data 请求参数 说明
	 * @params {String} password 重置后的密码
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	resetPwd(obj) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/resetPwd',
		});
	},
	/**
	 * 设置头像
	 * data 请求参数 说明
	 * @params {String} avatar 头像地址
	 * @params {Boolean} deleteOldFile 是否同时删除云储存内的头像文件
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	setAvatar(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		//obj.isRequest = true;
		return callFunction({
			...obj,
			url: 'user/kh/setAvatar',
		});
	},
	/**
	 * 设置昵称等用户展示的个人信息
	 * data 请求参数 说明
	 * @params {String} nickname 昵称
	 * @params {String} avatar 头像
	 * @params {Number} gender 性别
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	updateUser(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		callFunction({
			...obj,
			url: 'user/kh/updateUser'
		});
	},
	/**
	 * 获取用户最新信息
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 错误信息
	 * @params {Object} userInfo 用户信息
	 */
	getCurrentUserInfo(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/getMyUserInfo',
		});
	},
	/**
	 * token校验
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} uid 当前token对应的用户uid
	 * @params {Object} userInfo 当前用户信息
	 * @params {Array} role 当前用户角色
	 * @params {Array} permission 当前用户权限
	 */
	checkToken(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/pub/checkToken',
		});
	},
	/**
	 * 绑定手机号
	 * data 请求参数 说明
	 * @params {String} mobile 手机号
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	bindMobile(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/bindMobile',
		});
	},
	/**
	 * 解绑手机号
	 * data 请求参数 说明
	 * @params {String} mobile 手机号
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	unbindMobile(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/unbindMobile',
		});
	},
	/**
	 * 手机号登陆(手机号+手机验证码)
	 * data 请求参数 说明
	 * @params {String} mobile 手机号
	 * @params {String} code 验证码
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} token 注册完成自动登录之后返回的token信息
	 * @params {String} tokenExpired token过期时间
	 */
	loginBySms(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "登录中...";
		return callFunction({
			...obj,
			url: 'user/pub/loginBySms'
		});
	},
	/**
	 * 发送手机号验证码
	 * data 请求参数 说明
	 * @params {String} mobile 手机号
	 * @params {String} type  验证码类型
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {Object} requestRes 原始返回数据
	 * @params {Object} requestParam 包含服务供应商和发送的手机号
	 */
	sendSmsCode(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/pub/sendSmsCode',
		});
	},
	/**
	 * APP端 手机一键登录
	 * data 请求参数 说明
	 * @params {String} access_token 			uni.login登录成功后，返回的access_token参数
	 * @params {String} openid 						uni.login登录成功后，返回的openid参数
	 * @params {String} type 							指定操作类型，可选值为login、register，不传此参数时表现为手机号已注册则登录，手机号未注册则进行注册
	 * @params {String} password 					密码，type为register时生效
	 * @params {String} inviteCode 				邀请人的邀请码，type为register时生效
	 * @params {String} myInviteCode 			设置当前注册用户自己的邀请码，type为register时生效
	 * res 返回参数说明
	 * @params {Number} code			错误码，0表示成功
	 * @params {String} msg				详细信息
	 * @params {String} uid 			当前token对应的用户uid
	 * @params {String} type			操作类型，login为登录、register为注册
	 * @params {String} mobile		登录者手机号
	 * @params {String} userInfo	用户全部信息
	 * @params {String} token			登录成功之后返回的token信息
	 * @params {String} tokenExpired		token过期时间
	 */
	loginByUniverify(obj = {}) {
		if (typeof obj.needAlert === "undefined") obj.needAlert = true;
		// #ifdef APP-PLUS
		uni.login({
			provider: 'univerify',
			univerifyStyle: obj.univerifyStyle,
			success(res) {
				let dataJson = Object.assign(obj.data, res.authResult);
				callFunction({
					...obj,
					data: dataJson,
					url: 'user/pub/loginByUniverify',
				});
			},
			fail: obj.fail,
			complete: obj.complete,
		});
		// #endif
		// #ifndef APP-PLUS
		uni.vk.toast("请在APP中使用本机号码一键登录", "none");
		// #endif
	},

	/**
	 * 绑定邮箱
	 * data 请求参数 说明
	 * @params {String} email 邮箱
	 * @params {String} code  邮箱收到的验证码
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	bindEmail(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/bindEmail',
		});
	},
	/**
	 * 解绑邮箱
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	unbindEmail(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/unbindEmail',
		});
	},
	/**
	 * 邮箱登陆(邮箱+邮箱验证码)
	 * data 请求参数 说明
	 * @params {String} email 邮箱
	 * @params {String} code  邮箱收到的验证码
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} token 注册完成自动登录之后返回的token信息
	 * @params {String} tokenExpired token过期时间
	 */
	loginByEmail(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "登录中...";
		return callFunction({
			...obj,
			url: 'user/pub/loginByEmail'
		});
	},
	/**
	 * 发送邮件验证码
	 * data 请求参数 说明
	 * @params {String} email 邮箱
	 * @params {String} type  验证码类型
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} email 手机号
	 * @params {String} verifyCode 验证码
	 */
	sendEmailCode(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/pub/sendEmailCode',
		});
	},
	/**
	 * 设置验证码
   * @description 设置验证码(此接口正式环境不要暴露,故写在了sys目录下)
	 * data 请求参数 说明
   * @params {String} email  邮箱
	 * @params {String} mobile 手机号
	 * @params {String} type  验证码类型
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} email 邮箱
	 * @params {String} mobile 手机号
	 * @params {String} verifyCode 验证码(uni 1.1.2开始不再返回verifyCode)
	 */
	setVerifyCode(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/sys/setVerifyCode',
		});
	},
	/**
	 * 微信登陆获取用户code
	 */
	getWeixinCode() {
		return new Promise((resolve, reject) => {
			// #ifdef MP-WEIXIN
			uni.login({
				provider: 'weixin',
				success(res) {
					resolve(res.code)
				},
				fail(err) {
					reject(new Error('微信登录失败'))
				}
			})
			// #endif
			// #ifdef APP-PLUS
			plus.oauth.getServices((services) => {
				let weixinAuthService = services.find((service) => {
					return service.id === 'weixin';
				});
				if (weixinAuthService) {
					weixinAuthService.authorize(function(res) {
						resolve(res.code);
					}, function(err) {
						console.log(err);
						reject(new Error('微信登录失败'));
					});
				}
			});
			// #endif
		})
	},
  /**
   * 用户登录(微信授权)
   * @description 用户登录(微信授权)
	 * data 请求参数 说明
	 * @params {String} code 微信登录返回的code
	 * @params {String} platform 客户端类型：mp-weixin、app-plus，默认uni-id会自动取客户端类型，但是在云函数url化等场景无法取到客户端类型，可以使用此参数指定
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} token 登录成功之后返回的token信息
	 * @params {String} tokenExpired token过期时间
   */
	loginByWeixin(obj = {}) {
		let that = this;
		if (!obj.loading && !obj.title) obj.title = "登录中...";
		let { data = {} } = obj;
		that.getWeixinCode().then((code) => {
			callFunction({
				...obj,
				url: 'user/pub/loginByWeixin',
				data: {
					...data,
					code: code
				}
			});
		});
	},
  /**
   * 获取微信openid
   * res 返回参数说明
   * @params {Number} code 错误码，0表示成功
   * @params {String} msg 详细信息
   * @params {String} openid 用户openid
   * @params {String} unionid 用户unionid，可以取到此值时返回
	 * @params {String} sessionKey 客户端为微信小程序时返回
	 * @params {String} accessToken 客户端为APP时返回
	 * @params {String} expiresIn 客户端为APP时返回，accessToken 接口调用凭证超时时间，单位（秒）
	 * @params {String} refreshToken 客户端为APP时返回，用于刷新accessToken
   */
	code2SessionWeixin(obj = {}) {
		let that = this;
		if (!obj.loading && typeof obj.title === "undefined") obj.title = "请求中...";
		let { data = {} } = obj;
		that.getWeixinCode().then((code) => {
			callFunction({
				...obj,
				url: 'user/pub/code2SessionWeixin',
				data: {
					...data,
					code: code
				}
			});
		});
	},
  /**
   * 绑定微信
   * @description 将当前登录用户绑定微信
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	bindWeixin(obj = {}) {
		let that = this;
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		let { data = {} } = obj;
		that.getWeixinCode().then((code) => {
			callFunction({
				...obj,
				url: 'user/kh/bindWeixin',
				data: {
					...data,
					code: code
				}
			});
		});
	},
	/**
	 * 解绑微信
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	unbindWeixin(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/unbindWeixin',
		});
	},
	/**
	 * 获取微信绑定的手机号(后面会支持支付宝)
	 * data 请求参数
	 * @params {String} encryptedData
	 * @params {String} iv
	 * @params {String} sessionKey
	 */
	getPhoneNumber(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/pub/getPhoneNumber'
		});
	},
	/**
	 * 通过微信小程序绑定的手机号登录
	 * data 请求参数 说明
	 * @params {String} encryptedData
	 * @params {String} iv
	 * @params {String} sessionKey
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} token 登录成功之后返回的token信息
	 * @params {String} tokenExpired token过期时间
	 */
	loginByWeixinPhoneNumber(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "登录中...";
		return callFunction({
			...obj,
			url: 'user/pub/loginByWeixinPhoneNumber'
		});
	},
	/**
	 * 生成微信小程序码
	 * @params {String} scene        自定义参数最大32个可见字符 只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~
	 * @params {String} page         必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面
	 * @params {number} width        二维码的宽度，单位 px，最小 280px，最大 1280px
	 * @params {boolean} auto_color  自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false
	 * @params {Object} line_color   auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
	 * @params {boolean} is_hyaline  是否需要透明底色，为 true 时，生成透明底色的小程序
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	getWeixinMPqrcode(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "生成中...";
		return callFunction({
			...obj,
			url: 'user/kh/getWeixinMPqrcode',
		});
	},
	/**
	 * 生成微信小程序scheme码
	 * data 请求参数 说明
	 * @params {String} path    小程序页面路径
	 * @params {String} query   小程序页面参数
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	getWeixinMPscheme(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "生成中...";
		return callFunction({
			...obj,
			url: 'user/kh/getWeixinMPscheme',
		});
	},
	/**
	 * 获取支付宝code
	 */
	getAlipayCode() {
		return new Promise((resolve, reject) => {
			uni.login({
				provider: 'alipay',
				success(res) {
					resolve(res.code);
				},
				fail(err) {
					reject(new Error('支付宝登录失败'));
				}
			})
		})
	},
	/**
	 * 支付宝登陆
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} token 登录成功之后返回的token信息
	 * @params {String} tokenExpired token过期时间
	 */
	loginByAlipay(obj = {}) {
		let that = this;
		if (!obj.loading && !obj.title) obj.title = "登录中...";
		let { data = {} } = obj;
		that.getAlipayCode().then((code) => {
			callFunction({
				...obj,
				url: 'user/pub/loginByAlipay',
				data: {
					...data,
					code: code
				}
			});
		});
	},
	/**
	 * 获取支付宝openid
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} openid 用户openid
	 * @params {String} accessToken 客户端为APP时返回
	 * @params {String} expiresIn 客户端为APP时返回，accessToken 接口调用凭证超时时间，单位（秒）
	 * @params {String} refreshToken 客户端为APP时返回，用于刷新accessToken
	 * @params {String} reExpiresIn refreshToken超时时间，单位（秒）
	 */
	code2SessionAlipay(obj = {}) {
		let that = this;
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		let { data = {} } = obj;
		that.getAlipayCode().then((code) => {
			callFunction({
				...obj,
				url: 'user/pub/code2SessionAlipay',
				data: {
					...data,
					code: code
				}
			});
		});
	},
	/**
	 * 绑定支付宝
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	bindAlipay(obj = {}) {
		let that = this;
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		let { data = {} } = obj;
		that.getAlipayCode().then((code) => {
			callFunction({
				...obj,
				url: 'user/kh/bindAlipay',
				data: {
					...data,
					code: code
				}
			});
		});
	},
	/**
	 * 解绑支付宝
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	unbindAlipay(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/unbindAlipay',
		});
	},
	/**
	 * 密码加密测试(暂不用)
	 */
	encryptPwd(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/sys/encryptPwd',
		});
	},
	// 1.1.2新增
	/**
	 * 设置用户邀请码(自动生成)
	 * @description 针对未生成邀请码的用户使用此方法生成邀请码(自动生成)
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} myInviteCode 最终设置的邀请码
	 */
	setUserInviteCode(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/setUserInviteCode',
		});
	},
	/**
	 * 用户接受邀请
	 * @description 此接口用于在注册之后再填写邀请码的场景，多数情况下不会用到此接口而是在注册时填写邀请码
	 * data 请求参数 说明
	 * @params {String} inviteCode 邀请人的邀请码
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	acceptInvite(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/acceptInvite',
		});
	},
	/**
	 * 获取接受邀请的用户清单
	 * data 请求参数 说明
	 * @params {Number}         pageIndex 当前页码
	 * @params {Number}         pageSize  每页显示数量
	 * @params {Array<Object>}  sortRule  排序规则
	 * @params {object}         formData  查询条件数据源
	 * @params {Array<Object>}  columns   查询条件规则
	 * res 返回参数说明
	 * @params {Number}         code      错误码，0表示成功
	 * @params {String}         msg       详细信息
	 */
	getInvitedUser(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/kh/getInvitedUser',
		});
	},
	/**
	 * 根据手机验证码重置账号密码
	 * data 请求参数 说明
	 * @params {String} password 重置后的密码
	 * @params {String} code 验证码
	 * @params {String} mobile 手机号
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	resetPasswordByMobile(obj = {}) {
		if (!obj.loading && !obj.title) obj.title = "请求中...";
		return callFunction({
			...obj,
			url: 'user/pub/resetPasswordByMobile',
		});
	},
	/**
	 * 获取我拥有的菜单列表
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 * @params {String} menus 树形结构的菜单
	 * @params {String} menuList 数组结构的菜单
	 * @params {String} userInfo 用户信息
	 */
	getMenu(obj = {}) {
		return callFunction({
			...obj,
			url: 'user/kh/getMenu'
		});
	},
	/**
	 * 添加文件上传记录
	 * data 请求参数 说明
	 * @params {String} url					文件外网访问url
	 * @params {String} name 				文件名
	 * @params {Number} size				文件大小
	 * @params {String} file_id			文件id
	 * @params {String} provider		供应商
	 * @params {String} category_id 分类ID
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	addUploadRecord(obj = {}) {
		let { fileType, filePath } = obj;
		if (fileType === "image") {
			uni.getImageInfo({
				src: filePath,
				success: function(res) {
					return callFunction({
						...obj,
						url: 'user/kh/addUploadRecord',
						data: {
							...obj.data,
							orientation: res.orientation,
							width: res.width,
							height: res.height
						}
					});
				},
				fail: function(err) {
					console.error(err)
				}
			});
		} else if (fileType === "video") {
			uni.getVideoInfo({
				src: filePath,
				success: function(res) {
					return callFunction({
						...obj,
						url: 'user/kh/addUploadRecord',
						data: {
							...obj.data,
							duration: parseFloat(res.duration.toFixed(3)),
							width: res.width,
							height: res.height
						}
					});
				},
				fail: function(err) {
					console.error(err)
				}
			});
		} else {
			return callFunction({
				...obj,
				url: 'user/kh/addUploadRecord'
			});
		}
	}
};
