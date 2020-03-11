import getWeather from './getData';
import { getCityForm, changeButton } from './documentBottom';
import newCity from './newCity';
import tempSymbol from './tempSymbol';

function init() {
  getWeather('Juiz de Fora');

  const tmpSymbol = tempSymbol();

  document.getElementById('weather-bottom').appendChild(getCityForm());
  const button = document.createElement('div');
  button.setAttribute('id', 'changeTempButton');
  button.innerHTML = changeButton(tmpSymbol);
  document.getElementById('weather-bottom').appendChild(button);
  document.getElementById('submitCity').addEventListener('click', newCity);
  document.getElementById('changeTempButton').addEventListener('click', () => {
    tmpSymbol.setTmpSmbl();
    const city = document.getElementById('cityName').innerHTML.split(',')[0];
    getWeather(city, tmpSymbol.getTmpSmbl());
    document.getElementById('changeTempButton').innerHTML = changeButton(tmpSymbol);
  });
}

init();