<template>
	<view>
		<u-card :full="true" v-for="(item) in list" :key="item._id" :index="item._id" @click="cardClick" margin="0"
			:show-head="false" :show-foot="false">
			<view class="u-card-body" slot="body">
				<u-avatar v-if="vk.pubfn.isNotNull(item.avatar)" :src="item.avatar ||mainLogo" size="90"
					:show-sex="item.gender!=='0'" :sex-icon="item.gender==='1'?'man':'woman'"></u-avatar>
				<u-avatar v-else :text="$u.trim(item.nickname, 'all').substring(0,1) ||''" bg-color="#eeeeee" size="90"
					:show-sex="item.gender!=='0'" :sex-icon="item.gender==='1'?'man':'woman'"></u-avatar>
				<view class="contentDate">
					<view class="mainText">
						{{item.nickname}}
						<view>{{item.birthday}}</view>
					</view>
				</view>
			</view>
		</u-card>
	</view>
</template>

<script>
	import config from '@/app.config.js'
	export default {
		name: "timeList",
		props: {
			list: {
				type: Array,
				default () {
					return [];
				}
			},
		},
		data() {
			return {};
		},
		computed: {
			mainLogo() {
				return config.staticUrl.logo
			}
		},
		methods: {
			cardClick(_id) {
				console.log(_id)
				this.vk.navigateTo('/pages/issue/time?id=' + _id)
			},
		}
	}
</script>

<style lang="scss">

</style>
