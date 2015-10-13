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
<link type="text/css" rel="stylesheet" href="css/index.css">
<link type="text/css" rel="stylesheet" href="css/loginform.css">
<link type="text/css" rel="stylesheet" href="css/code.css">
<link type="text/css" rel="stylesheet" href="css/images.css"/>
<link type="text/css" rel="stylesheet" href="css/image-info.css"/>
<script type="text/javascript" src="js/jquery-1.3.2.js"></script>
<!--script type="text/javascript" src="js/index.js"></script-->
<script type="text/javascript" src="js/toTop.js"></script>
<script type="text/javascript" src="js/utools.js"></script>
<script type="text/javascript" src="js/waterfall.js"></script>
<script type="text/javascript" src="js/code.js"></script>
<script type="text/javascript" src="js/zhan2.js"></script>
<script type="text/javascript" src="js/jquery.imgbox.pack.js"></script>
<script type="text/javascript">  
$(function(){
    imgs();	/*调用图片弹窗的方法*/
	$("#toTop").hide();
	$(".easytip-div").hide();
	
	window.onresize=function(){
	   if(openwindow!=""){
	       if(openwindow=="showRegisterDialog"){
	           showRegisterDialog();
	       }else{
	          showDialog();
	       }
	   }
	};
	
	
	$(".like").click(function() {
			$.tipsBox({
				obj: $(this),
				str: "喜欢+1",
                callback: function() {
                    //alert(5);
                }
			});
		});
	$(".dislike").click(function() {
			$.tipsBox({
				obj: $(this),
				str: "不喜欢+1",
                callback: function() {
                    //alert(5);
                }
			});
		});
	
	
})
</script>
</head>

<body>
 <!--登录窗口-->
<%@include file="console/login_form.jsp" %>

  <div id="page" class="page">
      <div class="top">
          <%@include file="console/login_top_nav.jsp" %>
      </div>
      
      <div class="pagemain">
           <div class="image-info">
              <div class="image-piece">
                 <div class="main-image">
                   <div class="image-holder">
                      <a class="example" title="" href="images/3.jpg"><img src="images/3.jpg" /></a>
                   </div>
                 </div>
                 <div class="tool-bar-bottom">
                   <div class="action">
                      <p><span><a class="like" href="#"><span>0</span>喜欢</a></span>
                         <span>丨</span>
                         <span><a class="dislike" href="#"><span>0</span>不喜欢</a></span>
                         <span>丨</span>
                         <span>x 评论</span>
                      </p>
                   </div>
                 </div>
                 <div class="tool-info">
                    <div class="comment-info">
                     <div class="comment">                       
                        <span class="head">
                           <img src="images/top.png" />
                        </span>
                        <p class="comm">xxxxxxxxxxxxxx</p>
                        <p><span class="ctime">发表于：（2012-04-15 17:07:28）</span></p>
                     </div>
                     <div style="clear:both;"></div>
                    </div>
                    <div class="clearfix">

                     <div class="comment-info">
                     <div class="comment">                       
                        <span class="head">
                           <img src="images/top.png" />
                        </span>
                      <form action="#" method="post" name="">
                       <p class="comm"><textarea class="clear-input" placeholder="说点什么吧" name="caption" autocomplete="off"></textarea></p>
                       <a href="#" class="pinglun"><span>发表评论</span></a>
                      </form>
                     </div>
                     <div style="clear:both;"></div>
                    </div>
                      
                    </div>
                    
                 </div>
                 
                 <div class="comments">
                    <div class="comment-info">
                     <div class="comment">                       
                        <span class="head">
                           <img src="images/top.png" />
                        </span>
                        <p class="comm">xxxxxxxxxxxxxx</p>
                        <p><span class="ctime">发表于：（2012-04-15 17:07:28）</span></p>
                     </div>
                     <div style="clear:both;"></div>
                    </div>
                    
                    <div class="comment-info">
                     <div class="comment">                       
                        <span class="head">
                           <img src="images/top.png" />
                        </span>
                        <p class="comm">xxxxxxxxxxxxxx</p>
                        <p><span class="ctime">发表于：（2012-04-15 17:07:28）</span></p>
                     </div>
                     <div style="clear:both;"></div>
                    </div>
                    
                    <div class="comment-info">
                     <div class="comment">                       
                        <span class="head">
                           <img src="images/top.png" />
                        </span>
                        <p class="comm">xxxxxxxxxxxxxx</p>
                        <p><span class="ctime">发表于：（2012-04-15 17:07:28）</span></p>
                     </div>
                     <div style="clear:both;"></div>
                    </div>
                    
                 </div>
                 
              </div>
              <div class="board-info">
                   <%@include file="console/user_info.jsp" %>  
              </div>    
           </div>
          <div style="clear:both;"></div>
 
         <%@include file="console/msg.jsp" %>           
      </div>
      
     
      
      
  </div>
  <%@include file="console/toTop.jsp" %>
<script type="text/javascript" src="js/loginform.js"></script>
<!--百度分享代码-->
<script type="text/javascript" src="js/baiduShare.js"></script>

</body>
</html>
