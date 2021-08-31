'use strict';
module.exports = {
	/**
	 * 点赞
	 * @url client/general/kh/addLove 前端调用的url参数地址
	 * data 请求参数
	 * data 请求参数 说明
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	main: async (event) => {
		let {
			data = {}, util, originalParam, uid, userInfo, filterResponse
		} = event;
		let {
			filterStack
		} = filterResponse;
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
		let {
			mainDBname,
			dbName,
			from, //点赞类型
			comment_id, //评论iD
			tw_id, //当前的图文ID
		} = data;
		// 业务逻辑开始-----------------------------------------------------------
		try {
			let twUserFilter = vk.pubfn.getListItem(filterStack, "filterId", "twUserFilter"); //获取图文用户ID过滤器
			let dataJson = {}
			dataJson.comment_id = comment_id; //评论ID
			dataJson.from = from; //点赞类型
			dataJson.tw_id = tw_id; //图文ID
			dataJson.uid = uid; //用户id
			dataJson.originalParam = {
				os: context.OS, //客户端操作系统，返回值：android、ios    等
				platform: context.PLATFORM, //运行平台，返回值为 mp-weixin、app-plus等
				appid: context.APPID, // manifest.json中配置的appid
				clientIP: context.CLIENTIP, // 客户端ip信息
				clientUA: context.CLIENTUA, // 客户端user-agent
				deviceId: context
					.DEVICEID, // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
				spaceInf: context.SPACEINFO, // 当前环境信息 {spaceId:'xxx',provider:'tencent'}
			}
			dataJson.status = 0; // 0-正常
			// 业务逻辑开始-----------------------------------------------------------
			let parent_id = '';
			parent_id = from === 'comment' ? comment_id : tw_id
			try {
				let addLove1Res = await vk.baseDao.updateById({
					id: twUserFilter.twUseID,
					dbName: mainDBname + "_user",
					dataJson: {
						loveNumber: _.inc(1)
					},
				});
				console.log(addLove1Res)
				if (addLove1Res < 1) {
					return {
						code: -1,
						msg: "点赞失败",
						resultFrom: 'addLove1Res',
						result: addLove1Res
					}
				}
			} catch (err) {
				console.log(`addLove1Res fail`, err);
			}
			try {
				// 总点赞数量增加1
				let addLove4Res = await vk.baseDao.updateById({
					id: parent_id,
					dbName: dbName,
					dataJson: {
						loveNumber: _.inc(1)
					},
				});
				if (addLove4Res < 1) {
					return {
						code: -1,
						msg: "点赞失败",
						resultFrom: 'addLove4Res',
						result: addLove4Res
					}
				}
			} catch (err) {
				console.log(`addLove4Res fail`, err);
			}

			// 添加到点赞表
			let addLoveRes = await vk.baseDao.add({
				dbName: dbName + "_like",
				dataJson: dataJson
			});
			console.log(addLoveRes)
			if (vk.pubfn.isNull(addLoveRes)) { //状态为1则图文删除
				return {
					code: -1,
					msg: "当前内容已被删除",
					id: parent_id
				}
			} else {
				return {
					code: 0,
					msg: "点赞成功",
					id: addLoveRes
				}
			}
		} catch (err) {
			return {
				code: -1,
				msg: "点赞失败",
				err: {
					message: err.message,
					stack: err.stack
				}
			}
		}
		// 业务逻辑结束-----------------------------------------------------------
	}
}
