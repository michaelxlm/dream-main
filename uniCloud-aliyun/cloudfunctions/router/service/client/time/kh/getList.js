module.exports = {
	/**
	 * 查询多条记录 分页
	 * @url client/wordImg/pub/getList 前端调用的url参数地址
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
		let {
			uid
		} = data;
		let res = {
			code: 0,
			msg: ''
		};
		// 业务逻辑开始----------------------------------------------------------- 
		// 可写与数据库的交互逻辑等等
		let {
			pageIndex,
			pageSize,
			searchvalue,
			sortRule,
			where,
			mineShow
		} = data;
		let dbName = "time";
		let fieldJson = {
			intro: true, //描述
			avatar: true, //头像
			nickname: true, //昵称
			gender: true, //性别
			mobile: true, //手机号
			birthday: true, //生日
			birthdayObj: true, //生日信息
			birthdayTime: true, //生日时间
			birthdayTimeObj: true, //生日时间信息
			hometown: true, //家乡
			hometownCode: true, //家乡
			hometownObj: true,

			uid: true, //用户id
			originalParam: true,
			status: true, // 0-正常
			isComments: true, //是否允许评论
			heatNumber: true, //热度值
			historyNumber: true, //浏览量
			loveNumber: true, //喜欢数
			collectNumber: true, //收藏数
			recommendNumber: true, //推荐数
			imageList: true,
			tags: true, //标签列表
			_add_time: true, //创建时间
			trampleNumber: true, //踩得数量
			commentNumber: true, //是否允许评论
		};
		let sortArr = [];
		if (sortRule) sortArr = sortRule;
		let whereJson = {};
		if (searchvalue) {
			// 查询searchvalue开头的数据
			try {
				// 如果查询需要用到正则，建议将正则用try catch 包起来。
				whereJson["text"] = new RegExp(searchvalue);
			} catch (err) {
				return {
					code: -1,
					msg: '请输入合法的查询内容'
				};
			}
		} else {
			if (where) whereJson = where;
		}
		whereJson["uid"] = uid
		let userShow = mineShow ? mineShow : false
		if (userShow) {
			res = await vk.baseDao.selects({
				dbName: dbName,
				getCount: true,
				pageIndex: pageIndex,
				pageSize: pageSize,
				fieldJson: fieldJson,
				whereJson: whereJson,
				sortArr: sortArr,
				foreignDB: [{
					dbName: "uni-id-users",
					localKey: "uid",
					foreignKey: "_id",
					as: "author",
					whereJson: {},
					limit: 1
				}]
			});
		} else {
			res = await vk.baseDao.selects({
				dbName: dbName,
				getCount: true,
				pageIndex: pageIndex,
				pageSize: pageSize,
				fieldJson: fieldJson,
				whereJson: whereJson,
				sortArr: sortArr
			});
		}
		// 这里可以写必须满足的查询条件，如whereJson["user_id"] = uid;代表只查自己的记录
		// whereJson["user_id"] = uid;
		// 查询条件结束-----------------------------------------------------------

		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}

}
