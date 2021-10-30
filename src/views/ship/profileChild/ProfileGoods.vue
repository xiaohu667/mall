<template>
	<div class="profilegoods">
		<div class="top">
			<div class="left">
				<img src="../../../assets/img/Profile/收藏.png"/>
				<span>商品收藏</span>
			</div>
			<div class="center">
				<img src="../../../assets/img/Profile/店铺.png" />
				<span>店铺关注</span>
			</div>
			<div class="right">
				<img src="../../../assets/img/Profile/浏览记录.png" />
				<span>浏览记录{{$store.state.profileCount}}</span>
			</div>
		</div>
		<div class="bottom">
			<Profileitem>
				<div slot="box1">
					<img src="../../../assets/img/Profile/钱包.png" />
				  <span>待付款</span>
				</div>
				<div slot="box2">
					<img src="../../../assets/img/Profile/收货.png" />
					<span>待收货</span>
				</div>
				<div slot="box3">
					<img src="../../../assets/img/Profile/评价.png" />
					<span>待评价</span>
				</div>
				<div slot="box4">
					<img src="../../../assets/img/Profile/售后.png" />
					<span>退换/售后</span>
				</div>
				<div slot="box5">
					<img src="../../../assets/img/Profile/订单.png" />
					<span>我的订单</span>
				</div>
			</Profileitem>
		</div>
	</div>
</template>

<script>
	import Profileitem from './Profileitem.vue'
	export default{
		name:'ProfileGoods',
		components:{
			Profileitem
		}
	}
</script>

<style scoped>
	.profilegoods{
		border: 0.0625rem solid #BFBFBF;
		border-radius: 0.9375rem;
		margin-bottom: 0.625rem;
	}
	.top{
		display: flex;
		padding-top: 0.3125rem;
		padding-bottom: 0.125rem;
	  border-bottom: 0.0625rem solid #BFBFBF;
	}
	.left,.center,.right{
		flex: 1;
		text-align: center;
	}
	.left,.center{
		border-right: 0.0625rem solid #BFBFBF;
	}
	.top img{
		width: 0.75rem;
		height: 0.75rem; 
		margin-right: 0.3125rem;
	}
	.top span{
		font-size: 0.875rem;
		height: 1.875rem;
		line-height: 1.875rem;
	}
</style>
