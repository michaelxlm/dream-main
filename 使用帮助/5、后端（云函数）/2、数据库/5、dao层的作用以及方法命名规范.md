## `dao`层的作用

#### 1、复用数据库API，减少重复代码，同时可以达到即使后面修改了数据库字段或数据库名称，也只需要修改少量dao层的代码即可。
#### 2、`dao`层是积木，而`service`层是利用这些积木来搭建你想要的乐园。
#### 3、理论上`dao`层的代码开发是可以脱离业务的，即使业务需求还不是很明确，只要数据库表名已确定，即可编写dao层。dao层提供的是数据库原子性操作。

### 注意：`dao`层尽量只写跟数据库交互的代码，少写业务逻辑代码，业务逻辑应写在 `service` 层
## `dao`层与 `baseDao`的区别
#### `baseDao`相当于`万能dao`，他是最基础的零件，而`dao`层是利用零件组装不同形状和规则的积木，供 `service` 层使用。

## 前缀规范（参考）


#### `查单条记录`: 获取单条记录的方法用 `find` 或 `get` 作为前缀
#### `查多条记录`: 获取多个对象的方法用 `list` 作为前缀
#### `统计记录数量`: 获取统计行数的方法用 `count` 作为前缀
#### `新增` : 新增数据的方法用 `add` 或 `save` 作为前缀
#### `删除` : 删除数据的方法用 `delete` 或 `remove` 作为前缀
#### `修改` : 修改的方法用 `update` 作为前缀

## 前缀 + 表名 + 条件类型（适用于1个dao可能操作多张表的情况）
#### 如：
#### 根据`用户ID`获取用户信息 `findUserById`
#### 根据`用户手机号`获取用户信息 `findUserByMobile`
#### 根据`不定性条件`获取用户信息 `findUserByWhereJson`

#### 根据`用户状态`获取用户列表 `listUserByStatus`
#### 根据`不定性条件`获取用户列表 `listUserByWhereJson`

#### 添加用户 `addUser`
#### 删除用户，根据用户ID `deleteUserById`
#### 修改用户，根据用户ID `updateUserById`
#### 批量修改用户，根据自定义条件`updateUserByWhereJson`
#### 批量删除用户，根据自定义条件`deleteUserByWhereJson`

## 前缀 + 条件类型（适用于1个dao只操作1张表的情况）
#### 如：
#### 根据`ID`获取一条信息 `findById`
#### 根据`手机号`获取一条信息 `findByMobile`
#### 根据`不定性条件`获取一条信息 `findByWhereJson`

#### 根据`用户状态`获取多条信息 `listByStatus`
#### 根据`不定性条件`获取多条信息 `listByWhereJson`

#### 添加 `add`
#### 删除，根据ID `deleteById`
#### 修改，根据ID `updateById`
#### 批量修改，根据自定义条件`updateByWhereJson`
#### 批量删除，根据自定义条件`deleteByWhereJson`

#### PS：后面会出一个根据表名和表别名自动生成dao层基础代码的功能。