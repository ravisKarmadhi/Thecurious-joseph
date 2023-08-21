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
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
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
  }
  slickSLider() { }
}
