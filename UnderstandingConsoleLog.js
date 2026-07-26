// Debugging functions

/**
 * Why we are doing return 
 * Can we not use console.log() ?
 **/ 


// WHAT IS console.log()?
//---> prints value on the console
// console.log is also a function


// console---> object
// log--> key

/** console is an object
 * console ={
 *          log:function(){}
 *         // ...........
 * }
 */

// if console.log is a function , does it return any value?
// it returns undefined.....

x = console.log("dsa"); // dsa is input value given to the function and
// this function prints the given input value on the screen and 
//and returns undefined no matter what the input was.

console.log(x);      // undefined



// Function will always return something , it is upto the user if we wanna store it or do something with it or leave it

// We use return in function so that we can store that value and use it somewhere else.

// What if i dont return anything in the function---> In js, if you don't manually return something, it automatically returns undefined.

function greet(name){
    console.log("Hello", name, "WELCOME TO JAVASCRIPT");
    
}

let result = greet("Dharmendra");
console.log(result);
// greet returns undefined

function greeting(name){
    console.log("Hello", name, "WELCOME TO JAVASCRIPT");
    return "Welcomed the user";
}

let res = greeting("Narendra");
console.log(res);
// here the function is returning "Welcomed the user"
