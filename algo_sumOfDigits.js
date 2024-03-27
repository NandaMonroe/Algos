/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num5 = 1183;
const expected5 = 4;

const num6 = 369369;
const expected6 = 9;


/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {

    if (!num) return null;
    //* nmmbers < 10 by default have one digit
    if (num < 10) return num;
    
    //* convert int to string to make it iterable 
    num = num.toString()
    let result = 0;
    for (digit of num) {
        result += parseInt(digit)
    }
        
    //* recursion
    return (result < 10) ? result : sumToOneDigit(result);

}

console.log("The sum of " + num1 + " is: " + sumToOneDigit(num1));
console.log("The sum of " + num2 + " is: " + sumToOneDigit(num2));
console.log("The sum of " + num3 + " is: " + sumToOneDigit(num3));
console.log("The sum of " + num5 + " is: " + sumToOneDigit(num5));
console.log("The sum of " + num6 + " is: " + sumToOneDigit(num6));

/*****************************************************************************/