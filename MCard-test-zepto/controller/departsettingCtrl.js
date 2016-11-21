/**
 * Created by maxiaomei1399@163.com on 16/9/9.
 */
angular.module("myapp")
    .controller("departsettingCtrl",function($scope){

        //iscroll
        var wrapStr = "#scroll-content";//iscroll壳子的id
        var  myScroll = new IScroll(wrapStr, {
            scrollbars: true,
            mouseWheel: true,/*滚轮*/
            interactiveScrollbars: true,//允许推拽
            shrinkScrollbars: 'scale',//是否弹性
            fadeScrollbars: true, /*自动隐藏*/
            click:true, /*是否可以点击*/
        });

        /*左滑事件*/
        $(function(){
            $(".depart-name").on('touchstart',function(e) {
                e.preventDefault();
                $(".depart-name").not($(this)).css("top","0");
                $(".depart-name").not($(this)).animate({"left":"0px"},200);
                /*  /!*  var _touch = e.originalEvent.targetTouches[0];*!/!*/
                var _touch = e.targetTouches[0];
                var _x = _touch.pageX;
                var _y = _touch.pageY;
                var disX=_touch.pageX-parseInt($(this).css("left"));
                var disY=_touch.pageY-parseInt($(this).css("top"));
                $(this).on('touchmove',function(e) {
                    e.stopPropagation();// 阻止冒泡 即左滑时阻止滚动条滚动
                    e.preventDefault();

                    var _touch = e.targetTouches[0];
                    var _x1 = _touch.pageX;
                    var l=_touch.pageX-disX;
                    var t=_touch.pageY-disY;

                    if(parseInt($(this).css("left"))<-150){
                        $(this).css("left","-150px");
                        $(this).off('touchmove');
                    }else if(parseInt($(this).css("left"))>0){
                        $(this).css("left","0px");
                        $(this).off('touchmove');
                    }else{
                        $(this).css("left",l);
                    }
                });
                $(this).on('touchend',function(e) {
                    e.preventDefault();

                    var _touch = e.changedTouches[0];
                    var _x1 = _touch.pageX;
                    console.log(_x1)
                    if(_x1-_x>0) {
                        $(this).animate({"left": "0px"}, 200)
                    }
                    else if(_x1-_x<0){
                        $(this).animate({"left":"-150px"},200);

                    }
                });
            });
        })
    })

