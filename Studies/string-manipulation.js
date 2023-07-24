//operators, methods, escape characters, template literals
/**
 * STRING MANIPULATION
 * 
 * OVERVIEW => String manipulation in JavaScript is a practice that involves a few
 * methods available to software engineers. These methods range from using operators to 
 * string methods, escape characters, and template literals.
 */

/**
 * OPERATORS =>  Perhaps the most direct way to create/manipulate a string, operators
 * are used to assign/reassign values to variables. Using this approach allows us to 
 * hardcode specifically what we want the value to be, including what the string is,
 * what is capitalized, where specific characters go, and how long the string is.
 */

//using the assignment operator to assign a string value
let statement = "This is a string";

//using the assignment operator to reassign a new string value
statement = "This is also a string";


/**
 * STRING METHODS => Strings and arrays neither are the same datattype or have the same
 * purpose, but they do share some similarities in that they have their own methods of
 * manipulations, they have a length property, zero indexed list. Just like the array
 * methods, string methods are executed in the same fashion => string.concat(). 
 * 
 * Some of the methods we'll be looking at are:
 * 
 * 1) .concat()
 * 2) .slice()
 * 3) .charAt()
 * 4) .split()
 * 5) .toUpperCase() && .toLowerCase()
 * 6) .replace()
 */

/**
 * 1) .concat() => This method concatentates (adds) new sring arguments/values to the 
 * string on which the method is being invoked. As result, a new string is formed and
 * only works when string parameters are given (either a string variable or a hard
 * coded string inside the parenthesis).
 * 
 * SYNTAX: .concat(' ', string)
 */

let sentenceStart = "This sentence";
let sentenceEnd = "is now complete";
let completeSentence = sentenceStart.concat(" ", sentenceEnd);// "This sentence is now complete"


/**
 * 2) .slice() => This method extracts a section of a string (without mutating the
 * the original string) and produces a copy containing that segment. the slice method
 * has one mandatory parameter (start) and one optional parameter (end). Both parameters
 * are length positions that are passed as numbers.
 * 
 * SYNTAX => .slice(start, end)
 */

let string = "How to slice this string";
let sliced = string.slice(2, 14); // "w to slice t"


/**
 * 3) .charAt() => The charAt() method is useful for when a developer needs to access a 
 * specific character in a string to manipulate it in some fashion. The only parameter
 * this method takes in is the desired character's index position passed in as a number.
 * 
 * SYNTAX => .charAt(3)
 */

/**
 * This variable using .charAt() on the variable string is pointing to the character
 * "H" because .charAt(0) points to the string's first index position. string.charAt(5)
 * would point to the character "o" because it resides in the fifth index position
 */

let char = string.charAt(0);


/**
 * 4) .split() => The split method is used to separate a string at a given pattern and put
 * the result in an array. From there, each index can be accessed and manipulated but that
 * still leaves an array instead of a string. In order to revert the array back into a string,
 * the array.join() method is used and maintains the reverse behavior of the split method and
 * also takes in a pattern to join the array's elements around.
 */

/**
 * The variable word is first being initialized with a string "Howdy". On line 99, the variable
 * is being split at EACH character with "" having no spaces so each index of the array contains
 * one character. last word.join("") on line 100 joins the array at each index reforming the string "Howdy".
 */

let word = "Howdy";
word = word.split(""); // ==> ["H", "o", "w", "d", "y"];
word = word.join(""); // reverted back to "Howdy"

/**
 * The variable words is a string that contains two words "Howdy Partner". On line 111, the words
 * variable is being split at EACH space in the string meaning the array's indexes will contain full
 * words and not single characters. On line 112, the .join() method is used piecing the string back
 * together with the initial space. Closed quotes "" would return the string as "Howdypartner" since
 * the space isn't provided to the computer to add.
 */

let words = "Howdy partner";
words = words.split(" "); // ==> ["Howdy", "partner"];
words = words.join(" "); //reverted back to "Howdy partner"


/**
 * 5) .toUpperCase() and .toLowerCase() => Are useful for updating strings and switching the
 * characters from being capitalized to being lower cased. No parameters are required for 
 * these methods because their one function is to manipulate the case of the string or 
 * specified characters within the string. They go hand in hand with .charAt() or bracket
 * notation when a specific character is the developer's target and can be followed
 * with .slice() to add the rest of the string to the newly lower cased or upper cased
 * character.
 * 
 * SYNTAX:
 * 
 *      let string = "howdy";
 *      string = string.toUpperCase(); => "HOWDY"
 */

