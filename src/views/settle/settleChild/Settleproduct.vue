<template>
	<div class="settle-product">
		<div class="top">
			<img src="../../../assets/img/Profile/店铺.png" />
			<span>{{this.$store.state.settlelist[0].name}}</span>
		</div>
		<div class="center">
			<div class="left">
				<img :src="this.$store.state.settlelist[0].img" />
			</div>
			<div class="right">
				<span class="title">{{this.$store.state.settlelist[0].title}}</span>
				<span class="desc">{{this.$store.state.settlelist[0].desc}}</span>
				<span class="oldprice">{{this.$store.state.settlelist[0].oldPrice}}</span>
				<span class="btn">
					<button @click="subcount">-</button>
					<span>{{this.$store.state.settlelist[0].count}}</span>
					<button @click="addcount">+</button>
				</span>
				<span class="newprice">每件到手价￥{{this.$store.state.settlelist[0].price}}</span>
			</div>
		</div>
		<div class="bottom">
			<span class="peisong">配送</span>
			<span class="yunshu">快速运输 ></span>
			<span class="songda">预计9月6日24:00前送达</span>
			<span class="peisong1">退换无忧</span>
			<span class="yunshu1">商家赠送 ></span>
			<span class="songda1">享运费补贴或免费取件服务</span>
			<span>留言</span>
			<input type="text" dir="rtl" class="ipt" placeholder="建议留言前先于商家沟通确认" />
		</div>
	</div>
</template>

<script>
	export default{
		name:'Settleproduct',
		data() {
			return{
			}
		},
		methods:{
			subcount(){
				this.$store.commit('subcount')
			},
			addcount(){
				this.$store.commit('addcount')
			}
		}
	}
</script>

<style scoped>
	.settle-product{
		background-color: white;
		border-top: 0.0625rem solid #BFBFBF;
		border-bottom: 0.0625rem solid #BFBFBF;
		border-radius: 0.625rem;
		padding: 0.625rem 0.625rem;
		margin-bottom: 0.3125rem;
	}
	.top{
		position: relative;
		margin-bottom: 0.625rem;
	}
	.top img{
		width: 0.75rem;
		height: 0.75rem;
		margin-right: 0.3125rem;
	}
	.top span{
		display: inline-block;
		position: absolute;
		top: 0.15625rem;
		font-size: 0.75rem;
		line-height: 0.75rem;
	}
	.center{
		display: flex;
		margin-bottom: 0.9375rem;
	}
	.left{
		flex: 1;
	}
	.left img{
		width: 5rem;
		height: 5rem;
		border-radius: 0.625rem;
	}
	.right{
		flex: 2.5;
	}
	.title{
		display: block;
		overflow: hidden;/*超出部分隐藏*/
		white-space: nowrap;/*不换行*/
		text-overflow:ellipsis;/*超出部分文字以...显示*/
		font-size: 0.8125rem;
		font-weight: 500;
	}
	.desc{
		display: block;
		overflow: hidden;/*超出部分隐藏*/
		white-space: nowrap;/*不换行*/
		text-overflow:ellipsis;/*超出部分文字以...显示*/
		font-size: 0.75rem;
		font-weight: 100;
		margin-bottom: 0.625rem;
	}
	.oldprice{
		color: red;
		margin-right: 6.25rem;
	}
	.newprice{
		display: block;
		color: red;
		font-size: 0.75rem;
	}
	.btn button{
		width: 1.1rem;
		height: 1.375rem;
		margin-left: 0.1875rem;
		margin-right: 0.1875rem;
	}
	.bottom span{
		font-size: 0.75rem;
		color: #000000;
	}
	.peisong{
		margin-right: 13.125rem;
	}
	.songda{
		display: block;
		margin-left: 10.25rem;
		margin-bottom: 0.625rem;
	}
	.peisong1{
		margin-right: 11.625rem;
	}
	.songda1{
		display: block;
		margin-left: 9.375rem;
		margin-bottom: 0.625rem;
	}
	.ipt{
		/* 使input没有边框 */
		border: 0;
		/* 使input点击时不会弹出黄色边框 */
		outline: none;
		font-size: 0.75rem;
		width: 90%;
		color:#000000
	}
</style>
