/**
 * Created by maxiaomei1399@163.com on 16/9/2.
 */
angular.module("myapp")
    .controller("enpcardCtrl",function($scope){
        //分享
        $(function(){
            $(".share").click(function(){
                $(".mengC").css("display","block");
                $(".share-code").css("display","block");
            })
            $(".mengC").click(function(){
                $(".mengC").css("display","none");
                $(".share-code").css("display","none");
                $(".delete-confirm").css("display","none");
            })
        })

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