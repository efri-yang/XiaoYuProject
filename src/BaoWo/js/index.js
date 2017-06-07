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
                $prevBtn.css("zIndex", opts.zIndex + 10).addClass("banner-ui-prev");
                $nextBtn.css("zIndex", opts.zIndex + 10).addClass("banner-ui-next");

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
        width: 980, //宽 (如果100%的时候请传入字符串)
        height: 400, //高
        auto: false, //是否能自动滚
        effect: "fade", //效果
        Pause: 3000, //停顿时间-两个动画滚动间隔的时间
        animTime: 350,
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
    })
})




$(function() {
    //省 市 经销商选择
    (function() {
        var $provinceDropDown = $("#J_province-dropdown"),
            $provinceSelItem = $provinceDropDown.children('.sel-item'),
            $provinceSelList = $provinceDropDown.children('.sel-list'),
            $provinceTxt = $provinceSelItem.find(".txt"),


            $cityDropDown = $("#J_city-dropdown"),
            $citySelItem = $cityDropDown.children('.sel-item'),
            $citySelList = $cityDropDown.children('.sel-list'),
            $cityTxt = $citySelItem.find(".txt"),



            $dealerDropDown = $("#J_dealer-dropdown"),
            $dealerSelItem = $dealerDropDown.children('.sel-item'),
            $dealerSelList = $dealerDropDown.children('.sel-list'),
            $dealerTxt = $dealerSelItem.find(".txt");


        var provinceStr = "";
        var init = function() {
            $.each(regionDefault[100000], function(index, val) {
                provinceStr += "<li data-val='" + val + "' data-code='" + index + "'>" + val + "</li>"
            });
            $provinceSelList.html(provinceStr);

            $.each([$provinceDropDown, $cityDropDown, $dealerDropDown], function(index, item) {
                item.on("mouseout", function(event) {
                    var $this = $(this);
                    var relateElem = event.relatedTarget;
                    if ($(relateElem).closest($this).length > 0) {
                        return;
                    } else {
                        $(this).removeClass("active");
                    }


                });
            });
            $.each([$provinceSelItem, $citySelItem, $dealerSelItem], function(index, item) {
                item.on("click", function() {
                    var $parent = $(this).parent();
                    if (!$parent.hasClass('active') && $parent.find(".sel-list").children().length) {
                        $parent.addClass('active');
                    }
                })
            });
            $(document).on("click", "#J_province-dropdown .sel-list > li", function(event) {
                    var $elem = $(this);
               
                    var val = $elem.data("val"),
                        oldCode = $elem.data("oldCode"),
                        code = $elem.data("code");
                    $provinceDropDown.removeClass("active");
                    if (oldCode !== code) {
                        $provinceTxt.html(val);
                        $elem.data("oldCode", code);
                        handleProvince(code, val);
                        initCity(code)
                    }
                
            });
            $(document).on("click", "#J_city-dropdown .sel-list > li", function(event) {
                var $elem = $(event.target);
                var val = $elem.data("val"),
                    oldCode = $elem.data("oldCode"),
                    code = $elem.data("code");
                    $cityDropDown.removeClass("active");
                    $cityTxt.html(val);
                    $elem.data("oldCode", code);
                    handleCity(code, val);
                    initDealer(code) 
            });

            $(document).on("click", "#J_dealer-dropdown .sel-list > li", function(event) {
                var $elem = $(event.target);
                var val = $elem.data("val"),
                    oldCode = $elem.data("oldCode"),
                    code = $elem.data("code");
                if (oldCode != code) {
                    $dealerTxt.html(val);
                    $elem.data("oldCode", code);
                    $dealerDropDown.removeClass("active");
                    handleDealer(code, val);
                }
            })

            function initCity(code) {
                $cityTxt.html("请选择城市");
                var str = "";
                $.each(regionDefault[code], function(index, val) {
                    str += "<li data-val='" + val + "' data-code='" + index + "'>" + val + "</li>"
                });
                $citySelList.html(str);
            }

            function initDealer(code) {
                $dealerTxt.html("请选择经销商");
                var str = "";
                $.each(regionDefault[code], function(index, val) {
                    str += "<li data-val='" + val + "' data-code='" + index + "'>" + val + "</li>"
                });
                $dealerSelList.html(str);

            }
        }


        /**
         *开发修改这里
         */
        var regionDefault = {
            100000: {
                350000: '福建省'
            },
            350000: {
                350100: '福州市',
                350200: '厦门市',
                350500: '泉州市'
            },
            350100: {
                350101: "福州三丰宝沃汽车销售服务有限公司"
            },
            350200: {
                350201: "厦门雪沃汽车销售服务有限公司"
            },
            350500: {
                350501: '福建万博新能源汽车销售服务有限公司'
            }

        }

        function handleProvince(id, val) {
            var id = !!id ? id : "";
            $("input[name='province']").attr({ "val": val, "data-id": id });
        }

        function handleCity(id, val) {
            var id = !!id ? id : "";
            $("input[name='city']").attr({ "val": val, "data-id": id });
        }

        function handleDealer(id, val) {
            var id = id ? id : "";
            $("input[name='dealer']").attr({ "val": val, "data-id": id });
        }

        init();
    })();

    //表单验证
    (function(){
       
        function validate($form){
             var flag=true;
             if(!$.trim($form.find("input[name='truename']").val())){
                layer.msg('请输入姓名',{time:1500});
                flag=false;
             }else if(!$.trim($form.find("input[name='sex']").val())){
                layer.msg('请选择性别',{time:1500});
                flag=false;
             }else if(!$.trim($form.find("input[name='phone']").val())){
                layer.msg('请输入手机号码',{time:1500})
                flag=false;
             }else if(!new RegExp(/^0?1[3|4|5|8][0-9]\d{8}$/).test($form.find("input[name='phone']").val())){
                layer.msg('请输入手机号码格式不正确',{time:1500})
                flag=false;
             }else if(!$.trim($form.find("input[name='province']").data("id"))){
                layer.msg('请选择省份',{time:1500})
                flag=false;
             }else if(!$form.find("input[name='city']").data("id")){
                layer.msg('请选择城市',{time:1500})
                flag=false;
             }else if(!$.trim($form.find("input[name='dealer']").data("id"))){
                 layer.msg('请选择经销商',{time:1500})
                flag=false;
             }else if(!$form.find("input[name='condition']").is(':checked')){
                layer.msg('请详细阅读隐私条款并打勾',{time:1500})
                flag=false;
             }

             return flag;
        }
        $("#J_iptsub").on("click",function(){
            var $form=$("#form1");
            var isValidate=validate($form);
            if(!isValidate){
                return false;
            }
        })
    })()
});
