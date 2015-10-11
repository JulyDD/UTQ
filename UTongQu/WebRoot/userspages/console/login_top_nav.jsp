<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
                <!-- <dl class="menu">
                  <dt><img src="images/user2.png" /></dt>
                  <dd>
                      <a href="#" title=""><span><img src="images/user.png"/>我的童趣</span></a>
                      <a href="#" title=""><span><img src="images/set.png"/>账号设置</span></a>
                      <a href="#" title=""><span><img src="images/out.svg"/>注销登录</span></a>
                  </dd>
                </dl> -->
                <dl class="icos">
                 <dt id="menu">
                  <a href="#"><img src="images/user2.png" style="background:#666;" /></a>
                 <ul>
                 <li><a href="#" title=""><span><img src="images/user.png"/>我的童趣</span></a></li>
                 <li><a href="#" title=""><span><img src="images/set.png"/>账号设置</span></a></li>
                 <li><a href="#" title=""><span><img src="images/out.svg"/>注销登录</span></a></li>
                </ul>
                </dt>
                <dd><a href="#" title="写童趣"><img src="images/write2.png" /></a></dd>
               </dl>
               
            </div>
           </div>
        </div>