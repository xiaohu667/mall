<template>
	<div class="profile-top">
		<div class="profileimg">
			<img src="../../../assets/img/Profile/touxiang.jpg" />
		</div>
		<div class="profilecontent">
			<p>小杨</p>
			<span>购物金豆></span>
			<span>信用分></span>
			<span>家庭号></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProfileTop'
	}
</script>

<style scoped>
	.profile-top{
		display: flex;
		padding-top: 0.625rem;
		margin-bottom: 0.625rem;
	}
	.profileimg{
		flex: 2;
	}
	.profilecontent{
		flex: 8;
	}
	.profileimg img{
		width: 3.125rem;
		height: 3.125rem;
		border-radius: 50%;
	}
	.profilecontent p{
		font-size: 1.125rem;
		font-weight: 400;
		margin-top: 0.3125rem;
		margin-bottom: 0.3125rem;
	}
	.profilecontent span{
		font-size: 0.75rem;
		margin-right: 0.9375rem;
	}
</style>
