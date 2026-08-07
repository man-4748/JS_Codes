var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    teachingAssistant = "vibhav"; // eligible for becoming auto-global
    console.log(teacher, teachingAssistant);
}

function gun() {
    // var student;
    // console.log(student);
    console.log(subject , typeof subject);
    var subject = "JS";
    console.log(teacher);
}

console.log(teacher);
fun();
gun();

