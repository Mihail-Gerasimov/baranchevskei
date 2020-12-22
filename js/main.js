  $(document).ready(function() {
      // slider
      $('.fade').slick({

          prevArrow: '.next-ar',
          nextArrow: '.prew-ar',
          dots: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 10600,
          fade: true,
          cssEase: 'linear'
      });
  });