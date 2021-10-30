<template>
	<div class="tar-control">
		<div v-for="(item,index) in titles" class="tar-control-item" :class="{active: currentStyle === index}" @click="controlClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Tabcontrol',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return{
				currentStyle:0
			}
		},
		methods:{
			controlClick(index){
				this.currentStyle = index;
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style>
	.tar-control{
		display: flex;
		font-size: 0.9375rem;
		text-align: center;
		height: 2.5rem;
		line-height: 2.5rem;
		background-color: #FFFFFF;
	}
	.tar-control-item{
		flex: 1;
	}
	.active{
		color: #FF8F95;
	}
	.active span{
		border-bottom: 0.1875rem #FF8F95 solid;
		padding: 0.3125rem;
	}
</style>
