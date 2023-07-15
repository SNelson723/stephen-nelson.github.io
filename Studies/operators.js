//  COMPLETE

/**
 * OPERATORS
 * 
 * SUMMARY: Operators are multi-purpose bits of code used to assign values, compare values, 
 * perform arithmetic operations, etc. There are a few types of operators and each have unique
 * functions and tasks. Each operator requires operands on either side of the expression for comparison, 
 * data mutation, and producting new values.
 * 
 * 1) Assignment
 * 2} Arithmetic
 * 3} Comparison
 * 4) Conditional
 * 5) typeof

 */

/**
 * 1) ASSIGNMENT OPERATOR aka =
 *      The assignment operator is typically one of the first operators JavaScript novices encounter
 *      when learning to declare/initialize variables (as seen in the variables section). These operators
 *      allow variables to "point" to data values (aka assign) for developers to reference later on
 *      in their code.
 */


var assignOp = 5; //the assignemtn operator (=) assigns the number 5 to the variable

// We can also use assignment operators to assign values to complex datatypes (objects and arrays)

var object = {}; //empty object literal assigned to var object;

    object.key = "new value"; // assigns "new value" to a key/value pair

    console.log(object); //prints {key: "new value"}

var array = []; //empty array literal assigned to var array;

    array[0] = true; //assigns boolean value to the zero index of the array

    console.log(array); //prints [true]



/**
 * 2) ARITHMETIC OPERATORS (+, -, *, /, %, **)
 *      Arithmetic operators allow developers to code arithmetic expressions within variables
 *      and functions to produce new values.
 * 
 *      There are multiple types but here are some of the basic arithmetic operators
 */

var add = 5 + 5; // ADDITION => adds numbers

/**
 * STRING OPERATOR
 *      Additionally the addition operator can be used to concatenate strings together
 *      using one of two ways
 */

var stringOne = "Hello ";
var stringTwo = "Buddy!";

var fullString = stringOne + stringTwo; 
console.log(fullString); //prints "Hello Buddy!"

// OR THIS WAY

stringOne += stringTwo; //addition assignment operator discuessed in next section

// BACK TO ARITHMETIC

var subtract = 10 - 5; //SUBTRACTION => subtracts numbers

var multiply = 5 * 5; // MULTIPLCATION => multiplies two numbers

var divide = 25 / 5; //DIVISION => divides two numbers

var remainder = 8 % 2; //REMAINDER => divides the the two numbers and returns a remainder

var exponent = 2 ** 2; //EXPONENTIATION => produces the exponential value

/**
 * ADDITIONALLY:
 *      Assignment and Arithmetic operators can be linked together to dry our code and still
 *      produce the same results. This method works well when you are working with a number
 *      datatype that has already been declared, keeping track of a score or a sum, and
 *      concatenating strings, etc. It is important to remember that the arithmetic operator 
 *      SHOULD ALWAYS be followed by the assignment operator.
 */

var num = 10; //let's establish a base number for this example

num += 5; //addition assignment => same as var num = 10 + 5;

num -= 5; //subraction assignment => same as var num = 10 - 5;

num *= 5; //multiplication assignment => same as var num = 10 * 5;

num /= 5; //division assignment => same as var num = 10 / 5;

num %= 5; //remainder assignment => same as var num = 10 % 5;

num **= 2; //exponentiation assignment => same as var num = 10 ** 2;

/**
 * 3) COMPARISON OPERATOR
 *      Comparison operators are used to compare two operands and return a logical
 *      (boolean) value of true or false. The operands can be numbers, strings, 
 *      logical, or object values. These operators are best utilized when applying
 *      conditional logic to our code, allowing certain chunks of code to run
 *      depending on the expected boolean value to be returned.
 */

// == 
/**
 * The loose equality operator compares two values and returns a boolean value. This operator
 * has a few scenarios where it would be useful. The loose equality operator first converts both
 * values to a common type (aka type coercion). Only in rare cases would developers use this operator.
 */

var bool = (1 == "1"); // returns true
var bool2 = (1 == 1); //returns true
var bool3 = (1 == "one"); //returns false

