```js
let { data = {}, userInfo, util, filterResponse, originalParam } = event;
let { customUtil, uniID, config, pubFun, vk, db, _ } = util;
let { uid } = data;
```
### 常用
#### data : 前端传过来的请求参数
#### userInfo ： 当前登录用户的用户信息（kh目录下的云函数才有，pub目录下需要多传一个参数`need_user_info:true`）
#### uid ： 当前登录用户的用户的id（kh目录下的云函数才有，pub目录下需要多传一个参数`need_user_info:true`）
#### vk ： vk框架的依赖对象
#### pubFun ：你自己的公共函数（函数文件在 `router/util/pubFunction.js`）
#### db ： 数据库对象
#### _  ： 等价于 db.command

### 特殊
#### config ： 全局配置
#### util : 框架内置的工具函数包（公共函数）
#### filterResponse ： 过滤器返回的数据
#### originalParam  ： 原始请求数据（IP地址这些就是从这里获取 `originalParam.context.CLIENTIP`）
#### customUtil ： 你自己的工具包（公共函数）
#### uniID ： uni-id 对象


### originalParam.context 介绍
```js
//context中可获取客户端调用的上下文
let os = context.OS //客户端操作系统，返回值：android、ios    等
let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app-plus等
let appid = context.APPID // manifest.json中配置的appid
let clientIP = context.CLIENTIP // 客户端ip信息
let clientUA = context.CLIENTUA // 客户端user-agent
let deviceId = context.DEVICEID // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
let spaceInfo = context.SPACEINFO // 当前环境信息 {spaceId:'xxx',provider:'tencent'}
```






