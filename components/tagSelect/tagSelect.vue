<template>
	<view>
		<u-popup v-model="show" safe-area-inset-bottom="true" mode="bottom" height="90%" @close="close()">
			<!-- 页面内容开始 -->
			<view class="vk-search-view u-p-t-32">
				<!--头部开始 -->
				<view class="list-search">
					<u-search :placeholder="$t('main.serchPlaceholder')" v-model="form1.searchvalue"
						:show-action="false" input-align="center" shape="square" @search="onSearch">
					</u-search>
				</view>
				<view class="list-head-desc-text">共<text>{{data.total}}</text>条记录</view>
				<!--头部结束 -->
				<!--无内容时 -->
				<view v-if="data.list.length == 0&&form1.searchvalue===''" style="padding: 40% 0 80% 0;">
					<u-empty v-if="form1.searchvalue===''" text="暂无内容" mode="list"></u-empty>
				</view>
				<view v-if="data.list.length == 0&&form1.searchvalue!==''">
					<u-alert-tips @click="addItemBtn(form1.searchvalue)" type="warning" :title="form1.searchvalue"
						:description="0"></u-alert-tips>
				</view>
				<!--有内容时开始-->
				<view v-if="vk.pubfn.isNotNull(data.list)">
					<u-alert-tips v-for="(item) in data.list" :key="item._id" :index="item._id" @click="itemBtn(item)"
						type="warning" :title="item.text" :description="item.heatNumber"></u-alert-tips>
					<!-- 加载更多 -->
					<u-loadmore :status="data.loadmore" bg-color="#f8f8fa" :margin-bottom="30" @loadmore="nextPage" />
				</view>
				<!--有内容时结束-->
			</view>
		</u-popup>
	</view>
</template>

<script>
	var that; // 当前页面对象
	var vk;
	export default {
		name: "tagSelect",
		props: {
			show: {
				type: Boolean,
				default () {
					return false;
				}
			},
			list: {
				type: Array,
				default () {
					return [];
				}
			},
			tagSelectClose: {
				type: Function,
				default: undefined
			},
			tagSelectItem: {
				type: Function,
				default: undefined
			}
		},
		watch: {
			show: {
				handler(oldVal, newVal) {
					console.log('show')
					console.log(this.show)
					if (this.show) {
						this.init()
					}

				},
				deep: true
			}
		},
		mounted() {
			that = this
			vk = this.vk
		},
		data() {
			return {
				url: "client/general/pub/getList", // 获取list数据的云函数请求路径
				// init请求返回的数据
				data: {
					list: [], // 列表数据
					pageKey: true, // 是否还能加载下一页
					loadmore: "loading",
					total: 0
				},
				// 表单请求数据
				form1: {
					mineShow: false,
					dbName: "tags",
					searchvalue: "",
					pageIndex: 1, //当前页码
					pageSize: 10, //每页显示数量
				},
			}
		},
		methods: {
			// 页面数据初始化函数
			init() {
				that.getList();
			},
			pageTo(path) {
				vk.navigateTo(path);
			},
			// 查询list数据
			getList(obj = {}) {
				vk.pubfn.getListData({
					that: that,
					url: that.url,
					success: obj.success
				});
			},
			// 加载下一页数据
			nextPage() {
				if (that.data.loadmore == "loadmore") {
					that.data.loadmore = "loading";
					that.form1.pageIndex++;
					that.getList();
				}
			},
			// 搜索
			onSearch(e) {
				that.form1.pageIndex = 1;
				that.data.pageKey = true;
				that.getList();
			},
			// 添加标签
			addItemBtn(text) {
				vk.callFunction({
					url: 'client/general/kh/add',
					title: '请求中...',
					data: {
						addJson:{
							text: text,
							heatNumber: 1,
						},
						dbName: "tags",
						mainDBname:"tw",
						type:"tags"
					},
					success(res) {
						that.$emit('tagSelectItem', {
							_id: res.addRes,
							text: text
						})
					},
					fail: (err) => {
						console.error(err)
					}
				});
			},
			// 列的点击事件
			itemBtn(item) {
				that.$emit('tagSelectItem', {
					_id: item._id,
					text: item.text
				})
			},
			close() {
				that.$emit('tagSelectClose')
			}
		}
	}
</script>

<style lang="scss">

</style>
