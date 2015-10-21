//1、文件上传HTML5 通过drag把文件拖拽到浏览器的默认事件覆盖
//文件离开
document.ondragleave=function(e){
e.preventDefault();
	console.info("文件离开执行了我！！");
};
//鼠标松开文件
document.ondrop=function(e){
e.preventDefault();
	console.info("松开以后执行了我！");
};
//鼠标移动文件
document.ondragover=function(e){
e.preventDefault();
	console.info("文件移动以后执行了我！");
};

var fileList;
var formData;
var fileName;
var fileNameChange;
function tm_upload(){
	var uploadArea=document.getElementById("dropbox");
	//2、通过HTML5拖拽事件，ondrop，然后通过拖动区域监听浏览器的drop事件达到文件上传的目的
	uploadArea.addEventListener("drop", function(e){
		e.preventDefault();
		//3、从事件event中获取拖拽到浏览器的文件信息
	    fileList=e.dataTransfer.files;
		for(var i=0;i<fileList.length;i++){
			//此处判断只能上传图片
			if(fileList[i].type.indexOf("image")!=0){
				alert("请上传图片");
				return;				
			}
			//图片预览  这一步需要判断是什么浏览器  大家自己判断吧
			/*************************************/
			var img1=window.URL.createObjectURL(fileList[i]);
			/*************************************/
			/* var str="<div><img src='"+img1+"'/><p>"+fileList[i].name+"</p></div>";
			document.getElementById("preview").innerHTML +=str; */
			
			var str="<div class='preview'>"+
			        "<span class='imageHolder'>"+
			        "<img class='tqimg' src='"+img1+"' />"+
			        "<span class='uploaded'></span>"+
		            "</span>"+
		            /*"<div class='progressHolder'>"+
			        "<div class='progress'></div>"+
		            "</div>"+*/
	                "</div>";
			
	        $("#dropbox").append(str);
	        
		    fileName=fileList[i].name;
			console.info(fileName);
			var fileSize=fileList[i].size;
			console.info(fileSize);
			/*alert( fileName);*/
			
			//4、通过XMLHttpRequest上传文件到服务器  就是一个ajax请求
			var xhr=new XMLHttpRequest();
			//5、这里需要先写好一个data.jsp的上传文件，当然，你写成servlet或者是action都可以
			xhr.open("post","upload/FileUpload_addContentImage.action",true);
			xhr.setRequestHeader("X-Request-Width", "XMLHttpRequest");
			//6、通过HTML5 FormData动态设置表单元素
			var formData=new FormData();//动态给表单赋值，传递二进制文件
			//其实就相当于<input type="file" name="file"/>
			formData.append("upload",fileList[i]);
			
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4 && xhr.status==200){
					console.log(xhr);
					console.log(xhr.responseText);
					var tmp=JSON.parse(xhr.responseText);
					fileNameChange=tmp.image;
					console.log(fileNameChange);
				}
			}
			
			xhr.send(formData);
			
			
         }
	});
}
$(function(){

	$("#publish").click(function addContent(){
		var contentUser=$("#contentUser").val();  
		var content=$("#content").val();
		console.log("contentUser="+contentUser+",content="+content+",image="+fileNameChange);
		$.ajax({  
			type:"post",
	        url:'contents/Contents_addContent.action',  
	        data: "contentUser="+contentUser+"&contents="+content+"&image="+fileNameChange,//传参  
	        dataType: "json",
	        asyhc:false,
	        success:function(msg){  
	        	function jumurl(){
	        		window.location.href = 'users/Users_enterTheWritingPage.action';
	        		}
	        		setTimeout(jumurl,3000);
	        	
	        	document.getElementById("content-msg").innerHTML=msg.msg;  
		        $(".content-loading").toggle(2000,function(){
		        $(".content-loading").toggle(1500);
		        });
	        },  
	        error:function(data){  
	        	console.log("data:"+data);
	            }  
	        }); 
	})

	
})