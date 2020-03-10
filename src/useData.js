async function cityName(data) {
  const ctNm = document.getElementById('weather-top');
  ctNm.innerHTML = `
    <h1>${data.name}, ${data.sys.country}</h1>
    <h4>${new Date(data.dt * 1000).toUTCString()}</h4>
  `;
}

function temperature(weatherData) {
  const mainInfo = document.getElementById('weather-left');
  mainInfo.innerHTML = `
    <h2>${Math.round(weatherData.main.temp - 273.15)}°C</h2>
    <h2>${weatherData.weather[0].description}</h2>
  `;
}

function otherInfo(weatherData, windSpeed) {
  const otherInfoLines = document.getElementById('weather-right');
  otherInfoLines.innerHTML = `
    <h3>Felling: ${Math.round(weatherData.feels_like - 273.15)} °C</h3>
    <h3>Min: ${Math.round(weatherData.temp_min - 273.15)} °C</h3>
    <h3>Max: ${Math.round(weatherData.temp_max - 273.15)} °C</h3>
    <h3>Humidity: ${weatherData.humidity}</h3>
    <h3>Wind speed: ${windSpeed}</h3>
  `;
}

export { cityName, temperature, otherInfo };