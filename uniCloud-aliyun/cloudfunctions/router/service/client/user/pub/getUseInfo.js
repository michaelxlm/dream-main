module.exports = {
	/**
	 * 根据用户id获取用户信息
	 * @url client/user/pub/getUseInfo 前端调用的url参数地址
	 */
	main: async (event) => {
		let {uniID} = event.util;
		let {
			data = {}, userInfo, util, originalParam
		} = event;
		let {
			vk,
			db,
			_
		} = util;
		let res = {
			code: 0,
			msg: '',
			data: {}
		};
		try {
			res.data = await uniID.getUserInfo({
				uid: data._id
			});
		} catch (err) {
			console.error(err);
			res.data = {}
		}
		return res;
	}
}
