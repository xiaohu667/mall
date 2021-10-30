<template>
	<div id="category">
		<NavBar class="navbar">
			<div slot="center">分类</div>
		</NavBar>
		<Tabcontrol ref="tabref1" @tabClick="tabclick" :titles="['综合','精品','销量']" class="tabcontrol1" v-show="isshow"></Tabcontrol>
		<div class="contentscroll">
			<Scroll class="content">
			<CategoryUl :Ulmessages="categorylist" @Ulclick="uiclick" class="categoryui"></CategoryUl>
			</Scroll>
			<Scroll class="content1" ref="scroll" @scrollcontent="scrollcontent">
		    <CategoryShop :categoryimages="caregoryimages" class="categoryshop" @imgload="imgload"></CategoryShop>
			  <Tabcontrol ref="tabref" @tabClick="tabclick" :titles="['综合','精品','销量']"></Tabcontrol>
				<GoodsList :goods="categoryimg" class="goodlist"></GoodsList>
			</Scroll>
		</div>
	</div>
</template>

<script>
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import {getcategorygoods,getSubcategory,getCategoryDetail} from '../../network/request.js'
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import CategoryUl from './categoryChild/CategoryUl.vue'
	import CategoryShop from './categoryChild/CategoryShop.vue'
	import Tabcontrol from '../../components/context/tabcontrol/Tabcontrol.vue'
	import GoodsList from '../../components/context/goods/GoodsList.vue'
	export default {
		name:'Train',
		components:{
			NavBar,
			CategoryUl,
			CategoryShop,
			Scroll,
			Tabcontrol,
			GoodsList
		},
		data() {
			return{
				currentindex:0,
				currenttype:'pop',
				categorylist:[],
				caregoryimages:[],
				categoryimg:[],
				positiony:0,
				isshow:false
			}
		},
		created(){
			getcategorygoods().then(res=>{
				// console.log(res)
				this.categorylist = res.data.data.category.list
				this.getSubcategorymethods(0)
				this.getCategoryDetail('pop')
				this.getCategoryDetail('new')
				this.getCategoryDetail('sell')
			})
		},
		methods:{
			getSubcategorymethods(index){
				const maitKey = this.categorylist[index].maitKey
				getSubcategory(maitKey).then(res=>{
					// console.log(res)
					this.caregoryimages = res.data.data.list
					this.getCategoryDetail(this.currenttype)
				})
			},
			uiclick(index){
				this.currentindex = index
				this.getSubcategorymethods(index)
			},
			getCategoryDetail(type){
				const miniWallkey = this.categorylist[this.currentindex].miniWallkey
				getCategoryDetail(miniWallkey,type).then(res=>{
					// console.log(res)
					this.categoryimg = res.data
				})
			},
			tabclick(index){
				this.currenttype = index < 1 ? 'pop' : index == 1 ? 'new' : 'sell'
				this.getCategoryDetail(this.currenttype)
				this.$refs.tabref.currentStyle = index
				this.$refs.tabref1.currentStyle = index
			},
			imgload(){
				this.$refs.scroll.scroll.refresh()
				this.positiony = this.$refs.tabref.$el.offsetTop
			},
			scrollcontent(position){
				this.isshow = (-position.y >= this.positiony)
			}
		}
	}
</script>

<style scoped>
	#category{
		padding-top: 2.75rem;
		position: relative;
	}
	.navbar{
		background-color: #FF8F95;
		color: white;
	}
	.content,.content1{
		height: calc(100vh - 93px);
	}
	.contentscroll{
		display: flex;
	}
	.categoryui{
		flex: 1;
	}
	.categoryshop{
		flex: 3;
	}
	.goodlist{
		width: 15rem;
	}
	.tabcontrol1{
		width: 75%;
		position: absolute;
		top: 2.75rem;
		right: 0;
		z-index: 999;
	}
</style>
