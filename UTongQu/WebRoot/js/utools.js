$(function(){
	$(".menu dd").hide();
	$(".menu").hover(function(){
		$(this).find("dd").fadeIn(500);
		},function(){
			$(this).find("dd").slideUp(500);
			});
	
	})