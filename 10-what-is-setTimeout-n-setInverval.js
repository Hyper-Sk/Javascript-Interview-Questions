// What is ettimeout and setinterval ?

// In JavaScript, setTimeout and setInterval are async javascript timer functions that schedule code to run later or repeatedly.


// example - - - - - - 

// setTimeout
console.log('file executed ')


const timeId = setTimeout(() => {
    console.log('Hello and whatsapp !!! after 2 sec')    
}, 2000)

clearTimeout(timeId)




// setInterval 

const intervalId = setInterval(() => {
        console.log('Interval every 1 sec')
}, 1000)


clearInterval(intervalId)