// ===
/**
 * The strict equality operator (like the loose equality operator) compares two values and returns
 * a boolean value. However, this operator takes both value AND type into account and DOES NOT
 * use type coercion. This equality operator is widely used by developers and helps strengthen
 * the consistency of your code.
 */

// Comparison operators have great uses in functions when conditional logic needs to be applied

//This examples shows the strict equality operator taking into account both value AND type
let name = "Stephen";
let isMyName = (name === "Stephen"); //returns true


// !==
/**
 * The strict inequality operator behaves exactly like the strict equality operator with one
 * exception. The first character in the operator is the bang operator !. This change to the 
 * equality operator will return a boolean value of true if the condtion being tested returns
 * false instead of true.
 */

let nameLast = "Nelson";
/**
 * The code below will print true to the console because both variables being
 * strictly compared while equal in type, are not equal in value. Hence when compared
 * with the strict inequality operator the expected return value is true.
 */
console.log(nameLast !== name); 


// > && <
/**
 * The greater than operator (>) and the lesser than operator (<) both are comparison operators
 * that return a boolean value based on if either operand is greater/lesser than the other. The most
 * common values you'll see with these comparison operators are numbers or the .length property
 * of other values (strings, arrays, etc). Datatype is still taken into consideration.
 */

/**
 * In the function greaterThan, we are testing to see which variable is greater in value
 * and returns that variable
 */
function greaterThan(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    }
}
greaterThan(5, 2); //this function call will return 5

/**
 * The function lessThan is testing which variable is lesser in value (number, lower .length property, 
 * array.length, etc)
 */
function lessThan(a, b) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    }
}
lessThan(5, 2); //returns 2


// >= && <=
/**
 * The greater than or equal to (>=) && the lesser than or equal to (<=) both operate in the same manner
 * as the greater than and less than operators but also take into account the inclusion of both variables
 * during comparison. So only one of two conditions must be met, that both values are equal or one is 
 * greater/lesser than the other.
 */

var nums = 5 >= 5; //returns true 
var nums2 = 6 <= 3; //returns false

let arr = [1, 2, 3];
let arr2 = [1, 2, 3, 4];

let compare = arr.length <= arr2.length; //returns true because while they are not equal in length, arr.length is lesser


/**
 * 4) CONDITIONAL OPERATOR
 *      The conditional operator is the only operator that takes three operands
 *      (aka ternary operator) and can have either true or false values based 
 *      on the condition. The first operator is a condition followed by a (?) and
 *      two expressions to execute separated by a (:). This operator makes an 
 *      efficient substitue for if... else statements.
 */

// SYNTAX
// operand ? expression : expression => example => "1" === 1 ? true : false;

/**
 * This function is testing whether or not the variable passing through has the datatype of number
 * before executing either expression. if the conditional operator returns true, then 5 will be 
 * added to num, otherwise the function will return NaN (Not a Number).
 */
function addTo(num) {
   return typeof num === "number" ? num += 5 : NaN;
}



/**
 * 5) typeof OPERATOR
 *      The typeof operator returns a string indicating the type of unevaluated data
 *      aka the operand.There are some discrepancies to keep in mind when using typeof
 *      on any data the interpreter returns as an OBJECT. This type of operator is useful
 *      in helping us clarify the datatypes we are working with and if the methods/sytnax 
 *      being used are compatiable with that data.
 */

//EXAMPLES
let noValue;

console.log(typeof "Stephen"); //prints "string"
console.log(typeof 76); //prints "number"
console.log(typeof true) //prints "boolean"
console.log(typeof function add(a, b) {return a + b}); //prints "function"
console.log(typeof noValue); //prints undefined (no value is defined) 
console.log(typeof {number: 42}); //prints "object"

/**
 * KEEP IN MIND: the typeof operator returns "object" for null, array, object, and date.
 * It is important to know this so we can accurately test the datatype or each selection, 
 * but each can be tested individually without the typeof operator
 */

// NULL can be tested with a strict comparison
let nully = null;
if (nully === null) {
    console.log(true);
} else {
    console.log(false);
}

//ARRAY has a method to test whether the object is an array
let type = Array.isArray(["Stephen", "Russell", "Nelson"]); //returns true

//DATE uses instanceof to determine if the variable is a date
console.log(nully instanceof Date); //prints false because nully has a value of null and is not a date