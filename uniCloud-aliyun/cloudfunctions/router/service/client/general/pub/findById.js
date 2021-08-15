module.exports = {
	/**
	 * 根据id获取记录
	 * @url client/general/pub/findById 前端调用的url参数地址
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
		let res = {
			code: 0,
			msg: 'ok'
		};
		let {
			dbName,
			where,
			foreignDB
		} = data;

		let sortArr = [];
		let whereJson = {};
		if (where) whereJson = where;
		// 业务逻辑开始-----------------------------------------------------------
		let startTime = new Date().getTime()
		res = await vk.baseDao.selects({
			dbName: dbName,
			getCount: false,
			fieldJson: fieldJson||{},
			whereJson: whereJson,
			sortArr: sortArr,
			treeProps:treeProps,
			foreignDB: foreignDB,
		});
		let endTime = new Date().getTime();
		res.runTime = (endTime - startTime);
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}

}
