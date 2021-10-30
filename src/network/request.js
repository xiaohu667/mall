import axios from 'axios'

export function request(congif){
	// 实例化axios对象
	const instance = axios.create({
		baseURL:'http://152.136.185.210:7878/api/hy66',
		timeout: 5000
	})
	//instace(congif)本身就是promise对象
	return instance(congif)
}
export function getHomeGoods(type,page){
	return request({
		url:'/home/data',
		params:{
			type,
			page
		}
	})
}
export function getDetailGoods(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}
export function getcommendgoods(){
	return request({
		url:'/recommend',
	})
}
export function getcategorygoods(){
	return request({
		url:'/category'
	})
}
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
export function getCategoryDetail(miniWallkey,type){
	return request({
		url:'/subcategory/detail',
		params:{
			miniWallkey,
			type
		}
	})
}
export class Goods{
	constructor(itemInfo,columns,services){
	    this.title = itemInfo.title
			this.desc = itemInfo.desc
			this.newPrice = itemInfo.price
			this.oldPrice = itemInfo.oldPrice
			this.discount = itemInfo.discountDesc
			this.columns = columns
			this.services = services
			this.realPrice = itemInfo.lowNowPrice
	}
}
export class Shop{
	constructor(shopInfo) {
	  this.logo = shopInfo.shopLogo
		this.name = shopInfo.name
		this.fans = shopInfo.cFans
		this.sells = shopInfo.cSells
		this.score = shopInfo.score
		this.goodsCount = shopInfo.cGoods
	}
}
export class Infoimages{
	constructor(detailInfo) {
		this.list = detailInfo.list
		this.key = detailInfo.key
	}
}
export class ItemParams{
	constructor(itemParams) {
	    this.set = itemParams.info.set
			this.tables = itemParams.rule.tables
	}
}
export class Rate{
	constructor(rate) {
		this.content = rate[0].content
		this.style = rate[0].style
		this.user = rate[0].user
	}
}
// export class Recommends{
// 	constructor(recommed) {
// 		this
// 	}
// }