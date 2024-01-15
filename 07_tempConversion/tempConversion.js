const convertToCelsius = function(tempFar) {

  let tempCel = (tempFar - 32) * 5/9;
  let tempCelRounded = +tempCel.toFixed(1);

  return tempCelRounded;

};

const convertToFahrenheit = function(tempCel) {

  let tempFar = (tempCel * 9/5 + 32);
  let tempFarRounded = +tempFar.toFixed(1);

  return tempFarRounded;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
