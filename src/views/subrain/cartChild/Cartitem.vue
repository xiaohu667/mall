<template>
	<div class="cart-item-child">
		<div class="cart-item-content">
			<div class="cart-left">
				<div class="imgcontent" @click="ishow">
				  <img v-show="cartmessages.checked" src="../../../assets/img/Cart/chungouzi.jpeg" class="cart-item-img" />
			  </div>
			  <img :src="cartmessages.img" class="cart-item-img1" />
			</div>
			<div class="cart-right">
				<span class="span1">{{cartmessages.title}}</span>
				<span class="span2">{{cartmessages.desc}}</span>
				  <div class="span3">
					  <span class="span4">${{cartmessages.price}}</span>
						<button @click="addcount">+</button>
					  <span class="span5">{{cartmessages.count}}</span>
						<button @click="subcount">-</button>
				  </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Cartitem',
		props:{
			cartmessages:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		methods:{
			ishow(){
				this.cartmessages.checked = !this.cartmessages.checked
			},
			addcount(){
				this.cartmessages.count++
				this.cartmessages.checked = true
			},
			subcount(){
				if(this.cartmessages.count == 0){
					this.cartmessages.count == 0
				}else{
					this.cartmessages.count--
					if(this.cartmessages.count == 0){
						this.cartmessages.checked = false
					}
				}
			}
		}
	}
</script>

<style scoped>
	.cart-item-content{
		padding-top: 0.625rem;
		height: 8.4375rem;
		border-bottom: 0.0625rem solid #c6c6c6;
		position: relative;
		display: flex;
	}
	.cart-left{
		flex: 1;
	}
	.cart-right{
		flex: 2;
	}
	.imgcontent{
		width: 1.25rem;
		height: 1.25rem;
		padding-left: 0.25rem;
		border: 1px solid #bfbfbf;
		border-radius: 50%;
		position: absolute;
		top: 3.75rem;
		left: 0.3125rem;
	}
	.cart-item-img{
		width: 0.625rem;
		height: 0.625rem;
	}
	.cart-item-img1{
		width: 70%;
		border-radius: 0.625rem;
		margin-left: 1.875rem;
	}
	.cart-right span{
		width: 12.5rem;
		text-overflow:ellipsis;
		overflow:hidden;
		white-space:nowrap;
		margin-left: 0.3125rem;
	}
	.span1{
		margin-bottom: 1.5625rem;
		display: block;
		font-size: 0.875rem;
		font-weight: 600;
		margin-top: 0.625rem;
	}
	.span2{
		margin-bottom: 1.5625rem;
		display: block;
		font-size: 0.75rem;
		color: #808080;
	}
	.span3{
		color: #FF8F95;
		font-size: 0.75rem;
		font-weight: 700;
	}
	.span4{
		margin-right: 6.875rem;
	}
	.span3 button{
		width: 0.9375rem;
	}
	.span5{
		margin-right: 0.375rem;
	}
</style>

