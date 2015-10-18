// JavaScript Document

var lastfile="images/head-one.jpg";
function previewFile() {
	alert('test action');
 /* var preview = document.querySelector('#image');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = lastfile;
  }*/
  
	var username=$(".update-name").val();
	var file=document.querySelector('input[type=file]').files[0];
	alert(file);
  $.ajax({  
	  type:"POST",
      url:"fileUpload.action", 
      fileElementId : "upload",
      data:"username="+username+"&upload="+file,
      dataType: "json",
      cache : false,  
      async : false, 
      success:function(msg){  
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



/*function UpladFile() {

    var fileObj = document.getElementByIdx_x_x("file").files[0]; // js 获取文件对象

    var FileController = "../file/save";                    // 接收上传文件的后台地址 



    // FormData 对象

    var form = new FormData();

    form.append("author", "hooyes");                        // 可以增加表单数据

    form.append("file", fileObj);                           // 文件对象



    // XMLHttpRequest 对象

    var xhr = new XMLHttpRequest();

    xhr.open("post", FileController, true);

    xhr.onload = function () {

       // alert("上传完成!");

    };

    xhr.upload.addEventListener("progress", progressFunction, false);

    

    xhr.send(form);



}

function progressFunction(evt) {

    var progressBar = document.getElementByIdx_x_x("progressBar");

    var percentageDiv = document.getElementByIdx_x_x("percentage");

    if (evt.lengthComputable) {

        progressBar.max = evt.total;

        progressBar.value = evt.loaded;

        percentageDiv.innerHTML = Math.round(evt.loaded / evt.total * 100) + "%";

    }

}  



*/   