angular.module("myapp")
    .controller("mcardeditCtrl",function($scope){
	//底部切换
	 $(document).on("tap",".pro-footer li",function(){
	 	
            $('.pro-footer li').removeClass("active");
            $(this).addClass("active");
            
    });
    
	  $('.pro-footer li').eq(0).tap(function(){
	 	$(".mcard-theme").css("display","none");
	 	$(".mcard-data").css("display","block");
	 }) ;
	 
  	 var mySwiper2;
     var mySwiper1;
 	//点击主题 获取数据 渲染页面
   	$('.pro-footer li').eq(1).tap(function(){
   		     $(".the-edit").css("display","none");
	      	 var _display = $(".mcard-theme").css("display");
	      	 
	      	 //如果是从其它导航切换到主题
	      	 if(_display=="none"){
	      	 	$(".mcard-data").css("display","none");
			 	$(".mcard-theme").css("display","block");
			 	$(".chooseBg").css("display", "block");
			 	// 初始化swiper轮播
			 	 mySwiper2 = new Swiper('#swiper-container2', {
			 	 	paginationClickable: true,
					slidesPerView: 'auto',
					centeredSlides: true,
					spaceBetween: 50,
					//当滑块松开使 获取当前滑块id ajax请求数据 渲染到底部缩略视图
					onTouchMove: function(swiper){  	
						$(".chooseBg").css("display","none");
						$(".the-edit").css("display","block");
					},
					
				})
			 	 mySwiper1 = new Swiper('#swiper-container1', {
					slidesPerView: 'auto',
					spaceBetween: 20,
				})
	 	 
	      	 	var data=["img/proc.jpg","img/userimg.jpg"];
	      		get_theme(data);
          	 }else{
          	 	 //直接获取当前页主题
          	 	$(".chooseBg").css("display", "block");
          	 	var data=["img/proc.jpg","img/userimg.jpg"];
	      		get_theme(data);
          	 }
   		 
	 });
	 
	//获取主题
	function get_theme(url){
		    //url为自定义数组 存放图片路径
            var str = '';
            for(var i=0;i<url.length;i++){
                str = str+'<div class="swiper-slide"><img src="'+url[i]+'"></div>';
            }
            str =  '<div class="swiper-slide  sli_choosed">查看全部</div>' + str;
            $('#swiper-container1 .swiper-wrapper1').html(str);
            $(window).resize();         
	}
	//获取背景
	function get_bgimg(url){
		    //url为自定义数组 存放图片路径
            var str = '';
            for(var i=0;i<url.length;i++){
                str = str+'<div class="swiper-slide swipe_bg"><img src="'+url[i]+'"></div>';
            }
            str =  '<div class="swiper-slide  sli_choosed">查看全部</div>' + str;
            $('#swiper-container1 .swiper-wrapper1').html(str);
            $(window).resize();   
            
	}
	
	//换背景
	$("#swiper-container1").on("tap",".swipe_bg",function(){
		
		var _src = $(this).find("img").attr("src");
		$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".page_title").css("background","url('../"+_src+"')");
	})
	
	$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".title-info").click(function(){
		alert(1);
	});
 	//点击背景 获取数据 渲染页面
   	$('.pro-footer li').eq(2).tap(function(){
   		     $(".the-edit").css("display","none");
	      	 var _display = $(".mcard-theme").css("display");
	      	 //如果是从其它导航切换到背景
	      	 if(_display=="none"){
	      	 	$(".mcard-data").css("display","none");
			 	$(".mcard-theme").css("display","block");
			 	$(".chooseBg").css("display", "block");
			 	// 初始化swiper轮播
			 	 mySwiper2 = new Swiper('#swiper-container2', {
			 	 	paginationClickable: true,
					slidesPerView: 'auto',
					centeredSlides: true,
					spaceBetween: 50,
					//当滑块松开使 获取当前滑块id ajax请求数据 渲染到底部缩略视图
					onTouchMove: function(swiper){  	
						$(".chooseBg").css("display","none");
						$(".the-edit").css("display","block");
						$(".the-edit span").css("color","#fff");
					},
					
				})
			 	 mySwiper1 = new Swiper('#swiper-container1', {
					slidesPerView: 'auto',
					spaceBetween: 20,
				})
	 	 
	      	 	var data=["img/proc.jpg","img/userimg.jpg"];
	      		get_bgimg(data);
          	 }else{
          	 	 //直接获取当前页背景
          	 	$(".chooseBg").css("display", "block");
          	 	var data=["img/proc.jpg","img/userimg.jpg"];
	      		get_bgimg(data);
          	 }
   		 
	 });
 	//增加页面
 	$("#add-page").click(function(){
 		 if(mySwiper2.activeIndex==0){
 		 	var _id = 1;
 		 	var str = ' <div class="ope-swip"></div><div class="swiper-slide swiper-slide2" id="'+_id+'"></div>';
 		 }else{
 		 	var _id = mySwiper2.activeIndex+1;
 		 	var str = ' <div class="ope-swip"></div><div class="swiper-slide swiper-slide2" id="'+_id+'"></div>';
 		 }
 		$(this).before(str);
 		$(window).resize();
 	});
 	
 	
 	function init_swiper(){
 		
 	}
 	
 	//查看全部
 	$(document).on("click",".sli_choosed",function(){
 		$(".edit-box").css("display","none");
 		$(".mcard-data").css("display","none");
 		$(".mcard-theme").css("display","none");
 		$(".themeCont").css("display","block");
 		//初始化底部导航轮播
 		var mySwiper3 = new Swiper('#swiper-container3', {
			slidesPerView: 'auto',
		})
 	})
 	
 	//关闭查看全部
 	$(document).on("tap",".theme-comfirm",function(){
 		$(".themeCont").css("display","none");
 		$(".mcard-data").css("display","block");
 		$(".mcard-theme").css("display","block");
 		$(".edit-box").css("display","block");
 		
 	}) 	
 	//选择主题
 	$(".themeCont-list li").on("tap",function(){
 		$(".themeCont").css("display","none");
 		$(".mcard-data").css("display","block");
 		$(".mcard-theme").css("display","block");
 		$(".edit-box").css("display","block");
 	})
 	
 	//编辑主题
 	$(".the-edit span").tap(function(){
 		$(".the-edit span").css("color","#fff");
 		$(this).css("color","#f33");
 	})
 	
    $(".edit-sta").tap(function(){
    	    $(".no-edit").css("display","block");
    		$(".swiper-slide-active").find(".ope-swip").css("display","none");
    		$("#swiper-container2").addClass("swiper-no-swiping");
    })
    
    //完成保存主题
    $(".edit-complite").tap(function(){
    	 	$(".no-edit").css("display","none");
    		$("#swiper-container2").removeClass("swiper-no-swiping");
    		$(".ope-swip").css("display","block");	
    		
    })
    
    
})