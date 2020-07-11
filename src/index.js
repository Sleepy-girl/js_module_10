import './styles.css';
import menu from './menu.json';
import menuTemplate from './template.hbs';
import {Theme} from './themes.js';

const menuRef = document.querySelector('.menu');
const bodyRef = document.querySelector('body');
const checkboxRef = document.getElementById('theme-switch-control');

const markup = menuTemplate(menu);
menuRef.insertAdjacentHTML('afterbegin', markup);

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
