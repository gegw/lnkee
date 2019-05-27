_.reportPage = {
	banner:{

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	},
	bannerSwiper:'#report-swiper',

};


// banner
_.reportPage.bannerSwiper = new Swiper(_.reportPage.bannerSwiper,_.reportPage.banner);
