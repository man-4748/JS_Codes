// Abstract equality
// it also does check type in first step 
console.log(null == undefined); //true

// Strict equality
console.log(null === undefined); //false

// x == y:
console.log(false == "0");
/**
 * false --> ToNumber --> 0 : compare again : x == y {x->0, y->"0"}
 * "0" --> ToNumber --> 0 : compare again x == y (0==0) which is true
 */

console.log((null==undefined)==true);//true
//             true          == true  --->convert ToNumber
//             1             == 1

let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2); // false ----> no rules about object to object comparison in docs ---> it returns false

console.log(null == false);
/** y --> boolean --> ToNumber --> 0
 * null == 0 -----> no rules in docs for this ---> return false
 */

console.log("NaN" === NaN); // types are different  ----> return false

console.log(NaN === NaN) // false

console.log(0 === -0) // false

// x == y 
// y is an object -->  x == ToPrimitive(y)
let obj ={
    x:10,
    valueOf(){
        return 100;
    }
}
//ToPrimitive(obj) -->OrdinaryToPrimitive(obj,hint) --> valueOf --> return 100 (non object)
console.log(99 == obj);   // false
console.log(100 == obj);  // true

// Strict equality

let obj1 = {x:10};
let obj2 = {x:10};
let obj3 = {y:10};
console.log(obj1 === obj2);     // objects are present at different memory locations
console.log(obj1 === obj3);
console.log(obj2 === obj3);
console.log(obj1 === obj1);     // true

console.log({a:10}==={a:10});  // these both objects will be created at different locations in the memory




