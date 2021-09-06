<template>
  <view class="app">
    <scroll-view :scroll-y="true" style="max-height: 500rpx;">
      <view v-for="(item, index) in data.rows" :key="item._id">
        {{ index + 1 }}: {_id: {{ item._id.substring(20) }}, money: {{ item.money }}} 距您 {{ calcLocationFn(item.position, myPosition) }} km
      </view>
    </scroll-view>
    <view style="margin-bottom: 20rpx;font-size: 36rpx;">当前共有: {{ data.total }} 条记录</view>
    <button style="margin-left: 50rpx;" @click="pageTo('list/list')">查看更多</button>
    <view style="display: flex;">
      <button @click="add()">add(添加一条记录)</button>
      <button @click="adds()">adds(添加多条记录)</button>
    </view>
    <button @click="count()">count(获取集合共有多少条记录)</button>
    <button @click="del()">del(删除集合所有数据)</button>
    <button @click="findById()">findById(根据id获取一条记录)</button>
    <button @click="findByWhereJson()">findByWhereJson(根据条件获取一条记录)</button>
    <view>
      <button @click="getList1()">select(获取多条数据)</button>
      <button @click="selects()">selects(万能连表查询)</button>
    </view>
    <button @click="sample()">随机获取1条记录（一般用于抽奖）</button>
    <button @click="update()">update(修改记录)</button>
    <button @click="updateById()">updateById(修改并返回修改后的数据)</button>
    <button @click="updateAndReturn()">updateAndReturn(原子操作)</button>
    <button @click="groupCount()">groupCount(分组count)</button>
    <view style="display: flex;">
      <button @click="sum()">sum(取总和值)</button>
      <button @click="avg()">avg(取平均值)</button>
    </view>
    <view style="display: flex;">
      <button @click="max()">max(取最大值)</button>
      <button @click="min()">min(取最小值)</button>
    </view>
    <button @click="getGeoList()">geo(地理位置 搜索4公里内)</button>
    <view>{{ JSON.stringify(item) }}</view>
  </view>
</template>

<script>
var that; // 当前页面对象
var vk; // vk依赖
var weixinAuthService;
export default {
  data() {
    return {
      form1: {},
      data: {},
      item: {},
      myPosition: {
        longitude: 120.12792,
        latitude: 30.228932
      }
    };
  },
  onLoad(options) {
    that = this;
    vk = that.vk;
    that.init(options);
  },
  methods: {
    // 页面数据初始化函数
    init(options) {
      that.getList(true);
    },
    pageTo(url) {
      vk.navigateTo(url);
    },
    add() {
      vk.callFunction({
        url: 'template/db_api/pub/add',
        title: '请求中...',
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
          that.getList();
        }
      });
    },
    adds() {
      vk.callFunction({
        url: 'template/db_api/pub/adds',
        title: '请求中...',
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
          that.getList();
        }
      });
    },
    count() {
      vk.callFunction({
        url: 'template/db_api/pub/count',
        title: '请求中...',
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    del() {
      vk.callFunction({
        url: 'template/db_api/pub/del',
        title: '请求中...',
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
          that.getList();
        }
      });
    },
    getFirstId() {
      let id;
      if (that.data && that.data.rows[0] && that.data.rows[0]._id) {
        id = that.data.rows[0]._id;
      }
      return id;
    },
    findById() {
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: 'template/db_api/pub/findById',
        title: '请求中...',
        data: data,
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    findByWhereJson() {
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: 'template/db_api/pub/findById',
        title: '请求中...',
        data: data,
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    getList(loading) {
      vk.callFunction({
        url: 'template/db_api/pub/select',
        title: loading ? '请求中...' : '',
        data: {},
        success(data) {
          that.data = data;
        }
      });
    },
    getList1() {
      vk.callFunction({
        url: 'template/db_api/pub/select',
        title: '请求中...',
        data: {},
        success(data) {
          that.data = data;
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    selects() {
      vk.callFunction({
        url: 'template/db_api/pub/selects',
        title: '请求中...',
        data: {},
        success(data) {
          that.data = data;
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    // 随机取1条记录
    sample() {
      vk.callFunction({
        url: 'template/db_api/pub/sample',
        title: '请求中...',
        data: {},
        success(data) {
          if (data.list && data.list[0]) {
            vk.alert(JSON.stringify(data.list[0]));
          }
        }
      });
    },
    update() {
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: 'template/db_api/pub/update',
        title: '请求中...',
        data: data,
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
          that.getList();
        }
      });
    },
    updateById() {
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: 'template/db_api/pub/updateById',
        title: '请求中...',
        data: data,
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
          that.getList();
        }
      });
    },
    updateAndReturn() {
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: 'template/db_api/pub/updateAndReturn',
        title: '请求中...',
        data: data,
        success(data) {
          vk.alert(`当前money的值：${data.info.money} \n 提示：此为原子操作，可以应用于类似id自增，数字自减等业务。`);
          that.item = data;
          that.getList();
        }
      });
    },
    groupCount() {
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: 'template/db_api/pub/groupCount',
        title: '请求中...',
        data: data,
        success(data) {
          vk.alert(JSON.stringify(data.rows));
          that.item = data;
          that.getList();
        }
      });
    },
    sum() {
      vk.callFunction({
        url: 'template/db_api/pub/sum',
        title: '请求中...',
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    avg() {
      vk.callFunction({
        url: 'template/db_api/pub/avg',
        title: '请求中...',
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    max() {
      vk.callFunction({
        url: 'template/db_api/pub/max',
        title: '请求中...',
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    min() {
      vk.callFunction({
        url: 'template/db_api/pub/min',
        title: '请求中...',
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    getGeoList(name) {
      vk.callFunction({
        url: 'template/db_api/pub/geo',
        title: '请求中...',
        data: {},
        success(data) {
          that.data = data;
        }
      });
    },
    calcLocation(mbPosition = {}, myPosition = {}) {
      if (myPosition.longitude == undefined || myPosition.latitude == undefined) {
        return '';
      }
      //console.log(mbPosition,myPosition);
      var res = {};
      var m = 0;
      var km = 0;
      var lng1 = myPosition.longitude;
      var lat1 = myPosition.latitude;
      var lng2 = mbPosition.longitude;
      var lat2 = mbPosition.latitude;
      m = (Math.sqrt((lng1 - lng2) * (lng1 - lng2) + (lat1 - lat2) * (lat1 - lat2)) / 180) * Math.PI * 6300000;
      m = m.toFixed(1);
      km = (m / 1000).toFixed(2);
      if (m >= 1000000) {
        res.str = '很遥远';
      } else if (m >= 1000) {
        res.str = km + ' km';
      } else {
        res.str = m + ' m';
      }
      res.m = m;
      res.km = km;
      return res;
    },
    calcLocationFn(mbPosition = {}, myPosition = {}) {
      return that.calcLocation(mbPosition, myPosition).km;
    }
  }
};
</script>

<style>
.app {
  padding: 15px;
}
.app input {
  height: 46px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 0px 15px;
}
.app button {
  margin-bottom: 15px;
  font-size: 32rpx;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
}
.app navigator {
  display: inline-block;
  color: #007aff;
  border-bottom: solid 1px #007aff;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
}
</style>