/**
 * This example uses a string value "i do like coding". The first two examples upperCased and lowerCased
 * are used on string2 creating different results. On line 138, string2.toUppercase() capitalizes ALL the 
 * characters in the string and on line 139 toLowerCase() reverts those characters back to lower case.
 */

let string2 = "i do like coding"

string2 = string2.toUpperCase(); //=> "I DO LIKE CODING"
string2 = string2.toLowerCase(); //=> i" do like coding"

/**
 * In this example, toUppercase is being used in conjunction with  a few other methods to show how
 * they inhabit the same environment while performing their own tasks. On line 153, newWords is 
 * creating a string that links together 4 methods (in order): charAt(), toUpperCase(), concat(),
 * and slice().
 * 
 * charAt(0) => accesses the first character of the string
 * toUppercase() => capitalizes the target character (at index 0)
 * concat(string2.slice(1)) => adds the rest of the string with the initial first character
 * from string2 sliced off to the capitalized first character of newWords
 */

let newWords = string2.charAt(0).toUpperCase().concat(string2.slice(1)); // "I do like coding"

/**
 * firstCharAtWord is a litte more in-depth because this example loops through an array, but 
 * for good reason. Some situations require coders to capitalize the first letter of each word
 * in a string and as shown above, just using toUpperCase() or toLowerCase() on a string operates
 * on ALL characters in a string. In order to get around this, each word must be separated and accessed
 * like the newWords variable so that each word is properly operated on. On line 168, firstCharAtWord
 * is being initialized as an array that string2 has been split by the spaces. Line 170 loops through 
 * that array and uses charAt().toUpperCase like newWords, but instead of using concat() simply
 * adds with the addition operator followed by the rest of the word with the first character sliced off.
 * Lastly on line 174, firstCharAtWord is joined back into a string with spaces between each added element
 * leaving the string with every word's first character capitalized.
 */

let firstCharAtWord = string2.split(" "); //=> ["I", "do", "like", "coding"]

for (let i = 0; i < firstCharAtWord.length; i++) {
    firstCharAtWord[i] = firstCharAtWord[i].charAt(0).toUpperCase() + firstCharAtWord[i].slice(1);
}

firstCharAtWord = firstCharAtWord.join(" "); //=> "I Do Like Coding"


/**
 * 6) .replace() => Returns a new string with one, some, or all matches of a pattern replaced
 * with one or more specific characters. The pattern to be replaced can be a string or a 
 * regular expression (regex) while the replacement can be a string, character, or function (
 * in some cases).
 * 
 * SYNTAX:
 * 
 *      string.replace($, " ") => replaces the first occurence of $ with a space
 */

/**
 * In this example, nameDog is manipulated with the replace() method by taking the first 
 * occurence of the character "S" and replacing it with "M" changing the string from
 * "Scooby Doo" to "Mcooby Doo"
 */

let nameDog = "Scooby Doo";
nameDog = nameDog.replace("S", "M"); // "Mcooby Doo"

/**
 * In this example, dogName is assigned a string "Scooby Doo" like nameDog above, but different these
 * are different variables pointing to different strings. However, the replace method is still being
 * utilized on dogName but this time with a regex (regular expression) that catches EVERY occurence 
 * of the target character "o" and replaces them with "e" leaving the string as "Sceeby Dee".
 */

let dogName = "Scooby Doo";

//regex /o/g catches every occurence of character "o" and is replaced with "e"
dogName = dogName.replace(/o/g, "e"); 


/**
 * ESCAPE CHARACTERS => Escape characters are typically classified as regular expressions 
 * and are represented by a character that isn't in its literal form. There are many escape
 * characters with their own behavior but a few that will be discussed are as follows:
 * 
 * 1) \n => creates a newline in a string
 * 2) \' and \" => denotes that these are used as punctuation instead of 
 *  initializing a string value
 * 3) \t => adds a horizontal tabular to a string (used well with newline(\n))
 */

