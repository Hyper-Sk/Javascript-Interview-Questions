// Key Differences Summarized: - - - - - - - 

// What they iterate over: for...in iterates over property keys (strings) of objects; for...of iterates over values of iterable objects.
// Best use cases: for...in for object properties; for...of for array elements, string characters, Map values, Set values, etc.
// Behavior with arrays: for...in gives indices (as strings) and potentially inherited properties; for...of directly gives the element values.


// string 
let str = "sohail";

for (let z in str) {
    console.log(z) // returns index
}

for (let z of str) {
    console.log(z)  // return values 
}


console.log("- - - - - - - - - - - - - - - - - ")

// array 
let arr = [1, 2, 3, 4, 5]

for (let x of arr) {
    console.log(x) // return index 
}

for (let x of arr) {
    console.log(x) // return values
}

console.log("- - - - - - - - - - - - - - - - - ")

// object 
// we cannot use for-of on objects{}
let obj = { name: "name", age: 22, isStudent: true }

for (let i in obj) {
    console.log(i) // return key 
}

for (let i in obj) {
    console.log(obj[i]) // return values 
}


console.log("- - - - - - - - - - - - - - - - - ")

// Map  
// we cannot use for-in on Map()
let myMap = new Map()

myMap.set("name","sohail")
myMap.set("age",55)


console.log(myMap.get('name')) // sohail 
console.log(myMap.get('age')) // 55


for (let i of myMap) {
    console.log(i) // retuns array of [key ,value]
}

for (let [x, y] of myMap) {
    console.log(x,"->",y) // return key and value 
}

for (let i in myMap) {
    console.log(i) // doesn't return anything or throw error
}



// dont forget foreach 