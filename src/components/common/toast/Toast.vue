<template>
	<div v-show="show" class="toast">
	  <div>{{message}}</div>
	</div>
</template>

<script>
	export default{
		name:'Toast',
		props:{
			message:{
				type:String,
				default(){
					return ''
				}
			},
			show:{
				type:Boolean,
				default(){
					return false
				}
			}
		}
	}
</script>

<style scoped>
	.toast{
		position: fixed;
		top: 50%;
		left: 50%;
		padding: 0.625rem 1.125rem;
		transform: translate(-50%,-50%);
		background-color: rgba(0,0,0,0.6);
		color: white;
		border-radius: 0.625rem;
	}
</style>
