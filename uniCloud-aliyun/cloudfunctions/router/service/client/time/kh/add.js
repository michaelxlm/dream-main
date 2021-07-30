'use strict';
module.exports = {
	/**
	 * 添加图文
	 * @url client/time/kh/add 前端调用的url参数地址
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
		let dataJson = data || {}
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
		// 业务逻辑开始-----------------------------------------------------------
		// 业务逻辑开始-----------------------------------------------------------
		// 可写与数据库的交互逻辑等等
		// 开启事务
		const transaction = await vk.baseDao.startTransaction();
		try {
			if (vk.pubfn.isNull(data.time_id)) {
				dataJson.tags = []; //标签列表
				dataJson.status = 0; // 0-正常
				dataJson.isComments = true; //是否允许评论
				dataJson.commentNumber = true; //是否允许评论
				dataJson.heatNumber = 0; //热度值
				dataJson.trampleNumber = 0; // 踩得数量
				dataJson.historyNumber = 0; //浏览量
				dataJson.loveNumber = 0; //喜欢数
				dataJson.collectNumber = 0; //收藏数
				dataJson.recommendNumber = 0; //推荐数
				let update2Res = await vk.baseDao.add({
					db: transaction,
					dbName: "time",
					dataJson: dataJson
				});
				if (update2Res.status == 1) { //状态为1则图文删除
					transaction.rollback(-100);
					return {
						code: -1,
						msg: "当前内容已被删除"
					}
				} else {
					// 提交事物
					await transaction.commit();
					console.log(`transaction succeeded`);
					return {
						code: 0,
						msg: "添加成功",
					}
				}
			} else {
				let update3Res = await vk.baseDao.update({
					db: transaction,
					whereJson: { // 条件
						_id: data.time_id,
					},
					dbName: "time",
					dataJson: dataJson,
				});

				console.log(update3Res)
				if (update3Res.status == 1) { //状态为1则图文删除
					transaction.rollback(-100);
					return {
						code: -1,
						msg: "当前内容已被删除",
						id: data.time_id
					}
				} else {
					// 提交事物
					await transaction.commit();
					console.log(`transaction succeeded`);
					return {
						code: 0,
						msg: "修改成功",
					}
				}
			}
		} catch (err) {
			// 事务回滚
			await transaction.rollback();
			console.error(`transaction error`, err)
			return {
				code: -1,
				msg: "数据库写入异常,事务已回滚",
				err: {
					message: err.message,
					stack: err.stack
				}
			}
		}
		// 业务逻辑结束-----------------------------------------------------------
		// 可写与数据库的交互逻辑等等
		try {
			res.id = await vk.baseDao.add({
				dbName: "time",
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
