<template>
	<div class="goodslist">
		<GoodsListitem v-for="item in goods" :goodsitem="item"></GoodsListitem>
	</div>
</template>

<script>
	import GoodsListitem from './GoodsListitem.vue'
	export default{
		name:'GoodsList',
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsListitem
		}
	}
</script>

<style>
	.goodslist{
		padding: 0.3125rem;
		text-align: center;
	}
</style>
