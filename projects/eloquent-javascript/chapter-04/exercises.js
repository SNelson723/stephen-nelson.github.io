////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(a, b, step = 1) {
  let sequence = [];
  if (a < b && step > 0) {
    for (let i = a; i <= b; i += step) {
      sequence.push(i);
    }
  } else if (a > b && step < 0) {
      for (let i = a; i >= b; i -= step) {
        sequence.push(i);
      }
  }
  return sequence;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, sum = 0) {
  //iterate through array
  for (let i = 0; i < array.length; i++) {
    //update sum
    sum += array[i];
  }
  //return sum
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array, reversed = []) {
  //iterate through array in reverse
  for (let i = array.length - 1; i >= 0; i--) {
    //push elements into reversed array
    reversed.push(array[i]);
  }
  //return new array
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array, temp = []) {
  //loop over array in reverse and push element into temp array and pop that element out of array
  for (let i = array.length - 1; i >= 0; i--) {
    temp.push(array[i]);
    array.pop(array[i]);
  }
  //push all elements back into array so they are in reverse (array is mutated)
  for (let i = 0; i < temp.length; i++) {
    array.push(temp[i]);
  }
  //return reversed original array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for (let i = array.length - 1; i >= 0; i--) {
    rest = {value: array[i], rest: rest}
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
  // base
  if (list.rest === null) {
    array.push(list.value);
    return array;
  }
  //recursion
  array.push(list.value);
  return listToArray(list.rest, array);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  //create a new object and initialize value property with the value argument
  let newList = {
    value,
    rest: list //rest property contains the arrayToList function which extends the list beyond the new value
  };
  //return new object with the value argument at the beginning of the list
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) { //discuss on Monday
  //if num === 0
  if ( num === 0) {
      // return current value of value property
    return list.value;
  } else if (num < 0) {
    //return undefined
      return undefined;
  }
  return nth(list.rest, num - 1); //num acts as a recursive anchor to find specific values
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  //determine if both params are not objects
  if (typeof a !== 'object' && typeof b !== 'object') {
    return a === b;
    //determine if one is not an object
  } else if (typeof a !== "object" || typeof b !== 'object') {
    return false;
    //if recursive => determine if both values passed are arrays and are identical
  } 

  //get arrays of the keys
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  //determine if the legnths are equal
  if (keysA.length !== keysB.length) {
    return false;
  }
  //iterate through one of the arrays
  for (let i = 0; i < keysA.length; i++) {
    //determine if one array includes the current key and determing if the values are not equal
    if (!keysB.includes(keysA[i]) || !deepEqual(a[keysA[i]], b[keysB[i]])) {
      return false;
    }
  }
  //return true if all other tests pass
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
