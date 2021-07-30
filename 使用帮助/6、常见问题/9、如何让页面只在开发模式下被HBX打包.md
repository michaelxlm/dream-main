### 你可能会有这样的需求
在开发时，有一些测试页面，而这些测试页面不想在正式上线时被用户访问到。

以 设置 `pages_template` 目录内的所有页面仅在开发模式下生效为例。
### 步骤
### 1、在项目根目录新建文件 `pages-dev.json`
```js
{
  "subPackages": [{
    "root": "pages_template",
    "pages": [{
      "path": "db-test/db-test"
    },
    {
      "path": "db-test/list/list"
    },
    {
      "path": "uni-id/index/index"
    },
    {
      "path": "uni-id/password/password"
    },
    {
      "path": "uni-id/mobile/mobile"
    },
    {
      "path": "uni-id/univerify/univerify"
    },
    {
      "path": "uni-id/weixin/weixin"
    },
    {
      "path": "uni-id/alipay/alipay"
    },
    {
      "path": "uni-id/util/util"
    },
    {
      "path": "uni-id/email/email"
    },
    {
      "path": "uni-id/login/index/index",
      "style": {
        "navigationBarTitleText": "登录"
      }
    },
    {
      "path": "uni-id/login/register/register",
      "style": {
        "navigationBarTitleText": "注册"
      }
    },
    {
      "path": "uni-id/login/forget/forget",
      "style": {
        "navigationBarTitleText": "找回密码"
      }
    },
    {
      "path": "components-dynamic/index/index",
      "style": {
        "navigationBarTitleText": "动态数据组件"
      }
    },
    {
      "path": "components-dynamic/vk-u-notice-bar/vk-u-notice-bar",
      "style": {
        "navigationBarTitleText": "动态数据组件 - 公告"
      }
    },
    {
      "path": "components-dynamic/vk-u-swiper/vk-u-swiper",
      "style": {
        "navigationBarTitleText": "动态数据组件 - 图片轮播"
      }
    },
    {
      "path": "components-dynamic/vk-u-grid-button/vk-u-grid-button",
      "style": {
        "navigationBarTitleText": "动态数据组件 - 图文导航"
      }
    },
    {
      "path": "components-dynamic/vk-u-goods-sku-popup/vk-u-goods-sku-popup",
      "style": {
        "navigationBarTitleText": "商品SKU选择器组件"
      }
    },
    {
      "path": "vuex/vuex",
      "style": {
        "navigationBarTitleText": "vuex演示示例"
      }
    },
    {
      "path": "openapi/weixin/weixin"
    },
    {
      "path": "openapi/weixin/msgSecCheck/msgSecCheck"
    },
    {
      "path": "openapi/weixin/imgSecCheck/imgSecCheck"
    },
    {
      "path": "openapi/weixin/sendMessage/sendMessage"
    },
    {
      "path": "openapi/baidu/baidu"
    }]
  }]
}
```

### 2、删除`package.json`内原有的 `pages_template` 分包
### 3、项目根目录新建文件 `pages.js`
```js
const debug = process.env.NODE_ENV !== 'production';
var devPages;
try {
  devPages = require('./pages-dev.json');
} catch(err) {}
module.exports = function(pagesJson) {
  try {
    let newDevPages = JSON.parse(JSON.stringify(devPages));
    if (debug && newDevPages) {
      for (let keyName in newDevPages ) {
        let item = newDevPages [keyName]
        if (Object.prototype.toString.call(item) === "[object Array]") {
          pagesJson[keyName].push(...item);
        } else if (Object.prototype.toString.call(item) === '[object Object]') {
          pagesJson[keyName] = Object.assign(pagesJson[keyName], item);
        }
      }
    }
  } catch(err) {
    console.log(err);
  }
  return pagesJson;
}
```
### 4、重新编译（完成）
### 此时你可以尝试点击hbx上方菜单 `发行` `微信-小程序`
![输入图片说明](https://images.gitee.com/uploads/images/2021/0421/135021_a89feaa3_541115.png "屏幕截图.png")
### 此时是发行（正式）模式，可以看到`pages_template`目录并没有被打包到小程序源码中。
### 而点击hbx上方菜单`运行` `运行到小程序模拟器`
![输入图片说明](https://images.gitee.com/uploads/images/2021/0421/135134_64e5dd47_541115.png "屏幕截图.png")
### 此时是调式（开发）模式，可以看到`pages_template`目录被打包到小程序源码中。