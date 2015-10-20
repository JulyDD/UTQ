jQuery(document).ready(function(){
	
//	isLegalFiletype();
//	contactAjaxFileUpload();
});

//校验上传文件类型
function isLegalFiletype(filename) {
//	var pattern = /(.jpg|.zip|.html|.htm)$/;
//	if (!pattern.exec(filename)) {
//		alert("文件格式不正确!");
//		return false;
//	}
	return true;
}

function contactAjaxFileUpload() {
//	$("#showTable").empty();
	/*$("#update-msg").ajaxStart(function() {
		document.getElementById("update-msg").innerHTML= "修改ing";  
		$(this).show();
	}).ajaxComplete(function() {
		// 文件上传完成将图片隐藏起来
		$(this).hide();
	});*/
	var username=$(".update-name").val();
	
	//
	if (isLegalFiletype($("#upload").val())) {
		$.ajaxFileUpload({
			url:"upload/FileUpload_updateFace.action?username="+username+"", 
			secureuri : false,// 一般设置为false
			fileElementId : 'upload', // 文件上传控件的id属性 <input
			dataType : 'json',
			success : function(msg) { // 服务器成功响应处理函数
				
				document.getElementById("update-msg").innerHTML=msg.msg;  
		        document.getElementById("image").src="images/"+msg.img;
		        document.getElementById("face").src="images/"+msg.img;
		        $(".update-loading").toggle(2000,function(){
		            $(".update-loading").toggle(1500);
		        });
			 
								
			},
			error : function(data, e) { // 服务器响应失败处理函数
				console.log(data);
				return;
			}
		});
	}
}


