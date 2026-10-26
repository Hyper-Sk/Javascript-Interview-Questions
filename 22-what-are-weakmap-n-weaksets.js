// A WeakMap is like a normal Map, but with two special rules:

// 1. Keys must be objects (not primitives like string, number, etc).
// 2. Keys are weakly referenced, meaning if there are no other references to the key object, it can be garbage collected (removed automatically from memory).

// ⚡ Use case: Storing private or temporary data for objects without preventing them from being cleaned up.

const wm = new WeakMap();

let obj = { name: "sohail", age: 44 }

// setting
wm.set(obj, "sohail's object") 

//getting 
console.log(wm.get(obj)) // sohail's object.

obj = null 

// reference undefined 
console.log(wm.get(obj)) // undefined

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// A WeakSet is like a normal Set, but:

// It can only store objects (no strings, numbers, etc).
// Objects inside are weakly referenced, so if the object is no longer used, it can be garbage collected.


const ws = new WeakSet()

let person = { name: "rizwan", age :24}

// adding object reference 
ws.add(person)

// checking is exsist 
console.log(ws.has(person)) // true

person = null 

// false Reference
console.log(ws.has(person)) // false



