$(function() {

    var Voice=(function(){
        var spriteData = {
            tt:{
                start:0,
                length:1
            },
            0: {
                start: 2.0,
                length: 2.8
            },
            1: {
                start: 5.2,
                length: 2.4
            },
            2: {
                start: 8.0,
                length: 2.7
            },
            3: {//四进
                start: 11.0,
                length: 3.5
            },
            4: {//三红
                start: 14.6,
                length: 3.4
            },
            
            5: {//对堂
                start: 18.0,
                length: 2.8
            },
            6: {//状元
                start: 22.8,
                length: 3.2
            }
        };

        var index=0;

        var handler=function(){
            if (this.currentTime >= spriteData[index].start + spriteData[index].length) {
                this.pause();
            }
        }
        audioElem=document.getElementById("J_audio");
        
        audioElem.addEventListener('timeupdate', handler, false);
        
        var play=function(rank){
            audioElem.currentTime = spriteData[rank].start;
            index=rank;
            audioElem.play(rank);

        };

        var pause=function(){
             audioElem.pause();
        };

        var ready=function(){
            if(audioElem.readyState==4){
                return true;
            }
            return false;
        }
        return {
            play:play,
            pause:pause,
            isReady:ready
        }
    })();
    //骰子对象
    var Dice = (function() {
        return {
            $container: $("#J_bowl-box"),
            show: function(dices,rank) {
                var str = this._render(dices);
                this.$container.html(str);
                Voice.play("tt");
                $(".dice1").animationEnd(function(){
                    Voice.play(rank);
                })

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
                    _this.$elem.css({ left: initLeft + posLeft, top: initTop + posTop,visibility:"visible"});
                if(index==0){

                        _this.$elem.css("visibility","hidden");
                }
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
                         _this.$elem.css("visibility","hidden");
                    });
                }, 250)
            }
        }
    })();

    

    (function() {
        document.addEventListener("touchstart",function(){
            if(!Voice.isReady()){
                Voice.play("tt");
                Voice.pause();
            }
        },false);
        $(window).on("load", function() {

            var realW = $(".slideunlock-slider").width() - $(".slideunlock-btn").width();
            var $lockable=$(".slideunlock-lockable");
            var slider = new SliderUnlock(".slideunlock-slider", {
                labelTip: "按住往右拉>>",
                successLabelTip: "开始！",
                duration: 0 // 动画效果执行时间，默认200ms
            }, function() {
                clickDrapShake("drap");

            }, function() {
                
                if ($lockable.val() == 0) {
                    Plam.move(slider.index);
                }


            });
            slider.init();


            //点击的时候
            //
            function clickDrapShake(type){
                $(".bb-guide-tip").hide();
                $("#J_bowl-box").html("");
                $.ajax({
                    url: 'http://wnworld.com/BoBingGongJu/pc/php/bbgj.php',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function() {
                        if(type=="drap"){
                            Plam.rotating(); //拖拽的时候需要拳头抖动
                        }else{
                            $(".bb-bowl .loading").fadeIn();//点击和摇一摇的时候显示加载按钮
                        }  
                    },
                    success: function(data) {
                        if(type=="drap"){
                            Plam.open(150); //拖拽的时候需要放开拳头
                        }else{
                            $(".bb-bowl .loading").hide();
                        }
                        $(".bb-guide-tip").fadeIn();//点击和摇一摇的时候隐藏加载按钮
                        Dice.show(data.dices,data.rank); //动画骰子
                    }
                })
            }

            $("#J_boyibo-btn").on("click",function(){
                clickDrapShake("click");
            });


            //摇一摇
            var myShakeEvent = new Shake({
                threshold: 15
            });
            myShakeEvent.start();
            window.addEventListener('shake',function(){
                clickDrapShake("shake");
            }, false);
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