### 前后端通用
```js

/**
 * 防抖函数
 * 防抖原理：一定时间内，只有最后一次或第一次调用,回调函数才会执行
 * @param {Function}  fn 要执行的回调函数 
 * @param {Number}    time 延时的时间
 * @param {Boolean}   isImmediate 是否立即执行 默认true
 * @param {String} timeoutName 定时器ID
 * @return null
 */
vk.pubfn.debounce(function() {
	
}, 1000);

/**
 * 节流函数
 * 节流原理：在一定时间内，只能触发一次
 * @param {Function} fn 要执行的回调函数 
 * @param {Number} time 延时的时间
 * @param {Boolean} isImmediate 是否立即执行
 * @param {String} timeoutName 定时器ID
 * @return null
 */
vk.pubfn.throttle(function() {
	
}, 1000);

/**
 * 数组结构转树形结构
 * @params {Array} arrayData  数据源
 * @params {Object} treeProps 树结构配置
 * { id:"_id", parent_id:"parent_id", children:"children",need_field:["_id","name"],deleteParentId:true }
 */
vk.pubfn.arrayToTree(arrayData,{
  id:"_id", 
  parent_id:"parent_id", 
  children:"children"
});
/**
 * 树形结构转数组结构
 * @params {Array} treeData  数据源
 * @params {Object} treeProps 树结构配置 
 * { id:"_id", parent_id:"parent_id", children:"children", deleteChildren:true }
 */
vk.pubfn.treeToArray(treeData,{
  id:"_id",
  parent_id:"parent_id",
  children:"children"
});

/**
 * 日期格式化
 * @params {Date || Number} date 需要格式化的时间
 * @params {Number} targetTimezone 时区 默认东8区 正数代表东 负数代表西
 */
vk.pubfn.timeFormat(new Date(),"yyyy-MM-dd hh:mm:ss",targetTimezone);

/**
 * 日期对象转换(云函数端会自动转成东八区时间)
 * @params {Date || Number} date 需要转换的时间
 * @params {Number} type 转换方式
 * @params {Number} targetTimezone 时区 默认东8区 正数代表东 负数代表西
 * type = 0 返回 2020-08-03 12:12:12
 * type = 1 返回 20200803121212
 * type = 2 返回 { YYYY, MM, DD, hh, mm, ss }
 */
vk.pubfn.getFullTime(new Date(),2,targetTimezone);


/**
 * 获取时间范围
 * @params {Date} date 日期对象 可以指定时间计算节点，默认使用当前时间进行计算
 * @params {Number} targetTimezone 时区 默认东8区 正数代表东 负数代表西
 * 返回的是时间戳(防止时区问题)
 * 返回数据如下：
 {
   todayStart 今日开始时间
   todayEnd   今日结束时间
   today12End 今日上午结束时间
   monthStart 本月开始时间
   monthEnd   本月结束时间
   yearStart  本年开始时间
   yearEnd    本年结束时间
   weekStart  本周开始时间
   weekEnd    本周结束时间
   now        现在的时间点(含月年日时分秒)
   months     本年度每月的开始和结束时间 months[1] 代表1月
 }
 */
vk.pubfn.getCommonTime(new Date(),targetTimezone);

/**
 * 检测文本是否满足指定格式
 * @params {String} str 需要检测的文本
 * @params {String} type 检测类型
 * 包含 
 * mobile 手机号码
 * tel 座机
 * card 身份证
 * mobileCode 6位数字验证码
 * username 账号以字母开头，长度在6~18之间，只能包含字母、数字和下划线
 * pwd 密码长度在6~18之间，只能包含字母、数字和下划线
 * payPwd 支付密码 6位纯数字
 * postal 邮政编码
 * QQ QQ号
 * email 邮箱
 * URL 网址
 * IP IP地址
 * date 日期 2020-08-03
 * time 时间 12:12:12
 * dateTime 日期+时间 2020-08-03 12:12:12
 * number 数字
 * english 英文
 * chinese 中文
 * HTML HTML标记
 */
vk.pubfn.test(str, type);

/**
 * 对象属性拷贝(浅拷贝)
 * @description 将 obj2 的属性赋值给 obj1 (如果obj1中有对应的属性,则会被obj2的属性值覆盖)
 * @params {Object} 	obj1
 * @params {Object} 	obj2
 */
vk.pubfn.objectAssign(obj1, obj2);

/**
 * 复制一份对象-没有映射关系
 * @description 主要用于解除映射关系（不支持克隆函数）
 * @params {Object} 	obj
 */
let newObj = vk.pubfn.copyObject(obj);

/**
 * 深度克隆一个对象-没有映射关系
 * @description 主要用于解除映射关系（支持克隆函数）
 * @params {Object} 	obj
 */
let newObj = vk.pubfn.deepClone(obj);
/**
 * 两个(元素为对象)的数组合并,并去除重复的数据
 * @params	{Array} 	arr1 	第一个数组(arr1和aar2没有顺序要求)
 * @params	{Array} 	arr2 	第二个数组
 * @params	{String} 	flag 	判断标识,默认用id来判断,若flag传-1,代表不去除重复数据
 */
let arr = vk.pubfn.arr_concat(arr1, arr2, "_id");

/**
 * 自动根据字符串路径获取对象中的值支持.和[] , 且任意一个值为undefined时,不会报错,会直接返回undefined
 * @params	{Object} dataObj 数据源
 * @params	{String} name 支持a.b 和 a[b]
 * @params	{String} defaultValue undefined时的默认值
 */
let data = vk.pubfn.getData(dataObj, name, defaultValue);

// 若在vue模板中使用，可以使用简写法 {{ $getData(userInfo, "a.b.c.d[1].a", '默认值') }}

/**
 * 自动根据字符串路径设置对象中的值 支持.和[]
 * @params	{Object} dataObj 数据源
 * @params	{String} name 支持a.b 和 a[b]
 * @params	{String} value 值
 */
 vk.pubfn.setData(dataObj, name, value);

/**
 * 检测参数是否为空 其中 undefined、null、{}、[]、"" 均为空值  true 空值  false 有值
 */
vk.pubfn.isNull(value);

/**
 * 检测参数是否无值 结果与 vk.pubfn.isNull 相反
 */
vk.pubfn.isNotNull(value);

/**
 * 检测所有参数 - 是否至少有一个为空
 */
vk.pubfn.isNullOne(value1,value2,value3);

/**
 * 检测所有参数 - 是否全部为空
 */
vk.pubfn.isNullAll(value1,value2,value3);

/**
 * 检测所有参数 - 是否全部都不为空
 */
vk.pubfn.isNotNullAll(value1,value2,value3);

/**
 * 检测整个对象是否没有一个属性是空值,如果有空值,则返回首个是空值的属性名
 */
let nullKey = vk.pubfn.isNullOneByObject({ title, content, avatar });
if (nullKey) return { code: -1, msg: `${nullKey}不能为空` };

/**
 * 获取对象数组中的某一个item,根据指定的键名和键值
 * @description 主要用于在一个对象数组中快速获取 _id = 1 的对象
 * @params	{Array} list 数据源
 * @params	{String} key 键名
 * @params	{String} value 键值
 */
vk.pubfn.getListItem(list, key, value);

/**
 * 获取对象数组中某个元素的index,根据指定的键名和键值
 * @description 主要用于在一个对象数组中快速获取 _id = 1 的index
 * @params	{Array} list 数据源
 * @params	{String} key 键名
 * @params	{String} value 键值
 */
vk.pubfn.getListIndex(list, key, value);

/**
 * 获取对象数组中某个元素的index,根据指定的键名和键值
 * @description 主要用于在一个对象数组中快速获取 _id = 1 的index
 * @params	{Array} list 数据源
 * @params	{String} key 键名
 * @params	{String} value 键值
 */
vk.pubfn.getListItemIndex(list, key, value);

/**
 * 数组转对象 - 将对象数组转成json
 * 如[{"_id":"001","name":"name1","sex":1},{"_id":"002","name":"name2","sex":2}]
 * 转成
 * {"001",{"_id":"001","name":"name1","sex":1},"002":{"_id":"002","name":"name2","sex":2}}
 */
vk.pubfn.arrayToJson(list, "_id");

/**
 * 从数组中提取指定字段形式新的数组
 * 如[{"_id":"001","name":"name1","sex":1},{"_id":"002","name":"name2","sex":2}]
 * 提取_id字段转成
 * ["001","002"]
 */
vk.pubfn.arrayObjectGetArray(list, "_id");
/**
 * 产生指定位数的随机数(支持任意字符,默认纯数字)
 * @params	{Number} length 数据源
 * @params	{String} str 指定的字符串中随机范围
 * @params	{Array} arr 产生的随机数不会和此数组的任意一项重复
 */
vk.pubfn.random(6);
vk.pubfn.random(6, "abcdefghijklmnopqrstuvwxyz0123456789");
vk.pubfn.random(1,"123456789",["1","2","3"]);

/**
 * 将手机号,账号等隐藏中间字段
 * @params {String} str   需要转换的字符串
 * @params {Number} first 前面显示的字符数量
 * @params {Number} last  后面显示的字符数量
 */
vk.pubfn.hidden(str, first, last);

/**
 * 判断常量数组A是否至少有一个元素在常量数组B中存在(两数组有交集)
 * @params {Array} arr1 数组A
 * @params {Array} arr2 数组B
 */
vk.pubfn.checkArrayIntersection(arr1, arr2);

/**
 * 获得相对当前周addWeekCount个周的起止日期
 * @params {Number} addWeekCount  默认0 (0代表本周 为-1代表上周 为1代表下周以此类推 为2代表下下周)
 */
vk.pubfn.getWeekStartAndEnd(0);

/**
 * 计算运费
 *  @params {Object} freightsItem 运费模板
 {
   first_weight             Number 首重 单位KG,
   first_weight_price       Number 首重 首重价格
   continuous_weight        Number 续重 单位KG
   continuous_weight_price  Number 续重价格
   max_weight               Number 重量达到此值时,会多计算首重的价格,并少一次续重的价格 倍乘(相当于拆分多个包裹)
 }
 * @params {Number} weight 运费重量
 */
vk.pubfn.calcFreights(freightsItem, weight);


/**
 * 从一个对象中取多个属性,并生成一个全新的对象
 * @params {Object} obj 对象
 * @params {Array<String>} keys 键名数组
 */
vk.pubfn.getNewObject(obj, keys);

/**
 * 对象删除指定的字段,返回新的对象
 * @params {Object} data  操作对象
 * @params {Array<String>} deleteKeys 需要删除的键名(数组形式)
 */
vk.pubfn.deleteObjectKeys(data, deleteKeys);

/**
 * 判断是否是闰年
 * @params {Number | Date} year 需要计算的年份或时间,默认使用当前时间的年份
 */
vk.pubfn.timeUtil.isLeapYear(2021);

/**
 * 判断是否是清明节
 * @params {Object} date 时间对象 
 */
vk.pubfn.timeUtil.isQingming(new Date());
/**
 * 单位进制换算
 * length	换算前大小
 * arr		进制的数组,如["B","KB","MB","GB"]
 * ary		进制,如KB-MB-GB,进制1024
 * precision	数值精度
 */
vk.pubfn.calcSize(length,["B","KB","MB","GB"],1024,3);
```

