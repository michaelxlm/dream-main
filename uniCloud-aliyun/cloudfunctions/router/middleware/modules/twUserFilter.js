/**
 * tw_user表过滤器 - 前置
 */

module.exports = [{
	id: "twUserFilter",
	regExp: "^client/general/kh/(.*)", // 正则匹配规则，这个是以^xxx1/kh/开头的云函数会被拦截
	description: "tw_user表信息获取",
	index: 211, // 由于kh（检测token）过滤器的执行顺序是200，如果需要在检测登录的过滤后执行，则需要填写 > 200 的值
	mode: "onActionExecuting", // 可选 onActionExecuting onActionExecuted
	main: async function(event) {
		// 这里是拦截规则，可以查数据库，最终code:0 代表通过，其他均为未通过，msg是被拦截的原因
		let {
			data = {}, util, filterResponse
		} = event;
		let { uid } = filterResponse;
		let {
			vk
		} = util;
		let runTime1 = new Date().getTime();
		let mainUse = await vk.baseDao.findByWhereJson({
			dbName: "tw_user", // 表名
			whereJson: { // 条件
				uid: uid,
			}
		});
		let twUseID = {}
		if (vk.pubfn.isNull(mainUse)) {
			let update2Res = await vk.baseDao.add({
				dbName: "tw_user",
				dataJson: {
					uid: uid
				}
			});
			twUseID = update2Res
		} else {
			twUseID = mainUse._id
		}
		let runTime2 = new Date().getTime();
		let runTime =  (runTime2 - runTime1) / 1000 + "秒";
		console.log(new Date(runTime2),"运行结束,耗时:"+runTime);
		return {
			code: 0,
			twUseID: twUseID
		}
	}
}]
