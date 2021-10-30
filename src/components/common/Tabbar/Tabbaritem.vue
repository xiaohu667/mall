<template>
	<div id="tab-bar-item" @click="tabclick">
		<slot v-if="!isactive" name="item-icon"></slot>
		<slot v-else name="item-icon2"></slot>
		<div :style="activeColor">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tabbaritem',
		props:{
			link:{
				type:String,
				default:''
			},
			activecolor:{
				type:String,
				default:'red'
			}
		},
		computed:{
			isactive(){
				return this.$route.path.indexOf(this.link) !== -1
				// return this.link == this.$route.matched[0].path
			},
			activeColor(){
				return this.isactive ? {color:this.activecolor} : {}
			}
		},
		methods:{
			tabclick(){
				this.$router.push(this.link).catch(err=>{})
			}
		}
	}
</script>

<style scoped>
	#tab-bar-item {
		flex: 1;
		text-align: center;
		height: 3.0625rem;
	}
	img{
		width: 1.5rem;
		height: 1.5rem;
		margin-top: 0.1875rem;
		margin-bottom: -0.1875rem ;
	}
</style>
