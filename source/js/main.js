import {initMenu} from './modules/menu.js';
import {initLanguageSelector} from './modules/language-selector.js';
import {initAccordion} from './modules/accordion.js';
// // ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initMenu();
    initLanguageSelector();
    initAccordion();
  });
});
