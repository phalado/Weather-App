function setBodyBackground(weather) {
  const bodyBuilder = document.getElementById('body');
  bodyBuilder.style.backgroundImage = weather;
}

async function getGiffy(weather) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=Ct2SCnHe4VliC4ZpH4LzOkF3g67csISR&s=${weather}`
  const response = await fetch(url, { mode: 'cors' });
  const weatherGif = await response.json();
  setBodyBackground(`url(${weatherGif.data.images.original.url})`);
}

export default getGiffy;