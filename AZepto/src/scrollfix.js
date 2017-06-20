;(function($){
	$.fn.scrollFix=function(){
		if($.device.ios){
			var startY, startTopScroll;
			var elem=this.get(0);
			if(!elem) return;
			elem.addEventListener('touchstart', function(event){
				startY = event.touches[0].pageY;
				startTopScroll = elem.scrollTop;
				
				if(startTopScroll <= 0)
					elem.scrollTop = 1;

				if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
					elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
			}, false);
		}
	}
})(Zepto)