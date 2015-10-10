// JavaScript Document
var namereg=/^[0-9a-zA-Z]{4,16}$/; //用户名正则表达式    /*|[^\x00-\xff]{3,8}$  匹配双节字符包括中文*/
var pwdreg=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;  //密码正则表达式
var emailreg=/^[\w!#$%&'*+//=?^_`{|}~-]+(?:\.[\w!#$%&'*+//=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/; //邮箱正则
$(function(){
	//判断登录用户名
  $(".ui-dialog-input-username").blur(function(){
	var username=$.trim($(this).val());
	if(!namereg.test(username)){
		$(".login-uid").show(300);
		}else{
			$(".login-uid").hide(200);
			}
	});
	//判断登录密码
	$(".ui-dialog-input-password").blur(function(){
		var password=$.trim($(this).val());
		if(!pwdreg.test(password)){
			$(".login-upwd").show(300);
			}else{
				$(".login-upwd").hide(200);
				}
		});
	
	//判断注册用户名
  $(".ui-registerDialog-input-username").blur(function(){
	var username=$.trim($(this).val());
	if(!namereg.test(username)){
		$(".register-uid").show(300);
		}else{
			$(".register-uid").hide(200);
			}
	});
	//判断注册密码
	$(".ui-registerDialog-input-password").blur(function(){
		var password=$.trim($(this).val());
		if(!pwdreg.test(password)){
			$(".register-upwd").show(300);
			}else{
				$(".register-upwd").hide(200);
				}
		});
	//判断注册确认密码
	$(".ui-registerDialog-input-passwordOK").blur(function(){
		var password=$.trim($(".ui-registerDialog-input-password").val());
		var passwordOK=$.trim($(this).val());
		if(!pwdreg.test(passwordOK)&&passwordOK!=password){
			$(".register-upwdok").show(300);
			}else{
				$(".register-upwdok").hide(200);
				}
		});
})