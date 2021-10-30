<template>
	<div id="profile">
		<NavBar class="navbar">
			<div slot="center">我的</div>
		</NavBar>
		<ProfileTop></ProfileTop>
		<ProfileGoods></ProfileGoods>
		<Profiledata></Profiledata>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import ProfileTop from './profileChild/ProfileTop.vue'
	import ProfileGoods from './profileChild/ProfileGoods.vue'
	import Profiledata from './profileChild/Profiledata.vue'
	export default{
		name:'Ship',
		components:{
			NavBar,
			ProfileTop,
			ProfileGoods,
			Profiledata
		}
	}
</script>

<style scoped>
	#profile{
		padding-top: 2.75rem;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
	}
	.navbar{
		background-color: #FF8F95;
		color: white;
	}
</style>
