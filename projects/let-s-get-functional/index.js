// #!/usr/bin/env node

'use strict';

const { countBy, castArray, assign } = require('lodash');
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
    let males = _.filter(array, (customer) => {return customer.gender === "male"});
    return males.length;
};

var femaleCount = function(array) {
    let females = _.reduce(array, (sum, customer) => {
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

var averageBalance = (array) => {
    let balance = 0;
    let total = _.map(array, (current) => {
        current = current.balance.replace(/[$,]/g, '');
        return Number(current);
    });
    for (let i = 0; i < total.length; i++) {
        balance += total[i];
    }
    return balance / array.length;
};

var firstLetterCount = function(array, char) {
    let count = _.reduce(array, (total, index) => {
        if (index.name.charAt(0) === char.toUpperCase() || index.name.charAt(0) === char.toLowerCase()) {
            total++;
        }
        return total;
    }, 0);
    return count;
};

var friendFirstLetterCount = (array, customer, char) => {
    let count = 0;
    _.filter(array, (current) => {
        if (customer === current.name) {
            for (let i = 0; i < current.friends.length; i++) {
                if (current.friends[i].name[0] === char.toUpperCase() || current.friends[i].name[0] === char.toLowerCase()) {
                    count++;
                }
            }
        }
    });
    return count;
};

var friendsCount = (array, name) => {
    let count = [];
    for (let i = 0; i < array.length; i++) {
        _.filter(array[i].friends, (index) => {
            if (index.name === name) {
                 count.push(array[i].name);
            }
        })
    }
    return count;
};

var topThreeTags = (array, result = []) => {
    let tags = [];
    let count = {};
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].tags.length; j++) {
            tags.push(array[i].tags[j]);
            if (!count.hasOwnProperty(array[i].tags[j])) {
                count[array[i].tags[j]] = 0;
            }
        }
    }
    for (let i = 0; i < tags.length; i++) {
        if (count.hasOwnProperty(tags[i])) {
            count[tags[i]] += 1;
        }
    }
    for (let key in count) {
        if (count[key] > 2) {
            result.push(key);
        }
    }
    return result;
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
