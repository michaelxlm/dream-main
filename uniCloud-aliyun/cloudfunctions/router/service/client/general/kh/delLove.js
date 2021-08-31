'use strict';
module.exports = {
	/**
	 * 取消点赞
	 * @url client/general/kh/delLove 前端调用的url参数地址
	 * data 请求参数
	 * {
		 like_id:点赞的ID
		 parent_id:图文id
	 }
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
		} = originalParam;
		let {
			mainDBname,
			dbName,
			like_id,
			from, //点赞类型
			comment_id, //评论iD
			tw_id, //当前的图文ID
		} = data;
		try {
			let twUserFilter = vk.pubfn.getListItem(filterStack, "filterId", "twUserFilter"); //获取图文用户ID过滤器
			let parent_id = '';
			parent_id = from === 'comment' ? comment_id : tw_id
			let whereJson = {
				_id: like_id,
			}
			if (from === 'comment') {
				whereJson.comment_id = parent_id
			} else {
				whereJson.tw_id = parent_id
			}
			// 业务逻辑开始-----------------------------------------------------------
			// 添加到点赞表
			try {
				// 用户总点赞数量减少1
				let addLove1Res = await vk.baseDao.updateById({
					id: twUserFilter.twUseID,
					dbName: mainDBname + "_user",
					dataJson: {
						loveNumber: _.inc(-1)
					},
				});
				console.log(addLove1Res)
			} catch (err) {
				console.log(`addLove1Res fail`);
			}
			try {
				// 总点赞数量减少1
				let delLove4Res = await vk.baseDao.updateById({
					id: parent_id,
					dbName: dbName,
					dataJson: {
						loveNumber: _.inc(-1)
					},
				});
				console.log(delLove4Res)
			} catch (err) {
				console.log(`delLove4Res fail`);
			}

			let delLoveRes = await vk.baseDao.update({
				dbName: dbName + "_like",
				whereJson: whereJson,
				dataJson: {
					status: 1
				},
			});
			console.log(delLoveRes)
			if (!delLoveRes || Number(delLoveRes) < 1) { //状态为1则图文删除
				return {
					code: -1,
					msg: "取消点赞失败",
					id: delLoveRes
				}
			} else {
				return {
					code: 0,
					msg: "取消点赞成功",
					id: like_id
				}
			}
		} catch (err) {
			return {
				code: -1,
				msg: "取消点赞失败",
				err: {
					message: err.message,
					stack: err.stack,
				}
			}
		}
		// 业务逻辑结束-----------------------------------------------------------
	}
}
