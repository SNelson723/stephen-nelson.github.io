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
 * The example below
 */

for (let i = 0; i < 5; i++) {
    console.log(i);
}