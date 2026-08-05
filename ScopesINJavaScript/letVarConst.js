
{
    var p = 10;       // here p has global scope
    console.log(p);
}
console.log(p);

function fun(){
    console.log(p1)    // Why we get undefined ---> LEXICAL SCOPING
    var p1 = 10;       // here p1 has function scope
    console.log(p1);
}

fun();
// undefined       -----> LEXICAL SCOPING
// 10
{
    var v = 8;  // becomes global due to var --> because var whenever initialised outside of function gives it global scope
}
console.log(v);
//*** var --> if written outside a function , gives the variable global scope***

if(true){
    var z = 10;
}

if(false){
    var d = 11;
}

console.log(z);     // 10
console.log(d);     // undefined --> Lexical scoping

// read more about var on mdn 


{
    let x = 2;
    console.log(x);

}
// console.log(x); Error: x is not defined 
// Let ---> Block scope   --> accessible only inside if/else or raw block or function block;

function Letf(){
    //console.log(x); Cannot access 'x' before initialization
    let x = 1;
    console.log(x);
}

function Varf(){
    console.log(v);  //undefined
    var v = 1;
    console.log(v);
}
Letf();   // point to be noted if you don't call this function , rest of code gets executed without any error ---> somewhat js does read code twice
Varf();
// console.log(x);
// console.log(v);
// both will give error
