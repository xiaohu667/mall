<template>
	<div id="settle">
		<Navbar class="navbar">
			<div slot="left">
				<img src="../../assets/img/Detail/back.jpeg" @click="back" />
			</div>
			<div slot="center">填写订单</div>
		</Navbar>
		<Scroll class="content">
			<SettleLocation></SettleLocation>
		  <Settleproduct></Settleproduct>
		  <Settleamount></Settleamount>
		  <Settlepay></Settlepay>
		</Scroll>
		
		<Settlebottom></Settlebottom>
	</div>
</template>

<script>
	import Navbar from '../../components/common/navbar/NavBar.vue'
	import SettleLocation from './settleChild/SettleLocation.vue'
	import Settleproduct from './settleChild/Settleproduct.vue'
	import Settleamount from './settleChild/Settleamount.vue'
	import Settlepay from './settleChild/Settlepay.vue'
	import Settlebottom from './settleChild/Settlebottom.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	export default{
		name:'Settle',
		components:{
			Navbar,
			SettleLocation,
			Settleproduct,
			Settleamount,
			Settlepay,
			Settlebottom,
			Scroll
		},
		methods:{
			back(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	#settle{
		padding-top: 2.75rem;
		background-color: #eaeaea;
	}
	.navbar{
		background-color: white;
	}
	.left img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle;
	}
	.content{
		height: calc(100vh - 93px);
	}
</style>
