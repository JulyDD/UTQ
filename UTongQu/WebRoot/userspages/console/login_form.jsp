<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<div class="ui-mask" id="mask" ></div>
<div class="ui-dialog" id="dialogMove" >
	<div class="ui-dialog-title" id="dialogDrag"   >
		<span>U童趣</span>
		<a class="ui-dialog-closebutton" href="javascript:void(0);" onclick="hideDialog();"></a>
	</div>
    <form id="login-form" method="post" action="users/Users_login.action" name="loginform"> 
	<div class="ui-dialog-content">
		<div class="ui-dialog-l40 ui-dialog-pt15">
			<input class="ui-dialog-input ui-dialog-input-username" type="text" maxlength="16" name="users.username" placeholder="用户名" />
		</div>
        
		<div class="ui-dialog-l40 ui-dialog-pt15">
			<input class="ui-dialog-input ui-dialog-input-password" type="password" maxlength="16" name="users.password" placeholder="密码" />
		</div>
        
        <div style="top: 280px;" class="easytip-div login-uid">
           <div class="easytip-text" ><span id="usernamemsg">用户名须为4—16位的英文字母或数字</span></div>
           <div style=" top:15px;" class="easytip-arrow"></div>
        </div>
        <div style="top: 340px;" class="easytip-div login-upwd">
           <div class="easytip-text">密码必须为6—16位的字母、数字或字符</div>
           <div style="top: 15px;" class="easytip-arrow"></div>
        </div>
        
		<div class="ui-dialog-l40 forget">
			<a href="javascript:void(0);" onclick="LoginToRegister();">立即注册</a>&nbsp;<a href="#">忘记密码</a> 
		</div>
		<div>
			
			<input type="submit" class="ui-dialog-submit" value="登录"/>
		</div>
	</div>
    </form>
</div>

<!--注册窗口-->
<div class="ui-registerDialog" id="registerDialogMove" >
    <div class="ui-registerDialog-title" id="registerDialogDrag"  >
		<span>U童趣</span>
		<a class="ui-registerDialog-closebutton" href="javascript:void(0);" onclick="hideRegisterDialog();"></a>
	</div>
    <form id="reg-form"  method="post" action="users/Users_register.action" name="reg-form"><!--id="register-form"-->
    <div class="ui-registerDialog-content">
		<div class="ui-registerDialog-l40 ui-registerDialog-pt15">
			<input class="ui-registerDialog-input ui-registerDialog-input-username" maxlength="16" type="text"  placeholder="您想要的用户名" name="users.username"  />
        </div>
        <div class="ui-registerDialog-l40 ui-registerDialog-pt15">
			<input class="ui-registerDialog-input ui-registerDialog-input-password" type="password" maxlength="16" placeholder="密码" name="users.password" />
        </div>
        <div class="ui-registerDialog-l40 ui-registerDialog-pt15">
            <input class="ui-registerDialog-input ui-registerDialog-input-passwordOK" type="password" maxlength="16" placeholder="确认密码" name="users.passwordConfirmation" />
            <input type="hidden" name="result" />
        </div>
        
        <div style="top: 290px;" class="easytip-div register-uid">
           <div class="easytip-text"><span id="Reg-uname"></span></div>
           <div style=" top:15px;" class="easytip-arrow"></div>
        </div>
        <div style="top: 350px;" class="easytip-div register-upwd">
           <div class="easytip-text"><span id="Reg-pwd"></span></div>
           <div style="top: 15px;" class="easytip-arrow"></div>
        </div>
        <div style="top: 410px;" class="easytip-div register-upwdok">
           <div class="easytip-text"><span id="Reg-pwd-ok"></span></div>
           <div style="top: 15px;" class="easytip-arrow"></div>
        </div>
        
        <div class="ui-registerDialog-l40 get">
			<a >已有账号？</a>&nbsp;<a href="javascript:void(0);" onclick="RegisterToLogin();">登录到U童趣</a> 
	    </div>
  	    <div>
  	       <a class="ui-registerDialog-submit" href="javascript:;" onclick="checkReg();" >注册</a>
  	       <!--  <input type="submit" class="ui-registerDialog-submit" value="注册"/> -->
        </div>
     </div>
    </form>
</div>