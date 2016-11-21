/**
 * Created by maxiaomei1399@163.com on 16/8/22.
 */

/*移出zepto.js 默认绑定的body touchmove事*/
/*$('body').off('touchmove')*/


$(function(){
    $('.focus-blur').on({
        focus:function(){
            if (this.value == this.defaultValue){
                this.value="";
            }
        },
        blur:function(){
            if (this.value == ""){
                this.value = this.defaultValue;
            }
        }
    });
})

/*解决初始化文档高度，让文档高度等于窗体高度，并fixed需要定位的区域在最下方*/
$(function bottonm(){
    if($(document).height()<$(window).height()){
        $('.bottom_fix').css({'position':'fixed','bottom':'0px'});
        $(document).height($(window).height()+'px');
    }
});

/*解决输入框input获取焦点得时，虚拟键盘会把fixed元素顶上去(次现在在部分安卓上能发现)如下图*/
$('#phone').bind('focus',function(){
    $('.bottom_fix').css('position','static');
    //或者$('#viewport').height($(window).height()+'px');
}).bind('blur',function(){
    $('.bottom_fix').css({'position':'fixed','bottom':'0'});
    //或者$('#viewport').height('auto');
});

/*下拉框*/
$.fn.divSelect = function(){
    return this.each(function(index){
        var $this = $(this),
            $cite = $this.find("cite"),
            $list = $this.find("ul"),
            $input = $this.find(".top-hold-r");

        $this.on("click","cite",function(){
            $list.is(":hidden") ? $list.slideDown(500) : $list.slideUp(500);
            return false
        });
        $list.on("click","a",function(){
            var $this = $(this);
            $cite.text($this.text());
            $input.val($this.attr("selectid"));
            $list.hide();
            return false
        });
        $(document).on("click.select"+index,function(){
            $list.hide();
        });
    })
};

/*左滑*/
(function($) {

    $.fn.touchWipe = function(option) {
        var defaults = {
            itemDelete: '.item-delete', //删除元素
        };
        var opts = $.extend({}, defaults, option); //配置选项

        var delWidth = $(opts.itemDelete).width();

        var initX; //触摸位置
        var moveX; //滑动时的位置
        var X = 0; //移动距离
        var objX = 0; //目标对象位置
        $(this).on('touchstart', function(event) {
            event.preventDefault();
            var obj = this;
            initX = event.targetTouches[0].pageX;
            objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
            if (objX == 0) {
                $(this).on('touchmove', function(event) {
                    event.preventDefault();
                    var obj = this;
                    moveX = event.targetTouches[0].pageX;
                    X = moveX - initX;
                    if (X >= 0) {
                        obj.style.WebkitTransform = "translateX(" + 0 + "px)";
                    } else if (X < 0) {
                        var l = Math.abs(X);
                        obj.style.WebkitTransform = "translateX(" + -l + "px)";
                        if (l > delWidth) {
                            l = delWidth;
                            obj.style.WebkitTransform = "translateX(" + -l + "px)";
                        }
                    }
                });
            } else if (objX < 0) {
                $(this).on('touchmove', function(event) {
                    event.preventDefault();
                    var obj = this;
                    moveX = event.targetTouches[0].pageX;
                    X = moveX - initX;
                    if (X >= 0) {
                        var r = -delWidth + Math.abs(X);
                        obj.style.WebkitTransform = "translateX(" + r + "px)";
                        if (r > 0) {
                            r = 0;
                            obj.style.WebkitTransform = "translateX(" + r + "px)";
                        }
                    } else { //向左滑动
                        obj.style.WebkitTransform = "translateX(" + -delWidth + "px)";
                    }
                });
            }

        })
        $(this).on('touchend', function(event) {
            event.preventDefault();
            var obj = this;
            objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
            if (objX > -delWidth / 2) {
                obj.style.transition = "all 0.2s";
                obj.style.WebkitTransform = "translateX(" + 0 + "px)";
                obj.style.transition = "all 0";
                objX = 0;
            } else {
                obj.style.transition = "all 0.2s";
                obj.style.WebkitTransform = "translateX(" + -delWidth + "px)";
                obj.style.transition = "all 0";
                objX = -delWidth;
            }
        })

        //链式返回
        return this;
    };
})(Zepto);
/*滚动条*/

/*$(function(){
    var  myScroll = new IScroll(wrapStr, {
        scrollbars: true,
        mouseWheel: true,/!*滚轮*!/
        interactiveScrollbars: true,//允许推拽
        shrinkScrollbars: 'scale',//是否弹性
        fadeScrollbars: true, /!*自动隐藏*!/
        click:true /!*是否可以点击*!/
    });
})*/

/*手指长按屏幕事件*/
$.fn.longPress = function(fn) {
    var timeout = undefined;
    var $this = this;
    for(var i = 0;i<$this.length;i++){

        $this[i].addEventListener('touchstart', function(e) {
            e.preventDefault();
            timeout = setTimeout(fn, 800);  //长按时间超过800ms，则执行传入的方法
          /*  event.preventDefault();*/
        }, false);
        $this[i].addEventListener('touchend', function(e) {
            clearTimeout(timeout);  //长按时间少于800ms，不会执行传入的方法
        }, false);
    }
}
 	