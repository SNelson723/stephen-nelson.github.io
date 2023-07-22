// COMPLETE!!

/**
 * VARIABLES
 * 
 * OVERVIEW:
 *  Variables are identified containers that store data to memory in the life-cycle of a program.
 *  These containers (variables) point to any type of data stored in JavaScript such as: strings,
 *  numbers, booleans, arrays, objects, or any other datatype. Once created, variables can be called
 *  to change the value of type of value that are assigned with. The variable's name should always 
 *  describe the type of data being stored.
 * 
 * 1) Variables are created with a keyword (var) followed by the name of the variable followed by a ;
 * to end the declaration
 * 
 * 2) Two components of using variables (declaration and initialization)
 * Declaration ==> var name
 * Initialization (or assignment) ==> name = 'Stephen';
 * 
 * Variables can also be initialized in the same line 
 */

// 1) DECLARATION
/**
 * At the start of the declaration phase, the variable number is undefined
 * because it has not been assigned a value
 */

var number; //

console.log(number); //==> prints undefined because var number holds no value

// 2) assignment
/**
 * Once a variable is created, a value can be assigned to it
 */

number = 1;

console.log(number); //==> returns a number value of 1 

// 3) INITIALIZE
/**
 * Variables can be declared and assigned in one statement
 */

var string = 'Stephen'; //==> variable is both declared and assigned a value

console.log(string); //prints Stephen

// 4) REASSIGNING
/**
 * Once a variable is assigned a value, that value can be reassigned to another value either
 * of the same or different datatype
 */

string = 'A different string'; //==> variable string is reassigned a new string

console.log(string); //==> prints A different string

//NEED LET AND CONST EXPLAINED

/**
 * LET and CONST are updates of ES6 circa 2015 which helped developers write cleaner and 
 * less problematic code. Unlike the var keyword, let cannot be redeclared,
 * but CAN be reassigned. Const on the other hand CANNOT both be redeclared or reassigned. 
 * This helps reduce the chances of accidentally redeclaring or reassigning a variable we
 * did not intend on changing.
 */

/**
 * Using the let keyword here means another variable named music cannot be declared
 * but can be reassigned.
 */
let music = "good";
music = "not bad";
console.log(music); //prints "not bad"

/**
 * This const variable will remain CONSTANT and it should be understood that it will
 * never change or be redeclared as log as it exists in our code.
 */

const isMyBro = true;

/**
 * There are exceptions for const in terms of updating complex datatypes, while simple datatypes
 * copy by value and immutable, complex datatypes (object, array) are copied by reference and mutable meaning, 
 * if assigned with a const keyword, the object or array can still be expanded or retracted, BUT
 * the variable's dataype of the array or object CANNOT change since the variable is constantly
 * pointing to the datatype (object, array).
 */

const letters = ["a", "b", "c", "d"];
letters.push("e");

console.log(letters); //prints an array ["a", "b", "c", "d", "e"]