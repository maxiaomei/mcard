angular.module("myapp")
    .controller("mcardeditCtrl",function($scope){
	//底部切换



});

$(document).on("tap",".pro-footer li",function(){
	$('.pro-footer li').removeClass("active");
	$(this).addClass("active");
});
$('.pro-footer li').eq(0).tap(function(){
	var _display = $(".mcard-data").css("display");
	if(_display=="none"){
		$(".mcard-theme").css("display","none");
		$(".mcard-data").css("display","block");
	}else{
		$('.pro-footer li').removeClass("active");
		$(".mcard-data").css("display","none");
		init_swiper();
	}
});

 //页面排序
	 $('.pro-footer li').eq(3).tap(function(){
	 	 var data=["img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg","img/proc.jpg","img/userimg.jpg"];
		 get_page(data);
	 	//   初始化拖拽插件
	 	var i = 10;
		JQ('.gridly').gridly({
			 base: 40, // px 
		     gutter: 20, // px
			 columns: i*2,
				   
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

//页面排序

//点击主题 获取数据 渲染页面
$('.pro-footer li').eq(1).tap(function(){
	var current=getCurrent();
	if(current==''||current==null){return false;}
	var ptype=$('#themeIfr_'+current).attr('ptype');

	var chooseBg_display = $(".chooseBg").css("display");
	var _display = $(".mcard-theme").css("display");
	var c=$(".chooseBg").attr('c');
	//如果是从其它导航切换到背景
	if(chooseBg_display!='none'&&c=='theme'){$(".chooseBg").css("display", "none");return;}
  	var data=getTemplateList(ptype);
  	if(_display=="none"){
  	   $("#wrapper").css("display","none");
	   $(".all_bg").css("display","none");
	    init_swiper();
  		get_theme(data);
  		$(".chooseBg").attr('c','theme');
  	}else{
  	 	//直接获取当前页主题
         $("#wrapper").css("display","none");
         $(".the-edit").css("display","none");
         $(".all_bg").css("display","block");
          	    
         mySwiper1 = new Swiper('#swiper-container1', {
	     slidesPerView: 'auto',
			spaceBetween: 20,
		})
  		get_theme(data);
  	}
});

//换主题
$("#swiper-container1").on("tap",".swipe_theme",function(){
	var code=$(this).attr('code');
	var ptype=$(this).attr('ptype');
	setTheme(code,ptype);
});

	//点击背景 获取数据 渲染页面
$('.pro-footer li').eq(2).tap(function(){
	var current=getCurrent();
	if(current==''||current==null){return false;}
	var chooseBg_display = $(".chooseBg").css("display");
	var _display = $(".mcard-theme").css("display");
	var c=$(".chooseBg").attr('c');

	if(chooseBg_display!='none'&&c=='bg'){$(".chooseBg").css("display", "none");return;}
	//如果是从其它导航切换到背景
	if(_display=="none"){
	   $("#wrapper").css("display","none");
	   $(".all_bg").css("display","none");
		init_swiper();
		var data=getBackgroundList();
		get_bgimg(data);
		$(".chooseBg").attr('c','bg');
	}else{
		//直接获取当前页背景
		 $("#wrapper").css("display","none");
         $(".the-edit").css("display","none");
         $(".all_bg").css("display","block");
          	    
         mySwiper1 = new Swiper('#swiper-container1', {
	     slidesPerView: 'auto',
			spaceBetween: 20,
		})
		var data=getBackgroundList();
		get_bgimg(data);
		$(".chooseBg").attr('c','bg');
	}
});

//换背景
$("#swiper-container1").on("click",".swipe_bg",function(){
	var _src = $(this).find("img").attr("src");
	$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".page_title").css("background","url('"+_src+"')");
	var current=getCurrent();
	$('#themeIfr_'+current).attr('need-save','1');
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
		onTouchEnd: function(swiper){
			savePage();
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
        str = str+'<div class="swiper-slide swipe_theme" code="'+url[i][1]+'" ptype="'+url[i][2]+'"><img src="'+url[i][0]+'"></div>';
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
		/*if(mySwiper2.activeIndex==0){
			var _id = 1;
			var str = ' <div class="ope-swip"></div><div class="swiper-slide swiper-slide2" page="'+_id+'"></div>';
		}else{
			var _id = mySwiper2.activeIndex+1;
			var str = ' <div class="ope-swip"></div><div class="swiper-slide swiper-slide2" page="'+_id+'"></div>';
		}
		alert($(this).attr('id'));
 		$(this).before(str);
 		$(window).resize();*/
 	});
	}

//查看全部
$(document).on("click",".sli_choosed",function(){
	$(".edit-box").css("display","none");
	$(".mcard-data").css("display","none");
	$(".mcard-theme").css("display","none");
	$(".themeCont").css("display","block");

	var c=$('.chooseBg').attr('c');
	if($(this).attr('id')=='add-page'){c='theme';}
	if(c=='bg'){
		$('.swiper-box').hide();
		var data=getBackgroundList(ptype,pcode);
		search_all(data);
	}else{
		$('.swiper-box').show();
		var current=getCurrent();
		var pcode,ptype='';
		if(current!=''&&current!=null){
			pcode=$('#themeIfr_'+current).attr('pcode');
			ptype=$('#themeIfr_'+current).attr('ptype');
		}

		var data=getTemplateList(ptype,pcode);
		search_all(data);
		//初始化底部导航轮播
		var mySwiper3 = new Swiper('#swiper-container3', {
			slidesPerView: 'auto',
		})
	}
});

//更换类别
$(document).on("click",".tmptype",function(){
	var ptype=$(this).attr('ptype');

	var data=getTemplateList(ptype);
	search_all(data);
	//初始化底部导航轮播
	var mySwiper3 = new Swiper('#swiper-container3', {
		slidesPerView: 'auto',
	});
	$('.tmptype').removeClass('active');
	$(this).addClass('active');
});


//获取模板列表
function getTemplateList(ptype,pcode){
	var cardid=$('#cardid').val();
	var rearr=new Array();
	if(!pcode){pcode='';}
	if(!ptype){ptype='';}

	$.ajax({
		type: "post",
		url: "http://mcard.thepai.cn/interface/getTemplateList",
		data: {
			"cardid": cardid,
			"tmpid": pcode,
			"typeid": ptype,
		},
		dataType: "json",
		async: false,
		success: function(data) {
			var arr=data.data;

        	for(var i=0;i<arr.length;i++){
        		var tmp=new Array();
        		tmp[0]='/Template/'+arr[i].code+'/view/'+data.type+'.jpg';
        		tmp[1]=arr[i].code;
        		tmp[2]=data.type;
        		rearr.push(tmp);
				//alert(arr[i].code);
			}
		},
	});
    return rearr;
}

//获取模板列表
function getBackgroundList(){
	var cardid=$('#cardid').val();
	var rearr=new Array();

	$.ajax({
		type: "post",
		url: "http://mcard.thepai.cn/interface/getBackgroundList",
		data: {
			"cardid": cardid,
		},
		dataType: "json",
		async: false,
		success: function(data) {
			var arr=data.data;
        	for(var i=0;i<arr.length;i++){
        		var tmp=new Array();
        		tmp[0]='/Template/background/'+arr[i].filename;
        		//tmp[1]=arr[i].code;
        		//tmp[2]=data.type;
        		rearr.push(tmp);
				//alert(arr[i].code);
			}
		},
	});
    return rearr;
}

//获取全部主题
function search_all(url){
    //url为自定义数组 存放图片路径
    var str = "";
    for(var i=0;i<url.length;i++){
        str = str+'<li code="'+url[i][1]+'" ptype="'+url[i][2]+'"><img src="'+url[i][0]+'"></li>';
    }
    $('.themeCont-list').html(str);
}

//关闭查看全部
$(document).on("tap",".theme-comfirm",function(){
	$(".themeCont").css("display","none");
	$(".mcard-data").css("display","block");
	$(".mcard-theme").css("display","block");
	$(".edit-box").css("display","block");
});

//选择主题
$(document).on("tap",".themeCont-list li",function(){
	$(".themeCont").css("display","none");
	$(".mcard-data").css("display","block");
	$(".mcard-theme").css("display","block");
	$(".edit-box").css("display","block");

	var c=$('.chooseBg').attr('c');
	if(c=='bg'){
		var _src = $(this).find("img").attr("src");
		$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".page_title").css("background","url('"+_src+"')");
	}else{
		var code=$(this).attr('code');
		var ptype=$(this).attr('ptype');
		setTheme(code,ptype);
		$(".chooseBg").css("display", "none");
	}
	var current=getCurrent();
	$('#themeIfr_'+current).attr('need-save','1');
});

//编辑主题
$(".the-edit span").tap(function(){
	$(".the-edit span").css("color","#fff");
	$(this).css("color","#f33");
	var current=getCurrent();
	$('#themeIfr_'+current).attr('need-save','1');
})

$(".edit-sta").tap(function(){
	$(".no-edit").css("display","block");
	$(".swiper-slide-active").find(".ope-swip").css("display","none");
	$("#swiper-container2").addClass("swiper-no-swiping");
	var current=getCurrent();
	$('#themeIfr_'+current).attr('need-save','1');
})

//完成保存主题
$(".edit-complite").tap(function(){
	savePage();
	$(".no-edit").css("display","none");
	$("#swiper-container2").removeClass("swiper-no-swiping");
	$(".ope-swip").css("display","block");

});

//创建新页面
function createNew(code,ptype){
	var cardid=$('#cardid').val();
	var rearr=new Array();
	$.ajax({
		type: "post",
		url: "http://mcard.thepai.cn/interface/createCardPage",
		data: {
			"id": cardid,
			"type": ptype,
			"template": code,
		},
		dataType: "json",
		async: false,
		success: function(data) {
			if(data.status==true){
				if(mySwiper2.activeIndex==0){
					var _id = 1;
				}else{
					var _id = mySwiper2.activeIndex+1;
					//var str = ' <div class="ope-swip"></div><div class="swiper-slide swiper-slide2" page="'+_id+'"></div>';
				}
				var str = '<div class="swiper-slide swiper-slide2" page="'+_id+'"><div class="ope-swip"></div><iframe class="themeIfr" src="/Template/'+code+'/page/'+ptype+'.html" name="weather_inc" id="themeIfr_'+_id+'" need-save="0" pageid="'+data.data+'" pcode="'+code+'" ptype="'+ptype+'"></iframe></div>';
		 		$('#add-page').before(str);
		 		$(window).resize();
			}else{
				alert(data.info);
			}
		},
	});
}

//保存页面
function savePage(){
	current=getCurrent();
	var needsave=$('#themeIfr_'+current).attr('need-save');
	if(needsave==1){
		$('#themeIfr_'+current).attr('need-save','0');
		var cardid=$('#cardid').val();
		var pageid=$('#themeIfr_'+current).attr('pageid');
		var pcode=$('#themeIfr_'+current).attr('pcode');
		var ptype=$('#themeIfr_'+current).attr('ptype');
		var content=$('#themeIfr_'+current).contents().find("html").find("body").html();
		$.post('http://mcard.thepai.cn/interface/updateCardPage', { cardid: cardid,pageid:pageid,content:content,pcode:pcode,ptype:ptype }, function (data) {
            if(data.status==true){
                console.log('保存成功')
            }else{
                console.log(data.info);
                $('#themeIfr_'+current).attr('need-save','1');
            }
        },"json");
	}
}

//应用主题
	function setTheme(code,ptype){
		current=getCurrent();
		if(current==''||current==null){
			createNew(code,ptype);
		}else{
			$('#themeIfr_'+current).attr('src','/Template/'+code+'/page/'+ptype+'.html');
			$('#themeIfr_'+current).attr('need-save','1');
			$('#themeIfr_'+current).attr('pcode',code);
			$('#themeIfr_'+current).attr('ptype',ptype);
		}
		var iframe = $("#swiper-container2").find(".swiper-slide-active").find(".themeIfr");
		iframe.load(function() {
		if(ptype=='index'){
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".info-userimg").attr("src",$('#photo').attr('src'));
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".info-name").html($('.name').val());
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".info-logo").attr("src",$('#logo').attr('src'));
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".info-duty").html($('.duty').val());
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".info-company").html($('.company').val());
		}else if(ptype=='intro'){
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".info-logo").attr("src",$('#logo').attr('src'));
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".info-company").html($('.company').val());
		}else if(ptype=='store'){
			alert('0');
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".proinfo-l").html('a');
			$("#swiper-container2").find(".swiper-slide-active").find(".themeIfr").contents().find(".proinfo-l").click(function(){
				alert('b');
			});
		}
	});
	}

