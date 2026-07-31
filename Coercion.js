// Coercion
//  Coercion is basically implicit typecasting/type conversion done by the language internally.

// Abstract operations:
// ToNumber
// Application - subtraction operator first converts left operand and right operand to ToNumber and then evaluate it
console.log(2-null); // 2-null --> 2-0 -->2
console.log(2-undefined); // 2 - undefined --> 2-NaN --> NaN
console.log(10 - true);   // true --> 1 : 10-1=9

console.log(2-'2');   // 2 - '2' --> 2 - 2 = 0
console.log(10-'10a'); // cant convert '10a' to a valid no --> NaN

console.log(1-'0xa');
/**
 * 0xa --> represents hexa decimal no system 0xa == 10
 * hence 0xa can be converted into a valid no --> hence it becomes 1 - 10 = -9
 */

// ToNumber(obj)--> ToPrimitive(obj,hint)-->OrdinaryToPrimitive(obj,hint)--> returns primitive evaluate
// ToNumber(obj)--> ToNumber(primitive value)

// let obj= {
//     toString (){
//         return "hey";
//     }
    
// };
// console.log(obj.toString());
//[object Object] --> by default it returns this

let o = {
    x:10,y:23,
    valueOf(){
        return 111;
    }
};
console.log(o.valueOf());
// value of returns same object by default

let obj  = {};
console.log(2 - obj);    //NaN
// hint ----> number
// obj.valueOf() --> object  {not primitive} ---> check toString
// obj.toString()--> [object object] {string} --> return 
// convert this string toNumber( ) ---> NaN (INVALID Number)

let marks = {
    x: 25
}
console.log(50 - marks);

let obj1 = {
    x:45,
    valueOf(){
        return 99;
    }
};
console.log(100 - obj1);

let obj3 = {
    x:22,
    toString(){
        return "22";
    }
}

console.log(25 - obj3);
/**
 * obj3.toValue() --> object
 * obj3.toString()--> "22" (string == primitive) --> return primitive value = "22"
 * ToNumber("22") --> 22 
 * 25 - 22 = 3
 */

let obj4 = {
    toString(){
        return {x:8};
    }
}

console.log(1 - obj4);
//TypeError : obj4.toString() --> returns an object













