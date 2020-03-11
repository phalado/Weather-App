import getWeather from './getData';

function newCity() {
  const city = document.getElementById('getCity').value;
  document.getElementById('getCity').value = '';
  getWeather(city);
}

export default newCity;