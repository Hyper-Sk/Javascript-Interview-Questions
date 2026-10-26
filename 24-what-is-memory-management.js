// 🔹 Memory Management in JavaScript

// JavaScript is a high-level language — it manages memory for you automatically.
// You don’t usually allocate (malloc) or free (free) memory like in C/C++.

// Allocate (Memory allocation)
// When you create variables, objects, arrays, functions, etc.

num = 10; // number allocated
obj = { name: "name" }; // object allocated
arr = [1]; //array allocated

// Use (Read / Write)
// You read or update the variable.

let a = 10; // write
console.log(a); // read

// Release (Garbage Collection)
// When a value is no longer reachable, JS removes it automatically.

let obj = null; // garbage collection
// now object is "unreachable"
// GC will clean it up later

// 2️⃣ Garbage Collection (GC)

// JavaScript uses a Garbage Collector to automatically free memory.
// The main algorithm is “mark and sweep”:
// The runtime marks all values that are still reachable (from global scope, functions, closures).
// Anything not marked is swept away (memory released).

function test() {
  let user = { name: "Alice" };
}
test();
// After function ends, "user" is unreachable → garbage collected
