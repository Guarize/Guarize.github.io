const rgbTarget = document.getElementById('rgb-color');
const colorsBalls = document.querySelectorAll('.ball');
const colorsContainer = document.getElementById('colors-container');
const answer = document.getElementById('answer');
const resetGameBtn = document.getElementById('reset-game');
const score = document.getElementById('score');

// Generates random RGB color
function generateRandomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

// Generates random color array
function randomColorArray() {
  const arr = [];
  for (let i = 0; i < 6; i += 1) {
    arr.push(generateRandomRGB());
  }
  return arr;
}

const arrColors = randomColorArray();

// Picks random 'selected' color and sets colors
window.onload = function setsColors() {
  for (let i = 0; i < colorsBalls.length; i += 1) {
    colorsBalls[i].style.backgroundColor = arrColors[i];
  }
  const randomIndex = Math.floor(Math.random() * 6);
  rgbTarget.innerText = colorsBalls[randomIndex].style.backgroundColor;
  return colorsBalls[randomIndex];
};

// Reset game
function reset() {
  const newColors = randomColorArray();

  for (let i = 0; i < colorsBalls.length; i += 1) {
    colorsBalls[i].style.backgroundColor = newColors[i];
  }

  const newIndex = Math.floor(Math.random() * 6);
  rgbTarget.innerText = colorsBalls[newIndex].style.backgroundColor;
  answer.innerHTML = 'Escolha uma cor';
}

resetGameBtn.addEventListener('click', reset);

// Checks if clicked color is correct
function game(event) {
  const clickedColor = event.target;
  if (
    clickedColor.style.backgroundColor === rgbTarget.innerText.toLowerCase()
  ) {
    score.innerHTML = Number(score.innerHTML) + 3;
    answer.innerText = 'Acertou!';
    setTimeout(reset, 1500);
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    setTimeout(reset, 1500);
  }
}

colorsContainer.addEventListener('click', game);
