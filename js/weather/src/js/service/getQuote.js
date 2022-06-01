import axios from 'axios';
import { changeQuote } from '../component/changeQuote';
import { error } from '@pnotify/core';

async function getQuote() {
  try {
    const dataQuote = await axios.get(
      `https://zenquotes.io?api=quotes&key=239169433358fa1fa9f8be124a7fdb3d182281a2&option1=value&option2=value`,
    );
    console.log(dataQuote);
    changeQuote(dataQuote.data);
  } catch (err) {
    error({
      text: `Ooops! ${err.message}`,
    });
  }
}

getQuote();
