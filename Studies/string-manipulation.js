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
 * like the newWords variable so that each word is properly operated on. On line 163, firstCharAtWord
 * is being initialized as an array that string2 has been split by the spaces. Line 166 loops through 
 * that array and uses charAt().toUpperCase like newWords, but instead of using concat() simply
 * adds with the addition operator followed by the rest of the word with the first character sliced off.
 * Lastly on line 173, firstCharAtWord is joined back into a string with spaces between each added element
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
 * ESCAPE CHARACTERS => Escape characters are typically classified as regular expressions 
 * and are represented by a character that isn't in its literal form. There are many escape
 * characters with their own behavior but a few that will be discussed are as follows:
 * 
 * 1) \n => creates a newline in a string
 * 2) \' and \" => denotes that these are used as punctuation instead of 
 *  initializing a string value
 * 3) \b => adds a backspace to a string
 * 4) \t => adds a horizontal tabular to a string (used well with newline(\n))
 */

/**
 * TEMPLATE LITERAL => A string literal that has less limitations and requires less characters
 * and are used for string interpolation (using placeholders as substitutions). These placeholders
 * initialized by ${} with the reference of a sring or value nested in the curly braces.
 */