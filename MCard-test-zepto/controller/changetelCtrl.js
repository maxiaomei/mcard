/**
 * Created by maxiaomei1399@163.com on 16/8/29.
 */
angular.module("myapp")
    .controller("changetelCtrl",function($scope){
        $("#change-num").tap(function(){
            $(".unbind-bef").hide();
            $(".unbind-aft").show();
        })
    })