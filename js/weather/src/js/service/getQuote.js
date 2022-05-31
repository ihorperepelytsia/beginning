import axios from 'axios';
import { changeQuote } from '../component/changeQuote';
import { error } from '@pnotify/core';

const quoteApi = 'https://zenquotes.io/api/quotes';

async function getQuote() {
  try {
    const dataQuote = await axios.get(`${quoteApi}`);
    changeQuote(dataQuote.data);
  } catch (err) {
    error({
      text: `Ooops! ${err.message}`,
    });
  }
}

getQuote();
