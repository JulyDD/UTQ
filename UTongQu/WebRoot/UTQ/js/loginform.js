// JavaScript Document

	//	获取元素对象	
	function g(id){return document.getElementById(id);}

	//	自动居中元素（el = Element）
	function autoCenter( el ){
		var bodyW = document.documentElement.clientWidth;
		var bodyH = document.documentElement.clientHeight;

		//var elW = el.offsetWidth;
		//var elH = el.offsetHeight;

		//el.style.left = (bodyW-elW)/2 + 'px';
		//el.style.top = (bodyH-elH)/2 + 'px';
		
	}

	//	自动扩展元素到全部显示区域
	function fillToBody( el ){
		el.style.width  = document.documentElement.clientWidth  +'px';
		el.style.height = document.documentElement.clientHeight + 'px';
	}

	//	重新调整对话框的位置和遮罩，并且展现
	function showDialog(){
		g('dialogMove').style.display = 'block';
		//$(".ui-dialog").show(500);
		g('mask').style.display = 'block';
		autoCenter( g('dialogMove') );
		fillToBody( g('mask') );
	}
	
	//显示注册对话框
	function showRegisterDialog(){
	   	g('registerDialogMove').style.display = 'block';
		g('mask').style.display = 'block';
		autoCenter( g('registerDialogMove') );
		fillToBody( g('mask') );
		
	}
	
	//	关闭注册对话框
	function hideRegisterDialog(){
		g('registerDialogMove').style.display = 'none';
		g('mask').style.display = 'none';
	}

	//	关闭登录对话框
	function hideDialog(){
		g('dialogMove').style.display = 'none';
		//$(".ui-dialog").hide(500);
		g('mask').style.display = 'none';
	}
	 //注册窗口到登录窗口
	function RegisterToLogin(){
	    hideRegisterDialog();	
		showDialog();
	}
	 //登录窗口到注册窗口
	function LoginToRegister(){
		hideDialog();
		showRegisterDialog()
    }
	

	//	侦听浏览器窗口大小变化
	window.onresize = showDialog;

	Dialog('dialogDrag','dialogMove');
	showDialog();

