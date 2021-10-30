<template>
  <div id="app">
		<!-- 用keep-alive把组件进行缓存 -->
	  <!-- exclude不进行缓存 "中为组件中导出的name属性" -->
		<keep-alive exclude="Detail">
			<router-view></router-view>
		</keep-alive>
		<!-- 用路由元meta来控制某些路由跳转的页面是否需要Tabbar -->
		<MainTabBar v-if="$route.meta.showTabbar"></MainTabBar>
  </div>
</template>
<script>
	import MainTabBar from './components/context/mainTabbar/MainTabBar.vue'
	export default{
		name:'App',
		components:{
			MainTabBar
		}
	}
</script>
<style>
	@import url("./assets/css/base.css");
</style>
