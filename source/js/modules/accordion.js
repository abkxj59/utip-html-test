const accordion = document.querySelector('.faq__list');

const initAccordion = () => {
  if (accordion) {
    accordion.classList.remove('faq__list--nojs');

    const items = accordion.querySelectorAll('.faq__item');
    items.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('faq__item--opened');
      });
    });
    // accordion.addEventListener('click', (evt) => {
    //   console.log(evt.target);
    //   if (evt.target.classList.contains('faq__item')) {
    //     evt.target.classList.toggle('faq__item--opened');
    //   }
    // });
  }
};

export {initAccordion};
