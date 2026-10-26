// In JavaScript, the event loop is a mechanism that allows the language to handle asynchronous operations (like timers, network requests, and events) despite being single-threaded.

// It ensures that JavaScript can run one task at a time while still responding to events, promises, and callbacks.


// How It Works (Simplified) - - - - 
// Call Stack - - -
// JavaScript executes functions line by line and keeps track in the call stack.
// If a function is running, it blocks the stack until it finishes.

// Web APIs / Background Tasks - - - 
// Async tasks like setTimeout, fetch, or DOM events are handled outside the stack in browser APIs.

// Callback Queue / Task Queue - - -
// When an async task finishes, its callback is placed in the queue.

// Event Loop - - - 
// Continuously checks:
// Is the call stack empty? ✅

// If yes, take the first callback from the queue and push it to the stack to execute.
// Repeats forever.


// example - - - - - -  


console.log("Start");

setTimeout(() => {
  console.log("middle");
}, 0);

console.log("End");


// Start -> End -> middle