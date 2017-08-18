//banner 的js


;(function($) {

    $(function() {


          var jssor_1_options = {
            $AutoPlay: 0,
            $SlideWidth:732,
            $Cols:2,
            $Align:183,
            $ArrowNavigatorOptions: {
              $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
              $Class: $JssorBulletNavigator$
            }
          };

          var jssor_1_slider = new $JssorSlider$("J_scroll-wrap", jssor_1_options);
            $("#J_scroll-wrap .item").css("height","379px")
          /*responsive code begin*/
          /*remove responsive code if you don't want the slider scales while window resizing*/

          /*responsive code end*/
    })

})(jQuery);

(function($) {
    $(function() {
        var $container = $("#J_delivery-pics"),
            $ul = $("#J_delivery-list"),
            $li = $ul.children(),
            $btnL = $container.children('.dir-l').eq(0),
            $btnR = $container.children('.dir-r').eq(0);
        var singleW =183,
            len = $li.length,
            realW = 368,
            scollW = singleW * (len - 6),
            pageW = singleW * 6,
            currW = singleW,
            timer,
            currPos = 0,
        distance = (realW - singleW) / 2,
            step = 1;
            console.dir(singleW)
        $ul.css("width", len * singleW);
        if ($li.length <= 6) {
            $btnL.hide();
            $btnR.hide();
        }

        $btnL.on("click", function() {

            if (currPos == 0 || $ul.is(":animated")) return;

            if (currPos - pageW < 0) {
                $ul.animate({
                    left: "+=" + currPos
                }, 400, function() {
                    currPos = 0;
                })
            } else {
                $ul.animate({
                    left: "+=" + pageW
                }, 400, function() {
                    currPos = currPos - pageW;
                })
            }

        })
        $btnR.on("click", function() {

            if (currPos == scollW || $ul.is(":animated")) return;

            if (scollW - currPos >= pageW) {
                $ul.animate({
                    left: "-=" + pageW
                }, 400, function() {
                    currPos = currPos + pageW;
                })
            } else {
                $ul.animate({
                    left: "-=" + (scollW - currPos)
                }, 400, function() {
                    currPos = scollW;
                })
            }
        });
        $li.each(function(index, val) {

          var $this = $(val);
          $this.css({
              position: "absolute",
              left: index * singleW
          })
        })
        $li.each(function(index, val) {
            var $this = $(val);
            $this.on("mouseover", function() {
                clearTimeout(timer);
                var index = $li.index($this)
                if (index == 0) {
                    $this.css("zIndex", 1).stop(true, true).animate({
                        width: realW
                    }, 150);
                    $this.siblings().stop(true, true).animate({
                        left: "+=" + distance * 2
                    }, 150);
                } else if (index == $li.length - 1 && $li.length >= 5) {
                    $this.css("zIndex", 1).stop(true, true).animate({
                        width: realW,
                        left: "-=" + distance * 2
                    }, 150);
                    $this.siblings().stop(true, true).animate({
                        left: "-=" + distance * 2
                    }, 150);
                } else {
                    $this.css("zIndex", 1).stop(true, true).animate({
                        width: realW,
                        left: "-=" + distance
                    }, 150);
                    $ul.children('li:lt(' + index + ')').stop(true, true).animate({
                        left: "-=" + distance
                    }, 150);
                    $ul.children('li:gt(' + index + ')').stop(true, true).animate({
                        left: "+=" + distance
                    }, 150);

                }

            })
            $this.on("mouseout", function() {
                clearTimeout(timer);
                var index = $li.index($this)
                if (index == 0) {
                    $this.css("zIndex", 1).stop(true, true).animate({
                        width: singleW
                    }, 150, function() {
                        currW = singleW;
                        $this.css("zIndex", 0)
                    });
                    $this.siblings().stop(true, true).animate({
                        left: "-=" + distance * 2
                    }, 150);
                } else if (index == $li.length - 1 && $li.length >= 5) {
                    $this.css("zIndex", 1).stop(true, true).animate({
                        width: singleW,
                        left: "+=" + distance * 2
                    }, 150, function() {
                        currW = singleW;
                        $this.css("zIndex", 0)
                    });
                    $this.siblings().stop(true, true).animate({
                        left: "+=" + distance * 2
                    }, 150);
                } else {
                  $this.stop(true, true).animate({
                      width: singleW,
                      left: "+=" + distance
                  }, 150, function() {
                      currW = singleW;
                      $this.css("zIndex", 0)
                  });
                  $ul.children('li:lt(' + index + ')').stop(true, true).animate({
                      left: "+=" + distance
                  }, 150);
                  $ul.children('li:gt(' + index + ')').stop(true, true).animate({
                      left: "-=" + distance
                  }, 150);


                }
            })

        })
    })
})(jQuery);


