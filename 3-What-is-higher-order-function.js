// A higher-order function (HOF) in JavaScript is a function that does at least one of these:

// 1. Takes another function as an argument (a callback).
// 2. Returns a function as its result.

// - - - - - - -Examples :
// 1️⃣ Taking a Function as an Argument
// Functions like map, filter, and forEach are classic HOFs:

const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2); // map takes a callback
console.log(doubled); // [2, 4, 6]

// 2️⃣ Returning a Function
// You can create functions that produce other functions:

function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