### 前端专属
```js
/**
 * 将时间显示成1秒前、1天前
 * @description 主要用于 文章最后回复时间: 1分钟前
 * @params {String || Number} 	startTime	需要计算的时间 如文章最后回复时间
 */
vk.pubfn.dateDiff(startTime);

/**
 * 将时间显示成1秒、1天
 * @description 主要用于 到期时间剩余 : 3天 这样的场景
 * @params {String || Number} endTime	需要计算的时间 如到期时间
 */
vk.pubfn.dateDiff2(endTime);

/**
 * 将大数字转中文
 * @description 主要用于展示浏览量等不需要非常精确显示的场景
 * 如:
 * 3210 -> 3千
 * 31210 -> 3万
 * 1523412 -> 1百万
 * 15234120 ->1千万
 * @params {Number} n 需要转换的数字
 */
vk.pubfn.numStr(n);

/**
 * 金额显示过滤器（已分为单位，将100 转成 1
 * @params {Number} money 金额
 */
vk.pubfn.priceFilter(money);

/**
 * 手机端长列表分页加载数据
 * @description 主要用于解除映射关系
 * @params {Vue页面对象} that 页面数据对象this
 * @params {String} url 请求地址(云函数路径)
 * @params {String} listName 后端返回的list数组的字段名称,默认rows
 * @params {Object} data 额外数据
 * @params {function} dataPreprocess	数据预处理函数
 *
 * 代码示例
  
 */
vk.pubfn.getListData({
    that : this,
    url : "db_test/pub/select",
    listName : "rows",
    data : {
      a : 1
    },
    dataPreprocess : function(list){
      return list;
    }
});

/**
 * 动态组件数据获取
 * @description 主要用于动态组件的数据获取
 * @params {Vue页面对象} that 页面数据对象this
 * @params {String}     ids  动态数据组件的ID
 *
 */

 // 代码示例
 // 如:放置一个动态数据的 公告组件 和 一个轮播图组件
 // view  核心:自定义组件接收一个 Object 类型的属性 datas
```
```html
  <vk-u-notice-bar :datas='componentsDynamic["notice-bar-01"]'></vk-u-notice-bar>
  <vk-u-swiper :datas='componentsDynamic["index-swiper-01"]' :custom-datas='{
    "height":600,
  }'></vk-u-swiper>
```
```js
// 在页面数据变量中新增 componentsDynamic
  data() {
    return {
      // 动态组件数据集合
      componentsDynamic:{}
    }
  }
// 在页面初始化方法中执行下面的函数
this.vk.pubfn.getComponentsDynamicData({
  that : this,
  ids : ["notice-bar-01","index-swiper-01"]
});

/**
 * 获取当前页面实例
 * 返回数据
 * fullPath 当前打开页面的完整路径(带页面参数)
 * options  当前打开页面的参数
 * route    当前打开页面的路径(不含参数)
 * $vm      当前打开页面的vue实例
 */
vk.pubfn.getCurrentPage();

/**
 * 文件转base64
 */
vk.pubfn.fileToBase64({
  file:res.tempFiles[0],
  success:function(base64){

  }
});

/**
 * base64转文件
 */
vk.pubfn.base64ToFile({
  base64:base64,
  success:function(file){

  }
});

```