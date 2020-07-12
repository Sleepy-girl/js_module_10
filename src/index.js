import './css/styles.css';
import {Theme} from './components/themes/themes.js';
import './components/menu/menu.js';
import './components/cart/cart';
import 'basiclightbox/dist/basicLightbox.min.css';


export const bodyRef = document.querySelector('body');
export const checkboxRef = document.getElementById('theme-switch-control');

bodyRef.classList.add('light-theme');

checkboxRef.addEventListener('change', toolbar);

saveTheme();

function toolbar () {
  if (checkboxRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
};

function saveTheme() {
  const savedTheme = localStorage.getItem('Theme');
  if (savedTheme) {
    bodyRef.classList.add(savedTheme);
  } else if (savedTheme === Theme.DARK) {
    checkboxRef.checked = true;
  }
};
