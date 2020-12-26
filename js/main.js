  $(document).ready(function() {
      const slide = document.querySelectorAll('.slider-right--item'),
          counterTotal = document.querySelector('.static'),
          counterActive = document.querySelector('.dinamic'),
          next = document.querySelector('.arrow-next'),
          prev = document.querySelector('.arrow-prev');
      let counter = 1;

      counterTotal.textContent = slide.length;

      next.addEventListener('click', () => {
          counter++;
          if (counter > slide.length) {
              counter = 1;
          }
          counterActive.textContent = counter;
      });
      prev.addEventListener('click', () => {
          counter--;
          if (counter < 1) {
              counter = slide.length;
          }
          counterActive.textContent = counter;
      });

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
          row: 1,
          centerPadding: '300px',
          responsive: [{
              breakpoint: 768,
              settings: {
                  row: 1,
                  centerPadding: '30px',
                  slidesToShow: 1,
                  fade: false,
                  slidesToScroll: 1,
                  infinite: false,
                  centerMode: true


              }
          }]
      });

      console.log(slide);





  });