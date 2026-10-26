// In JavaScript, try...catch is used to handle runtime errors (exceptions) gracefully so that your program doesn’t crash when something goes wrong.

api = {
  name: "name",
  age: 3,
};

// Basic Example - - - - - - - - - 
try {
  console.log(api);
  console.log("success");
} catch (error) {
  console.log("error");
}

// example with Fetch - - - - - - - - 
async function fetchData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}
