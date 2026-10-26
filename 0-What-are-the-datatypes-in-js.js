// there are 2 types of datatype primitive and non-primitive.

// - - - - primitive datatype - - - - - 
String :  "Name", 'anme', `name`
number =  (1,1.1,NaN,Infinity,-Infinity)
Boolean = (true,false)
Symbol = Symbol("abc") 
// BigInt(big numaric value and end with n)

// BigInt exmaple 
let num = 13823192837290138129731289n;


// empty values 
undefined 
null 

// what is Symbol : 

// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.

let a = Symbol("Foo") 
let b = Symbol("Foo")
console.log(a === b) // false



// - - - - - -  non-primitive datatype - - - - - 

// function()
// array[]
// object{ key:value}

// -  - - - - - - -  value behavious - - - - - - - - - -

// value which are consider false
'', "" //string with (no space)
0 
0n
null 
undefined


// values which are consider true 
" " // string with space
"0"
// []
// {}