### 全局Vue 过滤器（由于vue3开始不支持全局过滤器，因此直接调用方法即可）

#### 时间对象、时间戳转字符串
```js
/**
 * 时间对象、时间戳转字符串
 * 最终转成 2020-08-01 12:12:12
 */
{{ vk.pubfn.timeFormat(number) }}
/**
 * 时间对象、时间戳转字符串
 * 最终转成 2020年08月01日
 */
{{ vk.pubfn.timeFormat(number,'yyyy年MM月dd日') }}
```

#### 将时间显示成1秒前、1天前
```js
// 将时间显示成距离当前时间已过了1秒前、1天前
{{ vk.pubfn.dateDiff(time) }}

// 将时间显示成当前时间距离time剩余时间为：3天
{{ vk.pubfn.dateDiff2(time) }}
```

#### 将大数字转中文，如15234120转成1千万
##### 一般用于暂时访问量等数据 
```js
/**
 * 将大数字转中文
 * @description 主要用于展示浏览量等不需要非常精确显示的场景
 * 如:
 * 3210 -> 3千
 * 31210 -> 3万
 * 1523412 -> 1百万
 * 15234120 ->1千万
 */
{{ vk.pubfn.numStr(number) }}
```

#### 金额过滤器
```js
/**
 * 金额转换 100 转成 1 （值时以分为单位，显示时以元为单位）
 */
{{ vk.pubfn.priceFilter(money) }}

// 金额过滤器 - 只显示小数点左边 （值时以分为单位，显示时以元为单位）
{{ vk.pubfn.priceLeftFilter(money) }} 

// 金额过滤器 - 只显示小数点右边（值时以分为单位，显示时以元为单位）
{{ vk.pubfn.priceRightFilter(money) }}
```


#### 百分比过滤器
```js
/**
 * 百分比转换 1 转成 100% 0.1 转成 10%
 */
{{ vk.pubfn.percentageFilter(value) }}
```

#### 计量单位过滤器
```js
/**
 * 大小过滤器 
 */
{{ vk.pubfn.calcSize(value,["B","KB","MB","GB"],1024,3).title }}
```


