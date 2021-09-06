<template>
  <view class="content">
    <u-form :model="form" ref="uForm">
      <u-form-item label="姓名" prop="name"><u-input v-model="form.name" /></u-form-item>
      <u-form-item label="简介" prop="intro"><u-input v-model="form.intro" /></u-form-item>
    </u-form>
    <u-button @click="submit">提交</u-button>

    <button type="default" @click="show = true" style="margin-top: 100rpx;">弹窗</button>
  </view>
</template>

<script>
var that; // 当前页面对象
var vk; // vk依赖
export default {
  data() {
    return {
      show: false,
      form: {
        name: "",
        intro: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            // 可以单个或者同时写两个触发验证方式
            trigger: ["change", "blur"]
          }
        ],
        intro: [
          {
            required: true,
            message: "请输入简介",
            // 可以单个或者同时写两个触发验证方式
            trigger: ["change", "blur"]
          },
          {
            min: 5,
            message: "简介不能少于5个字",
            trigger: "change"
          }
        ]
      }
    };
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onLoad(options) {
    that = this;
    vk = that.vk;
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    click(e) {
      console.log(e);
    },
    change(index) {
      this.current = index;
    },
    submit() {
      this.$refs.uForm.validate(valid => {
        if (valid) {
          console.log("验证通过");
        } else {
          console.log("验证失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
}
.content input {
  height: 46px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 0px 15px;
}
.content button {
  margin-bottom: 15px;
}
.content navigator {
  display: inline-block;
  color: #007aff;
  border-bottom: solid 1px #007aff;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
}
.tips {
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  color: #999999;
  margin-bottom: 20px;
}
.wrap {
  padding: 24rpx;
}

.u-row {
  margin: 40rpx 0;
}

.demo-layout {
  height: 80rpx;
  border-radius: 8rpx;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.bg-purple-dark {
  background: #99a9bf;
}
.list-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 24rpx;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
}
.container {
  padding: 20rpx 60rpx;
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.lists {
  margin: 10px 0;
}
.u-node {
  width: 44rpx;
  height: 44rpx;
  border-radius: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d0d0d0;
}

.u-order-title {
  color: #333333;
  font-weight: bold;
  font-size: 32rpx;
}

.u-order-desc {
  color: rgb(150, 150, 150);
  font-size: 28rpx;
  margin-bottom: 6rpx;
}

.u-order-time {
  color: rgb(200, 200, 200);
  font-size: 26rpx;
}
</style>
