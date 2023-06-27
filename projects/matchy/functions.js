/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare search function
function search(array, string) {
    // loop over array
    for (let i = 0; i < array.length; i++) {
        // find if name matches string
        if (array[i].name === string) {
            // return object
            return array[i];
        }
    }
    // return null
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare replace function 3 parameters (array, string, object)
function replace(array, string, object) {
    // loop over array
    for (let i = 0; i < array.length; i++) {
        // determin if index.name matches the string
        if (array[i].name === string) {
            // replace object
            array[i] = object;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare remove function 2 parameters (array, name)
function remove(array, name) {
    // loop over array
    for (let i = 0; i < array.length; i++) {
        // if key name matches name
        if (array[i].name === name) {
            // remove object with splice
            array.splice(array[i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare add function 2 parameters (array, object) ==> object = new object
function add(array, object) {
    // loop over array
    for (let i = 0; i < array.length; i++) {
        // check if name is unique
        if (object.name !== array[i].name && object.name.length > 0 && object.name.length > 0) {
            // push object into array
            array.push(object);
        } else {
            // return array without the new object
            return array;
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
