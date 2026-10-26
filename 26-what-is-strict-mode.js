// "use strict" is a directive (special instruction) that tells JavaScript to run in “Strict Mode”.
// It makes JavaScript code more secure, cleaner, and less error-prone.

// "use strict";
// cannot assign variable without var,let or const - - - - -
// x = 10
// console.log(x) // x is not defined

// you cannot delete variable in strict mode - - - - - -
let x = 10;
// delete x; // Error

// cannot use reserved keywords. (protected) - - - - - - -
// let public = 6
// let yield = 8
// console.log(yield)

// doesn't allow duplicate parameter - - - - - - - - -
// function sum(a, a) { // Error
//     return a + a;
// }
// console.log(sum(1,4))

// this is undefined  - - - - - - - - - - 
// In non-strict mode, this inside a function defaults to the global object (window in browsers).
// In strict mode, this will be undefined.
function test() {
  // console.log(this); // undefined
}
test();

// making strict function - - - - - - - - - -
function strictFunc() {
  "use strict";
//   y = 10;
  // console.log(y)
}
strictFunc();


let obj;
Object.defineProperty(obj, "name", {})

console.log(obj)