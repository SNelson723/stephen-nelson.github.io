// 

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
 *      Number
 *      NaN
 *      Undefined
 *      Boolean
 *      Null
 * 
 *  Complex:
 *      Object
 *      Array
 *      Function
 */

/**
 * SIMPLE/PRIMITIVE DATATYPES: Types of data that point to one specific simple value that is considered
 * atomic/mutable meaning they do not point to any other value and any operations using these datatypes
 * does not alter the value but rather produces a NEW value as a result. Second, simple datatypes, when
 * copied, are copied by value meaning the values are copied from one variable to the next.
 */




//OBJECTS AND ARRAYS

/*
* Objects and Arrays are both complex datatypes used in JavaScript to hold collections 
* and various types of data. These two datatypes are useful for when multiple pieces 
* of data about one thing or many things. It is also important to note that since these
* are both complex data types, they have the capacity to expand indefinitely. While both
* are considered objects, they behave differently and require different methods of 
* assignment and access.
*/


/*
OBJECTS are used to store data that represents one thing in the form of key/value pairs
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

function myObject(object, key, value) {
  object[key] = value;
  return object;
}

//KEYS ARE STRINGS

// console.log(obj['name']);

/*
  Dot notation is preferred if the key being accessed is already
  defined and we wish to access or re-assign its value
*/

// console.log(obj.age); 

/*
  NOTE: either notation can be used to add key/value pairs
    to an object
*/

obj.isDrummer = true;
obj['favColor'] = 'green';

// console.log(obj); 

/*
  In order to remove or DELETE key/value pairs, the keyword
  delete is used.
*/

delete obj.age;

// console.log(obj);

/*
ARRAYS, unlike OBJECTS, are used to store many of the same types of things in an ordered list known as the zero indexed list.
*/

let array = []; //array literal assigned as brackets

/*
  INDEX list is ordered from 0 and on. All elements are 
  separated by a comma.
*/

let arr = ['apples', 35, false, {isSingle: true}];

// console.log(arr);

/*
  ACCESSING elements in an array requires bracket notation
  containing the index position of the element
*/

// console.log(arr[1]); //prints 35 from index 1

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

// .length method can be used to access the last element

// array2[array2.length - 1] = {isFloridaMan: 'Uncle Steve'};

// console.log(array2);

/*
  We can think of removal array methods as the inverse of most
  additive array methods.
*/

let array3 = [1, 2, 3, 4, 5, 6];

array3.pop(); //removes last element

array3.shift(); //removes first element

/**
  SPLICE can also be used to remove/replace elements
*/

//using splice to replace an element
array3.splice(1, 1, "we done spliced y'all");

// using splice to delete an element
// array3.splice(2, 1);

// console.log(array3);