  $(document).ready(function() {
      // slider
      $('.slider-fade').slick({
          arrows: true,
          dots: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 10000,
          fade: true,
          cssEase: 'linear',
          asNavFor: '.slider-top',
          responsive: [{
              breakpoint: 577,
              settings: {
                  dots: true,
              }
          }]
      });

      $('.slider-top').slick({
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 10000,
          fade: true,
          cssEase: 'linear',
          asNavFor: '.slider-fade'
      });


      $('.slider-right').slick({
          prevArrow: $('.main-arrows .arrow-prev'),
          nextArrow: $('.main-arrows .arrow-next'),
          dots: false,
          infinite: true,
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '300px',
      });

      $(".slider-right--item").on('afterChange', function(event, slick, currentSlide) {
          $(".slide-count .dinamic").text(currentSlide + 1);
      });

  });