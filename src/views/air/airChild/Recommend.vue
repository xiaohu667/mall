<template>
	<div class="recommends">
		<div v-for="item of recommends" class="recommends-item">
			<a :href="item.link">
				<img :src="item.image" />
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Recommend',
		props:{
			recommends:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
	.recommends{
		width: 100%;
		display: flex;
		text-align: center;
		font-size: 0.75rem; 
		padding: 0.625rem 0 1.25rem;
		border-bottom: 0.5rem solid #eee;
	}
	.recommends-item{
		flex: 1;
	}
	.recommends img{
		width: 4.0625rem;
		height: 4.0625rem;
		margin-bottom: 0.3125rem;
	}
</style>
