// What is IIFE ?
// In JavaScript, an IIFE stands for Immediately Invoked Function Expression.
// It’s a function that runs as soon as it is defined. This is useful to create a private scope and avoid polluting the global namespace.

// - - - - - - example

// Normal function
function greet() {
  console.log("hello");
}
greet();
    
    
// IIFE
(function(){
    console.log("IFFE runs");
})();
