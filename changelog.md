## 2.3.0（2021-09-06）
* 1、【新增】`vk.baseDao.updateAndReturn` API [点击查看](https://vkdoc.fsq.pub/client/uniCloud/db/api.html#%E6%9B%B4%E6%96%B0%E5%B9%B6%E8%BF%94%E5%9B%9E%E6%9B%B4%E6%96%B0%E5%90%8E%E7%9A%84%E6%95%B0%E6%8D%AE-%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C)
* 2、【新增】`vk.pubfn.getDayOffsetStartAndEnd` 获得相对当前时间的偏移 count 天的起止日期(日的开始和结束) [点击查看](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-getdayoffsetstartandend-%E8%8E%B7%E5%BE%97%E7%9B%B8%E5%AF%B9%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4%E7%9A%84%E5%81%8F%E7%A7%BB-count-%E5%A4%A9%E7%9A%84%E8%B5%B7%E6%AD%A2%E6%97%A5%E6%9C%9F)
* 3、【新增】`vk.pubfn.getMonthOffsetStartAndEnd` 获得相对当前时间的偏移 count 月的起止日期(月的开始和结束) [点击查看](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-getmonthoffsetstartandend-%E8%8E%B7%E5%BE%97%E7%9B%B8%E5%AF%B9%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4%E7%9A%84%E5%81%8F%E7%A7%BB-count-%E6%9C%88%E7%9A%84%E8%B5%B7%E6%AD%A2%E6%97%A5%E6%9C%9F)
* 4、【新增】`vk.pubfn.getYearOffsetStartAndEnd`获得相对当前时间的偏移 count 年的起止日期(年的开始和结束) [点击查看](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-getyearoffsetstartandend-%E8%8E%B7%E5%BE%97%E7%9B%B8%E5%AF%B9%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4%E7%9A%84%E5%81%8F%E7%A7%BB-count-%E5%B9%B4%E7%9A%84%E8%B5%B7%E6%AD%A2%E6%97%A5%E6%9C%9F)
* 5、【新增】`vk.pubfn.sleep` 进程等待（主要用于在云函数中需要故意等待几秒的情况）[点击查看](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-sleep-%E8%BF%9B%E7%A8%8B%E5%BC%BA%E5%88%B6%E7%AD%89%E5%BE%85-%E4%BC%91%E7%9C%A0)
* 6、【新增】`app.config.js` 新增参数 `globalErrorCode` 可以修改全局异常的提示信息 [点击查看](https://vkdoc.fsq.pub/client/pages/config.html)
* 7、【新增】`javascript代码块提示.json` 最近新增的api的代码提示 [点击查看](https://vkdoc.fsq.pub/client/codeTips.html)
* 8、【优化】`vk.baseDao.selects`新增参数`addFields` [点击查看](https://vkdoc.fsq.pub/client/uniCloud/db/question.html#%E5%88%86%E7%BB%84count)
* 9、【优化】`vk.pubfn.timeFormat` 等API，当参数time为字符串时间戳时的特殊处理 [点击查看](https://vkdoc.fsq.pub/client/jsapi.html#vk-pubfn-timeformat-%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F%E5%8C%96)
* 10、【修复】腾讯云的图片上传无法回显图片的问题。

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

##### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.2.4（2021-08-06）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 【优化】一些细节

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.2.3（2021-08-05）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【修复】因`uni-id`配置隔离导致的微信`vk.openapi.weixin` API 兼容性问题。
#### 2、【新增】`vk.pubfn.isArray` 判断变量是否是数组类型
#### 3、【新增】`vk.pubfn.isObject` 判断变量是否是对象类型

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.2.2（2021-08-04）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【升级】`uni-id` 至 `3.3.3`

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.2.1（2021-08-04）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【升级】`uni-id` 至 `3.3.2`
#### 2、【新增】云函数内表单验证文档 [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4313370&doc_id=975983)

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.2.0（2021-07-28）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 【新增】前端 `vk.callFunction` 支持请求其他服务空间的云函数
```js
const myCloud = uniCloud.init({
  provider: 'aliyun',
  spaceId: 'xxxx-yyy',
  clientSecret: 'xxxx'
});
vk.callFunction({
  url: 'template/db_api/pub/count',
  title:'请求中...',
  unicloud: myCloud,
  success(data) {
    console.log(data);
  }
});
```

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.1.7（2021-07-28）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 【新增】前端 `vk.callFunction` 支持请求其他服务空间的云函数
```js
const myCloud = uniCloud.init({
  provider: 'aliyun',
  spaceId: 'xxxx-yyy',
  clientSecret: 'xxxx'
});
vk.callFunction({
  url: 'template/db_api/pub/count',
  title:'请求中...',
  unicloud: myCloud,
  success(data) {
    console.log(data);
  }
});
```

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.1.6（2021-07-22）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【修复】常用的 vk.baseDao `javascript代码块提示`（有部分错误的问题：少,号的问题）（在编辑器输入dao.即可弹出代码提示）[点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4019184&doc_id=975983)
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cf0c5e69-620c-4f3c-84ab-f4619262939f/fe965ad9-e9ed-44fc-ad0b-5bc286988e09.png)
##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.1.5（2021-07-22）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【优化】新增常用的 vk.baseDao `javascript代码块提示` （在编辑器输入dao.即可弹出代码提示）[点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4019184&doc_id=975983)
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cf0c5e69-620c-4f3c-84ab-f4619262939f/fe965ad9-e9ed-44fc-ad0b-5bc286988e09.png)
#### 2、【优化】文档 [查看文档](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=2912167&doc_id=975983)
##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.1.4（2021-07-12）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 【修复】已知问题

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.1.3（2021-07-12）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【修复】首次使用框架，上传部署后访问云函数可能会出现 `createInstance is undefined` 的问题。

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.1.2（2021-07-12）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【修复】连表查询时，因`lastWhereJson`而导致`getCount`错误的问题。

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.1.1（2021-07-12）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【修复】连表查询时，因`lastWhereJson`而导致`getCount`错误的问题。


##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.1.0（2021-07-09）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要调整】删除了`config`公共模块，升级为`uni-config-center`模式 [点击查看升级教程](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4219337&doc_id=975983)
#### 1、【重要调整】删除了`config`公共模块，升级为`uni-config-center`模式 [点击查看升级教程](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4219337&doc_id=975983)
#### 1、【重要调整】删除了`config`公共模块，升级为`uni-config-center`模式 [点击查看升级教程](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4219337&doc_id=975983)


##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.0.8（2021-07-07）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 【修复】已知bug

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架
### 如果你觉得框架对你有用，可以在下方进行评论。



## 2.0.7（2021-06-28）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【修复】`user/kh/getMenu`云函数获取菜单错误的bug。
#### 2、【修复】db_init.json `opendb-global-data`表`expired_at`索引设置错误 "MgoIsUnique": true 改为 "MgoIsUnique": false（需要把索引删除后重新创建，选择非唯一索引）

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架
### 如果你觉得框架对你有用，可以在下方进行评论。



## 2.0.6（2021-06-28）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【优化】`vk.pubfn.timeFormat` 若参数不符合规则，则原值显示。
#### 2、【优化】`vk.pubfn.random` 新增第三个参数`arr` （产生的随机数不会和此数组的任意一项重复） [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3268613&doc_id=975983)

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论。



## 2.0.5（2021-06-16）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【修复】`vk.baseDao.add` 因hbx 3.1.18版本导致的本地运行时 `_add_time_str` 错误的问题。

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论。



## 2.0.4（2021-06-10）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【新增】`onActionIntercepted`（被中间件拦截时执行） 和 `onActionError`（云函数执行异常时执行） 类型中间件 [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3035637&doc_id=975983)
#### 2、【优化】过滤器 `timeFilter`、`dateDiff` 能正确识别10位数时间戳和13位时间戳。[点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3269404&doc_id=975983)
#### 3、【优化】`vk.baseDao.sample` 支持 `fieldJson`参数 [点击查看数据API](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3065608&doc_id=975983)
#### 4、【修复】`返回树状结构`时最后一级子节点没有继承主表`foreignDB`属性的bug。[查询返回树状结构文档](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3906510&doc_id=975983) 
#### 5、【优化】`vk.callFunctionUtil.uploadFile` 自动识别文件类型，无需传`fileType`参数

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论。

## 2.0.3（2021-05-31）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【新增】`vk.callFunctionUtil.uploadFile` 新增参数 `file`,`needSave` 若needSave=true，则文件URL会保存到数据库。（会显示在admin端的素材管理中）
#### 2、【优化】`vk.baseDao.selects` 和 `vk.baseDao.select` 新增两个属性`getOne` 、 `getMain` [点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4054561&doc_id=975983)
#### 3、【修复】`vk.callFunctionUtil.uploadFile` 上传视频时后缀名可能会错误的问题。
#### 4、【优化】`云函数URL化` 路由模式下，URL重写支持只允许部分云函数可被访问。（可以做到只暴露指定的API接口，增加URL化后的安全性）
#### `router/util/urlrewrite.js`文件配置内容如下 [点击URL重写规则](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3916806&doc_id=975983)
```js
/**
 * URL重写
 * 如让 https://xxx.bspapp.com/http/router/aaa 指向云函数 template/db_api/pub/select
 */
module.exports = {
	"rule":{
		"^findById/(.+)": "template/db_api/pub/findById?_id=$1",
		"^aaa$": "template/db_api/pub/select"
	},
  "config":{
    // 当设置为true时，只有符合url重写规则内的云函数才可以被url化访问。
    "accessOnlyInRule":false
  }
};
```

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.0.2（2021-05-21）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【新增】`vk.callFunctionUtil.uploadFile` 新增参数 `file`,`needSave` 若needSave=true，则文件URL会保存到数据库。（会显示在admin端的素材管理中）
#### 2、【调整】`vk.baseDao.getTableData` 默认排序规则调整为`_id`降序，之前是`_add_time`降序
#### 3、【优化】`vk.baseDao.getTableData` 和 `vk.baseDao.selects` 连表查询逻辑。
##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.0.1（2021-05-21）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
####【优化】`vk.baseDao` API的查询性能。

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 2.0.0（2021-05-15）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【优化】用户角色权限，支持admin使用 [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4003879&doc_id=975983)
#### 2、`vk-unicloud-admin`开发框架已正式上线
#### 至此，`vk-unicloud` 系列如下，可以满足开发完整系统。
##### `client端`框架地址：`https://ext.dcloud.net.cn/plugin?id=2204` [点击查看](https://ext.dcloud.net.cn/plugin?id=2204)
##### `admin端`框架地址：`https://ext.dcloud.net.cn/plugin?name=vk-unicloud-admin` [点击查看](https://ext.dcloud.net.cn/plugin?name=vk-unicloud-admin)
##### `client端`框架文档：`https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=2912167&doc_id=975983` [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=2912167&doc_id=975983)
##### `admin端`框架文档：`https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4003875&doc_id=975983` [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4003875&doc_id=975983)

##### 框架学习Q群：`22466457` 欢迎萌新和大佬来使用和共同改进框架

### 如果你觉得框架对你有用，可以在下方进行评论，也可以进行赞赏。

## 1.9.2（2021-04-23）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3541759&doc_id=975983)
#### 2、【重要】【新增】 `pages-dev.json` 机制，写法与`pages.json` 相同，但里面的页面只有运行（开发）环境时才会被HBX打包，发行（正式）环境下不会被HBX打包进去。[点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3928718&doc_id=975983)
```js
可以将一些测试页面写在 `pages-dev.json`内，这些测试页面在正式发布时是不会被HBX打包到源码里的。
```
#### 3、【重要】【新增】阿里云和unicloud短信聚合API （阿里云短信的实现不依赖阿里云SDK核心库，无需`npm install @alicloud/pop-core`）[点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/%E4%B8%8A%E4%BC%A0%20%E4%BA%91%E5%82%A8%E5%AD%98%E6%88%96%E9%98%BF%E9%87%8C%E4%BA%91OSS?sort_id=3673784)

#### 4、【重要】【废弃】原目录`util/smsUtil.js`（使用新的`vk.system.smsUtil.sendSms`聚合短信发送接口，且比之前的写法更优雅）

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.9.1（2021-04-19）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3541759&doc_id=975983)
#### 2、【重要】【全网首家】`云函数url化` 支持以纯链接形式访问路由后的云函数 如： `https://xxx.bspapp.com/http/router/client/user/pub/findGoodsInfo?id=1`
#### 3、【重要】【全网首家】`云函数url化` 支持URL重写 [点击查看URL重写详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3916806&doc_id=975983)
#### 4、【优化】`vk.selects` 支持主表外键是数组的情况下（如`uni-id-users`表的`role`字段）连表查出`roleList` [点击查看场景5](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3028633&doc_id=975983)

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.9.0（2021-04-15）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3541759&doc_id=975983)
#### 2、【重要】`vk.selects` 支持返回树状结构 [点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3906510&doc_id=975983)
#### 3、【新增】`vk.pubfn.deepClone` 深度克隆（与`vk.pubfn.copyObject`的区别：可以克隆函数)
#### 4、【优化】`vk.setData` 内部逻辑
#### 5、【优化】`使用帮助/代码快捷提示/javascript代码块提示.json` 代码块有更新 （将文件内的代码复制到 hbx 工具 - 代码块设置 - javascript代码块）

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.14（2021-04-13）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3541759&doc_id=975983)
#### 2、【修复】`console.log`在小程序端可能会无法打印出代码所在位置的问题。
#### 3、【优化】云函数中 `vk.request`新增参数`needOriginalRes` 默认为`false`，若为`true`，则会返回原始数据（包含请求头等数据）
#### 4、【调整】`vk.request`默认的`header`与官方对其（之前默认是`{"content-type": "application/json; charset=UTF-8"}`）
#### 5、【优化】`uni-id` 模式调整为：兼容单实例多并发模式

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.13（2021-04-07）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3541759&doc_id=975983)
#### 2、【优化】`vk.baseDao.selects` 支持`_.geoNear`API（将记录按照离给定点从近到远输出。）[点击查看万能连表场景4](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3028633&doc_id=975983)
```
官方原生语法中，连表查询和非连表查询在使用`_.geoNear`时用较大差别；
而 vk.baseDao.selects（万能连表）写法跟 vk.baseDao.select（单表查询） 写法保持统一，使上手更简单。
```
#### 3、【优化】如需要在云函数中主动抛出异常，且能让前端框架自动识别后进行alert弹窗提示，则可使用以下方式
```js
// 注意: 必须以msg:为前缀，否则框架无法识别（只支持字符串）
throw new Error("msg:这里是错误的提示");
```
#### 4、【新增】`app.config.js` 新增 `tokenExpiredAutoDelete` 属性，默认`true` 若设为`false`，则`token`失效时，依然保留前端的`token缓存`。


