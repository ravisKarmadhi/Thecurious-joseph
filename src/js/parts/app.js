import "slick-carousel";

export class App {
  init() {
    $('.testimonial-slider').slick({
      infinite: true,
      slidesToShow: 1,
      dots: false,
      fade: true,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    
    $('.tour-slider').slick({
      infinite:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed:500,
      autoplaySpeed: 5000,
      autoplay:true,
      centerMode:true,
      centerPadding:"0",
      arrows:false,
      dots:false,
    });

      $('.slider-blog').slick({
      infinite: true,
      slidesToShow: 3,
      dots: false,
      fade: false,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $(".blog-sec .slick--prev"),
      nextArrow: $(".blog-sec .slick--next"),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.insta-slider').slick({
      infinite: true,
      slidesToShow: 6,
      dots: false,
      fade: false,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    });
    $('.staff-slider').slick({
      infinite: true,
      slidesToShow: 3,
      dots: false,
      fade: false,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $('.single-staff-slider').slick({
      infinite: false,
      slidesToShow: 1,
      dots: false,
      fade:true,
      arrows: true,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      prevArrow: $(".staff-modal .slick--prev"),
      nextArrow: $(".staff-modal .slick--next"),
    });
  }
  slickSLider() { }
}
