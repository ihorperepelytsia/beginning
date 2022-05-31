import { show, hide } from '../utils/spinner';
import axios from 'axios';
import { BASE_URL, API_KEY } from './getRequestWeather';
import { toDayWeatherContent } from '../component/todayWeatherContent';
import { save } from '../utils/storage';
import { getImageBackground } from './getImageBackground';
import { refs } from '../component/refs';
import { getRequest5DaysWeather } from './getRequest5DaysWeather';
import { error } from '@pnotify/core';

refs.btnLocation.addEventListener('click', getCoords);

async function getCurrentPosition() {
  const options = {
    timeout: 10000,
  };
  const location = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
  return location;
}
function getCoords() {
  try {
    show();
    getCurrentPosition().then(location => {
      const lat = location.coords.latitude.toFixed(4);
      const lon = location.coords.longitude.toFixed(4);

      axios
        .get(
          `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
        )
        .then(res => {
          hide();
          toDayWeatherContent(res.data);
          save('locationCity', res.data.name);
          refs.moreInfo.innerHTML = '';
          refs.fiveDaysWeather.innerHTML = '';
          refs.diagramContainer.innerHTML = '';
          getImageBackground(res.data.name);
          getRequest5DaysWeather(res.data.name);
        });
    });
  } catch (err) {
    hide();
    error({
      text: `Ooops! ${err.message}`,
    });
  }
}
