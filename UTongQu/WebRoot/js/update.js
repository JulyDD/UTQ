 //update UserBasicInfo
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
	        data: /*"users.username="+username"&users.gender="+gender+"&users.birthday="+birthday+"&users.address="+address+"&users.job="+job*/
	        	 "username="+username+"&gender="+gender+"&birthday="+birthday+"&address="+address+"&job="+job,//传参  
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
			
				

			})
	
})