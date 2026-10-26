// In JavaScript, currying is a technique where a function takes multiple arguments one at a time, returning a new function for each argument, until all arguments are provided.

// It transforms a function with multiple parameters into a sequence of functions with a single parameter.

// Basic function - - - 
function add(a, b) {
    return a + b
}

add(2, 3) // 5

// Currying - - -  
function addTwo(a) {
    return function (b) {
        return a+b
    }
}
const adding = addTwo(2) // returns a function waiting for another argument b
console.log(adding(3)) // 5

// Real use of Currrying - - - 

function greet(greeting) {
    return function (name) {
        return `${greeting} ${name}`
    }
}

const greeting = greet("hello")
console.log(greeting("Sohail"))