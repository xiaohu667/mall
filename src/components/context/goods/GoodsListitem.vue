<template>
	<div class="goodslistitem" @click="pushdetail">
		<img :src="showimage" class="img1"/>
		<div class="goodslistitem-box">
			<span class="span1">{{goodsitem.title}}</span>
			<span class="span2">{{'$'+goodsitem.price}}</span>
			<img src="../../../assets/img/Tabbar/shoucang.jpeg" class="img2" />
			<span>
			  {{goodsitem.cfav}}
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'GoodsListitem',
		computed:{
			showimage(){
				return this.goodsitem.img ||this.goodsitem.image || this.goodsitem.show.img 
			}
		},
		props:{
			goodsitem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			pushdetail(){
				this.$router.push('/detail/'+this.goodsitem.iid)
				this.$store.commit('profilecount')
			}
		}
	}
</script>

<style>
	.goodslistitem{
		width: 47%;
		display: inline-block;
		margin: 0 0.1875rem;
	}
	.goodslistitem .img1{
		width: 100%;
		/* height: 11.875rem; */
		height: 12.5rem;
		border-radius: 0.3125rem;
		margin-bottom: 0.1875rem;
	}
	.goodslistitem-box{
		font-size: 0.75rem;
	}
	.goodslistitem-box .span1{
		display: block;
		width: 100%;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.goodslistitem-box .span2{
		margin-right: 0.625rem;
		color: #FF8F95;
	}
	.goodslistitem-box .img2{
		width: 0.875rem;
		height: 0.875rem;
		margin-bottom: -0.1875rem;
	}
</style>
