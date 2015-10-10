// JavaScript Document
/*$(function(){
	$("#file").change(function(){
	var objUrl = getObjectURL(this.files[0]) ;
	console.log("objUrl = "+objUrl) ;
	if (objUrl) {
		$("#image").attr("src", objUrl) ;
	}
	}) ;
	//建立一個可存取到該file的url
	function getObjectURL(file) {
		var url = null ; 
		if (window.createObjectURL!=undefined) { // basic
			url = window.createObjectURL(file) ;
		} else if (window.URL!=undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file) ;
		} else if (window.webkitURL!=undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file) ;
		}
		return url ;
	}
	
	})*/
var lastfile="images/head-one.jpg";
function previewFile() {
  var preview = document.querySelector('#image');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = lastfile;
  }
}

   /* // 详情介绍页面
    var result = $("#image"); //获得最后图片显示的img
    var input = $("#file_input");

    //检测浏览器是否兼容FileReader因为这个 html5的新特性
    if (typeof FileReader === 'undefined') {
        alert("抱歉，你的浏览器不支持 FileReader");
        input[0].setAttribute('disabled', 'disabled');
        //这里加个[0]将jquery对象转化成dom对象
    } else {
        input.get(0).addEventListener('change', readFile, false);//同上
    }

    function readFile() {
        var file = this.files[0];
        if (!/image\/\w+/.test(file.type)) {
            alert("文件必须为图片！");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            result.attr("src", this.result);
        }
    }

    var result = document.getElementById("result");
    var input = document.getElementById("file_input");

    if (typeof FileReader === 'undefined') {
        result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input.setAttribute('disabled', 'disabled');
    } else {
        input.addEventListener('change', readFile, false);
    }

    function readFile() {
        var file = this.files[0];
        if (!/image\/\w+/.test(file.type)) {
            alert("文件必须为图片！");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            result.src = this.result;
        }
    }*/