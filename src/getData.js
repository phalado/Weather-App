import { cityName, temperature, otherInfo } from './useData';
import getGiffy from './bodyBackground';

async function getWeather(cityId, symbol = true) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityId}&APPID=faafac92de2a320c7ded23b78c83f68d`,
    { mode: 'cors' });
  const weatherData = await response.json();

  cityName(weatherData);
  temperature(weatherData, symbol);
  otherInfo(weatherData.main, weatherData.wind.speed, symbol);
  getGiffy(weatherData.weather[0].description);
}

export default getWeather;