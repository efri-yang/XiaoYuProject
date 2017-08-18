$(function() {
       var formValidate;
        // //生日日期选择控件
        laydate({
            elem: '#birthdaytime',
            event: 'focus',
            start: '1970-01-01'
        });
       (function($) {
        $.mvalidateExtend({
            phone: {
                required: true,
                pattern: /^0?1[3|4|5|8][0-9]\d{8}$/,
                each: function() {

                },
                descriptions: {
                    required: '请输入手机号码',
                    pattern: '您输入的手机号码格式不正确'
                }
            }
        });

        formValidate=function() {
            $("#J_form").mvalidateDestroy().mvalidate({
                type: 1,
                onKeyup: true,
                sendForm: true,
                firstInvalidFocus: true,
                descriptions: {
                    imgs1: {
                        required: '请输上传照片'
                    },
                    sex: {
                        required: '请选择性别'
                    },
                    birthday: {
                        required: '请填写出生日期'
                    },
                    selfgj: {
                        required: '请填写完整籍贯'
                    },
                    addressdetail:{
                         required: '请填写完整的地址'
                    },
                    phone: {
                        required: '请输入手机号码',
                        pattern: '您输入的手机号码格式不正确'
                    },
                    wechat: {
                        required: '请输入微信号'
                    },
                    qq: {
                        required: '请输入QQ号码',
                        pattern: '您输入的QQ号码格式不正确'
                    },
                    occupation:{
                        required: '请选择职业'
                    },

                    edu: {
                        required: '请选择学历'
                    },
                    car: {
                        required: '请选择是否有车'
                    },
                    interest:{
                        required: '请选择最感兴趣爆料'
                    },
                    askreason:{
                        required: '请填写申请理由'
                    },
                    condition:{
                        required: '请选择你符合的申请条件'
                    },
                    livearea:{
                         required: '请选择你现在所居住的地址'
                    },
                    protocol:{
                         required: '请认真阅读并选择遵守协议'
                    }
                   
                }
            })
        }
        formValidate();
    })(jQuery);

    (function($) {
        $(document).on("click", '[data-roler="placeholdertip"]', function(event) {
            var $this = $(this);
            $this.hide().parent().find('[data-roler="placeholdeript"]').focus();

        });
        $(document).on("click", '[data-roler="placeholdeript"]', function(event) {
            var $this = $(this);
            $this.parent().find('[data-roler="placeholdertip"]').hide();
        });
        $(document).on("blur", '[data-roler="placeholdeript"]', function(event) {
            var $this = $(this);
            if ($.trim($this.val()) === "") {
                $this.parent().find('[data-roler="placeholdertip"]').show();
            }
        })
    })(jQuery);
    //上传图片
    (function($) {
        //上传照片
        $(".imagePreview").on("click", ".thumb-close", function() {

            var parent = $(this).parent();
            
            parent.html("");
            parent.hide().siblings().css({
                opacity: 1,
                display: "block"
            });
            $("#J_uploadpic").val("").css({opacity: 0,display: "block"});

        });

        $(".up-file").on("change", "input", function(e) {
            loadImageFile($(this).get(0), $(this).siblings(".imagePreview").get(0))();
        })

        function loadImageFile(img, box) {
            if (window.FileReader) {
                var oFReader = new window.FileReader(),
                    rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

                oFReader.onload = function(oFREvent) {
                    showImg(oFREvent.target.result);
                };
                return function() {
                    var aFiles = img.files;
                    if (aFiles.length === 0) {
                        return;
                    }
                    if (!rFilter.test(aFiles[0].type)) {
                        return;
                    }
                    oFReader.readAsDataURL(aFiles[0]);
                }
            }
            if (navigator.appName === "Microsoft Internet Explorer") {
                return function() {
                    showImg(img.value, img);
                }
            }

            function showImg(src, img) {
                media = src;
                var closeImg = document.createElement("span");
                closeImg.className = "thumb-close iconfont inner";
                closeImg.innerHTML = "x";
                closeImg.style.margin = "-4px 0 0 70px";
                box.appendChild(closeImg);

                if (arguments.length < 2) {
                    var oPreviewImg = new Image();
                    oPreviewImg.className = "thumb-pic";
                    oPreviewImg.src = src;
                    box.appendChild(oPreviewImg);
                } else {
                    $(img).siblings(".imagePreview").show()[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img.value;
                }
                $(box).show().siblings().css({
                    opacity: 0,
                    display: "none"
                });
            }
        }
    })(jQuery);

    //省市区联动菜单
    (function($) {
        $('#distpicker1').distpicker({
            autoselect: 3,
            province: '福建省',
            city: '厦门市',
            district: '思明区'
        });
        $('#streetpicker1').streetpicker({
            autoselect:2,
        });
    })(jQuery);

    //

   

 

})
