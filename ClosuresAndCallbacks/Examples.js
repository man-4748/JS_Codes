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

