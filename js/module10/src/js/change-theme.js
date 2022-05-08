import { load, save } from './storage';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputCheckbox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
inputCheckbox.addEventListener('change', changeTheme);

function changeTheme(e) {
  if (!e.target.checked) {
    addThemeLight();
    save('Theme', Theme.LIGHT);
  }
  if (e.target.checked) {
    addThemeDark();
    save('Theme', Theme.DARK);
  }
}
if (load('Theme') === Theme.LIGHT) {
  addThemeLight();
  inputCheckbox.checked = false;
}

if (load('Theme') === Theme.DARK) {
  addThemeDark();
  inputCheckbox.checked = true;
}

function addThemeLight() {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
}
function addThemeDark() {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
}
