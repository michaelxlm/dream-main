'use strict';
module.exports = {
	/**
	 * 取消点赞
	 * @url client/wordImg/kh/delLove 前端调用的url参数地址
	 * data 请求参数
	 * {
		 like_id:点赞的ID
		 tw_id:图文id
	 }
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
			// 业务逻辑开始-----------------------------------------------------------
			// 添加到点赞表
			let update1Res = await vk.baseDao.update({
				db: transaction,
				dbName: "tw_like",
				whereJson: { // 条件
					_id: data.like_id,
					tw_id:data.tw_id,
				},
				dataJson: {
					status: 1
				},
			});
			console.log(update1Res)
			// 用户总点赞数量减少1
			let twUse = await vk.baseDao.findByWhereJson({
				db: transaction,
				dbName: "tw_user", // 表名
				whereJson: { // 条件
					uid: uid,
				}
			});
			console.log(twUse)
			if (vk.pubfn.isNull(twUse)) {
				let update2Res = await vk.baseDao.add({
					db: transaction,
					dbName: "tw_user",
					dataJson: {
						uid: uid,
						loveNumber: 0
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
						loveNumber: _.inc(-1)
					},
				});

				console.log(update3Res)
			}
			// 总点赞数量减少1
			let update4Res = await vk.baseDao.updateById({
				db: transaction,
				id: data.tw_id,
				dbName: "tw",
				dataJson: {
					loveNumber: _.inc(-1)
				},
			});
			//验证是否当前是否已经被删除
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
					msg: "取消点赞成功",
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
