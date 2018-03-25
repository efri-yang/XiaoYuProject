  $(function() {
      $("#J_gotop").on("click", function() {
          $("html,body").animate({
              scrollTop: 0
          }, 250);
      });

      (function() {
          $(window).on("load", function() {
              var $mods = $(".coms-container").children('div');
              var arr = [];
              var offsetT;
              var $sideLi = $("#J_h-fixed-side-list").children("li");
              $.each($mods, function(index, elem) {
                  arr.push($(elem).offset().top);
              });
              $sideLi.on("click", function() {
                  var index = $sideLi.index(this) + 2;
                  offsetT = arr[index];
                  $("html,body").animate({
                      scrollTop: offsetT
                  }, 250);
              })

          })

      })();

      $('.h-list-3').bxSlider({
          auto: false,
          pager: true,
          pagerSelector: $('#J_page-1'),
          controls: true,
          nextSelector: $("#J_next1"),
          nextText: "下一页",
          prevSelector: $("#J_prev1"),
          prevText: "上一页",
          slideWidth: 1170,
      });

      $('.h-list-4').bxSlider({
          auto: false,
          pager: true,
          pagerSelector: $('#J_page-2'),
          controls: true,
          nextSelector: $("#J_next2"),
          nextText: "下一页",
          prevSelector: $("#J_prev2"),
          prevText: "上一页",
          slideWidth: 1170,
      });

      $('#J_bxslider-1').bxSlider({
          auto: true,
          pager: true,
          controls: false,
          pagerSelector: $('.h-bxslider-1 .pager'),
          slideWidth: 874,
      });
  });




  (function($) {
      $(function() {
          $(document).on("click", '[data-roler="iptip"] .lab', function() {
              var $this = $(this);
              $this.hide();
              $this.siblings(".ipt-text").focus();
          })
          $('[data-roler="iptip"] .ipt-text').on("blur", function() {
              var $this = $(this);
              var val = $.trim($this.val());
              if (!val) {
                  $this.siblings(".lab").show();
              }
          })
      })
  })(jQuery);


  (function($) {
      $(function() {
          $(".h-mod-1-pptg .arrow").on("mouseover", function() {
              $(".pptg-tree-box").show();
          }).on("mouseout", function(event) {
              var realteTarget = event.relatedTarget;
              if (!$(realteTarget).closest($(".pptg-tree-box")).length) {
                  $(".pptg-tree-box").hide();
              }
          });

          $(".pptg-tree-box").on("mouseout", function(event) {
              var realteTarget = event.relatedTarget;
              if (!$(realteTarget).closest($(".pptg-tree-box")).length || $(realteTarget).closest($(".h-mod-1-pptg .arrow")).length) {
                  $(".pptg-tree-box").hide();
              }
          })
      })
  })(jQuery);