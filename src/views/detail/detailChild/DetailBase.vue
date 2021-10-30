<template>
	<div class="detail-base">
		<div class="info-title">{{goodsmessage.title}}</div>
		<div class="info-price">
			<span class="info-newPrice">{{goodsmessage.newPrice}}</span>
			<span class="info-oldPrice">{{goodsmessage.oldPrice}}</span>
			<span v-if="goodsmessage.discount" class="info-discount">{{goodsmessage.discount}}</span>
		</div>
		<div class="info-columns" v-if="goodsmessage.columns">
			<span>{{goodsmessage.columns[0]}}</span>
			<span class="info-columns-center">{{goodsmessage.columns[1]}}</span>
			<span>{{goodsmessage.services[0].name}}</span>
		</div>
		<div class="info-services">
			<span v-for="(item,index) in goodsmessage.services" v-if="index != 0" :key="index">
				<img :src="item.icon" />
				<span>{{item.name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailBase',
		props:{
			goodsmessage:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.detail-base{
		padding:0.3125rem 0.1875rem 0 0.3125rem;
	}
	.info-title{
		font-size: 1rem;
		color: #000000;
		font-weight: 500;
		margin-bottom: 0.9375rem;
	}
	.info-price{
		position: relative;
		margin-bottom: 0.9375rem;
	}
	.info-newPrice{
		font-size: 1.125rem;
		color: red;
		margin-right: 0.3125rem;
	}
	.info-oldPrice{
		color: #808080;
		font-size:0.75rem;
		text-decoration: line-through;
		margin-right: 0.3125rem;
	}
	.info-discount{
		padding: 0.125rem 0.625rem;
		border-radius: 0.625rem;
		color: white;
		font-size: 0.75rem;
		background-color:red;
		position: absolute;
		top: 0;
	}
	.info-columns{
		display: flex;
		padding-bottom: 0.375rem;
		border-bottom: 0.0625rem solid #eaeaea;
		margin-bottom: 0.9375rem;
	}
	.info-columns span{
		font-size: 0.75rem;
		color: #808080;
		text-align: center;
	}
	.info-columns-center{
		flex: 1;
	}
	.info-services{
		font-size: 0.75rem;
		display: flex;
		justify-content: space-between;
		padding-bottom: 0.9375rem;
		border-bottom: 0.0625rem solid #eaeaea;
	}
	.info-services img{
		width: 0.625rem;
		height: 0.625rem;
	}
</style>
