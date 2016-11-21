/**
 * Created by Administrator on 2016/8/18.
 */
angular.module("myapp")
    .controller("mysinpageCtrl",function($scope){
        var wrapStr = "#scroll-content";//iscroll壳子的id
        var  myScroll = new IScroll(wrapStr, {
            scrollbars: true,
            mouseWheel: true,/*滚轮*/
            interactiveScrollbars: true,//允许推拽
            shrinkScrollbars: 'scale',//是否弹性
            fadeScrollbars: true, /*自动隐藏*/
            click:true /*是否可以点击*/
        });

        //删除
        $(function(){
            $(".card-delete").tap(function() {
                $(".mengC").css("display","block");
                $(".delete-confirm").css("display","block");
                /* $(this).parents("li").remove();*/
            })
            $(".cancel").tap(function(){
                $(".mengC").css("display","none");
                $(".delete-confirm").css("display","none");
            })

            $(".confirm").tap(function(){
                $(".mengC").css("display","none");
                $(".delete-confirm").css("display","none");
            })
        })
    })