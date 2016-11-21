/**
 * Created by maxiaomei1399@163.com on 16/8/22.
 */
angular.module("myapp")
    .controller("joinmemberCtrl",function($scope){
        $('.card-header li').on("tap",function(){
            $('.card-header li').removeClass("active");
            $(this).addClass("active");
            if($(this).index()==0){
                $(".com-mem").css("display","none");
                $(".pers-mem").css("display","block");
            }else {
                $(".pers-mem").css("display","none");
                $(".com-mem").css("display","block");
            }
        });

    })
