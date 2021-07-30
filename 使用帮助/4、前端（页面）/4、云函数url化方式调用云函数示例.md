## 云函数url化方式调用云函数示例
### isRequest:true 代表使用url访问云函数，一般用于PC后台管理页面使用

```js
this.vk.callFunction({
  url: 'user/kh/setAvatar',
  title:'请求中...',
  isRequest:true,
  data:{
    avatar: "https://xxxxxxx.jpg"
  },
  success(data) {
    // 修改成功
  }
});

```
## 注意：云函数url化方式调用需要配置你的云函数url路径地址
`main.js` 在代码`Vue.use(vk); `的下方添加
```js
// 自定义云函数路由配置
Vue.prototype.vk.callFunctionUtil.setConfig({
  functionNameToUrl:{
    // 云函数路由（主函数url化地址）
    "router":"https://xxxxxxx.bspapp.com/http/router",
    // 云函数路由（开发测试函数url化地址）
    "router-test":"https://xxxxxxx.bspapp.com/http/router-test"
  }
});

```
