$(function(){
	$('.l-nav .l-box ul li').on('touchstart',function(){
		$(this).parent().children().removeClass('xuan').eq($(this).index()).addClass('xuan')
		$('.l-main').removeClass('l-block').eq($(this).index()).addClass('l-block')
		var i=$(this).index();
		if(i==0){
			$('.l-nav .l-box .xuan').css({
				'left': '1.85rem',
			})
			$('.l-nav .l-box .xuan2').css({
				'left': '4.82rem',
				'display': 'block',
			})
			
		}else if(i==1){
			$('.l-nav .l-box .xuan').css({
				'left': '4.15rem',
			})
			$('.l-nav .l-box .xuan2').css({
				'display': 'none',
			})
			$(this).css('border-radius',0)
		}else if(i==2){
			$('.l-nav .l-box .xuan').css({
				'left': '6.42rem',
			})
			$('.l-nav .l-box .xuan2').css({
				'left': '2.52rem',
				'display': 'block',
			})
			$(this).css('border-radius','0 0.07rem 0.07rem 0')
		}
	})

	var myScroll;
	myScroll = new IScroll('#wrapper', {
		mouseWheel: true,
		scrollbars: true		
	})
		
})