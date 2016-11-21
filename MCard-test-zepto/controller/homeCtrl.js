/**
 * Created by Administrator on 2016/8/16.
 */
//��ʼ����ҳ������
angular.module("myapp")
    .controller("homeCtrl",function($scope){

        $(function() {
            FastClick.attach(document.body);
        });

        $(function(){
            $(".myCard").on("click",function(e){
                e.preventDefault();
                $(".mengC").css("display","block");
                $(".aftClick").animate({"left":"0px"},"ease")
               /* $(".aftClick").addClass("fadeLeft");*/
            })
            $(".mengC").on("click",function(){
                $(".mengC").css("display","none");
                $(".aftClick").animate({"left":"-250px"},"ease")
              /*  $(".aftClick").removeClass("fadeLeft");*/
            })
        });

        $(function(){
            $(".all").on("click",function(){
                    $(".mengC").css("display","block");
                    $(".all-list").fadeIn(400);
            });
            $(".mengC").on("click",function(){
                    $(".mengC").css("display","none");
                    $(".all-list").fadeOut(400);
            })
        })

        /*公司个人账号切换*/
        $(function(){
            $(".sett-footer span").on("click",function(){
                $(".aftClick ul").css("display","none");
                $(".aftClick ul").eq($(this).index()).css("display","block");
            })
        })
        
        
//      $(document).ready(function(){  
//	        function stopScrolling( touchEvent ) {   
//	        		touchEvent.preventDefault();   
//          }  
//	        var _home = document.getElementsByClassName("home")[0];
//		    _home.addEventListener( 'touchstart' , stopScrolling , false );  
//		    _home.addEventListener( 'touchmove' , stopScrolling , false );  
//      });
    })




