/**
 * Created by maxiaomei1399@163.com on 16/8/24.
 */
angular.module("myapp")
    .controller("newsinpageCtrl",function($scope){
        /*获取焦点*/
        $(document).on("focus",".new-create",function(){
            $(this).addClass("word-checked");
            $(".new-create").not(this).removeClass("word-checked");
            
        })
//      $(document).on("blur",".word-info",function(){
//           $(window).resize();
//      })
		//解决安卓手机中footer被input框顶上去的bug
		var oHeight = $(document).height(); //浏览器当前的高度
		   $(window).resize(function(){
		        if($(document).height() < oHeight){
		        $('.release').css("position","static");
		        $('.pro-footer').css("position","static");
		    }else{
		        $('.release').css("position","absolute");
		        $('.pro-footer').css("position","absolute");
		    }
		        
		});
		
		 //删除
		$(document).on("touchstart",".page-delete",function(e){
		    e.stopPropagation();
            $(".mengC").css("display","block");
			$(".delete-confirm").css("display","block"); 
       })
		$(".confirm").click(function(){ // 确认删除
			 $(".mengC").css("display","none");
			 $(".delete-confirm").css("display","none");
		})
		$(".cancel").click(function(){ //取消
			 $(".mengC").css("display","none");
			 $(".delete-confirm").css("display","none");
		})
		
		
        /*底部*/
        $(document).on("tap",".pro-footer li",function(){
            $('.pro-footer li').removeClass("active");
            $(this).addClass("active");
            if($(this).index()==0){
                var oDiv = $('<div  contenteditable="true" class="word-info new-create" >点击修改文字<div class="page-delete" contenteditable="false">－</div></div>');
                oDiv.insertAfter($(".word-checked"));
              
               $(window).resize();
            }else{
                var oDiv = $('<div  class="choose-img new-create" contenteditable="true" class="file_input new-create" >点击添加图片<div class="page-delete">－</div></div>');
                /*选择图片*/
               	oDiv.insertAfter($(".word-checked"));
              
                 $(window).resize();
            }
        });
           
    })