//获取当前页面信息
function getCurrent(str){
	var val='';
	if(str==''||str==null){
		val=$("#swiper-container2").find(".swiper-slide-active").attr('page');
	}

	return val;
}

$(function(){
	$(".the-edit").css("display","block");
$(".the-edit span").css("color","#fff");

	$('#upload_photo').click(function(){
		wx.chooseImage({
		    count: 1, // 默认9
		    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		    success: function (res) {
		        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
		        $('#photo').attr('src',localIds);
		        uppic(localIds,'txt_photo');
		       	//$('#wxlid').val(localIds);
		    }
		});
	});

	$('#upload_logo').click(function(){
		wx.chooseImage({
		    count: 1, // 默认9
		    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		    success: function (res) {
		        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
		        $('#logo').attr('src',localIds);
		        uppic(localIds,'txt_logo');
		       	//$('#wxlid').val(localIds);
		    }
		});
	});

	$(".save-data").on('tap', function() {
		var id = $("#cardid").val();
		var _name = $(".name").val();
		var _title = $(".title").val();
		var _company = $(".company").val();
		var _duty = $(".duty").val();
		var _picture = $(".txt_photo").val();
		var _logo = $(".txt_logo").val();
		var _phone = $(".phone").val();

		$.ajax({
			type: "get",
			url: "http://mcard.thepai.cn/home/interface/createCard",
			data: {
				"id": id,
				"title": _title,
				"name": _name,
				"company": _company,
				"duty": _duty,
				"txt_photo": _picture,
				"txt_logo": _logo,
				"phone": _phone
			},
			dataType: "jsonp",
			async: true,
			jsonp: "callback",
			jsonpCallback: "success_jsonpCallback",
			success: function(data) {
				alert(data.info);
				if(data.status==true){
					$('#cardid').val(data.data);
					$('.pro-footer li').removeClass("active");
					$(".mcard-data").css("display","none");
					init_swiper();
				}
			},
		});
	});

	if($('#cardid').val()){
		$('.pro-footer li').removeClass("active");
		$(".mcard-data").css("display","none");
		init_swiper();
		$(window).resize();
	}
});

$('.themeIfr').each(function(){
	var current=$(this).attr('valid');
	var url=$("#url_"+current).val();
	var content=$("#frame_"+current).val();

	$('#themeIfr_'+current).attr('src',url);
	if(content!=''&&content!=null){
		$('#themeIfr_'+current).load(function() {
			var content=$("#frame_"+current).val();
			if(content!=''&&content!=null){
				$('#themeIfr_'+current).contents().find("html").find("body").html(content);
				$('#frame_'+current).val('');
			}
			$('#themeIfr_'+current).unbind();
		});
	}
});

