// Predict Output - 1
var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit"; 
    teachingAssistant = "vibhav"; // eligible for becoming auto-global
    console.log(teacher, teachingAssistant);
   
}

function gun() {
    console.log(subject);
    var subject = "JS";
    console.log(teacher);
}

console.log(teacher);
fun();

// Predict Output - 2
function fun(val){
    var student;
}
function run()
{
    console.log(student);
}
student = 10;
function gun()
{
    console.log(student)
    student = 100;
}

gun();
run();

// Predict Output - 3
gun();
function gun(){
    console.log("hi");
}
function gun() {
    console.log("hello");
}

// Predict Output - 4
var teacher = "Sanket";
function fun() {
    teacher = "pulkit";
    console.log("HI", teacher);
}

fun();
console.log(teacher);
