
// var is function-scoped.It’s accessible anywhere inside the function where it’s declared, or globally if declared outside a function.
 
// global scope - true 
// function scope (local scope)  - true 
// block scope ( {} ) - false 



// - - - - - - var example with if else 

if (true) {
    var a = 10
}
console.log(a) // 10


// - - - - - - var exampel with function 
function exVar() {
    var b = 20
}
exVar()

// console.log(b) // undefined


// let is Block-scoped – accessible only inside the nearest {} block (e.g., inside a function, if statement, or loop).

// global scope - false
// function scope (local scope) - true
// block scope ( {} ) - true 



// - - - - - - let example with if else
if (true) {
    let c = 22
}

// console.log(c) // undefined 


// - - - - - -  let exmaple with function 
function exLet() {
    let d = 33    
}
exLet()

// console.log(d) // undefined



//const is Block-scoped – accessible only inside the nearest {} block (e.g., inside a function, if statement, or loop).

// global scope - false
// function scope (local scope) - true
// block scope ( {} ) - true 


// const example with if else 
if (true) {
    const e = 44
}
console.log(e) //undefined 


function exConst() {
    const f = 55
}
exConst()

console.log(f) // undefined 