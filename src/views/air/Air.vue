<template>
	<div id="air">
		<NavBar class="home-nav">
			<div slot="center">购物街</div>
		</NavBar>
		<Tabcontrol :titles="['流行','新款','精选']" class="tab-control rela" @tabClick="tabclick" ref="tabcontrol1" v-show="isfixed"></Tabcontrol>
		<Scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scrollcontent="scrollcontent" @pullingup="loadmore">
		  <Swiper v-if="banners[0]">
				<img slot="img1" :src="banners[0].image" @load="imgload" />
				<img slot="img2" :src="banners[1].image" />
				<img slot="img3" :src="banners[2].image" />
				<img slot="img4" :src="banners[3].image" />
		  </Swiper>
		  <Recommend :recommends="recommends"></Recommend>
		  <Feature></Feature>
		  <Tabcontrol :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabclick" ref="tabcontrol"></Tabcontrol>
		  <GoodsList :goods="goods[currentype].list"></GoodsList>
		</Scroll>
		<!-- 在需要监听组件的原生事件时 需要加上.native修饰符 -->
		<BackTop @click.native="backtop" v-show="isShowbacktop"></BackTop>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import {request, getHomeGoods} from '@/network/request.js'
	import Swiper from '@/components/common/swiper/Swiper.vue'
	import Recommend from './airChild/Recommend.vue'
	import Feature from './airChild/Feature.vue'
	import Tabcontrol from '../../components/context/tabcontrol/Tabcontrol.vue'
	import GoodsList from '../../components/context/goods/GoodsList.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import BackTop from '../../components/context/backtop/BackTop.vue'
	export default{
		name:'Air',
		components:{
			NavBar,
			Swiper,
			Recommend,
			Feature,
			Tabcontrol,
			GoodsList,
			Scroll,
			BackTop
		},
		data() {
			return{
				banners:[],
				recommends:[],
				currentype:'pop',
				isShowbacktop:false,
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				tabcontrolsettop:0,
				isfixed:false
			}
		},
		created(){
			request({
				url:'/home/multidata'
			}).then(res=>{
				// console.log(res.data.data.banner.list)
				this.banners = res.data.data.banner.list;
				this.recommends = res.data.data.recommend.list
			})
			
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		// mounted() {
		// 	setTimeout(()=>{
		// 		console.log(this.$refs.tabcontrol.$el.offsetTop)
		// 	},2000) 
		// },
		methods:{
			tabclick(index){
				this.currentype = index < 1 ? 'pop' : index == 1 ? 'new' : 'sell'
				this.$refs.tabcontrol.currentStyle = index
				this.$refs.tabcontrol1.currentStyle = index
			},
			backtop(){
				this.$refs.scroll.scroll.scrollTo(0,0,2000)
			},
			scrollcontent(position){
				this.isShowbacktop = -position.y > 1000 ? true : false
				this.isfixed = (-position.y >= this.tabcontrolsettop)
			},
			loadmore(){
				this.getHomeGoods(this.currentype)
				//finishPullUp()结束上拉加载行为 告诉 BetterScroll 准备好下一次的 pullingUp 钩子
				this.$refs.scroll.scroll.finishPullUp()
				//刷新一次可滚动高度
				this.$refs.scroll.scroll.refresh()
			},
			imgload(){
				this.tabcontrolsettop = this.$refs.tabcontrol.$el.offsetTop
				// console.log(this.tabcontrolsettop)
			},
			//网络请求
			getHomeGoods(type){
				const page = this.goods[type].page + 1
				getHomeGoods(type,page).then(res=>{
					// console.log(res)
				  this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page += 1
					// console.log(this.goods[type].page)
			  })
			}
		}
	}
</script>

<style scoped>
	#air{
		padding-top: 2.75rem;
		height: 100vh;
	}
	.home-nav{
		background-color: #FF8F95;
		color: white;
	}
	.tab-control{
		position: sticky;
		top:2.7375rem;
	}
	.content{
		height: calc(100% - 49px);
		/* overflow: hidden; */
	}
	.rela{
		position: absolute;
		z-index: 999;
		width: 100%;
	}
</style>
