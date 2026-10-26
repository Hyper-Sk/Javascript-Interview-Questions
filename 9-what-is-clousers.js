// What is clouser in Javascript ? 

// A closure in JavaScript is a function that “remembers” the variables from its outer (lexical) scope even after that outer function has finished executing.

// function and uses variables from the parent function, JavaScript keeps those variables alive for the inner function—even if the parent has returned.

// 1. Closure = function + its lexical scope.
// 2. Lets you access outer variables even after the outer function has returned.
// 3. Useful for private state, modules, and functional patterns.

// Closures are a core part of JavaScript’s lexical scoping and are used everywhere, from simple counters to frameworks and async code.


// example - - - - - - - - 


function outer(){
    let count = 0 // variable in lexible environment !!!
    
    function inner(){
        count++
        console.log(count)
    }

    return inner;
    // return inner();
}


const counter = outer()

counter()
counter()
counter()
// counter


// outer finishes executing but count is still accessible to inner because of the closure.



// - - - - - - - - - - Real use of clousers - - - - - - -

// Data Privacy / Encapsulation - - -

function bankAccount() {
    let balance = 0

    return {
        deposit(amount) { balance += amount },
        getBalance() {return balance}
    }

}
// balance is private; can’t be accessed directly.
const bank = bankAccount()

bank.deposit(100)
console.log(bank.getBalance())
bank.deposit(200)
console.log(bank.getBalance())
bank.deposit(30)
console.log(bank.getBalance())
