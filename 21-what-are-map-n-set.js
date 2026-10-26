// 🔹 Map in JavaScript

// A Map is a collection of key–value pairs.
// It is similar to an object, but with more powerful features.

// ✅ Features of Map - - - - -
// Keys can be any type (object, number, string, boolean, etc).
// Keeps keys in insertion order.
// Easy to get the size with .size.
// Provides built-in methods like .set(), .get(), .has(), .delete(), .clear().


let myMap = new Map();

myMap.set("name", "Alice")
myMap.set("age", 22)
myMap.set("isStudent",true)


console.log(myMap) //{all key and values}

console.log(myMap.get("name")) // Alice
console.log(myMap.get("age")) // 22
console.log(myMap.get('isStudent')) // true

console.log(myMap.has('name')) // true 

// iterate 
for(let [x, y] of myMap) {
    console.log(x + " = " + y)
}

console.log("- - - - - - - - - - - - - - - - - - - -")


// 🔹 Set in JavaScript - - - - - 

// A Set is a collection of unique values.
// It automatically removes duplicates.

// ✅ Features of Set - - - - - -

// Stores only unique values.
// Values can be any type.
// Keeps values in insertion order.
// Has methods like .add(), .has(), .delete(), .clear().


let mySet = new Set()

mySet.add(33)
mySet.add(31)
mySet.add(32)

console.log(mySet) // { 33, 31, 32 }
mySet.delete(33)
console.log(mySet) // { 31, 32 }
console.log(mySet.has(31)) // true
console.log(mySet.size) // 2

// iterating 

for (let i of mySet) {
    console.log(i) // returns values 
}