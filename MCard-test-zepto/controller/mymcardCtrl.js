/**
 * Created by Administrator on 2016/8/17.
 */
angular.module("myapp")
    .controller("mymcardCtrl",function($scope){

        //分享
        $(function(){
            $(document).on("tap",".share",function() {
                    $(".mengC").css("display","block");
                    $(".share-code").css("display","block");
                })
            $(document).on("tap",".mengC",function(){
                $(".mengC").css("display","none");
                $(".share-code").css("display","none");
                $(".delete-confirm").css("display","none");
            })
        })

        //iscroll
        var wrapStr = "#scroll-content";//iscroll壳子的id
        var  myScroll = new IScroll(wrapStr, {
            scrollbars: true,
            mouseWheel: true,/*滚轮*/
            interactiveScrollbars: true,//允许推拽
            shrinkScrollbars: 'scale',//是否弹性
            fadeScrollbars: true, /*自动隐藏*/
            click:true, /*是否可以点击*/
        });

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
        //复制
        $(document).on("tap",".card-copy",function() {
                var str=' <li> <dl> <dt> <img src="img/userimg.png"/> </dt> <dd> <p class="card-name">常濯非</p> <p class="card-time">2016年9月1日到期</p><div class="card-edit"> <span>编辑</span> <span class="card-copy">复制</span> <span class="card-delete">删除</span> <span class="share">分享</span> </div> </dd> </dl> </li>'
                $(str).appendTo(".pers-list");
                $(window).resize();

        })
        
        function chpic(){
		wx.chooseImage({
		    count: 1, // 默认9
		    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		    success: function (res) {
		        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
		        uppic(localIds);
		       	//$('#wxlid').val(localIds);
		    }
		});
	}
	function uppic(localIds){
		//localIds=$('#wxlid').val();
        wx.uploadImage({
		    localId: localIds, // 需要上传的图片的本地ID，由chooseImage接口获得
		    isShowProgressTips: 1, // 默认为1，显示进度提示
		    success: function (res) {
		        var serverId = res.serverId; // 返回图片的服务器端ID
		        $('#wxsid').text(serverId);
		    }
		});
	}
	
	
//	var share_openid = "";
//		wx.config({
//		    debug: true,
//		    appId: 'wxcb8c4958089c730f',
//		    timestamp: 1474534008,
//		    nonceStr: '2uuw2cA4ZSqtx5ZV',
//		    signature: '3d47c885d833c68aab1f67ca1788221771a99903',
//		    jsApiList: ['uploadImage','downloadImage','previewImage','chooseImage','showAllNonBaseMenuItem'] // 必填需要使用的JS接口列表所有JS接口列表见附录2
//		  });
//		wx.ready(function(){
//			alert('ok');
//		});
//		wx.error(function(res){
//			alert('err');
//		});
   
 	
    })
