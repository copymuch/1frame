$(document).ready(function(){
	$('.nav-bttn-burger').click(function(){
		$('.nav-bttn-bar').toggleClass('open-menu fixed-page');
		$(this).toggleClass('open-menu');
	});
});