(function($) {
    'use strict';

    // TAB CLASS DEFINITION
    // ====================

    var Tab = function(element) {
        // jscs:disable requireDollarBeforejQueryAssignment
        this.element = $(element)
        // jscs:enable requireDollarBeforejQueryAssignment
    }

    Tab.VERSION = '3.3.7'

    Tab.TRANSITION_DURATION = 150

    Tab.prototype.show = function() {
        var $this = this.element
        var $ul = $this.closest('ul:not(.dropdown-menu)')
        var selector = $this.data('target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        if ($this.parent('li').hasClass('active')) return

        var $previous = $ul.find('.active:last a')
        var hideEvent = $.Event('hide.bs.tab', {
            relatedTarget: $this[0]
        })
        var showEvent = $.Event('show.bs.tab', {
            relatedTarget: $previous[0]
        })

        $previous.trigger(hideEvent)
        $this.trigger(showEvent)

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

        var $target = $(selector)

        this.activate($this.closest('li'), $ul)
        this.activate($target, $target.parent(), function() {
            $previous.trigger({
                type: 'hidden.bs.tab',
                relatedTarget: $this[0]
            })
            $this.trigger({
                type: 'shown.bs.tab',
                relatedTarget: $previous[0]
            })
        })
    }

    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find('> .active')
        var transition = callback &&
            $.support.transition &&
            ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

        function next() {
            $active
                .removeClass('active')
                .find('> .dropdown-menu > .active')
                .removeClass('active')
                .end()
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', false)

            element
                .addClass('active')
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', true)

            if (transition) {
                element[0].offsetWidth // reflow for transition
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }

            if (element.parent('.dropdown-menu').length) {
                element
                    .closest('li.dropdown')
                    .addClass('active')
                    .end()
                    .find('[data-toggle="tab"]')
                    .attr('aria-expanded', true)
            }

            callback && callback()
        }

        $active.length && transition ?
            $active
            .one('bsTransitionEnd', next)
            .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
            next()

        $active.removeClass('in')
    }


    // TAB PLUGIN DEFINITION
    // =====================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tab')

            if (!data) $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tab

    $.fn.tab = Plugin
    $.fn.tab.Constructor = Tab


    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function() {
        $.fn.tab = old
        return this
    }
})(jQuery);


$(function() {

    $('.tab-hd-list a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })
});


$(function() {

    var $pptjSlider;
    $('a[href="#J_pptj"]').on('shown.bs.tab', function(e) {
        if ($pptjSlider) {
            return;
        }
        $pptjSlider = $('.pptj-list').bxSlider({
            controls: true,
            pager: false,
            slideMargin: 10,
            slideWidth: 192,
            minSlides: 5,
            maxSlides: 5,
            moveSlides: 5,
            nextText: "",
            prevText: "",
            nextSelector: $("#J_pptj-next"),
            prevSelector: $("#J_pptj-prev"),
        });


    });


    var $wqhgSlider;
    $('a[href="#J_wqhg"]').on('shown.bs.tab', function(e) {
        if ($pptjSlider) {
            return;
        }
        $wqhgSlider = $('.wqhg-list').bxSlider({
            controls: true,
            pager: false,
            slideMargin: 10,
            slideWidth: 328,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 3,
            nextText: "",
            prevText: "",
            nextSelector: $("#J_wqhg-next"),
            prevSelector: $("#J_wqhg-prev"),

        });


    });




    $(".soma-bd-form").find(".lab").on("click", function() {
        var $this = $(this);
        $this.hide();
        $this.siblings('.ipt-text').focus();
    })

    $(".soma-bd-form").find(".ipt-text").on("blur", function() {
        var $this = $(this);
        if (!$.trim($this.val())) {
            $this.siblings('.lab').show();
        }
    })
});


$(function() {
    $(window).on("load", function() {
        var offsetTop1 = $(".tit-type.type-1").offset().top-70;
        var offsetTop2 = $(".tit-type.type-2").offset().top;
        var offsetTop3 = $(".tab-hd-list").offset().top-50;

        var $bodyHtml=$('html,body');
        $(".side-fixed .item-1").on("click", function() {
            $bodyHtml.animate({ scrollTop: offsetTop1 });
        });

        $(".side-fixed .item-2").on("click", function() {
            $bodyHtml.animate({ scrollTop: offsetTop2 });
        })

        $(".side-fixed .item-5,.side-fixed .item-3,.side-fixed .item-4,.side-fixed .item-6").on("click", function() {
            var $this=$(this);
            var href=$this.attr("data-href");
            $("a[href='"+href+"']").trigger("click");
            $bodyHtml.animate({ scrollTop: offsetTop3 });
        })

    });

    $(window).on("scroll",function(){
        var scrollTop=$(this).scrollTop();
        if(scrollTop>=400){
                 $("#J_gotop").show();
        }else{
                $("#J_gotop").hide();
        }
    })

    $("#J_gotop").on("click",function(){
        $('html,body').animate({ scrollTop:0});
        $(this).hide();
    })
})