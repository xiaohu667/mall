<template>
	<div class="detail-commons">
		<div>新品上市</div>
		<div>{{commonsmessages.key}}</div>
		<!-- @load在src复制完成后才会执行此事件 -->
		<img v-for="(item,index) in commonsmessages.list" :src="item" :key="index" @load="imgload">
	</div>
</template>

<script>
	export default{
		name:'Detailcommons',
		props:{
			commonsmessages:{
				type:[],
				default(){
					return{}
				}
			}
		},
		data() {
			return{
				count:0,
				imageslength:0
			}
		},
		methods:{
			imgload(){
				if(++this.count === this.commonsmessages.list.length){
					this.$emit('imgload')
				}
			}
		}
	}
</script>

<style scoped>
	.detail-commons div{
		margin-left: 0.625rem;
		margin-top: 1.25rem;
		font-size: 0.875rem;
	}
	.detail-commons img{
		width: 100%;
	}
	.detail-commons{
		margin-bottom: 1.25rem;
	}
</style>
