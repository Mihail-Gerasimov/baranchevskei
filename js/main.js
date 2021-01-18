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
          fade: false,
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
          "Хорошие солнцезащитные очки – аксессуар первостепенной важности, они необходимы нашим глазам.</br>При выборе солнцезащитных очков не стоит забывать о главной их функции– защита от солнца.Болезни, которые вызывает вредное излучение, действительно серьезные: катаракта, ожег роговицы, злокачественные заболеваниями кожи век и конъюнктивы.Что бы избежать данных осложнений, нужно выбирать качественную оптику.</br>Но не стоит забывать, что при правильном выборе солнцезащитных очков они подчеркивают Ваш стиль и помогают создать желанный образ. В клинической оптике Бранчевского, по адресу 6 просека д .161, действует акция на солнцезащитные очки, при предъявлении купона(в распечатанном виде, либо фото).",
          "Для производства линзы SeeMax AP применяются новейшие технологии, позволяющие получить линзу с непревзойдённым оптическим качеством по всей поверхности линзы. В этой линзе значительно уменьшено количество искажений по краям. Её уникальность заключается в учёте индивидуальных особенностей глаз и параметров оправы.</br>С линзой Nikon SeeMax Infiniti вы обретёте превосходное качество зрения и эстетический вид.</br>Для того чтобы Вы получили правильные очки, соответствующие вашим потребностям, очень важно правильно выбрать оптику и специалиста по подбору очков.</br>В клинической оптике Бранчевского работает квалифицированный персонал с большим стажем работы, обследование происходит на современном оборудование, а так же соблюдаются все меры защиты и безопасности.",
          "Бесплатная проверка зрения в клинической оптике Бранчевского - отличный способ вовремя выявить возможные нарушения зрения. Но даже если у вас нет симптомов и проблем с глазами, это не обязательно означает, что глаза в порядке. Профилактическая оптометрия и периодическая проверка зрения, минимум раз в год - лучший способ минимизировать риск развития глазных заболеваний. В клинической оптике Бранчевского можно пройти бесплатную проверку зрения взрослым и детям с 12 лет, при оформления заказа. Рецепт выдаётся вместе с готовыми очками.</br>Обращаясь в клиническую оптику Бранчевского, Вы можете быть уверены в правильности выбора, ведь у нас квалифицированный персонал с большим стажемработы, современное оборудование и соблюдаются все меры защиты.",
          "Современные прогрессивные высокотехнологичные очковые линзы Nikon обеспечивают качественное и комфортное зрение на любом расстоянии, имеют непревзойденное оптическое качество, лучший эстетический вид и комфорт. Скидка 15% предоставляется на следующие линзы: SeeMax Master - Индивидуальная линза двойного прогрессивного дизайна, обеспечивающая коррекцию зрения в соответствии с индивидуальными параметрами пользователя. Имеет наиболее широкие поля и максимально широкую зона для чтения. Presio Power FP - Линза с двойным прогрессивным дизайном, имеет широкую центральную зону, обеспечивает превосходную адаптацию к линзам. Digilife FP- Прогрессивные линзы с широкой средней зоной для тех, кто ведет цифровой стиль жизни. Расширенная зона средних расстояний. Баланс на всех расстояниях. Presio Advance FP - Прогрессивная линза с цифровой обработкой поверхности, что позволяет достигнуть хорошего качества зрения и быстрой адаптации к данным прогрессивным линзам. Имеет широкие поля чёткого зрения. Presio i Digital - Асферическая прогрессивная линза с цифровой обработкой поверхности, обеспечивающая хорошие поля зрения и чёткое изображение на дальних, средних и близких расстояниях. Presio i - Улучшенный стандартный прогрессивный дизайн линзы с запатентованной технологией асферизации, позволяющий точно распределять оптическую силу по всей поверхности линзы, обеспечивая более комфортное зрение вблизи и на дальние расстояния. При этом зона для близи увеличена по сравнению со стандартными потребностям, очень важно правильно выбрать оптику и специалиста по подбору очков. В клинической оптике Бранчевского работает квалифицированный персонал с большим стажем работы, обследование происходит на современном оборудование, а так же соблюдаются все меры защиты и безопасности.",
          "Карточка покупателя выдаётся при первой покупке мягких контактных линз любого производителя.</br>Действующие скидки:</br>- 1 упаковка МКЛ по полной стоимости</br>- 2,3,4,5 упаковки МКЛ со скидкой 5%</br>- 6,7,8,9,10 упаковки со скидкой 7%</br>- 11 упаковка со скидкой 100%.</br></br>После выдачи 11 упаковки МКЛ карточка покупателя изымается и выдаётся новая, на прежних условиях.</br>Будем рады видеть вас в клинической оптике Бранчевского.",
          "Для получения скидки нужно предъявить дисконтную карту ИДК, либо флаер ИДК. Данная скидка не суммируется с другими скидками.",
          "Home&Office Neo</br>Линзы с увеличенной средней зоной идеально подходящие для работы внутри помещения, так как при этом наиболее важны средние и ближние расстояния, чем расстояния вдаль.</br> Soltes Wide Neo</br>Линзы с увеличенным диапазоном рабочих расстояний идеально подходят для работы вблизи, за компьютером, чтения, шитья и т.д. Линзы Soltes Wide Neo позволяют чётко видеть объекты и находящиеся совсем близко и на средних расстояниях.</br>Relaxsee Neo</br>Линзы для уменьшения зрительного напряжения. Relaxsee Neo - это новый подход к линзам для тех, кто испытывает зрительную усталость. Для того чтобы Вы получили правильные очки, соответствующие вашим потребностям, очень важно правильно выбрать оптику и специалиста по подбору очков.</br>В клинической оптике Бранчевского работает квалифицированный персонал с большим стажем работы, обследование происходит на современном оборудование, а так же соблюдаются все меры защиты и безопасности.",
          "При одновременной оплате за подбор очков за 2-х человек скидка каждому -</br>10%, от 3-х человек - 15%.</br>Скидка не применяется к акционной цене на услуги.",
          "Скидка предоставляется на определённый ассортимент медицинских оправ.",
          "При предъявлению пенсионного удостоверения ( или иного документа,выданного на основе пенсионного удостоверения) действует скидка 5% на подбор очков.",
          "При предъявлению пенсионного удостоверения ( или иного документа, выданного на основе пенсионного удостоверения) действует скидка 20% на подбор очков. Акция действует только в клинической оптике Бранчевского в г.Тольятти.",
          "При одновременной покупке 2-х упаковок мягких контактных линх ACUVUE вы получаете подаро. Акция действует во всех отделениях клинической оптики Бранчевского.</br>В оптике по адресу 6 прсека д.161 вы можете подобрать контактные линзы бесплатно."

      ];
  });