let Api = { name: 'myname', age: 33 }
let URL = "https://jsonplaceholder.typicode.com/todos/1"

const getData = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve(Api) // reslove if api is working 
    // }, 3000)
    
    // setTimeout(() => {
    //     throw new Error
    // },5000)
})

getData.then((data) => {
    console.log("the data is: ", data)
}).catch((err) => {
    console.log("Error",err)
})


// Promise using Fetch 
// let myVar;
// fetch(URL)
//     .then(res => res.json())
//     .then(data => { myVar = data; console.log(data)})
//     .catch(err => console.log(err))


// console.log(myVar) // undefined 



