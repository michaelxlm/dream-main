'use strict';
module.exports = {
	/**
	 * 添加
	 * @url client/general/kh/add 前端调用的url参数地址
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
		let dbName = data.dbName
		dataJson.uid = uid; //用户id
		// 开启事务
		delete data.dbName
		const transaction = await vk.baseDao.startTransaction();
		try {
			let addRes = await vk.baseDao.add({
				db: transaction,
				dbName: dbName,
				dataJson: dataJson
			});
			if (addRes.status == 1) { //状态为1则图文删除
				transaction.rollback(-100);
				return {
					code: -1,
					msg: "添加失败",
					addRes: addRes
				}
			} else {
				// 提交事物
				await transaction.commit();
				console.log(`transaction succeeded`);
				return {
					code: 0,
					msg: "添加成功",
					addRes: addRes
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
		return res;
	}
}
