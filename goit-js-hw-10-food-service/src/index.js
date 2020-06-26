import './styles.css';
import template from './templates/templates.hbs';
import items from './menu.json';

const refs = {
  menu: document.querySelector('.js-menu'),
  switch: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

localSwitch();

const itemsTemplate = template(items);
refs.menu.insertAdjacentHTML('beforeend', itemsTemplate);
refs.switch.addEventListener('click', themeSwitch);

function themeSwitch() {
  if (refs.switch.checked) {
    localStorage.setItem('checked', true);
    refs.body.classList.add('dark-theme');
    return;
  }
  if (!refs.switch.checked) {
    localStorage.removeItem('checked');
    refs.body.classList.remove('dark-theme');
    return;
  }
}

function localSwitch() {
  const swithchChecked = localStorage.getItem('checked');

  refs.switch.checked = swithchChecked;

  if (swithchChecked) {
    refs.body.classList.add('dark-theme');
  }
}
