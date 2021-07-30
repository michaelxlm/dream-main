## 百度API

### 配置`config`公共模块`vk.service.openapi`
```js
// 开放平台api
"openapi":{
  // 百度开放平台 (主要用于身份证识别,营业执照识别等API)
  "baidu":{
    "appid" : "",     // 对应的API Key
    "appsecret" : ""  // 对应的Secret Key
  }
}
```
### API Key申请地址：https://cloud.baidu.com/doc/OCR/s/rk3h7xzck 点击右上角注册
#### 目前百度云是有免费版本的，基本也够用了。

## 百度开放平台API

### 【云函数】调用百度开放平台API

#### API通用接口
```js
/**
 * 百度开放平台API通用接口
 * 身份证识别为例 https://aip.baidubce.com/rest/2.0/ocr/v1/idcard
 * @param {String} action 接口名 如: ocr/v1/idcard的部分
 * @param {String} actionVersion 接口版本 默认2.0
 * @param {object} header 请求头 默认 { "content-type": "application/x-www-form-urlencoded" }
 * @param {object} data 请求数据
 * 示例
 */
let requestRes = await vk.openapi.baidu.open.request({
  action:"ocr/v1/idcard",
  actionVersion: "2.0",
  data:{
    image:base64
  }
});
```

### 【前端】直接调用百度开放平台API
#### API通用接口
```js
/**
 * 百度开放平台通用请求接口
 * @param {String} action        接口名称
 * @param {String} actionVersion 接口版本名称 默认2.0
 * @param {String} title         loading文字
 * @param {object} data          请求参数
 * @param {String} success       成功回调
 * @param {String} fail          失败回调
 * @param {String} complete      完成回调
 */
vk.openapi.baidu.request({
  action: 'ocr/v1/business_license',
  actionVersion:"2.0",
  title:"识别中...",
  data: {
    image:base64
  },
  success: (data) => {
    that.data = data;
  },
});
```
###  更多接口（action名称）请查看: [点击前往百度开放平台API](https://cloud.baidu.com/doc/OCR/s/rk3h7xzck)

### 注意：前端直接调用的
#### 优势
```js
1. 请求速度更快
2. 使用方便
3. 无需再写云函数
4. 省流量（省钱）云函数是按量扣费的
```
#### 劣势
```js
1. 有token泄露风险，但此token并不会造成多大的危害。
```

### 以下是前端使用的更快捷的API形式
```js
/**
 * 营业执照识别
 * 以下data参数三选一即可
 * @param {File} file     文件对象
 * @param {String} image  图像base64编码后进行urlencode
 * @param {String} url    图片完整URL
 *
 */
vk.openapi.baidu.open.ocr.business_license({
  title: "识别中...",
  data: {
    file: res.tempFiles[0]
  },
  success: (res) = >{
    that.data = res.data;
  },
});

/**
 * 身份证识别
 * 以下data参数三选一即可
 * @param {File} file     文件对象
 * @param {String} image  图像base64编码后进行urlencode
 * @param {String} url    图片完整URL
 */
vk.openapi.baidu.open.ocr.idcard({
  title: "识别中...",
  data: {
    image: base64
  },
  success: (res) = >{
    that.data = res.data;
  },
});
```


