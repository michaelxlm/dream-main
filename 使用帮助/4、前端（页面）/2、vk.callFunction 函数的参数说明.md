
## this.vk.callFunction 函数的参数说明

| 参数          | 说明                           | 类型    | 默认值  | 可选值 |
|---------------|-------------------------------|---------|--------|-------|
| url           | 请求路径，该路径实为router云函数的service目录下的路径   | String | - | - |
| data          | 请求参数 | Object  | - | -  |
| title         | 遮罩层提示语，为空或不传则代表不显示遮罩层。 | String  | - | -  |
| isRequest     | 是否使用云函数url化地址访问云函数 | Boolean  | false | true |
| needAlert     | 为true代表请求错误时，会有alert弹窗提示 | Boolean  | true | false |
| success       | 请求成功时，执行的回调函数 | Function  | - | - |
| fail          | 请求失败时，执行的回调函数 | Function  | - | - |
| complete      | 无论请求成功与否，都会执行的回调函数 | Function  | - | - |
| globalParamName  | 全局请求参数的名称， 如果设置了正则规则,则不需要此参数 | String  | - | - |

### globalParamName的用法
```js
// 需要先设置globalParamName对应的数据
/**
 * 修改请求配置中的公共请求参数
 * 若把shop-manage改成*则代表全局
 */
vk.callFunctionUtil.updateRequestGlobalParam({
  "shop-manage":{
    regExp:"^xxx/kh/",
    data:{
      shop_id : shop_id
    }
  }
});

// 此时请求若带上 globalParamName:"shop-manage" 或满足 regExp:"^xxx/kh/" 的正则规则，则请求参数会自动带上 shop_id
vk.callFunction({
  url: 'xxx/xxxxxx',
  title: '请求中...',
  globalParamName:"shop-manage",// 如果设置了正则规则,则不需要此参数
  data: {},
  success(data) {
    
  }
});
```