<template>
	<div class="swiper">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide>
				<slot name="img1"></slot>
			</swiper-slide>
			<swiper-slide>
				<slot name="img2"></slot>
			</swiper-slide>
			<swiper-slide>
				<slot name="img3"></slot>
			</swiper-slide>
			<swiper-slide>
				<slot name="img4"></slot>
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'

	export default {
		name:'Swiper',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					//循环模式开启
					loop: true,
					//自动切换
					autoplay: {
						//每隔2000毫秒切换一次
						delay: 2000,
						//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
						//如果设置为true 如拖动、点击、触碰后，自动切换将会停止
						disableOnInteraction: false
					},
					navigation: {
						//使用前进后退按钮来控制Swiper切换
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					}
				}
			}
		}
	}
</script>

<style>
	.swiper{
		width: 100%;
		/* height: 25rem; */
	}
	.swiper img{
		width: 100%;
		height: 100%;
		margin-top: 0rem;
	}
</style>
