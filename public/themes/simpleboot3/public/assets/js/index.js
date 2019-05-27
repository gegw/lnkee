_.indexPage = {

	banner:{

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	},
	bannerSwiper:'#index-swiper',

	scroll:[
		{
			el:'.index-atlas-item-one',
			options:{
				scrollamount:50,
				hoverstop: false
			}
		},
		{
			el:'.index-atlas-item-two',
			options:{
				scrollamount:60,
				hoverstop: false,
			}
		},
		{
			el:'.index-atlas-item-three',
			options:{
				scrollamount:70,
				hoverstop: false
			}
		},
	],

	top:$('.index-sidebar-scrollTop'),

	video:{
		img:$('.index-about-video-img'),
		button:$('.index-about-video-model'),
		video:$('.index-about-video-el')[0],
		state:0,   // 0 未播放 1暂停 2重播
		state_str:['play','pause','replay']
	},


	i:0,
	count:0,

};

if (!_.mobile) {
	//视频播放
	_.indexPage.video.button.click(function () {

		var state = $(this).attr('data-state') || 0;

		state = parseInt(state);

		if (state == 1){
			_.indexPage.video.video.pause();
			state = 0;
		} else {
			_.indexPage.video.video.play();
			state = 1;
		}

		_.indexPage.setVideoImg(state);

	});

	_.indexPage.setVideoImg = function(index){

		index = index || 0;

		var attrKey = 'data-'+_.indexPage.video.state_str[index];

		_.indexPage.video.img.attr('src',_.indexPage.video.img.attr(attrKey));

		if (index == 1){
			_.indexPage.video.button.addClass('index-about-video-hover');
		}else {
			_.indexPage.video.button.removeClass('index-about-video-hover');
		}

		_.indexPage.video.button.attr('data-state',index);

	};

	_.indexPage.video.video.onended = function(){

		_.indexPage.setVideoImg(2);

	};
}else{

	_.indexPage.video.button.hide();

	_.indexPage.video.video.controls=true;

}


// banner
_.indexPage.bannerSwiper = new Swiper(_.indexPage.bannerSwiper,_.indexPage.banner);

//设置无衔接
for (_.indexPage.count=_.indexPage.scroll.length;_.indexPage.i<_.indexPage.count;_.indexPage.i++){

	_.indexPage.width = $(_.indexPage.scroll[_.indexPage.i].el).children('img').length * 380;

	_.indexPage.widthCount = Math.ceil(_.width/_.indexPage.width);

	_.indexPage.html = $(_.indexPage.scroll[_.indexPage.i].el).html();
	
	_.indexPage.j = 0;
	for (;_.indexPage.j<_.indexPage.widthCount;_.indexPage.j++){
		_.indexPage.html+=_.indexPage.html;
	}

	$(_.indexPage.scroll[_.indexPage.i].el).html(_.indexPage.html);

	$(_.indexPage.scroll[_.indexPage.i].el).liMarquee(_.indexPage.scroll[_.indexPage.i].options);
}


//设置返回顶部
_.indexPage.top.click(function (){

	$('html,body').animate({scrollTop:0},500);

});
