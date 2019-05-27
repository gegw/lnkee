var _ = {

	mobile: /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),

	header: {
		event: $('.main-header-mobile-event'),
		target: $('.main-header-mobile-nav div'),
		target_function:'toggle',
		event_type: 'click',
		params:500
	},

	scroll:{
		header:{
			top:'.main-header-now',
			gt:'main-header-warp-white',
			lt:'',
			el:$('.main-header-warp'),
			set_attr:$('.main-header-set-attr')
		},
	},

	main_height_auto:$('.main-height-screen'),

	height:window.innerHeight,

	width:window.innerWidth,

	key:'',   //协助参数

	footer:{
		button:{
			el:$('.index-footer-button'),
			form:$('.index-footer-form'),
			success:$('.index-footer-success'),
		}
	},


};


// 完成 简单的时间注册
for (_.key in _){

	if (_.hasOwnProperty(_.key)){

		if (_[_.key] && _[_.key].event_type) {

			_[_.key].event.attr('data-event',_.key);
			_[_.key].event[_[_.key].event_type](function () {

				var key = $(this).attr('data-event');

				if (_[key].target[_[key].target_function]&&_[key].target[_[key].target_function](_[key].params)){

				} else {
					window[_[key].target_function].call(_[key].target,_[key].params);
				}

			});

		}

	}

}

// 设置满屏幕高度
_.main_height_auto.css('height',_.height);

// header 获取高度
_.scroll.header.top = $(_.scroll.header.top)[0].offsetHeight;

// //绑定 滚动事件
$(document).scroll(function () {

	var nowTop = $('html,body')[0].scrollTop;
	// 大于 固定使用高度 state 为 真 相反 小于 为 true
	var state =  nowTop >= _.scroll.header.top;
	// 设置符号
	var em = '';

	// 判断 防止一直重复触发
	if (state === _.scroll.header.state) return;
	// 进行短暂时缓存
	else _.scroll.header.state = state;

	// 设置符号
	em = state?'gt':'lt';

	var removeClass = _.scroll.header.gt;
	var addClass = _.scroll.header.lt;

	if (state) {
		removeClass = _.scroll.header.lt;
		addClass = _.scroll.header.gt;
	}


	_.scroll.header.el.removeClass(removeClass).addClass(addClass);

	// 设置 属性
	$.map(_.scroll.header.set_attr,function (item) {

		item = $(item);
		var attr = item.attr('data-attr') || '';
		attr = attr.split(',');


		for (var i=0,count=attr.length;i<count;i++){

			//设置属性
			item.attr(attr[i],item.attr('data-'+attr[i]+'-'+em));

		}
	})

});

//绑定 底部点击事件 通知我触发
_.footer.button.el.click(function () {

	_.footer.button.form.hide();

	_.footer.button.success.show();

});

//设置 获取 form 中所有的值
// 返回 data 和 rules
//  data 用于数据
//  rules 用于 校验 由此校验 类型
//   data-rules = 'empty,mobile';
//   data-msg = '请输入,格式不正确';
//   更多 rules 扩展需要自行去 扩展 test.js
_.serializeArray = function () {





};

