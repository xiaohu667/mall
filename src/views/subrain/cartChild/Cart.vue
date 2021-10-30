<template>
	<div class="cart">
		<Scroll class="content" ref="scroll">
			<Cartitem v-for="(item,index) in $store.state.cartlist" :cartmessages="item" :key="index"></Cartitem>
		</Scroll>
	</div>
</template>

<script>
	import Cartitem from './Cartitem.vue'
	import Scroll from '../../../components/common/scroll/Scroll.vue'
	export default{
		name:'Cart',
		components:{
			Cartitem,
			Scroll
		},
		methods:{
			imgload(){
				this.$refs.scroll.scroll.refresh()
			}
		},
		activated() {
			this.$refs.scroll.scroll.refresh()
		}
	}
</script>

<style scoped>
	.cart{
		height: calc(100vh - 142px);
	}
	.content{
		height: 100%;
	}
</style>
