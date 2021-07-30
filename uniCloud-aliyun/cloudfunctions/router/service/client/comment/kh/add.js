'use strict';
module.exports = {
	/**
	 * 添加图文
	 * @url client/comment/kh/add 前端调用的url参数地址
	 * data 请求参数
	 * data 请求参数 说明
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	main: async (event) => {
		let {
			data = {}, util, originalParam, uid, userInfo
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
		console.log(uid)
		console.log(userInfo)
		// 业务逻辑开始-----------------------------------------------------------
		// 可写与数据库的交互逻辑等等
		// 开启事务
		const transaction = await vk.baseDao.startTransaction();
		try {
			let dataJson = {}
			dataJson.tw_id = data.tw_id; //图文ID
			dataJson.commentText = data.commentText; //评论内容
			
			dataJson.comment_parent_status = data.comment_parent_status || false; //是否为子评论
			dataJson.parent_uid = data.parent_uid || ''; //父级用户ID
			dataJson.parent_comment_id = data.parent_comment_id || ''; //父级评论ID
			
			dataJson.comment_reply_status = data.comment_reply_status || false; //是否为回复评论
			dataJson.reply_uid = data.reply_uid || ''; //回复的用户ID
			dataJson.reply_comment_id = data.reply_comment_id || ''; //回复的评论ID
			
			dataJson.commentImageList = data.commentImageList || [];//评论图片列表
			dataJson.commentTags = data.commentTags || ''; //标签列表
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
			dataJson.isComments = true; //是否允许评论
			dataJson.heatNumber = 0; //热度值
			dataJson.historyNumber = 0; //浏览量
			dataJson.loveNumber = 0; //喜欢数
			dataJson.collectNumber = 0; //收藏数
			dataJson.recommendNumber = 0; //推荐数
			dataJson.commentNumber = 0; //评论回复数
			// 业务逻辑开始-----------------------------------------------------------
			let dbName = "uni-id-users";
			let money = 100;
			// 添加评论到评论表
			let update1Res = await vk.baseDao.add({
				db: transaction,
				dbName: "tw_comment",
				dataJson: dataJson
			});
			console.log(update1Res)
			// 用户总评论数量增加1
			let twUse = await vk.baseDao.findByWhereJson({
				dbName: "tw_user", // 表名
				whereJson: { // 条件
					uid: uid,
				}
			});
			console.log(twUse)
			if (vk.pubfn.isNull(twUse)) {
				let update1Res = await vk.baseDao.add({
					db: transaction,
					dbName: "tw_user",
					dataJson: {
						uid: uid,
						commentNumber: 1
					}
				});
			} else {
				let update3Res = await vk.baseDao.update({
					db: transaction,
					whereJson: { // 条件
						uid: uid,
					},
					dbName: "tw_user",
					dataJson: {
						commentNumber: _.inc(1)
					},
				});

				console.log(update3Res)
			}
			let update4Res = await vk.baseDao.update({
				db: transaction,
				dbName: "tw_comment",
				whereJson: { // 条件
					_id: data.parent_comment_id,
				},
				dataJson: {
					commentNumber: _.inc(1)
				},
			});
			//验证是否当前图文是否已经被删除
			const endRes = await vk.baseDao.findById({
				db: transaction,
				dbName: 'tw',
				id: data.tw_id
			});
			console.log(endRes)
			if (endRes.status == 1) { //状态为1则图文删除
				transaction.rollback(-100);
				return {
					code: -1,
					msg: "当前图文已被删除",
					id: data.tw_id
				}
			} else {
				// 提交事物
				await transaction.commit();
				console.log(`transaction succeeded`);
				return {
					code: 0,
					msg: "评论成功",
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
	}
}
