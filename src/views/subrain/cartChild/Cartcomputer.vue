<template>
	<div class="cart-computer">
		<div class="cart-computer-img">
			<div class="cary-img" @click="checkall">
				<img v-show="isshow" src="../../../assets/img/Cart/chungouzi.jpeg" />
			</div>
			<span class="cary-content">全选</span>
		</div>
		<div class="cart-computer-content">
			<span>合计:{{newprice}}</span>
		</div>
		<div class="cart-computer-jiesuan">
			<span>结算({{$store.state.cartlist.length}})</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Cartcomputer',
		computed:{
			totalprice(){
				return this.$store.state.cartlist.filter(item =>{
					return item.checked
				}).reduce((preValue,item)=>{
					return preValue + item.price * item.count
				},0)
			},
			newprice(){
				return this.totalprice.toFixed(2)
			},
			isshow(){
				const checkedlength =  this.$store.state.cartlist.filter(item=>{
					return item.checked
				}).length
				if(checkedlength != this.$store.state.cartlist.length){
					return false
				}else{
					return true
				}
			}
		},
		methods:{
			checkall(){
				const nochecked = this.$store.state.cartlist.filter(item=>{
					return !item.checked
				})
				for(let item of nochecked){
					item.checked = true
				}
			}
		}
	}
</script>

<style scoped>
	.cart-computer{
		width: 100%;
		height: 3.0625rem;
		position: fixed;
		bottom: 3.0625rem;
		background-color: white;
		display: flex;
	}
	.cart-computer-img{
		flex: 5;
		position: relative;
	}
	.cary-img{
		width: 1.25rem;
		height: 1.25rem;
		border: 1px solid #bfbfbf;
		border-radius: 50%;
		padding-left: 0.3125rem;
		margin-top: 0.9375rem;
		margin-left: 0.375rem;
	}
	.cary-content{
		position: absolute;
		top: 1.0625rem;
		left: 1.875rem;
	}
	.cary-img img{
		height: 0.625rem;
		width: 0.625rem;
	}
	.cart-computer-content{
		flex: 3.5;
	}
	.cart-computer-content span,.cart-computer-jiesuan span{
		height: 3.0625rem;
		line-height: 3.0625rem;
	}
	.cart-computer-jiesuan{
		text-align: center;
		background-color: red;
		color: white;
	}
	.cart-computer-jiesuan{
		flex: 2.5;
	}
</style>
