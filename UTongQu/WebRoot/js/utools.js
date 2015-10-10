$(function(){
	$(".menu dd").hide();
	$(".menu").hover(function(){
		/*$(this).find("dd").show(500);*/
		/*$(this).find("dd").slideDown(500);*/
		$(this).find("dd").fadeIn(500);
		},function(){
			/*$(this).find("dd").hide(500);*/
			/*$(this).find("dd").fadeOut(500);*/
			$(this).find("dd").slideUp(500);
			});
	
	})