//意向登记 弹出框
(function() {
    $(function() {
        var DialogDesigner = $("#J_desiger-dialog-box").dialogs({
            shadeClose: true
        });
        $(document).on("click", "#J_yxdj-btn", function() {
            DialogDesigner.show();
        });

        function validateFunc() {
            $("#J_desiger-form").mvalidateDestroy().mvalidate({
                type: 1,
                onKeyup: true,
                sendForm: false, //验证通过的时候是否自动提交表单
                firstInvalidFocus: false,
                descriptions: {
                    username: {
                        required: '请输入真实姓名！'
                    },
                    phone: {
                        required: '请输入手机号码',
                        pattern: '您输入的手机号码格式不正确'
                    },
                    money: {
                        required: '请输入预算',
                        pattern: '您输入的预算格式不正确'
                    }
                },
                valid: function() {
                    alert("验证通过！后端可以开始处理了")
                }
            });
        }
        validateFunc();
    })
})();


//tab 选项卡
(function() {
    $(function() {
        var itemIndex;

        var item1LoadEnd = false;
        var item1CurrPage = 0;
        var item1PageNum = 8;

        var item2LoadEnd = false;
        var item2CurrPage = 0;
        var item2PageNum = 4;

        var item3LoadEnd = false;


        var item4LoadEnd = false;
        var item4CurrPage = 0;
        var item4PageNum =8;

        var desigerScroll = function() {
            new Swiper('.designer-swiper-container', {
                scrollbarHide: true,
                slidesPerView: 'auto',
                centeredSlides: false,
                spaceBetween: 0,
                grabCursor: true
            });
        }

        var dropload = $('.shop-tab-bd-scroll').dropload({
            scrollArea: window,
            loadDownFn: function(me) {
                // 加载菜单一的数据
                if (itemIndex == '0') {

                    $.ajax({
                        type: 'GET',
                        // data:{page:item1CurrPage,num:item1PageNum},
                        url: './',
                        dataType: 'json',
                        success: function(data) {
                            var data = {
                                "lists": [{
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_3.jpg",
                                        "href": "AnLiXiangQing.html",
                                        "style": "1中式三室80-120m 二厅1"
                                    },
                                    {
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html",
                                        "style": "2中式三室80-120m 二厅"
                                    },
                                    {
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html",
                                        "style": "3中式三室80-120m 二厅"
                                    },
                                    {
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html",
                                        "style": "4中式三室80-120m 二厅"
                                    },
                                    {
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html",
                                        "style": "5中式三室80-120m 二厅"
                                    },
                                    {
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html",
                                        "style": "6中式三室80-120m 二厅"
                                    },
                                    {
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html",
                                        "style": "7中式三室80-120m 二厅"
                                    },
                                    {
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html",
                                        "style": "8中式三室80-120m 二厅"
                                    },
                                ]
                            }
                            item1CurrPage++;
                            var result = "";
                            for (var i = 0; i < data.lists.length; i++) {
                                result += '<li><a href="' + data.lists[i].href + '"><span class="pic"><img src="' + data.lists[i].pic + '" /></span><p class="name">' + data.lists[i].title + '</p><p class="para-type">' + data.lists[i].style + '</p></a></li>'
                            }
                            setTimeout(function() { //测试用 后端可以删除timeout的函数
                                $("#J_case-search-result").append(result);

                                me.resetload();
                                if (!data.lists.length || data.lists.length < item1PageNum) {
                                    item1LoadEnd = true;
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData();
                                }

                            }, 2000)

                        },
                        error: function(xhr, type) {
                            console.dir('Ajax error!');
                            // 即使加载出错，也得重置
                            me.resetload();
                        }
                    });
                    // 加载菜单二的数据
                } else if (itemIndex == '1') {
                    $.ajax({
                        type: 'GET',
                        // data:{page:item1CurrPage,num:item1PageNum},
                        url: './',
                        dataType: 'json',
                        success: function(data) {

                            var data = {
                                "lists": [{
                                        "desiger": "杨艺辉",
                                        "edu": "福建农林大学",
                                        "year": "15年",
                                        "strong": "现代、简约、北欧、新中式、简欧风格",
                                        "case": [{ "pic": "upload/pro_4.jpg", "title": "111简欧风格", "href": "#1" }, { "pic": "upload/pro_4.jpg", "title": "222简欧风格", "href": "#2" }, { "pic": "upload/pro_4.jpg", "title": "333简欧风格", "href": "#3" }, { "pic": "upload/pro_4.jpg", "title": "444简欧风格", "href": "#4" }, { "pic": "upload/pro_4.jpg", "title": "555简欧风格", "href": "#5" }, { "pic": "upload/pro_4.jpg", "title": "666简欧风格", "href": "#6" }]
                                    },
                                    {
                                        "desiger": "杨艺辉22",
                                        "edu": "福建农林大学",
                                        "year": "15年",
                                        "strong": "现代、简约、北欧、新中式、简欧风格",
                                        "case": [{ "pic": "upload/pro_4.jpg", "title": "111简欧风格", "href": "#1" }, { "pic": "upload/pro_4.jpg", "title": "222简欧风格", "href": "#2" }, { "pic": "upload/pro_4.jpg", "title": "333简欧风格", "href": "#3" }, { "pic": "upload/pro_4.jpg", "title": "444简欧风格", "href": "#4" }, { "pic": "upload/pro_4.jpg", "title": "555简欧风格", "href": "#5" }, { "pic": "upload/pro_4.jpg", "title": "666简欧风格", "href": "#6" }]
                                    },
                                    {
                                        "desiger": "杨艺辉333",
                                        "edu": "福建农林大学",
                                        "year": "15年",
                                        "strong": "现代、简约、北欧、新中式、简欧风格",
                                        "case": [{ "pic": "upload/pro_4.jpg", "title": "111简欧风格", "href": "#1" }, { "pic": "upload/pro_4.jpg", "title": "222简欧风格", "href": "#2" }, { "pic": "upload/pro_4.jpg", "title": "333简欧风格", "href": "#3" }, { "pic": "upload/pro_4.jpg", "title": "444简欧风格", "href": "#4" }, { "pic": "upload/pro_4.jpg", "title": "555简欧风格", "href": "#5" }, { "pic": "upload/pro_4.jpg", "title": "666简欧风格", "href": "#6" }]
                                    },
                                    {
                                        "desiger": "杨艺辉444",
                                        "edu": "福建农林大学",
                                        "year": "15年",
                                        "strong": "现代、简约、北欧、新中式、简欧风格",
                                        "case": [{ "pic": "upload/pro_4.jpg", "title": "111简欧风格", "href": "#1" }, { "pic": "upload/pro_4.jpg", "title": "222简欧风格", "href": "#2" }, { "pic": "upload/pro_4.jpg", "title": "333简欧风格", "href": "#3" }, { "pic": "upload/pro_4.jpg", "title": "444简欧风格", "href": "#4" }, { "pic": "upload/pro_4.jpg", "title": "555简欧风格", "href": "#5" }, { "pic": "upload/pro_4.jpg", "title": "666简欧风格", "href": "#6" }]
                                    },
                                ]
                            }
                            item2CurrPage++;
                            var result = "";
                            for (var i = 0; i < data.lists.length; i++) {
                                result += '<div class="list-item"><div class="desc"><p>设 计 师：' + data.lists[i].desiger + '</p><p>教育背景：' + data.lists[i].edu + '</p><p>从业经验：' + data.lists[i].year + '</p><p>擅长领域：' + data.lists[i].strong + '</p></div><div class="caption"><span>代表案列</span></div><div class="swiper-container designer-swiper-container"><div class="swiper-wrapper">';
                                for (var j = 0; j < data.lists[i].case.length; j++) {
                                    result += '<div class="swiper-slide"><a href="' + data.lists[i].case[j].href + '"><span class="pic"><img src="' + data.lists[i].case[j].pic + '" /></span><p class="txt">' + data.lists[i].case[j].title + '</p></a></div>'
                                }
                                result += '</div></div></div>'
                            }
                            console.dir(result)
                            setTimeout(function() { //测试用 后端可以删除timeout的函数
                                $(".designer-list-box").append(result);
                                desigerScroll();
                                me.resetload();
                                if (!data.lists.length || data.lists.length < item2PageNum) {
                                    item2LoadEnd = true;
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData();
                                }

                            }, 2000)

                        },
                        error: function(xhr, type) {
                            console.dir('Ajax error!');
                            // 即使加载出错，也得重置
                            me.resetload();
                        }
                    });

                } else if (itemIndex == '2') {
                    $.ajax({
                        type: 'GET',
                        // data:{page:item1CurrPage,num:item1PageNum},
                        url: './',

                        success: function(data) {
                            var data = '<div class="coms-nodata-tip undis"><span class="pic"></span><p class="txt">暂无优惠活动</p></div><div class="yhhd-detail"><p>阿斯蒂芬进水的发斯蒂芬撒地方阿斯蒂芬阿斯蒂芬进水的发斯蒂芬撒地方阿斯蒂芬阿斯蒂芬进水的发斯蒂芬撒地方阿斯蒂芬阿斯蒂芬进水的发斯蒂芬撒地方阿斯蒂芬 阿斯蒂芬阿斯蒂芬阿斯蒂芬</p><p><img src="upload/pro_3.jpg" /></p></div>';
                            

                            $("#J_shop-yhhd").html(data);
                             me.resetload();
                            item3LoadEnd = true;
                                    // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                            // 无数据
                            me.$domDown.html("");
                        }
                    })
                }else if(itemIndex=='3'){

                    $.ajax({
                        type: 'GET',
                        // data:{page:item1CurrPage,num:item1PageNum},
                        url: './',
                        dataType: 'json',
                        success: function(data) {

                            var data = {
                                "lists": [{
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html"
                                        
                                    },
                                    {
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "AnLiXiangQing.html"
                                        
                                    },{
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_3.jpg",
                                        "href": "AnLiXiangQing.html"
                                        
                                    },{
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_3.jpg",
                                        "href": "AnLiXiangQing.html"
                                        
                                    },{
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_3.jpg",
                                        "href": "AnLiXiangQing.html"
                                        
                                    },{
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_3.jpg",
                                        "href": "AnLiXiangQing.html"
                                        
                                    },{
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_3.jpg",
                                        "href": "AnLiXiangQing.html"
                                        
                                    },{
                                        "title": "Apple 苹果 iPhone 6s",
                                        "pic": "upload/pro_3.jpg",
                                        "href": "AnLiXiangQing.html"
                                        
                                    }
                                ]
                            }
                            item4CurrPage++;
                            var result = "";
                            for (var i = 0; i < data.lists.length; i++) {
                                result += '<li><a href="' + data.lists[i].href + '"><span class="pic"><img src="' + data.lists[i].pic + '" /></span><p class="name">' + data.lists[i].title + '</p></a></li>'
                            }
                            setTimeout(function() { //测试用 后端可以删除timeout的函数
                                $(".vrkf-list-box").append(result);

                                me.resetload();
                                if (!data.lists.length || data.lists.length < item1PageNum) {
                                    item4LoadEnd = true;
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData();
                                }

                            }, 2000)

                        },
                        error: function(xhr, type) {
                            console.dir('Ajax error!');
                            // 即使加载出错，也得重置
                            me.resetload();
                        }
                    });
                }
            }
        });




        $(".shop-tab-hds a[data-toggle='tab']").click(function(event) {
            event.preventDefault();
            itemIndex = $(".shop-tab-hds a[data-toggle='tab']").index(this);
            $(this).tab('show');
            dropload.resetload();
        });


        $('a[href="#J_shop-case"]').on('showntab', function(e) {
            var $this = $(this);
            if (!item1LoadEnd) {
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            } else {
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        });


        $('a[href="#J_shop-sjs"]').on('showntab', function(e) {
            var $this = $(this);
            if (!item2LoadEnd) {
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            } else {
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        });

        $('a[href="#J_shop-yhhd"]').on('showntab', function(e) {
            var $this = $(this);
            if (!item3LoadEnd) {
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            } else {
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        });

         $('a[href="#J_shop-vrkf"]').on('showntab', function(e) {
            var $this = $(this);
            if (!item4LoadEnd) {
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            } else {
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        });

        //开发判断 如果是首页 触发案例列表加载，如果是详情页加载详情数据  
    })
        
})();

