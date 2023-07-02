/**
* VARIABLES
*
* OVERVIEW:
*   Variables are identified containers that store data to memory in the life=cycle of a program.
*   These containers (variables) point to any type of data stored in JavaScript such as: strings,
*   numbers, booleans, arrays, objects, or any other data-type. Once created, variables can be called
*   to change the value or type of value they are assigned with.
*
*
*/

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