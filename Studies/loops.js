/**
 * ===> LOOPS ===> LOOPS ===> LOOPS
 * 
 * OVERVIEW: In JavaScript, loops are chunks of code that are executed or repeated numerous times based 
 *  a condition. Loops in JavaScript are considered an abstract repetitve action taken so developers
 *  have the convenience of not having to hard code the same function or expression over and over again.
 *  While their core behavior is the same (iteration), loops allow developers to produce any number of 
 *  values from simple mathematics, mutating/copying complex datatypes, etc. One of the most imporant
 *  benefits of looping is that it frees up space in our code and helps improve the readability while
 *  allowing us to think about our code abstractly since loops are simply actions while functions are
 *  simply values. With this in mind there are four main types of loops in JavaScript that each have
 *  their own blueprints and functionality, but ultimately serve the same purpose.
 */

/**
 * 1) FOR LOOPS => For loops are used to iterate through arrays, as a couting sequence, a set number
 *  of times. This type of loop should be used when the number of iterations is known to the developer.
 * 
 * SYNTAX:
 *      for (initialization; condition; increment) {
 *          code bloack;
 *      }
 * 
 * INITIALIZATION => initializes a variable with our starting point/count of iteration
 * 
 * CONDITION => an expression that returns a boolean value and is used to exit the loop (exits when condition returns false)
 * 
 * INCREMENT => reassigns the initialized count by any number of predetermined steps based on the loop's
 *  purpose and expected output (this is the last step in the iteration process before exiting with 
 *  the false condition)
 * 
 * CODE BLOCK => The code block is the chunk of code to be executed at the start of each iteration
 */

/**
 * The example below is an example of the for loop, not looping over an array but looping
 * until the condition returns false (i < 5). After each iteration, the variable i increments
 * by 1 (0 => 1 => 2 => 3 => 4 =>) which allows the condition to return true until i = 5. Once
 * this statement is reached, the loop will then exit and the code in the code block will not
 * execute as a result.
 * 
 * !!! It is important to remember when coding with loops that the conditional statement must
 * ALWAYS have an exit (false return) or else we will be looping infinitely and our program
 * will crash.
 */

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/**
 * LOOPING OVER AN ARRAY => most commonly used with the array's .length property
 * 
 * There are two main approaches when using the array's length property to test the condition
 * in the counting sequence. While both print the same values in order, the first loop using
 * (array.length starting at 1) does not mirror the array's index (starting at 0) therefore
 * the sequence counter must return false when i === array1.length (because the array's length
 * cannot be less than it's own length. If we want to strictly operate within the index list,
 * coders use array.length - 1. This takes into account that our exit condition is using the array's
 * index so i <= array.length -1 means that we are exiting once i = 5 below because the index list 
 * in array1 ranges from 0 => 4.
 */

let array1 = [1, 2, 3, 4, "last index"];

for (let i = 0; i < array1.length; i++) {
    console.log(array[i]);
}

for (let i = 0; i <= array1.length - 1; i++) {
    console.log(array1[i]);
}

/**
 * It is possible  to iterate over subarrays in our code should we need to access that data. All you need
 * to do is for the iterations that land on a nested array contain another loop to access those nested
 * pieces of data.
 * 
 * It looks a little messy and JavaScript has built in functions that do this already, but it's helpful to take
 * a look at what this process looks like so we can understand the tools provided in JavaScript.
 * 
 * Here, the nested loop is using a different name for the counter because i has already been declared, once
 * the nested arrays are accessed, it is important to let the interpreter know that we are iterating through
 * array2[i]'s array and not the parent array, otherwise the code block would print each subarray twice instead
 * of the individual values nested in them.
 */

let array2 = [[1, 2], [3, 4], ["five", 3 * 2]];

for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2[i].length; i++) {
        console.log(array2[i][j]);
    }
}


