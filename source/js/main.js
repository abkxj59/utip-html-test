import {initLanguageSelector} from './modules/language-selector.js';
import {initAccordion} from './modules/accordion.js';
// // ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initLanguageSelector();
    initAccordion();
  });
});
