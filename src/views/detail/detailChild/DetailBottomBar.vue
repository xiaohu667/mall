<template>
	<div class="detail-bottombar">
		<div class="detail-bottombar-item">
			<img src="../../../assets/img/Detail/kefu.jpeg" />
			<div>客服</div>
		</div>
		<div class="detail-bottombar-item">
			<img src="../../../assets/img/Detail/dianpu.jpeg" />
			<div>店铺</div>
		</div>
		<div class="detail-bottombar-item">
			<img src="../../../assets/img/Detail/shoucang.jpeg" />
			<div>收藏</div>
		</div>
		<div class="detail-bottombar-itembus" @click="addcart">加入购物车</div>
		<div class="detail-bottombar-itembuy" @click="addsettle">购买</div>
	</div>
</template>

<script>
	export default{
		name:'DetailBottomBar',
		methods:{
			addcart(){
				this.$emit('addcart')
			},
			addsettle(){
				this.$emit('addsettle')
				this.$router.push('/settle/' + this.$store.state.settlelist[0].iid)
			}
		}
	}
</script>

<style scoped>
	.detail-bottombar{
		display: flex;
		height: 3.0625rem;
		background-color: white;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
	}
	.detail-bottombar-item{
		flex: 1;
		text-align: center;
		font-size: 0.75rem;
	}
	.detail-bottombar-item img{
		width: 1.25rem;
		height: 1.25rem;
		margin-top: 0.3125rem;
		margin-bottom: 0.1875rem;
	}
	.detail-bottombar-itembus{
		padding-top: 0.125rem;
		flex: 1.5;
		background-color: yellow;
		line-height: 3.0625rem;
		font-size: 0.875rem;
		text-align: center;
	}
	.detail-bottombar-itembuy{
		flex: 1.5;
		background-color: #FF8F95;
		line-height: 3.0625rem;
		text-align: center;
		color: white;
	}
</style>
