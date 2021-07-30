<template>
  <view>
	<!-- 这里将 /pages/tutorial/tutorial.nvue 页面作为一个组件使用 -->
	<!-- 路径 “/pages/tutorial/tutorial” 转为 “pages-tutorial-tutorial” 组件 -->
    <pages-tutorial-tutorial ref="detailPage"></pages-tutorial-tutorial>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    created(e) {
      //监听自定义事件，该事件由详情页列表的点击触发
      uni.$on('updateDetail', (e) => {
	    // 执行 /pages/detail/detail.nvue页面的load方法
        this.$refs.detailPage.load(e.detail);
      })
    },
    onLoad() {},
    methods: {}
  }
</script>

<style>
</style>
