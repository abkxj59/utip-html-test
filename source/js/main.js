import {initMenu} from './modules/menu.js';
import {initLanguageSelector} from './modules/language-selector.js';
import {initAccordion} from './modules/accordion.js';
import {addSlider} from './modules/slider.js';

// // ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initLanguageSelector();
  initAccordion();
  addSlider();

  window.addEventListener('load', () => {
  });
});
