$(function() {

	//骰子对象
    var Dice = (function() {
        return {
        	$container:$("#J_bowl-box"),
            show: function(dices) {
                var str = this._render(dices);
                this.$container.html(str);
            },
            _render: function(dices) {

                var strArr = [];
                for (var i = 0; i < dices.length; i++) {
                    var num = i + 1;
                    strArr.push('<span class="dice active dice' + num + '"><img src="images/dices' + dices[i] + '.png"/></span>');
                }
                return strArr.join("");
            },
            hide:function(){
            	var _this=this;
            	_this.$container.html("");
            }
        }
    })();
     //手掌对象
    var Plam = (function() {
    	var $plam=$("#J_plam-hand");
        var initTop =-$plam.height(),
            initLeft =-$plam.width(),
            slideW=parseInt($(".slideunlock-slider").width()-$(".slideunlock-btn").width());

        return {
            $elem:$plam,
            move: function(index) {
                var _this = this,
                    posTop =Math.abs(index * ((initTop-40) / slideW)),
                    posLeft =Math.abs(index * ((initLeft-130) / slideW));
                _this.$elem.css({ left: initLeft + posLeft, top: initTop + posTop });
            },
            rotating:function(){
            	this.$elem.addClass('swing')
            },
            open: function(time) {
            	var time=!!time ? time :250;
                var _this = this;
                this.$elem.removeClass('swing').addClass('open');
                setTimeout(function() {
                    _this.close();
                }, time)
            },
            close: function() {
                var _this = this;
               setTimeout(function(){
               	   _this.$elem.animate({ left: initLeft, top: initTop},100,function(){
	               	    _this.$elem.removeClass('open');
	               });
               },250)
            }
        }
    })();



    var slider = new SliderUnlock(".slideunlock-slider", {
        labelTip: "按住往右拉>>",
        successLabelTip: "开始！",
        duration: 0 // 动画效果执行时间，默认200ms
    }, function() {

    	if($(".slideunlock-lockable").val()==0){
    		console.dir()
    		Plam.rotating();//拳头抖动
	    	$.ajax({
	    		url: 'http://wnworld.com/conn/bbgj.php',
	    		type: 'post',
	    		dataType: 'json',
	    		success:function(data){
	    			Plam.open(150);//放开拳头
	    			Dice.show(data.dices);//动画骰子
	    		}
	    	})
    	}
    }, function() {
    	if($(".slideunlock-lockable").val()==0){
    		Plam.move(slider.index);
    	}
    });
    slider.init();
})