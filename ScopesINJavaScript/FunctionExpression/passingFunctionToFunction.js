// Function declaration
function greet() {
    console.log("Hello");
}

// Function expression      
// Function expression = a function that is created as part of an expression and can be treated like a value.
const greet = function () {
    console.log("Hello");     // The function is created as a value and assigned to greet. 
};

// Passing function as an argument to another function 
function  fun(){
    console.log("fun is called");
}// this is a function definition ---> whenever you start a piece of code with Keyword "function".

function gun(fn){
    console.log("Inside gun");
    fn();
    console.log("Leaving gun");
   
}
gun(function (){// this is a function expression ---> whenever we don't start writing the code with Keyword function.
     //console.trace();// stack trace
    console.log("New function passed.")
});

//gun(fun);
