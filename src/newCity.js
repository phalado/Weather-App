import getWeather from './getData';

function newCity(e) {
  e.preventDefault();
  const city = document.getElementById('getCity').value;
  document.getElementById('getCity').value = '';
  getWeather(city);
}

export default newCity;