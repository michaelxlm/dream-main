import config from '@/app.config.js'
import Vue from 'vue'
/* 剪切板 */
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);
/**
 * 自定义公共函数
 */
var myfn = {};

/**
 * 获取系统时间
 */
myfn.getSystemTime = function(data) {
	return new Date()
}
/**
 * 时间补位0
 */
myfn.fillZero = function(time, digits = 2) {
	return Number(time) < Number(new Array(digits).join('9')) ? new Array(digits).join('0') + time : time + ''
}
/**
 * 时间处理-换算上午/下午
 */
myfn.calculateAMPM = function(hours) {
	if (Number(hours) >= 0 && Number(hours) <= 10) {
		text = `早上好`;
	} else if (Number(hours) > 10 && Number(hours) <= 14) {
		text = `中午好`;
	} else if (Number(hours) > 14 && Number(hours) <= 18) {
		text = `下午好`;
	} else if (Number(hours) > 18 && Number(hours) <= 24) {
		text = `晚上好`;
	}
	return text;
}
/**
 * 时间处理-将星期转换为中文
 */
myfn.getWeekText = function(week) {
	return ['日','一','二','三','四','五','六'][week];
}
/**
 * 时间处理-时区换算
 */
myfn.getOffsetUTCText = function(OffsetUTC) {
	return Math.abs(OffsetUTC/60)>0?'+'+Math.abs(OffsetUTC/60):'-'+Math.abs(OffsetUTC/60);
}
/**
 * 获取系统时间详情
 */
myfn.getSystemDetailTime = function(data) {
	let time = new Date()
	return {
		year: time.getFullYear(), //根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）。
		month: myfn.fillZero(time.getMonth() + 1), //根据本地时间返回指定日期对象的月份（0-11）。
		day: myfn.fillZero(time.getDate()), //根据本地时间返回指定日期对象的月份中的第几天（1-31）。
		week: time.getDay(), //根据本地时间返回指定日期对象的星期中的第几天（0-6）。
		weekText:myfn.getWeekText(time.getDay()),
		hours: myfn.fillZero(time.getHours()), //根据本地时间返回指定日期对象的小时（0-23）。
		minutes: myfn.fillZero(time.getMinutes()), //根据本地时间返回指定日期对象的分钟（0-59）。
		seconds: myfn.fillZero(time.getSeconds()), //根据本地时间返回指定日期对象的秒数（0-59）。
		millisecond: myfn.fillZero(time.getMilliseconds(), 3), //根据本地时间返回指定日期对象的毫秒（0-999）。

		time: time.getTime(), //返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值。
		OffsetUTC: myfn.getOffsetUTCText(time.getTimezoneOffset()), //返回当前时区的时区偏移。
		OffsetYear: time.getYear(), //根据特定日期返回年份 (通常 2-3 位数). 使用 getFullYear() .

		yearUTC: time.getUTCFullYear(), //根据世界时返回特定日期对象所在的年份（4位数）.
		monthUTC: myfn.fillZero(time.getUTCMonth()), //根据世界时返回特定日期对象的月份（0-11）.
		dayUTC: myfn.fillZero(time.getUTCDate()), //根据世界时返回特定日期对象一个月的第几天（1-31）.
		weekUTC: myfn.fillZero(time.getUTCDay()), //根据世界时返回特定日期对象一个星期的第几天（0-6）.
		hoursUTC: myfn.fillZero(time.getUTCHours()), //根据世界时返回特定日期对象当前的小时（0-23）.
		minutesUTC: myfn.fillZero(time.getUTCMinutes()), //根据世界时返回特定日期对象的分钟数（0-59）.
		secondsUTC: myfn.fillZero(time.getUTCSeconds()), //根据世界时返回特定日期对象的秒数（0-59）.
		millisecondUTC: myfn.fillZero(time.getUTCMilliseconds()), //根据世界时返回特定日期对象的毫秒数（0-999）.
	}
}
/**
 * 系统剪贴板内容
 */
myfn.setClipboardData = function(data) {
	console.log(Vue.prototype)
	return new Promise((success, fail) => {
		// #ifndef H5
		uni.setClipboardData({
			data: data,
			success: () => {
				uni.showToast({
					title: '复制成功'
				})
			}
		})
		// #endif

		// #ifdef H5
		Vue.prototype.$copyText(data).then(
			res => {
				uni.showToast({
					title: '复制成功'
				})
			}
		)
		// #endif
	});
}

/**
 * 获取系统剪贴板内容
 * @returns {Promise} 剪贴板内容
 */
myfn.getClipboardData = function() {
	return new Promise((success, fail) => {
		// #ifndef H5
		uni.getClipboardData({
			success,
			fail
		});
		// #endif

		// #ifdef H5
		navigator.clipboard.readText().then(success).catch(fail);
		// #endif
	});
}

/**
 * 传入对象返回url参数
 * @param {Object} data {a:1}
 * @returns {string}
 */
