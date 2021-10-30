<template>
	<div class="category-ul">
		<ul>
			<li v-for="(item,index) in Ulmessages" @click="liclick(index)" :class="{active:currentindex === index}">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'CategoryUl',
		props:{
			Ulmessages:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		data(){
			return{
				currentindex:0
			}
		},
		methods:{
			liclick(index){
				this.currentindex = index
				this.$emit('Ulclick',index)
			}
		}
	}
</script>

<style scoped>
	.category-ul{
		width: 25%;
		/* float: left; */
	}
	.category-ul ul{
		width: 5rem;
		background-color: #e7e7e7;
		text-align: center;
	}
	.category-ul li{
		height: 3.125rem;
		line-height: 3.125rem;
		font-size: 0.75rem;
		border-bottom: 0.0625rem solid #d3d3d3;
	}
	.active{
		font-weight: bolder;
		color: #FF8F95;
	}
</style>
