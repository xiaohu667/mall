<template>
	<div class="cartcontent">
		<NavBar class="cart-navbar">
			<div slot="center">购物车({{$store.getters.cartLength}})</div>
		</NavBar>
			<Cart></Cart>
		<Cartcomputer></Cartcomputer>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import Cart from './cartChild/Cart.vue'
	import Cartcomputer from './cartChild/Cartcomputer.vue'
	export default{
		name:'Subrain',
		components:{
			NavBar,
			Cart,
			Cartcomputer,
		}
	}
</script>

<style scoped>
	.cartcontent{
		padding-top: 2.75rem;
	}
	.cart-navbar{
		background-color: #FF8F95;
		color: white;
	}
/* 	.content{
		height: calc(100vh - 93px - 49px);
	} */
</style>