$(window).bind('scroll',function(){
	if ($(window).scrollTop() > 749) {
	   $('.header-button').addClass('fixed');
}	else {
	   $('.header-button').removeClass('fixed');
}
});