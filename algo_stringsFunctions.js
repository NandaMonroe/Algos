var smallerStringA1 = 'abcd';
var smallerStringB1 = 'efg';
var expected = 'efgabcd';

var smallerStringA2 = 'sunnyside up eggs';
var smallerStringB2 = 'biscuits and gravy';
var expected = 'sunnyside up eggsbiscuits and gravy';

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */

function combineSmallerStringFirst(smallerStringA3,smallerStringB3) {
    var combinedString = ""
    if (smallerStringA3.length <= smallerStringB3.length){
        combinedString = smallerStringA3 + smallerStringB3;
    }
    else {
        combinedString = smallerStringB3 + smallerStringA3;
    }
    return combinedString;
}
console.log(combineSmallerStringFirst("Stephen", "Danielle"))



/*****************************************************************/

var stringToRepeat1 = 'Birria Tacos';
var numberToRepeat1 = 5;
var repeatedExpected =
'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos';

var stringToRepeat2 = 'margherita pizza';
var numberToRepeat2 = 2;
var repeatedExpected = 'margherita pizzamargherita pizza';

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */

function stringRepeat(stringToRepeat3, numberToRepeat3) {
    var repeatedExpected3 = "";
    for (i = 0; i < numberToRepeat3; i++){
        repeatedExpected3 = repeatedExpected3 + stringToRepeat3;
    }
    return repeatedExpected3;
}
console.log(stringRepeat("Birria Tacos", 5))


/*****************************************************************/

var wordArray = [
'shawn',
'jim',
'tyler',
'heidi',
'john',
'alfredo',
'michael',
];

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 *    How are we keeping track of the longest word?
 */

function findLongestWord(wordArray) {
    var longestWord = "";
    for (i = 0; i < wordArray.length; i++){
        if (wordArray[i].length >= longestWord.length){
            longestWord = wordArray[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord(wordArray))

