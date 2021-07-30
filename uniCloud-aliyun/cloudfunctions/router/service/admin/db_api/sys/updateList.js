module.exports = {
	/**
	 * 修改数据
	 * @url admin/db_api/sys/updateList 前端调用的url参数地址
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
		// 业务逻辑开始----------------------------------------------------------- 
		let {
			idList,
			dataJson,
			dbName
		} = data;
		dataJson._update_uid = userInfo._id
		dataJson._update_time = new Date().getTime()
		dataJson._update_time_str = vk.pubfn.timeFormat(new Date(), "yyyy-MM-dd hh:mm:ss");
		res.num = await vk.baseDao.update({
			dbName: dbName,
			whereJson: {
				_id: _.in(idList),
			},
			dataJson: dataJson
		});
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}

}
