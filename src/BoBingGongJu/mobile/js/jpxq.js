$(function(){

	
	var ExchangeObj=(function(){
     	var $shadow=$('#J_coms-buy-shadow'),
     		$close=$("#J_coms-buy-close"),
			$dialog=$("#J_coms-buy-Dialog");

		var DialogH,animTime=200;
		var showHandle=function(callback){
			$shadow.css("visibility","visible").animate({opacity:1},animTime*2,"ease-out")
			$dialog.css("visibility","visible").animate({translate3d: '0,0,0'},animTime,"ease-out",function(){
				!!callback && callback();
			});
			
		}
		var hideHandle=function(callback){
			$shadow.animate({opacity:0},animTime,"ease-out",function(){
				$shadow.css("visibility","hidden")
			});
			$dialog.animate({translate3d: '0,'+DialogH+'px,0'},animTime,"ease-out",function(){
				$dialog.css("visibility","hidden");
				!!callback && callback();
			})
		}
		var init=function(){
			DialogH=$dialog.height();
			$dialog.animate({translate3d: '0,'+DialogH+'px,0'},0);
			$shadow.on("touchstart",function(){
				hideHandle();
			});
			$close.on("touchstart",function(event){
				event.preventDefault();
				hideHandle();
			})
		}
		init();
		return {
			show:showHandle,
			hide:hideHandle
		}
	})();


    //点击立即兑换按钮
	$("#J_exchange-btn").on("click",function(event){
		event.preventDefault();
		ExchangeObj.show(function(){
			console.dir("xxxxx");
		});
	});

	

	//点击取消按钮
	$("#J_coms-buy-cancel").on("click",function(event){
		event.preventDefault();
		ExchangeObj.hide();
	})
})
