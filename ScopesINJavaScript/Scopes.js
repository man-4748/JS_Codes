// Scopes 

//1. Global scope (variable outside any block or function)
//2. Function  scope (accessiblity just inside a function)
let name = 'sanket';
function greet(){
    console.log("greetings", name);
    let x = 10;
    function test(){
        console.log("test",x);
    }
    test();
    console.log(x);
}
// greet and fun are present globally whereas test isn't
function fun(){
    console.log("have fun !", name);
}
greet();
fun();
// console.log(x); ReferenceError: x is not defined
/**
 * x is only accessible inside greet --> function scope
 * test is also only accessible inside greet 
 */
// name is not present insinde function 
// nor it is present inside a block -- (if/ for )block

//3. Block scope { variable accessible within a block}
// if-else block/ while block/for block

if(true){
    let x = 4;
    console.log(x);
}
// console.log(x); --> wont work bec x can be accessed only in the if block

// Raw block
{
    let a = 5;
    console.log(a);
}
