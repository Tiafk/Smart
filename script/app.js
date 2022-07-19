// -----------------Burger---------------->

let burgerBtn = document.querySelector('.burger-menu');
let navUL = document.querySelector('.nav');

burgerBtn.addEventListener('click', (e) => {
  burgerBtn.classList.toggle('active');
  navUL.classList.toggle('active');
})

//--------------------------------------------



// -----------------Slider---------------->

// let sliderLine = document.querySelector('.box-slider');
// let offset = 0;

// document.querySelector('.next').addEventListener('click', (e) => {
//   console.log(1);
//   offset += 1111;
//   if(offset > 2222) {
//     offset = 0;
//   }
//   sliderLine.style.left = -offset + 'px';
// });

// document.querySelector('.prev').addEventListener('click', (e) => {
//   offset -= 1111;
//   if(offset < 0) {
//     offset = 2222;
//   }
//   sliderLine.style.left = -offset + 'px';
// });

//--------------------------------------------


new Swiper ('.image-slider', {
  
  // Кнопки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  
  // Прогрессбар
  pagination: {
    el:'.swiper-pagination',
    clickable: true,
  },

  // Позиция
  hashNavigation: {
    watchState: true,
  },

  // Колличество слайдов для скрола
  slidesPerView: 2.01,
  slidesPerGroup: 2,
  spaceBetween: 39,


  // Возможность перетаскивать
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  // Бессконечность
  // loop: true,

  // Адаптив
  breakpoints: {
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    280: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    360: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    375: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  }
})

