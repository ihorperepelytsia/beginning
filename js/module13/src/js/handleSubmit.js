import { searchImages } from './apiService';
import { load, save } from './storage';
import { notice } from '@pnotify/core';
import '@pnotify/core/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { gallery } from './createMarkupImages';
const input = document.querySelector('#search-form input[name=query]');
const form = document.querySelector('#search-form');

const bnt = document.querySelector('.bnt');
// const boxBtn = document.querySelector('.box-btn');
document.querySelector('.bnt').hidden = true;

let pages = 1;

bnt.addEventListener('click', loadMoreBtn);
form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = input.value;
  save('valueSearch', inputValue);
  if (inputValue.length === 0) {
    notice({
      text: 'Oh no, make a more correct request!',
    });
  }
  if (inputValue.length > 0) {
    gallery.innerHTML = '';
    pages = 1;
    searchImages(inputValue, pages);
    document.querySelector('.bnt').hidden = false;
  }
});

function loadMoreBtn() {
  const valueSearch = load('valueSearch');
  pages += 1;
  searchImages(valueSearch, pages);

  setTimeout(() => {
    bnt.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, 500);
}

// window.onload = () => {
//   const options = {
//     delay: 500,
//     rootMargin: '50px',
//     threshold: 0.5,
//   };

//   const onEntry = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const valueSearch = load('valueSearch');
//         pages += 1;
//         searchImages(valueSearch, pages);
//       }
//     });
//   };
//   const observer = new IntersectionObserver(onEntry, options);

//   observer.observe(boxBtn);
// };
// const options = {
//   delay: 500,
//   rootMargin: '50px',
//   threshold: 0.5,
// };

// const onEntry = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const valueSearch = load('valueSearch');
//       pages += 1;
//       searchImages(valueSearch, pages);
//     }
//   });
// };
// const observer = new IntersectionObserver(onEntry, options);

// observer.observe(boxBtn);
