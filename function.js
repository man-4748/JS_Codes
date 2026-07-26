// function to check if num is even or odd
function isEven(num){
    if(num%2==0) return true;
    else return false;
}
//let x = 3321;
// if(isEven(x)) console.log("EVEN");
// else console.log("ODD");

for(let i=1;i<=20;i++){
    if(isEven(i)) console.log(i, " Even ");
    else console.log(i, ' Odd');
}
// DRY Principle : Don't repeat yourself
let x = 10;
let y = 20;
let z = 51;

if(isEven(x)){
    console.log("X is even");
}else console.log("x is odd");

if(isEven(y)){
    console.log("y is even");
}else console.log("Y is odd");

if(isEven(z)){
    console.log("z is even");
}else console.log("z is odd");


// reduces code redundancy 
//--> otherwise we would have to write the same logic 3 times for x y and z

function isEvenOrOdd(num){
    if(num%2==0) return "Even";
    else return "Odd";
}

let a = 10, b = 5, c = -8;

console.log('a is ', isEvenOrOdd(a));
console.log('b is ', isEvenOrOdd(b));
console.log('c is ', isEvenOrOdd(c));
