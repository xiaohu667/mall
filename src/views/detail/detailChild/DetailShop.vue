<template>
	<div class="shop-info">
		<div class="shop-top">
			<img :src="shopmessage.logo" />
			<span>{{shopmessage.name}}</span>
		</div>
		<div class="shop-middle">
			<div class="shop-middle-left">
				<div class="info-sells">
					<div class="sells-count">{{estimate +'万'}}</div>
					<div class="sells-text">总销量</div>
				</div>
				<div class="info-goods">
					<div class="goods-count">{{shopmessage.goodsCount}}</div>
					<div class="goods-text">全部宝贝</div>
				</div>
			</div>
			<div class="shop-middle-right">
				<div v-for="item in shopmessage.score" class="opinion">
					<span>{{item.name}}</span>
					<span class="opinion-span1" :class="{active:item.isBetter}">{{item.score}}</span>
					<span class="opinion-span2" v-if="item.isBetter" :class="{active1:item.isBetter}">高</span>
					<span class="opinion-span2" v-else>低</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailShop',
		props:{
			shopmessage:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		computed:{
			estimate(){
				return (this.shopmessage.sells/10000).toFixed(2)
			}
		}
	}
</script>

<style scoped>
	.shop-info{
		padding: 1.25rem 0.3125rem 0 0.3125rem;
	}
	.shop-top img{
		width: 2.5rem;
		height: 2.5rem;
		margin-right: 0.625rem;
		border-radius: 50%;
		border: 0.0625rem solid #D9D9D9;
	}
	.shop-top{
		position: relative;
	}
	.shop-top span{
		position: absolute;
		top: 0.6875rem;
	}
	.shop-middle{
		overflow: hidden;
	}
	.shop-middle-left,.shop-middle-right{
		float: left;
		width: 50%;
		height: 5rem;
	}
	.shop-middle-left{
		margin-top: 0.625rem;
		height: 3.75rem;
	}
	.info-sells,.info-goods{
		float: left;
		width: 50%;
		text-align: center;
		margin-top: 0.8125rem;
	}
	.info-goods{
		border-right: 1px solid #000000;
	}
	.sells-count,.goods-count{
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0.3125rem;
	}
	.sells-text,.goods-text{
		font-size: 0.75rem;
	}
	.opinion{
		display: flex;
		justify-content: space-between;
		margin-left: 1.25rem;
		margin-right: 0.625rem;
		margin-top: 0.625rem;
	}
	.shop-middle-right{
		font-size: 0.75rem;
	}
	.opinion-span1{
		color: #00AA00;
	}
	.opinion-span2{
		background-color: #00AA00;
		color: white;
	}
	.active{
		color: red;
	}
	.active1{
		background-color: red;
	}
</style>
