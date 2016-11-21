/**
 * Created by maxiaomei1399@163.com on 16/9/2.
 */
angular.module("myapp")
    .controller("enpcardholderCtrl",function($scope){
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
            $(document).on("swipeLeft",".enp-info",function() {
                $(".enp-info").not($(this)).animate({"left":"0px"}, 'ease-in-out');
                $(this).animate({"left":"-74px"}, 'ease-in-out');
            })
            $(document).on("swipeRight",".enp-info",function() {
                $(this).animate({"left":"0px"}, 'ease-in-out');
            })
        })
    })
