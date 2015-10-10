// JavaScript Document
/*
 * waterfall,流式网页的jquery插件
 * version : 0.1
 * author: zhujianfeng <weibo : @fdjianfeng> <http://www.zhujianfeng.info>
 *
 * 用法: 
 * <script src="http://code.jquery.com/jquery-1.8.2.min.js" type="text/javascript"></script>
 * <script src="jquery.waterfall.js" type="text/javascript"></script>
 * $(function () {
 *     $("#container").waterfall([
 *              {
 *                  url : "http://www.test.com/pic1.jpg", //要显示图片的缩略图地址
 *                  jumpUrl: "http://www.someurl.com/someurl1", //点击缩略图之后的跳转地址，可不填
 *                  title : "title1", //图片标题
 *                  desc : "desc1", //图片描述
 *                  meta : "meta1" //图片的其他信息，例如分类等
 *              },{
 *                  url : "http://www.test.com/pic2.jpg",
 *                  jumpUrl: "http://www.someurl.com/someurl2",
 *                  title : "title2",
 *                  desc : "desc2",
 *                  meta : "meta2"
 *              }
 *          ]);
 * });
 */
(function($) {
     
    /*
    用于充当互斥条件，
    在滚动条滚动事件中判断是否正在加载
    如果有此次滚动事件就不触发新的加载
    */
    var flag = false;
 
    //需要用的CSS
    var css = {
        container : {
            "position" : "relative",
            "width" : "1100px",
            "margin" : "0 auto 25px",
            "padding-bottom" : " 10px"
        },
        grid : {
            "display" : "none",
            "border" : "1px solid #ccc",
            "width" : "188px",
            "min-height" : "100px",
            "padding" : " 15px",
            "background" : "#fff",
            "margin" : "8px",
            "font-size" : "12px",
            "float" : "left",
            "box-shadow" : " 0 1px 3px rgba(34,25,25,0.4)",
            "-moz-box-shadow" : " 0 1px 3px rgba(34,25,25,0.4)",
            "-webkit-box-shadow" : " 0 1px 3px rgba(34,25,25,0.4)",
            "-webkit-transition" : " top 1s ease, left 1s ease",
            "-moz-transition" : " top 1s ease, left 1s ease",
            "-o-transition" : " top 1s ease, left 1s ease",
            "-ms-transition" : " top 1s ease, left 1s ease"
        },
        gridStrong : {
            "border-bottom" : "1px solid #ccc",
            "margin" : "10px 0",
            "display" : "block",
            "padding" : "0 0 5px",
            "font-size" : "17px"
        },
        gridMeta : {
            "text-align" : "right",
            "color" : "#777",
            "font-style" : "italic"
        },
        gridP : {
            "display" : "block",
            "font-size" : "12px",
            "color" : "#333"
        },
        gridImgholderImg : {
            "max-width" : "100%",
            "width" : "100%",
            "background" : "#ccc",
            "display" : "block"
        }
    };
 
    //用于计算位置的配置项
    var config = {
        boxWidth : 188, //每个盒子的宽度
        spaceWidth : 40 //盒子之间的间隙
    };
 
    //创建一个图片盒子
    var box = function(left, top, img, title, desc, meta, jumpUrl) {
        var htm = [];
        htm.push('<div class="grid" style="left: ' + left + 'px; top: '
                    + top + 'px; position: absolute; ">');
        htm.push('<div class="imgholder" style="width:100%;">');
        if (jumpUrl) {
            htm.push('<a href="' + jumpUrl + ' " target="_blank"><img src="' + img + '"></a>');
        } else {
            htm.push('<img src="' + img + '">');
        }
        htm.push('</div>');
        htm.push('<strong>' + title + '</strong>');
        htm.push('<p>' + desc + '</p>');
        htm.push('<div class="meta">' + meta + '</div>');
        htm.push('</div>');
        var thisBox = $(htm.join(""));
        thisBox.css(css.grid);
        thisBox.find("img").css(css.gridImgholderImg);
        thisBox.find("strong").css(css.gridStrong);
        thisBox.find("p").css(css.gridP);
        thisBox.find(".meta").css(css.gridMeta);
        $(this).append(thisBox);
        return thisBox;
    };
 
    //计算新图片盒子所要放置的位置
    var getNewPostion = function(bottom) {
        var min = bottom[0];
        var minPosition = 0;
        for (var i = bottom.length - 1; i > 0; i-- ) {
            if (min > bottom[i]) {
                min = bottom[i];
                minPosition = i;
            }
        }
        var left = minPosition * (config.boxWidth + config.spaceWidth);
        var top = min;
        return {left: left, top: top, position: minPosition};
    };
 
    //获得最小的top值，用于判断窗口中是否已经充满图片
    var getMinTop = function(bottom) {
        var min = bottom[0];
        for (var i = bottom.length - 1; i > 0; i-- ) {
            if (min > bottom[i]) {
                min = bottom[i];
            }
        }
        return min;
    };
 
    //递归加载新的图片盒子
    var loadBox = function(){
        var me = $(this);
        var entities = $(this).data("entities");
        var bottom = $(this).data("bottom");
        var entity = entities.shift();
        if (entity) {
            var newPostion = getNewPostion(bottom);
            var newBox = box.apply(me, [newPostion.left, newPostion.top,
                    entity.url, entity.title, entity.desc, entity.meta, entity.jumpUrl]);
            newBox.find("img").load(function(){
                newBox.fadeIn(1500);
                var newBoxHeight = newBox.height();
                bottom[newPostion.position] += newBoxHeight + config.spaceWidth;
                $(this).data("bottom", bottom);
                $(this).data("entities", entities);
                if (($(window).height() + $(window).scrollTop()) > getMinTop(bottom)) {
                    loadBox.apply(me);
                } else {
                    flag = false;
                }
            });
        }
    };
 
    //可供外部使用的jquery方法集合
    var methods = {
        "init" : function(opts) {
            var entities = opts;
            var bottom = [0,0,0,0,0];
            var me = $(this);
            $(this).css(css.container);
            $(this).data("bottom", bottom);
            $(this).data("entities", entities);
            loadBox.apply(me);
            $(window).scroll(function(){
                if (flag === true) {
                    return;
                }
                flag = true;
                loadBox.apply(me);
            });
        }
    };
 
    //插件入口
    $.fn.waterfall = function(method) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist' );
        }
    };
})(jQuery);