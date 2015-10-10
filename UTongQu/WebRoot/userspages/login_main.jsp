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
<script type="text/javascript" src="js/jquery-1.3.2.js"></script>
<!--script type="text/javascript" src="js/index.js"></script-->
<script type="text/javascript" src="js/toTop.js"></script>
<script type="text/javascript" src="js/utools.js"></script>
<script type="text/javascript" src="js/code.js"></script><!-- 登录验证效果 -->
<script type="text/javascript" src="js/waterfall.js"></script>
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
	
window.onload=function(){
    document.documentElement.scrollTop=0;   //加载时重置滚动高度
    waterFall("imgmain","imgboxs",{method:"waterFall.php",maxColumns:5,minColumns:3,dropDegree:"center",loadingId:"waterfall_loading",ajaxPOST:{title:"test"}},function(data,parent){
           
	  //图片块的HTML模板
      var moban='<div class="pic images"><a class="example" href="{{image}}"><img src={{image}} /></a><div class="content">'+
                   '<span class="content-text" >{{content}}</span>'+
                   '</div><div class="imgtitle"><span>{{title}}</span></div><div class="imginfo">'+
                  '<div class="headpic"><img src="{{headpic}}" /> </div><div class="imsg"><p><span class="sc">{{person}}</span><span>发布</span>'+
                   '</p><p class="time">（{{time}}）</p></div></div><div class="action"><p><span>{{like}}喜欢</span><span>丨</span><span>{{dislike}}不喜欢</span>'+
                     '<span>丨</span><span>{{comment}} 评论</span></p></div></div>';
      for(var i=0;i<data.data.length;i++){
          var odiv=document.createElement("div");
          odiv.className="imgboxs";
          var newdiv=moban.replace(/{{image}}/,"images/"+data.data[i].img)
				                .replace(/{{image}}/,"images/"+data.data[i].img)
								.replace(/{{content}}/,+data.data[i].content)
								.replace(/{{title}}/,data.data[i].title)
								.replace(/{{headpic}}/,"images/"+data.data[i].headpic)
								.replace(/{{person}}/,data.data[i].person)
								.replace(/{{time}}/,data.data[i].time)
								.replace(/{{like}}/,data.data[i].like)
								.replace(/{{dislike}}/,data.data[i].dislike)
								.replace(/{{comment}}/,data.data[i].comment);
								
          odiv.innerHTML=newdiv;
          parent.appendChild(odiv);
        }
    });

  }
})
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
          
          <div id="imgmain">
            <div class="imgboxs">
              <!-- 用户登录信息 -->
              <%@include file="console/user_info.jsp" %>  
            </div>
           
           <!-- 瀑布流BUG/占位 -->
           <div class="imgboxs" style="visibility:hidden; height:0;"></div>
           <div class="imgboxs" style="visibility:hidden; height:0;"></div>
           <div class="imgboxs" style="visibility:hidden; height:0;"></div>
           <div class="imgboxs" style="visibility:hidden; height:0;"></div>
          
            <!-- loading按钮自己通过样式调整 -->
            <%@include file="console/loading.jsp" %>
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

</body>
</html>
