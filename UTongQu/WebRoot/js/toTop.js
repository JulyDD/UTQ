// JavaScript Document

$(window).scroll(function(){
		imgs();
	   /*if(toTop()){
	     $("#tools").css("visibility","visible");
	   	//alert("a");
       }else{
		 $("#tools").css("visibility","hidden");
		//alert("b")	
		}
		*/
		if(toTop()){
			$("#toTop").show(500);
		}else{
			$("#toTop").hide(500);
		}
		
		if(toLow()){
		 $(".navbj").css("-webkit-opacity","0.7");
			//alert("a");
		}else{
		 $(".navbj").css("-webkit-opacity","0.3");	
			//alert("b");
		      		
		}

		if(toNavSoso()){
		 $(".sosofornav").css({"visibility":"visible"});
		 $("#query").css("width","100%");
		
		}else{
		 $(".sosofornav").css({"visibility":"hidden"});
         $("#query").css("width","100%");
		 $(".go").css("top","-30px")
		}
			
			
		})
	//判断滚动条高度是否大于100
   function toTop(){
     var scrollTop = $(this).scrollTop();
  　  //var scrollHeight = $(document).height();
 　　  //var windowHeight = $(window).height();
     return (scrollTop>120) ? true : false;
	
	}
	//判断导航栏是否到内容处
   function toLow(){
	   var scrollTop = $(this).scrollTop();
	   var bannerHeight=$(".banner").height();
	   return (scrollTop+10>bannerHeight) ? true : false;
	   
	}	
	//判断导航栏是否超过搜索框，也就是banner的一半高度
   function toNavSoso(){
	    var scrollTop = $(this).scrollTop();
		var bannerHeight=$(".banner").height();
		return (scrollTop>bannerHeight/2+100) ? true : false;
			
   }
   
   //模拟向上效果
 function pageScroll()
 {     
  //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）    
  window.scrollBy(0,-2000);    
  //延时递归调用，模拟滚动向上效果    
  scrolldelay = setTimeout('pageScroll()',0);    
  //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值    
  var sTop=document.documentElement.scrollTop+document.body.scrollTop;    
  //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）    
  if(sTop==0) clearTimeout(scrolldelay);
 }
 