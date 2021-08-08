$(document).ready(function(){
	$('.promo').addClass('promo-show');
	$(window).scroll(function(){
		if ($(this).scrollTop() ==  0){
		} else {
			if ($(this).scrollTop() > 100){
				$('.choice').addClass('choice-show');
		}
		}
	});
});
