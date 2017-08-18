//banner 的js
;
(function($) {
    $.fn.bannerSlider = function(options) {
        var defaults = {
            width: 950,
            height: 355,
            auto: true,
            effect: "slider",
            Pause: 3000,
            animTime: 250,
            zIndex: 10,
            parentClass: "cs-bannerWrap",
            pagination: {
                show: true,
                evtType: "click",
                className: "banner-numlist"
            },
            btn: {
                show: true,
                dynamic: true
            },
            describe: {
                show: true,
                left: 0,
                bottom: 0
            }
        };

        var opts = $.extend(true, defaults, options),
            $this = this;
        var Index = 0,
            $this = this,
            len,
            isLock = false,
            animDir = 1,
            Timer = null,
            isFirst = true,
            effectArray = ["slider", "fade"],
            isIE6 = !-[1, ] && !window.XMLHttpRequest,
            animationWay;
        var $prevBtn, $nextBtn, $pagination, $pagination_lis, $slider_lis, $parent, $describe;
        $slider_lis = this.children("li");
        $parent = this.parent();
        len = $slider_lis.length;

        //传进来的效果
        function getAnimWay(effect) {
            try {
                if (effect.constructor !== String) {
                    throw new Error(effect + "must be String");
                } else {
                    var index = $.inArray(effect, effectArray)
                    if (index >= 0) {
                        animWayInit(effect);
                        return effect;
                    } else {
                        alert(effect + " effects is not defined in the plugin");
                        return false;
                    }
                }
            } catch (e) {
                alert(e.message)
            }

        };

        function animWayInit(effect) {
            if (effect == effectArray[0]) {
                $slider_lis.css("position", "absolute").eq(Index).css({ zIndex: opts.zIndex, display: "block" }).siblings().css({ zIndex: opts.zIndex - 1 }).hide();

            } else if (effect == effectArray[1]) {
                $slider_lis.css({ position: "absolute", opacity: 0, zIndex: opts.zIndex - 1 }).eq(Index).css("zIndex", opts.Index).animate({ "opacity": 1 });
                if (isIE6) {
                    $slider_lis.css("display", "none").eq(Index).css("display", "block")
                }
            }
        }

        function btnInit() {
            if (opts.btn.show) {
                $prevBtn = $('<a href="#" class="dir-btn banner-ui-prev" style="display:none"></a>');
                $nextBtn = $('<a href="#" class="dir-btn banner-ui-next" style="display:none"></a>');
                $prevBtn.css("zIndex", opts.zIndex + 1).addClass("banner-ui-prev");
                $nextBtn.css("zIndex", opts.zIndex + 1).addClass("banner-ui-next");

                $prevBtn.appendTo($parent);
                $nextBtn.appendTo($parent);
                if (opts.btn.dynamic) {
                    $prevBtn.hide();
                    $nextBtn.hide();
                } else {
                    $prevBtn.show();
                    $nextBtn.show();
                }
                $prevBtn.bind("mouseover", thisMouseover).bind("mouseout", thisMouseout).bind("click", prevBtnScroll);
                $nextBtn.bind("mouseover", thisMouseover).bind("mouseout", thisMouseout).bind("click", nextBtnScroll);
            }
        };

        function thisMouseover(event) {
            clearTimeout(Timer);
            var relateElem = event.relatedTarget;
            if ($(relateElem).closest($parent).length > 0) {
                return;
            } else {
                if (opts.btn.dynamic) {
                    $prevBtn.stop(false, true).fadeIn();
                    $nextBtn.stop(false, true).fadeIn();
                }
                isLock = true;
                animDir = 1;
            }
        };

        function thisMouseout(event) {
            var relateElem = event.relatedTarget;
            if ($(relateElem).closest($parent).length > 0) {
                return;
            } else {

                if (opts.btn.dynamic) {
                    $prevBtn.stop(false, true).fadeOut();
                    $nextBtn.stop(false, true).fadeOut();
                }
                isLock = false;
                isFirst = true;
                animDir = 1;
                beginStart()

            }
        }

        function prevBtnScroll() {
            if (!$this.is(":animated")) {
                clearTimeout(Timer)
                Index--;
                animDir = 0;
                beginStart();
            }
            return false;
        }

        function nextBtnScroll() {
            if (!$this.is(":animated")) {
                clearTimeout(Timer)
                Index++;
                animDir = 1;
                beginStart()
            }
            return false;
        }

        function paginationInit() {
            var strLis = "";
            if (opts.pagination.show) {
                if (len > 1) {
                    $pagination = $('<ul></ul>');
                    $pagination.addClass(opts.pagination.className).css({ "zIndex": opts.zIndex + 1, "position": "absolute" })
                    for (var i = 0; i < len; i++) {
                        strLis += "<li><span>" + (i + 1) + "</span></li>";
                    }
                    $pagination.append(strLis);
                    $pagination.appendTo($parent)
                    $pagination_lis = $pagination.find("li");
                    $pagination_lis.eq(Index).addClass("oncurr");
                    $pagination_lis.each(function() {
                        $(this).bind(opts.pagination.evtType, paginationEvt);
                        $(this).bind("mouseover", thisMouseover).bind("mouseout", thisMouseout);

                    })
                }
            }
        };

        function paginationEvt() {
            var prevIndex = Index;
            isLock = true;
            clearTimeout(Timer);
            Index = $pagination_lis.index(this);
            if (prevIndex < Index) {
                animDir = 1;
                beginStart()
            } else if (prevIndex > Index) {
                animDir = 0;
                beginStart()
            } else {
                return
            }
        }

        function descInit() {
            if (opts.describe.show) {
                $describe = $('<div class="banner-ui-desc"></div>');
                $describe.appendTo($parent).css({ zIndex: opts.zIndex + 1, position: "absolute", left: opts.describe.left, bottom: opts.describe.bottom });
                if ($.trim($slider_lis.eq(Index).attr("data-title")) == "") {
                    $describe.hide()
                } else {
                    $describe.text($slider_lis.eq(Index).attr("data-title"));
                }
                $describe.bind("mouseout", thisMouseout)
            }
        };

        function switchAnimDir(animDir, animationWay) {
            if (animationWay == "slider") {
                var childrenAnimW = null,
                    parentAnimW = null;
                switch (animDir) {
                    case 0: //左按钮
                        childrenAnimW = -opts.width; //子元素右移
                        parentAnimW = opts.width; //父元素左移动
                        slideScroll(childrenAnimW, parentAnimW);
                        break;
                    case 1: //右按钮
                        childrenAnimW = opts.width;
                        parentAnimW = -opts.width;
                        slideScroll(childrenAnimW, parentAnimW)
                        break;
                }
            } else if (animationWay == "fade") {
                $slider_lis.css("zIndex", opts.zIndex - 1).stop(true).animate({ opacity: 0 }).eq(Index).css("zIndex", opts.zIndex).stop(true).animate({ opacity: 1 });
                if (isIE6) {
                    $slider_lis.css("display", "none").eq(Index).css("display", "block")
                }
            }



        };

        function slideScroll(childrenAnimW, parentAnimW) {
            $slider_lis.eq(Index).css({ left: childrenAnimW, zIndex: opts.zIndex, display: "block" });
            $this.stop(false, true).animate({ left: parentAnimW }, opts.animTime, function() {
                $slider_lis.eq(Index).css("left", 0).siblings().css({ zIndex: opts.zIndex - 1, display: "none" });
                $(this).css("left", 0);
            })
        };

        function beginStart() {
            if (Index < 0) {
                Index = len - 1;
            } else if (Index == len) {
                Index = 0
            }
            scrolling();
        };

        function scrolling() {
            if (isFirst) {
                isFirst = false
            } else {
                switchAnimDir(animDir, animationWay)
                if (opts.pagination.show) {

                    $pagination_lis.eq(Index).addClass("oncurr").siblings().removeClass("oncurr")
                }
            }
            if (opts.describe.show) {
                if ($.trim($slider_lis.eq(Index).attr("data-title")) == "") {
                    $describe.fadeOut();
                } else {
                    $describe.text($slider_lis.eq(Index).attr("data-title")).fadeIn()
                }
            }
            if (!isLock && opts.auto) {
                Timer = setTimeout(function() {
                    Index++;
                    beginStart();
                }, opts.Pause)
            }
        };
        var Init = function() {
            //初始化父元素
            $parent.addClass(opts.parentClass).css({ width: opts.width, height: opts.height, position: "relative", overflow: "hidden" });
            //初始化ul
            $this.css({ width: opts.width, height: opts.height, position: "relative" });
            //获取效果的方式
            if (len > 1) {
                animationWay = getAnimWay(opts.effect);
                btnInit();
                paginationInit();
                descInit();
                $this.bind("mouseover", thisMouseover);
                $this.bind("mouseout", thisMouseout);
                beginStart()
            }
        };
        Init();
    }
})(jQuery);





