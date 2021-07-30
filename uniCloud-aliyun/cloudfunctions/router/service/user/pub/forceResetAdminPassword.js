module.exports = {
	/**
	 * 强制重置admin密码
	 * @url user/pub/forceResetAdminPassword 前端调用的url参数地址
	 */
	main: async (event) => {
		let {
			data = {}, util, filterResponse, originalParam
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
		let res = {
			code: 0,
			msg: ""
		};
		// // 业务逻辑开始-----------------------------------------------------------
		// let params = {
		// 	username: "admin",
		// 	password: "xlm950821*"
		// };
		// let userInfo = await vk.baseDao.findByWhereJson({
		// 	dbName: "uni-id-users",
		// 	whereJson: {
		// 		username: params.username,
		// 	}
		// });
		// if (!userInfo) {
		// 	return {
		// 		code: -1,
		// 		msg: `${params.username}账号未注册`
		// 	};
		// }
		// // 重置密码
		// res = await uniID.resetPwd({
		// 	uid: userInfo._id,
		// 	password: params.password
		// });
		// if (res.code === 0) {
		// 	res.msg = `密码已重置为：${params.password}`;
		// }
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}
