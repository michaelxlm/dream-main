## 什么是URL化

#### 云函数URL化 是 uniCloud 为开发者提供的 HTTP 访问服务，让开发者可以通过 HTTP URL 方式访问到云函数。
场景1：比如App端微信支付，需要配服务器回调地址，此时需要一个HTTP URL。
场景2：非uni-app开发的系统，想要连接uniCloud，读取数据，也需要通过HTTP URL方式访问。
用户通过 `https://xxx.bspapp.com/http/router` 的形式访问云函数

## 什么是URL重写
#### URL重写就是将URL按一定规则书写一个更容易阅读的URL
### 好处
1、美化URL
2、隐藏真实URL
3、伪静态（可将url后缀改成.html）（不过目前unicloud还不支持服务端渲染）
4、等等

如：`https://xxx.bspapp.com/http/router/client/user/pub/findGoodsList` 这一个URL。
用户请求后，在路由框架的规则下，最终执行的是`client/user/pub/findGoodsList`这个云函数

#### 而重写可以达到这样的效果
可以将  `https://xxx.bspapp.com/http/router/client/user/pub/findGoodsList` 
重写成  `https://xxx.bspapp.com/http/router/findGoodsList`
它可以让你的URL更简短易懂，通常用于公开开放API时使用（也达到了一个隐藏真实URL的目的）

它还
可以将  `https://xxx.bspapp.com/http/router/client/user/pub/findGoodsInfo?id=1`
重写成  `https://xxx.bspapp.com/http/router/findGoodsInfo/1`

甚至
可以将 `https://xxx.bspapp.com/http/router/template/db_api/pub/findById?id=1`
重写成 `https://xxx.bspapp.com/http/router/findById/1.html`

### 具体如何书写都由你自己来定义。
### 你的URL由你做主！

## 重写教程
#### 1、编写`router/util/urlrewrite.js`（如果没有则新建）
```js
module.exports = {
  "rule": {
    "^findById/(.+)": "template/db_api/pub/findById?_id=$1",
    "^aaa$": "template/db_api/pub/select"
  },
  "config":{
    // 当设置为true时，只有符合url重写规则内的云函数才可以被url化访问。
    "accessOnlyInRule":false
  }
};
```
#### 注意：当config.accessOnlyInRule=true时，只有符合url重写规则内的云函数才可以被url化访问。（可以做到只暴露指定的API接口）
#### 2、修改 `router/config.js`
![输入图片说明](https://images.gitee.com/uploads/images/2021/0419/120116_ddb95424_541115.png "屏幕截图.png")

#### 3、上传云函数（完成）

