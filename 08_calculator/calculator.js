const add = function(n1,n2) {
  answer = n1 + n2;
  return answer;
	
};

const subtract = function(n1,n2) {
	answer = n1 - n2;
  return answer;
};

const sum = function(numArray) {
  let i = 0;
  let answer = 0;
  while (i<numArray.length) {
  answer += numArray[i];
  i++
  }
  return answer;
	
};

const multiply = function(numArray) {
  let i = 0;
  let answer = 1;
  while (i<numArray.length) {
  answer *= numArray[i];
  i++
  }
  return answer;
};

const power = function(n1,n2) {
	let i = 0;
  let answer = 1;
  while (i<n2) {
  answer *= n1;
  i++
  }
  return answer;
};

const factorial = function(n1) {
  if (n1 !== 0) {
    let i = 2;
    let answer = 1;
    while (i<=n1) {
    answer *= i;
    i++
    }
    return answer;
  }

  else {
    return 1;
  }
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
