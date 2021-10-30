<template>
	<div class="detail-rate" v-if="ratemessages.user">
		<div class="rate-top">
			<span>用户评价</span>
			<span>更多</span>
		</div>
		<div class="rate-bottom">
			<div class="rate-bottom-item">
				<img :src="ratemessages.user.avatar" />
				<span>{{ratemessages.user.uname}}</span>
			</div>
			<div class="rate-bottom-item1">
				<span>{{ratemessages.content}}</span>
				<div class="spam">
					<span>{{ratemessages.style}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Detailrate',
		props:{
			ratemessages:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.detail-rate{
		padding: 0.9375rem 0.625rem;
		border-top: 0.1875rem solid #c6c6c6;
	}
	.rate-top{
		display: flex;
		justify-content: space-between;
		padding-bottom: 0.9375rem;
		border-bottom: 0.0625rem solid #d4d4d4;
		font-size: 0.875rem;
		font-weight: 700;
	}
	.rate-bottom-item img{
		width: 2.5rem;
		height: 2.5rem;
		margin-right: 0.625rem;
		border-radius: 50%;
		border: 0.0625rem solid #D9D9D9;
	}
	.rate-bottom-item span{
		font-size: 0.875rem;
		position: absolute;
		top: 0.8125rem;
	}
	.rate-bottom-item{
		position: relative;
		margin-top: 0.625rem;
	}
	.rate-bottom-item1 span{
		font-weight: 700;
		font-size: 0.75rem;
		height: 0.875rem;
		line-height: 0.875rem;
	}
	.spam{
		color: #a2a2a2;
		margin-top: 0.375rem;
	}
</style>
