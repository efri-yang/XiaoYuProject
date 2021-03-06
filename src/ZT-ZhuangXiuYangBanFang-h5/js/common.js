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

        var $previous = $ul.find('.active  a')
        var hideEvent = $.Event('hidetab', {
            relatedTarget: $this[0]
        })
        var showEvent = $.Event('showtab', {
            relatedTarget: $previous[0]
        })



        $previous.trigger(hideEvent)
        $this.trigger(showEvent)

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

        var $target = $(selector)

        this.activate($this.closest('li'), $ul)
        this.activate($target, $target.parent(), function() {
            $previous.trigger({
                type: 'hiddentab',
                relatedTarget: $this[0]
            })
            $this.trigger({
                type: 'showntab',
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
})(Zepto);


(function($) {

    $(function() {
        var iscrollDrop;
        $(document).on("click", function(event) {
            var relateElem = event.relatedTarget;
            if ($(relateElem).closest($('[data-roler="dropdown"]')).length > 0) {

                return;
            } else {
                $('[data-roler="dropdown"]').find(".scroll-dropdown-wrap").hide();
            }
        });
        $(document).on("click", '[data-roler="dropdown"] cite', function(event) {
            var $this = $(this);
            event.stopPropagation() 
           
           

                $this.siblings(".scroll-dropdown-wrap").show();
          
            
            
                iscrollDrop=new IScroll('#J_scroll-dropdown');
            
        });
        $(document).on("click", '[data-roler="dropdown"] ul li a', function(event) {
            event.preventDefault();
            var $this = $(this);
            dropdownHandle($this);
        });
        var $dropDown = $('#J_dialog-bm-box [data-roler="dropdown"]');
        var $cite = $dropDown.children('cite');
        var $dropdownScroll = $dropDown.find('.scroll-dropdown-wrap');
        var $hiddenInut = $("#J_dropselhidden");
        if (!!$hiddenInut.val()) $cite.removeClass("active");
        /**
         * [hiddenInut description]
         * $elem 表示当前点击的那个元素(开发修改写在这里)
         */
        function dropdownHandle($elem) {
            var selId = $elem.attr("selid");
            var selText = $elem.text();
            console.dir($dropDown.length)
            $hiddenInut.val(selId);
            $cite.addClass('active').text(selText);
            $dropdownScroll.hide();
        }
    })
})(Zepto);