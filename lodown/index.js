'use strict';

const { values } = require("lodash");

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: takes in a value and returns it unchanged
 * @param {*} value :The value to return
 * @returns {+} value: Function returns the value unchanged
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: takes in a value and returns its datatype
 * @param {*} value : The value to be tested for datatype
 * @returns {+} string : Function returns string of datatype
 */

function typeOf(value) {
    if (Array.isArray(value)) { 
        return "array"; 
    } else if (typeof value === "string") {
        return "string";
    } else if (typeof value === "number") {
        return "number";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "boolean") {
        return "boolean";
    } else if (typeof value === "function") {
        return "function";
    } else if (value === null) {
        return "null";
    } else if (typeof value === "object") {
        return "object";
    }
}
module.exports.typeOf = typeOf;


/**
 * first: takes in an array and number and returns an array, element, or empty array literal
 * @param {*} array : The array to be accessed
 * @param {*} number : The number to be used to determine the return value
 * @returns {+} returns: Function returns
 * an empty array if number < 0 or if array is not an array, 
 * the first element of the array if number === NaN, 
 * the input array if number > array.length,
 * an array with elements equal to the input number
 */
function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if(typeof number !== "number") {
        return array[0]; 
    } else if (number > array.length) {
        return array;
    } else {
        let output = [];
        for (let i = 0; i < array.length; i++) {
            if (i < number) {
                output.push(array[i]);
            }
        }
        return output;
    }
}
module.exports.first = first;


/**
 * last: takes in an array and number and returns an array, element, or empty array literal
 * @param {*} array : The array to be accessed
 * @param {*} number : The number used to determine the return value 
 * @returns {+} returns: 
 * an empty array if number < 0 or if array is not an array, 
 * the last element of the array if number === NaN, 
 * the input array if number > array.length,
 * an array with elements equal to the input number - 1
 */
function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if(typeof number !== "number") {
        return array[array.length -1];
    } else if (number > array.length) {
        return array;
    } else {
        let output = [];
        for (let i = 0; i < array.length; i++) {
            if (i >= (number - 1)) {
                output.push(array[i]);
            }
        }
        return output;
    }
}
module.exports.last = last;


/**
 * indexOf: takes in an array and value and returns the value's index position
 * @param {*} array : The array to be accessed
 * @param {*} value : The value to be tested in conditional statement
 * @returns {+} number: Function returns a value's index position or -1 if 
 * element is not included in the input array
 */
function indexOf(array, value) {
    if (array.includes(value)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }
    } else if (!array.includes(value)) {
        return -1;
    }
}
module.exports.indexOf = indexOf;


/**
 * contains: takes in an array and value to return a boolean value
 * @param {*} array : The array to be accessed
 * @param {*} value : The value to be searched for in the accessed array
 * @returns {+} boolean: Function returns boolean value based on if the array contains
 * the input value
 */
function contains(array, value) {
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;


/**
 * unique: Takes in an array and returns a new array
 * @param {*} array : The array that is looped over to push unique values into the new array
 * @returns {+} array: Function returns a new array containing unique elements (no duplicates)
 */
function unique(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (_.indexOf(output, array[i]) === -1 && !output.includes(array[i])) {
            output.push(array[i]);
        }
    }
    return output;
}
module.exports.unique = unique;


/**
 * filter: Takes in an array and function and returns new array
 * @param {*} array : The array containing the values that will be filtered through
 * @param {*} func  : The function invoked on each element and produces a boolean value
 * @returns array: Function returns a new array of values based on the tested boolean value
 */
function filter(array, func) {
    let filter = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            filter.push(array[i]);
        }
    }
    return filter;
}
module.exports.filter = filter;


/**
 * filter: Takes in an array and function and returns new array
 * @param {*} array : The array containing the values that will be filtered through
 * @param {*} func  : The function invoked on each element and produces a boolean value
 * @returns array: Function returns a new array of values based on the tested boolean value
 */
function reject(array, test) {
    let reject = [];
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i], i, array)) {
            reject.push(array[i]);
        }
    }
    return reject;
}
module.exports.reject = reject;


/**
 * partition: takes an array and function to return a new array
 * @param {*} array : Used to iterate through 
 * @param {*} test : Callback function that tests each element and returns a boolean value
 * @returns {+} array with nested arrays: Function returns a new array with two nested arrays
 * containing elements based on the test's return value (true/false)
 */
function partition(array, test) {
    let output = [[], []];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            output[0].push(array[i])
            } else {
            output[1].push(array[i]);
        }
    }
    return output;
}
module.exports.partition = partition;



function map(collection, func) {
    let output = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            output.push(func(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            output.push(func(collection[key], key, collection));
        }
    }
    return output;
}
module.exports.map = map;


/**
 * 
 * @param {*} array 
 * @param {*} property 
 * @returns 
 */
function pluck(array, property) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].hasOwnProperty(property)) {
            output.push(array[i][property])
        }
    }
    return _.map(output, _.identity);
}
module.exports.pluck = pluck;


/**
 * 
 * @param {*} collection 
 * @param {*} test 
 * @returns 
 */
function every(collection, test) {
    if (Array.isArray(collection)) {
        if (!test) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    return false;
                }
            }
        } else { 
            for (let i = 0; i < collection.length; i++) {
                if (!test(collection[i], i, collection)) {
                    return false;
                }
            }
        }
    } else {
        if (!test) {
            for (let key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }
        } else {
            for (let key in collection) {
                if (!test(collection[key], key, collection)) {
                    return false;
                }
            }
        }
    }
    return true;
};
module.exports.every = every;


/**
 * 
 * @param {*} collection 
 * @param {*} test 
 * @returns 
 */
function some(collection, test) {
    if (Array.isArray(collection)) {
        if (!test) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) {
                    return true;
                }
            }
        } else {
            for (let i = 0; i < collection.length; i++) {
                if (test(collection[i], i, collection)) { 
                    return true;
                }
            }
        }
    } else {
        if (!test) {
            for (let key in collection) {
                if (collection[key]) { 
                    return true; 
                }
            }
        } else { 
            for (let key in collection) {
                if (test(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    }
    return false;
}
module.exports.some = some;


/**
 * 
 * @param {*} array 
 * @param {*} test 
 * @param {*} seed 
 * @returns 
 */
function reduce(array, test, seed) {
    let reduced;
    if (seed) {
        reduced = seed;
        for (let i = 0; i < array.length; i++) {
            reduced = test(reduced, array[i], i);
        }
    } else if (seed === undefined) {
        reduced = array[0];
        for (let i = 1; i < array.length; i++) {
            reduced = test(reduced, array[i], i);
            }
        } else {
        return 0;
    }
    return reduced;
}
module.exports.reduce = reduce;


/**
 * 
 * @param {*} object1 
 * @param {*} object2 
 * @returns 
 */
function extend(object1, object2) {
    for (let key in object2) {
        if (!object1.hasOwnProperty(object2[key])) {
            object1[key] = object2[key];
            }
        }
        if (arguments) {
            for (let i = 0; i < arguments.length; i++) {
                for (let key in arguments[i]) {
                    if (!object1.hasOwnProperty(arguments[i][key])) {
                        object1[key] = arguments[i][key];
                    }
                }
            }

        }
    return object1;
}
module.exports.extend = extend;