(function($){
  $(function(){
      function  LoadImage(ImgD,imgW,imgH, width, height, t) {
        var smallWidth = imgW  || 0;
        var smallHeight = imgH || 0;
        var iwidth = width;  //定义允许图片宽度
        var iheight = height;  //定义允许图片高度
        if (smallWidth > 0 && smallHeight > 0) {
            if (smallWidth / smallHeight >= iwidth / iheight) {
                if (smallWidth > iwidth) {
                    $(ImgD).width(iwidth).height((smallHeight * iwidth) / smallWidth).css({"top":Math.floor(Math.abs((iheight - $(ImgD).height()) / 2)) + "px","left":0});
                } else {
                    $(ImgD).width(smallWidth).height(smallHeight).css({"top":Math.floor(Math.abs((iheight - $(ImgD).height()) / 2)) + "px","left":Math.floor(Math.abs((iwidth - $(ImgD).width()) / 2)) + "px"});
                }
            }
            else {
                if (smallHeight > iheight) {
                    $(ImgD).width((smallWidth * iheight) / smallHeight).height(iheight)
                    .css({top:0,left:Math.floor(Math.abs((iwidth - $(ImgD).width()) / 2)) + "px"})
                } else {
                    $(ImgD).width(smallWidth).height(smallHeight)
                    .css({top:Math.floor(Math.abs((iheight - $(ImgD).height()) / 2)) + "px ",left:Math.floor(Math.abs((iwidth - $(ImgD).width()) / 2)) + "px"})
                }
            }
        }
    };


        var winSize={},imgSize={};
        $.each(["activity-pic","map-pic"],function(index, el) {
              var image=new Image();
              var $img=$("#"+el);
              image.src=$img.attr("src");
                if (image.complete) {

                  $img.attr("data-width",image.width);
                  $img.attr("data-height",image.height);
                  return;
                }
              image.onload=function(){

                  $img.attr("data-width",image.width);
                  $img.attr("data-height",image.height);
              }
        });
        $(window).on("resize",function(){
            var obj={},$this=$(this);
            winSize.width=$this.width()-100;
            winSize.height=$this.height()-100;
            LoadImage($("#J_copy-img"),imgSize.width,imgSize.height,winSize.width,winSize.height);
        }).trigger('resize');



      $(".zoomout-sign").on("click",function(){
        var $this=$(this),
            relateId=$this.data("rela"),
            $img=$(relateId);
            imgSize.width=$img.data("width");
            imgSize.height=$img.data("height");
            $("body").append('<div class="zoom-img"><div class="mask"></div><div class="pic"><img id="J_copy-img" src="'+$img.attr("src")+'"></div></div>')
            LoadImage($("#J_copy-img"),imgSize.width,imgSize.height,winSize.width,winSize.height);



      });
      $("body").on("click",".zoom-img",function(event){
            var target=event.target;
            if(target.id=="J_copy-img") return;
            $('.zoom-img').fadeOut(function() {
                $(this).remove();
            });
      })
  })
})(jQuery)
