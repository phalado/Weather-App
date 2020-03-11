async function cityName(data) {
  const ctNm = document.getElementById('weather-top');
  ctNm.innerHTML = `
    <h1 id="cityName">${data.name}, ${data.sys.country}</h1>
    <h4>${new Date(data.dt * 1000).toUTCString()}</h4>
  `;
}

function tempCelsius(value) {
  return `${Math.round(value - 273.15)}°C`;
}

function tempFar(value) {
  return `${Math.round((((value - 273.15) * 9) / 5) + 32)}°F`;
}

function temperature(weatherData, symbol = true) {
  const mainInfo = document.getElementById('weather-left');
  mainInfo.innerHTML = `
    <h2>${symbol ? tempCelsius(weatherData.main.temp) : tempFar(weatherData.main.temp)}</h2>
    <h2>${weatherData.weather[0].description}</h2>
    <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">
  `;
}

function otherInfo(weatherData, windSpeed, symbol = true) {
  const otherInfoLines = document.getElementById('weather-right');
  otherInfoLines.innerHTML = `
    <h3>Felling: ${symbol ? tempCelsius(weatherData.feels_like) : tempFar(weatherData.feels_like)}</h3>
    <h3>Min: ${symbol ? tempCelsius(weatherData.temp_min) : tempFar(weatherData.temp_min)}</h3>
    <h3>Max: ${symbol ? tempCelsius(weatherData.temp_max) : tempFar(weatherData.temp_max)}</h3>
    <h3>Humidity: ${weatherData.humidity}%</h3>
    <h3>Wind speed: ${windSpeed}</h3>
  `;
}

export { cityName, temperature, otherInfo };