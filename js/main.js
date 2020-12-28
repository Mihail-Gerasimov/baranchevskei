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
          autoplay: false,
          autoplaySpeed: 10000,
          fade: true,
          cssEase: 'linear',
          asNavFor: '.slider-top',
          responsive: [{
              breakpoint: 768,
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
          autoplay: false,
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
          //   autoplay: true,
          centerPadding: '300px',
          responsive: [{
                  breakpoint: 1441,
                  settings: {
                      centerPadding: '100px',
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      centerMode: true,
                      row: 1,
                      centerPadding: '50px',
                      slidesToShow: 1,
                      infinite: false,
                      slidesToScroll: 1,
                      dots: true
                  }
              },
              {
                  breakpoint: 426,
                  settings: {
                      infinite: false,
                      centerMode: false,
                      centerPadding: '0px',
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots: true
                  }
              }
          ]
      });

      console.log(slide);

  });

  window.addEventListener('DOMContentLoaded', () => {

      const countSlide = document.querySelector('.stock__card-counter--active'),
          slide = document.querySelectorAll('.stock__slider-card1'),
          total = document.querySelector('.stock__card-counter--all'),
          triggerModalMain = document.querySelectorAll('.stock__slider-main a'),
          triggerModalMobile = document.querySelectorAll('.stock__slider-media a'),
          stockModalMain = document.querySelector('.stock__modal-main'),
          stockModalMobile = document.querySelector('.stock__modal-mobile');

      total.textContent = slide.length;

      $('.variable-width').slick({
          prevArrow: $('.stock__card-arrow--right'),
          nextArrow: $('.stock__card-arrow--left'),
          dots: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true
      });

      $('.stock__card-arrow--left').on('click', function() {
          $('.variable-width').slick('slickPrev');
      });

      $('.stock__card-arrow--right').on('click', function() {
          $('.variable-width').slick('slickNext');
      });

      $('.variable-width').on('afterChange', function(event, slick, currentSlide, nextSlide) { //счётчик слайдов
          countSlide.innerText = currentSlide + 1;
      });

      $('.variable-width1').slick({
          dots: true,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true
      });

      function addContent() {

      }

      function openModal(triggers, modal, visibleClass) {
          const close = modal.querySelector('.stock__modal-close'),
              content = modal.querySelector('.stock__modal-text');

          triggers.forEach((trigger, i) => {
              trigger.addEventListener('click', (e) => {
                  e.preventDefault();
                  arrayContent.forEach((text, y) => {
                      if (i == y) {
                          content.innerHTML = text;
                      }
                  });

                  modal.classList.add(visibleClass);
              });
          });

          close.addEventListener('click', () => {
              modal.classList.remove(visibleClass);
          });

          modal.addEventListener('click', e => {
              if (e.target == modal) {
                  modal.classList.remove(visibleClass);
              }
          });

          document.addEventListener('keydown', e => {
              if (e.key == "Escape") {
                  modal.classList.remove(visibleClass);
              }
          });
      }

      openModal(triggerModalMain, stockModalMain, 'stock__modal--visible');
      openModal(triggerModalMobile, stockModalMobile, 'stock__modal--visible');

      const arrayContent = [
          "Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
          "1Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
          "2Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
          "3Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
          "4Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику.",
          "5Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам. </br></br> При выборе солнцезащитных очков не стоит забывать о главной их функции – защита от солнца. Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы. </br></br> Что бы избежать данных сложнений, нужно выбирать качественную оптику."
      ];
  });