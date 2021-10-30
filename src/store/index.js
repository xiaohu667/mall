import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		cartlist:[],
		settlelist:[],
		profileCount:0
  },
	getters:{
		cartLength(state){
			return state.cartlist.length
		}
	},
  mutations: {
		cartcount(state,playload){
			playload.count++
		},
		addTocart(state,playload){
			playload.checked = true
		  state.cartlist.push(playload)
		},
		profilecount(state){
			state.profileCount++
		},
		addsettlelist(state,playload){
			state.settlelist = []
			state.settlelist.push(playload)
		},
		addcount(state){
			state.settlelist[0].count++
		},
		subcount(state){
			if(state.settlelist[0].count <= 1){
				state.settlelist[0].count = 1
			}else{
				state.settlelist[0].count--
			}
		}
  },
  actions: {
		//如果在vuex中做了某个操作想让外面知道就得用promise
		addCart(context,playload){
			return new Promise((resolve,reject)=>{
				//find 在数组中查找到第一个符合条件的值并返回该值
			  let oldproduct = context.state.cartlist.find(item => item.iid == playload.iid)
			  if(oldproduct){
				  // oldproduct.count += 1
				  context.commit('cartcount',oldproduct)
					resolve('商品数量+1')
			  }else{
				  playload.count = 1
				  context.commit('addTocart',playload)
				  // context.state.cartlist.push(playload)
					resolve('商品添加成功')
			  }
			})
			
		}
  },
  modules: {
  }
})
