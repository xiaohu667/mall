import Vue from 'vue'
import VueRouter from 'vue-router'
const Air = ()=>import('../views/air/Air.vue')
const Ship = ()=>import('../views/ship/Ship.vue')
const Subrain = ()=>import('../views/subrain/Subrain.vue')
const Train = ()=>import('../views/train/Train.vue')
const Detail = ()=>import('../views/detail/Detail.vue')
const Settle =()=>import('../views/settle/Settle.vue')
Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect: '/air',
		meta:{
			showTabbar:true
		}
	},
	{
	  path: '/air',
	  component: Air,
		meta:{
			showTabbar:true
		}
	},
	{
		path: '/ship',
		component: Ship,
		meta:{
			showTabbar:true
		}
	},
	{
		path: '/subrain',
		component: Subrain,
		meta:{
			showTabbar:true
		}
	},
	{
		path: '/train',
		component: Train,
		meta:{
			showTabbar:true
		}
	},
	{
		path:'/detail/:iid',
		component: Detail,
		meta:{
			showTabbar:false
		}
	},
	{
		path:'/settle/:iid',
		component: Settle,
		meta:{
			showTabbar:false
		}
	}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
