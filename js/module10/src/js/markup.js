import recipes from '../menu.json';
import renderMarkupMenu from '../templates/menu-items.hbs';

document
  .querySelector('.js-menu')
  .insertAdjacentHTML('beforeend', renderMarkupMenu(recipes));
