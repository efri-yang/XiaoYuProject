$(function() {
    (function() {
        var itemIndex;

        var item1LoadEnd = false;
        var item1CurrPage = 0;
        var item1PageNum = 8;

        var item2LoadEnd = false;


        var item3LoadEnd = false;
        var item3CurrPage = 0;
        var item3PageNum = 8;


        var dropload = $('.zsj-tab-scrollwrap').dropload({
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
                                        "title": "首开领翔国际阿斯顿发",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "#1",
                                        "present": "￥16.1",
                                        "original": "￥58.6"
                                    },
                                    {
                                        "title": "首开领翔国际阿斯顿发",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "#1",
                                        "present": "￥16.1",
                                        "original": "￥58.6"
                                    },
                                    {
                                        "title": "首开领翔国际阿斯顿发",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "#1",
                                        "present": "￥16.1",
                                        "original": "￥58.6"
                                    },
                                    {
                                        "title": "首开领翔国际阿斯顿发",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "#1",
                                        "present": "￥16.1",
                                        "original": "￥58.6"
                                    },
                                    {
                                        "title": "首开领翔国际阿斯顿发",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "#1",
                                        "present": "￥16.1",
                                        "original": "￥58.6"
                                    },
                                    {
                                        "title": "首开领翔国际阿斯顿发",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "#1",
                                        "present": "￥16.1",
                                        "original": "￥58.6"
                                    },
                                    {
                                        "title": "首开领翔国际阿斯顿发",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "#1",
                                        "present": "￥16.1",
                                        "original": "￥58.6"
                                    },
                                    {
                                        "title": "首开领翔国际阿斯顿发",
                                        "pic": "upload/pro_2.jpg",
                                        "href": "#1",
                                        "present": "￥16.1",
                                        "original": "￥58.6"
                                    }
                                ]
                            }
                            item1CurrPage++;
                            var result = "";
                            for (var i = 0; i < data.lists.length; i++) {
                                result += '<li><a href="'+data.lists[i].href+'"><span class="pic"><img src="'+data.lists[i].pic+'" /></span><p class="para-type clearfix"><span class="present">'+data.lists[i].present+'</span><span class="original">原价'+data.lists[i].original+'</span></p><p class="name">'+data.lists[i].title+'</p></a></li>'
                            }

                            setTimeout(function() { //测试用 后端可以删除timeout的函数
                                $(".zsj-search-result").append(result);

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

                        success: function(data) {
                            var data = '<div class="coms-nodata-tip undis"><span class="pic"></span><p class="txt">暂无优惠活动</p></div><div class="yhhd-detail"><p>阿斯蒂芬进水的发斯蒂芬撒地方阿斯蒂芬阿斯蒂芬进水的发斯蒂芬撒地方阿斯蒂芬阿斯蒂芬进水的发斯蒂芬撒地方阿斯蒂芬阿斯蒂芬进水的发斯蒂芬撒地方阿斯蒂芬 阿斯蒂芬阿斯蒂芬阿斯蒂芬</p><p><img src="upload/pro_3.jpg" /></p></div>';


                            $("#J_zsj-yhhd").html(data);
                            me.resetload();
                            item2LoadEnd = true;
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                            // 无数据
                            me.$domDown.html("");
                        }
                    })
                }else if(itemIndex=='2'){
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
                            item3CurrPage++;
                            var result = "";
                            for (var i = 0; i < data.lists.length; i++) {
                                result += '<li><a href="' + data.lists[i].href + '"><span class="pic"><img src="' + data.lists[i].pic + '" /></span><p class="name">' + data.lists[i].title + '</p></a></li>'
                            }
                            setTimeout(function() { //测试用 后端可以删除timeout的函数
                                $(".vrkf-list-box").append(result);

                                me.resetload();
                                if (!data.lists.length || data.lists.length < item1PageNum) {
                                    item43oadEnd = true;
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


        $(".zsj-tab-hds a[data-toggle='tab']").click(function(event) {
            event.preventDefault();
            itemIndex = $(".zsj-tab-hds a[data-toggle='tab']").index(this);
            $(this).tab('show');
            dropload.resetload();
        });




        $('a[href="#J_zsj-sp"]').on('showntab', function(e) {

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

        $('a[href="#J_zsj-yhhd"]').on('showntab', function(e) {
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

        $('a[href="#J_shop-vrkf"]').on('showntab', function(e) {
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


        $('a[href="#J_zsj-sp"]').trigger("click");

    })()

})