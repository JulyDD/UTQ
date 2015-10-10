// JavaScript Document
$(window).on('load',function(){
	waterfall();
	var dataInt='{"data":[{"src":"3.jpg"},{"src":"2.jpg"},{"src":"6.jpg"},{"src":"5.jpg"},{"src":"7.jpg"},{"src":"4.jpg"},{"src":"8.jpg"}]}'
	
	//var data={"data":[{"img":"img_03.jpg","title":"童趣动漫","headpic":"afw_03.jpg","person":"黑子","time":"2012-04-15 17:07:28","like":"10","dislike":"0","comment":"0"}
	
		//			   ]};		   
					
	var moban='<div class="pic"><img src={{image}} /><div class="imgtitle"><span>童趣动漫</span></div><div class="imginfo">'+
                  '<div class="headpic"><img src="images/afw_03.jpg" /> </div><div class="imsg"><p><span class="sc">v2老黑</span><span>发布</span>'+
                   '</p><p class="time">（2012-04-15 17:07:28）</p></div></div><div class="action"><p><span>x 喜欢</span><span>丨</span><span>x 不喜欢</span>'+
                     '<span>丨</span><span>x 评论</span></p></div></div>';
			   
	
	 window.onscroll=function(){
        if(checkscrollside()){
			var data=JSON.parse(dataInt);
            $.each( data.data, function( index, value ){
                /*var $oPic = $('<div>').addClass('imgbox').appendTo( $( "#imgmain" ) );
                var $oBox = $('<div>').addClass('pic').appendTo( $oPic );*/
				
				//var $oTitle=$('div').addClass('imgtitle').appendTo($oBox);
				//var $oTitleSpan=$('span').appendTo($oTitle);
				//var $oImginfo=$('div').addClass('imginfo').appendTo($oBox);
				//var $oHeadpic=$('div').addClass('headpic').appendTo($oImginfo);
				
				var str=moban.replace(/{{image}}/,"images/"+value.src);
				var $div=$('<div>').addClass("imgbox").html(str);
				$("#imgmain").append($div);
				
				
				
				//$('<img>').attr('src','images/' + $(value).attr( 'src') ).appendTo($oBox);
          /*  for(var i=0;i<data.data.length;i++){
            var imgbox=document.createElement("div");
				imgbox.className="imgbox";
				
				var newdiv=moban.replace(/{{img_src}}/,data.data[i].img)
								.replace(/{{title_txt}}/,data.data[i].title)
								.replace(/{{headpic}}/,data.data[i].headpic)
								.replace(/{{person}}/,data.data[i].person)
								.replace(/{{release}}/,data.data[i].release)
								.replace(/{{time}}/,data.data[i].time)
								.replace(/{{like}}/,data.data[i].like)
								.replace(/{{dislike}}/,data.data[i].dislike)
								.replace(/{{comment}}/,data.data[i].comment);
				
				imgbox.innerHTML=newdiv;
				all.push(imgbox);
				document.getElementById("main").appendChild(imgbox);
			}*/
			  
            });
            waterfall();
        };
    }
	})
	
function waterfall(){
	var $boxs=$('#imgmain>div');
	var w=$boxs.eq(0).outerWidth();
	var cols=Math.floor($(window).width()/w); //列数
	$('#imgmain').width(w*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index, value) {
		
        var h=$boxs.eq(index).outerHeight();
		
		if(index<cols){
			hArr[index]=h;
		}else{
			
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
				})
				hArr[minHIndex]+=$boxs.eq(index).outerHeight();
			}
    });
	var odiv=document.getElementsByClassName("imgbox");
	for(var i=0;i<odiv.length;i++){
		 console.log(odiv[i].offsetHeight);
		}
       
	
	
	}
	
	
function checkscrollside(){
    /*var $aPin = $( "#imgmain>div" );
    var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2); //创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop = $( window ).scrollTop()//注意解决兼容性
    var documentH = $( document ).width();//页面高度
    return (lastPinH < scrollTop + documentH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
	*/
   var scrollTop = $(this).scrollTop();
　　var scrollHeight = $(document).height();
　　var windowHeight = $(this).height();
	 return (scrollTop + windowHeight == scrollHeight ) ? true : false;
}