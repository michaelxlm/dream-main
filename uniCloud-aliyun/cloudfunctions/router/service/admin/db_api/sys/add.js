module.exports = {
  /**
   * 添加单条数据
   * @url admin/db_api/sys/add 前端调用的url参数地址
   * data 请求参数 说明
   * res 返回参数说明
   * @params {Number} code 错误码，0表示成功
   * @params {String} msg 详细信息
   */
  main: async (event) => {
		let { data = {}, userInfo, util, filterResponse, originalParam } = event;
		let { customUtil, uniID, config, pubFun, vk , db, _ } = util;
		let res = { code : 0, msg : 'ok' };
    // 业务逻辑开始-----------------------------------------------------------
		let dbName = data.dbName
		delete data.dbName
		data.uid = userInfo._id
		res.id = await vk.baseDao.add({
			dbName,
			dataJson:data
		});
    // 业务逻辑结束-----------------------------------------------------------
    return res;
  }
}
