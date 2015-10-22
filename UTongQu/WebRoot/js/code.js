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
    $(".ui-registerDialog-input-username").blur(function(){findUserName()});
  
	//判断注册密码
	$(".ui-registerDialog-input-password").blur(function(){checkRegPwd()});
	
	//判断注册确认密码
	$(".ui-registerDialog-input-passwordOK").blur(function(){checkRegPwdOK()});
	
})


  //判断注册用户名
  function findUserName(){
		var username=$.trim($(".ui-registerDialog-input-username").val());
		var bRet;
		var iRet=0;
			$.ajax({  
				type:"POST",
		        url:"users/Users_findUserName.action",  
		        data: "username="+username,//传参  
		        dataType: "json",
		        cache : false,  
		        success:function(msg){  
		        	console.log(msg.msg,msg.iRet);
		            document.getElementById("Reg-uname").innerHTML=msg.msg;  
		            $(".register-uid").show(300);
		            console.log(msg.iRet);
		            /*if(msg.iRet==1){
		            	bRet=true;
		            }else{
		            	bRet=false;
		            }*/
		            iRet=msg.iRet;
		          console.log("iRet:"+iRet);
		        },  
		        error:function(data){  
		        	bRet=false;
		        	console.log(data);
		            }  
		        }); 
			
			return iRet;

		}
  
  
	//判断注册密码
	function checkRegPwd(){
		var password=$.trim($(".ui-registerDialog-input-password").val());
		var bRet=false;
		if(!pwdreg.test(password)){
            document.getElementById("Reg-pwd").innerHTML='密码必须为6—16位的字母、数字或字符';
            bRet=false;
			}else{
				document.getElementById("Reg-pwd").innerHTML='密码可使用'
					bRet=true;
				}
		    $(".register-upwd").show(300);
		    return bRet;
		}
	
	//判断注册确认密码
	function checkRegPwdOK(){
		var password=$.trim($(".ui-registerDialog-input-password").val());
		var passwordOK=$.trim($(".ui-registerDialog-input-passwordOK").val());
		var bRet=false;
		if(passwordOK!=password){
			document.getElementById("Reg-pwd-ok").innerHTML='两次密码输入要一致';
			bRet=false;
			$(".register-upwdok").show(300);
			}else{
				bRet=true;
				$(".register-upwdok").hide(200);
				}
		return bRet;
		}


   //注册判断
	function checkReg(){
		
		if(findUserName()){
			 $(".ui-registerDialog-input-username").focus();
			 return;
		}else if(!checkRegPwd()){
			$(".ui-registerDialog-input-password").focus();
			return;
		}else if(!checkRegPwdOK()){
			$(".ui-registerDialog-input-passwordOK").focus();
			return;
		}else{
			$("#reg-form").submit();
		}
		
			
	}