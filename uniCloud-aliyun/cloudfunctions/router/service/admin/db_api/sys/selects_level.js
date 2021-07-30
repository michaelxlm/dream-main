module.exports = {
	/**
	 * 同表查询查询返回树状结构
	 * @url admin/db_api/sys/selects_level 前端调用的url参数地址
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
			dbName,
			searchvalue,
			sortRule,
			where
		} = data;
		let res = {
			code: 0,
			msg: 'ok'
		};
		let sortArr = [];
		if (sortRule) sortArr = sortRule;
		let whereJson = {};
		if (where) {
			whereJson = where;
		}
		if (searchvalue) {
			// 查询searchvalue开头的数据
			try {
				// 如果查询需要用到正则，建议将正则用try catch 包起来。
				whereJson["chinese"] = new RegExp(searchvalue);
			} catch (err) {
				return {
					code: -1,
					msg: '请输入合法的查询内容'
				};
			}
		}
		// 业务逻辑开始-----------------------------------------------------------
		// 演示3表连接
		res = await vk.baseDao.selects({
			dbName: dbName,
			getCount: true,
			pageIndex: 1,
			pageSize: 10,
			// 主表where条件
			whereJson: whereJson,
			sortArr: sortArr,
			treeProps: {
				id: "_id", // 唯一标识字段，默认为 _id
				parent_id: "parent_id", // 父级标识字段，默认为 parent_id
				children: "children", // 自定义返回的下级字段名，默认为 children
				level: 10, // 查询返回的树的最大层级。超过设定层级的节点不会返回。默认10级，最大15，最小1
				limit: 500, // 每一级最大返回的数据。
				whereJson: {
					enable: true
				}
			},
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
			}],
		});
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}
