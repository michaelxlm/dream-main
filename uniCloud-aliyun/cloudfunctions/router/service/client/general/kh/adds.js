'use strict';
module.exports = {
	/**
	 * 添加
	 * @url client/general/kh/adds 前端调用的url参数地址
	 * data 请求参数
	 * @params {String} params1  参数1
	 */
	main: async (event) => {
		let {
			data = {}, util, originalParam, uid, filterResponse
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
		let res = {
			code: 0,
			msg: ''
		};
		let runTime1 = new Date().getTime();
		// 开启事务
		try {
			let {
				mainDBname,
				dbName,
				addJson,
				type
			} = data;
			console.log(filterStack)
			let twUserFilter = vk.pubfn.getListItem(filterStack, "filterId", "twUserFilter"); //获取图文用户ID过滤器
			let dataJson = addJson || {}
			dataJson.uid = uid; //用户id
			dataJson.originalParamContext = {
				os: context.OS, //客户端操作系统，返回值：android、ios    等
				platform: context.PLATFORM, //运行平台，返回值为 mp-weixin、app-plus等
				appid: context.APPID, // manifest.json中配置的appid
				clientIP: context.CLIENTIP, // 客户端ip信息
				clientUA: context.CLIENTUA, // 客户端user-agent
				deviceId: context
					.DEVICEID, // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
				spaceInfo: context.SPACEINFO, // 当前环境信息 {spaceId:'xxx',provider:'tencent'}
			}; //用户id
			if (type === 'tags') {
				try {
					let update1Res = await vk.baseDao.updateById({
						id: twUserFilter.twUseID,
						dbName: mainDBname + "_user",
						dataJson: {
							tags_add_number: _.inc(1)
						},
					});
					console.log(update1Res)
				} catch (err) {
					console.error(`update1Res error`, err)
				}

			} else if (type === 'comment') {
				try {
					let add2Res = await vk.baseDao.updateById({
						id: twUserFilter.twUseID,
						dbName: mainDBname + "_user",
						dataJson: {
							tw_comment_Number: _.inc(1)
						},
					});
					if (add2Res < 1) {
						return {
							code: -1,
							msg: "添加失败",
							resultFrom: 'add2Res',
							result: add2Res
						}
					}
					console.log(add2Res)
					if (addJson.comment_parent_status) { //回复评论
						// 总评论数量增加1
						let add5Res = await vk.baseDao.updateById({
							id: addJson.parent_comment_id,
							dbName: dbName,
							dataJson: {
								commentNumber: _.inc(1)
							},
						});
						console.log(add5Res)
						if (add5Res < 1) {
							return {
								code: -1,
								msg: "添加失败",
								resultFrom: 'add5Res',
								result: add5Res
							}
						}
					} else { //评论图文
						// 总评论数量增加1
						let add6Res = await vk.baseDao.updateById({
							id: addJson.tw_id,
							dbName: mainDBname,
							dataJson: {
								commentNumber: _.inc(1)
							},
						});
						console.log(add6Res)
						if (add6Res < 1) {
							return {
								code: -1,
								msg: "添加失败",
								resultFrom: 'add6Res',
								result: add6Res
							}
						}
					}
				} catch (err) {
					console.error(`add2Res error`, err)
				}

			} else if (type === 'tw') {
				try {
					// 用户总图文数量增加1
					let add3Res = await vk.baseDao.updateById({
						id: twUserFilter.twUseID,
						dbName: mainDBname + "_user",
						dataJson: {
							tw_Number: _.inc(1)
						},
					});
					console.log(add3Res)
					if (add3Res < 1) {
						return {
							code: -1,
							msg: "添加失败",
							resultFrom: 'add3Res',
							result: add3Res
						}
					}
				} catch (err) {
					console.error(`add3Res error`, err)
				}

			}
			let addRes = await vk.baseDao.add({
				dbName: dbName,
				dataJson: dataJson
			});
			console.log(addRes)
			let runTime2 = new Date().getTime();
			let runTime = (runTime2 - runTime1) / 1000 + "秒";
			console.log(new Date(runTime2), "运行结束,耗时:" + runTime);
			if (vk.pubfn.isNull(addRes)) { //状态为1则图文删除
				return {
					code: -1,
					msg: "添加失败",
					addRes: addRes
				}
			} else {
				return {
					code: 0,
					msg: "添加成功",
					addRes: addRes
				}
			}
		} catch (err) {
			return {
				code: -1,
				msg: "添加失败",
				err: {
					message: err.message,
					stack: err.stack
				}
			}
		}
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}
