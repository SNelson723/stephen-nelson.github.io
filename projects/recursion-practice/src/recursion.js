// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product = 1) {
  //base 
  if (n === 0) { //if n === 0
    return product; //return product
    } else if (n < 0) { //if negative number given
        return null; //return null
  }
  //recursion
  product *= n; //get factorial
  return factorial((n - 1), product); //invoke callback function
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, added = 0) {
  //base
  if (array.length === 0) {
    return added;
  }
  //recursion
  added += array[0];
  //return function call
  return sum(array.slice(1), added)
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, sum = 0) { //CHECK IN REPLIT
  //base
  if (array.length === 0) {
    return sum;
  }
  //recursion
  if (array[0].length === 1) {
    sum += array[0];
  } else {
    for (let i = 0; i < array[0].length; i++) {
      sum += array[0][i];
    }
  }
  return arraySum(array.slice(1), sum);
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base
  if (n === 0) { // if n is even
    return true; //return true
  } else if (n === 1) { //if n is odd
    return false; //return false
  } else if (n < 0) { //if n is negative
    n *= -1; //convert n to positive integer 
  }
  //recursive
  return isEven(n - 2); //decrement n by 2 until base case is reached
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum = 0) {
//base
  if (n === 0) { //once n has been decremented/incremented to 0
    //return sum
    return sum;
  }
  //recursive callback functions based on pos/neg integers
  if (n > 0) { //if n is positive
    sum += (n - 1);
    // invoke callback function (positive case)
    return sumBelow((n - 1), sum);
    //if n is negative
  } else if (n < 0) {
    //add one up from neg number to sum
    sum += (n + 1);
    //invoke callback function for (negative case)
    return sumBelow((n + 1), sum)
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, result = []) {
  //base
  if (x === y) {
    return result.slice(1); //final returned value
  }
  // recursion
  if (x < y) {
    result.push(x); //push x
    return range((x + 1), y, result); //callback function
  } else if (x > y) {
    result.push(x); //push x
    return range((x - 1), y, result); //callback function
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, product = 0) {
  //if exp === negative
  if (exp < 0) {
    //base
    if (product === base**exp) {
      //use toFixed to get specific # of decimals and use Number() to convert the string
      return Number(product.toFixed(5));
    }
    // assign product the exponential value
    product = (base**exp);
    //invoke callback function
    return exponent(base, exp, product);
  //if exp === positive
  } else if (exp > 0) {
      //base 
  if (product === base**exp) {
    //return exponential value
    return product;
  }
  //recursion
    //assign product the exponential value
  product = base**exp;
  //invoke callback function
  return exponent(base, exp, product);
//if exp === 0
  } else {
    //base
    if (product === base**exp) {
      //return exponential value
      return product;
    }
    //recursion
      //assign product exponential value
    product = base**exp;
    //invoke callback function
    return (exponent(base, exp, product));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  if (n === 1 ) { //determine if n is a power of 2
    //return true
    return true;
    //determine if n is not a power of 2
  } else if (n % 2 !== 0 || n === 0) {
    //return false
    return false;
  }
  //recursion
  //invoke callback function until base case is met
  return powerOfTwo(n / 2); 
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, reversed = string) {
  //base
  if (string !== reversed) {
    //return final value
    return reversed
  }
  //recursion
    //reversed should have value of string (but in reverse)
  reversed = string.split("").reverse().join("");
  //invoke callback function
  return reverse(string, reversed);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base
  //wither string length down by comparison
  if (string.length < 2) {
    //return true
    return true;
    //if no match 
  } else if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) {
    //return false
     return false;
     //if match
  } else if (string[0].toLowerCase() === string[string.length -1].toLowerCase()) {
    //slice off first char
    string.slice(1);
  }
  //recursion
  //invoke callback function slicing off last char
  return palindrome(string.slice(-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, product = 0) {
  if (product > 0 || product < 0) {
    return product;
  } else if (x === 0 || y === 0) {
    return 0;
  }
  for (let i = 0; i < y; i++) {
    product += x;
  }
  return multiply(x, y, product);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base
  //determine if strings are not identical
  if (str1[0] !== str2[0]) {
    return false
    //determind if strings are both empty/undefined
  } else if (str1 === "" && str2 === "") {
    //returning true means each character was a match
      return true;
  }
  //recursion
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base
  if (Array.isArray(str)) {
    return str;
  }
  // recursion
  str = str.split("");
  //invoke callback function
  return createArray(str);
};

// 17. Reverse the order of an array
var reverseArr = function (array, reversed = []) {
  // base
  if (array.length === 0) {
    // return reversed array
    return reversed;
  }
  // recursion
  reversed.unshift(array[0]);
  //invoke callback function
  return reverseArr(array.slice(1), reversed);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, array = []) {
  //base
  //exit once array.length === length
  if (array.length === length) {
    // return full array
    return array;
  }
  //recursion
  array.push(value);
  //invoke callback function
  return buildList(value, length, array);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
  // base
  if (array.length === 0) {
    //return final count
    return count;
  }
  // recursion
  if (array[0] === value) {
    //if true, count increments
    count++
  }
  //invoke callback function
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, map = []) { //callback is the function invoked for every element
  // base
  if (array.length === 0) {
    //return new array with modified values
    return map;
  }
  // recursion
  //push array[0] as the parameter in the callback parameter
  map.push(callback(array[0]));
  //invoke parent function's callback function
  return rMap(array.slice(1), callback, map);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // base
  if (n < 0) {
    //return null for neg nums
    return null;
    //if at beginning of sequence
  } else if (n < 2) {
    //return n
    return n;
  }
  // recursion
  if (n >= 2) {
    //invoke callback function
    return nthFibo(n - 1) + nthFibo(n - 2)
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, capitalized = []) {
  // base
  if (input.length === 0) {
    return capitalized;
  }
  // recursion
  capitalized.push(input[0].toUpperCase());
  //invoke callback function
  return capitalizeWords(input.slice(1), capitalized)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, capped = []) {
    // base
    if (array.length === 0) {
      //return new array with first characters capitalized
      return capped;
    }
    // recursion
    //separate first char and capitalize concat with rest of string
    capped.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
    //invoke callback function 
    return capitalizeFirst(array.slice(1), capped)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays, array = []) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  // base
  if (str.length === 0) {
    //return final object
    return obj;
  }
  // recursion
  if (obj.hasOwnProperty(str[0])) {
    //if property exists: value++
    obj[str[0]]++;
  } else {
    //if not: assign property (str[0]: 1)
    obj[str[0]] = 1;
  }
  //invoke callback function
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, comp = []) {
  // base: exit function once list.length === 0
  if (list.length === 0) {
    //return new array
    return comp;
  }
  // recursion
  //determine if value doesn't exist
  if (!comp.includes(list[0])) {
    //if not, push value into new array
    comp.push(list[0]);
    //determine if list[0] exists in comp AND doesn't match the last value in comp
  } else if (comp.includes(list[0]) && list[0] !== comp[comp.length - 1]) {
    //push the value into comp
    comp.push(list[0]);
  }
  //invoke callback function
  return compress(list.slice(1), comp)
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, minimizeZero = []) {
  // base: exit function when array.length === 0
  if (array.length === 0) {
    // return final array
    return minimizeZero;
  }
  // recursion
  // determine if array[0] is 0 AND doesn't === last value in minimizeZero
  if (array[0] === 0 && array[0] !== minimizeZero[minimizeZero.length - 1]) {
    minimizeZero.push(array[0]);
    //push all values !== 0
  } else if (array[0] !== 0) {
    minimizeZero.push(array[0]);
  }
  //invoke callback function
  return minimizeZeroes(array.slice(1), minimizeZero);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, alt = []) {
  // base: exit once array.length === 0
  if (array.length === 0) {
    //return final alteranting array
    return alt;
  }
  //recursion
  //determine if value isn't zero and determine whether the number should be pos or neg based on alt.length
  //determine if array[0] !== 0
  if (array[0] !== 0) {
    //if position needs a positive value
    if (alt.length === 0 || alt.length % 2 === 0) {
      //if array[0] > 0
      if (array[0] > 0) {
        alt.push(array[0]);
      //else if array[0] < 0
      } else {
        alt.push(array[0] *= -1)
      }
    //if position needs a negative value
    } else if (alt.length % 2 !== 0) {
      //if array[0] < 0
      if (array[0] < 0) {
        alt.push(array[0]);
      //if array[0] > 0
      } else {
        alt.push(array[0] *= -1);
      }
    }
  }
  //invoke callback function with updated arrays
  return alternateSign(array.slice(1), alt);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newStr = []) {
  // base: join newStr into a string and exit function
  if (str.length === 0) {
    return newStr.join(" ");
  }
  // recursion
  //convert str to array
  if (!Array.isArray(str)) {
    str = str.split(" ");
  }
  // determine if index is a single digit string 1 - 9 and replace the text equivilant
  if (str[0] === '0') {
    str[0] = 'zero';
    newStr.push(str[0]);
    //if index === '1'
  } else if (str[0] === '1') {
      str[0] = 'one';
      newStr.push(str[0]);
    //if index === '2'
  } else if (str[0] === '2') {
      str[0] = 'two';
      newStr.push(str[0]);
    // if index === '3'
  } else if (str[0] === '3') {
      str[0] = 'three';
      newStr.push(str[0]);
    //if index === '4'
  } else if (str[0] === '4') {
      str[0] = 'four';
      newStr.push(str[0]);
    //if index === '5'
  } else if (str[0] === '5') {
      str[0] = 'five';
      newStr.push(str[0]);
    //if index === '6
  } else if (str[0] === '6') {
      str[0] = 'six';
      newStr.push(str[0]);
    // if index === '7'
  } else if (str[0] === '7') {
      str[0] = 'seven';
      newStr.push(str[0]);
    // if index === '8'
  } else if (str[0] === '8') {
      str[0] = 'eight';
      newStr.push(str[0]);
    //if index === '9'
  } else if (str[0] === '9') {
      str[0] = 'nine';
      newStr.push(str[0]);
    //push all other values into newStr
  } else {
      newStr.push(str[0]);
  }
  // invoke callback function
  return numToText(str.slice(1), newStr);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
