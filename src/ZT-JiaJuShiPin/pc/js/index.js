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
            onSlideAfter:function(slider,oldIndex,newIndex){

               $(".slide-1-box .xjuser-wrap .xjuser").eq(newIndex).addClass('active').siblings().removeClass('active');
               $("slide-1-box .intro-txt-wrap .intro-txt").eq(newIndex).addClass('active').siblings().removeClass('active');
            }
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
            prevText: "",
            onSlideAfter:function(slider,oldIndex,newIndex){
              $(this).parents(".slide-2-box").find(".intro-txt-wrap").children(".intro-txt").eq(newIndex).addClass('active').siblings().removeClass('active');
               $(this).parents(".slide-2-box").find(".xjuser-wrap").children(".xjuser").eq(newIndex).addClass('active').siblings().removeClass('active');
              
            }
        });





        $('.mod-2-tab a').click(function(e) {
            e.preventDefault()
            $(this).tab('show');

        });



        $("#J_lqwy-btn-1").on("click",function(event){
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

         $(".top-pic-txt").on("click",function(event){
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
         $(".ft-fixed .top-pic").on("click",function(event){
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
        // var layerResult=layer.open({
        //       type: 1,
        //       shadeClose: true,
        //       title: false, //不显示标题
        //       area:"450px",
        //       content: $('#J_dialog-result'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
        //       cancel: function(){
                  
        //       }
        //  });
        $("#J_dialog-result .btn-close").on("click",function(){
            layer.close(layerResult)
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
       });


       $(".dialog-form-box .item-cell .lab").on("click",function(){
            var $this=$(this);
            $this.hide();
            $this.siblings(".ipt-text").focus();
       });

       $(".dialog-form-box .item-cell .ipt-text").on("foucs",function(){
            var $this=$(this);
            $this.hide();
            $this.siblings(".ipt-text").focus();
       }).on("blur",function(){
             var $this=$(this);
             var val=$.trim($this.val());
             if(!val){
                $this.siblings('label.lab').show();
             }
       });






        
    })