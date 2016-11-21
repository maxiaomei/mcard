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
	 
	 $(document).on("dbclick",".gridly li",function(){
      	alert(1);
    })
	 
	 //页面排序
	 $('.pro-footer li').eq(3).tap(function(){
	 	
	 	 var data=["img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg"];
		 get_page(data);
	 	//   初始化拖拽插件
//	    //拖动前回调
//		var reordering =function($elements){
//		// Called before the drag and drop starts with the elements in their starting position.
//				//alert('start');
//		};
//		 
//		//拖动后回调
//		var reordered =function($elements){
//			// Called after the drag and drop ends with the elements in their ending position.
//			// 当前对象
//			var currentObj =this.reordered.arguments[1];
//			var currentId = currentObj[0].id;
//				alert('拖动对象：'+ currentId);
//			 
//			var arr = $elements;
//			// 前一个对象
//			var prevObj;
//			// 后一个对象
//			var afterObj;
//			for(i =0; i < arr.length; i++){
//				if(arr[i].id == currentId){
//					if(i >0){
//						prevObj = arr[i -1];
//					}
//					if(i +1< arr.length){
//						afterObj = arr[i+1];
//					}
//				}
//			}
//			if(prevObj !=undefined){
//				//alert('前一个对象：'+ prevObj.id)
//			}
//			if(afterObj !=undefined){
//				//alert('后一个对象：'+ afterObj.id);
//			}
//			//执行保存排序，更新数据
//			//sortData...
//		};
		
		var i = 10;
		JQ('.gridly').gridly({
			 base: 40, // px 
		     gutter: 20, // px
			 columns: i*2,
			// callbacks: { reordering: reordering , reordered: reordered }
				   
	    });
		var _width = 116*i+50;
	    $("#scroller").css("width",_width+"px");
	   
	 	 var _display = $(".mcard-theme").css("display");
	      	 //如果是从其它导航切换到主题
	      	 if(_display=="none"){
   		        init_swiper();
   		        $(".all_bg").css("display","none");
	            $(".all_page").css("display","block");
	            $(".the-edit").css("display","none");
	             
	                //初始化滚动条
	                var myScroll;
				    function loaded () {
						myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
						console.log(myScroll)
					}
				    loaded ();
	      	 }else{
          	 	 //直接获取当前页主题
          	 	 $(".the-edit").css("display","none");
          	     $(".all_bg").css("display","none");
                 $(".all_page").css("display","block");
                   //初始化滚动条
	                var myScroll;
				    function loaded () {
						myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
						console.log(myScroll)
					}
				    loaded ();
          	 }
	      console.log($(".gridly"))
	 }) ;
	 
	 //获取页面
	function get_page(url){
		    //url为自定义数组 存放图片路径
            var str = '';
            for(var i=0;i<url.length;i++){
                str = str+'<li><img src="'+url[i]+'"><div class="page-del">－</div></li>';
               
            }
            $('.gridly').html(str);
           // $(window).resize(); 
	}
  	 
 	//点击主题 获取数据 渲染页面
   	$('.pro-footer li').eq(1).on("tap",function(){

   		 var _display = $(".mcard-theme").css("display");
	      	 //如果是从其它导航切换到主题
	      	 if(_display=="none"){
	      	 	$("#wrapper").css("display","none");
	      	 	$(".all_bg").css("display","none");
   		        init_swiper();
          	 }else{
   		//$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find("#text").html("1");
          	 	
          	 	 //直接获取当前页主题
          	 	$("#wrapper").css("display","none");
          	 	$(".the-edit").css("display","none");
          	    $(".all_bg").css("display","block");
          	    
          	    mySwiper1 = new Swiper('#swiper-container1', {
					slidesPerView: 'auto',
					spaceBetween: 20,
				})
          	 	var data=["img/proc.jpg","img/userimg.jpg"];
	      		get_theme(data);
          	 }
   		 
	 });
	 
	 
	  //换主题
	$("#swiper-container1").on("tap",".swipe_theme",function(){
		alert(1);
	})
 	//点击背景 获取数据 渲染页面
   	$('.pro-footer li').eq(2).tap(function(){
   		 var _display = $(".mcard-theme").css("display");
	      	 //如果是从其它导航切换到背景
	      	 if(_display=="none"){
	      	    	$("#wrapper").css("display","none");
	      	 	$(".all_bg").css("display","none");
	 	        init_swiper();
	      	 	
          	 }else{
          	 	 //直接获取当前页背景
          	 	$("#wrapper").css("display","none");
          	 	$(".the-edit").css("display","none");
          	    $(".all_bg").css("display","block");
          	    
          	    mySwiper1 = new Swiper('#swiper-container1', {
					slidesPerView: 'auto',
					spaceBetween: 20,
				})
          	 	var data=["img/proc.jpg","img/userimg.jpg"];
	      		get_bgimg(data);
          	 }
	 });
	 //换背景
	$("#swiper-container1").on("tap",".swipe_bg",function(){
		var _src = $(this).find("img").attr("src");
		$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".page_title").css("background","url('../"+_src+"')");
	})
 	
 	
 	//初始化swiper
 	var mySwiper2;
 	var mySwiper1;
 	function init_swiper(){
 		        $(".the-edit").css("display","none");
	      	 	$(".mcard-data").css("display","none");
			 	$(".mcard-theme").css("display","block");
			 
			 	//$(".chooseBg").css("display", "block");
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
			 	
 	}
	//获取主题
	function get_theme(url){
		    //url为自定义数组 存放图片路径
            var str = '';
            for(var i=0;i<url.length;i++){
                str = str+'<div class="swiper-slide swipe_theme"><img src="'+url[i]+'"></div>';
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
	
	
	//增加页面
 	add_page("#add-page");
 	
 	function add_page(obj){
 		$(obj).click(function(){
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
 	}
 	
 	//查看全部
 	$(document).on("tap",".sli_choosed",function(){
 		$(".edit-box").css("display","none");
 		$(".mcard-data").css("display","none");
 		$(".mcard-theme").css("display","none");
 		$(".themeCont").css("display","block");
 		
 		var data=["img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg"];
 		search_all(data);
 		//初始化底部导航轮播
 		var mySwiper3 = new Swiper('#swiper-container3', {
			slidesPerView: 'auto',
		})
 	})
 	
 	//获取全部主题
	function search_all(url){
		    //url为自定义数组 存放图片路径
		    var str = "";
            for(var i=0;i<url.length;i++){
                str = str+'<li><img src="'+url[i]+'"></li>';
            }
            $('.themeCont-list').html(str);
           // $(window).resize();        
	}
 	
 	//关闭查看全部
 	$(document).on("tap",".theme-comfirm",function(){
 		$(".themeCont").css("display","none");
 		$(".mcard-data").css("display","block");
 		$(".mcard-theme").css("display","block");
 		$(".edit-box").css("display","block");
 		
 	}) 	
 	//选择主题
 	$(document).on("tap",".themeCont-list li",function(){
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
    
    
      	var overscroll = function(el) {
el.addEventListener('touchstart', function() {
    var top = el.scrollTop
      , totalScroll = el.scrollHeight
      , currentScroll = top + el.offsetHeight;
    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //
    //this prevents the scroll from "passing through" to
    //the body.
    if(top === 0) {
      el.scrollTop = 1;
    } else if(currentScroll === totalScroll) {
      el.scrollTop = top - 1;
    }
});
el.addEventListener('touchmove', function(evt) {
    //if the content is actually scrollable, i.e. the content is long enough
    //that scrolling can occur
    if(el.offsetHeight < el.scrollHeight)
      evt._isScroller = true;
});
}
overscroll(document.querySelector('.themeCont-list'));
document.body.addEventListener('touchmove', function(evt) {
//In this case, the default behavior is scrolling the body, which
//would result in an overflow.  Since we don't want that, we preventDefault.
if(!evt._isScroller) {
    evt.preventDefault();
}
});
    
    
})
    
