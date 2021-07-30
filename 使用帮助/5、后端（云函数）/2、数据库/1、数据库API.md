
## `vk.baseDao`数据库API
### 调用示例在`router/service/db_test/pub/`目录下
### 演示页面在`pages/db-test/db-test`

### `vk.baseDao`数据库API部分调用示例展示

#### 增
```js
// 单条记录增加
let id = await vk.baseDao.add({
  dbName:"vk-test",// 表名
  dataJson:{ // 需要新增的数据 json格式
    money: Math.floor(Math.random() * 9 + 1)
  }
});

// 批量增加
let ids = await vk.baseDao.adds({
  dbName:"vk-test",// 表名
  dataJson:[
    { money: Math.floor(Math.random() * 9 + 1) },
    { money: Math.floor(Math.random() * 9 + 1) }
  ]
});
```

#### 删
```js
//根据主键ID删除指定数据 对应的传统sql语句: delete from vk-test where _id = 1
// 返回被删除的记录条数
await vk.baseDao.deleteById({
  dbName:"vk-test",
  id:1
});

// 批量删除 对应的传统sql语句: delete from vk-test where money = 1
// 返回被删除的记录条数
await vk.baseDao.del({
  dbName:"vk-test",// 表名
  whereJson:{ // 条件
    money:1
  }
});
```

#### 改
```js
// 根据主键ID修改指定数据，并返回修改后的数据对象
let newInfo = await vk.baseDao.updateById({
  dbName:"vk-test",
  id:_id,
  dataJson:{
    money:1
  },
  getUpdateData:true, // 去掉getUpdateData，则不会返回修改后的数据对象
});

// 批量修改 对应的传统sql语句: update vk-test set money = money-1 where _id="5f3a14823d11c6000106ff5c" and money > 0
// 返回被修改的记录条数
let num = await vk.baseDao.update({
  dbName:"vk-test", // 表名
  whereJson:{ // 条件
    _id:"5f3a14823d11c6000106ff5c",
    money:_.gt(0)
  },
  dataJson:{ // 需要修改的数据
    money:_.inc(-1)
  }
});
```

#### 查
#### 查单条记录
```js
// 根据id获取单条记录 对应的传统sql语句: select * from vk-test where _id = "5f3a125b3d11c6000106d338"
let info = await vk.baseDao.findById({
  dbName:"vk-test",// 表名
  id:"5f3a125b3d11c6000106d338" // id
});

// 根据条件获取单条记录 对应的传统sql语句:  select * from vk-test where _id = "5f3a125b3d11c6000106d338"
let info = await vk.baseDao.findByWhereJson({
  dbName:"vk-test",// 表名
  whereJson:{ // 条件
    _id:"5f3a125b3d11c6000106d338",
  }
});
```
#### 查多条记录
```js
let res = await vk.baseDao.select({
  dbName:"vk-test", // 表名
  getMain:true,// 是否只返回rows数据
  pageIndex:1, // 当前第几页
  pageSize:20, // 每页条数
  whereJson:{ // 条件
    money:_.gte(0)  // 金额大于0
  }
});
```

#### 分页查询
```js
let res = await vk.baseDao.select({
  dbName:"vk-test", // 表名
  getCount:false,  // 是否同时返回总数(会执行count)
  pageIndex:1, // 当前第几页
  pageSize:20, // 每页条数
  whereJson:{ // 条件
    money:_.gte(0)  // 金额大于0
  },
});
```

#### count（获取满足条件的记录总条数）
```js
// 获取记录总条数 对应的传统sql语句:  select count(*) from vk-test
let num = await vk.baseDao.count({
  dbName:"vk-test",// 表名
  whereJson:{ // 条件
    
  }
});
```

#### 判断用户名是否存在
```js
// 判断用户名是否存在
let num = await vk.baseDao.count({
  dbName:"uni-id-users",// 表名
  whereJson:{ // 条件
    username: "admin"
  }
});
if(num>0){
  // 用户名存在
}
```


#### 在设置了昵称唯一时，判断此昵称是否允许修改
```js
// 判断用户名是否存在
let uid = "当前要修改的用户的_id";
let num = await vk.baseDao.count({
  dbName:"uni-id-users",// 表名
  whereJson:{ // 条件
    _id: _.neq(uid), // 这里排除掉自己
    nickname: "我要修改的昵称"
  }
});
if(num>0){
  // 用户名存在
}
```


#### sum求和
```js
// sum求和 对应的传统sql语句: select sum(money) from vk-test
let sum = await vk.baseDao.sum({
  dbName:"vk-test", // 表名
  fieldName:"money", // 需要求和的字段名
  whereJson:{ // 条件
    
  }
});
```
#### 随机取N条数据
```js
// sum求和 对应的传统sql语句: select sum(money) from vk-test
let list = await vk.baseDao.sample({
  dbName:"vk-test", // 表名
  size:1, // 随机条数
  whereJson:{ // 条件
    
  }
});
```

### vk.baseDao.selects 『万能连表查询』（支持多张表，支持副表与副表的副表连接）
[点击查看『万能连表查询』](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3028633&doc_id=975983)

### vk.baseDao.getTableData 『万能表格查询』（支持连表）
[点击查看『万能表格查询』](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=4078442&doc_id=975983)

### 数据库操作常见问题(如排序、显示部分字段、and、or、模糊查询、字段别名等等)
[点击查看『数据库操作常见问题』](https://gitee.com/vk-uni/vk-uni-cloud-router/wikis/pages?sort_id=3686279&doc_id=975983)

#### ...更多其他可以下载插件体验
