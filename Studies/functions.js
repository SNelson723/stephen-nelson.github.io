//                                      FUNCTIONS


/**
 * Definition: A set of statements or instructions that carry
 * out a task or set of instructions by taking in inputs and 
 * returning an output. Functions must be created in the scope
 * from which you wish to use it.
 */



// FUNCTION DECLARATION

/**
 * The function declaration syntax has a few components starting with the keyword
 * function declaring the function datatype followed by the function's name and 
 * any parameters for arguments to pass through. The function body is the code block
 * within the curly braces {} that contains the code the function will execute.
 */

function functionName(parameter) {
    //function body
  }

/**
 * PARAMETERS/ARGUMENTS: Parameters are merely placeholders for data that will
 * be passed through a function. It's safe to view parameters as components of 
 * a function's blueprint. The arguments passed through are datatypes that are
 * used in the the function invocation to produce the value specified within
 * the code block of the function.
 */  

// intitialize variable to pass as an argument
let str = "I'm Hungry!";

/**
 *string is being used as a parameter in the function
 *declaration. But keep in mind functions can hold anywhere between
 *0 and as many parameters needed.
 */

function hungry(string) { //this function contains 1 parameter
  return string;
}

/**
 * FUNCTION CALL/INVOACTION: To pass data through a function as arguments and to 
 * activate the function blueprint. Developers will usually call or invoke the 
 * function by referencing the function's name and passing the required data
 * as arguments if any parameters are specified.
 */

hungry(str); // function call passes the str variable as an argument

console.log(hungry(str)); //prints the value of str

/* 
  passing an independent datatype that isn't assigned 
  to a variable 
*/
console.log(hungry("I'm Very Hungry!")); //prints "I'm Very Hungry!"


/**
 * Function expressions can be assigned to variables with the variable name acting
 * as the function's name. This allows the function to be declared anonymously
 * as the variable's value, but that doesn't mean the function is anyonymous. 
 * There isn't any need to put the name twice and muddy up our code. 
 */
  

//assigning a function expression to variable sum
  var sum = function(a, b) {
    return a + b;
  };

/**
 * AKA
 * function sum(a, b) {
 * return a + b;
 * }
 */

/**
 * To invoke this function, we simply reference the variable name and pass the
 * required arguments to return the newly produced value.
 */

sum(5, 4); //function call/invocation

console.log(sum(5, 4)); //prints 9 as the function code block is running 5 + 4

//Higher order functions and recursion, pure functions, impure functions