/**
 * The variable newLine incorporates the newline character (\n) in its string value and when
 * printed, should like like
 * 
 * Stephen
 * Nelson
 * Jack
 * 
 * The variable names has a string with the same names as in newLine but without the \n character.
 * If a string needs to be manipulated to have new line breaks in the code, there are ways to access
 * these strings through other methods. In the second case, names is being split at each word and 
 * iterated through to add the names separated by a new line to the variable lineNames which when 
 * printed looks like:
 * 
 * Stephen 
 * Nelson
 * Jack
 * 
 */

let newLine = "Stephen\nNelson\nJack\n";

let names = "Stephen Nelson Jack";
names = names.split(" "); //=> ["Stephen", "Nelson", "Jack"];

let lineNames = "";
for (let i = 0 ; i < names.length; i++) {
    lineNames += names[i] + "\n"; //NOTE: make sure in this syntax that \n is wrapped in quotes
}

/**
 * The variable quotes is a simple string but since string are wrapped in quotes, using quotation 
 * marks within the string can cause problems. This can be negated using \' or \" depending on
 * the purpose of the quotes being used. However, notice the single quote didn't need a backslash.
 * This is because double quotes were used to wrap the string instead of single quotes, meaning
 * the computer will not read that single quote as one of the string's boundaries, but the slash
 * is needed for the quotes around famous otherwise the the string will be cut off before famous
 * and the rest of the string will be undefined and disrupt the control flow of the code.
 */

let quotes =  "aren't you \"famous\"?";

/**
 * The tabularNames variable is behaving very similar to newLine but with one difference. Following
 * the new line character after every other name the \t (horizontal tabular) character is being
 * implemented to add a tab every other name and if printed will look like:
 * 
 * Stephen
 *      Nelson
 * Jack
 *      Skellington
 * 
 * The other example with noTabs is producing the same result but spliting the string noTabs into
 * an array and iterating through that array with a for loop. and during each iteration, the loop
 * is testing if i % === 0 (if the current index is even) and adding the the element with a new 
 * line and horizontal tab and if the index is odd just the element and a new line will be added
 * to the yesTabs string which should look like this when printed or return
 * 
 * Stephen
 *      Nelson
 * Jack
 *      Skellington
 */

let tabularNames = "Stephen\n\tNelson\nJack\n\tSkellington";

let noTabs = "Stephen Nelson Jack Skellington";
noTabs = noTabs.split(" ");

let yesTabs = "";
for (let i = 0; i < noTabs.length; i++) {
    if (i % 2 === 0) {
        yesTabs += noTabs[i] + "\n\t";
    } else {
        yesTabs += noTabs[i] + "\n";
    }
}


/**
 * NOTE: Template literals were first introduced in 2015 in the monumental ES6 update to JavaScript
 * making strings more versatile and flexible with manipulation. This was done by getting rid of 
 * the (+ " ") approach as seen in the examples above and allowing the literal the ability to retain
 * access to values in outside variables with ${} which is exampled in the next paragraph.
 * 
 * TEMPLATE LITERAL => A string literal has less limitations and requires less characters
 * and are used for string interpolation (using placeholders as substitutions). These placeholders
 * initialized by ${} with the reference of a string or value nested in the curly braces. Intead of
 * using quotation marks like typical strings, the backtick character is used to surround the string
 * and any of the placeholders that the template literal will reference from outside variables.
 */

let template = `This is a template literal`; //basic syntax

/**
 * The example below makes use of the placeholder ${} => which can be used to access values from
 * outside variables. In this situation, the noTabs array is being accessed since in the current
 * control flow, that variable exists as an array of names in the global scale. The printed or 
 * return result should look like:
 * 
 * "My name is Stephen and my favorite claymation character is Jack Skellington"
 */
let template2 = `My name is ${noTabs[0]} and my favorite claymation character is ${noTabs[2]} ${noTabs[3]}`;

/**
 * This example shows how versatile template literals can be when manipulating strings with placeholders.
 * This example shows that template literals can take in non-string values and return them as part
 * of the string literal. Which looks like
 * 
 * "I just won 100 dollars!"
 */

let prize = 100;
let myPrize = `I just won ${prize} dollars!`; // adds the numerical value 100 to the string (type coersion)

/**
 * This last example shows another situation in which type coercion is executed when the template literal
 * accesses a non-string value and in this case the value being accessed is a boolean value (true);
 * 
 * When logged to the console, the string will look like => "All too true"
 */

let bool = true;
let boolCoercion = `All too ${bool}`;