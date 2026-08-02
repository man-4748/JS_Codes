console.log(Number("122"));
console.log(Number("1a122"));
console.log(Number("0xd"));

let x = NaN;
console.log(x == NaN) ; //false
// Using inbuilt function
console.log(isNaN(x));

// but........
console.log(isNaN("string")); //true
// isNaN converts the incoming input to a Number
console.log(Number.isNaN("string"));
console.log(Number.isNaN(x));
// You can also implement this function yourself
//NaN is the only value in JavaScript that is not equal to itself.

if(typeof(x)=='number' && x!==x){
    console.log(true);
} else console.log(false);
