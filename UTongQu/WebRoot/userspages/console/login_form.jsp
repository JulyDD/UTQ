<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<div class="ui-mask" id="mask" onselectstart="return false"></div>
<div class="ui-dialog" id="dialogMove" onselectstart='return false;'>
	<div class="ui-dialog-title" id="dialogDrag"  onselectstart="return false;" >
		<span>U童趣</span>
		<a class="ui-dialog-closebutton" href="javascript:void(0);" onclick="hideDialog();"></a>
	</div>
    <form id="login-form" method="post" action="#" name="loginform"> 
	<div class="ui-dialog-content">
		<div class="ui-dialog-l40 ui-dialog-pt15">
			<input class="ui-dialog-input ui-dialog-input-username" type="text" maxlength="16" placeholder="用户名" />
		</div>
        
		<div class="ui-dialog-l40 ui-dialog-pt15">
			<input class="ui-dialog-input ui-dialog-input-password" type="password" maxlength="16" placeholder="密码" />
		</div>
        
        <div style="top: 280px;" class="easytip-div login-uid">
           <div class="easytip-text">用户名须为4—16位的英文字母或数字</div>
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
			<a class="ui-dialog-submit" href="#" >登录</a>
		</div>
	</div>
    </form>
</div>

<!--注册窗口-->
<div class="ui-registerDialog" id="registerDialogMove" onselectstart='return false;'>
    <div class="ui-registerDialog-title" id="registerDialogDrag"  onselectstart="return false;" >
		<span>U童趣</span>
		<a class="ui-registerDialog-closebutton" href="javascript:void(0);" onclick="hideRegisterDialog();"></a>
	</div>
    <form id="reg-form"  method="post" action="#" name="registerform"><!--id="register-form"-->
    <div class="ui-registerDialog-content">
		<div class="ui-registerDialog-l40 ui-registerDialog-pt15">
			<input class="ui-registerDialog-input ui-registerDialog-input-username" maxlength="16" placeholder="您想要的用户名" name="uid" type="text" id="uid" easyform="length:4-16;char-normal;real-time;" message="用户名必须为4—16位的英文字母或数字" easytip="disappear:lost-focus;theme:blue;" ajax-message="用户名已存在!" />
        </div>
        <div class="ui-registerDialog-l40 ui-registerDialog-pt15">
			<input class="ui-registerDialog-input ui-registerDialog-input-password" type="password" maxlength="16" placeholder="密码" id="pwd1" easyform="length:6-16;" message="密码必须为6—16位" easytip="disappear:lost-focus;theme:blue;" />
        </div>
        <div class="ui-registerDialog-l40 ui-registerDialog-pt15">
            <input class="ui-registerDialog-input ui-registerDialog-input-passwordOK" type="password" maxlength="16" placeholder="确认密码" id="pwd2" easyform="length:6-16;equal:#psw1;" message="两次密码输入要一致" easytip="disappear:lost-focus;theme:blue;" />
            <input type="hidden" name="result" />
        </div>
        
        <div style="top: 290px;" class="easytip-div register-uid">
           <div class="easytip-text">用户名须为4—16位的英文字母或数字</div>
           <div style=" top:15px;" class="easytip-arrow"></div>
        </div>
        <div style="top: 350px;" class="easytip-div register-upwd">
           <div class="easytip-text">密码必须为6—16位的字母、数字或字符</div>
           <div style="top: 15px;" class="easytip-arrow"></div>
        </div>
        <div style="top: 410px;" class="easytip-div register-upwdok">
           <div class="easytip-text">两次密码输入要一致</div>
           <div style="top: 15px;" class="easytip-arrow"></div>
        </div>
        
        <div class="ui-registerDialog-l40 get">
			<a >已有账号？</a>&nbsp;<a href="javascript:void(0);" onclick="RegisterToLogin();">登录到U童趣</a> 
	    </div>
  	    <div>
		    <a class="ui-registerDialog-submit" href="#" >注册</a>
        </div>
     </div>
    </form>
</div>