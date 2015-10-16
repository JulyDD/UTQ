//JavaScript
//参数说明：上传按钮,容器，完成编辑按钮，提交按钮，后台地址
function getFileImg(fileBtn,viewbox,finishBtn,pushBtn,method){
	var fileBtn=document.getElementById(fileBtn);
	var viewbox=document.getElementById(viewbox);
	var finishBtn=document.getElementById(finishBtn);
	var pushBtn=document.getElementById(pushBtn);
	var Img;	//存放载入的图片
	var canvas;
	var ctx;
	var centerPoint={x:null,y:null};	//画布中心点
	var r=null;		//编辑区域半径
	var dir=null;	//编辑方向
	var isFill=false;	//是不是重绘
	var isFilling=false;	//是否在重绘中
	var isReelect=true;		//是否重选图片
	var isReverse=false;	//是否反向缩放
	var isMousedown=false;	//是否按下鼠标
	var isFinish=false;		//是否点击了完成按钮
	//编辑区域4个边角点坐标
	var cornerpoint={leftTop:{x:null,y:null},rightTop:{x:null,y:null},leftBottom:{x:null,y:null},rightBottom:{x:null,y:null}};
	var lastX=null;
	var lastY=null;

	finishBtn.disabled=true;
	pushBtn.disabled=true;

	addEvent(fileBtn,"change",function(e){
		var e=e||window.event;
		processFiles(this.files);
	})

	addEvent(viewbox,"dragenter",function(e){
		var e=e||window.event;
		e.stopPropagation();
		e.preventDefault();
	})

	addEvent(viewbox,"dragover",function(e){
		var e=e||window.event;
		e.stopPropagation();
		e.preventDefault();
	})

	addEvent(viewbox,"drop",function(e){
		var e=e||window.event;
		e.stopPropagation();
		e.preventDefault();
		processFiles(e.dataTransfer.files);
	})

	addEvent(finishBtn,"click",function(){
		if(!canvas){
			alert("请先上传图片！");
			return;
		}else if(isFinish) {
			return;
		}else{
			if(!canvas) return;
			var w=(cornerpoint.rightTop.x-cornerpoint.leftTop.x);
			var h=(cornerpoint.leftBottom.y-cornerpoint.leftTop.y);
			var x1=Math.floor(cornerpoint.leftTop.x/canvas.width*Img.width);
			var y1=Math.floor(cornerpoint.leftTop.y/canvas.height*Img.height);
			var x2=Math.floor(cornerpoint.rightBottom.x/canvas.width*Img.width);
			var y2=Math.floor(cornerpoint.rightBottom.y/canvas.height*Img.height);
			if(x1<0){
				x2-=x1;
				x1=0;
			}
			if(x2>Img.width){
				x1-=x2-Img.width;
				x2=Img.width;
			}
			if(y1<0){
				y2-=y1;
				y1=0;
			}
			if(y2>Img.height){
				y1-=y2-Img.height;
				y2=Img.height;
			}
			console.log(w,h,x1,y1,x2,y2);
			setCanvas(w,h);
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.drawImage(Img,x1,y1,x2,y2,0,0,canvas.width,canvas.height);
			removeEvent(canvas,"mousemove",mousemoveEvent);
			removeEvent(canvas,"mousedown",mousedownEvent);
			removeEvent(canvas,"mousemove",downmoveEvent);
			removeEvent(document.documentElement,"mouseup",mouseupEvent);
			removeEvent(pushBtn,"click",pushImg);
			pushBtn.disabled=false;
			finishBtn.disabled=true;
			isFinish=true;
			addEvent(pushBtn,"click",pushImg)
		}
	})

	//提交按钮事件
	function pushImg(){
		var data=canvas.toDataURL();
		var xmlhttp=new XMLHttpRequest();
		xmlhttp.open("POST",method,true);
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4&&xmlhttp.status==200){
				alert(xmlhttp.responseText);
				viewbox.removeChild(canvas);
				removeEvent(pushBtn,"click",pushImg);
				canvas=null;
				finishBtn.disabled=true;
				pushBtn.disabled=true;
			}
		}
		xmlhttp.send(JSON.stringify({title:"avatar",data:data}));
	}

	function processFiles(files){
		pushBtn.disabled=true;
		var file=files[0];
		var reader=new FileReader();
		reader.onload=function(e){
			var e=e||window.event;
			Img=new Image();
			Img.src=e.target.result;
			Img.onload=function(){
				isReelect=true;
				fillCanvas();
				finishBtn.disabled=false;
			}
		}
		reader.readAsDataURL(file);
	}

	//创建canvas
	function fillCanvas(){
		if(isFilling==true) return;
		isFilling=true;
		if(!viewbox.getElementsByTagName("canvas")[0]){
			canvas=document.createElement("canvas");
			ctx=canvas.getContext("2d");
			viewbox.appendChild(canvas);
		}
		if(isReelect){
			setCanvas(Img.width,Img.height);
			centerPoint.x=canvas.width/2;
			centerPoint.y=canvas.height/2;
			removeEvent(canvas,"mousemove",downmoveEvent);
			canvas.style.cursor="auto";
			lastX=null;
			lastY=null;
			isReverse=false;
			isFinish=false;
			addEvent(canvas,"mousemove",mousemoveEvent);
		}
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.drawImage(Img,0,0,canvas.width,canvas.height);
		mask();
		fillOuterContour();
		if(isMousedown){
			fillRectClipMask();
		}
		fillClipArcImg(centerPoint.x,centerPoint.y,r);
		fillDashed(centerPoint.x-r,centerPoint.y-r/3,centerPoint.x+r,centerPoint.y-r/3,3,1);
		fillDashed(centerPoint.x-r,centerPoint.y+r/3,centerPoint.x+r,centerPoint.y+r/3,3,1);
		fillDashed(centerPoint.x-r/3,centerPoint.y-r,centerPoint.x-r/3,centerPoint.y+r,3,1);
		fillDashed(centerPoint.x+r/3,centerPoint.y-r,centerPoint.x+r/3,centerPoint.y+r,3,1);
		fillArcDashed(centerPoint.x,centerPoint.y,r,3,1);
		fillOuterPoint();
		if(!isFill) addEvent(canvas,"mousemove",mousemoveEvent);
		isFilling=false;
	}

	//根据图片设置canvas和宽高和垂直居中
	function setCanvas(imgWidth,imgHeight){
		var max=Math.max(imgWidth,imgHeight);
		var boxW=parseInt(getStyle(viewbox,"width"));
		var boxH=parseInt(getStyle(viewbox,"height"));	
		if(max==imgWidth){
			canvas.width=max<boxW?max:boxW;
			canvas.height=imgHeight/(max/canvas.width);
		}else{
			canvas.height=max<boxH?max:boxH;
			canvas.width=imgWidth/(max/canvas.height);
		}
		viewbox.style.position="relative";
		canvas.style.position="absolute";
		canvas.style.top="50%";
		canvas.style.marginTop=-canvas.height/2+"px";
		canvas.style.left="50%";
		canvas.style.marginLeft=-canvas.width/2+"px";
	}

	//获取最终应用在元素身上的样式
	function getStyle(element,cssName){
		return window.getComputedStyle?getComputedStyle(element)[cssName]:element.currentStyle[cssName];
	}

	//绘制编辑区域外轮廓
	function fillOuterContour(){
		r=isReelect?Math.round(Math.min(canvas.width,canvas.height)*8/10/2):r;		//初始半径为canvas最小边的80%的一半
		var x=centerPoint.x;	//中心点x坐标
		var y=centerPoint.y;	//中心点y坐标
		cornerpoint.leftTop.x=x-r;
		cornerpoint.leftTop.y=y-r;
		cornerpoint.rightTop.x=x+r;
		cornerpoint.rightTop.y=y-r;
		cornerpoint.leftBottom.x=x-r;
		cornerpoint.leftBottom.y=y+r;
		cornerpoint.rightBottom.x=x+r;
		cornerpoint.rightBottom.y=y+r;
		ctx.lineWidth=1;
		ctx.strokeStyle="#0A7CCA";
		ctx.strokeRect(cornerpoint.leftTop.x,cornerpoint.leftTop.y,cornerpoint.rightBottom.x-cornerpoint.leftTop.x,cornerpoint.rightBottom.y-cornerpoint.leftTop.y)
	}

	//绘制编辑区域边角点
	function fillOuterPoint(){
		var _x=0;
		var _y=0;
		for(var i in cornerpoint){
			if(cornerpoint.hasOwnProperty(i)){
				switch(i){
					case "leftTop" :
						_x=cornerpoint[i].x+r;
						_y=cornerpoint[i].y;
						break;
					case "rightTop" :
						_y=cornerpoint[i].y+r;
						_x=cornerpoint[i].x;
						break;
					case "leftBottom" :
						_y=cornerpoint[i].y-r;
						_x=cornerpoint[i].x
						break;
					case "rightBottom" :
						_x=cornerpoint[i].x-r;
						_y=cornerpoint[i].y;
						break;
				}
				ctx.fillStyle="#0A7CCA";
				ctx.fillRect(cornerpoint[i].x-2,cornerpoint[i].y-2,4,4);
				ctx.fillRect(_x-2,_y-2,4,4);
			}
		}
	}

	//绘制虚线
	function fillDashed(x1,y1,x2,y2,spaceWidth,lineWidth){
		ctx.strokeStyle="#ffffff";
		ctx.lineWidth=lineWidth;
		var _x=x2-x1;
		var _y=y2-y1;
		var n=Math.floor(Math.sqrt(_x*_x+_y*_y)/spaceWidth);
		for(var i=0;i<n;i++){
			if(i%2!=0){
				ctx.beginPath();
				ctx.moveTo(x1+i*(_x/n),y1+i*(_y/n));
				ctx.lineTo(x1+(i+1)*(_x/n),y1+(i+1)*(_y/n));
				ctx.stroke();
				ctx.closePath();
			}
		}
	}

	//绘制圆形虚线
	function fillArcDashed(x,y,r,spaceWidth,lineWidth){
		var n=2*r*Math.PI/spaceWidth;
		ctx.lineWidth=lineWidth;
		for(var i=0;i<n;i++){
			if(i%2!=0){
				ctx.beginPath();
				ctx.arc(x,y,r,i/n*2*Math.PI,(i+1)/n*2*Math.PI);
				ctx.stroke();
				ctx.closePath();
			}
		}
	}

	//绘制遮罩阴影层
	function mask(){
		ctx.save();
		ctx.fillStyle="#000";
		ctx.globalAlpha=0.4;
		ctx.fillRect(0,0,canvas.width,canvas.height)
		ctx.restore();
	}

	//中心方形编辑区域的遮罩，拖动时透明度变为0.2
	function fillRectClipMask(){
		var x=cornerpoint.leftTop.x;
		var y=cornerpoint.leftTop.y;
		ctx.save();
		ctx.strokeStyle="transparent";
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(cornerpoint.rightBottom.x,y);
		ctx.lineTo(cornerpoint.rightBottom.x,cornerpoint.rightBottom.y);
		ctx.lineTo(x,cornerpoint.leftBottom.y);
		ctx.closePath();
		ctx.stroke();
		ctx.clip();
		ctx.drawImage(Img,0,0,canvas.width,canvas.height);
		ctx.fillStyle="#000";
		ctx.globalAlpha=0.2;
		ctx.fillRect(x,y,cornerpoint.rightBottom.x-x,cornerpoint.rightBottom.y-y);
		ctx.restore();
	}

	//因为覆盖了一层半透明遮罩，用剪切区域重新绘制图形将中间的圆形区域露出来
	function fillClipArcImg(x,y,r){
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle="transparent";
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.clip();
		ctx.drawImage(Img,0,0,canvas.width,canvas.height);
		ctx.restore();
	}

	//添加事件
	function addEvent(element,event,fun){
		if(window.addEventListener){
			element.addEventListener(event,fun,false);
		}else{
			element.attachEvent("on"+event,fun);
		}
	}

	//移除事件
	function removeEvent(element,event,fun){
		if(window.removeEventListener){
			element.removeEventListener(event,fun,false);
		}else{
			element.detachEvent("on"+event,fun);
		}
	}

	//鼠标在canvas上移动时的事件
	function mousemoveEvent(e){
		var e=e||window.event;
		var o=getCoordinate(canvas,e.clientX,e.clientY);
		checkCursorStyle(o.x,o.y);
		if(canvas.style.cursor!="auto"){
			addEvent(canvas,"mousedown",mousedownEvent);
			addEvent(document.documentElement,"mouseup",mouseupEvent);
		}else{
			removeEvent(canvas,"mousedown",mousedownEvent);
			removeEvent(document.documentElement,"mouseup",mouseupEvent);
		}
	}

	//鼠标移到关键点上的点下事件
	function mousedownEvent(){
		removeEvent(canvas,"mousemove",mousemoveEvent);
		addEvent(canvas,"mousemove",downmoveEvent);
	}

	//鼠标弹起时的事件
	function mouseupEvent(e){
		var e=e||window.event;
		var o=getCoordinate(canvas,e.clientX,e.clientY);
		lastX=null;
		lastY=null;
		isReverse=false;
		canvas.style.cursor="auto";
		removeEvent(canvas,"mousemove",downmoveEvent);
		addEvent(canvas,"mousemove",mousemoveEvent);
		isMousedown=false;
		checkCursorStyle(o.x,o.y);
		fillCanvas();
	}

	//鼠标点下移动时的事件
	function downmoveEvent(e){
		var e=e||window.event;
		var o=getCoordinate(canvas,e.clientX,e.clientY);
		var nowX=o.x;
		var nowY=o.y;
		var diffX;
		var diffY;
		var _diff;
		isMousedown=true;
		if(canvas.style.cursor=="move"){
			if(lastX==null){
				lastX=nowX;
				lastY=nowY;
				return;
			} 
			diffX=nowX-lastX;
			diffY=nowY-lastY;
			if(cornerpoint.leftTop.x<=0&&diffX<0) diffX=0;
			if(cornerpoint.leftTop.y<=0&&diffY<0) diffY=0;
			if(cornerpoint.rightTop.x>=canvas.width&&diffX>0) diffX=0;
			if(cornerpoint.leftBottom.y>=canvas.height&&diffY>0) diffY=0;
			centerPoint.x+=diffX;
			centerPoint.y+=diffY;
			lastX=nowX;
			lastY=nowY;
			_diff=rebound();
			if(_diff){
				centerPoint[_diff[1]]-=_diff[0];
			}
			isFill=true;
			isReelect=false;
			if(!isFilling) {
				fillCanvas();
			}
			return;
		}
		if(dir=="leftTop"||dir=="rightTop"){
			diffX=(dir=="leftTop")?(nowX-cornerpoint.leftTop.x):(nowX-cornerpoint.rightTop.x);
			if(isOverStep(diffX)) return;
			centerPoint.x+=diffX/2;
			centerPoint.y+=(dir=="leftTop")?diffX/2:-diffX/2;
			r+=(dir=="leftTop")?-diffX/2:diffX/2;
			if(r<0){
				r=Math.abs(r);
				isReverse=true;
				dir=(dir=="leftTop")?"rightBottom":"leftBottom";
			}
			_diff=rebound();
			if(_diff){
				r-=_diff[0];
				centerPoint[_diff[1]]-=_diff[0];
			}
			isFill=true;
			isReelect=false;
			fillCanvas();
		}else if(dir=="leftBottom"||dir=="rightBottom"){
			diffX=(dir=="leftBottom")?(nowX-cornerpoint.leftBottom.x):(nowX-cornerpoint.rightBottom.x);
			if(isOverStep(diffX)) return;
			centerPoint.x+=diffX/2;
			centerPoint.y+=(dir=="leftBottom")?-diffX/2:diffX/2;
			r+=(dir=="leftBottom")?-diffX/2:diffX/2;
			if(r<0){
				r=Math.abs(r);
				isReverse=true;
				dir=(dir=="leftBottom")?"rightTop":"leftTop";
			}
			_diff=rebound();
			if(_diff){
				r-=_diff[0];
				centerPoint[_diff[1]]-=_diff[0];
			}
			isFill=true;
			isReelect=false;
			fillCanvas();
		}else if(dir=="left"){
			diffX=nowX-cornerpoint.leftTop.x;
			if(isOverStep(diffX)) return;
			centerPoint.x+=diffX/2;
			r-=diffX/2;
			if(r<0){
				r=Math.abs(r);
				isReverse=true;
				dir="right";
			}
			_diff=rebound();
			if(_diff){
				r-=_diff[0];
				centerPoint[_diff[1]]-=_diff[0];
			}
			isFill=true;
			isReelect=false;
			fillCanvas();
		}else if(dir=="right"){
			diffX=nowX-cornerpoint.rightTop.x;
			if(isOverStep(diffX)) return;
			centerPoint.x+=diffX/2;
			r+=diffX/2;
			if(r<0){
				r=Math.abs(r);
				isReverse=true;
				dir="left";
			}
			_diff=rebound();
			if(_diff){
				r-=_diff[0];
				centerPoint[_diff[1]]-=_diff[0];
			}
			isFill=true;
			isReelect=false;
			fillCanvas();
		}else if(dir=="top"){
			diffY=nowY-cornerpoint.leftTop.y;
			if(isOverStep(diffX,diffY)) return;
			centerPoint.y+=diffY/2;
			r-=diffY/2;
			if(r<0){
				r=Math.abs(r);
				isReverse=true;
				dir="bottom";
			}
			_diff=rebound();
			if(_diff){
				r-=_diff[0];
				centerPoint[_diff[1]]-=_diff[0];
			}
			isFill=true;
			isReelect=false;
			fillCanvas();
		}else if(dir=="bottom"){
			diffY=nowY-cornerpoint.leftBottom.y;
			if(isOverStep(diffX,diffY)) return;
			centerPoint.y+=diffY/2;
			r+=diffY/2;
			if(r<0){
				r=Math.abs(r);
				isReverse=true;
				dir="top";
			}
			_diff=rebound();
			if(_diff){
				r-=_diff[0];
				centerPoint[_diff[1]]-=_diff[0];
			}
			isFill=true;
			isReelect=false;
			fillCanvas();
		}
	}

	//获取鼠标相对元素的坐标
	function getCoordinate(element,x,y){
		var x=x-element.getBoundingClientRect().left;
		var y=y-element.getBoundingClientRect().top;
		return {x:x,y:y};
	}

	//检测鼠标canvas的关键点上的样式
	function checkCursorStyle(x,y){
		dir=checkCursorInPoint(x,y)||checkCursorInOter(x,y);
		if(dir){
			switch(dir){
				case "leftTop":
					canvas.style.cursor="nw-resize";
					break;
				case "rightTop":
					canvas.style.cursor="ne-resize";
					break;
				case "leftBottom":
					canvas.style.cursor="sw-resize";
					break;
				case "rightBottom":
					canvas.style.cursor="se-resize";
					break;
				case "left":
					canvas.style.cursor="w-resize";
					break;
				case "right":
					canvas.style.cursor="e-resize";
					break;
				case "top":
					canvas.style.cursor="n-resize";
					break;
				case "bottom":
					canvas.style.cursor="s-resize";
					break;
			}
		}else if(x>cornerpoint.leftTop.x&&x<cornerpoint.rightTop.x&&y>cornerpoint.leftTop.y&&y<cornerpoint.leftBottom.y){
			canvas.style.cursor="move";
		}else {
			canvas.style.cursor="auto";
		}
	}

	//判断鼠标是否处在轮廓点上
	function checkCursorInPoint(x,y){
		var _x=0;
		var _y=0;
		var n;
		for(var i in cornerpoint){
			if(cornerpoint.hasOwnProperty(i)){
				switch(i){
					case "leftTop" :
						_x=cornerpoint[i].x+r;
						_y=cornerpoint[i].y;
						n="top";
						break;
					case "rightTop" :
						_y=cornerpoint[i].y+r;
						_x=cornerpoint[i].x;
						n="right";
						break;
					case "leftBottom" :
						_y=cornerpoint[i].y-r;
						_x=cornerpoint[i].x;
						n="left";
						break;
					case "rightBottom" :
						_x=cornerpoint[i].x-r;
						_y=cornerpoint[i].y;
						n="bottom";
						break;
				}
				
				if(Math.abs(cornerpoint[i].x-x)<=2&&Math.abs(cornerpoint[i].y-y)<=2){
					return i;
				}else if(Math.abs(_x-x)<=2&&Math.abs(_y-y)<=2){
					return n;
				}
			}
		}
		return false;
	}

	//检测鼠标是否在轮廓线上
	function checkCursorInOter(x,y){
		if(x==cornerpoint.leftTop.x&&y>cornerpoint.leftTop.y&&y<cornerpoint.leftBottom.y){
			return "left";
		}else if(x==cornerpoint.rightTop.x&&y>cornerpoint.rightTop.y&&y<cornerpoint.rightBottom.y){
			return "right";
		}else if(y==cornerpoint.leftTop.y&&x>cornerpoint.leftTop.x&&y<cornerpoint.rightTop.x){
			return "top";
		}else if(y==cornerpoint.leftBottom.y&&x>cornerpoint.leftBottom.x&&x<cornerpoint.rightBottom.x){
			return "bottom";
		}
	}

	//判断是否超出边界
	function isOverStep(diffx,diffy){
		if(diffx<=0){
			if((dir=="leftTop"||(dir=="rightBottom"&&isReverse))&&(cornerpoint.leftTop.x<=0||cornerpoint.leftTop.y<=0)) return true;
			else if((dir=="leftBottom"||(dir=="rightTop"&&isReverse))&&(cornerpoint.leftTop.x<=0||cornerpoint.leftBottom.y>=canvas.height)) return true;
			else if((dir=="left"||(dir=="right"&&isReverse))&&(cornerpoint.leftTop.x<=0||cornerpoint.leftTop.y<=0||cornerpoint.leftBottom.y>=canvas.height)) return true;
		}else if(diffx>=0){
			if(((dir=="leftTop"&&isReverse)||dir=="rightBottom")&&(cornerpoint.rightTop.x>=canvas.width||cornerpoint.rightBottom.y>=canvas.height)) return true;
			else if(((dir=="leftBottom"&&isReverse)||dir=="rightTop")&&(cornerpoint.rightTop.x>=canvas.width||cornerpoint.rightTop.y<=0)) return true;
			else if(((dir=="left"&&isReverse)||dir=="right")&&(cornerpoint.leftTop.x>=canvas.width||cornerpoint.leftTop.y<=0||cornerpoint.leftBottom.y>=canvas.height)) return true;
		}else if(diffy<=0){
			if((dir=="top"||(dir=="bottom"&&isReverse))&&(cornerpoint.leftTop.y<=0||cornerpoint.leftTop.x<=0||cornerpoint.rightTop.x>=canvas.width)) return true;
		}else if(diffy>=0){
			if(((dir=="top"&&isReverse)||dir=="bottom")&&(cornerpoint.leftBottom.y>=canvas.height||cornerpoint.leftTop.x<=0||cornerpoint.rightTop.x>=canvas.width)) return true;
		}
		return false;
	}

	//拖动时若超出边界则在将其限制在边界处
	function rebound(){
		if(centerPoint.x-r<0){
			return [(centerPoint.x-r)/2,"x"];
		}else if(centerPoint.x+r>canvas.width){
			return [(centerPoint.x+r-canvas.width)/2,"x"];
		}else if(centerPoint.y-r<0){
			return [(centerPoint.y-r)/2,"y"];
		}else if(centerPoint.y+r>canvas.height){
			return [(centerPoint.y+r-canvas.height)/2,"y"];
		}
		return false;
	}

}

