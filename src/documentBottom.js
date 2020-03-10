function getCityForm() {
  const lines = document.createElement('div');
  lines.innerHTML = `
  <form class="form">
    <fieldset>
      <label for="city">Choose a city</label><br>
      <input type="text" id="getCity" required>
    </fieldset>
    <button id="submitCity" class="btn-black">Submit</button>
  </form>
  `;
  return lines;
}

function changeButton(symbol) {
  const lines = document.createElement('div');
  lines.innerHTML = `
    <button id="changeTempSymbol" class="btn-black">
      Change to ${symbol}
    </button>
  `;
  lines.setAttribute('id', 'changeTempButton');
  return lines;
}

export { getCityForm, changeButton };