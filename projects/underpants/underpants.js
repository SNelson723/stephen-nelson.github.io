// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { values } = require("lodash");

var _ = {};
/**
 * creating properties for the variable
 * key = identity
 * value = function()
 * 
 * aka _.typeof = function();
 */


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// declare identity function w/ 1 parameter
_.identity = function(value) {
    //return value
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// declare function
_.typeOf = function(value) {
    //use conditional chain to determine value's datatype
    if (Array.isArray(value)) { //if array
        return "array"; //return "array"
    } else if (typeof value === "string") { //if string
        return "string"; //return "string"
    } else if (value < 0 || value === 0 || value > 0) { //if number
        return "number"; //return "number"
    } else if (value === undefined) { //if undefined
        return "undefined"; //return "undefined"
    } else if (value === true || value === false) { //if boolean
        return "boolean"; //return "boolean"
    } else if (typeof value === "function") { //if function
        return "function"; //return "function"
    } else if (value === null) { //if null
        return "null"; //return "null"
    } else if (typeof value === "object") { //if object
        return "object"; //return "object"
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// declare function
_.first = function(array, number, output = []) {
    //determine if array !== "array" OR if number < 0
    if (!Array.isArray(array) || number < 0) {
        //return []
        return [];
    } else if(typeof number !== "number") { //if typeof number !== number
        //return first element of array
        return array[0]; 
        //determine if number > array.length
    } else if (number > array.length) {
        return array; //returns full array
    } else { //if number is between 0 and array.length
        //loop over array
        for (let i = 0; i < array.length; i++) {
            //run code if i < number
            if (i < number) {
                //if condition === true, push array[i] into output
                output.push(array[i]);
            }
        }
        //return output
        return output;
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// declare function
_.last = function(array, number) {
    //determine if !array or number < 0
    if (!Array.isArray(array) || number < 0) {
        //return empty array
        return [];
        //determin if number is NaN
    } else if(typeof number !== "number") {
        //return last element
        return array[array.length -1];
        //if number > array.length
    } else if (number > array.length) {
        //return whole array
        return array;
    } else {
        //declare empty array to push elements into
        let output = [];
        //iterate through array
        for (let i = 0; i < array.length; i++) {
            //if number >= number - 1
            if (i >= (number - 1)) {
                //push elements into output
                output.push(array[i]);
            }
        }
        //return output
        return output;
    }
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

//declare function
_.indexOf = function(array, value) {
    //determine if array holds the value
    if (array.includes(value)) {
        //if true: loop over array
        for (let i = 0; i < array.length; i++) {
            //determine if element === value
            if (array[i] === value) {
                //if true: return index
                return i;
            }
        }
        //if false
    } else if (!array.includes(value)) {
        //return -1
        return -1;
    }
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//declare function
_.contains = function(array, value) {
    //ternary operator to return boolean about array containing a specific value
    return array.includes(value) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// _.each = function(collection, func) {
//     // if collection is array 
//         //function takes in more parameters (current index and array itself)
//     // else collection is object
// }

// declare function
_.each = function(collection, func) {
    //determine if collection is an array
    if (Array.isArray(collection)) {
        //iterate through array
        for (let i = 0; i < collection.length; i++) {
            //invoke function for each index
            func(collection[i], i, collection);
        }
        //determine if collection is an object
    } else if (typeof collection === "object") {
        //iterate through object
        for (let key in collection) {
            //invoke function for each property
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// declare function
_.unique = function(array) {
    //initialize empty array
    let output = [];
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //determine if element is a duplicate or is unique
        if (_.indexOf(output, array[i]) === -1 && !output.includes(array[i])) {
            //push unique elements into output
            output.push(array[i]);
        }
    }
    //return output
    return output;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//declare function
_.filter = function(array, func) {
    //initialize empty array
    let filter = [];
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //determine if invoked function returns true
        if (func(array[i], i, array)) {
            //if true: push elements into filter
            filter.push(array[i]);
        }
    }
    //return filter
    return filter;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//declare function
_.reject = function(array, test) {
    //initialize empty array
    let reject = [];
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //determine if test returns false
        if (!test(array[i], i, array)) {
            //if false: push elements into reject
            reject.push(array[i]);
        }
    }
    //return reject
    return reject;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//declare function
_.partition = function(array, test) {
    //initialize empty array w/ nested arrays
    let output = [[], []];
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //determine if element is truthy/falsy
        if (test(array[i], i, array)) {
            //push truthy elements into output[0]
            output[0].push(array[i])
            } else {
            //push falsy elements into output[1]
            output[1].push(array[i]);
        }
    }
    //return output
    return output;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//declare function
_.map = function(collection, func) {
    //initialize empty array
    let output = [];
    //determine if collection is an array
    if (Array.isArray(collection)) {
        //iterate through array
        for (let i = 0; i < collection.length; i++) {
            //push modified elements into output
            output.push(func(collection[i], i, collection));
        }
    } else { //if collection is an object
        //loop over object
        for (let key in collection) {
            //push modified values into output
            output.push(func(collection[key], key, collection));
        }
    }
    //return output
    return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//declare function
_.pluck = function(array, property) {
    //initialize empty array
    let output = [];
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //determine if each element (object) has property
        if (array[i].hasOwnProperty(property)) {
            //if true: push property into output
            output.push(array[i][property])
        }
    }
    //return array of values from the nested objects
    return _.map(output, _.identity);
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//declare function
_.every = function(collection, test) {
    //determine if collection is an array
    if (Array.isArray(collection)) {
        //determine if test wasn't provided
        if (!test) {
            //if true: iterate through array
            for (let i = 0; i < collection.length; i++) {
                //determine if an element is falsy
                if (!collection[i]) {
                    //return false
                    return false;
                }
            }
            //if test was provided
        } else { 
            //iterate through array
            for (let i = 0; i < collection.length; i++) {
                //determine if function call is falsy
                if (!test(collection[i], i, collection)) {
                    //if true: return false
                    return false;
                }
            }
        }
        //if collection is an object
    } else {
        //if test was not provided
        if (!test) {
            //loop over object
            for (let key in collection) {
                //determine if one of the values are falsy
                if (!collection[key]) {
                    //return false
                    return false;
                }
            }
            //if test was provided
        } else {
            //loop over object
            for (let key in collection) {
                //determine if function call returns false
                if (!test(collection[key], key, collection)) {
                    //if so: return false
                    return false;
                }
            }
        }
    }
    //return true ONLY IF none of the values are falsy AND the function call returns true
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//declare function
_.some = function(collection, test) {
    //determine if collection is array
    if (Array.isArray(collection)) {
        //determine if test wasn't provided
        if (!test) {
            //iterate through array
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) { //if element resolves to truthy
                    return true; //return true
                }
            }
        } else { //else if test is provided
            //iterate through array
            for (let i = 0; i < collection.length; i++) {
                //determine if test === true
                if (test(collection[i], i, collection)) { 
                    return true; //return true
                }
            }
        }
    //else if collection is object
    } else {
         //if test not provided
        if (!test) {
            //loop over object
            for (let key in collection) {
                //determine if value is truthy
                if (collection[key]) { 
                    //return true
                    return true; 
                }
            }
            //else if test is provided
        } else { 
            //loop over object
            for (let key in collection) {
                //determine if test produces true
                if (test(collection[key], key, collection)) {
                    //return true if test === true
                    return true;
                }
            }
        }
    }
    //return false if all elements equate to false
    return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, test, seed) {
    let result;
    // determine if seed is not given
    if(seed === undefined) {
        //assign first index of array to result
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            //reassign result to result of callback function
            result = test(result, array[i], i);
        }
    } else { //seed is given
        //assign seed to result
        result = seed;
        //iterate through array
        for (let i = 0; i < array.length; i++) {
            //reassign result to result of callback function
            result = test(result, array[i], i, array);
        }
    }
    //return result
    return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//declare function
_.extend = function(object1, object2, ...objects) {
    //UPDATED ANSWER post week 4 Bootcamp
    return Object.assign(object1, object2, ...objects)

    // //loop over object2
    // for (let key in object2) {
    //     //determine if object1 has object2[key]
    //     if (!object1.hasOwnProperty(object2[key])) {
    //         //if not: then assign object2[key] to object1
    //         object1[key] = object2[key];
    //         }
    //     }
    //     //if more than 2 arguments are passed
    //     if (arguments) {
    //         //iterate through arguments (arrays)
    //         for (let i = 0; i < arguments.length; i++) {
    //             //loop over nested objects
    //             for (let key in arguments[i]) {
    //                 //determine if the properties don't exist in object1
    //                 if (!object1.hasOwnProperty(arguments[i][key])) {
    //                     //if so: assign the property to object1
    //                     object1[key] = arguments[i][key];
    //                 }
    //             }
    //         }
    //     }
    // //return updated object1
    // return object1;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
