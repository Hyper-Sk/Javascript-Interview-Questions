// concat method
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let merged = arr1.concat(arr2)
console.log(merged) // [1,2,3,4,5,6]


// map method
let num = [1, 2, 3]
let doubleNum = num.map(item => item * 2)
console.log(doubleNum) // [2,4,6]


// filter method 
let num2 = [1,2,3,4,5,6]
let odd = num2.filter(item => item%2 === 1)
console.log(odd) // [1,3,5]


// slice method 
let cake = [1, 2, 3, 4, 5, 6]
let halfCake = cake.slice(0, 3)
console.log(halfCake) // [1,2,3]


// flatmap method
let myName = ['sk', 'sohel']
let flatName = myName.flatMap(word => word.split(''))
console.log(flatName) 

// it will creat this :
// [['s', 'k'], ['s', 'o', 'h', 'e', 'l']] 
// to this 
// ['s', 'k', 's', 'o', 'h', 'e', 'l']



// Array.from method
let str = 'abc'
let arrOfStr = Array.from(str)
console.log(arrOfStr) // ['a','b','c']



// Array.of method 
let myArr = Array.of(1, 2, true, {})
console.log(myArr) // [1,2,true,{}]


// ... spread method
let bio = ['i am student']
let me = [...bio, 'my name is sohail']

console.log(me) // ['i am student', 'my name is sohail']