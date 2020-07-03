$(function(){
    $('.slider__top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-down'
        
        
    });

    $('.slider-down').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__top',
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                }
            },
            
            
        ]
    });



    $('.header-block__nav-btn').on('click', function(){
        $('.header-block__nav__menu').slideToggle();
    });
  });