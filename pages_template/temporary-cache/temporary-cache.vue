<template>
	<view class="app">
		<!-- 页面内容开始 -->
		<input type="text" v-model="form1.key" placeholder="缓存key" />
		<input type="text" v-model="form1.value" placeholder="缓存value" />
		<input type="text" v-model.number="form1.second" placeholder="缓存时间(单位秒)" />
		<view>这里为了做演示，把缓存的获取保存删除等写到了前端调用，正常应该只在云函数端使用。</view>
		<u-table>
			<u-tr class="u-tr">
				<u-th class="u-th">缓存键名</u-th>
				<u-th class="u-th">缓存键值</u-th>
				<u-th class="u-th">过期时间</u-th>
			</u-tr>
			<u-tr class="u-tr" v-for="(item,key) in data.rows" :key="key">
				<u-td class="u-td">{{key}}</u-td>
				<u-td class="u-td">{{item.value}}</u-td>
				<u-td class="u-td">{{item.expired == 0 ? '跟随云函数周期' : item.expired}}</u-td>
			</u-tr>
		</u-table>
		<button type="default" @tap="temporaryCache('set')">缓存 - 保存</button>
		<button type="default" @tap="temporaryCache('get')">缓存 - 获取</button>
		<button type="default" @tap="temporaryCache('del')">缓存 - 删除</button>
		<!-- <button type="default" @tap="temporaryCache('clear')">缓存 - 清空</button> -->
		<button type="default" @tap="getAll()">缓存 - 获取所有缓存</button>
		<!-- 页面内容结束 -->
	</view>
</template>

<script>
	var that;											// 当前页面对象
	var vk;												// vk依赖
	export default {
		data() {
			// 页面数据变量
			return {
				// init请求返回的数据
				data:{
					rows:[]
				},
				// 表单请求数据
				form1:{
					key:"",
					value:"",
					second:""
				}
			}
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options = {}) {
			that = this;
			vk = that.vk;
			that.options = options;
			that.init(options);
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady(){
			
		},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {
			
			
		},
		// 监听 - 页面每次【隐藏时】执行(如：返回)
		onHide() {
			
			
		},
		// 监听 - 页面创建时
		created(){
			that = this;
			vk = that.vk;
		},
		// 函数
		methods: {
			// 页面数据初始化函数
			init(options){
				that.getAll();
			},
			getAll(){
				let form1 = that.form1;
				form1.mode = "getAll";
				vk.callFunction({
					url: 'template/test/pub/temporaryCache',
					title:'',
					data:form1,
					success:function(data) {
						that.data.rows = data.value;
					}
				});
			},
			temporaryCache(mode){
				let form1 = that.form1;
				form1.mode = mode;
				if(["get","set","del","isExpired"].indexOf(mode) > -1){
					if(!form1.key ){
						vk.toast("缓存key不能为空","none");
						return false;
					}
				}
				if("set" === mode){
					if(!form1.value){
						vk.toast("缓存value不能为空","none");
						return false;
					}
				}
				vk.callFunction({
					url: 'template/test/pub/temporaryCache',
					title:'请求中...',
					data:form1,
					success:function(data) {
						if("get" === mode){
							vk.alert(JSON.stringify(data.value));
						}else{
							that.getAll();
						}
					}
				});
			}
		},
		// 过滤器
		filters:{
			
		},
		// 计算属性
		computed:{
			
		}
	}
</script>
<style lang="scss" scoped>
	.app {
		padding: 15px;
	}
	.app input {
		height: 46px;
		border: solid 1px #DDDDDD;
		border-radius: 5px;
		margin-bottom: 15px;
		padding: 0px 15px;
	}
	.app button {
		margin-top: 15px;
	}
	.app navigator {
		display: inline-block;
		color: #007AFF;
		border-bottom: solid 1px #007AFF;
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
</style>