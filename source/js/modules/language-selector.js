const selector = document.querySelector('.profile__language-selector');

const initLanguageSelector = () => {
  if (selector) {
    selector.classList.remove('profile__language-selector--nojs');

    window.addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('profile__language-item')) {
        selector.classList.remove('profile__language-selector--opened');
      }
    });

    selector.addEventListener('click', (evt) => {
      if (selector.classList.contains('profile__language-selector--opened')) {
        const currentLanguage = selector.querySelector('.profile__language-item--checked');
        currentLanguage.classList.remove('profile__language-item--checked');
        const newLanguage = evt.target;
        newLanguage.classList.add('profile__language-item--checked');
        newLanguage.remove();
        selector.prepend(newLanguage);
      }
      selector.classList.toggle('profile__language-selector--opened');
    });
  }
};

export {initLanguageSelector};
