import './styles.css';
import axios from 'axios';
import markupOneCountry from './templates/country.hbs';
import '@pnotify/core/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

var debounce = require('lodash.debounce');

const BASEURL = 'https://restcountries.com/v2/name/';
const listCountres = document.querySelector('.list-country');
const input = document.querySelector('input');

input.addEventListener(
  'input',
  debounce(e => {
    const inputValue = e.target.value;
    if (inputValue.length > 0) {
      axios
        .get(`${BASEURL + inputValue}`)
        .then(res => {
          listCountry(res);
        })
        .catch(err =>
          error({ text: `With such letters, the country does not exist` }),
        );
    }
  }, 500),
);

function listCountry(countres) {
  const lengthArray = countres.data.length;
  if (lengthArray >= 2 && lengthArray <= 10) {
    clearListCountres();
    countres.data.map(e => {
      const markupCountry = `<li>${e.name}</li>`;
      listCountres.insertAdjacentHTML('beforeend', markupCountry);
    });
    return;
  }

  if (lengthArray === 1) {
    clearListCountres();
    listCountres.insertAdjacentHTML(
      'beforeend',
      markupOneCountry(countres.data),
    );
    return;
  }

  if (lengthArray > 11) {
    clearListCountres();
    error({ text: `A lot of countries, there are ${lengthArray} of them` });
    return;
  }

  error({ text: `Oops, something went wrong` });
}

function clearListCountres() {
  listCountres.innerHTML = '';
}
