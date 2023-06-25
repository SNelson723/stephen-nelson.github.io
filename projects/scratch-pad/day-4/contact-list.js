// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // declare empty array
    var user = {};
    // assign user.id with value of id
    user.id = id;
    // assign user.nameFirst with value of nameFirst
    user.nameFirst = nameFirst;
    // assign user.nameLast with value of nameLast
    user.nameLast = nameLast;
    // return user
    return user;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];

    return {
        length: function() {
            return contacts.length; // we implemented the length api for you //
        },
        // create addContact function taking in contact object as a parameter
        addContact: function (contact) {
            // push contact into contacts array
            contacts.push(contact);
        },
        // create findContact function taking in a full name string as a parameter
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++) {
                // determine if fullName is a match
                if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    //return contact object
                    return contacts[i];
                } else {
                    //return undefined
                    return undefined;
                }
            }
        },
        removeContact: function(contact) {
            //loop over contacts array
            for (var i = 0; i < contacts.length; i++) {
                // splice out the object
                contacts.splice(contact, 1);
            }
        },
        printAllContactNames: function() { 
            //declare empty array
            var array = [];
            // loop over contacts
            for (var i = 0; i < contacts.length; i++) {
                // push full names into empty array
                array.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast);
            }
            //initialize string variable with joined array (line breaks)
            var string = array.join('\n');
            return string;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
