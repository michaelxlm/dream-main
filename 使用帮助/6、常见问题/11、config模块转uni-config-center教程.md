### 为了响应官方`uni-config-center` 模块的推动，现框架的配置中心升级为`uni-config-center` 模式。此次升级也是为后续升级做铺垫。

### 注意：本次更新目录结构改动较大，可能你漏一步后运行会报错，这时别慌，来群包解决：22466457
### 快速升级教程（优势：简单）
#### 1、右键项目根目录的`package.json`，点击`从插件市场更新`，即可一键升级 (但需要注意文件的替换，切记仔细对比，不要直接点合并)
#### 2、上传`uni-config-center`公共模块
#### 3、在`cloudfunctions/router/`目录执行npm i 
#### 4、上传`router`云函数
#### 5、完成。（可以尝试运行项目看是否有报错，有问题可以进群解决：22466457，如没有问题，则可以删除原先的config模块了）

### 手动升级教程
#### 1、右键`uni_modules`目录，点击`从插件市场更新所有插件`
#### 2、`cloudfunctions/common/uni-config-center/` 的根目录新建目录`vk-unicloud`
#### 3、`cloudfunctions/common/uni-config-center/vk-unicloud/` 目录新建文件`index.js`（注意文件名是`index.js`，不是`config.js`）代码如下（请重新配置下配置信息）
```js
const uniIdConfig = require('../uni-id/config.json');
module.exports = {
  "uni":uniIdConfig,
  "vk":{
    "system":{
      // 若serviceShutdow:true，则所有云函数无法访问（适用于需要临时关闭后端服务的情况，如迁移数据）
      // 注意：本地调试时，需要重新启动本地服务才能生效。
      "serviceShutdown":false,
      "serviceShutdownDescription":"系统维护中，预计2小时恢复!"
    },
    "service": {
      // 邮箱发送服务
      "email": {
        // qq邮箱参数配置
        "qq": {
          "host": "smtp.qq.com",
          "port": 465,
          "secure": true,
          "auth": {
            "user": "你的邮箱@qq.com",
            "pass": "邮箱授权码"
          }
        }
      },
      // 日志服务
      "log":{
        // 用户登录日志
        "login":{
          "status":true	// 是否开启用户登录日志
        }
      },
      // 短信服务
      "sms": {
        // 阿里云短信服务
        "aliyun": {
          "enable": false,					// 是否使用阿里云短信代替unicloud短信发送短信验证码
          "accessKeyId": "",				// 短信密钥key
          "accessKeySecret": "",		// 短信密钥secret
          "signName": "", 					// 默认签名
          "templateCode": {
            "verifyCode": ""				// 验证码短信模板 - 配合uni-id需要
          }
        }
      },
      // 开放平台api
      "openapi":{
        // 百度开放平台 (主要用于身份证识别,营业执照识别等API)
        // API Key申请地址：https://cloud.baidu.com/doc/OCR/s/rk3h7xzck 点击右上角注册
        "baidu":{
          "appid" : "",       // 对应的API Key
          "appsecret" : ""    // 对应的Secret Key
        }
      }
    },
    "db":{
      "unicloud":{
        "maxLimit" : 500,	// 最大limit限制(目前腾讯云最大1000,阿里云最大500)
        "cancelAddTime" : false,// 取消vk.baseDao.add 时自动生成_add_time和_add_time_str
      }
    },
    // 其他小程序的密钥 当需要多个小程序绑定同一服务空间,并调用小程序服务端API时需要填写 暂只支持微信小程序
    "oauth":{
      // 微信小程序
      "weixin":{
        // 密钥列表
        "list":[
          {
            "appid" : "",
            "appsecret" : ""
          },
          {
            "appid" : "",
            "appsecret" : ""
          }
        ]
      }
    }
  }
};

```
#### 4、重新配置下`cloudfunctions/common/uni-config-center/uni-id/config.json` 的uni-id配置（此文件内不可写注释）

#### 5、修改`cloudfunctions/router/config.js` 文件内的代码

### 替换前：
```js
const createConfig  = require('uni-config-center'); // 获取全局配置信息
const config = createConfig({pluginId: 'vk-unicloud'}).requireFile('index.js');
const uniID = require('uni-id');                 // uni-id 公共模块
uniID.init(config["uni"]);                       // 初始化uni-id
const uniPay = require('uni-pay');               // uni-pay 公共模块
const db = uniCloud.database();                  // 获取数据库实例
const pubFun = require('./util/pubFunction');    // 自定义公共函数
const urlrewrite = require('./util/urlrewrite'); // url重写（内部转发）
// 自定义过滤器(中间件)
const middlewareService = require('./middleware/index');
// 数据库操作中心
const daoCenter = require('./dao/index');
// 加密解密工具包
const crypto = require('crypto');
const requireFn = function(path){
  return require(path);
}
const initConfig = {
  baseDir : __dirname, // 云函数根目录地址
  requireFn,
  config,
  uniID,
  uniPay,
  db,
  pubFun,
  urlrewrite,
  middlewareService,
  daoCenter,
  crypto
  // customUtil :{
  // 	mynpm1:mynpm1
  // }
};
module.exports = initConfig;
 ```

### 替换后：

```js
const requireFn = function(path) {
  return require(path);
}
const initConfig = {
  baseDir: __dirname, // 云函数根目录地址
  requireFn,
  customUtil :{
    // 你自己的工具包，写这里后即可听过customUtil.mynpm1调用
    // mynpm1:mynpm1
  }
};
module.exports = initConfig;
```

#### 6、删除`cloudfunctions/router/package.json`文件内的以下代码
```js
"config": "file:../common/config",
```
#### 7、删除`cloudfunctions/router/package-lock.json` 文件和 `cloudfunctions/router/node_modules` 目录
#### 8、上传`uni-config-center`公共模块
#### 9、在`cloudfunctions/router/`目录执行npm i 
#### 10、上传`router`云函数
#### 11、完成。（可以尝试运行项目看是否有报错，有问题可以进群解决：22466457，如没有问题，则可以删除原先的config模块了）


