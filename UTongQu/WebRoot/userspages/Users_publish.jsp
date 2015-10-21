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
<link type="text/css" rel="stylesheet" href="css/fileimg.css"/><!--上传头像样式-->
<script type="text/javascript" src="js/jquery-1.3.2.js"></script>
<!--script type="text/javascript" src="js/index.js"></script-->
<script type="text/javascript" src="js/toTop.js"></script>
<script type="text/javascript" src="js/utools.js"></script>
<script type="text/javascript" src="js/waterfall.js"></script>
<script type="text/javascript" src="js/code.js"></script>
<script type="text/javascript" src="js/zhan2.js"></script>
<script type="text/javascript" src="js/jquery.imgbox.pack.js"></script>
<script type="text/javascript" src="js/ajaxfileupload.js"></script><!--ajaxUpload-->
<script type="text/javascript" src="js/myJs.js"></script><!--upload-->
<script type="text/javascript" src="js/file.js"></script>
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
	
	tm_upload();
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
                   <form method="post" action="upload/FileUpload_addContent.action" name="publishform" enctype="multipart/form-data">
                      <!-- <div id="dropbox">
			            <span class="message">请把图片拖到这里 <br /><i>(一张你想分享的童年回忆)</i></span>
		              </div> -->
						<div class="drag-area" id="dropbox">
							<span class="message">请把图片拖到这里 <br /><i>(一张你想分享的童年回忆)</i></span>
						</div>
						<div class="dropbox-text">
		                 <input type="hidden" id="contentUser" value="<s:property value="#session.userinfo.get(0).username"/>">
		                 <input type="text" id="content"  placeholder="说说你的乐趣" />
		                 <input type="button" id="publish"  value="飞翔吧！童趣"/>
		              </div>
                   </form>
              </div>
              <div class="board-info">
                   <%@include file="console/user_info.jsp" %>  
              </div>
                   
           </div>
          <div style="clear:both;"></div>
 
         <%@include file="console/msg.jsp" %>           
      </div>
      <div class="content-loading" style="max-width:150px;line-height:50px;font-size:16px;text-align:center;border-radius:3px;opacity:0.7;background:#000; position:relative; z-index:999; bottom:100px;margin:0 auto ;color:#fff;display:none">
         <span id="content-msg"></span>
      </div> 
  </div>
  <%@include file="console/toTop.jsp" %>
<script type="text/javascript" src="js/loginform.js"></script>
<!--百度分享代码-->
<script type="text/javascript" src="js/baiduShare.js"></script>
<!-- Including the HTML5 Uploader plugin -->
<!-- <script type="text/javascript" src="js/jquery.filedrop.js"></script> -->
<!-- The main script file -->
<!-- <script type="text/javascript" src="js/fileimg.js"></script> -->
</body>
</html>
