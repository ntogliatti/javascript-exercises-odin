//const convertToCelsius = function(f) {
  //let numberC = (f - 32) * (5 / 9);
  //return numberC.toFixed(1);
//}

//const convertToFahrenheit = function(c) {
  //let numberF = c * 1.8 + 32;
  //return numberF.toFixed(1);
//};
//works but returns string
const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
