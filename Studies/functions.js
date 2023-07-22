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
   * Functions can also be delared as arrow function and we can assign the functions
   * to a declared variable like so.
   */

  let multiple = (x, y) => {return x * y};

  /**
   * (x, y) are the parameters passed into the function
   * 
   * => points to the action the function will take
   * 
   * {return x * y} is the value the function will return
   */


  let isTrue = string => typeof string === "string";

  /**
   * In the above example this works ONLY if there is one parameter provided and the function only needs to take up 
   * one line of code that omits the return statement because it's a predetermined behavior for the function
   * in this context meaning the function will still return a boolean value depending on if the string parameter's
   * datetype is a string.
   */



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


/**
 * HIGHER ORDER FUNCTIONS => Functions that either pass functions as arguments or return functions.
 * This allows developers to think more abstractly about the actions of funcitons rather than the 
 * values they return.
 * 
 * There are four great examples of higher order functions built into JavaScript but let's take a look
 * at them built from the bottom up. These four functions ALL take in callback functions as arguments
 * and some even return functions making them textbook exampls of higher order functions
 * 
 * 1) .map
 * 2) .filter
 * 3) .forEach
 * 4) .reduce
 */


/** 
* MAP takes in two parameters
*
* 1) collection => the collection that will be looped over and have its
*    values modified
*    
* 2) callback => the function that will be invoked on each value
* 
* This particular MAP's purpose is to take in a collection, iterate through
* the collection, invoke the callback function on the value during each iteration, 
* last => during each iteration, the modified values will then be pushed into an 
* array locally scoped to the function 
*/

function map(collection, callback) {
  //initialize empty output array
  let output = [];
  //determine if collection is an array
  if (Array.isArray(collection)) {
    //iterate through the array
    for (let i = 0; i < collection.length; i++) {
      //invoke the callback function and push modified value into output array
      /** 
      Teh callback function takes in THREE parameters 
        1) collection[i] => current value
        2) i => current index
        3) collection => the array (in the case of this if statement)
      */
      output.push(callback(collection[i], i, collection));
    }
  }
  return output;
}


/** 
* FILTER takes in two parameters
*
* 1) array => the arrray that will be looped over
* 2) callback => the function that will be invoked during each iteration
*    THIS FUNCTION MUST PRODUCE A BOOLEAN VALUE
*
* FILTER's primary purpose is to iterate through an array and pass each value into a 
* callback function that will test if the value meets a specific condition and PUSH the
* elements into an array ONLY if the callback function returns TRUE or a TRUTHY value
*/


function filter(array, callback) {
  //declare empty output array
  let output = [];
  //iterate through the array
  for (let i = 0; array.length; i++) {
    /** 
    Determine if the callback function returns true or a truthy value
    callback function takes in THREE parameters

    1) collection[i] => current value
    2) i => current index
    3) collection => the array
    */
    if (callback(array[i], i, array)) {
      output.push(array[i])
    }
  }
    //return the output array containing the elements that pass the callback's test
  return output;
}

/** 
* FOREACH takes in TWO parameters
*
* 1) collection => the collection that will be looped over
* 2) callback => the function that will be invoked during each iteration
*
* !!!!! Keep in mind forEach DOES NOT return anything, it's main purpose is to pass the 
* value of the current iteration into a callback function
*/

function forEach(array, callback) {
  //iterate throught the array
  for (let i = 0; i < array.length; i++) {
    /** 
    The callback function takes in THREE parameters 
      1) collection[i] => current value
      2) i => current index
      3) array => the array (in the case of this if statement)
    */
    callback(array[i], i, array);
    //if collection is an object
  }
}


/**
* REDUCE takes in three parameters
*
* 1) array => the array that will be looped over
* 2) callback => the function that will be invoked on every iteration
* 3) seed => the default value of the accumulator
*    seed/accumulator is the single value that is returned by
*    the function. 
*    **** ==> This can be ANY value: string, number, array, object, 
*    boolean, etc.
*/


function reduce(array, callback, seed) {
  //declare an undefined result variable (we'll reassign it later)
  let result;
  //determine if the seed is not provided aka UNDEFINED
  if (seed === undefined) {
    //assign the array's first element to result
    result = array[0];
    //iterate through the array
    for (let i = 0; i < array.length; i++) {
      //upon each iteration, invoke the callback function
      //THREE parameters
      /** 
      1) result => this result is what accumulates each iteration
      2) array[i] => the current value being accessed in each iteration
      3) i => the current index being accessed in each iteration
      */
      result = callback(result, array[i], i,)
    }
  }
  //return the accumulated result
  return result;
}

//recursion, pure/impure functions, closure

/**
 * In some of the examples above, you may have seen examples of pure functions and closures. By that, 
 * I mean functions that  
 */