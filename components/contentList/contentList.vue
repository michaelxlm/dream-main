<template>
	<view>
		<u-card :full="true" v-for="(item) in list" :key="item._id" :index="item._id"
			@click="cardClick" margin="0" :show-head="false" :show-foot="false">
			<view class="u-card-body" slot="body">
				<u-avatar :src="item.author.avatar ||mainLogo" size="90"></u-avatar>
				<view class="content">
					<view class="nickname">{{item.author.nickname}}</view>
					<view class="text">{{item.text}}</view>
					<view :class="item.imageList.length === 4 ?'photoAlbum-4':'photoAlbum-9'">
						<view class="photoItem" v-for="(itm, idx) in item.imageList" :key="itm.url">
							<view class="imgView">
								<u-image width="100%" height="100%" :src="itm.url" mode="aspectFill"
									:border-radius="10">
								</u-image>
							</view>
						</view>
					</view>
					<view>
						<view>{{vk.pubfn.dateDiff(item._add_time)}}</view>
					</view>
				</view>
			</view>
		</u-card>
	</view>
</template>

<script>
	import config from '@/app.config.js'
	export default {
		name:"contentList",
		props: {
			list: {
				type: Array,
				default () {
					return [];
				}
			},
		},
		computed: {
			mainLogo() {
				return config.staticUrl.logo
			}
		},
		data() {
			return {
			};
		},
		methods:{
			cardClick(_id) {
				console.log(_id)
				this.vk.navigateTo('/pages/tutorial/tutorial?id=' + _id)
			},
		}
	}
</script>

<style lang="scss">

</style>
