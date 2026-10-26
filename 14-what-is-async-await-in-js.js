// What is Async and await in js ?

// async/await in JavaScript is syntactic sugar built on top of Promises.
// It allows you to write asynchronous (non-blocking) code that looks and behaves like synchronous code, making it easier to read and maintain.



// Baisc - - - - - - -
async function hello(){
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json()
    console.log(data)
}
// hello()



// example with try catch - - - - - - 
async function getData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await res.json()
    console.log(data)
    } catch (error) {
        console.log('unable to load API')
    }
}

getData()


