module.exports = {
	/**
	 * 查询多条记录 分页
	 * @url client/comment/kh/getReplyList 前端调用的url参数地址
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
			data = {}, util, originalParam, uid, userInfo
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
			sortRule,
			where
		} = data;
		let dbName = "tw_comment";
		let fieldJson = {
			_id: true,
			tw_id: true, //图文ID
			uid: true, //用户id

			comment_parent_status: true, //是否为子评论
			parent_uid: true, //父级用户ID
			parent_comment_id: true, //父级评论ID

			comment_reply_status: true, //是否为回复评论
			reply_uid: true, //回复的用户ID
			reply_comment_id: true, //回复的评论ID

			originalParam: true, // 0-正常
			status: true, // 0-正常
			isComments: true, //是否允许评论
			heatNumber: true, //热度值
			historyNumber: true, //浏览量
			loveNumber: true, //喜欢数
			collectNumber: true, //收藏数
			recommendNumber: true, //推荐数
			commentNumber: true, //评论回复数
			commentText: true, //描述
			commentImageList: true,
			commentTags: true, //标签列表
			_add_time: true, //创建时间
		};
		let sortArr = [];
		if (sortRule) sortArr = sortRule;
		let whereJson = {};
		if (where) whereJson = where;
		// 这里可以写必须满足的查询条件，如whereJson["user_id"] = uid;代表只查自己的记录
		// whereJson["user_id"] = uid;
		// 查询条件结束-----------------------------------------------------------
		res = await vk.baseDao.selects({
			dbName: dbName,
			getCount: true,
			fieldJson: fieldJson,
			whereJson: whereJson,
			sortArr: sortArr,
			treeProps: {
				id: "reply_comment_id", // 唯一标识字段，默认为 _id
				parent_id: "_id", // 父级标识字段，默认为 parent_id
				children: "reply", // 自定义返回的下级字段名，默认为 children
				level: 2, // 查询返回的树的最大层级。超过设定层级的节点不会返回。默认10级，最大20，最小1
				limit: 1, // 每一级最大返回的数据。
				whereJson: {
					status: 0
				},
			},
			foreignDB: [{
					dbName: "uni-id-users",
					localKey: "uid",
					foreignKey: "_id",
					as: "author",
					limit: 1
				},
				{
					dbName: "tw_comment_like",
					localKey: "_id",
					foreignKey: "comment_id",
					whereJson: {
						uid: uid,
						status: 0,
					},
					as: "isLikeList",
					sortArr: [{
						"name": "_add_time",
						"type": "desc"
					}],
					limit: 1
				}
			]
		});
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}

}
