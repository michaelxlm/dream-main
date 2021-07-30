'use strict';
module.exports = {
	/**
	 * 添加图文
	 * @url client/wordImg/kh/add 前端调用的url参数地址
	 * data 请求参数
	 * @params {String} params1  参数1
	 */
	main: async (event) => {
		let {
			data = {}, util, originalParam, uid
		} = event;
		let {
			customUtil,
			config,
			pubFun,
			vk,
			db,
			_
		} = util;
		let {
			context
		} = originalParam
		let res = {
			code: 0,
			msg: ''
		};
		let dataJson = {}
		dataJson.text = data.text; //描述
		dataJson.imageList = data.imageList || [];
		dataJson.tags = data.tags || []; //标签列表
		dataJson.uid = uid; //用户id
		dataJson.originalParam = {
			os: context.OS, //客户端操作系统，返回值：android、ios    等
			platform: context.PLATFORM, //运行平台，返回值为 mp-weixin、app-plus等
			appid: context.APPID, // manifest.json中配置的appid
			clientIP: context.CLIENTIP, // 客户端ip信息
			clientUA: context.CLIENTUA, // 客户端user-agent
			deviceId: context.DEVICEID, // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
			spaceInf: context.SPACEINFO, // 当前环境信息 {spaceId:'xxx',provider:'tencent'}
		}
		dataJson.status = 0; // 0-正常
		dataJson.isComments = true; //是否允许评论
		dataJson.commentNumber = true; //是否允许评论
		dataJson.heatNumber = 0; //热度值
		dataJson.trampleNumber = 0; // 踩得数量
		dataJson.historyNumber = 0; //浏览量
		dataJson.loveNumber = 0; //喜欢数
		dataJson.collectNumber = 0; //收藏数
		dataJson.recommendNumber = 0; //推荐数
		// 业务逻辑开始-----------------------------------------------------------
		// 可写与数据库的交互逻辑等等
		try {
			res.id = await vk.baseDao.add({
				dbName: "tw",
				dataJson: dataJson
			});
			res.msg = '发布成功'
		} catch (error) {
			console.error(error)
			res.id = undefined
			res.msg = '发布失败'
		}
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}
