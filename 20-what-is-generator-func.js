// What is Generator function ?

// In JavaScript, a generator function is a special kind of function that can pause and resume its execution.
// It’s defined with a function* (star after function) and uses the yield keyword.

function* myNumFunc() {
    yield 1;
    yield 2;
    yield 3;
}


const numSeq = myNumFunc() // always create variable then only sequence works...

console.log(numSeq.next())
console.log(numSeq.next().value)
console.log(numSeq.next())

console.log("- - - - - - - - - - - - - - - - - - - -")

// Example with while loop 

function* myIntsFunc() {
    let x = 1
    while (true) {
        yield x++
    }
}

const myInts = myIntsFunc()

console.log(myInts.next())
console.log(myInts.next())
console.log(myInts.next())
console.log(myInts.next())