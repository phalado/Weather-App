import getWeather from './getData';
import { getCityForm, changeButton } from './documentBottom';

function init() {
  getWeather('Juiz de Fora');

  document.getElementById('weather-bottom').appendChild(getCityForm());
  document.getElementById('weather-bottom').appendChild(changeButton());
}

init();