<template>
	<div class="category-shop">
		<div v-for="(item,index) in categoryimages" :key="index" class="category-item">
			<img :src="item.image" class="category-item-img" @load="imgload" />
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'CategoryShop',
		props:{
			categoryimages:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		methods:{
			imgload(){
				this.$emit('imgload')
			}
		}
	}
</script>

<style scoped>
	.category-shop{
		/* width: 100%; */
		display: flex;
		flex-wrap: wrap;
	}
	.category-item{
		width: 33%;
		font-size: 0.75rem;
		text-align: center;
		margin-bottom: 0.625rem;
	}
	.category-item-img{
		width: 100%;
	}
</style>
