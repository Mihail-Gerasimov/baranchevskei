  $(document).ready(function() {
      // slider
      $('.slider-fade').slick({

          // prevArrow: '.next-ar',
          // nextArrow: '.prew-ar',
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

      //   if ($(window).width() < 577) {

      //       $('.slider-fade').slick({
      //           dots: true
      //       });
      //   }

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
  });