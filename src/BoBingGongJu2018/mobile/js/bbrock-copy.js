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
       
        return {
            $elem: $plam,
            move: function() {
                var _this = this;
                    _this.$elem.addClass('selected');
               
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
                   _this.$elem.removeClass('selected');
                   _this.$elem.removeClass('open');
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

           

            //点击的时候
            //
            function clickDrapShake(){
                $(".bb-guide-tip").hide();
                $("#J_bowl-box").html("");
                Plam.move();
                $.ajax({
                    url: 'https://wnworld.com/BoBingGongJu/pc/php/bbgj.php',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function() {
                        Plam.rotating(); //拖拽的时候需要拳头抖动
                    },
                    success: function(data) {
                        Plam.open(150); //拖拽的时候需要放开拳头
                        $(".bb-guide-tip").fadeIn();//点击和摇一摇的时候隐藏加载按钮
                        Dice.show(data.dices,data.rank); //动画骰子
                    }
                })
            }

            $("#J_boyibo-btn").on("click",function(){
                
                clickDrapShake();
            });


            //摇一摇
            var myShakeEvent = new Shake({
                threshold: 15
            });
            myShakeEvent.start();
            window.addEventListener('shake',function(){
                clickDrapShake();
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