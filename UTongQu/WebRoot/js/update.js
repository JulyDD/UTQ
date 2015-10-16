 //update UserBasicInfo
  function updateUserBasicInfo(){
		var username=$.trim($(".update-name").val());
		var gender=$.trim($("input[type='radio']:checked").val());
		var birthday=$.trim($(".update-birthday").val());
		var address=$.trim($(".update-address").val());
		var job=$.trim($(".update-job").val());
			$.ajax({  
				type:"POST",
		        url:"users/Users_updateUserBasicInfo.action",  
		        data: "username="+username"&gender="+gender+"&birthday="+birthday+"&address="+address+"&job="+job,//传参  
		        dataType: "json",
		        cache : false,  
		        async : false, 
		        success:function(msg){  
		            document.getElementById("update-msg").innerHTML=msg.msg;  
		            //继续写jq的timer时间实现修改提示
		            
		          
		        },  
		        error:function(data){  
		        	bRet=false;
		            }  
		        }); 
			
			

		}