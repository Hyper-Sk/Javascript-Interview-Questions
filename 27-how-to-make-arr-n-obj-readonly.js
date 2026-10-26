// Prevents adding, deleting, or changing properties/elements.
// But it’s shallow → nested objects/arrays can still be changed.

let arr = [1, 2, 3,[4,5]]
// array - - - - - - -
Object.freeze(arr) // making arr readonly but only single level
console.log(arr)
arr[0] = 50 // it won't change 
console.log(arr) // [1, 2, 3,[4,5]]

arr[3][0] = 44
console.log(arr) // [1, 2, 3,[44,5]]  |  nested arr/obj can be change.

// Object - - - - - - 
let person = { name: "name", age: 33, address:{city:"hyd"} }
Object.freeze(person) // making person readonly but only single level 
console.log(person) // { name: "name", age: 33, address:{city:"hyd"} }
person.name = "sohail"
console.log(person) // { name: "name", age: 33, address:{city:"hyd"} }
person.address.city = "Hyderabad";
console.log(person) // { name: "name", age: 33, address:{city:"Hyderabad"} }

