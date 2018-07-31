$(function() {


    //骰子对象
    var Dice = (function() {
        return {
            $container: $("#J_bowl-box"),
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
            hide: function() {
                var _this = this;
                _this.$container.html("");
            }
        }
    })();
    //手掌对象
    var Plam = (function() {
        var $plam = $("#J_plam-hand");
        var initTop = -$plam.height(),
            initLeft = -$plam.width(),
            slideW = parseInt($(".slideunlock-slider").width() - $(".slideunlock-btn").width());

        return {
            $elem: $plam,
            move: function(index) {
                var _this = this,
                    posTop = Math.abs(index * ((initTop - 40) / slideW)),
                    posLeft = Math.abs(index * ((initLeft - 130) / slideW));
                _this.$elem.css({ left: initLeft + posLeft, top: initTop + posTop });
            },
            rotating: function() {
                this.$elem.addClass('swing')
            },
            open: function(time) {
                var time = !!time ? time : 250;
                var _this = this;
                this.$elem.removeClass('swing').addClass('open');
                setTimeout(function() {
                    _this.close();
                }, time)
            },
            close: function() {
                var _this = this;
                setTimeout(function() {
                    _this.$elem.animate({ left: initLeft, top: initTop }, 100, function() {
                        _this.$elem.removeClass('open');
                    });
                }, 250)
            }
        }
    })();

    var Voice=(function(){
        var spriteData = {
            l0: {
                start: 2.0,
                length: 2.8
            },
            l1: {
                start: 5.2,
                length: 2.4
            },
            l2: {
                start: 8.0,
                length: 2.7
            },
            l3: {
                start: 14.6,
                length: 3.4
            },
            l4: {
                start: 11.0,
                length: 3.5
            },
            l5: {
                start: 18.0,
                length: 2.8
            },
            l6: {
                start: 22.8,
                length: 3.2
            }
        };
        
    })()

    (function() {
        $(window).on("load", function() {
            var realW = $(".slideunlock-slider").width() - $(".slideunlock-btn").width();
            var flagSuccess = false;
            var $lockable=$(".slideunlock-lockable");
            var audioTT=$("#J_audiott").get(0);

            var slider = new SliderUnlock(".slideunlock-slider", {
                labelTip: "按住往右拉>>",
                successLabelTip: "开始！",
                duration: 0 // 动画效果执行时间，默认200ms
            }, function() {
                $.ajax({
                    url: 'http://wnworld.com/BoBingGongJu/pc/php/bbgj.php',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function() {
                        Plam.rotating(); //拳头抖动
                    },
                    success: function(data) {
                        flagSuccess = true;
                        Plam.open(150); //放开拳头
                        Dice.show(data.dices); //动画骰子


                    }
                })

            }, function() {
                
                if ($lockable.val() == 0) {
                    Plam.move(slider.index);
                }


            });
            slider.init();



            $(".slideunlock-btn").on("touchstart", function() {
                if ($lockable.val() == 0) {
                    audioTT.play();
                    audioTT.pause();
                    var Timer = setInterval(function() {
                        if (flagSuccess == true) {
                            clearInterval(Timer);
                            audioTT.play();
                            flagSuccess=false;
                        }
                    },100);
                }
            });

            $("#J_boyibo-btn").on("click",function(){

                audioTT.play();
                audioTT.pause();
               var Timer = setInterval(function() {
                    if (flagSuccess == true) {
                        clearInterval(Timer);
                        audioTT.play();
                        flagSuccess=false;
                    }
                },100);

                $.ajax({
                    url: 'http://wnworld.com/BoBingGongJu/pc/php/bbgj.php',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function() {
                        
                    },
                    success: function(data) {
                        flagSuccess = true;
                        
                        Dice.show(data.dices); //动画骰子


                    }
                })
            })

        })

    })()



    //
    //
    var swiper1 = new Swiper('#J_bb-swiper-container', {

        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0
    });


    //
    //
    var DialogCount = $("#J_bb-dialog-addcount").dialogs({
        shadeClose: true
    });

    $("#J_para-amount").on("click", function(event) {
        event.preventDefault();
        DialogCount.show();
    });

    //
    var DialogXYM = $("#J_bb-dialog-xyb").dialogs({
        shadeClose: true
    });

    $("#J_para-zyb").on("click", function(event) {
        event.preventDefault();
        DialogXYM.show();
    });

    //
    //
    var DialogEWM = $("#J_bb-dialog-qrcode").dialogs({
        shadeClose: true
    });

    $("#J_entery-gzsj").on("click", function(event) {
        event.preventDefault();
        DialogEWM.show();
    })

})