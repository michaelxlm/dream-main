module.exports = {
	/**
	 * 修改数据
	 * @url admin/db_api/sys/update 前端调用的url参数地址
	 * data 请求参数 说明
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	main: async (event) => {
		let {
			data = {}, userInfo, util, filterResponse, originalParam
		} = event;
		let {
			customUtil,
			uniID,
			config,
			pubFun,
			vk,
			db,
			_
		} = util;
		let res = {
			code: 0,
			msg: 'ok'
		};
		let _id = data._id
		// 业务逻辑开始-----------------------------------------------------------
		if (vk.pubfn.isNullOne(_id)) {
			return {
				code: -1,
				msg: '参数错误'
			};
		}
		data._update_uid = userInfo._id
		data._update_time = new Date().getTime()
		data._update_time_str = vk.pubfn.timeFormat(new Date(), "yyyy-MM-dd hh:mm:ss");
		let dbName = data.dbName
		delete data.dbName
		delete data._id
		delete data.uid
		delete data._add_time
		delete data._add_time_str
		delete data.pl_table_level
		delete data.user
		delete data.update_user
		delete data.typeInfo
		await vk.baseDao.updateById({
			dbName,
			id: _id,
			dataJson: data
		});
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}

}
