### 完整的 `app.config.js`
```js
// 引入自定义公共函数
import myPubFunction from '@/common/function/myPubFunction.js'
module.exports = {
  // 开发模式启用调式模式(请求时会打印日志)
  debug:process.env.NODE_ENV !== 'production',
  // 主云函数名称
  functionName:"router",
  // 登录页面路径
  login: {
    url: '/pages_template/uni-id/login/index/index'
  },
  // 404 Not Found 错误页面路径
  error: {
    url: '/pages/error/404/404'
  },
  // 日志风格
  logger:{
    colorArr:[
      "#0095f8",
      "#67C23A"
    ]
  },
  /**
  * app主题颜色
  * vk.getVuex('$app.config.color.main')
  * vk.getVuex('$app.config.color.secondary')
  */
  color:{
    main:"#ff4444",
    secondary:"#555555"
  },
  // 需要检查是否登录的页面列表
  checkTokenPages:{
    /**
     * mode = 0 代表自动检测
     * mode = 1 代表list内的页面需要登录
     * mode = 2 代表list内的页面不需要登录
     * 注意1: list内是通配符表达式,非正则表达式
     * 注意2: 需要使用 vk.navigateTo 代替 uni.navigateTo 进行页面跳转才会生效
     */
    mode:2,
    list:[
      "/pages_template/*",
      "/pages/login/*",
      "/pages/index/*",
      "/pages/error/*"
    ]
  },
  // 需要检查是否可以分享的页面列表(仅小程序有效)
  checkSharePages:{
    /**
    * mode = 0 不做处理
    * mode = 1 代表list内的页面可以被分享
    * mode = 2 代表list内的页面不可以被分享
    * 注意: list内是通配符表达式,非正则表达式
    */
    mode:0,
    // ['shareAppMessage', 'shareTimeline'],
    menus:['shareAppMessage'],
    list:[
      "/pages/index/*",
      "/pages/goods/*",
      "/pages_template/*",
    ]
  },
  // 静态文件的资源URL地址
  staticUrl:{
    // Logo
    logo: '/static/logo.png',
  },
  // 自定义公共函数，myPubFunction内的函数可通过vk.myfn.xxx() 调用
  myfn: myPubFunction,
  // 第三方服务配置
  service:{
    // 阿里云oss配置
    aliyunOSS:{
      // 密钥和签名信息 (由于签名的获取比较麻烦,建议初学者使用上传到unicloud的方案,上传到阿里云OSS是给有特殊需求的用户使用)
      uploadData:{
        OSSAccessKeyId: "",
        policy:"",
        signature:"",
      },
      // oss上传地址
      action:"https://xxxxxxxx.oss-cn-hangzhou.aliyuncs.com",
      // 根目录名称
      dirname:"test",
      // oss外网访问地址，也可以是阿里云cdn地址
      host:"https://xxx.xxx.com"
    }
  }
}

```

### config已注入vuex，可以通过 vk.getVuex('$app.config') 获取配置信息（不包含函数）

```html
<image :src="vk.getVuex('$app.config.staticUrl.cartEmpty')" style="width: 330rpx;height: 275rpx;"></image>
```