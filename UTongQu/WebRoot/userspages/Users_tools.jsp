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
<link type="text/css" rel="stylesheet" href="css/login_success.css"><!--登录成功样式-->
<link type="text/css" rel="stylesheet" href="css/utools.css" /><!--用户设置样式-->
<link type="text/css" rel="stylesheet" href="css/index.css"><!--瀑布流展示样式-->
<link type="text/css" rel="stylesheet" href="css/images.css"/><!--图片点击放大样式-->
<link type="text/css" rel="stylesheet" href="css/image-info.css"/><!--详情页样式-->
<link type="text/css" rel="stylesheet" href="css/setting.css" media="screen"/><!--垂直手风琴效果样式-->
<link type="text/css" rel="stylesheet" href="css/font-awesome.min.css"/><!--垂直手风琴效果样式-->
<link type="text/css" rel="stylesheet" href="css/laydate.css"/><!--日期插件主样式-->
<link type="text/css" rel="stylesheet" href="css/laydate1.css"/><!--日期插件样式-->
<link type="text/css" rel="stylesheet" href="css/filehead.css"/><!--上传头像样式-->
<script type="text/javascript" src="js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="js/toTop.js"></script><!--向上等效果-->
<script type="text/javascript" src="js/utools.js"></script><!--用户菜单效果-->
<script type="text/javascript" src="js/waterfall.js"></script><!--瀑布流效果-->
<script type="text/javascript" src="js/setting.js"></script><!--垂直手风琴效果-->
<script type="text/javascript" src="js/zhan2.js"></script><!--点赞效果-->
<script type="text/javascript" src="js/jquery.imgbox.pack.js"></script><!--图片放大效果-->
<script type="text/javascript" src="js/laydate.js"></script><!--日期插件效果-->
<script type="text/javascript" src="js/file.js"></script><!--上传预览效果-->
<script type="text/javascript" src="js/update.js"></script><!--update-->
<script type="text/javascript">  
$(function(){
    imgs();	/*调用图片弹窗的方法*/
	$("#toTop").hide();
	$(".tool").css("visibility","hidden");
	

})
</script>

</head>

<body>

  <div id="page" class="page">
      <div class="top">
         
         <%@include file="console/login_top_nav.jsp" %>
    
      </div>
      
      <div class="pagemain">
          <div class="settings">
             <ul id="accordion" class="accordion">
                <h1>账号设置</h1>
                <li>
                    <div class="link"><i class="fa fa-paint-brush"></i>个人资料<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">
                       <form method="post" name="userinfo" action="#">
                        <li>
                           <table>
                             <tr><td class="name">登录名：</td><td><input type="text" disabled="disabled" name="users.username" value="<s:property value="#session.userinfo.get(0).username"/>" class="clear-input update-name" /></td><td></td></tr>
                             <tr><td class="name">性别：</td>
                                  <td>
                                      <label class="sex"><input type="radio" name="users.gender" value="1" <s:if test="#session.userinfo.get(0).gender==1">checked="checked"</s:if> />男</label>
                                      <label class="sex"><input type="radio" name="users.gender" value="0" <s:if test="#session.userinfo.get(0).gender==0">checked="checked"</s:if>/>女</label>
                                      <label class="sex"><input type="radio" name="users.gender" value="-1" <s:if test="#session.userinfo.get(0).gender==-1">checked="checked"</s:if> />保密</label>
                                  </td>
                                   
                                  <td>
                                  
                              </td></tr>
                             
                             <tr><td class="name">生日：</td><td><input class="laydate-icon clear-input update-birthday" id="demo" name="users.birthday" value="<s:property value="#session.userinfo.get(0).birthday"/>" > </td><td></td></tr>
                             <tr><td class="name">所在城市：</td><td><input type="text" placeholder="说说你的城市吧" name="users.address" class="clear-input update-address" value="<s:property value="#session.userinfo.get(0).address"/>" /></td><td></td></tr>
                             <tr><td class="name">职业：</td><td><input type="text" placeholder="说说你的职业吧" name="users.job" class="clear-input update-job" value="<s:property value="#session.userinfo.get(0).job"/>" /></td><td></td></tr>
                             <tr><td></td><td colspan="2"><a href="javascript:;" onclick="updateUserBasicInfo();" class="submit-btn">保存</a></td></tr>
                           </table>
                        </li>
                       </form>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="fa fa-code"></i>头像<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">
                       <li>
                        <form action="#" method="post" name="headform" enctype="multipart/form-data">
                          <table>
                           <tbody>
                            <tr><td><img id="image" src="images/<s:property value="#session.userinfo.get(0).face"/>" width="200px" style="padding:5px; border:1px solid #ccc; max-height:500px;" /></td>
                            
                            <td><a href="javascript:;" id="file" class="file">选择文件<input type="file" name="file" id="file_input" onchange="previewFile()"  /></a></td></tr>
                           </tbody>
                          </table>
                        </form>
                       </li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="fa fa-mobile"></i>密码<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">
                       <li>
                         <form action="#" method="post" name="pwdform">
                           <table>
                             <tr><td class="name">原密码：</td><td><input type="password" name="pwd-old" placeholder="原密码" class="clear-input"  /></td><td></td></tr>
                             <tr><td class="name">新密码：</td><td><input type="password" name="pwd-new" placeholder="新密码" class="clear-input" /></td><td></td></tr>
                             <tr><td class="name">确认密码：</td><td><input type="password" name="pwd-newOK" placeholder="确认密码" class="clear-input" /></td><td></td></tr>
                             <tr><td></td><td colspan="2"><a href="#" onclick="" class="submit-btn">保存</a></td></tr>
                           </table>
                         </form>
                       </li>
                    </ul>
                </li>
                <li><div class="link"><i class="fa fa-globe"></i>其它设置<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">
                       <li>
                       
                       </li>
                    </ul>
                </li>
            </ul>
          </div> 
          
         <div  style="max-width:150px;line-height:50px;font-size:16px;text-align:center;border-radius:3px;opacity:0.7;background:#000; position:relative; z-index:999; bottom:-400px;margin:0 auto ;color:#fff;display:none">
               <span><span class="update-msg"></span><img src="images/imgbox-spinner.gif" style=" height:11px; padding-top:5px;" /></span>
         </div> 
      </div>
        
      
      
  </div>
  <%@include file="console/toTop.jsp" %>
<script type="text/javascript" src="js/loginform.js"></script>
<!--百度分享代码-->
<!--<script type="text/javascript" src="js/baiduShare.js"></script>-->
<!--日期插件调用代码-->
<script>
!function(){
laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
laydate({elem: '#demo'});//绑定元素
}();
//日期范围限制
var start = {
    elem: '#start',
    format: 'YYYY-MM-DD',
    min: laydate.now(), //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         end.min = datas; //开始日选好后，重置结束日的最小日期
         end.start = datas //将结束日的初始值设定为开始日
    }
};
var end = {
    elem: '#end',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: '2099-06-16',
    istime: true,
    istoday: false,
    choose: function(datas){
        start.max = datas; //结束日选好后，充值开始日的最大日期
    }
};
laydate(start);
laydate(end);
//自定义日期格式
laydate({
    elem: '#test1',
    format: 'YYYY年MM月DD日',
    festival: true, //显示节日
    choose: function(datas){ //选择日期完毕的回调
        alert('得到：'+datas);
    }
});
//日期范围限定在昨天到明天
laydate({
    elem: '#hello3',
    min: laydate.now(-1), //-1代表昨天，-2代表前天，以此类推
    max: laydate.now(+1) //+1代表明天，+2代表后天，以此类推
});
</script>
</body>
</html>
