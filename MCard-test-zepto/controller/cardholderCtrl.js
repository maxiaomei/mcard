/**
 * Created by Administrator on 2016/8/18.
 */
angular.module("myapp")
    .controller("cardholderCtrl",function($scope){

        // 下拉框
        $(function(){
            $(".alpha").on("tap",function(){
                $('.group-info').css("display","block");
            });
            $('.group-info').on("tap",'li',function(){
                $(".but-apha").val($(this).text());
                $('.group-info').css("display","none");
            })
        })
        
     
        /*标签管理*/
        $(function(){
            $(".card-tag").on("tap",function(){
                $(".mengC").css("display","block");
                $(".tag-manege").css("display","block");
            })
            $(".add-det").on("tap",function(){
                $(".mengC").css("display","none");
                $(".tag-manege").css("display","none");
            })
        })

        //删除
        $(function(){
            $(".card-delete").on("tap",function() {
                $(".mengC").css("display","block");
                $(".delete-confirm").css("display","block");
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
       
            
        /*左滑事件*/
        $(function(){
            $(document).on("swipeLeft",".swipe-info",function() {
                
                 $(".swipe-info").not($(this)).css({
                'transform':'translate3d(0,0,0)',
                'transition':'all 500ms',

                '-webkit-transform':'translate3d(0,0,0)',
                '-webkit-transition':'all 500ms',
           
               });
                  $(this).css({
                'transform':'translate3d(-64px,0,0)',
                'transition':'all 500ms',

                '-webkit-transform':'translate3d(-64px,0,0)',
                '-webkit-transition':'all 500ms',
           
               });
               
            })
            
          
            $(document).on("swipeRight",".swipe-info",function(event) {
              
                $(this).css({
                'transform':'translate3d(0,0,0)',
                'transition':'all 500ms',

                '-webkit-transform':'translate3d(0,0,0)',
                '-webkit-transition':'all 500ms',
           
               });
            })
        })
        /*获取焦点*/
        $(function(){
            $('.focus-blur').on({
                focus:function(){
                    if (this.value == this.defaultValue){
                        this.value="";
                    }
                },
                blur:function(){
                    if (this.value == ""){
                        this.value = this.defaultValue;
                    }
                }
            });
        })
        

        /*搜索事件*/
        $(function(){
            var Initials=$('.initials');
            var LetterBox=$('#letter');
            Initials.find('.ini-alpha').append('<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li>');
            initials();
          //  $(".initials ul li").touchstart(function(){
            	$(".initials ul li").on("touchstart",function(){
                var _this=$(this);
                var LetterHtml=_this.html();
                LetterBox.html(LetterHtml).fadeIn();

                setTimeout(function(){
                    Initials.css('background','rgba(145,145,145,0)');
                    LetterBox.fadeOut();
                },1000);

                var _index = _this.index()
                if(_index==0){
                	    myScroll.scrollTo(0,0);
                	    myScroll.refresh();
                   // $('html,body').scrollTop(0);//点击第一个滚到顶部
                }else{
                    var letter = _this.text();
                    if($('#'+letter).length>0){  /*如果按此索引找到关键字*/
                    myScroll.scrollTo(0,0);
                     myScroll.refresh();
                    var  LetterTop = -$('#'+letter).offset().top+45;
             	      myScroll.scrollTo(0,LetterTop);
             	      myScroll.refresh();
                   
                  }
                }

            })
        })



//var overscroll = function(el) {
//	
//el.addEventListener('touchstart', function() {
//	
//  var top = el.scrollTop
//    , totalScroll = el.scrollHeight
//    , currentScroll = top + el.offsetHeight;
//  //If we're at the top or the bottom of the containers
//  //scroll, push up or down one pixel.
//  //
//  //this prevents the scroll from "passing through" to
//  //the body.
//  if(top === 0) {
//    el.scrollTop = 1;
//  } else if(currentScroll === totalScroll) {
//    el.scrollTop = top - 1;
//  }
//});
//el.addEventListener('touchmove', function(evt) {
//  //if the content is actually scrollable, i.e. the content is long enough
//  //that scrolling can occur
//  if(el.offsetHeight < el.scrollHeight)
//    evt._isScroller = true;
//});
//}
//overscroll(document.querySelector('#card_holder'));
//
//document.body.addEventListener('touchmove', function(evt) {
////In this case, the default behavior is scrolling the body, which
////would result in an overflow.  Since we don't want that, we preventDefault.
//if(!evt._isScroller) {
//  evt.preventDefault();
//}
//});

        var myScroll;
        var wrapStr = "#scroll-content";//iscroll壳子的id
         myScroll = new IScroll(wrapStr, {
				            scrollbars: true,
				            mouseWheel: true,
				            interactiveScrollbars: true,//允许推拽
				            shrinkScrollbars: 'scale',//是否弹性
				            fadeScrollbars: true, 
				            click:true, 
		})


        //iscroll
//      var myScroll;
//      var wrapStr = "#scroll-content";//iscroll壳子的id
//           function loaded(){
//             setTimeout(function(){
//                    
//                      myScroll = new IScroll(wrapStr, {
//				            scrollbars: true,
//				            mouseWheel: true,
//				            interactiveScrollbars: true,//允许推拽
//				            shrinkScrollbars: 'scale',//是否弹性
//				            fadeScrollbars: true, 
//				            click:true, 
//			            })
//			                            
//              },100 );
//        }
//       window.addEventListener("load",loaded,false);
        
    })
