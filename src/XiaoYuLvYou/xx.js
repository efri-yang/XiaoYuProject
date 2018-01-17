(function($) {
    $(function() {
        var currIndex = 0,
            tab1LoadEnd = false,
            tab2LoadEnd = false,
            tab3LoadEnd = false;
        var $tabHd = $("#J_pwlist-tab-hd a");
        var dropload;

        $tabHd.click(function(e) {
            e.preventDefault();
            $(this).tab('show');
            currIndex = $tabHd.index(this);

            if (currIndex == 0) {
                if (!tab1LoadEnd) {
                    dropload.unlock();
                    dropload.noData(false);
                } else {
                    // 锁定
                    dropload.lock('down');
                    dropload.noData();
                }
            } else if (currIndex == 1) {
                if (!tab2LoadEnd) {
                    dropload.unlock();
                    dropload.noData(false);
                } else {
                    // 锁定
                    dropload.lock('down');
                    dropload.noData();
                }
            } else if (currIndex == 2) {
                if (!tab3LoadEnd) {
                    dropload.unlock();
                    dropload.noData(false);
                } else {
                    // 锁定
                    dropload.lock('down');
                    dropload.noData();
                }
            }
             dropload.resetload();
        });

       



        $(window).on("load", function() {
            // 页数
            var pageTab1 = 0,
                pageTab2 = 0,
                pageTab3 = 0;

            var tab1Loading=false,
            	tab2Loading=false,
            	tab3Loading=false;
            // 每页展示10个
            var size = 10;

            function renderHtml(data) {
                var str = "";
                str += '<li>' +
                    '<a href="' + data.url + '">' +
                    '<div class="pic"><img src="images/common/blank.gif" data-echo="' + data.img + '" /></div>' +
                    '<p class="tit">' + data.title + '</p>' +
                    '<div class="clearfix">' +
                    '<div class="tag">';
                for (i = 0; i < data.tags.length; i++) {
                    str += '<span>' + data.tags[i] + '</span>'
                }
                str += '</div>' +
                    '<span class="price"><b>￥</b>5600<b>起</b></span>' +
                    '</div>' +
                    '</a>' +
                    '</li>';
                return str;
            }

            // dropload
            dropload=$('#J_dropload-container').dropload({
                scrollArea: window,
                loadDownFn: function(me) {
                    if (currIndex == 0 && !tab1Loading) {
                        tab1Loading=true;
                        pageTab1++;
                        var result = '';
                        $.ajax({
                            type: 'GET',
                            url: 'http://wnworld.com/api/list01.php?page=' + pageTab1 + '&size=' + size,
                            // url: './php/list01.json?page=' + page + '&size=' + size,
                            dataType: 'json',
                            success: function(data) {
                                var arrLen = data.list.length;
                                if (arrLen > 0) {
                                    for (var i = 0; i < arrLen; i++) {
                                        result += renderHtml(data.list[i]);
                                    }

                                    // 如果没有数据
                                }
                                if (arrLen < size) {
                                	tab1LoadEnd=true;
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData();
                                    
                                }


                                // 插入数据到页面，放到最后面
                                $('#J_jdmp ul').append(result);
                                // 每次数据插入，必须重置
                                me.resetload();

                                echo.init({
                                    offset: 100,
                                    throttle: 250,
                                    unload: false
                                });
                                tab1Loading=false;

                            },
                            error: function(xhr, type) {
                            	!!(pageTab1 > 0) && pageTab1--;
                                // 即使加载出错，也得重置
                                me.resetload();
                            }
                        });

                    } else if (currIndex == 1 && !tab2Loading) {
                    	tab2Loading=true;
                    	pageTab2++;
                        var result = '';
                        $.ajax({
                            type: 'GET',
                            url: 'http://wnworld.com/api/list03.php?page=' + pageTab2 + '&size=' + size,
                            // url: './php/list01.json?page=' + page + '&size=' + size,
                            dataType: 'json',
                            success: function(data) {
                                var arrLen = data.list.length;
                                if (arrLen > 0) {
                                    for (var i = 0; i < arrLen; i++) {
                                        result += renderHtml(data.list[i]);
                                    }

                                    // 如果没有数据
                                }
                                if (arrLen < size) {
                                	tab2LoadEnd=true;
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData();
                                    
                                }


                                // 插入数据到页面，放到最后面
                                $('#J_tslx ul').append(result);
                                // 每次数据插入，必须重置
                                me.resetload();

                                echo.init({
                                    offset: 100,
                                    throttle: 250,
                                    unload: false
                                });
                                tab2Loading=false;

                            },
                            error: function(xhr, type) {
                            	!!(pageTab2 > 0) && pageTab2--;
                                // 即使加载出错，也得重置
                                me.resetload();
                            }
                        });

                    } else if (currIndex == 2 && !tab3Loading) {
                    	tab3Loading=true;
                    	pageTab2++;
                        var result = '';
                        $.ajax({
                            type: 'GET',
                            url: 'http://wnworld.com/api/list01.php?page=' + pageTab2 + '&size=' + size,
                            // url: './php/list01.json?page=' + page + '&size=' + size,
                            dataType: 'json',
                            success: function(data) {
                                var arrLen = data.list.length;
                                if (arrLen > 0) {
                                    for (var i = 0; i < arrLen; i++) {
                                        result += renderHtml(data.list[i]);
                                    }

                                    // 如果没有数据
                                }
                                if (arrLen < size) {
                                	tab3LoadEnd=true;
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData();
                                    
                                }


                                // 插入数据到页面，放到最后面
                                $('#J_jdms ul').append(result);
                                // 每次数据插入，必须重置
                                me.resetload();

                                echo.init({
                                    offset: 100,
                                    throttle: 250,
                                    unload: false
                                });
                                tab3Loading=false;

                            },
                            error: function(xhr, type) {
                            	!!(pageTab3 > 0) && pageTab3--;
                                // 即使加载出错，也得重置
                                me.resetload();
                            }
                        });
                    }


                }
            });
        })





    })
})(Zepto)