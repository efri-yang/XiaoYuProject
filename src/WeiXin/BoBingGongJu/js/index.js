;
(function($, window, document, undefined) {
    var Dialog = (function() {
        function Dialog(element, options) {
            this.$element = $(element);
            this.opts = $.extend({}, $.fn.dialog.defaults, options);
        }
        Dialog.prototype = {
            test: 100,
            _init: function() {
                var self = this;
                self._setPos();
                this.$element.on("touchmove", function(event) {
                    event.stopPropagation();
                    return false;
                });
                $(window).on("resize", function() {
                    self.pos = self._getPos();
                });
                if (!self.opts.close) {
                    self.$element.find(".close").remove();
                }
            },
            _setPos: function() {
                var self = this;
                self.pos = self._getPos();
                self.$element.css({ left: self.pos.left, top: self.pos.nTop });
                self.$element.find(".line").css({ top: -self.pos.top, height: self.pos.top });
                self.$element.find("[data-roler='close']").on("click", function(event) {
                    event.preventDefault();
                    self.hide.call(self)
                })
            },
            _getPos: function() {
                var self = this;
                var pos = {},
                    selfW = self.$element.width(),
                    selfH = self.$element.height(),
                    winW = $(window).width(),
                    winH = $(window).height();
                pos.top = (winH - selfH) > 0 ? (winH - selfH) / 2 : 0;
                pos.left = (winW - selfW) > 0 ? (winW - selfW) / 2 : 0;
                pos.nTop = -(selfH + pos.top + 10);
                return pos;
            },
            _shadowShow: function() {
                var self = this;
                self.$shadow = $('<div class="ct-dialog-shadow"></div>');
                self.$shadow.appendTo($("body"));
                self.$shadow.animate({ opacity: 1 }, 600, "ease-out")
                if (!!self.opts.shadeClose) {
                    self.$shadow.on("click", function() {
                        self.hide.call(self)
                    }).on("touchstart touchmove", function(event) {


                        self.hide.call(self);
                        event.stopPropagation();
                        return false;
                    });
                } else {
                    self.$shadow.on("touchstart touchmove", function() {
                        event.stopPropagation();
                        return false;
                    })
                }
            },
            _shadowHide: function() {
                var self = this;
                self.$shadow.animate({ opacity: 0 },function() {
                    self.$shadow.remove();
                });

            },
            _mainShow: function(fn) {
                var self = this;
                !!self.opts.beforeShow && self.opts.beforeShow();
                self.$element.animate({ top: self.pos.top }, 250, "ease-out", function() {
                    !!self.opts.afterShow && self.opts.afterShow();
                    if (!!fn) {
                        setTimeout(fn, 0)
                    }
                });
            },
            _mainHide: function(fn) {
                var self = this;
                !!self.opts.beforeHide && self.opts.beforeHide();
                self.$element.animate({ top: self.pos.nTop }, 250, "ease-out", function() {
                    !!self.opts.afterHide && self.opts.afterHide();
                    if (!!fn) {
                        setTimeout(fn, 0)
                    }
                });
            },
            show: function(fn) {
                var self = this;
                if (self.opts.shadow) {
                    self._shadowShow();
                }
                self._mainShow(fn);
            },
            hide: function(fn) {
                var self = this;
                if (self.opts.shadow) {
                    self._shadowHide();
                }
                self._mainHide(fn);

            }
        }
        return Dialog;
    })();

    $.fn.dialog = function(options) {
        var self = this;
        return this.each(function() {
            var $this = $(this),
                instance = $this.data("dialog");
            if (!instance) {
                var instance = new Dialog(this, options);
                instance._init();
                $this.data('dialog', instance);
            }
            self.hide = function(fn) {
                instance.hide(fn);

            };

            self.show = function(fn) {
                instance.show(fn);

            };
        })
    };

    $.fn.dialog.defaults = {
        shadow: true,
        close: true,
        shadeClose: true,
        beforeShow: function() {

        },
        afterShow: function() {

        },
        beforeHide: function() {

        },
        afterHide: function() {

        }
    }
})(window.jQuery || window.Zepto, window, document);





