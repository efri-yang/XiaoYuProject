$(function() {
    //下拉列表插件调用
    dropdownPlugin(".bb-rock-dhway");


    (function() {
        var $add = $("#J_add-num");
        var index;
        $add.on("click", function(event) {
            event.preventDefault();

            index = layer.open({
                type: 1,
                shade: true,
                closeBtn: false,
                shade: [0.8, '#000'],
                shadeClose: true,
                title: false, //不显示标题
                area: ['540px', '574px'],
                content: $('#J_bb-dia-qrcode')
                    //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
            });
        });
        $("#J_bb-dia-qrcode .close,#J_bb-dia-qrcode .close-qrcode").on("click", function(event) {
            event.preventDefault();
            layer.close(index);
        })
    })();

    (function() {
        var $gain = $("#J_gain-yb");
        var index;
        $gain.on("click", function(event) {
            event.preventDefault();

            index = layer.open({
                type: 1,
                shade: true,
                closeBtn: false,
                shade: [0.8, '#000'],
                shadeClose: true,
                title: false, //不显示标题
                area: ['540px', '361px'],
                content: $('#J_bb-dia-zyb')
                    //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
            });

            $("#J_bb-dia-zyb .close,#J_bb-dia-zyb .close-qrcode").on("click", function(event) {
                event.preventDefault();
                layer.close(index);
            })

        });
    })();


    //骰子对象
    var Dice = (function() {
        return {
            show: function(dices) {
                var str = this._render(dices);
                $("#J_bowl-box").html(str);
            },
            _render: function(dices) {

                var strArr = [];
                for (var i = 0; i < dices.length; i++) {
                    var num = i + 1;
                    strArr.push('<span class="dice active dice' + num + '"><img src="images/dices' + dices[i] + '.png"/></span>');
                }
                return strArr.join("");
            }
        }
    })();

    //手掌对象
    var Plam = (function() {
        var initTop = -207,
            initLeft = -333;
        return {
            $elem: $("#J_plam"),

            move: function(index) {
                var _this = this,
                    posTop = index * (207 / 254),
                    posLeft = index * (380 / 254);

                _this.$elem.css({ left: initLeft + posLeft, top: initTop + posTop });
            },
            open: function() {
                var _this = this;
                this.$elem.addClass('open');
                setTimeout(function() {
                    _this.close();
                }, 750)
            },
            close: function() {
                var _this = this;
                _this.$elem.fadeOut(250);
                setTimeout(function() {
                    _this.reset();
                }, 250)
            },
            reset: function() {
                var _this = this;
                this.$elem.removeClass('open');
                _this.$elem.css({ left: initLeft, top: initTop });
            }
        }
    })();
    //博饼动画
    var moonCake = (function() {
        return {
            slider: "",
            //拖拽到最右边的时候
            dropEnd: function() {
                var _this = this;
                Plam.open();
                $.ajax({
                    url: 'http://wnworld.com/conn/bbgj.php',
                    type:"post",
                    data:{},
                    dataType: "json",
                    success: function(data) {
                        Dice.show(data.dices);
                        if($.supportCSS3()){
                            $("#J_bowl-box .dice").eq(0).animationEnd(function() {
                                $(".bb-rock-result").html(data.titles + " +" + data.score + "博饼分!").fadeIn();
                                moonCake.slider.reset();
                            })
                        }else{
                            $(".bb-rock-result").html(data.titles + " +" + data.score + "博饼分!").fadeIn();                            
                            moonCake.slider.reset();
                        }
                    }
                    
                    
                })






            }
        }
    })();


    (function() {
        $(function(){
            var $slideunlockBg = $("#J_slideunlock-bg"),
            Timer;

            var slider = moonCake.slider = new SliderUnlock(".slideunlock-slider", {
                labelTip: "向右拖拽",
                successLabelTip: "博饼开始，祝你好运！"
            }, function() {
                //拖拽成功后执行下面的函数
                moonCake.dropEnd();
            }, function() {
                if (slider.index == 254) {
                    $("#J_slideunlock-lable-tip").text("松开博起来");
                }
                Plam.move(slider.index);
            });
            slider.init();
        })
    })();



})
