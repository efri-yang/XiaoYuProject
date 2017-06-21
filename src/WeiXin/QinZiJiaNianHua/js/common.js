


// ;
// (function($, window, document, undefined) {
//     var Dialog = (function() {
//         function Dialog(element, options) {
//             this.$element = $(element);
//             this.opts = $.extend({}, $.fn.dialog.defaults, options);
//         }
//         Dialog.prototype = {
//             test: 100,
//             _init: function() {
//                 var self = this;
//                 self._setPos();
//                 this.$element.on("touchmove", function(event) {
//                     event.stopPropagation();
//                     return false;
//                 });
//                 $(window).on("resize", function() {
//                     self.pos = self._getPos();
//                 });
//                 if (!self.opts.close) {
//                     self.$element.find(".close").remove();
//                 }
//             },
//             _setPos: function() {
//                 var self = this;
//                 self.pos = self._getPos();
//                 self.$element.css({ left: self.pos.left, top: self.pos.nTop });
//                 self.$element.find(".line").css({ top: -self.pos.top, height: self.pos.top });
//                 self.$element.find("[data-roler='close']").on("click", function(event) {
//                     event.preventDefault();
//                     self.hide.call(self)
//                 })
//             },
//             _getPos: function() {
//                 var self = this;
//                 var pos = {},
//                     selfW = self.$element.width(),
//                     selfH = self.$element.height(),
//                     winW = $(window).width(),
//                     winH = $(window).height();
//                 pos.top = (winH - selfH) > 0 ? (winH - selfH) / 2 : 0;
//                 pos.left = (winW - selfW) > 0 ? (winW - selfW) / 2 : 0;
//                 pos.nTop = -(selfH + pos.top + 10);
//                 return pos;
//             },
//             _shadowShow: function() {
//                 var self = this;
//                 self.$shadow = $('<div class="ct-dialog-shadow"></div>');
//                 self.$shadow.appendTo($("body"));
//                 self.$shadow.animate({ opacity: 1 }, 600, "ease-out")
//                 if (!!self.opts.shadeClose) {
//                     self.$shadow.on("click", function() {
//                         self.hide.call(self)
//                     }).on("touchstart touchmove", function(event) {


//                         self.hide.call(self);
//                         event.stopPropagation();
//                         return false;
//                     });
//                 } else {
//                     self.$shadow.on("touchstart touchmove", function() {
//                         event.stopPropagation();
//                         return false;
//                     })
//                 }
//             },
//             _shadowHide: function() {
//                 var self = this;
//                 self.$shadow.animate({ opacity: 0 },function() {
//                     self.$shadow.remove();
//                 });

//             },
//             _mainShow: function(fn) {
//                 var self = this;
//                 !!self.opts.beforeShow && self.opts.beforeShow();
//                 self.$element.animate({ top: self.pos.top }, 250, "ease-out", function() {
//                     !!self.opts.afterShow && self.opts.afterShow();
//                     if (!!fn) {
//                         setTimeout(fn, 0)
//                     }
//                 });
//             },
//             _mainHide: function(fn) {
//                 var self = this;
//                 !!self.opts.beforeHide && self.opts.beforeHide();
//                 self.$element.animate({ top: self.pos.nTop }, 250, "ease-out", function() {
//                     !!self.opts.afterHide && self.opts.afterHide();
//                     if (!!fn) {
//                         setTimeout(fn, 0)
//                     }
//                 });
//             },
//             show: function(fn) {
//                 var self = this;
//                 if (self.opts.shadow) {
//                     self._shadowShow();
//                 }
//                 self._mainShow(fn);
//             },
//             hide: function(fn) {
//                 var self = this;
//                 if (self.opts.shadow) {
//                     self._shadowHide();
//                 }
//                 self._mainHide(fn);

//             }
//         }
//         return Dialog;
//     })();

//     $.fn.dialog = function(options) {
//         var self = this;
//         return this.each(function() {
//             var $this = $(this),
//                 instance = $this.data("dialog");
//             if (!instance) {
//                 var instance = new Dialog(this, options);
//                 instance._init();
//                 $this.data('dialog', instance);
//             }
//             self.hide = function(fn) {
//                 instance.hide(fn);

//             };

//             self.show = function(fn) {
//                 instance.show(fn);

//             };
//         })
//     };

//     $.fn.dialog.defaults = {
//         shadow: true,
//         close: true,
//         shadeClose: true,
//         beforeShow: function() {

//         },
//         afterShow: function() {

//         },
//         beforeHide: function() {

//         },
//         afterHide: function() {

//         }
//     }
// })(window.jQuery || window.Zepto, window, document);


;(function($, window, document, undefined) {
    var Dialog = (function() {
        function Dialog(element, options) {
            this.$element = $(element);
            this.opts = $.extend({}, $.fn.dialog.defaults, options);
        }
        Dialog.prototype = {
            test: 100,
            _init: function() {
               
            },
            _shadowShow: function() {
                var _this=this;
                this.$shadow = $('<div class="dialog-qz-shadow"></div>');
                this.$shadow.appendTo($("body"));
                if(!!this.opts.shadeClose){
                    this.$shadow.on("click",function(){
                        _this.$shadow.removeClass('in').addClass('out');
                        _this.$shadow.transitionEnd(function(){
                            _this.$shadow.remove();
                        })
                    })
                }

            },
            _shadowHide: function() {
                

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

    $.fn.dialogs = function(options) {
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
        shade: true,
        shadeClose: true,
        beforeShow: function(){},
        afterShow: function(){},
        beforeHide: function(){},
        afterHide: function() {}
    }
})(window.jQuery || window.Zepto, window, document);








$(function() {

    $(window).on("load", function() {
        var homeIscroll = new IScroll("#J_iscroll-full-container", {
            scrollbars: true,
            mouseWheel: true
        });
    });
});


//嘉年华页面
(function() {
    $(function() {
    	
        $("#J_jnh-form").mvalidate({
            type: 1,
            onKeyup: true,
            sendForm:true,//验证通过后是否提交表单
            firstInvalidFocus:false,
            descriptions: {
                username: {
                    required: '请输入姓名',
                },
                phone: {
                    required: '请输入手机号码',
                    pattern: '您输入的手机号码格式不正确'
                },
                wechat: {
                    required: '请输入微信号'
                },
                age: {
                    required: '请输入参与活动宝宝的年龄',
                    pattern: '您输入的年龄格式不正确'
                },
                times:{
                    required: '请选择参与的时间'
                }
            },
            valid:function(e){
            	e.preventDefault();
            }
        })
    })
})();
