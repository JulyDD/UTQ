<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML >
<html>
  <head>
    <base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>U童趣——分享童年的乐趣</title>
<link type="text/css" rel="stylesheet" href="css/master.css" /><!--主样式-->
<link type="text/css" rel="stylesheet" href="css/utools.css" /><!--用户设置样式-->
<link type="text/css" rel="stylesheet" href="css/index.css"><!--瀑布流展示样式-->
<link type="text/css" rel="stylesheet" href="css/bannercase.css"><!--banner导航样式-->
<link type="text/css" rel="stylesheet" href="css/loginform.css"><!--登录注册弹窗样式-->
<link type="text/css" rel="stylesheet" href="css/code.css"><!--登录注册验证样式-->
<link type="text/css" rel="stylesheet" href="css/images.css"/><!--图片点击放大样式-->
<style>
    /**
     * Grid items
     */
    #tiles li {
      opacity: 0.9;
      transition: all 0.6s ease-out;
      -o-transition: all 0.6s ease-out;
      -moz-transition: all 0.6s ease-out;
      -webkit-transition: all 0.6s ease-out;      
    }
</style>
<script type="text/javascript" src="js/jquery-1.7.2.js"></script>
<!--script type="text/javascript" src="js/index.js"></script-->
<script type="text/javascript" src="js/toTop.js"></script>
<script type="text/javascript" src="js/utools.js"></script>
<script type="text/javascript" src="js/code.js"></script><!-- 登录验证效果 -->
<script type="text/javascript" src="js/jquery.imgbox.pack.js"></script>
<script type="text/javascript">
$(function(){
    imgs();	/*调用图片弹窗的方法*/
	$("#toTop").hide();/* toTop隐藏 */
	$(".easytip-div").hide();/* 登录注册验证隐藏 */
	
	/*随窗口变化    登录注册发生改变  */
	window.onresize=function(){
	   if(openwindow!=""){
	       if(openwindow=="showRegisterDialog"){
	           showRegisterDialog();
	       }else{
	          showDialog();
	       }
	   }
	};

});

</script>

</head>

<body>
 <!--登录窗口-->
<%@include file="console/login_form.jsp" %>

  <div id="page" class="page">
      <div class="top">
         
         <!-- 顶部导航栏 -->
        <%@include file="console/login_top_nav.jsp" %>
         <!-- 主页搜索栏 -->
        <%@include file="console/login_top_banner.jsp" %>
        
      </div>
      
      <div class="pagemain">
          <div class="recommend-line">
             <a>大家关注的</a>
          </div>
          <!-- 主页用户导航 -->
          <%@include file="console/login_nav.jsp" %>
          
          <div class="recommend-line">
             <a>大家推荐的</a>
          </div>
          
          <div id="main" role="main">
			<ul id="tiles">
				<!-- These is where we place content loaded from the Wookmark API -->
			</ul>

			<div id="loader">
				<div id="loaderCircle"></div>
			</div>

		  </div>
        <!-- 信息栏/未做 -->   
        <%@include file="console/msg.jsp" %>   
      </div>
      
      
      
      
  </div>
  <!-- toTop -->
  <%@include file="console/toTop.jsp" %>
<script type="text/javascript" src="js/loginform.js"></script>
<!--百度分享代码-->
<script type="text/javascript" src="js/baiduShare.js"></script>
<!-- Include the imagesLoaded plug-in -->
<script src="js/jquery.imagesloaded.js"></script>
<!-- Include the plug-in -->
<script src="js/jquery.wookmark.js"></script>
<!-- Once the page is loaded, initalize the plug-in. -->
  <script type="text/javascript">
    (function ($) {
      var handler = null,
          page = 1,
          isLoading = true,
          apiURL = 'contents/Contents_findAllContents.action';

      // Prepare layout options.
      var options = {
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#tiles'), // Optional, used for some extra CSS styling
        offset: 5, // Optional, the distance between grid items  //间隔
        itemWidth: 270 // Optional, the width of a grid item  //宽度
      };

      /**
       * When scrolled all the way to the bottom, add more tiles.
       */
      function onScroll(event) {
        // Only check when we're not still waiting for data.
        if(!isLoading) {
          // Check if we're within 100 pixels of the bottom edge of the broser window.
          var closeToBottom = ($(window).scrollTop() + $(window).height() > $(document).height() - 100);
          if(closeToBottom) {
            loadData();
          }
        }
      };

      /**
       * Refreshes the layout.
       */
      function applyLayout() {
        options.container.imagesLoaded(function() {
          // Create a new layout handler when images have loaded.
          handler = $('#tiles li');
          handler.wookmark(options);
        });
      };

      /**
       * Loads data from the API.
       */
      function loadData() {
        isLoading = true;
        $('#loaderCircle').show();

        $.ajax({
          url: apiURL,
          dataType: 'json',
          data: {page: page}, // Page parameter to make sure we load new data
          success: onLoadData
        });
      };

      /**
       * Receives data from the API, creates HTML for images and updates the layout
       */
      function onLoadData(data) {
        isLoading = false;
        $('#loaderCircle').hide();

        // Increment page index for future calls.
        page++;

        // Create HTML for the images.
         var moban='<li class="pic"><a target="_blank" href="{{image}}" title="{{title}}">'+
                '<img src="{{image}}"></a>'+
                '<p class="content">{{content}}</p>'+
                '<div class="imginfo">'+
                '<div class="headpic"><img src="{{headpic}}"></div>'+
                '<div class="imsg"><p><span>{{person}}</span><span>发布</span></p>'+
                '<span class="time">（{{time}}）</span></div></div>'+
                '<div class="action"><p><span>{{like}}喜欢</span><span>丨</span>'+
                '<span>{{dislike}}不喜欢</span><span>丨</span><span>{{comment}}评论</span></p></div></li>';
        var html = '';
        var i=0, length=data.data.length ;
        for(; i<length; i++) {
          console.log(data.data[i].content);
          html =moban.replace(/{{image}}/,"images/"+data.data[i].image)
          .replace(/{{image}}/,"images/"+data.data[i].image)
			.replace(/{{content}}/,data.data[i].content)
			.replace(/{{title}}/,data.data[i].title)
			.replace(/{{headpic}}/,"images/"+data.data[i].contentUserFace)
			.replace(/{{person}}/,data.data[i].contentUser)
			.replace(/{{time}}/,data.data[i].strDate)
			.replace(/{{like}}/,data.data[i].like)
			.replace(/{{dislike}}/,data.data[i].dislike)
			.replace(/{{comment}}/,data.data[i].comment);
          
          // Add image HTML to the page.
          $('#tiles').append(html);
          
        }

        // Apply layout.
        applyLayout();
      };

      // Capture scroll event.
      $(document).bind('scroll', onScroll);

      // Load first data from the API.
      loadData();
    })(jQuery);
  </script>
</body>
</html>
