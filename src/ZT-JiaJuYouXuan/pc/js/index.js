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

        
    })