const add = function(x, y) {
  let result = 0;
  result = x + y;
  return result;
};

const subtract = function(x, y) {
  let result = 0;
  result = x - y;
  return result;
};

const sum = function(myArr) {
	let result = 0;
  for (let i = 0; i < myArr.length; i++) {
    result += myArr[i];
  }
  return result;
};

const multiply = function(myArr) {
  let z = 1;
  for (let i = 0; i < myArr.length; i++) {
    z = z * myArr[i];
  }
  return z;
};

const power = function(x, y) {
  let result = 0;
  result = x ** y;
  return result;
};

const factorial = function(x) {
  let y = 1;
	for (let i = 1; i < x; i++) {
    y = y * (i+1);
  }
  return y;
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
