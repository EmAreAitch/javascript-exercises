const ftoc = function(ftemp) {
  
  celsius= Math.round(((ftemp - 32) * 5/9)* 10) / 10;
  return celsius;

};

const ctof = function(ctemp) {
  fahrenheit= Math.round(((ctemp * 9/5) + 32)* 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