#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.12（2021-03-27）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3541759&doc_id=975983)
#### 2、【新增】`百度开放平台API接口` (营业执照识别、身份证识别等) [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3803034&doc_id=975983)
#### 3、【优化】`kh`目录下的函数默认会获取 `userInfo`（当前登录用户信息），如果此云函数不需要用户信息，可以在前端多传一个参数`need_user_info:false` 可以减少一次数据库查询（加快响应速度）(快100ms左右) [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3790840&doc_id=975983)
#### 4、【优化】`returnUserInfoFilter` 过滤器的内部逻辑
#### 5、【优化】`vk.callFunction` 新增参数 `needAlert`(默认为true) 来代替 `noAlert`（默认为false） 二选一即可（建议后面都使用`needAlert`参数，它更语义化)

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.11（2021-03-24）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3541759&doc_id=975983)
#### 2、【新增】`vk.pubfn.timeUtil.isLeapYear` 判断是否是闰年
#### 3、【新增】`vk.pubfn.timeUtil.isQingming` 判断是否是清明节
#### 4、【新增】清明节灰色页面实现方案 [点击查看](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3782115&doc_id=975983)
```js
/**
 * 判断是否是闰年
 * @params {Number | Date} year 需要计算的年份或时间,默认使用当前时间的年份
 */
vk.pubfn.timeUtil.isLeapYear(2021);
/**
 * 判断是否是清明节
 * @params {Object} date 时间对象 
 */
vk.pubfn.timeUtil.isQingming(new Date());
```

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.10（2021-03-23）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【优化】新增`app`环境中直接保存用户微信昵称和头像的使用示例。`/pages_template/uni-id/weixin/weixin`
#### 3、【修复】`vuex`储存值为0时，会变成`空字符串`的问题。

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.9（2021-03-20）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【优化】`vk.userCenter.code2SessionWeixin` 的内部逻辑。使之可以正确的和`vk.userCenter.loginByWeixinPhoneNumber` 搭配使用
#### #### 效果：使用微信手机号一键登录后，同时绑定微信openid和mobile

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.8（2021-03-19）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【修复】微信小程序服务端API在保存`token`时，缓存时间错误的问题。
#### 3、【修复】`vk.callFunctionUtil.uploadFile` 上传视频返回`.png`的问题 [点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3673784&doc_id=975983)
#### 4、【新增】APP本机号码一键登录API `vk.userCenter.loginByUniverify`
```js
示例页面：/pages_template/uni-id/univerify/univerify
```

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.7（2021-03-19）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【优化】在安装了`vuex`后，移除了名为`uni_id_user_info`的本地缓存（重复了）（`userInfo`使用`vk.getVuex('$user.userInfo')`获取）
#### 3、【修复】微信小程序服务端API在获取`token`时，没有正确使用缓存的问题。
#### 4、【新增】APP本机号码一键登录API `vk.userCenter.loginByUniverify`
```js
示例页面：/pages_template/uni-id/univerify/univerify
```

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.6（2021-03-12）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【重要】现在可以在js文件中直接通过 `uni.vk` 来使用 `vk` 对象内的API 
#### 3、【新增】`app.config.js` 新增参数 `checkSharePages` 控制页面是否可以被小程序分享
#### 4、【优化】发行模式下，`console.log` 将不会打印任何日志。
```js
若发行模式下需要强制打印，可用 `vk.log` 代替 `console.log`
```
#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。
## 1.8.5（2021-03-10）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【新增】`vk.callFunctionUtil.uploadFile` 支持前端直传至`阿里云oss` [点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3673784&doc_id=975983)
#### 3、【新增】`app.config.js` 新增 `myfn` 参数，可用来拓展自定义公共函数 [点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3673929&doc_id=975983)

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.4（2021-03-06）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【新增】`vk.openapi.weixin.subscribeMessage.send` 微信小程序发送订阅消息 [点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3569379&doc_id=975983)
```
示例页面：/pages_template/openapi/weixin/sendMessage/sendMessage
```
#### 3、【优化】`vk.baseDao.add` 和 `vk.baseDao.adds` 新增参数 `cancelAddTime` 为`true`,则不会有`_add_time`和`_add_time_str`字段生成
#### 4、【优化】`vk.baseDao.add` 和 `vk.baseDao.adds` 支持添加自定义 `_id`
#### 5、【优化】`vk.setVuex` 和 `vk.setData` 的赋值逻辑
```
需替换：/store/index.js 文件
```
#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。
## 1.8.3（2021-03-04）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【重要】`vuex` 的使用方式有较大更新。(有性能提升)[点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3654596&doc_id=975983)

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。
## 1.8.2（2021-03-01）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【修复】`vk.baseDao.deleteById` 会报`vk is not defined`的错误。
#### 3、【重要】公共模块`config` 的默认`passwordSecret`和`tokenSecret`调整为与`uni-id`默认`config`一致
```js
`tokenSecret`一致的好处：兼容clientDB
注意：如您目前的项目已上线，请谨慎修改passwordSecret（tokenSecret已上线的项目也可以修改）。
```
#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。
## 1.8.1（2021-02-23）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【优化】`vk.baseDao.selects` 支持副表与副表的副表进行连表 [点击查看详情](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3028633&doc_id=975983)
```
1.1、支持无限张副表和主表进行连接（横向无限张表）
1.2、支持副表与副表的副表进行连接（竖向无限层连接）
```
#### 3、【新增】微信小程序服务端API [点击查看文档](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3569379&doc_id=975983)

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。