$(function() {
    var myScroll;

    //返回顶部
    (function() {
        function throttle(method, delay, duration) {
            var timer = null,
                begin = new Date();
            return function() {
                var context = this,
                    args = arguments,
                    current = new Date();;
                clearTimeout(timer);
                if (current - begin >= duration) {
                    method.apply(context, args);
                    begin = current;
                } else {
                    timer = setTimeout(function() {
                        method.apply(context, args);
                    }, delay);
                }
            }
        }
        var $goTop = $("#J_gotop");

        function scrollHand() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 150) {
                $goTop.css({ display: "block" });
            } else {
                $goTop.css({ display: "none" });
            }
        }
        $goTop.on("click", function(event) {
            event.preventDefault();
            $(window).scrollTop(0);
        })
        $(window).on("scroll", throttle(scrollHand, 150, 0))
    })();
    //联系我们弹出框
    (function() {
        var DiaContact = $("#J_dialog-contact").dialog();
        $("#J_contactus").on("click", function() {
            DiaContact.show();
        });
        $("#J_forms").mvalidate({
            type: 1,
            sendForm: false,
            firstInvalidFocus: false,
            descriptions: {
                username: {
                    required: '请输入姓名！'
                },
                phone: {
                    required: '请输入手机号码',
                    pattern: '您输入的手机号码格式不正确'
                }
            },
            valid: function() {
                //开发请写这里,服务端请返回 true表示成功 返回false 表示失败
                $.ajax({
                    url: "http://wnworld.com/conn/test.php",
                    data: $("#J_orderform").serialize(),
                    type: "post",
                    beforeSend: function() {
                        layer.open({ type: 2, shade: false }); //显示加载层
                    },
                    success: function(data) {
                        layer.closeAll();
                        if (!!data) {
                            DiaContact.hide();
                            layer.open({
                                content: '提交成功！',
                                skin: 'msg',
                                shade: false,
                                time: 2
                            });
                        } else {
                            layer.open({
                                content: '亲,路途太堵,请您重新提交！',
                                skin: 'msg',
                                shade: false,
                                time: 2
                            });
                        }
                    }
                })
            }
        });
    })();


    //博饼记录查看更多 
    (function() {

        if ($("#J_iscroll-wrap").length) {
            // $(window).on("load", function() {
            //     myScroll = new IScroll('#J_iscroll-wrap');
            // });
            $("#J_iscroll-more").on("click", function(event) {
                event.preventDefault();
                //测试
                handleRecord();
            });

            function handleRecord() {
                var strArr = [];
                for (var i = 0; i < 10; i++) {
                    strArr.push('<li><span class="txt">' + i + '</span><b class="time">2017-06-01 12:03:34</b></li>')
                }
                $("#J_recordlist").append(strArr.join(""));
                // setTimeout(function() {
                //     myScroll.refresh();
                // }, 0);
            }
        }
    })();


    //开桌成功
    (function() {
        var DiaKZ = $("#J_dialog-kz-suceess").dialog();
        $("#J_btn-kz").on("click", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://wnworld.com/conn/test.php",
                data: "",
                type: "post",
                beforeSend: function() {
                    layer.open({ type: 2, shade: false }); //显示加载层
                },
                success: function(data) {
                    layer.closeAll();
                    if (!!data) {
                        DiaKZ.show();
                    } else {
                        layer.open({
                            content: '亲,路途太堵,请您重新提交！',
                            skin: 'msg',
                            shade: false,
                            time: 2
                        });
                    }
                }
            })
        });
    })();


    //帮他博饼和我要开桌
    (function() {
        var DiaHelpOpen = $("#J_dialog-helpopen").dialog();

        //我要开桌
        $(document).on("click", '#J_btnopenkz', function(event) {
            event.preventDefault();
            DiaHelpOpen.show();
        })


        //帮他博饼
        $(document).on("click", '#J_btnhelpbb', function(event) {
            event.preventDefault();

            //开发请修改这里(下面的测试代码可删除)
            if (Math.round(Math.random(0, 2))) {
                handle();
            } else {
                DiaHelpOpen.show();
            }
        });

        function handle() {
            var DiaDice = $("#J_dialog-bowdice").dialog({shadeClose:false});
                $.ajax({
                    url: "http://wnworld.com/conn/price.php",
                    data: "",
                    type: "post",
                    dataType: "json",
                    beforeSend: function() {
                        layer.open({ type: 2, shade: false }); //显示加载层
                    },
                    success: function(data) {
                        //json  {num: [6, 2, 3, 5, 2, 3], score: 36} 
                        layer.closeAll();
                        if (!!data) {
                            DiaDice.show(function() {
                                setTimeout(function() {
                                    var arr = [],
                                        diceClassName, imgSrc;
                                    for (var i = 0; i < data.num.length; i++) {
                                        diceClassName = "dice active dice" + (i + 1);
                                        imgSrc = "./images/dice/dice" + data.num[i] + ".png"
                                        arr.push('<em class="' + diceClassName + '"><img src="' + imgSrc + '" /></em>')
                                    }
                                    $("#J_dicebox").html(arr.join(""));
                                    $(document).one("animationend", function() {
                                        setTimeout(function() {
                                            layer.open({
                                                style: 'border:none; background-color:rgba(0,0,0,0.6); color:#fff;',
                                                content: '恭喜您博饼成功，为她添加 +50分',
                                                shade: false,
                                                time: 2,
                                                end: function() {
                                                    DiaDice.hide();
                                                }
                                            });
                                        },250)
                                    })
                                }, 250)
                            });

                        } else {
                            layer.open({
                                content: '亲,路途太堵,请您重新提交！',
                                skin: 'msg',
                                shade: false,
                                time: 2
                            });
                        }
                    }
                })
        }
    })();


    //兑奖码验证
    (function() {
        $("#J_cash-form").mvalidate({
            type: 1,
            sendForm: true,
            firstInvalidFocus: false,
            descriptions: {
                username: {
                    required: '请输入姓名！'
                },
                phone: {
                    required: '请输入手机号码',
                    pattern: '您输入的手机号码格式不正确'
                }
            },
            valid: function() {

                //开发请写这里,服务端请返回 true表示成功 返回false 表示失败
                $.ajax({
                    url: "http://wnworld.com/conn/test.php",
                    data: $("#J_cash-form").serialize(),
                    type: "post",
                    beforeSend: function() {
                        layer.open({ type: 2, shade: false }); //显示加载层
                    },
                    success: function(data) {
                        layer.closeAll();
                        if (!!data) {
                            DiaContact.hide();
                            layer.open({
                                content: '提交成功！',
                                skin: 'msg',
                                shade: false,
                                time: 2
                            });
                        } else {
                            layer.open({
                                content: '亲,路途太堵,请您重新提交！',
                                skin: 'msg',
                                shade: false,
                                time: 2
                            });
                        }
                    }
                })
            }
        });

    })();


})
