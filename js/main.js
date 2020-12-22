  $(document).ready(function() {
      // slider
      $('.slider-fade').slick({

          // prevArrow: '.next-ar',
          // nextArrow: '.prew-ar',
          arrows: true,
          dots: false,
          infinite: true,
          speed: 500,
          autoplay: false,
          autoplaySpeed: 10000,
          fade: true,
          cssEase: 'linear',
          asNavFor: '.slider-top'

      });

      $('.slider-top').slick({

          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          autoplay: false,
          autoplaySpeed: 10000,
          fade: true,
          cssEase: 'linear',
          asNavFor: '.slider-fade'
      });
  });