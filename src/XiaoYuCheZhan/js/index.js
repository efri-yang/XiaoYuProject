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


  (function($) {
        $(function() {
            var CartType = function() {
                this.arr = [];
                this.add = function(obj) {
                    if (this.indexOf(obj.id) == false) {
                        this.arr.push(obj);
                    }

                }
                this.indexOf = function(id) {
                    var posIndex = false;
                    $.each(this.arr, function(index, obj) {
                        if (obj.id == id) {
                            posIndex = index;
                            return;
                        }
                    })
                    return posIndex;
                }
                this.remove = function(id) {
                    var index = this.indexOf(id);
                    if (index !== false) {
                        this.arr.splice(index, 1)
                    }
                }
                this.joinId = function() {
                        var arr = [];
                        $.each(this.arr, function(index, obj) {
                            arr.push(obj.id);
                        })
                        return arr.join(",")
                    },
                    this.joinText = function() {
                        var arr = [];
                        $.each(this.arr, function(index, obj) {
                            arr.push(obj.text);
                        })
                        return arr.join(",")
                    }
            }

            var cart = new CartType();

            (function() {
                $(".sel-field-el").on("click", function() {
                    if ($(".cart-type-box").hasClass("open")) {
                        $(".cart-type-box").removeClass("open");
                    } else {
                        $(".cart-type-box").addClass("open");
                    }
                })
                $(".sel-item-box a").on("click", function(event) {
                    var obj = {};
                    event.preventDefault();
                    var $this = $(this);
                    obj.id = $this.data("id");
                    obj.text = $this.data("val");
                    if ($this.hasClass('active')) {
                        $this.removeClass('active');
                        cart.remove(obj.id);
                    } else {
                        $this.addClass('active');
                        cart.add(obj);
                    }

                    //隐藏域要去选项的id 开发自己选择

                    //$("#J_cart-hidden").val(cart.joinText()) //隐藏域要去选项的文本 开发自己选择
                    //
                });

                $("#J_btncomfirm").on("click", function() {
                    if (cart.arr.length) {
                        $(".sel-field-el").html(cart.joinText());
                    } else {
                        $(".sel-field-el").html("- 选择车型 -")
                    }
                    $("#J_cart-hidden").val(cart.joinText());
                    $(".cart-type-box").removeClass('open');
                })
            })()
        })
    })(jQuery);