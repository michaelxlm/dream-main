
# 只安装 `vk-unicloud-router` 核心库

#### 注意需要用到npm：
```js
1、若你的电脑没有安装 Node.js，则无法使用 npm 命令。
2、Node.js 安装包及源码下载地址为：https://nodejs.org/en/download/
3、Node.js 安装教程：https://www.runoob.com/nodejs/nodejs-install-setup.html
```

## 正式安装

### 1、先在插件市场导入一个完整的框架项目（主要用于复制一些框架必须的代码文件） [点击前往](https://ext.dcloud.net.cn/plugin?id=2204)

### 2、新建一个uniapp项目（启用云开发）（也可以直接导入老项目）

### 3、新建的项目导入核心库 [点击前往](https://ext.dcloud.net.cn/plugin?id=4157)

### 4、从完整的框架项目中复制以下文件到你的新项目
```js
1、`uniCloud/cloudfunctions/common/config/` （整个目录）
2、`uniCloud/cloudfunctions/router/` （整个目录）
3、`uniCloud/cloudfunctions/database/db_init.json`(这里注意先备份下你之前的db_init.json）
4、`项目根目录/common/`（整个目录）
5、`项目根目录/store/`（整个目录）
6、`项目根目录/app.config.js`
```

### 5、在刚刚复制的目录中有`uniCloud/cloudfunctions/router/`目录内的一些文件可以删除（如果你不需要的话）

```js
1、`router/dao/modules/` （整个目录，文件夹留着）
2、`router/middleware/modules/` （整个目录，文件夹留着）
3、`router/service/` （整个目录，文件夹留着，如果你不需要里面已经写好的云函数的话）
4、`router/dao/modules/` （整个目录，文件夹留着）
```

### 6、上传公共模块
```js
修改完配置文件后上传 `uniCloud/cloudfunctions/common` 目录下的公共模块
1、右键 common 下的 config 目录，点击上传公共模块
2、右键 common 下的 uni-config-center目录，点击上传公共模块
3、右键 common 下的 uni-id 目录，点击上传公共模块
4、右键 common 下的 uni-pay 目录，点击上传公共模块
5、右键 common 下的 vk-unicloud 目录，点击上传公共模块
```


### 7、router安装公共模块
```js
在 `uniCloud/cloudfunctions/router` 目录执行命令 （右键router目录，使用命令行窗口打开所在目录）
输入 `npm i` （若执行失败，则再执行一次）
```

```js
注意：第7步的前提是 `router/package.json`内的 `dependencies`内容如下
{
  "dependencies": {
    "config": "file:../common/config",
    "uni-config-center": "file:../../../uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center",
    "uni-id": "file:../../../uni_modules/uni-id/uniCloud/cloudfunctions/common/uni-id",
    "uni-pay": "file:../../../uni_modules/uni-pay/uniCloud/cloudfunctions/common/uni-pay",
    "vk-unicloud": "file:../../../uni_modules/vk-unicloud/uniCloud/cloudfunctions/common/vk-unicloud"
  }
}

```

### 8、上传云函数 `router`（右键router目录，上传部署）


### 9、初始化云数据库 `database/db_init.json`（右键db_init.json文件，初始化云数据库）


## 前端（页面端）安装步骤

`main.js` 引入 `vk-unicloud-page` 库

```js
// main.js
import vk from 'uni_modules/vk-unicloud';
Vue.use(vk);
```

完整 `main.js` 示例

```js
import Vue from 'vue'
import App from './App'
import store from './store'
import config from '@/app.config.js'

// 引入 uView UI
import uView from 'uview-ui';
Vue.use(uView);

// 引入 vk框架前端
import vk from 'uni_modules/vk-unicloud/vk_modules/vk-unicloud-page';
Vue.use(vk);


// 初始化 vk框架
Vue.prototype.vk.init({
  Vue,               // Vue实例
  config,	     // 全局配置
});

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
});
app.$mount();

```

#### 如有疑问，请加群：22466457 关于插件的问题包教包会！

### `动态组件` 依赖 `uview-ui` 
### 集成 `uview-ui` 安装步骤开始 （若不想集成`uview-ui`可跳过此处）

```bash
# npm方式安装
npm i uview-ui
```


1. `main.js`引入uView库
```js
// main.js
import uView from 'uview-ui';
Vue.use(uView);
```

2. `App.vue`引入基础样式(注意style标签需声明scss属性支持)
### 重要：style标签需声明scss属性支持
```css
/* App.vue */
<style lang="scss">
@import "uview-ui/index.scss";
</style>
```

3. `uni.scss`引入全局scss变量文件
```css
/* uni.scss */
@import "uview-ui/theme.scss";
```

4. `pages.json`配置easycom规则(按需引入)

```js
// pages.json
{
  "easycom": {
    "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
  },
  // 此为本身已有的内容
  "pages": [
    // ......
  ]
}
```

### 集成 `uview-ui` 安装步骤结束 （若不想集成`uview-ui`可跳过此处）
