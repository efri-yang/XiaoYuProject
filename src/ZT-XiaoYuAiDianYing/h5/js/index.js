var scaleDistance = 0,
        opacityDistance = 0,
        slideScale = 0.96,
        slideOpacity = 0.6;


    var swiper1 = new Swiper('.swiper-container-1', {

        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function() {
                this.slideWidth = $(this.slides[this.activeIndex]).children(".pic").width();
                this.slideScale = slideScale;
                this.slideOpacity = slideOpacity;
                $(this.slides[this.activeIndex + 1]).css({ "transform": "scale(" + this.slideScale + ")", "opacity": "" + this.slideOpacity + "" });
                $(this.slides[this.activeIndex - 1]).css({ "transform": "scale(" + this.slideScale + ")", "opacity": "" + this.slideOpacity + "" });
            },

            slideChangeTransitionEnd: function() {
                $(this.slides[this.activeIndex]).css({ "transform": "scale(1)", "opacity": "1" });
                $(this.slides[this.activeIndex + 1]).css({ "transform": "scale(" + this.slideScale + ")", "opacity": "" + this.slideOpacity + "" });
                $(this.slides[this.activeIndex - 1]).css({ "transform": "scale(" + this.slideScale + ")", "opacity": "" + this.slideOpacity + "" });
            },
        },
    });


    var swiper2 = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      freeMode: true
    });