$(function() {
    $("#J_banner_1").bannerSlider({
        width: 730, //宽 (如果100%的时候请传入字符串)
        height: 354, //高
        auto: true, //是否能自动滚
        effect: "slider", //效果
        Pause: 3000, //停顿时间-两个动画滚动间隔的时间
        animTime:350,
        //一张图滚动的时间
        zIndex: 10, //设置层级相互遮盖
        parentClass: "banner-wrap",
        pagination: {
            show: true,
            className: "banner-numlist"
        },
        btn: {
            show: true,
            dynamic: true //是否有鼠标移动上去显示箭头的效果
        },
        describe: {
            show: false
        }
    });


    (function(){
    	$li=$("#J_fixed-nav").children('li')
    	$li.each(function(){
	    	var $this=$(this);
	    	$this.on("click",function(){
	    		$this.addClass('oncurr').siblings().removeClass("oncurr");
	    	})
   		});
    	var arrId=["#J_adverts_area_1","#J_marry-tool","#J_xmtj","#J_hlht","#J_jxzt","#J_yzsj","#J_recommend-seller-list"],
    		arrScrollTop=[];
    	$.each(arrId,function(index,val){
    		if(index==arrId.length-1){
    			arrScrollTop.push(Math.floor($(val).offset().top)+$(val).height());
    		}else{
    			arrScrollTop.push(Math.floor($(val).offset().top));
    		}
    	});
    	function  handleClass(index){
    		if(!!index || index==0){
    			$li.eq(index).addClass('oncurr').siblings().removeClass("oncurr");
    		}else{
    			$li.removeClass("oncurr");
    		}

    	}

    	var processor = {
		   timeoutId: null,
		     //实际进行处理的方法
		   performProcessing: function(scrolltop,arrScrollTop){
		     	if(scrolltop>=arrScrollTop[0]  && scrolltop < arrScrollTop[1]){
    				handleClass(0);
	    		}else if(scrolltop>=arrScrollTop[1]  && scrolltop < (arrScrollTop[2])){
	    			handleClass(1);
	    		}else if(scrolltop>=arrScrollTop[2]  && scrolltop < (arrScrollTop[3]-10)){
	    			handleClass(2);
	    		}else if(scrolltop>=(arrScrollTop[3])  && scrolltop < (arrScrollTop[4])){
	    			handleClass(3);
	    		}else if(scrolltop>=arrScrollTop[4]  && scrolltop < (arrScrollTop[5])){
	    			handleClass(4);
	    		}else if(scrolltop>=arrScrollTop[5] && scrolltop < (arrScrollTop[6])){
	    			handleClass(5);
	    		}else{
	    			handleClass();
	    		}
		   },
		  //初始处理调用的方法
		  process: function(scrolltop,arrScrollTop){
		    clearTimeout(this.timeoutId);
		    var that = this;
		    this.timeoutId = setTimeout(function(){
		      that.performProcessing(scrolltop,arrScrollTop);
		    }, 100);
		  }
		};

    	$(window).on("scroll",function(){
    		var scrolltop=$(this).scrollTop();
    		processor.process(scrolltop,arrScrollTop);
    	})
    })();
});

