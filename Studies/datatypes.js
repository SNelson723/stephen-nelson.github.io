// DATATYPES

/**
 * OVERVIEW:
 *    Datatypes are categories for different types of data and are split into TWO main categories. Text
 *    editors recognize these as built-in data structures and which properties they are compatable
 *    with. This allows developers to track, store, and mutate the data in their code as required. With 
 *    that in mind, JavaScript is a weakly typed and dynamic language. Dynamic means that variables are not
 *    directly associated with any specific datatype and these variables can be either assigned/re-assigned
 *    depending on the keyword used to declare the variables with. Weakly typed means JavaScript is allowed 
 *    type coercion (type conversion) an execution involves mismatched types (reduces amount of error messages).
 * 
 * There TWO main categories are as follows:
 * 
 *  Simple/primitive:
 *      String
 *      Number/NaN
 *      Boolean
 *      Undefined/Null
 * 
 *  Complex:
 *      Object
 *      Array
 */

/**
 * SIMPLE/PRIMITIVE DATATYPES: Types of data that point to one specific simple value that is considered
 *    atomic/immutable meaning they do not point to any other value and any operations using these datatypes
 *    does not alter the value but rather produces a NEW value as a result. Second, simple datatypes, when
 *    copied, are copied by value meaning the values are copied from one variable to the next and if any
 *    of those variables is changed through reassignment or an expression, the other variable remains
 *    unmutated.
 */


/**
 * STRING => datatype that represents textaul data and is enclosed in quotations "". Each character
 * in a string occupies an index position and is encoded as a 16-bit unsigned integer value
 * (discussed in string-manipulation.js).
 */

//EXAMPLES

let nameFirst = "Stephen";
let nameLast = "Nelson";
let petName = "Pixie";
let greeting = "Hello and how are you today?";


/**
 * NUMBER => datatype that represents a numerical value of (< 0, 0, or > 0). These values can be used in
 * expressions, mathematics, index positions, as counters in counting sequences (loops)/sums. 
 * 
 * NOtE: If a numeric value is wrapped in a string datatype, then that character is considered NaN (Not a Number).
 * Meaning numberical values stored as strings CANNOT be used in expressions with other number values which
 * (if dont) will result in the return of NaN.
 */

//EXAMPLES

//both variables are not assigned each their own numeric value
let num1 = 4;
let num2 = 6;

//below are examples of basic expressions we can use to produce new values 
let add = 4 + 6; //value is now equal to 10
let add2 = num1 + num2; //value is also equal to 10 because (num1 + num2) is really adding their values (4 + 6)

/**
 * This last example is a type of expression that will produce the global property NaN, because
 * using string characters and numbers in an expression to produce a number datatype value is not 
 * passable in JavaScript;
 */

let number1 = 7; //number 7
let number2 = "7"; //character string 7

let multiply = number1 * number2; //returns NaN because "7" is a string datatype and cannot be calculated mathematically


// BOOLEAN
/**
 * BOOLEAN values are perhaps the most simple of the primitive datatypes because of the two
 * two values that can be pointed to: true/false. Booleans are used in conditional logic/logical
 * coding that can help improve/change the control flow of our overall code and where the code 
 * should go based on that conditional logic.
 * 
 * We'll have a deeper dive into what these two values are capable of influencing in the control-flow.js file.
 */

let bool = true;
let myBool = false;


//UNDEFINED, NULL
/**
 * UNDEFINED/NULL => When a variable is declared and not assigned a value, the JavaScript interpreter returns
 * the DEFAULT value of that variable which is UNDEFINED, Undefined is a datatype that signals the current
 * variable is not pointing to any datatype. Null is very similary in that null also means the value of the 
 * variable is undefined. The main difference is undefined is the absence of a value and null is the absence
 * of an object, but can be used by developers to intentionally leave a variable undefined.
 */

//Both examples work here but which one to use is more contextual and the code looks cleaner with unassigned variables
//We can always assign or reassign the absence of values/objects later in code in conditional contexts (control-flow.js).
let myVariable;
let myNully = null;





/*
*                         COMPLEX DATATYPES => OBJECTS, ARRAYS, FUNCTIONS
*
* Objects and Arrays are both complex datatypes used in JavaScript to hold collections 
*   and various types of data. These two datatypes are useful for when multiple pieces 
*   of data about one thing or many things. It is also important to note that since these
*   are both complex data types, they have the capacity to expand indefinitely. While both
*   are considered objects, they behave differently and require different methods of 
*   assignment and access.
*/


