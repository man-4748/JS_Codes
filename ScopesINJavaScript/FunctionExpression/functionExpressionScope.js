var x = function  fun(){
    console.log("fun called");
}

//console.log(x); [Function: fun]  x stores a function --> you can directly call it
x(); 
//gun(); ReferenceError: gun is not defined
//gun ---> not in global scope
// x ---> global scope & inside scope of x, we have gun();
