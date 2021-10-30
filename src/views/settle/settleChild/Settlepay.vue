<template>
	<div class="settle-pay">
		<div class="settle-amount-pay">
			<span>发票</span>
			<span>不卡发票></span>
		</div>
		<div>
			<span>支付方式</span>
			<span>在线支付></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Settlepay'
	}
</script>

<style scoped>
	.settle-pay{
		background-color: white;
		border-radius: 0.625rem;
		padding: 0.625rem 0.625rem;
	}
	.settle-pay div{
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		/* margin-bottom: 0.625rem; */
		color: #000000;
	}
	.settle-amount-pay{
		margin-bottom:0.625rem;
	}
</style>
