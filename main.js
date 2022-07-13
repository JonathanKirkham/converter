let userInput = document.getElementById("celcius-result");

let btn = document.getElementById("convert-btn");
btn.addEventListener("click", convert);

let enter = document.getElementById("celcius-result");
enter.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    convert();
  } else {
    return false;
  }
});

function getUserInput() {
  console.log(Number(userInput.value));
}

function checkInput() {
  if (isNaN(userInput.value)) {
    alert(`ERROR... ${userInput.value} is not a valid integer!`);
    window.location.reload();
  }
}

function getFahrenheit() {
  let fahrenheit = (Number(userInput.value) * 9) / 5 + 32;
  document.getElementById(
    "fahrenheit-result"
  ).innerHTML = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  return fahrenheit;
}

function getKelvin() {
  let kelvin = Number(userInput.value) + 273.15;
  document.getElementById("kelvin-result").innerHTML = `Kelvin: ${kelvin}°K`;
  return kelvin;
}

function getRankine() {
  let rankine = 1.8 * Number(userInput.value) + 491.67;
  document.getElementById(
    "rankine-result"
  ).innerHTML = `Rankine: ${rankine.toFixed(2)}°R`;
  return rankine;
}

function getDelisle() {
  let delisle = 100 - (Number(userInput.value) * 3) / 2;
  document.getElementById(
    "delisle-result"
  ).innerHTML = `Delisle: ${delisle}°De`;
  return delisle;
}

function getNewton() {
  let newton = (Number(userInput.value) * 33) / 100;
  document.getElementById("newton-result").innerHTML = `Newton: ${newton}°N`;
  return newton;
}

function getReaumur() {
  let reaumur = (Number(userInput.value) * 4) / 5;
  document.getElementById(
    "reaumur-result"
  ).innerHTML = `Réaumur: ${reaumur}°Ré`;
  return reaumur;
}

function getRomer() {
  const romer = (Number(userInput.value) * 21) / 40 + 7.5;
  document.getElementById("romer-result").innerHTML = `Rømer: ${romer.toFixed(
    2
  )}°Rø`;
  return romer;
}

function getLeiden() {
  const leiden = Number(userInput.value) + 253;
  document.getElementById("leiden-result").innerHTML = `Leiden: ${leiden}°L`;
  return leiden;
}

function getWedgewoodModern() {
  const wedgewoodModern = Number(userInput.value) / 24.857191 - 10.821818;
  document.getElementById(
    "wedgewood-modern-result"
  ).innerHTML = `WedgeW: ${wedgewoodModern.toFixed(3)}°W`;
  return wedgewoodModern;
}

function getBinary() {
  const binary = Number(userInput.value).toString(2);
  document.getElementById("binary-result").innerHTML = `Binary: 0b${binary}`;
  return binary;
}

function getOctal() {
  let octal = Number(userInput.value).toString(8);
  document.getElementById("octal-result").innerHTML = `Octal: 0o${octal}`;
}

function getHex() {
  const hexadecimal = Number(userInput.value).toString(16);
  document.getElementById("hex-result").innerHTML = `Hex: 0x${hexadecimal}`;
  return hexadecimal;
}

function convert() {
  getUserInput();
  checkInput();
  getFahrenheit();
  getKelvin();
  getRankine();
  getDelisle();
  getNewton();
  getReaumur();
  getRomer();
  getLeiden();
  getWedgewoodModern();
  getBinary();
  getOctal();
  getHex();
}
convert();
