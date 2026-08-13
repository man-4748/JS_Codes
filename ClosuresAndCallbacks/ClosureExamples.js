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
