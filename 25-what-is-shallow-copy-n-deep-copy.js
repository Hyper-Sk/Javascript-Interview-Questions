// 1️⃣ Shallow Copy - - - - - - - - - 

// Copies only the first level.
// If the object/array has nested objects, only the reference to those nested objects is copied, not the actual data.
// So, changes in nested objects affect both copies.

let person = { name: "john", age: 22,address:{city:"Hyderabad"} }
let details = { ...person } // copying 

// single level modification - - - - -  
details.age = 44 
console.log(person.age) // 22 | person age not changed because it is in (level 1)

// 2 or more level modification - - - - - 
details.address.city = "kareemnagar" 
console.log(person.address.city) // kareem nagar | person address -> city changed coz it is in (level 2)


//todo 2️⃣ Deep Copy - - - - - - - - - - 

// Copies everything, including nested objects.
// New object is completely independent of the original.
// Changes do not affect each other.


let obj = { name: 'name', address: { city: "moinabad" } }
let deepCopy = JSON.parse(JSON.stringify(obj)) // copying 
deepCopy.address.city = "hyderabad" 
console.log(obj.address.city) // moinabad | obj address->city not changed 
console.log(deepCopy.address.city) //  hyderbad | only deepCopy address->city changed 


// method 2 using struturedClone() - - - - 
let objCopy = structuredClone(obj)
console.log(objCopy)