(function($) {

    $(function() {
        var singleW = 550;
        var $scollerContainer = $("#J_scroll-wrap");
        var $ul = $scollerContainer.find(".list").eq(0);
        var $li = $ul.children("li");
        var totalW = $li.length * singleW;
        $scollerContainer.css("width", totalW * 3);
        $ul.clone().appendTo($scollerContainer);
        $ul.clone().appendTo($scollerContainer);
        $scollerContainer.css("left", -(totalW - singleW / 2));


        var currNum = 1;

        $("#J_dir-l").on("click", function() {
        	// console.dir(currNum)
            if (!$scollerContainer.is(':animated')) {
                if (currNum <=1) {
                    currNum = $li.length;
                    $scollerContainer.css("left", -((currNum-1) * singleW+singleW / 2 + totalW)).animate({
                        left: "+=" + singleW
                    })
                } else {
                    $scollerContainer.animate({
                        left: "+=" + singleW
                    }, function() {
                        currNum--;
                    })
                }
            }

        });

        $("#J_dir-r").on("click", function() {
        	// console.dir(currNum)
            if (!$scollerContainer.is(':animated')) {
                if (currNum > $li.length - 1) {
                    currNum = 1;
                    $scollerContainer.css("left", -(currNum * singleW + singleW / 2)).animate({
                        left: "-=" + singleW
                    })
                } else {
                    $scollerContainer.animate({
                        left: "-=" + singleW
                    }, function() {
                        currNum++;
                    })
                }
            }
        })
    })

})(jQuery);
