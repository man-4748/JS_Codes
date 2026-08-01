/**
 * EXAMPLE: [] == ![]console.log([] == ![]); 
 * Evaluates to: true 
 */

// Step 1: Logical NOT (!) operator has higher precedence than Abstract Equality (==)
// - [] is an Object, and all Objects in JS are truthy -> Boolean([]) evaluates to true
// - ![] becomes !true, which evaluates to boolean `false`
// Expression becomes: [] == false

// Step 2: Abstract Equality Comparison (Object == Boolean)
// - Spec Rule: If Type(y) is Boolean, return x == ToNumber(y)
// - ToNumber(false) evaluates to 0
// Expression becomes: [] == 0

// Step 3: Abstract Equality Comparison (Object == Number)
// - Spec Rule: If Type(x) is Object and Type(y) is Number, return ToPrimitive(x) == y
// - Default hint for ToPrimitive(x) here is "number"
// - [].valueOf() returns the array itself (not a primitive value)
// - Fallback to [].toString() returns the empty string ""
// Expression becomes: "" == 0

// Step 4: Abstract Equality Comparison (String == Number)
// - Spec Rule: If Type(x) is String and Type(y) is Number, return ToNumber(x) == y
// - ToNumber("") evaluates to 0
// Expression becomes: 0 == 0

// Step 5: Abstract Equality Comparison (Number == Number)
// - Both types match, direct numeric comparison performed: 0 === 0


console.log([] == ![]); 
