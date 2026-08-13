//Example1:

function toDo(task){
    setTimeout(function fun(){
        console.log( task, "completed");
    },2000)
}
console.log("Starting");
toDo("Assignments");
console.log("Ending");


//Example2:

function ToDo(task){
    console.log("Starting ToDo");
    setTimeout(function fun(){
        console.log( task, "completed");
    },5000)
    console.log("Ending ToDo");
}
console.log("Start");
ToDo("Assignments");
console.log("End");
/*

Start
Starting ToDo
Ending ToDo
End
Assignments completed

This outputjustifies thaat the function fun is executed after ToDo is over --> since [
Starting ToDo] and [Ending ToDo] are already printed , how does fun havw access to"task" variable.
*/
//Example3:
function a(name){
    return function b(){
        console.log(name);
    }
}

let x = a("Sanket");
console.log(x);
x();
//Calling x() invokes function b.
//Function b looks for the name variable in its own scope, fails to find it;
// So it  looks up into its closure scope, where it retrieves "Sanket" and prints it to the console.

// Predict output:
function fun(task1 , task2){
    task1 = "paras"
    setTimeout(function gun(){
        console.log("completed" , task1);

    }, 2000)
    task1 = task2 ;
    task2 = "assign";
}

fun("12", "34");





const add = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        console.log(counter);
        return counter;
    }
    
})();
add();
add();
add();
/*
1
2      --> why is output 1 2 3
3
The IIFE Execution (Runs only ONCE at initialization):

As soon as JS reads this code, the outer anonymous function executes immediately.
It initializes a local variable let counter = 0.
It returns the inner function and assigns it to the variable add.
The outer function finishes executing and leaves the stack, but counter is not garbage collected because the returned inner function forms a closure around it.

add is not equal to the outer function; add is equal to the inner function:

counter is not reset to 0 on each call to add() because counter = 0 was inside the outer IIFE, 
which ran only once during assignment. 
Each time you invoke add(), you are only running the inner function,
which references and mutates that persistent, private counter variable.
