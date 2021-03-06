'use strict';
/**
 * 表单验证
 */
class Util {
	constructor() {

	}
	/**
	 * 添加
	 */
	async add(event) {
		let { data = {}, userInfo, util } = event;
		let { vk } = util;
		let res = { code: 0, msg: '' };

		// 验证规则开始 -----------------------------------------------------------
		let rules = {
			permission_id: [
				{ required: true, message: '权限标识不能为空', trigger: 'blur' },
			],
			permission_name: [
				{ required: true, message: '权限名称不能为空', trigger: 'blur' },
			],
			sort: [
				{ type: 'number', message: '排序值必须为数字' }
			]
		};
		// 验证规则结束 -----------------------------------------------------------

		// 开始进行验证
		res = vk.pubfn.formValidate({
			data: data,
			rules: rules
		});
		// 返回验证结果
		return res;
	}
	/**
	 * 修改
	 */
	async update(event) {
		return this.add(event);
	}
}
module.exports = new Util
