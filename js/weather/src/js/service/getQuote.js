import axios from 'axios';
import { changeQuote } from '../component/changeQuote';
import { error } from '@pnotify/core';

const corsApi = 'https://cors-anywhere.herokuapp.com/';
const quoteApi = 'https://zenquotes.io/api/quotes';

async function getQuote() {
  try {
    const dataQuote = await axios.get(`${corsApi}${quoteApi}`);
    changeQuote(dataQuote.data);
  } catch (err) {
    error({
      text: `Ooops! ${err.message}`,
    });
  }
}

getQuote();
