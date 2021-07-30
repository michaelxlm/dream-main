module.exports = {
	/**
	 * 根据id获取记录
	 * @url client/wordImg/pub/findById 前端调用的url参数地址
	 * data 请求参数 说明
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	main: async (event) => {
		let {
			data = {}, userInfo, util, originalParam
		} = event;
		let {
			uniID,
			pubFun,
			vk,
			db,
			_
		} = util;
		let {
			uid
		} = data;
		let res = {
			code: 0,
			msg: 'ok'
		};
		let {
			where
		} = data;
		let dbName = "time";
		
		let sortArr = [];
		let whereJson = {};
		if (where) whereJson = where;
		// 业务逻辑开始-----------------------------------------------------------
		let startTime = new Date().getTime()
		res = await vk.baseDao.selects({
			dbName: dbName,
			getCount: false,
			whereJson: whereJson,
			foreignDB: [{
				dbName: "uni-id-users",
				localKey: "uid",
				foreignKey: "_id",
				as: "author",
				whereJson: {
					status: 0,
				},
				limit: 1
			},
			{
				dbName: "time_like",
				localKey: "_id",
				foreignKey: "time_id",
				whereJson: {
					uid: uid,
					status: 0,
				},
				as: "isLikeMine",
				sortArr: [{
					"name": "_add_time",
					"type": "desc"
				}],
				limit: 1
			}]
		});
		res.userInfo=userInfo
		let endTime = new Date().getTime();
		res.runTime = (endTime - startTime);
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}

}
