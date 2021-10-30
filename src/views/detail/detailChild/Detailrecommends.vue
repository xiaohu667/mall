<template>
	<div class="detail-recommends">
		<div></div>
		<GoodsListitem v-for="(item,index) in recommengsmessages" :goodsitem="item" :key="index"></GoodsListitem>
	</div>
</template>

<script>
	import GoodsListitem from '@/components/context/goods/GoodsListitem.vue'
	export default{
		name:'Detailrecommends',
		components:{
			GoodsListitem
		},
		props:{
			recommengsmessages:{
				type:Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style scoped>
	.detail-recommends{
		text-align: center;
		padding-top: 0.3125rem;
		border-top: 0.1875rem solid #cfcfcf;
	}
</style>
