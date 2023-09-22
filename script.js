window.addEventListener('DOMContentLoaded',()=>{
	const iconMenu = document.querySelector('.icon-menu'),
			iconBody = document.querySelector('.header__body');
			
	iconMenu.addEventListener('click',(e)=>{
		iconMenu.classList.toggle('active')
		iconBody.classList.toggle('active')
	})

	const swiperBackground = new Swiper('.swiper-body', {
		direction: "vertical",
		slidesPerView: 1,
		autoplay:{
			delay: 10000,
			stopOnLastSlide: false, 
			disableOnInteraction: false,
		},
		speed: 1000,
	});

	const swiper = new Swiper('.project__swiper', {
		loop: false,
		observer: true,
		observeParents: true,
		spaceBetween:30,
		watchOverflow: true,
		speed: 1000,
		preloadImages: false,
		parallax: true,
		autoplay:{
			delay: 6000,
			stopOnLastSlide: false, 
			disableOnInteraction: false,
		},
		pagination:{
			el:'.project__dotts',
			clickable: true,
		},
		breakpoints:{
			320:{
				slidesPerView:1
			},
			500:{
				slidesPerView:1.5
			},
			650:{
				slidesPerView:2
			},
			912:{
				slidesPerView:3
			}
		}
			
	});
})