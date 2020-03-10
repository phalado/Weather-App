async function getWeather(cityId) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=faafac92de2a320c7ded23b78c83f68d`, {mode: 'cors'});
  const weatherData = await response.json();
  
  cityName(weatherData.city.name, weatherData.city.country);
  temperature(weatherData.list[0]);
  otherInfo(weatherData.list[0].main, weatherData.list[0].wind.speed);

  console.log(weatherData.city.name, weatherData.city.country);
  console.log(Math.round(weatherData.list[0].main.temp - 273.15), 'C');
  console.log(weatherData.list[0].wind.speed);
  console.log(weatherData.list[0].weather[0].description);
  console.log(weatherData);
}

function cityName(name, country) {
  const ctNm = document.createElement('h1');
  ctNm.innerHTML = name + ', ' + country;
  document.getElementById('weather-top').appendChild(ctNm);
}

function temperature(weatherData) {
  const mainInfo = document.getElementById('weather-left');
  mainInfo.innerHTML =  `
    <h2>${Math.round(weatherData.main.temp - 275.15)}°C</h2>
    <h2>${weatherData.weather[0].description}</h2>
  `
}

function otherInfo(weatherData, windSpeed) {
  const otherInfoLines = document.getElementById('weather-right');
  otherInfoLines.innerHTML = `
    <h3>Felling: ${Math.round(weatherData.feels_like - 273.15)} °C</h3>
    <h3>Min: ${Math.round(weatherData.temp_min - 273.15)} °C</h3>
    <h3>Max: ${Math.round(weatherData.temp_max - 273.15)} °C</h3>
    <h3>Humidity: ${weatherData.humidity}</h3>
    <h3>Wind speed: ${windSpeed}</h3>
  `
}

async function getFile() {
  const response = await fetch("data/city.list.json");
  const cityData = await response.json();
  console.log(cityData);
}

function init() {
  getWeather(3459504);
  getFile();
}

init();