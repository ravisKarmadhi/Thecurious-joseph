import "slick-carousel";

export class App {
  init() {
    // $('.main-slider').slick({
    //   infinite: true,
    //   slidesToShow: 1,
    //   dots: true,
    //   fade: true,
    //   arrows: true,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   prevArrow: $(".hero-home .slick--prev"),
    //   nextArrow: $(".hero-home .slick--next"),
    // });
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
  }
  slickSLider() { }
}
