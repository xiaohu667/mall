<template>
	<div class="settle-bottom">
		<div class="left">
			<div class="top">
				<span>￥</span>
			  <span class="price">{{totalprice}}</span>
			</div>
			<span class="bottomsubprice">共省{{price}}</span>
		</div>
		<div class="right">
			<span>结算</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Settlebottom',
		computed:{
			price(){
				let product1goods = this.$store.state.settlelist[0]
				return (product1goods.oldPrice.substr(1) - product1goods.price).toFixed(2)
			},
			totalprice(){
				let product1goods = this.$store.state.settlelist[0]
				return (product1goods.oldPrice.substr(1)*product1goods.count - this.price).toFixed(2)
			}
		}
	}
</script>

<style scoped>
	.settle-bottom{
		padding: 0.3125rem 0.625rem;
		width: 100%;
		height: 3.0625rem;
		position: fixed;
		bottom: 0;
		background-color: white;
		font-size: 0.75rem;
		border-radius: 0.625rem;
		display: flex;
	}
	.left{
		flex: 2.5;
	}
	.right{
		flex: 1;
		text-align: center;
		border: 0.0625rem solid #808080;
		background-color: red;
		color: white;
		border-radius: 1.25rem;
		}
	.right span{
		height: 2.4375rem;
		line-height: 2.4375rem;
	}
	.price{
		font-size: 1.125rem;
	}
	.top{
		color: red;
	}
	.btn{
		display: inline-block;
	}
</style>
