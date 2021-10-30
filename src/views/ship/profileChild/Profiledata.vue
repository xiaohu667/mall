<template>
	<div class="profile-data">
		<Profileitem>
			<div slot="box1">
				<h4>168</h4>
			  <span>金豆</span>
				<span>领取金豆</span>
			</div>
			<div slot="box2">
				<h4>7</h4>
			  <span>优惠卷</span>
				<span>下单立减</span>
			</div>
			<div slot="box3">
				<h4>0.00元</h4>
			  <span>白条</span>
				<span>点击省钱</span>
			</div>
			<div slot="box4">
				<h4>20万</h4>
			  <span>京东白条</span>
				<span>免息7天</span>
			</div>
			<div slot="box5">
				<img src="../../../assets/img/Profile/红色钱包.png" />
				<span>我的钱包</span>
			</div>
		</Profileitem>
	</div>
</template>

<script>
	import Profileitem from './Profileitem.vue'
	export default{
		name:'Profiledata',
		components:{
			Profileitem
		}
	}
</script>

<style scoped>
	.profile-data{
		border: 0.0625rem solid #BFBFBF;
		border-radius: 0.9375rem;
	}
	span{
		font-size: 0.75rem;
		margin-bottom: 0.4375rem;
	}
	h4{
		margin-bottom: 0.3125rem;
	}
</style>
