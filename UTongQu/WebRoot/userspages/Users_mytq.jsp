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
<link type="text/css" rel="stylesheet" href="css/master.css" />
<link type="text/css" rel="stylesheet" href="css/login_success.css">
<link type="text/css" rel="stylesheet" href="css/utools.css" />
<link type="text/css" rel="stylesheet" href="css/loginform.css">
<link type="text/css" rel="stylesheet" href="css/code.css">
<link type="text/css" rel="stylesheet" href="css/index.css">
<link type="text/css" rel="stylesheet" href="css/images.css"/>
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
<script type="text/javascript" src="js/code.js"></script>
<script type="text/javascript" src="js/jquery.imgbox.pack.js"></script>
</head>

<body>
 <!--登录窗口-->
<%@include file="console/login_form.jsp" %>

  <div id="page" class="page">
      <div class="top">
         
          <%@include file="console/login_top_nav.jsp" %>
    
      </div>
      
      <div class="pagemain">
		<div id="main" role="main">
			<ul id="tiles">
				<!-- These is where we place content loaded from the Wookmark API -->
			</ul>

			<div id="loader">
				<div id="loaderCircle"></div>
			</div>

		</div>
	</div>
      
	</div>
  <%@include file="console/toTop.jsp" %>
<script type="text/javascript" src="js/loginform.js"></script>
<!--百度分享代码-->
<script type="text/javascript" src="js/baiduShare.js"></script>
<!-- Include the imagesLoaded plug-in -->
<script src="js/jquery.imagesloaded.js"></script>
<!-- Include the plug-in -->
<script src="js/jquery.wookmark.js"></script>

<!-- Once the page is loaded, initalize the plug-in. 须放在页面底部-->
  <script type="text/javascript">
    (function ($) {
      var $tiles = $('#tiles'),
          $handler = $('li', $tiles),
          page = 1,
          isLoading = true,
          apiURL = 'contents/Contents_findAllContents.action',
          lastRequestTimestamp = 0,
          fadeInDelay = 2000,
          $window = $(window),
          $document = $(document);

      // Prepare layout options.
      var options = {
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#tiles'), // Optional, used for some extra CSS styling
        offset: 5, // Optional, the distance between grid items
        itemWidth: 270 // Optional, the width of a grid item  //控制宽度
      };

      /**
       * When scrolled all the way to the bottom, add more tiles.
       */
      function onScroll(event) {
        // Only check when we're not still waiting for data.
        if (!isLoading) {
          // Check if we're within 100 pixels of the bottom edge of the broser window.
          var closeToBottom = ($window.scrollTop() + $window.height() > $document.height() - 100);
          if (closeToBottom) {
            // Only allow requests every second
            var currentTime = new Date().getTime();
            if (lastRequestTimestamp < currentTime - 1000) {
              lastRequestTimestamp = currentTime;
              loadData();
            }
          }
        }
      };

      /**
       * Refreshes the layout.
       */
      function applyLayout($newImages) {
        options.container.imagesLoaded(function() {
          // Destroy the old handler
          if ($handler.wookmarkInstance) {
            $handler.wookmarkInstance.clear();
          }

          // Create a new layout handler.
          $tiles.append($newImages);
          $handler = $('li', $tiles);
          $handler.wookmark(options);

          // Set opacity for each new image at a random time
          $newImages.each(function() {
            var $self = $(this);
            window.setTimeout(function() {
              $self.css('opacity', 1);
            }, Math.random() * fadeInDelay);
          });
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
          dataType: 'json', // Set to jsonp if you use a server on a different domain and change it's setting accordingly
          data: {page: page}, // Page parameter to make sure we load new data
          success: onLoadData
        });
      };

      /**
       * Receives data from the API, creates HTML for images and updates the layout
       */
      function onLoadData(response) {
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
        var html = '',
            //data = response.data,
            i = 0, length = response.data.length, image, opacity,
            $newImages;

        for (; i < length; i++) {
        	html =moban.replace(/{{image}}/,"images/"+response.data[i].image)
            .replace(/{{image}}/,"images/"+response.data[i].image)
  			.replace(/{{content}}/,response.data[i].content)
  			.replace(/{{title}}/,response.data[i].title)
  			.replace(/{{headpic}}/,"images/"+response.data[i].contentUserFace)
  			.replace(/{{person}}/,response.data[i].contentUser)
  			.replace(/{{time}}/,response.data[i].strDate)
  			.replace(/{{like}}/,response.data[i].like)
  			.replace(/{{dislike}}/,response.data[i].dislike)
  			.replace(/{{comment}}/,response.data[i].comment);
        	$newImages = $(html);
        	$("#tiles").append($newImages);
        }

        //$newImages = $(html);

        // Disable requests if we reached the end
        if (response.message == 'No more pictures') {
          $document.off('scroll', onScroll);
        }

        // Apply layout.
        applyLayout($newImages);
      };

      // Capture scroll event.
      $document.on('scroll', onScroll);

      // Load first data from the API.
      loadData();
    })(jQuery);
  </script>
</body>
</html>
