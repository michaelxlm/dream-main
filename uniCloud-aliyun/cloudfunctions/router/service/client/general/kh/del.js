'use strict';
module.exports = {
	/**
	 * 删除
	 * @url client/general/kh/del 前端调用的url参数地址
	 * data 请求参数
	 * @params {String} params1  参数1
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
		} = originalParam;
		let {
			mainDBname,
			dbName,
			tw_id, //删除的图文ID
			childCommint, //是否是子评论
			del_id, //删除的ID
			type, //删除的类型
		} = data;
		// 业务逻辑开始-----------------------------------------------------------
		try {
			let twUserFilter = vk.pubfn.getListItem(filterStack, "filterId", "twUserFilter"); //获取图文用户ID过滤器
			// 业务逻辑开始-----------------------------------------------------------
			if (type === 'tags') {
				try {
					let delLove1Res = await vk.baseDao.updateById({
						id: twUserFilter.twUseID,
						dbName: mainDBname + "_user",
						dataJson: {
							tags_add_number: _.inc(-1)
						},
					});
					console.log(delLove1Res)
				} catch (err) {
					console.error(`delLove1Res error`, err)
				}

			} else if (type === 'comment') {
				try {
					let delLove2Res = await vk.baseDao.updateById({
						id: twUserFilter.twUseID,
						dbName: mainDBname + "_user",
						dataJson: {
							tw_comment_Number: _.inc(-1)
						},
					});
					console.log(delLove2Res)
					if (childCommint) { //回复评论
						// 总评论数量增加1
						let delLove3Res = await vk.baseDao.updateById({
							id: addJson.parent_comment_id,
							dbName: dbName,
							dataJson: {
								commentNumber: _.inc(-1)
							},
						});
						console.log(delLove3Res)
					} else { //评论图文
						// 总评论数量减少1
						let delLove4Res = await vk.baseDao.updateById({
							id: tw_id,
							dbName: mainDBname,
							dataJson: {
								commentNumber: _.inc(-1)
							},
						});
						console.log(delLove4Res)
					}
				} catch (err) {
					console.error(`delLove2Res error`, err)
				}
			} else if (type === 'tw') {
				try {
					// 用户总图文数量增加1
					let delLove5Res = await vk.baseDao.updateById({
						id: twUserFilter.twUseID,
						dbName: mainDBname + "_user",
						dataJson: {
							tw_Number: _.inc(-1)
						},
					});
					console.log(delLove5Res)
				} catch (err) {
					console.error(`delLove5Res error`, err)
				}
			}
			let delLoveRes = await vk.baseDao.updateById({
				dbName: dbName,
				id: del_id,
				dataJson: {
					status: 1
				},
			});
			console.log(delLoveRes)
			if (delLoveRes && Number(delLoveRes) > 0) { //状态为1则图文删除
				return {
					code: 0,
					msg: "删除成功",
				}
			} else {
				return {
					code: -1,
					msg: "删除失败"
				}
			}
		} catch (err) {
			return {
				code: -1,
				msg: "删除失败",
				err: {
					message: err.message,
					stack: err.stack,
				}
			}
		}
		// 业务逻辑结束-----------------------------------------------------------
	}
}
