import axios from 'axios';
import { mapper } from './utils';
import { createMarkupImages } from './createMarkupImages';
import { notice, error } from '@pnotify/core';

const apiKey = '15725312-965e6abfe89225a1afd144b44';
const BASE_URL = 'https://pixabay.com/api/';

export const searchImages = async (searchValue, page = 1) => {
  try {
    await axios
      .get(`${BASE_URL}?q=${searchValue}&page=${page}&per_page=4&key=${apiKey}`)
      .then(res => {
        const resData = res.data.hits;
        if (resData.length > 0) {
          createMarkupImages(mapper(resData));
        }
        if (resData.length === 0) {
          notice({
            text: 'По вашему запросу ничего не найдено',
          });
        }
      });
  } catch (err) {
    error({
      text: `Ooops! ${err.message}`,
    });
  }
};
