 $(function() {
        $('.slide-1-list').bxSlider({
            mode: 'horizontal',
            controls: true,
            infiniteLoop: true,
            pager: false,
            slideMargin: 18,
            slideWidth: 1060,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            nextText: "",
            prevText: "",
            prevSelector: $("#J_slide-prev-1"),
            nextSelector: $("#J_slide-next-1"),
        });


        $('.slide-2-list').bxSlider({
            mode: 'horizontal',
            controls: true,
            infiniteLoop: true,
            pager: false,
            slideMargin: 18,
            slideWidth: 1060,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            nextText: "",
            prevText: ""
        });





        $('.mod-2-tab a').click(function(e) {
            e.preventDefault()
            $(this).tab('show');

        });



        $("#J_lqwy-btn-1,#J_lqwy-btn-2").on("click",function(event){
            event.preventDefault();
            layer.open({
              type: 1,
              shadeClose: true,
              title: false, //不显示标题
              area:"450px",
              content: $('#J_dialog-lqwj'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
              cancel: function(){
                // layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {time: 5000, icon:6});
              }
            });
        });

        $("#J_lqyhj-btn").on("click",function(event){
            event.preventDefault();
            layer.open({
              type: 1,
              shadeClose: true,
              title: false, //不显示标题
              area:"450px",
              content: $('#J_dialog-lqyhj'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
              cancel: function(){
                // layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {time: 5000, icon:6});
              }
            });
        });


        $("#J_aboutus").on("click",function(event){
            event.preventDefault();
            layer.open({
              type: 1,
              shadeClose: true,
              title: false, //不显示标题
              area:"450px",
              content: $('#J_dialog-aboutus'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
              cancel: function(){
                // layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {time: 5000, icon:6});
              }
            });
        });


        $(".mod-3 .mfsw-btn").on("click",function(event){
             event.preventDefault();
             layer.open({
              type: 1,
              shadeClose: true,
              title: false, //不显示标题
              area:"450px",
              content: $('#J_dialog-yhj'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
              cancel: function(){
                  
              }
            });
        });

        //预约成功以后弹出框，开发根据需要嵌入
        layer.open({
              type: 1,
              shadeClose: true,
              title: false, //不显示标题
              area:"450px",
              content: $('#J_dialog-result'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
              cancel: function(){
                  
              }
         });


       $("#J_side-nav-1").on("click",function(event){
            event.preventDefault();
            $("html,body").animate({"scrollTop":$(".mod-1").offset().top});
       });

       $("#J_side-nav-2").on("click",function(event){
            event.preventDefault();
            $("html,body").animate({"scrollTop":$(".mod-2").offset().top});
       });

       $("#J_side-nav-3").on("click",function(event){
            event.preventDefault();
            $("html,body").animate({"scrollTop":$(".mod-3").offset().top});
       });
       $("#J_side-nav-4").on("click",function(event){
            event.preventDefault();
            $("html,body").animate({"scrollTop":$(".mod-4").offset().top});
       })


        
    })