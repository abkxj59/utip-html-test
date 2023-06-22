import Swiper, {Pagination} from 'swiper';

const slider = document.querySelector('.features__slider');
const sliderWrapper = slider.querySelector('.features__list');
const slides = slider.querySelectorAll('.features__item');

slider.dataset.mobile = 'false';

let mySwiper = null;

const initSlider = () => {
  mySwiper = new Swiper('.swiper', {
    modules: [Pagination],

    // autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
};

const addSlider = () => {
  const checkMobile = () => {
    if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
      slider.dataset.mobile = 'true';
      slider.classList.add('swiper');
      sliderWrapper.classList.add('swiper-wrapper');
      slides.forEach((slide) => {
        slide.classList.add('swiper-slide');
      });
      initSlider();
    } else if (window.innerWidth >= 768) {
      slider.dataset.mobile = 'false';
      slider.classList.remove('swiper');
      sliderWrapper.classList.remove('swiper-wrapper');
      slides.forEach((slide) => {
        slide.classList.remove('swiper-slide');
      });
      mySwiper.destroy();
    }
  };

  checkMobile();
  window.addEventListener('resize', checkMobile);
};

export {addSlider};
