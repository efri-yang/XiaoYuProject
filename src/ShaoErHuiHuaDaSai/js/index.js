(function($) {
    $(function() {
        $(document).on("mouseover", '[data-roler="dropdown"]', function() {
            $(this).addClass("active");
        }).on("mouseout", '[data-roler="dropdown"]', function(event) {
            var relateElem = event.relatedTarget;
            $(this).removeClass("active");
            if ($(relateElem).closest($(this)).length > 0) {
                return;
            } else {
                $(this).children("ul").hide();
            }
        });
        $(document).on("click", '[data-roler="dropdown"] > cite', function() {
            var $this = $(this);
            $this.siblings("ul").show();
        });
        $(document).on("click", '[data-roler="dropdown"] > ul li a', function(event) {
            event.preventDefault();
            var $this = $(this);
            dropdownHandle($this);
        });
        var $dropDown = $('[data-roler="dropdown"]');
        var $cite = $dropDown.children('cite');
        var $ul = $dropDown.find('ul');
        var $hiddenInut = $("#J_dropselhidden");
        if (!!$hiddenInut.val()) $cite.removeClass("active");
        /**
         * [hiddenInut description]
         * $elem 表示当前点击的那个元素(开发修改写在这里)
         */
        function dropdownHandle($elem) {
            var selId = $elem.attr("selid");
            var selText = $elem.text();
            $hiddenInut.val(selId);
            $cite.addClass('active').text(selText);
            $ul.hide();
        }
    })
})(jQuery);