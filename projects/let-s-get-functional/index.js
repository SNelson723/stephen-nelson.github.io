// #!/usr/bin/env node

'use strict';

const { countBy, castArray } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *      CD back into workspace with cd .. if not in /workspace
 * 
 *    npm start --prefix ./stephen-nelson.github.io/projects/let-s-get-functional
 * 
 *      to run os test and os submit ( need to be in base workspace (stephen-nelson.github.io))
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer) {
        return customer.gender === "male";
    })
    return males.length;
};``

var femaleCount = function(array) {
    let females = _.reduce(array, function(sum, customer) {
        if (customer.gender === "female") {
            sum++;
        }
        return sum;
    }, 0);
    return females;
};


var oldestCustomer = (array) => {
    let oldest = _.reduce(array, function(accumulator, current) {
        let customer = accumulator;
        if (current.age > accumulator.age) {
            customer = current.name;
        }
        return customer;
    })
    return oldest;
};

var youngestCustomer = function(array) {
    let oldest = _.reduce(array, function(accumulator, current) {
        let customer = current;
        if (current.age > accumulator.age) {
            customer = accumulator.name;
        }
        return customer;
    })
    return oldest;
};

var averageBalance;

var firstLetterCount = function(array, char) {
    let count = _.filter(array, function(customer) {
        if(customer.name[0] === char.toUpperCase() || customer.name[0] === char.toLowerCase()) {
            return customer.name;
        }
    })
    return count.length;
};

var friendFirstLetterCount = (array, customer, char) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            for (let j = 0; j < array[i].friends.length; j++) {
                if (array[i].friends[j].name[0] === char.toUpperCase()) {
                    count++;
                } else if (array[i].friends[j].name[0] === char.toLowerCase()) {
                    count++;
                }
            }
        }
    }
    return count;
};

var friendsCount = (array, name) => {
    let fCount = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) {
                fCount.push(array[i].name); 
            }
        }
    }
    return fCount;
};

var topThreeTags = (array) => {

};

var genderCount = (array) => {
    let result = {
        male: _.reduce(array, (sum, current) => {
            if (current.gender === "male") {
                sum++;
            }
            return sum;
        }, 0),
        female: _.reduce(array, (sum, current) => {
            if (current.gender === "female") {
                sum++;
            }
            return sum;
        }, 0),
        "non-binary": _.reduce(array, (sum, current) => {
            if (current.gender === "non-binary") {
                sum++;
            }
            return sum;
        }, 0)
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
