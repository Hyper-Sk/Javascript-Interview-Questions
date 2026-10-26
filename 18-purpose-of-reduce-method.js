// In JavaScript, the reduce() method is used to reduce an array to a single value by applying a function on each element accumulatively.

// It’s very powerful and can be used for sums, products, averages, objects, arrays, or any aggregation.



// example - - - - -  


let num = [1, 2, 3, 4, 5]

let sum = num.reduce((accumulator,currentVal) => {
    return currentVal + accumulator
}, 0)
// acc starts at 0 (initialValue).
// Adds each number to acc cumulatively.

console.log(sum)