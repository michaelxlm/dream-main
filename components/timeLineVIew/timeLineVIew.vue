<template>
	<view>
		<u-read-more ref="uReadMore" :shadow-style="shadowStyle" :show-height="400">
			<u-time-line>
				<u-time-line-item nodeTop="2" v-for="(item,index) in contentList" :key="item._id">
					<!-- 此处自定义了左边内容，用一个图标替代 -->
					<template v-slot:node>
						<view class="u-node" style="background: #19be6b;">
							<!-- 此处为uView的icon组件 -->
							<u-icon name="pushpin-fill" color="#fff" :size="24"></u-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="u-skeleton">
							<view class="u-order-title u-skeleton-rect">{{item.title}}</view>
							<view class="u-order-desc u-skeleton-rect">
								<u-parse :html="item.desc"></u-parse>
								<view v-if="vk.pubfn.isNotNull(item.imgList)" class="pre-box">
									<view class="pre-item" v-for="(itemImg, idx) in item.imgList" :key="idx">
										<u-image width="100%" :height="140" :src="itemImg.url" mode="aspectFill">
										</u-image>
									</view>
								</view>
							</view>
							<view class="u-order-time u-skeleton-rect">{{item.time}}</view>
						</view>
					</template>
				</u-time-line-item>
			</u-time-line>
			<u-skeleton :loading="true" el-color="#ddd" bg-color="#fff"></u-skeleton>
		</u-read-more>
	</view>
</template>

<script>
	/**
	 * 时间轴图文显示
	 * 
	  * */
	export default {
		name:"timeLineVIew",
		props: {
			contentList: {
				type: Array,
				default () {
					return [];
				}
			},
		},
		data() {
			return {
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx"
				}, //文案样式
			};
		},
		mounted() {
			this.$refs.uReadMore.init();
		},
	}
</script>