<template>
	<div class="profile-item">
		<div class="content">
			<div><slot name="box1"></slot></div>
			<div><slot name="box2"></slot></div>
			<div><slot name="box3"></slot></div>
			<div><slot name="box4"></slot></div>
			<div><slot name="box5"></slot></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Profileitem'
	}
</script>

<style scoped>
	.content{
		display: flex;
		padding: 0.625rem 0.625rem 0.625rem 0.9375rem;
	}
	.content div{
		flex: 1;
		text-align: center;
	}
	.content img{
		display: block;
		width: 1.875rem;
		height: 1.875rem;
		margin: 0 auto;
	}
	.content span{
		display: block;
		font-size: 0.625rem;
	}
</style>
