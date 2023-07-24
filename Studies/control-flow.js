// CONTROL FLOW

/**
 * OVERVIEW => Control flow in JavaScript simply refers to the order in which the computer
 * executes code in a script (top to bottom). So structuer and order are both crucial to 
 * clean/dry/operational code. With this behavior the code is run from the first line to
 * the last line unless the computer reaches a conditional statement or a loop which 
 * are used to maniuplate the control flow of the code. Depending on the circumstances
 * of an application or data input, a developer's code should take into account what is
 * needed to ensure the code doesn't break.
 * 
 * For further information on loops and how they manipulate control flow, check out loops.js
 * 
 * The rest of this file will focus on the conditional statements mentioned earlier and the 
 * various forms available to software engineers.
 * 
 * These conditional statements are known as
 * 
 * 1) if
 * 2) if...else
 * 3) else if
 * 4) switch
 * 
 * It's safe to think of control flow and using conditional statements as forks or branches
 * in our code and the path taken by the computer determines on which condition the code passes.
 * So with this the code may not be linear, but at the same time all roads/branches lead the 
 * computer to the end of a developer's code.
 */


/** 
* 1) IF statements use conditional logic to test a condition that will return a boolean value and allow
* the code block to execute the statement.
* 
* if (condition) {
*  statment
* }
*/

let number = 50; // variable being tested

if (number % 2 === 0) { //the condition determining if the number variable's value is an even number
    console.log('even'); //the statement that is executed if the condition returns true
}

/**
 * Sometimes it's logical to test for a false value in the condition. If certain code is needed to execute
 * in the case of false data or lack of data input, developers can test if a condition is false and execute
 * statements according to the return value 
 */

if (typeof number !== "string") { //the condition determininh if the value in the variable number is not a string
    console.log("not a string"); // the statement that is executed if the condition returns true
}


/**
 * 2) if...else statements behave just like the if statement except this statement contains two blocks of code
 * to execute. The else keyword signals to the computer that the above condition hasn't been met and the default
 * code will execute as a result. The code block of the else statement will not run when the if condition returns
 * the desired boolean value.
 * 
 * if (condition) {
 *  statement
 * } else {
 *  statement
 * }
 */

/**
 * Once an else keyword is used after an if statement, this develops what is known as a conditional chain.
 * In these examples, a condition isn't needed in the else statement allowing the else keyword to behave
 * as the default code block that will be executed unless the if condition returns true.
 */

let num = 5;

if (typeof num === "number") {
    console.log(num ** 2); 
} else {
    return NaN;
}

if (num < 10) {
    console.log(`${num} is a single digit`);
} else {
    console.log(`${num} is greater than 10`);
}


/**
 * 3) else if keywords act as a combination of if and else meaning else if statements have the same role of else 
 * statements, only this time they contain a condition this is being tested. This allows developers to add as few
 * or many conditions as needed to determine which code the computer will need to execute.
 * 
 * if (condition) {
 *  statement
 * } else if (condition) {
 *  statement
 * } else {
 *  statement
 * }
 */

/**
 * This example will use a loop to iterate through an array of numbers and strings and execute the following
 * code if a certain condition is met in the if, else if, else conditional chain. As stated earlier, the 
 * else if statement can still be reached when the if condition returns false. The same can be said for the
 * else statement when both the if and else if conditions return false. This loop should print the following
 * after iterating through the array:
 * 
 * 1
 * "a"
 * 2
 * null
 * "b"
 * 3
 * "c"
 */

let array = [1, "a", 2, true, "b", 3, "c"];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        console.log(array[i]);
    } else if (typeof array[i] === "string") {
        console.log(array[i]);
    } else {
        console.log(null);
    }
}

/**
 * The following function will contain more than one else if keyword to show the conditional chain
 * can be expanded on to avoid having a plethora of if statements that seem disconnected. Chaining
 * in this fashion helps the computer/developers to determine which conditions are being tested and
 * how they are related to one another.
 * 
 * This function takes in a number parameter and will use a conditional chain to determine which
 * message to return as a result of the passing condition.
 */

function position(number) {
    if (number === 1) {
        return "Gold Medal";
    } else if (number === 2) {
        return "Silver Medal";
    } else if (number === 3) {
        return "Bronze Medal";
    } else if (number >= 4 && number < 10) {
        return "better luck next time";
    } else {
        return "not a contestant";
    }
}

position(4); //returns "better luck next time"



/**
 * 4) switch statements are also used to test conditions which can be used to test conditions on multiple datatypes
 * like the if, if...else, else if statements. So applications of any of these types is up to the developer's preference.
 * However, it is important to note that switch statements are not as compact as the other statements because they can 
 * contain multiple break statements depending out how many cases are present in the statement. The syntax works well
 * when a multitude of conditions are being tested.
 * 
 * switch (expression) {
 *  case value!:
 *      statement;
 *      break;
 *  case value2:
 *      statement;
 *      break;
 *  //.....
 *  case value23:
 *      statement;
 *      break;
 *  default:
 *      statement;
 *      break;
 * }
 */