<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:'Scroll',
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return{
				scroll:null,
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper,{
				click:true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			});
			
			this.scroll.on('scroll',(position)=>{
				this.$emit('scrollcontent',position)
			});
			
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingup')
			})
		}
	}
</script>

<style>
</style>
