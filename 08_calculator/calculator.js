const add = function(num1, num2) {
  let result = 0;
  result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
  let result = 0;
  result = num1 - num2;
  return result;
};

const sum = function(myArr) {
	let result = 0;
  for (let i = 0; i <= myArr.length-1; i++) {
    result += myArr[i];
  }
  return result;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
