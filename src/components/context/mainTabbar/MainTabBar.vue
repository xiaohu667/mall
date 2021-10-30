<template>
	<Tabbar>
		<Tabbaritem link="/air" activecolor='red'>
			<img slot="item-icon" src="../../../assets/img/Tabbar/home.svg" alt=""/>
			<img slot="item-icon2" src="../../../assets/img/Tabbar/home_active.svg" alt=""/>
			<div slot="item-text">首页</div>
		</Tabbaritem>
		<Tabbaritem link="/train" activecolor='red'>
			<img slot="item-icon" src="../../../assets/img/Tabbar/category.svg" alt=""/>
			<img slot="item-icon2" src="../../../assets/img/Tabbar/category_active.svg" alt=""/>
			<div slot="item-text">分类</div>
		</Tabbaritem>
		<Tabbaritem link="/subrain" activecolor='red'>
			<img slot="item-icon" src="../../../assets/img/Tabbar/shopcart.svg" alt=""/>
			<img slot="item-icon2" src="../../../assets/img/Tabbar/shopcart_active.svg" alt=""/>
			<div slot="item-text">购物车</div>
		</Tabbaritem>
		<Tabbaritem link="/ship" activecolor='red'>
			<img slot="item-icon" src="../../../assets/img/Tabbar/profile.svg" alt=""/>
			<img slot="item-icon2" src="../../../assets/img/Tabbar/profile_active.svg" alt=""/>
			<div slot="item-text">我的</div>
		</Tabbaritem>
	</Tabbar>
</template>

<script>
	import Tabbar from '../../common/Tabbar/Tabbar.vue'
	import Tabbaritem from '../../common/Tabbar/Tabbaritem.vue'
	export default{
		name:'MainTabBar',
		components: {
			Tabbar,
			Tabbaritem
		}
	}
</script>

<style>
</style>
