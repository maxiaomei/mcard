/**
 * Created by Administrator on 2016/8/16.
 */
angular.module("myapp")
.controller("registerCtrl",function($scope){

    /*登陆 注册 tab切换*/
    $(function(){
        $(".reg-list li").eq(0).css("display","none");
        $(".sp-log").on("tap",function(){
            $(".sp-reg").removeClass("active");
            $(".reg-list li").eq(0).css("display","none");
            $(".reg-list li").eq(1).css("display","block");
            $(this).addClass("active");
        })
        $(".sp-reg").on("tap",function(){
            $(".sp-log").removeClass("active");
            $(".reg-list li").eq(1).css("display","none");
            $(".reg-list li").eq(0).css("display","block");
            $(this).addClass("active");
        })
    })
   /* $("input").eq(this.index).height(curHeight).animate({"height":autoHeight},500);*/

})
