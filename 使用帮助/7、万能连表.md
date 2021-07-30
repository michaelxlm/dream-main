### 场景1 ：1张主表多张副表
##### 主表：uni-id-users （用户表）
##### 副表：order （用户订单表）
##### 副表：vip （会员卡表）
##### 以下代码作用是：用一条聚合查询语句，查询前10个用户的信息，并查询他们的最新10个订单记录表，再查询他们的VIP信息
```js

res = await vk.baseDao.selects({
  dbName: "uni-id-users",
  getCount: false,
  pageIndex: 1,
  pageSize: 10,
  // 主表where条件
  whereJson: {

  },
  // 主表字段显示规则
  fieldJson: {
    token: false,
    password: false,
  },
  // 主表排序规则
  sortArr: [{ "name": "_id","type": "desc" }],
  // 副表列表
  foreignDB: [
    {
      dbName: "order",
      localKey:"_id",
      foreignKey: "user_id",
      as: "orderList",
      limit: 10,
      // 副表where条件
      whereJson: {},
      // 副表字段显示规则
      fieldJson: {},
      // 副表排序规则
      sortArr: [{ "name": "time","type": "desc" }],
    },
    {
      dbName: "vip",
      localKey:"_id",
      foreignKey: "user_id",
      as: "vipInfo",
      limit: 1, // 当limit = 1时，以对象形式返回，否则以数组形式返回
    }
  ]
});

```

### 场景2 ：1张主表多张副表,同时副表也有多张副表
##### 主表：opendb-mall-comments （评论表）
##### 副表：uni-id-users （用户表）
##### 副表的副表：opendb-mall-orders（用户订单表）
##### 以下代码作用是：用一条聚合查询语句，查询前10个评论信息，并查询评论的发布者信息，再查询他们各自最新的3个订单信息
```js
res = await vk.baseDao.selects({
  dbName:"opendb-mall-comments",
  pageIndex: 1,
  pageSize: 10,
  // 副表列表
  foreignDB:[
    {
      dbName:"uni-id-users",
      localKey:"user_id",
      foreignKey:"_id",
      as:"userInfo",
      limit:1,
      foreignDB:[
        {
          dbName:"opendb-mall-orders",
          localKey:"_id",
          foreignKey:"user_id",
          as:"orderList",
          limit:3,
          sortArr:[{ "name":"_add_time", "type":"desc" }],
        },
      ]
    }
  ]
});

```
### 场景3 ： 需要查询同时满足主表和副表的条件，即副表不满足条件，则主表记录也不获取
##### 主表：opendb-mall-comments （评论表）
##### 副表：uni-id-users （用户表）
##### 以下代码作用是：用一条聚合查询语句，查询前10条女性用户的评论信息
```js
res = await vk.baseDao.selects({
  dbName:"opendb-mall-comments",
  pageIndex: 1,
  pageSize: 10,
  // 副表列表
  foreignDB:[
    {
      dbName:"uni-id-users",
      localKey:"user_id",
      foreignKey:"_id",
      as:"userInfo",
      limit:1
    }
  ],
  lastWhereJson:{
    "userInfo.gender" : 2
  }
});
```

### 场景4 ： 连表查询时需要按照离给定点从近到远输出（地理位置经纬度）。
##### 主表：vk-test （地理位置测试表）
##### 副表：uni-id-users （用户表）
##### 以下代码作用是：用一条聚合查询语句，查询前10条离我最近的记录
```js
res = await vk.baseDao.selects({
  dbName: "vk-test",
  getCount: true,
  pageIndex: 1,
  pageSize: 10,
  // 主表where条件
  whereJson: {
    location: _.geoNear({
      geometry: new db.Geo.Point(120.12792, 30.228932),  // 点的地理位置
      maxDistance: 4000,         // 选填，最大距离，米为单位
      minDistance: 0,            // 选填，最小距离，米为单位
      distanceMultiplier: 1,     // 返回时在距离上乘以该数字 1代表米 100 代表厘米 0.001 代表千米
      distanceField: "distance", // 输出的每个记录中 distance 即是与给定点的距离
    })
  },
  // 副表列表
  foreignDB: [{
    dbName: "uni-id-users",
    localKey: "user_id",
    foreignKey: "_id",
    as: "userInfo",
    limit: 1
  }]
});
```

### 场景5 ： 连表查询，主表外键是数组（id数组），查询出数组内的每个记录详情
##### 主表：uni-id-users （用户表）
##### 副表：uni-id-roles （角色表）
##### 以下代码作用是：用一条聚合查询语句，查询前10个用户信息（同时带出角色列表roleList）
```js
res = await vk.baseDao.selects({
  dbName: "uni-id-users",
  getCount: true,
  pageIndex: 1,
  pageSize: 10,
  // 主表where条件
  whereJson: {

  },
  // 副表列表
  foreignDB: [{
    dbName: "uni-id-roles",
    localKey: "role",
    localKeyType: "array",
    foreignKey: "role_id",
    as: "roleList",
    limit: 500
  }]
});
```

### 场景6 ：分组查询
##### 主表：你的消费记录表或订单表
##### 副表：uni-id-users （用户表）
##### 以下代码作用是：用一条聚合查询语句，查询排行榜前10名用户消费金额和用户信息
```js
res = await vk.baseDao.selects({
  dbName: "你的消费记录表或订单表",
  pageIndex: 1,
  pageSize: 10,
  // 主表where条件
  whereJson: {

  },
  groupJson: {
    _id: "$user_id", // _id是分组id，这里指按user_id字段进行分组
    user_id: _.$.first("$user_id"), // 这里是为了把user_id原样输出
    payment_amount: _.$.sum("$payment_amount"), // sum求和支付金额
  },
  sortArr: [{ name: "payment_amount",type: "desc" }], // 对分组后的结果进行排序
  // 副表列表
  foreignDB: [{
    dbName: "uni-id-users",
    localKey: "user_id",
    foreignKey: "_id",
    as: "userInfo",
    limit: 1
  }],
  // 最后的where，主要用于对分组后的结果再进行筛选 如：筛选金额大于1000才能上榜
  lastWhereJson:{
    payment_amount:_.gt(1000)
  }
});
```
