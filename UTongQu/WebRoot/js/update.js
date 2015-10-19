 //update UserBasicInfo
var namereg=/^[0-9a-zA-Z]{4,16}$/; //用户名正则表达式    /*|[^\x00-\xff]{3,8}$  匹配双节字符包括中文*/
var pwdreg=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;  //密码正则表达式
var emailreg=/^[\w!#$%&'*+//=?^_`{|}~-]+(?:\.[\w!#$%&'*+//=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/; //邮箱正则

$(function(){

	$("#basic-info").click(function updateUserBasicInfo(){
		var username=$.trim($(".update-name").val());
		var gender=$.trim($("input[type='radio']:checked").val());
		var birthday=$.trim($(".update-birthday").val());
		var address=$.trim($(".update-address").val());
		var job=$.trim($(".update-job").val());
		$.ajax({  
			type:"POST",
	        url:"users/Users_updateUserBasicInfo.action",  
	        data: "username="+username
	              +"&gender="+gender
	              +"&birthday="+birthday
	              +"&address="+address
	              +"&job="+job,//传参  
	        dataType: "json",
	        cache : false,  
	        async : false, 
	        success:function(msg){  
	        	/*$('.basic-info').submit();*/
	        	console.log(msg.msg);
	            document.getElementById("update-msg").innerHTML=msg.msg;  
	            //继续写jq的定时器实现修改提示
	            
	            $(".update-loading").toggle(2000,function(){
	                $(".update-loading").toggle(1500);
	            });
	        },  
	        error:function(data){  
	        	console.log(data);
	            }  
	        }); 
	   });
	
	$("#update-pwd").click(function(){
		var username=$(".update-name").val();
		var pwd_old=$(".pwd-old").val();
		var pwd_new=$(".pwd-new").val();
		var pwd_newOK=$(".pwd-newOK").val();
		alert("old:"+pwd_old+"new:"+pwd_new+"newOK:"+pwd_newOK);
		if(!pwdreg.test(pwd_old)){
			document.getElementById("update-msg").innerHTML="原密码格式不对哟";  
            //继续写jq的定时器实现修改提示
            
            $(".update-loading").toggle(2000,function(){
                $(".update-loading").toggle(1500);
                return;
            });
		}else if(!pwdreg.test(pwd_new)){
			document.getElementById("update-msg").innerHTML="新密码格式不对哟";  
            //继续写jq的定时器实现修改提示
            
            $(".update-loading").toggle(2000,function(){
                $(".update-loading").toggle(1500);
            });
            return ;
		}else if(pwd_new!=pwd_newOK){
			document.getElementById("update-msg").innerHTML="两次密码不一致哟";  
            //继续写jq的定时器实现修改提示
            
            $(".update-loading").toggle(2000,function(){
                $(".update-loading").toggle(1500);
            });
            return ;
		}else{
			$.ajax({  
				type:"POST",
		        url:"users/Users_updateUserPassword.action",  
		        data: "username="+username
		              +"&pwd-old="+pwd_old
		              +"&pwd-new="+pwd_new
		              +"&pwd-newOK="+pwd_newOK,//传参  
		        dataType: "json",
		        cache : false,  
		        async : false, 
		        success:function(msg){  
		        	/*$('.basic-info').submit();*/
		        	console.log(msg.msg);
		            document.getElementById("update-msg").innerHTML=msg.msg;  
		            //继续写jq的定时器实现修改提示
		            
		            $(".update-loading").toggle(2000,function(){
		                $(".update-loading").toggle(1500);
		            });
		        },  
		        error:function(data){  
		        	console.log(data);
		            }  
		        }); 
		}
		
		
		
		
	})
	
})