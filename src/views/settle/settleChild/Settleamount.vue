<template>
	<div class="settle-amount">
		<div class="price">
			<span>产品金额</span>
			<span>{{this.$store.state.settlelist[0].oldPrice}}</span>
		</div>
		<div class="price">
			<span>退换无忧</span>
			<span>￥0.00</span>
		</div>
		<div class="price">
			<span>运费</span>
			<span>￥0.00</span>
		</div>
		<div class="price">
			<span>立减</span>
			<span class="subprice">￥{{price}}</span>
		</div>
		<div class="price">
			<span>优惠卷</span>
			<span>无可用</span>
		</div>
		<div class="price" v-show="!isshow">
			<span>金豆</span>
			<span>共168,满1000可用</span>
		</div>
		<div class="price" v-show="!isshow">
			<span>礼品卡(京东E卡)</span>
			<span>无可用</span>
		</div>
		<div class="clickspan" v-if="isshow" @click="changeshow">
			<span>已隐藏本单不可使用的虚拟资产</span>
		  <img src="../../../assets/img/Settle/箭头下.png" />
		</div>
		<div class="clickspan" v-else @click="changeshow">
			<span>点击收起</span>
		  <img src="../../../assets/img/Settle/箭头上.png" />
		</div>
		<span class="leftspan">合计:</span>
		<span class="rightspan">￥{{totalprice}}</span>
	</div>
</template>

<script>
	export default{
		name:'Settleamount',
		computed:{
			price(){
				let product1goods = this.$store.state.settlelist[0]
				return (product1goods.oldPrice.substr(1) - product1goods.price).toFixed(2)
			},
			totalprice(){
				let product1goods = this.$store.state.settlelist[0]
				return (product1goods.oldPrice.substr(1)*product1goods.count - this.price).toFixed(2)
			}
		},
		data(){
			return{
				isshow:true
			}
		},
		methods:{
			changeshow(){
				this.isshow = !this.isshow
			}
		}
	}
</script>

<style scoped>
	.settle-amount{
		background-color: white;
		border-top: 0.0625rem solid #BFBFBF;
		border-bottom: 0.0625rem solid #BFBFBF;
		border-radius: 0.625rem;
		padding: 0.625rem 0.625rem;
		margin-bottom: 0.3125rem;
	}
	.settle-amount .price{
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		margin-bottom: 0.875rem;
		color: #000000;
	}
	.subprice{
		color: red;
	}
	.clickspan{
		color: #808080;
		font-size: 0.75rem;
		text-align: center;
		padding-bottom: 0.625rem;
		border-bottom: 0.0625rem solid #d9d9d9;
	}
	.settle-amount img{
		width: 0.625rem;
		height: 0.625rem;
	}
	.rightspan{
		font-size: 0.75rem;
		color: red;
	}
	.leftspan{
		margin-left: 13.75rem;
		font-size: 0.75rem;
	}
</style>
