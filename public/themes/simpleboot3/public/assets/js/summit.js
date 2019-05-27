_.summitPage = {
	banner:{

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	},
	bannerSwiper:'#summit-swiper',


	select:{
		el:$('.summit-become-select-warp'),
		open:$('.summit-become-select-open'),
		select:$('.summit-become-select'),
		target:$('.summit-become-select-warp input[type=hidden]'),
		speed:500,
	},

	apply:{
		button:{
			el:$('.summit-apply-button'),
			success:$('.summit-become-success'),
			form:$('.summit-become-form'),
		}

	},

	tab:{
		top_nav:$('.summit-company-nav-item'),
		bottom_nav:$('.summit-company-info'),
		select:-1,
		model:$('.summit-company-model')
	}

};


// banner
_.summitPage.bannerSwiper = new Swiper(_.summitPage.bannerSwiper,_.summitPage.banner);

// 设置提交申请
_.summitPage.apply.button.el.click(function () {

	// _.summitPage.apply.button.form;
	//_.summitPage.apply.button.success.show();

});

//设置select 选择器
_.summitPage.select.open.click(function(){

	//  获取当前状态是否为打开
	var state = $(this).attr('data-state') || 'false';
	state = state === 'false'?false:true;
	var parent = $(this).parent();
	var target = $(this).children('input[type=hidden]');
	var select = parent.children('div.summit-become-select');
	var img_icon = $(this).children('img.summit-become-select-icon');

	// 如果为关闭触发
	if (!state){

		// 读取默认值
		var value = target.val() || '';

		// 如果存在值进行设置默认
		if ($.trim(value)!=''){

			// 获取 选中的 属性名称
			var selectKey = target.attr('data-attr') || 'id';

			select.children('div').removeClass('summit-become-select-select');

			select.children('div[data-'+selectKey+'='+value+']').click();

		}
	}

	// 设置 图标
	var iconKey = state?'open':'close';

	img_icon.attr('src',img_icon.attr('data-'+iconKey));

	//设置选中状态
	$(this).attr('data-state',!state);

	select.toggle(_.summitPage.select.speed);
});

// 设置选择器选中
_.summitPage.select.select.delegate('div','click',function () {

	var parent = $(this).parent();
	var supper = parent.parent();
	var target = supper.children('div').children('input[type=hidden]');
	var open =  supper.children('div').children('input[type=text]');
	var that = supper.children('div.summit-become-select-open');
	var img_icon = $(that).children('img.summit-become-select-icon');


	parent.children('div').removeClass('summit-become-select-select');

	var setArr = [target,open];
	var selectKey = '';
	var selectVal = '';

	for (var i=0,count=setArr.length;i<count;i++){
		selectKey = setArr[i].attr('data-attr');
		selectVal = '';
		if (selectKey === 'html'){
			selectVal = $(this).html();
		} else {
			selectVal = $(this).attr('data-'+selectKey);
		}
		setArr[i].val(selectVal);

		if (i == 0){
			parent.children('div[data-'+selectKey+'='+selectVal+']').addClass('summit-become-select-select');
		}

	}

	img_icon.attr('src',img_icon.attr('data-open'));

	//设置选中状态
	$(that).attr('data-state','false');

	parent.hide(_.summitPage.select.speed);

});

$.map(_.summitPage.select.target,function (item) {

	var value = $(item).val() || '';
	if ($.trim(value) != ''){

		var targetKey = $(item).attr('data-attr') || 'id';
		$(item).parent().parent().children('div.summit-become-select').children('div[data-'+targetKey+'='+value+']').click();

	}

});

_.summitPage.setClick = function () {

	var index = $(this).index();

	if (_.summitPage.tab.select  == index) return;

	_.summitPage.tab.select = index;

	_.summitPage.tab.top_nav.removeClass('summit-company-nav-select');
	_.summitPage.tab.top_nav.eq(index).addClass('summit-company-nav-select');

	_.summitPage.tab.bottom_nav.removeClass('summit-company-info-select');
	_.summitPage.tab.bottom_nav.eq(index).addClass('summit-company-info-select');

	_.summitPage.tab.model.hide();
	_.summitPage.tab.model.eq(index).show();
};
_.summitPage.tab.top_nav.click(_.summitPage.setClick);
_.summitPage.tab.bottom_nav.click(_.summitPage.setClick);
_.summitPage.tab.top_nav.eq(0).click();
