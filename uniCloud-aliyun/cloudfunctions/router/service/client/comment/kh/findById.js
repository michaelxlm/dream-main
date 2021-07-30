module.exports = {
	/**
	 * 根据id获取记录
	 * @url client/comment/kh/findById 前端调用的url参数地址
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
		// 业务逻辑开始-----------------------------------------------------------
		let startTime = new Date().getTime()
		res = await vk.baseDao.selects({
			dbName: dbName,
			getCount: false,
			fieldJson: fieldJson,
			whereJson: whereJson,
			foreignDB: [{
				dbName: "uni-id-users",
				localKey: "uid",
				foreignKey: "_id",
				as: "author",
				whereJson: {},
				limit: 1
			}, {
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
			}]
		});
		res.userInfo = userInfo
		let endTime = new Date().getTime();
		res.runTime = (endTime - startTime);
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}

}
