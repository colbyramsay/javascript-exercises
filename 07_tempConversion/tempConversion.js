const convertToCelsius = function(tempFar) {

  let tempCel = (tempFar - 32) * 5/9;
  let tempCelRounded = +tempCel.toFixed(1);

  return tempCelRounded;

};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
