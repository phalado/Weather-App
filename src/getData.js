import { cityName, temperature, otherInfo } from './useData';
import getGiffy from './bodyBackground';

async function getWeather(cityId) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityId}&APPID=faafac92de2a320c7ded23b78c83f68d`,
    { mode: 'cors' });
  const weatherData = await response.json();

  console.log(weatherData);
  console.log(weatherData.name, weatherData.sys.country);
  console.log(Math.round(weatherData.main.temp - 273.15), 'C');
  console.log(weatherData.wind.speed);
  console.log(weatherData.weather[0].description);

  cityName(weatherData);
  temperature(weatherData);
  otherInfo(weatherData.main, weatherData.wind.speed);
  getGiffy(weatherData.weather[0].description);
}

export default getWeather;