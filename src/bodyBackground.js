async function getGiffy(weather) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Ct2SCnHe4VliC4ZpH4LzOkF3g67csISR&s=${weather}`, 
    { mode: 'cors' });
  const weatherGif = await response.json();
  console.log(weatherGif.data.images.original.url);
  setBodyBackground(`url(${weatherGif.data.images.original.url})`);
}

function setBodyBackground(weather) {
  const bodyBuilder = document.getElementById('body');
  bodyBuilder.style.backgroundImage = weather;
  console.log(bodyBuilder.style.backgroundImage);
}

export default getGiffy;