/**
 * Created by maxiaomei1399@163.com on 16/9/14.
 */
angular.module("myapp")
    .controller("systeminfoCtrl",function($scope){
     
 		$(".news-info").on("tap",function(){
            $(this).removeClass("news-info");
            $(this).addClass("news-info-active");
            $(this).next().css("display","block");
        })
        
        $(".sys-choose").tap(function(){
        	  $(this).css("display","none");
        	  $(".sys-choosed").css("display","block");
        	  $(".chooseic").css("display","block");
        })
        
        $(".packup").tap(function(){
           $(this).css("display","none");
        	   $(this).prev().removeClass("news-info-active");
        	    $(this).prev().addClass("news-info");
        })
        
        $(document).on("tap",".chooseic",function(){
          	$(this).attr("class","choosedic")
        })

		$(".all-choose").tap(function(){
			$(".sysinfo-list").find(".chooseic").attr("class","choosedic");
		})
       
    })
