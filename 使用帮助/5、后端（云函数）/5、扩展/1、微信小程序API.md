## 微信小程序API

### 授权相关API

#### 获取token `vk.openapi.weixin.auth.getAccessToken`
```js
/**
 * (带缓存,缓存1小时) 获取小程序全局唯一后台接口调用凭据（access_token）。调用绝大多数后台接口时都需使用 access_token，开发者需要进行妥善保存。
 * @param {String} appid 小程序APPID,默认使用config公共模块中的config.uni["mp-weixin"].oauth.weixin.appid
 * @param {String} appsecret 小程序appsecret,默认使用config公共模块中的config.uni["mp-weixin"].oauth.weixin.appsecret
 * @param {String} cache 默认true 使用缓存
 */
let access_token = await vk.openapi.weixin.auth.getAccessToken();

```

#### code换取openid `vk.openapi.weixin.auth.code2Session`
```js
/**
 * 登录凭证校验。通过 wx.login 接口获得临时登录凭证 code 后传到开发者服务器调用此接口完成登录流程。
 * @param {String} appid 小程序APPID,默认使用config公共模块中的config.uni["mp-weixin"].oauth.weixin.appid
 * @param {String} appsecret 小程序appsecret,默认使用config公共模块中的config.uni["mp-weixin"].oauth.weixin.appsecret
 * @param {String} js_code 登录时获取的 code
 */
let code2SessionRes = await vk.openapi.weixin.auth.code2Session({
  js_code : js_code
});
```
#### 获取微信绑定的手机号 `vk.openapi.weixin.decrypt.getPhoneNumber`
```js
/**
 * 获取微信绑定的手机号
 * @param {String} appId 小程序APPID,默认使用config公共模块中的config.uni["mp-weixin"].oauth.weixin.appid
 * @param {String} encryptedData 加密数据
 * @param {String} iv 密钥1
 * @param {String} sessionKey 密钥2
 */
let getPhoneNumberRes = await vk.openapi.weixin.decrypt.getPhoneNumber({
  encryptedData,
  iv,
  sessionKey
});

```

### 小程序码 `vk.openapi.weixin.wxacode.getUnlimited`
```js

/**
 * 获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。 更多用法详见 获取二维码。
 * @param {String} access_token 默认自动获取,不需要传
 * @param {String} scene        最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
 * @param {String} page         必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面
 * @param {number} width        二维码的宽度，单位 px，最小 280px，最大 1280px
 * @param {boolean} auto_color  自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false
 * @param {Object} line_color   auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":0,"g":0,"b":0} 十进制表示
 * @param {boolean} is_hyaline  是否需要透明底色，为 true 时，生成透明底色的小程序 默认false
 */
let getUnlimitedRes = await vk.openapi.weixin.wxacode.getUnlimited({
  scene:"",
  page:""
});

```

### scheme码 `vk.openapi.weixin.urlscheme.generate`
```js
/**
 * 获取小程序scheme码
 * @param {String} access_token   默认自动获取,不需要传
 * @param {Object} jump_wxa       跳转到的目标小程序信息。
 * @param {boolean} is_expire     生成的scheme码类型，到期失效：true，永久有效：false。
 * @param {number} expire_time    到期失效的scheme码的失效时间，为Unix时间戳。生成的到期失效scheme码在该时间前有效。最长有效期为1年。生成到期失效的scheme时必填。
 * jump_wxa 的结构
 * @param {string} path           通过scheme码进入的小程序页面路径，必须是已经发布的小程序存在的页面，不可携带query。path为空时会跳转小程序主页。
 * @param {string} query          通过scheme码进入小程序时的query，最大1024个字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~
 */
let generateRes = await vk.openapi.weixin.urlscheme.generate({
  jump_wxa:{
    path,
    query
  },
  is_expire : true,
  expire_time : 3600*24*30
});

```

### 内容安全
#### 检测文本 `vk.openapi.weixin.security.msgSecCheck`
```js
/**
 * 检查一段文本是否含有违法违规内容。
 * 频率限制：单个 appId 调用上限为 4000 次/分钟，2,000,000 次/天*
 * @param {String} access_token   默认自动获取,不需要传
 * @param {String} content        要检测的文本内容，长度不超过 500KB
 */
let msgSecCheckRes = await vk.openapi.weixin.security.msgSecCheck({
  content:content
});

```
#### 检测图片 `vk.openapi.weixin.security.imgSecCheck`
```js
/**
 * 校验一张图片是否含有违法违规内容。
 * 频率限制：单个 appId 调用上限为 2000 次/分钟，200,000 次/天 （ 图片大小限制：1M **）
 * @param {String} access_token   默认自动获取,不需要传
 * @param {String} base64         要检测的图片文件base64，图片尺寸不超过 750px x 1334px
 */
let imgSecCheckRes = await vk.openapi.weixin.security.imgSecCheck({
  base64:base64
});
```
#### 发送订阅消息 `vk.openapi.weixin.subscribeMessage.send`
```js
/**
 * 发送订阅消息
 * @param {String} touser             接收者（用户）的 openid
 * @param {String} template_id        所需下发的订阅模板id
 * @param {String} page               点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。
 * @param {String} data               模板内容，格式形如 { "key1": { "value": any }, "key2": { "value": any } }
 * @param {String} miniprogram_state  跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版
 */
let sendRes = await vk.openapi.weixin.subscribeMessage.send({
  touser : openid,
  template_id : "订阅模板ID",
  page : "pages/index/index",
  data : { 
    key1: {
      value: ""
    }, 
    key2: {
      value: "" 
    } 
  },
  miniprogram_state : "formal",
});

// 注意
// 发送订阅消息需要用户先在小程序前端点击订阅
uni.requestSubscribeMessage({
  tmplIds: ['订阅模板ID'],
});
```
### 直播

#### 获取直播间列表 `vk.openapi.weixin.livebroadcast.getLiveInfo`
```js
/**
 * 获取直播间列表
 * @params {Number} pageIndex 第几页
 * @params {Number} pageSize  每页显示数量
 */
let getLiveInfoRes = await vk.openapi.weixin.livebroadcast.getLiveInfo({
  pageIndex : 1,
  pageSize : 100,
});
```

### 持续增加中。。。