$(function(){
	/* 头部导航-start */
	
	// 移动客户端 hover 鼠标悬停0.5s后执行
	let clientTimer;

	$("#client").hover(function(){
		clearTimeout(clientTimer);
		clientTimer = setTimeout(function(){
			$(".left_nav>.navList").css("display","block");
		},500);
	},function(){
		clearTimeout(clientTimer);
		clientTimer = setTimeout(function(){
			$(".left_nav>.navList").css("display","none");
		},500);
	});
	
	$(".left_nav>.navList").hover(function(){
		clearTimeout(clientTimer);
		clientTimer = setTimeout(function(){
			$(".left_nav>.navList").css("display","block");
		},500);
	},function(){
		clearTimeout(clientTimer);
		clientTimer = setTimeout(function(){
			$(".left_nav>.navList").css("display","none");
		},500);
	});
	// 登录窗口被关闭
	$(".loginClose").click(function(){
		$(".loginBox").css("display","none");
	});
	/* 头部导航-end */
	
	/* 搜索栏-start */
	$(".search-select").click(function(){
		if($(".selectList").css("display") == "none"){
			$(".selectList").css("display","block");
		}else{
			$(".selectList").css("display","none");
		}
	});
	$(".selectList").blur(function(){
		$(".selectList").css("display","none");
	});
	$(".selectList>li").click(function(){
		if($(this).text() != "更多>>"){ // 原版点击更多时跳转新链接
			$(".search-select>span").text($(this).text());
		}
	});
	
	// 搜索框
	$(".search-input").focus(function(){
		$(this).attr("placeholder","");
		if(!$(this).val()){
			$(".top-tip").show();
		}
	});
	$(".search-input").blur(function(){
		setTimeout(function(){
			$(this).attr("placeholder","请输入关键字");
			$(".top-tip").hide();
		},100);
	});
	$(".search-input").keyup(function(){
		if($(this).val()){
			$(".top-tip").hide();
		}else{
			$(".top-tip").show();
		}
	});
	$(".top_search .item").on("click",function(){
		$(".search-input").val($(this).text());
	});
	
	//广告轮播
	let adsTimer = adsCarousel();
	$(".ads").hover(function(){
		clearInterval(adsTimer);
	},function(){
		adsTimer = adsCarousel();
	});
	/* 搜索栏-end */
	
	/* 新浪产品-start */
	// 上一帧
	$(".product .mod-prev").click(function(){
		let animateFlag = false;
		$(".product>div").stop(true,true);
		$(".product>div").animate({left:"+=253"},200,function(){
			if(!animateFlag){
				$(".product>div").eq(3).css("left","-242px");
				$last = $(".product>div").eq(3).clone(false);
				$(".product>div").eq(3).remove();
				$(".product>div").eq(0).before($last);
				animateFlag = true;
			}	
		});
	});
	//下一帧
	$(".product .mod-next").click(function(){
		let animateFlag = false;
		$(".product>div").stop(true,true); 
		$(".product>div").animate({left:"-=253"},200,function(){
			if(!animateFlag){
				$(".product>div").eq(0).css("left","519px");
				$last = $(".product>div").eq(0).clone(false);
				$(".product>div").eq(0).remove();
				$(".product>div").eq(2).after($last);
				animateFlag = true;
			}
		});
	});
	// 产品轮播
	setInterval(function(){
		$(".product .mod-next").trigger("click");
	},5000);
	// 黑猫gif
	$(".heimaogif").hover(function(){
		$(this).children("img").attr("src","images/blackcat-hover.gif");
	},function(){
		$(this).children("img").attr("src","images/blink.gif");
	});
	/* 新浪产品-end */
	
	//content-1
	$(".part-1 .part1-top .span_1").mouseenter(function(){
		$(".part-1 .part1-top .active1").css("display","block");
		$(".part-1 .part1-top .active2").css("display","none");
		$(".part-1 .part1-top .active3").css("display","none");
		$(".part-1 .part1-top .span_1").css({
			border: "0px",
		});
		$(".part-1 .part1-top .span_2").css({
			border: "1px",
			borderRight: "0px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-1 .part1-top .span_3").css({
			border: "1px",
			borderLeft: "0px",
			borderRight: "0px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-1 .part1-top .cont-wrap").eq(0).removeClass("display-none");
		$(".part-1 .part1-top .cont-wrap").eq(1).addClass("display-none");
		$(".part-1 .part1-top .cont-wrap").eq(2).addClass("display-none");
	});
	$(".part-1 .part1-top .span_2").mouseenter(function(){
		$(".part-1 .part1-top .active2").css("display","block");
		$(".part-1 .part1-top .active1").css("display","none");
		$(".part-1 .part1-top .active3").css("display","none");
		$(".part-1 .part1-top .span_1").css({
			border: "1px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-1 .part1-top .span_2").css({
			border: "0px",
			borderRight: "1px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-1 .part1-top .span_3").css({
			border: "1px",
			borderLeft: "0px",
			borderRight: "0px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-1 .part1-top .cont-wrap").eq(0).addClass("display-none");
		$(".part-1 .part1-top .cont-wrap").eq(1).removeClass("display-none");
		$(".part-1 .part1-top .cont-wrap").eq(2).addClass("display-none");
	});
	$(".part-1 .part1-top .span_3").mouseenter(function(){
		$(".part-1 .part1-top .active3").css("display","block");
		$(".part-1 .part1-top .active1").css("display","none");
		$(".part-1 .part1-top .active2").css("display","none");
		$(".part-1 .part1-top .span_1").css({
			border: "1px",
			borderRight: "0px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-1 .part1-top .span_2").css({
			border: "1px",
			borderLeft: "0px",
			borderRight: "0px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-1 .part1-top .span_3").css({
			border: "1px",
			borderTop: "0px",
			borderBottom: "0px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-1 .part1-top .cont-wrap").eq(0).addClass("display-none");
		$(".part-1 .part1-top .cont-wrap").eq(1).addClass("display-none");
		$(".part-1 .part1-top .cont-wrap").eq(2).removeClass("display-none");
	});
	
	$(".part1-bottom .order-menu .span_1").mouseenter(function(){
		$(this).css("border",0);
		$(".part1-bottom .order-menu .span_2").css({
			border:"1px",
			borderRight:"0px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part1-bottom .active1").css("display","block");
		$(".part1-bottom .active2").css("display","none");
		$(".part1-bottom .cont-wrap").eq(0).removeClass("display-none");
		$(".part1-bottom .cont-wrap").eq(1).addClass("display-none");
		
	});
	
	$(".part1-bottom .order-menu .span_2").mouseenter(function(){
		$(".part1-bottom .order-menu .span_1").css({
			border: "1px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(this).css({
			border: "0px",
			borderRight:"1px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part1-bottom .active2").css("display","block");
		$(".part1-bottom .active1").css("display","none");
		$(".part1-bottom .cont-wrap").eq(1).removeClass("display-none");
		$(".part1-bottom .cont-wrap").eq(0).addClass("display-none");
	});
	$(".part1-bottom .pic-1,.part1-bottom .pic-2").hover(function(){
		$(this).children(".title").css("color","#ff8400");
		$(this).children(".play_ico").addClass("play_ico_hover");
	},function(){
		$(this).children(".title").css("color","#fff");
		$(this).children(".play_ico").removeClass("play_ico_hover");
	});
	
	
	$(".part-2 .span_1").mouseenter(function(){
		$(".part-2 .active1").css("display","block");
		$(".part-2 .active2").css("display","none");
		$(".part-2 .span_1").css({
			border: "0px",
		});
		$(".part-2 .span_2").css({
			border: "1px",
			borderRight: "0px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-2 .cont-wrap").eq(1).addClass("display-none");
		$(".part-2 .cont-wrap").eq(0).removeClass("display-none");
	});
	
	$(".part-2 .span_2").mouseenter(function(){
		$(".part-2 .active1").css("display","none");
		$(".part-2 .active2").css("display","block");
		$(".part-2 .span_1").css({
			border: "1px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-2 .span_2").css({
			borderLeft: "0px",
			borderTop: "0px",
			borderBottom: "0px",
			borderRight: "1px",
			borderColor: "#dbdee1",
			borderStyle: "solid"
		});
		$(".part-2 .cont-wrap").eq(0).addClass("display-none");
		$(".part-2 .cont-wrap").eq(1).removeClass("display-none");
	});
	
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var day = d.getDate();
	$(".part-2 .col span").html(`${year}.${month}.${day}`);
});


// 函数

function adsCarousel(){
	let timer = setInterval(function(){
		let n = 0;
		$(".ads>div").animate({top:"-=50"},1000,function(){
			if(n++ == 0){
				$img = $(".ads>div").eq(0).clone(false);
				$(".ads").append($img);
				$(".ads>div").eq(0).remove();
			}
			if(n == 3){
				$(".ads>div").css("top",0);
			}
			
		});
	},3000);
	
	return timer;
}