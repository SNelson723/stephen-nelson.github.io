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
 *      logical, or object values.
 */

// == 

// ===

// !==

// >

// >=

// <

// <+

/**
 * 4) CONDITIONAL OPERATOR
 *      The conditional operator is the only operator that takes three operands
 *      (aka ternary operator) and can have either true or false values based 
 *      on the condition.
 */

/**
 * 5) typeof OPERATOR
 *      The typeof operator returns a string indicating the type of unevaluated data
 *      aka the operand.There are some discrepancies to keep in mind when using typeof
 *      on any data the interpreter returns as an OBJECT. This type of operator is useful
 *      in helping us clarify the datatypes we are working with and if the methods/sytnax 
 *      being used are compatiable with that data.
 */