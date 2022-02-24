$(document).ready(function(){
    'use strict';

    //slider
    $('.banner-slider').slick({
        autoplay:true,
        arrows:false,
        dots:true,
    });

    // popup
    new VenoBox({
        selector: ".my-video"
    });

    new VenoBox({
        selector: ".gallery-pop"
    });

    //slider

    $('.testimonial-slider').slick({
        autoplay:true,
        arrows:false,
        dots:false,
        slidesToShow: 2,
        
    });
    $('.feedback-slider').slick({
        autoplay:true,
        arrows:false,
        dots:true,
        slidesToShow: 2,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    dots:true,
                    arrows:false,
                    infinite:true,
                }
            }
        ]
    });

    //counter up

    $('.counter').counterUp({
        delay: 5,
        time:1500,
    });

    //brand slider
    $('.brand-slider').slick({
        prevArrow:'<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right right-arrow"></i>',
        slidesToShow: 5,
        centerMode:true,
        centerPadding:'0px', 
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    dots:false,
                    arrows:true,
                    infinite:true,
                }
                
            },{
                breakpoint:578,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    dots:false,
                    arrows:false,
                    infinite:true,
                }
            }
        ]
    });
})