/*
* OBJECTS are used to point to containers with data that represents one thing in the form of 
* key/value pairs (aka properties) separated by a colon (:)
*/

let object = {}; //object literal is assigned as curly braces

// keys and values are separated by a colon, and each key/value pair is separated by a comma
let obj = {
  name: "Stephen",
  age: 29,
  hasPet: true,
  bands: ['Sunday Circus','Sarah Burke Band', 'Wojtek Industries']
};

// BRACKET or DOT notation allows us to access key/value pairs

//bracket notation is best used in functions when access keys that have not been specified at that time

/**
 * There are two approaches to accessing properties in objects (BRACKET and DOT notation). Dot notation
 * is preferred by most developers due to cleaner readability and that dot notation signals that the 
 * property being accessed is either known or added.
 */

console.log(obj.name); //prints "Stephen" to the console
obj.isDrummer = true; //adds a isDrummer property to the object


/**
 * For BRACKET notation, brackets surround the key name which is wrapped in quotes because
 * KEYS ARE STRINGS. Whenever using dot notation, the interpreter will not correctly read
 * the key if it is not properly syntaxed.
 * 
 * The first example with a for...in loop (discussed in loops.js) iterates through obj
 * and logs all the value of each key in every iteration. 
 * 
 * The two examples below the loop both use bracket notation wrapping the keys in quotes
 * which effectively adds favColor: "green" and reassigns name to name: "Nelson". 
 */

for (let key in obj) {
  console.log(obj[key]);
}

obj['favColor'] = 'green';
obj['name'] = "Nelson"

/**
 * Keep in mind that keys with two words to the name always need to be in quotations at all times 
 * as in the example below;
 */

let object2 = {
  "key one": 1,
  "key two": 2,
  "last key": true
}

/*
  In order to remove or DELETE key/value pairs, the keyword
  delete is used.
*/

delete obj.age;


/*
* ARRAYS, unlike OBJECTS, are used to store many of the same types of things in an ordered list 
* known as the zero indexed list.
*/

let array = []; //array literal assigned as brackets

/*
  INDEX list is ordered from 0 and on. All elements are 
  separated by a comma.
*/

let arr = ['apples', 35, false, {isSingle: true}];


/*
  ACCESSING elements in an array requires bracket notation
  containing the index position of the element
*/

let fruit = arr[0]; // variable fruit is assigned the first index of arr

/*
  ARRAY methods used to add/delete/change elements to and from the
  array is a more extensive list than object methods and all
  are used in reference to the ordered zero index list.
*/

let array2 = [];

//ADDING/CHANGING elements with array methods (just a few)

array2.unshift('sup'); //shifts element to the front

array2.push('homie'); //pushes element to the back

array2.splice(1, 0, 'my') //splices element into specified index

// .length method can be used to access the last element //

array2[array2.length - 1] = {isFloridaMan: 'Uncle Steve'};


/*
  We can think of removal array methods as the inverse of most
  additive array methods.
*/

let array3 = [1, 2, 3, 4, 5, 6];

array3.pop(); //removes last element

array3.shift(); //removes first element

/**
* SPLICE can also be used to remove/replace/add elements at a specific index with the following
* syntax
*
* array.splice(starting index, delete count, item)
*
* This is one of the more commonly used array methods when having to access and change/update
* an array's elements.
* 
* SLICE can be used to slice off a specific element of an array
* 
* SYNTAX => array.slice(start, end);
* 
* This method returns a shallow copy of an array that contains the elements from start to end.
* End is optional because if not specified, the end of the shallow copy will be the end of the
* original array.
*
*
* MAIN DIFFERENCE: Splice starting point references the array's zero indexed list and slice's (start, end) 
* refers to the array's LENGTH property.
*/

//using splice to replace an element
array3.splice(1, 1, "we done spliced y'all");

// using splice to delete an element
array3.splice(2, 1); //splices number value 3 out of index 2

//slice method at work
// This creates a shallow copy of array3 that looks like [3, 4, 5, 6] 
// due to the first 2 elements being sliced from the original
let slicedArray = array3.slice(2);