var isTrueNameValidate = false;
var $truenameInput;

var mySwiper = new Swiper('.swiper-container', {
    lazy: true,
    noSwiping: true,
    allowSlidePrev: true,
    allowSlideNext: true,
    direction: 'vertical',
    height: window.innerHeight,
    on: {
        init: function() {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画


        },
        touchStart: function(event) {

            // if(!isTrueNameValidate){
            //     $(".slide-page-2").addClass("swiper-no-swiping");
            // }
        },
        touchMove: function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!isTrueNameValidate && this.activeIndex == 0) {
                // alert(mySwiper.getTranslate());
            }

        },

        transitionEnd: function() {

            if (!isTrueNameValidate && this.activeIndex == 1) {
                $truenameInput.parent().animate("shake", {
                    complete: function() {
                        $truenameInput.parent().removeClass('shake');
                    }
                });
            }
        },
        transitionStart: function() {
            if (!isTrueNameValidate && this.activeIndex == 2) {
                this.slideTo(this.activeIndex - 1, 1000, false);
            }

        },
        slideChangeTransitionStart: function() {


        },
        slideChange: function() {


        },
        slideChangeTransitionEnd: function() {

            // alert(this.activeIndex);
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});






//点击音频播放按钮
(function() {
    var audio = document.getElementById("J_media");
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function() {
        audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        audio.play();
    }, false);
    $(function() {
        var audio = document.getElementById('J_media');
        var $audioBtn = $("#J_auto-btn");
        $audioBtn.on("touchstart", function(event) {
            event.stopPropagation();
            if (audio.paused) {
                $audioBtn.addClass("rotating");
                audio.play();
            } else {
                $audioBtn.removeClass("rotating");
                audio.pause();
            }
        })
    })
})();


//点击开始测试

$(function() {

    $truenameInput = $("#J_ipt-true-name");
    var $parent = $truenameInput.parent();

    $truenameInput.on("keyup", function() {
        isTrueNameValidate = $.trim($(this).val()) ? true : false;
        if (isTrueNameValidate) {
            $(".slide-page-2").removeClass("swiper-no-swiping");
        } else {
            $(".slide-page-2").addClass("swiper-no-swiping");
        }
    });

    $("#J_star-cs-btn").on("click", function() {
       
        if (!isTrueNameValidate) {
            $parent.animate("shake", {
                complete: function() {
                    $parent.removeClass('shake');
                }
            });
        } else {
            mySwiper.slideNext();
        }
    })
})











$(function() {
    $(".item-cell-next .next-btn").on("click", function() {
        mySwiper.slideNext();

    });
});

$(function(){
    $("#J_ipt-submit").on("click",function(){
        $("#J_result-submit-tip").animate({"visibility":"visible","opacity":1},function(){
            setTimeout(function(){
                $("#J_result-submit-tip").animate({"visibility":"hidden","opacity":0});
            },1500)
        })
    })
})