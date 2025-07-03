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
let isSimple = true;

function getRandomColorIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomHexColor() {
  const hexLength = 6;
  let hexColor = "";
  for (let i = 1; i <= hexLength; i++) {
    hexColor += hexColorValues[getRandomColorIndex(hexColorValues)];
  }
  return `#${hexColor}`;
}

//Updates the bacground & color name
function updateBackground(color) {
  main.style.backgroundColor = color;
  colorValue.textContent = color;
}

//Handles the Click me Btn
button.addEventListener("click", () => {
  const color = isSimple
    ? simpleColors[getRandomColorIndex(simpleColors)]
    : generateRandomHexColor();

  return updateBackground(color);
});

//Handle link clicks
document.addEventListener("click", (e) => {
  const simpleModeId = "simple-colors-link";
  const hexModeId = "hex-colors-link";
  if (e.target.id === simpleModeId) {
    isSimple = true;
  } else if (e.target.id === hexModeId) {
    isSimple = false;
  }
});
