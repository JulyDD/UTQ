<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
         <div class="navbj"></div>
        <div class="nav">
           <div class="nav-center">
                <div class="logo">
               <a href="#"><span class="text">U童趣</span></a>
            </div>
            <div class="sosofornav">
               <form method="get" action="#" class="soso" >
                  <input id="query" type="text" size="27" autocomplete="off" placeholder="搜索你想要的" />
                  <a href="#" class="go"><img src="images/soso.png" /></a>
               </form>
            </div>
            <div class="tool">
               <a id="register" href="javascript:void(0);" onclick="showRegisterDialog();"><span class="text">注册</span></a>
               <a id="login" href="javascript:void(0);" onclick="showDialog();"><span class="text">登录</span></a>
            </div>
            <div class="utools">
                <dl class="icos">
                 <dt id="menu">
                  <a href="#" title="账户管理"><img id="face" src="images/<s:if test="null==#session.userinfo">user2.png</s:if><s:else><s:property value="#session.userinfo.get(0).face"/></s:else>" style="background:#666;" /></a>
                 <ul>
                 <li><a href="#" title=""><span><img src="images/user.png"/>我的童趣</span></a></li>
                 <li><a href="users/Users_enterTheToolsPage.action" title=""><span><img src="images/set.png"/>账号设置</span></a></li>
                 <li><a href="users/Users_loginout.action" title=""><span><img src="images/out.svg"/>注销登录</span></a></li>
                </ul>
                </dt>
                <dd><a href="users/Users_enterTheWritingPage.action" title="写内容"><img src="images/write.png" /></a></dd>
               </dl>
               
            </div>
           </div>
        </div>
        <!-- 判断用户登录否/设置top工具 -->
        <% if(session.getAttribute("userinfo")==null){
        	out.print("<script>$('.utools').css('display','none')</script>");
        } else{
        	out.print("<script>$('.tool').css('visibility','hidden')</script>");
        }%>
        