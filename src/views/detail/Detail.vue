<template>
	<div id="detail">
		<NavBar class="navbar1"> 
			<div slot="left" class="left" @click="back">
				<img src="../../assets/img/Detail/back.jpeg" />
			</div>
			<div slot="center" class="detail">
				<div v-for="(item,index) in title" class="detail-item" @click="detailClick(index)" :class="{active: currentindex == index}">{{item}}</div>
			</div>
		</NavBar>
		<Scroll class="content" ref="scroll" @scrollcontent="scrollcontent">
			<DetailSwiper v-if="topImages[0]" class="detailswiper">
				<swiper-slide slot="img1" v-for="(item,index) in topImages" :key="index">
				  <img :src="item" />
			  </swiper-slide>
		  </DetailSwiper>
		  <DetailBase :goodsmessage="goods"></DetailBase>
		  <DetailShop :shopmessage="shop"></DetailShop>
			<Goshop></Goshop>
			<Detailcommons :commonsmessages="images" @imgload="imgload"></Detailcommons>
			<DetailTables :tablesmessages="tables" ref="detailstables"></DetailTables>
			<Detailrate :ratemessages="rate" ref="detailsrate"></Detailrate>
			<Detailrecommends :recommengsmessages="recommends" ref="detailsrecommends"></Detailrecommends>
		</Scroll>
		<DetailBottomBar @addcart="addcart" @addsettle="addsettle"></DetailBottomBar>
		<Toast :message="message" :show="toastshow"></Toast>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import {getDetailGoods,Goods,Shop,Infoimages,ItemParams,Rate,getcommendgoods} from '@/network/request.js'
	import DetailSwiper from './detailChild/DetailSwiper.vue'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import DetailBase from './detailChild/DetailBase.vue'
	import DetailShop from './detailChild/DetailShop.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue' 
	import Goshop from './detailChild/Goshop.vue'
	import Detailcommons from './detailChild/Detailcommons.vue'
	import DetailTables from './detailChild/DetailTables.vue'
	import Detailrate from './detailChild/Detailrate.vue'
	import Detailrecommends from './detailChild/Detailrecommends.vue'
	import DetailBottomBar from './detailChild/DetailBottomBar.vue'
	import Toast from '../../components/common/toast/Toast.vue'
	export default{
		name:'Detail',
		components:{
			NavBar,
			DetailSwiper,
			swiperSlide,
			DetailBase,
			DetailShop,
			Scroll,
			Goshop,
			Detailcommons,
			DetailTables,
			Detailrate,
			Detailrecommends,
			DetailBottomBar,
			Toast
		},
		data() {
			return{
				iid:null,
				title:['商品','参数','评论','推荐'],
				currentindex:0,
			  topImages:[],
				goods:{},
				shop:{},
				images:{},
				tables:{},
				rate:{},
				recommends:[],
				toastshow : false,
				message:'商品添加成功'
			}
		},
		created() {
			this.iid = this.$route.params.iid
			getDetailGoods(this.iid).then(res=>{
				console.log(res)
				this.topImages = res.data.result.itemInfo.topImages
				this.goods = new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
				this.shop = new Shop(res.data.result.shopInfo)
				this.images = new Infoimages(res.data.result.detailInfo.detailImage[0])
				this.tables = new ItemParams(res.data.result.itemParams)
				this.rate = new Rate(res.data.result.rate.list)
			})
			getcommendgoods().then(res=>{
				this.recommends = res.data.data.list
				// console.log(res)
			})
		},
		computed:{
			nowposition(){
				if(this.currentindex === 0){
					return 0
				}else if(this.currentindex === 1){
					return this.$refs.detailstables.$el.offsetTop
				}else if(this.currentindex === 2){
					return this.$refs.detailsrate.$el.offsetTop
				}else {
					return this.$refs.detailsrecommends.$el.offsetTop
				}
			}
		},
		methods:{
			detailClick(index){
				this.currentindex = index
				this.$refs.scroll.scroll.scrollTo(0,-this.nowposition,0)
			},
			back(){
				this.$router.back()
				// this.$router.push('/air')
			},
			imgload(){
				this.$refs.scroll.scroll.refresh()
			},
			scrollcontent(position){
				let detailstables = this.$refs.detailstables.$el.offsetTop
				let detailsrate = this.$refs.detailsrate.$el.offsetTop
				let detailsrecommends = this.$refs.detailsrecommends.$el.offsetTop
				if(-position.y < detailstables){
					this.currentindex = 0
				}else if(-position.y > detailstables && -position.y < detailsrate){
					this.currentindex = 1
				}else if(-position.y > detailsrate && -position.y < detailsrecommends){
					this.currentindex = 2
				}else{
					this.currentindex = 3
				}
			},
			addcart(){
				const product = {}
				product.title = this.goods.title
				product.img = this.topImages[0]
				product.desc = this.goods.desc
				product.price = this.goods.realPrice
				product.iid = this.iid
				this.$store.dispatch('addCart',product).then(res=>{
					this.toastshow = true
					this.message = res
					setTimeout(()=>{
						this.toastshow = false
					},2000)
				})
			},
			addsettle(){
				const product1 = {}
				product1.title = this.goods.title
				product1.img = this.topImages[0]
				product1.desc = this.goods.desc
				product1.oldPrice = this.goods.oldPrice
				product1.price = this.goods.realPrice
				product1.iid = this.iid
				product1.logo = this.shop.logo
				product1.name = this.shop.name
				product1.count = 1
				this.$store.commit('addsettlelist',product1)
			}
		},
	}
</script>

<style scoped>
	#detail{
		padding-top: 2.75rem;
	}
	.detail{
		display: flex;
	}
	.left img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle;
	}
	.detail-item{
		flex: 1;
		font-size: 0.875rem;
	}
	.active{
		color: red;
	}
	.detailswiper img{
		width: 100%;
	}
	.navbar1{
		background-color: white;
	}
	.content{
		height: calc(100vh - 93px);
	}
</style>
