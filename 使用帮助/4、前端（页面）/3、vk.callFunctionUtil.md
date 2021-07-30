### 修改请求配置中的公共请求参数
```js
/**
 * 修改请求配置中的公共请求参数
 * 若把shop-manage改成*则代表全局
 */
vk.callFunctionUtil.updateRequestGlobalParam({
  "shop-manage":{
    shop_id : shop_id
  }
});

```
### 获取请求配置中的公共请求参数
```js
/**
 * 修改请求配置中的公共请求参数
 * 若globalParamName = *则代表全局
 */
vk.callFunctionUtil.getRequestGlobalParam(globalParamName);

```

### 删除请求配置中的公共请求参数
```js
/**
 * 删除请求配置中的公共请求参数
 * globalParamName 不传代表删除所有
 */
vk.callFunctionUtil.deleteRequestGlobalParam(globalParamName);
```

### 上传图片到云储存
```js
// 上传图片到云储存
vk.callFunctionUtil.uploadFile({
  title:"上传中...",
  filePath: res.tempFilePaths[0],
  file: res.tempFiles[0],
  fileType: "image",
  provider: "unicloud",
  success(res) {

  }
});
```