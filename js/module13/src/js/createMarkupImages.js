import markupImages from '../templates/markupImages.hbs';

export const gallery = document.querySelector('.gallery');

import * as basicLightbox from 'basiclightbox';
gallery.addEventListener('click', e => {
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
  `);

  if (e.target.tagName === 'IMG') {
    instance.show();

    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        instance.close();
      }
    });
  }
});

export function createMarkupImages(objImages) {
  gallery.insertAdjacentHTML('beforeend', markupImages(objImages));
}
