_.agenda = {
	banner:{

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	},
	bannerSwiper:'#agenda-swiper',
	tableSwiper:'#agenda-table',
	table:{
		on:{
			slideChangeTransitionEnd:function () {

				_.agenda.setTableSelect(_.agenda.tableSwiper.realIndex);

			}
		}
	},
	tableNav:$('.agenda-guest-nav a'),
	tableSelect:0,

};


// banner
_.agenda.bannerSwiper = new Swiper(_.agenda.bannerSwiper,_.agenda.banner);
// table
_.agenda.tableSwiper = new Swiper(_.agenda.tableSwiper,_.agenda.table);

//设置选中样式
_.agenda.setTableSelect = function(i,must) {
	i = i || 0;

	if (_.agenda.tableSelect != i  || must){
		_.agenda.tableNav.removeClass('index-guest-nav-select');
		_.agenda.tableNav.eq(i).addClass('index-guest-nav-select');
		_.agenda.tableSelect = parseInt(i);
	}
};

_.agenda.tableNav.click(function (){

	var index = $(this).index();
	_.agenda.setTableSelect(index,true);
	_.agenda.tableSwiper&&_.agenda.tableSwiper.slideTo(index);

});
_.agenda.tableNav.eq(_.agenda.tableSelect).click();
