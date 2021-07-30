
## 配置前端非法token拦截器
#### 在`app.config.js`的 `interceptor`属性新增
```js
interceptor:{
  login:function(obj){
    let { vk, params, res } = obj;
    setTimeout(function(){
      uni.navigateTo({
        url:"/pages/login/index/index",
        events:{
          // 监听登录成功后的事件
          loginSuccess: function(data) {
            // 重新执行一次云函数调用
            if(params) Vue.prototype.vk.callFunction(params);
          },
        }
      });
    },300); 
    console.log("跳自己的登录页面");
    // 上方代码可自己修改，写成你自己的逻辑处理。		
  }
}
```
