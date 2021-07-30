module.exports = {
	/**
	 * 查询多条记录 分页
	 * @url admin/db_api/sys/getList 前端调用的url参数地址
	 * data 请求参数 说明
	 * @params {Number}         pageIndex 当前页码
	 * @params {Number}         pageSize  每页显示数量
	 * @params {Array<Object>}  sortRule  排序规则
	 * @params {object}         formData  查询条件数据源
	 * @params {Array<Object>}  columns   查询条件规则
	 * res 返回参数说明
	 * @params {Number}         code      错误码，0表示成功
	 * @params {String}         msg       详细信息
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
		let {
			uid
		} = data;
		console.log(data)
		let dbName = data.formData.dbName
		let dbNameType = dbName + "_type"
		delete data.formData.dbName
		let res = {
			code: 0,
			msg: ''
		};
		console.log(data)
		// 业务逻辑开始-----------------------------------------------------------
		// 可写与数据库的交互逻辑等等
		res = await vk.baseDao.getTableData({
			dbName,
			data,
			foreignDB: [{
				dbName: "uni-id-users",
				localKey: "uid",
				foreignKey: "_id",
				as: "user",
				limit: 1
			}, {
				dbName: "uni-id-users",
				localKey: "_update_uid",
				foreignKey: "_id",
				as: "update_user",
				limit: 1
			}, {
				dbName: dbNameType,
				localKey: "type",
				foreignKey: "_id",
				as: "typeInfo",
				limit: 1, // 当limit = 1时，以对象形式返回，否则以数组形式返回
			}],
		});
		return res;
	}
}
