//HEX min #000000 max #FFFFFF
//numbers from 0 to 9 + letters from a to f
//random number from 0 to 9
//random letter from a to f

const simpleColors = ["#f15025", "red", "green", "rgba(133,122,200)"];
const hexColorValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const button = document.getElementById("btn");
const main = document.getElementById("main");
const colorValue = document.getElementById("color-value");
const simpleLink = document.getElementById("simple-colors-link");
const hexColorsLink = document.getElementById("hex-colors-link");
let isSimple = true;

function getRandomColorIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getHexValue() {
  let hexColor = 0;
  for (let i = 1; i <= 6; i++) {
    hexColor += i;
  }
  return hexColor;
}

//Handles the Click me Btn
button.addEventListener("click", () => {
  getHexValue();
  const randomNumberSimple = getRandomColorIndex(simpleColors);
  const randomNumberHex = getRandomColorIndex(hexColorValues);
  if (isSimple) {
    main.style.backgroundColor = simpleColors[randomNumberSimple];
    colorValue.textContent = simpleColors[randomNumberSimple];
  } else {
    main.style.backgroundColor = hexColorValues[randomNumberHex];
    colorValue.textContent = `#${hexColorValues[randomNumberHex]}`;
  }
});

//Handles the Simple link click
simpleLink.addEventListener("click", function () {
  isSimple = true;
});

// Handles the Hex link click
hexColorsLink.addEventListener("click", function () {
  isSimple = false;
});
