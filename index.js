// The page loads as Simple
// Simple as true and if HEX clicked changes to FALSE

//HEX min #000000 max #FFFFFF
//numbers from 0 to 9 + letters from a to f
//random number from 0 to 9
//random letter from a to f

const button = document.getElementById("btn");
const main = document.getElementById("main");
const colorValue = document.getElementById("color-value");
const simpleColors = ["#f15025", "red", "green", "rgba(133,122,200)"];
const simpleLink = document.getElementById("simple-colors-link");
const hexColorsLink = document.getElementById("hex-colors-link");
let isSimple = true;

function getRandomColorIndex() {
  return Math.floor(Math.random() * simpleColors.length);
}

//Handles the Click me Btn
button.addEventListener("click", () => {
  const randomNumber = getRandomColorIndex();
  if (!isSimple) {
    console.log("it's hex");
  } else {
    main.style.backgroundColor = simpleColors[randomNumber];
    colorValue.textContent = simpleColors[randomNumber];
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
