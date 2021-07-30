import Vue from 'vue'
import App from './App'
import store from './store'
import config from '@/app.config.js'
// 引入 uView UI
import uView from 'uview-ui';
Vue.use(uView);
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare)
// 引入 vk框架前端
import vk from 'uni_modules/vk-unicloud/vk_modules/vk-unicloud-page';
Vue.use(vk);

// 初始化 vk框架
Vue.prototype.vk.init({
	Vue, // Vue实例
	config, // 配置
});

// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';

// VueI18n
import VueI18n from '@/common/vue-i18n.min.js';

// VueI18n
Vue.use(VueI18n);

const i18n = new VueI18n({
	// 默认语言
	locale: 'zh',
	// 引入语言文件
	messages: {
		'zh': Chinese,
		'en': English,
	}
});

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n;

// http接口API抽离，免于写url或者一些固定的参数
App.mpType = 'app'
Vue.config.productionTip = false
const app = new Vue({
	i18n,
	store,
	...App
});
app.$mount();
