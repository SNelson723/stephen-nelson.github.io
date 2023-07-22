//COMPLETE!

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
 * 
 * The four main types of loops we will discuss in this chapter are
 * 
 * 1) for loops
 * 2) for-in loops
 * 3) while loops
 * 4) do-while loops
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
 * 1) FOR LOOPS
 * 
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


/**
 *  2) For-in loops => For-in loops are used mostly to iterate through objects due to objects 
 *   containing no ordered list of properties (key/value pairs) and thus the key is what needs
 *   to accessed (unlike the array's ordered index list). This type of loop is behaves in the same
 *   manner of other loops (by iterating through complex datatypes). Much like the for loop, the 
 *   for-in loop needs a variable declared so we can access defined values.
 *  
 *  Key => is the key being accessed in the current iteration
 *  object => is the object currently being looped over
 *  code block => is the code that will execute for each key/value pair on their respective iterations
 * 
 *  SYNTAX => no counter is needed or condition because the loop will exit after ALL properties have
 *      been iterated through
 * 
 *          for (let key in object) {
 *              code block
 *          }
 */

let object1 = {
    name: "Jeff",
    occupation: "welder",
    hasFamily: true,
    kidsAtHome: 3
};

/**
 * This example shows a direct looping over a specific array called object1. In this loop, each key in object1 
 * is looped over and the keys and values in each iteration are logged to the console. To understand when using
 * the keyword key in the code block, we are refering to the key (property name) and object1[key] is using
 * bracket notation to access the value within that same property. Of course when used in function bodies, for 
 * and for-in loops can use their respective parameters (array in the for loop, and object in the for-in loop).
 * This way coders can easily tell what specific datatype is being iterated through and if the that is correct, 
 * then we run a lower risk of interupting the control flow of our program.
 */

/**
 * The loop below prints to the console:
 * name Jeff
 * occupation welder
 * hasFamily true
 * kidsAtHome 3
 * 
 * Key accesses the name and object1[key] accesses the value
 */
for (let key in object1) {
    console.log(key, object1[key]);
}

/**
 * NOTE => for-in loops can still be used to iterate through arrays, however, for the sake of readability
 * and understanding of our code and other developers' code, it is common practice to reserve for loops
 * for arrays and for-in loops for objects to avoid any confusion that can lead to serious bugs.
 */



/**
 * 3) WHILE LOOPS
 * 
 *      Unlike for and for-in loops, while loops still iterates elements, but the main difference is while
 *      loops are used when the number of iterations is unknown to the developer. IF we know the precise
 *      amount of iterations, then for and for-in loops are highly recommended to lower the risk of having
 *      to debug our program if something goes wrong.
 * 
 *  SYNTX =>
 *      
 *      while(conditon) {
 *          code to be executed
 *      }
 */

/**
 * The example below is a basic textbook use of the while loop. Here, we initialize a variable named x with
 * a number value of 1. The condition to exit the loop is when (x < 5 === false), and while that condtion
 * returns true, the code block will execute, logging x to the console. One important thing to understand is
 * we MUST use some sort of update/incrementer that will eventually lead the condition to return false. In 
 * this case the x++ incrementer adds 1 to x making the next iteration print 2 instead of 1 like it did in 
 * the first iteration.
 * 
 * Therefore, the loop should print to the console:
 *  1
 *  2
 *  3
 *  4
 */

let x = 1;

while (x < 5) {
    console.log(x); //prints x
    x++; // x += 1
}

/**
 * This is one example in which we can manipulate arrays and the same can be said for objects when using the 
 * required notation to access/reassign properties. Below we have an array named array3 with 3 elements all in
 * numerical order. The while loop's condition will return false and exit the loop. This happens by initializing
 * a counter variable named i with the numerical value of array3.length (3) and adding 1 to it. Keep in mind, this
 * is happening during each iteration before we push i into the target array.
 * 
 * Once the loop exits, array3 will now be updated to => [1, 2, 3, 4, 5, 6]
 * 
 * Keep in mind this example can be used in a for loop as well. However, this example provides limitations to what
 * is allowed when accessing and updating array3, the condition will have to be changed if we want to extend or 
 * reassign data in specific indexes. This is why it is important to understand the context in which us developers
 * may find ourselves in and determine the most appropriate course of action when looping over elements. 
 */

let array3 = [1, 2, 3];

while (array3.length < 6) {
    let i = array3.length++;
    array3.push(i);
}


/**
 * 4) DO-WHILE LOOPS
 * 
 *      Do-while loops behave just like while loops in that this loop can iterate an infinite amount of 
 *      times or at least the condition returns false. The main difference here is the do...while loop
 *      will execute the code block BEFORE checking the condition unlike the while loop which does the 
 *      opposite (checks the condition then runs the code block)
 */

/**
 * SYNTAX:
 *  do {
 *      statement
 *  } while (condition)
 */

let counter = 0;

do {
    counter++;
    console.log(`This current number is ${counter}`);
} while (counter < 5);

/**
 * This logs to the console:
 * 
 * "This current number is 1"
 * "This current number is 2"
 * "This current number is 3"
 * "This current number is 4"
 * "This current number is 5"
 * 
 * => exits after the fifth printed string 
 */