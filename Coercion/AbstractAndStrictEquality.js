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