myfn.getParam = function(data) {
	let url = '';
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : '';
		url += `&${k}=${encodeURIComponent(value)}`
	}
	return url ? url.substring(1) : ''
}

/**
 * 将url和参数拼接成完整地址
 * @param {string} url url地址
 * @param {Json} data json对象
 * @returns {string}
 */
myfn.getUrl = function(url, data) {
	//看原始url地址中开头是否带?，然后拼接处理好的参数
	return url += (url.indexOf('?') < 0 ? '?' : '') + myfn.getParam(data)
}
/**
 * 获取当前页面路由
 */
myfn.getPageUrl = function() {
	let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
	let curRoute = routes[routes.length - 1].route //获取当前页面路由
	let curParam = routes[routes.length - 1].options; //获取路由参数
	// 拼接参数
	// #ifdef  H5
	return config.h5Url + '/' + myfn.getUrl(curRoute, curParam)
	// #endif
	// #ifndef H5
	return myfn.getUrl(curRoute, curParam)
	// #endif
}
/**
 * @param {string} url 需要下载的图片
 * @returns {Promise} 返回下载状态
 */
myfn.downLoadImg = function(url) {
	return new Promise(() => {
		// #ifndef H5
		uni.authorize({
			scope: 'scope.writePhotosAlbum',
			success() {
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: function() {
									console.log('success')
									uni.showToast({
										title: "保存成功",
										icon: "none"
									});
								},
								fail: function(error) {
									console.log(error)
									uni.showToast({
										title: "保存失败，请稍后重试",
										icon: "none"
									});
								}
							});
						} else {
							uni.showToast({
								title: "保存失败，请稍后重试",
								icon: "none",
							});
						}
					},
					fail(err) {
						uni.showToast({
							title: "下载失败，请点击并长按图片即可下载图片",
							icon: "none"
						});
					}
				});
			},
			fail(err) {
				uni.showToast({
					title: "授权失败，请前往‘我的-设置’中开启授权",
					icon: "none"
				});
			}
		})
		// #endif
		// #ifdef H5
		let http = url.split('?')[0]
		let file = http.split('/')
		let imgName = file[file.length - 1]
		var oA = document.createElement("a");
		oA.download = imgName;
		oA.href = url;
		document.body.appendChild(oA);
		oA.click();
		oA.remove();
		// #endif
	});
}
/**
 * 跳转小程序
 * @param {string} url 需要下载的图片
 * @returns {Promise} 返回下载状态
 */
myfn.navigateToMini = function(item, path, extraData) {
	return new Promise(() => {
		// #ifndef H5 || MP-BAIDU || APP-PLUS-NVUE || APP-NVUE
		uni.navigateToMiniProgram({
			appId: item.appID,
			path: path ? path : '',
			extraData: extraData ? extraData : {}
		})
		// #endif
		/* 百度小程序 */
		// #ifdef MP-BAIDU
		uni.navigateToMiniProgram({
			appKey: item.appID,
			path: path ? path : '',
			extraData: extraData ? extraData : {}
		})
		// #endif
		/* h5 */
		// #ifdef H5
		window.location.href = item.url
		// #endif
		/* app */
		// #ifdef  APP-PLUS-NVUE || APP-NVUE
		// #endif
	});
}
/**
 * 上传图片到阿里云
 * @param {Object} data {a:1}
 * @returns {string}
 */
myfn.upImgALi = function(data) {
	// 上传至 阿里云oss
	vk.callFunctionUtil.uploadFile({
		title: "上传中...",
		filePath: res.tempFilePaths[0],
		suffix: "png", // 不传suffix会自动获取，但H5环境下获取不到后缀，但可以通过file.name 获取
		type: "aliyun-oss",
		success(res) {
			// 上传成功

		}
	});
}
/**
 * 上传图片列表到云存储
 * @param {Object} data {a:1}
 * @returns {string}
 */
myfn.upImgList = function(data) {
	if (vk.pubfn.isNotNull(data)) {
		data.map(function(res) {
			vk.callFunctionUtil.uploadFile({
				title: "上传中...",
				filePath: res.tempFilePaths[0],
				suffix: "png", // 不传suffix会自动获取，但H5环境下获取不到后缀，但可以通过file.name 获取
				type: "unicloud",
				success(res) {
					// 上传成功

				}
			});
		})
	}
}
/**
 */
myfn.cropImg = function(file) {
	return new Promise((resolve, reject) => {
		let ext
		let filePathProcessed = file.path // 处理结果
		// #ifdef H5
		ext = file.name.split('.').pop()
		resolve({
			path: filePathProcessed,
			ext,
			fileType: file.fileType
		})
		// #endif
		// #ifndef H5
		uni.getImageInfo({
			src: file.path,
			success(info) {
				ext = info.type.toLowerCase()
				resolve({
					path: filePathProcessed,
					ext,
					fileType: file.fileType
				})
			},
			fail(err) {
				reject(new Error(err.errMsg || '未能获取图片类型'))
			}
		})
		// #endif
	})
}
export default myfn;
