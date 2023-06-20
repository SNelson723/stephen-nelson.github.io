// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // create loop to print 1-100
    for (var i = 1; i <= 100; i++) {
        // if statement
        if (i % 3 === 0 && i % 5 === 0) { //if i is a multiple of both 3 and 5
            // print FizzBuzz
            console.log('FizzBuzz');
        } else if (i % 3 === 0) { //if i is a multiple of 3
            // print Fizz
            console.log('Fizz');
        } else if (i % 5 === 0) { //if i is a multiple of 5
            //print Buzz
            console.log('Buzz');
        } else { //if all above conditions === false
            console.log(i); //print the number
        }
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}