## 1.8.0（2021-02-07）
### uniCloud 云函数路由研究群:22466457 如有问题或建议可以在群内讨论。
###  更新内容
#### 1、【重要】升级至`uni_modules`版本 [点击查看升级指南](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/1.8%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E8%87%B31.8%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97%20%E5%8D%87%E7%BA%A7%E6%88%90%20uni_modules%E7%89%88%E6%9C%AC?sort_id=3541759)
#### 2、【重要】本次更新文件有重大改动，升级成功后将变成`uni_modules`版本，下次更新框架只需要在hbx编译器中一键更新。
#### 3、【新增】【小程序API】`vk.userCenter.loginByWeixinPhoneNumber` 前端可以使用微信小程序一键进行手机号登录
#### 4、【新增】【小程序API】`vk.userCenter.getPhoneNumber` 前端一键获取微信小程序绑定的手机号
#### 5、【新增】【小程序API】`vk.openapi.weixin.decrypt.getPhoneNumber` 云函数解析微信小程序绑定的手机号
#### 6、【新增】【小程序API】`vk.userCenter.getWeixinMPqrcode` 前端一键生成带参数的小程序码
#### 7、【新增】【小程序API】`vk.userCenter.getWeixinMPscheme` 前端一键生成带参数的小程序scheme码（支持从手机短信跳转到小程序）
#### 8、【优化】`middleware/modules/returnUserInfoFilter` 中间件的处理逻辑。
#### 9、【优化】`javascript代码块提示.json` 输入`vk.`可以快速提示代码块 `根目录/使用帮助/代码快捷提示`

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！
### 你也可以在评论区发布留言交流心得。
