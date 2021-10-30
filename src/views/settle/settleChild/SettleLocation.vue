<template>
	<div class="settle-location">
		<div class="top">
			<span class="mo">默认</span>
			<span class="stu">学校</span>
			<span>湖北省武汉市江夏区龙泉街道</span>
		</div>
		<div class="middle">
			<h4>晴川学院</h4>
		</div>
		<div class="bottom">
			<span class="id">小杨</span>
			<span>176****9487</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'SettleLocation'
	}
</script>

<style scoped>
	.settle-location{
		padding: 0.9375rem 0.625rem;
		background-color: white;
		margin-bottom: 0.3125rem;
		border-radius: 0.625rem;
	}
	.top{
		margin-bottom: 0.9375rem;
		font-size: 0.75rem;
	}
	.top span{
		margin-right: 0.3125rem;
	}
	.mo{
		padding: 0 0.125rem 0 0.125rem;
		background-color: red;
		border-radius: 0.1875rem;
		color: white;
	}
	.stu{
		padding: 0 0.125rem 0 0.125rem;
		background-color: blue;
		border-radius: 0.1875rem;
		color: white;
	}
	.middle{
		margin-bottom: 0.625rem;
		font-size: 0.875rem;
	}
	.bottom{
		font-size: 0.75rem;
	}
	.id{
		margin-right: 0.3125rem;
	}
</style>
