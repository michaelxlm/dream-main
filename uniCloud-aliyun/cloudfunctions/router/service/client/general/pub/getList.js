module.exports = {
	/**
	 * 查询多条记录 分页
	 * @url client/general/pub/getList 前端调用的url参数地址
	 * data 请求参数 说明
	 * @params {String} tableName 	表名
	 * @params {String} addTime 		搜索开始时间
	 * @params {String} endTime 		搜索截止时间
	 * @params {String} searchvalue 搜索指定内容
	 * @params {Number} pageIndex 	当前页码
	 * @params {Number} pageSize 		每页显示数量
	 * res 返回参数说明
	 * @params {Number} code 错误码，0表示成功
	 * @params {String} msg 详细信息
	 */
	main: async (event) => {
		let {
			data = {}, util, originalParam
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
			msg: ''
		};
		// 业务逻辑开始----------------------------------------------------------- 
		// 可写与数据库的交互逻辑等等
		let {
			pageIndex,
			pageSize,
			getCount,
			getOne,
			getMain,
			searchvalue,
			searchname,
			sortArr,
			whereJson,
			dbName,
			foreignDB,
			treeProps,
			fieldJson,
			findSelf,
			uid,
		} = data;
		let pageIndexData = undefined;
		if (pageIndex) pageIndexData = pageIndex;
		let pageSizeData = undefined;
		if (pageSize) pageSizeData = pageSize;
		let fieldJsonData = [];
		if (fieldJson) fieldJsonData = fieldJson;
		let sortArrData = [];
		if (sortArr) sortArrData = sortArr;
		let treePropsData = [];
		if (treeProps) treePropsData = treeProps;
		let foreignDBData = [];
		if (foreignDB) foreignDBData = foreignDB;
		let whereJsonData = {};
		let getCountData = false;
		getCountData = getCount ? true : false
		let getOneData = false;
		getOneData = getOne ? true : false
		let getMainData = false;
		getMainData = getMain ? true : false
		if (searchvalue) {
			// 查询searchvalue开头的数据
			try {
				// 如果查询需要用到正则，建议将正则用try catch 包起来。
				whereJsonData[searchname] = new RegExp(searchvalue);
			} catch (err) {
				return {
					code: -1,
					msg: '请输入合法的查询内容'
				};
			}
		} else {
			if (whereJson) whereJsonData = whereJson;
		}
		if (findSelf) {
			try {
				whereJsonData["uid"] = uid
			} catch (err) {
				return {
					code: -1,
					msg: '请输入合法的查询内容'
				};
			}
		}
		res = await vk.baseDao.selects({
			getOne: getOneData, // 只返回第一条数据
			getMain: getMainData, // 直接返回数据库查询到的数据（不带code,rows等参数）
			dbName: dbName,
			getCount: getCountData,
			pageIndex: pageIndexData,
			pageSize: pageSizeData,
			fieldJson: fieldJsonData,
			whereJson: whereJsonData,
			sortArr: sortArrData,
			treeProps: treePropsData,
			foreignDB: foreignDBData,
		});
		return res;
	}

}
