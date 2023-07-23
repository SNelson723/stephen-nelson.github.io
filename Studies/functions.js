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
 * Arguments parameters and default parameters are also useful in function declarations
 * by helping reduce the amount of lines being used and helps improve readability. That
 * being said, arguments paramters can continously take in values but that paramter stores
 * them in an array so the data will have to be accessed via loops most likely and default
 * parameters can be as simple as declaring an empty array/object/string/undefined.
 * 
 * arguments parameter's syntax will always be => [...arguments]
 */

//example using a default parameter

function defaultParam(arr = [], num) {
  //var arr = []; => This is what the default parameter arr is doing in the 
  // background without us having to code that in
  for (let i = 0; i > 0; i--) {
    arr.push(num);
    num--;
  }
  return arr;
}

//example with the arguments object parameter
/**
 * This example works because the numbers being passed into the function invocation are put into
 * an array-like object allowing us to iterate through that array and accumulate a sum that 
 * returns the value 15.
 */

function argsObject() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

argsObject(1, 2, 3, 4, 5) //=> arguments in the loop like like [1, 2, 3, 4, 5]

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

/**
 * In some of the examples above, you have seen an example closures, which by 
 * definition is a function that is referencing a value in its parent scope.
 * Whether the nested function is being invoked after creation within the outer
 * function scope or being returned, the function MUST maintain access to the 
 * parent function's variables in order to be considered a closure.
 * 
 * Two examples above can be found in the map and reduce methods with the
 * anonymous functions that are retaining access to the local scope of their 
 * parent functions.
 */

/**
 * This example uses a function declaration in the return statement that prints
 * the language variable to the console. However, the language variable being 
 * accessed is in the outer function scope.
 * 
 */

let closure = () => {
  let language = JavaScript;
  return function () {
    console.log(language);
  };
};



/**
 * RECURSION => recursion (recursive function) occurs when a function calls on itself until
 * it doesn't (due to a condition that returns false). The proper blueprint of a recursive 
 * function consists of two parts.
 * 
 * BASE CASE => The conditional logic that will return a boolean value and exit the function
 *  when the desired result is reach (usually in the form of an if statement)
 * 
 * RECURSION CASE => If the condition is not passed in the base case, the code below will
 * execute and at the end will invoke the function so the process repeats.
 */

/**
 * The below example's base case has TWO conditions on which the function will exit. The first one 
 * being if the array's length === 0 or that the array's first index matches the string input. However,
 * if both of those conditions return false, then the recursion case executes and this is a very basic
 * execution of recursion. 
 * 
 * NOTE => The input variable being tested in in the base case MUST be mutated or changed in some manner
 * so that eventually the base case will return true. The above example uses the array.splce() method that
 * is slicing off the first index of the array and will continue to do so in the function invocation
 *  until one of the base case conditions is met.
 */

let names = ["Charlie", "Devon", "Bill", "Nye"];

let getName = (array, string) => {
  //base case
  if (array.length === 0) {
    return "Name does not exist";
  } else if (array[0] === string) {
    return array[0];
  }
  //recursion case
  return getName(array.slice(1), string);
};

getName(names, "Bill");



/**
 * Lastly, in this introduction to functions, depending on the context in which kind of function
 * is needed can lead to developers to code either pure or impure functions.
 * 
 * PURE functions => have two qualites
 * 
 * 1) Deterministic => when given the same input, always produces same output
 * 2) No side effect => This means ALL inputs are passed in, none of the globally
 *    scoped variables are are used and the return statement can't indicate a 
 *    side effect (such as changing a globally scoped variable in any way, the return
 *    should be independent in it's existance)
 */

/**
 * The two examples below are pure functions because they both only return or print the values passed into them
 * 
 * addify will always return the value of x + y (doesn't reassign a global variable) meaning the function
 * itself IS the value of x + y
 * 
 * message will always print the string value string1 + string2 as it's own value and, again, not accessing
 * a global variable. The string parameters should be string passed in that have no variables pointing at them
 */

function addify(x, y) {
  return x + y;
}

function message (string1, string2) {
  console.log(string1 + string2);
}

/**
 * The below examples are impure because looking at what their code blocks are executing we can see that each
 * code block is referencing and reassigning a global variable (which is considered a side effect). Also, the
 * global variables being used are not being passed as arguments, they are simply being accessed from the global scope.
 */

var x = 4;

function impureAddify(y) {
  return x += y;
}

impureAddify(6) //returns 10


var greet = "Hello";

function impureGreeting(name) {
  greet += ` ${name}`;
  console.log(greet);
}

impureGreeting("Stephen"); //prints "Hello Stephen"