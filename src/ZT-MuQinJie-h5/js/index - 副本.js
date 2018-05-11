var isTrueNameValidate = false;
var $truenameInput=$("#J_ipt-true-name");
var sexVal=1;
var $page3Input=$(".slide-page-3 input[type='radio']");
var $page4GrilInput=$(".slide-page-4  .page-item-nv input[type='radio']");
var $page4BoyInput=$(".slide-page-4  .page-item-nan input[type='radio']");
var $page5Input=$(".slide-page-5   input[type='radio']");
var $page6Input=$(".slide-page-6   input[type='radio']");
var $page7Input=$(".slide-page-7   input[type='radio']");


function isCheck($elem){
    var flag=false;
    $.each($elem,function(index, el) {

        if(el.checked){
            flag=true;
        }
    });

    return flag;

}

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
            if($truenameInput.val()){
                isTrueNameValidate=true;
            }

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
            }else if(this.activeIndex==2){
                $page3Input.parent().animate("shake", {
                    complete: function() {
                        $page3Input.parent().removeClass('shake');
                    }
                });
            }else if(this.activeIndex==3 && sexVal==1){
                 $page4GrilInput.parent().animate("shake", {
                    complete: function() {
                        $page4GrilInput.parent().removeClass('shake');
                    }
                });
            }else if(this.activeIndex==3 && sexVal==2){
                 $page4BoyInput.parent().animate("shake", {
                    complete: function() {
                        $page4BoyInput.parent().removeClass('shake');
                    }
                });
            }else if(this.activeIndex==4){
                $page5Input.parent().animate("shake", {
                    complete: function() {
                        $page5Input.parent().removeClass('shake');
                    }
                });
            }else if(this.activeIndex==5){
                $page6Input.parent().animate("shake", {
                    complete: function() {
                        $page6Input.parent().removeClass('shake');
                    }
                });
            }
            else if(this.activeIndex==6){
                if(!isCheck($page7Input)){
                    $page7Input.parent().animate("shake", {
                    complete: function() {
                        $page7Input.parent().removeClass('shake');
                    }
                });
                }
               
            }
        },
        transitionStart: function() {
            if (!isTrueNameValidate && this.activeIndex == 2) {
                this.slideTo(this.activeIndex - 1, 1000, false);
            }else if(this.activeIndex == 3){
                if(!isCheck($page3Input)){
                    this.slideTo(this.activeIndex - 1, 1000, false);
                }
            }else if(this.activeIndex == 4 && sexVal==1){
                if(!isCheck($page4GrilInput)){
                    this.slideTo(this.activeIndex - 1, 1000, false);
                }
               
            }else if(this.activeIndex == 4 && sexVal==2){
               if(!isCheck($page4BoyInput)){
                    this.slideTo(this.activeIndex - 1, 1000, false);
                }
            }else if(this.activeIndex == 5){
                if(!isCheck($page5Input)){
                    this.slideTo(this.activeIndex - 1, 1000, false);
                } 
            }
            else if(this.activeIndex ==6){
                if(!isCheck($page6Input)){
                    this.slideTo(this.activeIndex - 1, 1000, false);
                } 
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
    $(".slide-page-3 .item-cell-next .next-btn").on("click", function() {
        if(!isCheck($page3Input)){
            $page3Input.parent().animate("shake", {
                    complete: function() {
                        $page3Input.parent().removeClass('shake');
                    }
                });
        }else{
            mySwiper.slideNext();
        }
    });

    $(".slide-page-4 .item-cell-next .next-btn").on("click", function() {
        if(sexVal==1 && !isCheck($page4GrilInput)){
            $page4GrilInput.parent().animate("shake", {
                    complete: function() {
                        $page4GrilInput.parent().removeClass('shake');
                    }
                });
        }else if(sexVal==2 && !isCheck($page4BoyInput)){
            $page4BoyInput.parent().animate("shake", {
                    complete: function() {
                        $page4BoyInput.parent().removeClass('shake');
                    }
                });
        }else{
            mySwiper.slideNext();
        }
    });
    $(".slide-page-5 .item-cell-next .next-btn").on("click", function() {
        if(!isCheck($page5Input)){
            $page5Input.parent().animate("shake", {
                    complete: function() {
                        $page5Input.parent().removeClass('shake');
                    }
                });
        }else{
            mySwiper.slideNext();
        }
    });

    $(".slide-page-6 .item-cell-next .next-btn").on("click", function() {

        if(!isCheck($page6Input)){
            $page6Input.parent().animate("shake", {
                    complete: function() {
                        $page6Input.parent().removeClass('shake');
                    }
                });
        }else{
            mySwiper.slideNext();
        }
    });

    $("#J_ipt-submit").on("click",function(){
        if(!isCheck($page7Input)){
            $page7Input.parent().animate("shake", {
                    complete: function() {
                        $page7Input.parent().removeClass('shake');
                    }
                });
        }else{
            alert("提交")
        }

        // $("#J_result-submit-tip").animate({"visibility":"visible","opacity":1},function(){
        //     setTimeout(function(){
        //         $("#J_result-submit-tip").animate({"visibility":"hidden","opacity":0});
        //     },1500)
        // })
    })

    
});




//点击女生或男生
$(function(){
    $("input[name='sex']").on("change",function(){
        var $this=$(this);
        if($this.val()==1){
            sexVal=1;
            //女生
            $(".page-item-nv").show();
            $(".page-item-nan").hide();

        }else{
            //男生
            sexVal=2;
           $(".page-item-nv").hide();
           $(".page-item-nan").show();
        }
        $.each($page4BoyInput,function(index,el){
            $(el).prop("checked",false);
            console.dir("dsdd");
        });

        $.each($page4GrilInput,function(index,el){
            $(el).prop("checked",false);
        })
        
       
    })
})