/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare empty animal object
var animal = {};

//dot notation to add species property
animal.species = "Chinchilla";
//bracket notation to add name property
animal['name'] = "Pixie";
//dot notation to add noises property assigned with empty array
animal.noises = [];

//print object
//console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare empty array
var noises = [];

//bracket notation to add string to array
noises[0] = 'bark';
//use push to add another element
noises.push('squeak');
//use unshift to add another element
noises.unshift('hoo');
//use bracket syntax and length method to add a 4th noise
noises[noises.length] = 'foo';

//print length of noises
//console.log(noises.length);

//print array
//console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//bracket notation to assign noises arrray to noises key
animal['noises'] = noises; 

//add another noise to the noise array in the noise key
animal.noises.push('sniff');

//print the updated animal object
//console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  Different ways of accessing properties on objects are dot notation and bracket notation.
 *  It is important to remember to use quotations in bracket notation since keys are considered strings.
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare empty animals array
var animals = [];

//push animal object into animals array
animals.push(animal);

//initialize duck object
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};

//push duck into animals
animals.push(duck);

//create two more animal objects with species, name, noises keys
var dog = {
  species: 'dog',
  name: 'Jazz',
  noises: ['bark', 'woof', 'ahroo']
};

var cat = {
  species: 'cat',
  name: 'Francise',
  noises: ['meow', 'chirp', 'mrow']
};

//unshift both dog and cat to animals array
animals.unshift(dog, cat);

//log animals
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare empty friends array
var friends = [];
//Using an array to maintain an ordered list of friends

//declare getRandom function that takes in an array
function getRandom(array) {
  //return random index of array 
  return array[Math.floor(Math.random() * array.length)];
}

//use getRandom to push an animal into friends array
getRandom(animals);

//use bracket notation to add friends key to one of the animals
cat['friends'] = friends;

//log friends
console.log(friends);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}