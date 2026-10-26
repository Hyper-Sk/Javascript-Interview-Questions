
// In JavaScript, call, apply, and bind are methods used to control the this context of a function. They are very useful when you want a function to act on a different object than the one it was originally defined on.

const person = {
    name: "Adam",
    age: 20
}

function order(arg1,arg2,arg3) {
    console.log(`got order from ${this.name}, the modification are ${arg1} and ${arg2 || "none"}...`)
}

// What it does: Invokes a function immediately, setting this to a specified object.
// Arguments: Pass arguments one by one.
order.call(person, "Extra Spice", "Extra topping")

// What it does: Similar to call(), but arguments are passed as an array.
// Invokes the function immediately with this set to the object.
order.apply(person, ["extra onion", "extra salad"])

// What it does: Creates a new function with this bound to the specified object.
// Does not invoke the function immediately. You can call it later.
let extraIngr = order.bind(person)
extraIngr("black pepper","more garlic")